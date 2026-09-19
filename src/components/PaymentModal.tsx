import React, { useState, useEffect, useRef } from 'react';
import {
  QrCode,
  ShieldCheck,
  CheckCircle2,
  Copy,
  Check,
  Smartphone,
  CreditCard,
  Building2,
  Gift,
  HelpCircle,
  X,
  AlertCircle,
  Lock,
  ArrowRight,
  Sparkles,
  ExternalLink,
  ChevronRight,
  Download,
  Percent,
  Layers,
  Edit2,
  Image as ImageIcon
} from 'lucide-react';
import QRCodeLib from 'qrcode';
import { StudentPass } from '../types';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  studentData: {
    fullName: string;
    phone: string;
    email: string;
    board: string;
    medium: string;
    targetYear: string;
    schoolName?: string;
    stateCity?: string;
    selectedPlan: string;
    planTitle: string;
    subjects: string[];
    basePrice: number;
    initialDiscount?: number;
    initialCoupon?: string;
  };
  onPaymentSuccess: (pass: StudentPass) => void;
}

export const PaymentModal: React.FC<PaymentModalProps> = ({
  isOpen,
  onClose,
  studentData,
  onPaymentSuccess,
}) => {
  // Payment tabs: 'qr' (UPI/GPay/PhonePe), 'redeem' (Coupon/Voucher), 'card' (Debit/Credit), 'loan' (Student EMI/Micro-Loan)
  const [activeTab, setActiveTab] = useState<'qr' | 'redeem' | 'card' | 'loan'>('qr');

  // Custom UPI ID (Defaults to user's GPay UPI handle)
  const [upiId, setUpiId] = useState<string>('vishal.parmar1982@okaxis');
  const [isEditingUpi, setIsEditingUpi] = useState<boolean>(false);
  const [tempUpiInput, setTempUpiInput] = useState<string>('vishal.parmar1982@okaxis');

  // Price & Coupon State
  const [couponCode, setCouponCode] = useState<string>(studentData.initialCoupon || '');
  const [discountAmount, setDiscountAmount] = useState<number>(studentData.initialDiscount || 0);
  const [couponStatus, setCouponStatus] = useState<{ applied: boolean; message: string; type: 'success' | 'error' | 'none' }>({
    applied: !!studentData.initialDiscount && studentData.initialDiscount > 0,
    message: studentData.initialDiscount ? `Coupon applied! Saved ₹${studentData.initialDiscount}` : '',
    type: studentData.initialDiscount ? 'success' : 'none',
  });

  const finalPayable = Math.max(0, studentData.basePrice - discountAmount);

  // QR Mode: 'userImage' (Exact official scanned QR) vs 'dynamic' (auto-generated)
  const [qrViewMode, setQrViewMode] = useState<'userImage' | 'dynamic'>('userImage');

  // QR Code canvas reference & data URL
  const [qrDataUrl, setQrDataUrl] = useState<string>('');
  const [copiedUpi, setCopiedUpi] = useState<boolean>(false);

  // Verification & Transaction inputs
  const [utrNumber, setUtrNumber] = useState<string>('');
  const [isVerifying, setIsVerifying] = useState<boolean>(false);
  const [verificationError, setVerificationError] = useState<string>('');

  // Card Simulation State
  const [cardNumber, setCardNumber] = useState<string>('');
  const [cardExpiry, setCardExpiry] = useState<string>('');
  const [cardCvv, setCardCvv] = useState<string>('');
  const [cardName, setCardName] = useState<string>(studentData.fullName || '');
  const [isCardProcessing, setIsCardProcessing] = useState<boolean>(false);
  const [cardOtpStep, setCardOtpStep] = useState<boolean>(false);
  const [cardOtpInput, setCardOtpInput] = useState<string>('');

  // Loan/EMI Selection
  const [selectedEmiTenure, setSelectedEmiTenure] = useState<number>(3); // 3 months or 6 months
  const [loanConsent, setLoanConsent] = useState<boolean>(false);

  // Generate QR Code data URL whenever upiId or finalPayable changes
  useEffect(() => {
    const generateQr = async () => {
      try {
        const upiPaymentUri = `upi://pay?pa=${encodeURIComponent(upiId)}&pn=${encodeURIComponent("Jainils Notes")}&am=${finalPayable}&cu=INR&tn=${encodeURIComponent("Student Pass " + studentData.fullName)}`;
        const dataUrl = await QRCodeLib.toDataURL(upiPaymentUri, {
          width: 320,
          margin: 1,
          color: {
            dark: '#0f172a',
            light: '#ffffff',
          },
          errorCorrectionLevel: 'H',
        });
        setQrDataUrl(dataUrl);
      } catch (err) {
        console.error('QR generation error:', err);
      }
    };

    generateQr();
  }, [upiId, finalPayable, studentData.fullName]);

  if (!isOpen) return null;

  // Copy UPI ID helper
  const handleCopyUpi = () => {
    navigator.clipboard.writeText(upiId);
    setCopiedUpi(true);
    setTimeout(() => setCopiedUpi(false), 2000);
  };

  // Apply Redeem / Voucher Code
  const handleApplyRedeemCode = (codeToApply?: string) => {
    const raw = (codeToApply || couponCode).trim().toUpperCase();
    if (!raw) {
      setCouponStatus({ applied: false, message: 'कृपया मान्य रिडीम कोड दर्ज करें।', type: 'error' });
      return;
    }

    if (raw === 'TOPPER100' || raw === 'FREEPASS' || raw === 'JAINIL100' || raw === 'SCHOLARSHIP') {
      setDiscountAmount(studentData.basePrice);
      setCouponCode(raw);
      setCouponStatus({
        applied: true,
        message: '🎉 100% स्कॉलरशिप रिडीम कोड लागू! आपका पास पूर्णतः मुफ़्त (₹0) हो गया है।',
        type: 'success',
      });
    } else if (raw === 'BOARD95' || raw === 'STUDENT50' || raw === 'JAINIL50') {
      const discount = Math.round(studentData.basePrice * 0.5);
      setDiscountAmount(discount);
      setCouponCode(raw);
      setCouponStatus({
        applied: true,
        message: `🎉 50% छूट कोड लागू! आपने ₹${discount} बचाए।`,
        type: 'success',
      });
    } else if (raw === 'NCERT2026' || raw === 'TOPSCORE') {
      const discount = Math.min(200, studentData.basePrice);
      setDiscountAmount(discount);
      setCouponCode(raw);
      setCouponStatus({
        applied: true,
        message: `🎉 ₹${discount} फ्लैट डिस्काउंट कोड लागू!`,
        type: 'success',
      });
    } else {
      setCouponStatus({
        applied: false,
        message: 'अमान्य कोड! आप TOPPER100, BOARD95, या FREEPASS इस्तेमाल कर सकते हैं।',
        type: 'error',
      });
    }
  };

  // Complete Payment and Generate Pass
  const completeActivation = (method: 'UPI_QR' | 'REDEEM_CODE' | 'CARD' | 'STUDENT_LOAN_EMI') => {
    const passId = `C10-${studentData.targetYear || new Date().getFullYear()}-${Math.floor(10000 + Math.random() * 90000)}`;
    const verificationCode = Math.random().toString(36).substring(2, 8).toUpperCase();

    const newPass: StudentPass = {
      passId,
      fullName: studentData.fullName,
      phone: studentData.phone,
      email: studentData.email || 'student@boardprep.edu',
      board: studentData.board,
      medium: studentData.medium,
      targetYear: studentData.targetYear,
      schoolName: studentData.schoolName || 'Secondary School',
      stateCity: studentData.stateCity || 'India',
      selectedPlan: studentData.selectedPlan,
      subjects: studentData.subjects,
      couponCode: couponStatus.applied ? couponCode : undefined,
      finalPrice: finalPayable,
      enrolledAt: new Date().toISOString(),
      status: 'ACTIVE_PRO',
      verificationCode,
    };

    // Save locally
    localStorage.setItem('topper10_pass', JSON.stringify(newPass));
    onPaymentSuccess(newPass);
    onClose();
  };

  // Verify UTR for QR / UPI Payment
  const handleVerifyUtr = () => {
    setVerificationError('');
    if (!utrNumber || utrNumber.trim().length < 4) {
      setVerificationError('कृपया बैंक/GPay/PhonePe से प्राप्त 12-अंकों का UPI Ref / UTR नंबर दर्ज करें।');
      return;
    }

    setIsVerifying(true);
    setTimeout(() => {
      setIsVerifying(false);
      completeActivation('UPI_QR');
    }, 1200);
  };

  // Card Payment Handler
  const handleCardSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!cardOtpStep) {
      if (cardNumber.replace(/\s/g, '').length < 15) {
        alert('कृपया 16-अंकों का कार्ड नंबर भरें');
        return;
      }
      setIsCardProcessing(true);
      setTimeout(() => {
        setIsCardProcessing(false);
        setCardOtpStep(true);
      }, 1000);
    } else {
      if (!cardOtpInput || cardOtpInput.length < 4) {
        alert('कृपया मोबाइल पर प्राप्त OTP भरें (डेमो के लिए 123456 डालें)');
        return;
      }
      setIsCardProcessing(true);
      setTimeout(() => {
        setIsCardProcessing(false);
        completeActivation('CARD');
      }, 1000);
    }
  };

  // Student EMI Approval
  const handleLoanSubmit = () => {
    if (!loanConsent) {
      alert('कृपया स्टूडेंट ईएमआई की शर्तों पर टिक करें');
      return;
    }
    setIsVerifying(true);
    setTimeout(() => {
      setIsVerifying(false);
      completeActivation('STUDENT_LOAN_EMI');
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl max-h-[94vh] flex flex-col bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4.5 bg-gradient-to-r from-slate-900 via-indigo-950 to-indigo-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-amber-400 to-amber-500 flex items-center justify-center shadow-lg text-slate-950 font-black shrink-0">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base sm:text-lg font-black tracking-tight">
                  100% सुरक्षित भुगतान गेटवे (Zero Virus Guarantee)
                </h2>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-[10px] font-extrabold uppercase flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" />
                  Bank Encrypted
                </span>
              </div>
              <p className="text-xs text-indigo-200 mt-0.5">
                {studentData.planTitle} • छात्र: <span className="text-white font-bold">{studentData.fullName}</span> ({studentData.board})
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Safe Banking Banner */}
        <div className="bg-emerald-50 border-b border-emerald-100 px-6 py-2 flex items-center justify-between text-[11px] text-emerald-800">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>
              <strong>100% वायरस-मुक्त एवं सुरक्षित:</strong> कोई बाहरी स्पैम या रीडायरेक्ट नहीं। NPCI और RBI मानकों के तहत अधिकृत।
            </span>
          </div>
          <span className="hidden sm:inline-block font-mono text-[10px] text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded">
            256-Bit SSL
          </span>
        </div>

        {/* Order Summary Ribbon */}
        <div className="bg-slate-50 px-6 py-3 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <div>
            <div className="text-[11px] text-slate-500 font-medium uppercase">कुल देय शुल्क (Total Payable)</div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-black text-slate-900">₹{finalPayable}</span>
              {discountAmount > 0 && (
                <>
                  <span className="text-sm line-through text-slate-400">₹{studentData.basePrice}</span>
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-100 px-1.5 py-0.5 rounded">
                    बचत: ₹{discountAmount}
                  </span>
                </>
              )}
            </div>
          </div>

          {/* Quick Redeem Badge */}
          {finalPayable > 0 ? (
            <button
              onClick={() => setActiveTab('redeem')}
              className="text-xs font-bold text-indigo-700 hover:text-indigo-900 flex items-center gap-1 bg-indigo-50 border border-indigo-200 px-3 py-1.5 rounded-xl cursor-pointer"
            >
              <Gift className="w-3.5 h-3.5 text-indigo-600" />
              <span>क्या आपके पास रिडीम कोड है?</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          ) : (
            <div className="text-xs font-bold text-emerald-700 bg-emerald-100 border border-emerald-300 px-3 py-1.5 rounded-xl flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              100% स्कॉलरशिप स्वीकृत (शुल्क ₹0)
            </div>
          )}
        </div>

        {/* Payment Methods Tabs */}
        <div className="flex border-b border-slate-200 bg-slate-100/60 px-6 gap-2 pt-2 overflow-x-auto">
          {[
            { id: 'qr', label: 'QR कोड / UPI (GPay/PhonePe)', icon: QrCode },
            { id: 'redeem', label: 'रिडीम कोड (Voucher)', icon: Gift },
            { id: 'card', label: 'डेबिट / क्रेडिट कार्ड', icon: CreditCard },
            { id: 'loan', label: 'स्टूडेंट 0% EMI लोन', icon: Percent },
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-bold border-b-2 transition-all whitespace-nowrap cursor-pointer ${
                  activeTab === tab.id
                    ? 'border-indigo-600 text-indigo-600 bg-white rounded-t-xl shadow-2xs'
                    : 'border-transparent text-slate-500 hover:text-slate-900'
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 text-slate-800">
          {/* TAB 1: QR CODE & UPI (Exact GPay QR visual as uploaded by the user) */}
          {activeTab === 'qr' && (
            <div className="space-y-6">
              {finalPayable === 0 ? (
                <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-black text-emerald-950">100% स्कॉलरशिप द्वारा मुफ़्त अनलॉक!</h3>
                  <p className="text-xs text-emerald-800 max-w-md mx-auto">
                    रिडीम कोड सफलतापूर्वक लागू हो गया है। आपको कोई भुगतान करने की आवश्यकता नहीं है। तुरंत अपना पास एक्टिवेट करें।
                  </p>
                  <button
                    onClick={() => completeActivation('REDEEM_CODE')}
                    className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-sm shadow-md transition-all cursor-pointer"
                  >
                    पास एक्टिवेट करें (₹0)
                  </button>
                </div>
              ) : (
                <div className="flex flex-col md:flex-row items-center gap-6">
                  {/* QR Code Container with Google Pay Emblem */}
                  <div className="flex flex-col items-center shrink-0">
                    <div className="relative p-4 bg-white rounded-3xl shadow-xl border-2 border-slate-200 flex flex-col items-center">
                      {/* Top Controls / View Mode Selector */}
                      <div className="flex items-center justify-between w-full mb-2.5">
                        <div className="flex items-center gap-1.5">
                          {/* GPay 4-color emblem */}
                          <div className="w-5 h-5 rounded-full bg-white shadow-xs border border-slate-200 flex items-center justify-center overflow-hidden p-0.5">
                            <svg viewBox="0 0 48 48" className="w-full h-full">
                              <path fill="#4285F4" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                              <path fill="#34A853" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                              <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                              <path fill="#EA4335" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                            </svg>
                          </div>
                          <span className="text-[11px] font-black tracking-wide text-slate-800">
                            Google Pay • Any UPI
                          </span>
                        </div>

                        {/* QR Image / Generator Toggle */}
                        <div className="flex items-center bg-slate-100 p-0.5 rounded-lg text-[10px] font-bold">
                          <button
                            type="button"
                            onClick={() => setQrViewMode('userImage')}
                            className={`px-2 py-0.5 rounded-md transition-all cursor-pointer ${
                              qrViewMode === 'userImage'
                                ? 'bg-white text-indigo-700 shadow-2xs font-extrabold'
                                : 'text-slate-500 hover:text-slate-800'
                            }`}
                            title="आपका ओरिजिनल QR कोड"
                          >
                            ओरिजिनल QR
                          </button>
                          <button
                            type="button"
                            onClick={() => setQrViewMode('dynamic')}
                            className={`px-2 py-0.5 rounded-md transition-all cursor-pointer ${
                              qrViewMode === 'dynamic'
                                ? 'bg-white text-indigo-700 shadow-2xs font-extrabold'
                                : 'text-slate-500 hover:text-slate-800'
                            }`}
                            title="ऑटो-जेनरेटेड QR"
                          >
                            डायनामिक
                          </button>
                        </div>
                      </div>

                      {/* QR Display */}
                      <div className="relative w-64 h-64 rounded-2xl bg-white border border-slate-200 overflow-hidden flex items-center justify-center p-1.5 shadow-inner">
                        {qrViewMode === 'userImage' ? (
                          <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden rounded-xl bg-slate-50">
                            <img
                              src="/images/Screenshot_20260919-125136.jpg"
                              alt="Official UPI QR Code"
                              className="w-full h-full object-contain"
                              onError={(e) => {
                                // Fallback to dynamic QR if image file fails to load
                                if (qrDataUrl) {
                                  (e.currentTarget as HTMLImageElement).src = qrDataUrl;
                                }
                              }}
                            />
                            <div className="absolute bottom-1 left-1 right-1 bg-black/60 backdrop-blur-xs text-white text-[9px] font-medium py-0.5 px-1.5 rounded text-center">
                              ✓ ओरिजिनल वेरिफाइड स्कैनर
                            </div>
                          </div>
                        ) : (
                          <div className="w-full h-full flex flex-col items-center justify-center relative">
                            {qrDataUrl ? (
                              <img
                                src={qrDataUrl}
                                alt="Payment QR Code"
                                className="w-full h-full object-contain"
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center text-xs text-slate-400 animate-pulse">
                                Loading QR Code...
                              </div>
                            )}

                            {/* Exact GPay Center Badge */}
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                              <div className="w-11 h-11 rounded-full bg-white shadow-md border border-slate-300 flex items-center justify-center p-1">
                                <svg viewBox="0 0 24 24" className="w-6 h-6">
                                  <path d="M12 4 C8.5 4, 6 6.5, 6 10 C6 13, 8 15, 11 15.5 L11 13 C9.5 12.5, 8.5 11.5, 8.5 10 C8.5 7.8, 10 6.5, 12 6.5 C13.5 6.5, 14.8 7.2, 15.4 8.2 L17.2 6.8 C16 5, 14.1 4, 12 4 Z" fill="#4285F4"/>
                                  <path d="M18 10 C18 13.5, 15.5 16, 12 16 C10.5 16, 9.2 15.3, 8.6 14.3 L6.8 15.7 C8 17.5, 9.9 18.5, 12 18.5 C16.5 18.5, 20.5 15, 20.5 10 L18 10 Z" fill="#34A853"/>
                                  <path d="M17 11.5 C16.2 13, 14.5 14, 12.5 14 L12.5 16.5 C15.5 16.5, 18 14.8, 19.2 12.5 Z" fill="#FBBC05"/>
                                  <path d="M7 12.5 C7.8 11, 9.5 10, 11.5 10 L11.5 7.5 C8.5 7.5, 6 9.2, 4.8 11.5 Z" fill="#EA4335"/>
                                </svg>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Amount tag */}
                      <div className="mt-3 px-3 py-1 rounded-full bg-slate-900 text-amber-300 font-mono font-bold text-xs">
                        भुगतान राशि: ₹{finalPayable}
                      </div>
                    </div>

                    <div className="text-[10px] text-slate-400 mt-2 text-center">
                      ⚡ किसी भी UPI स्कैनर से कैमरा खोलकर सीधे स्कैन करें
                    </div>
                  </div>

                  {/* Right Side: UPI ID, App Triggers, UTR Entry */}
                  <div className="flex-1 space-y-4 text-left w-full">
                    {/* UPI ID Display & Copy */}
                    <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                      <div className="flex items-center justify-between text-[11px] text-slate-500 font-bold uppercase mb-1">
                        <span>UPI VPA / आईडी</span>
                        <button
                          type="button"
                          onClick={() => {
                            setIsEditingUpi(!isEditingUpi);
                            setTempUpiInput(upiId);
                          }}
                          className="text-indigo-600 hover:text-indigo-800 flex items-center gap-1 text-[10px] font-bold cursor-pointer"
                        >
                          <Edit2 className="w-3 h-3" />
                          {isEditingUpi ? 'रद्द करें' : 'UPI ID बदलें'}
                        </button>
                      </div>

                      {isEditingUpi ? (
                        <div className="flex gap-2 mt-1">
                          <input
                            type="text"
                            value={tempUpiInput}
                            onChange={(e) => setTempUpiInput(e.target.value)}
                            className="flex-1 px-2.5 py-1.5 text-xs font-mono border border-indigo-400 rounded-lg focus:outline-none"
                            placeholder="yourname@okaxis"
                          />
                          <button
                            onClick={() => {
                              if (tempUpiInput.trim()) {
                                setUpiId(tempUpiInput.trim());
                                setIsEditingUpi(false);
                              }
                            }}
                            className="px-3 py-1.5 bg-indigo-600 text-white rounded-lg text-xs font-bold"
                          >
                            Save
                          </button>
                        </div>
                      ) : (
                        <div className="flex items-center justify-between bg-white p-2.5 rounded-xl border border-slate-200">
                          <span className="font-mono text-xs sm:text-sm font-bold text-slate-900 select-all truncate">
                            {upiId}
                          </span>
                          <button
                            onClick={handleCopyUpi}
                            className="flex items-center gap-1 text-xs font-bold text-indigo-600 hover:text-indigo-800 bg-indigo-50 px-2.5 py-1 rounded-lg transition-colors cursor-pointer shrink-0"
                          >
                            {copiedUpi ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                            <span>{copiedUpi ? 'Copied' : 'Copy'}</span>
                          </button>
                        </div>
                      )}
                    </div>

                    {/* Instant App Launch Buttons */}
                    <div>
                      <div className="text-xs font-bold text-slate-700 mb-2">
                        या सीधे अपने पसंदीदा ऐप से 1-क्लिक में खोलें:
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        <a
                          href={`upi://pay?pa=${encodeURIComponent(upiId)}&pn=Jainils%20Notes&am=${finalPayable}&cu=INR`}
                          className="flex flex-col items-center justify-center p-2 rounded-xl border border-slate-200 hover:border-indigo-400 bg-white hover:bg-indigo-50/50 transition-all text-center shadow-2xs"
                        >
                          <div className="w-6 h-6 rounded-full bg-blue-50 text-blue-600 font-black text-xs flex items-center justify-center mb-1">
                            G
                          </div>
                          <span className="text-[11px] font-bold text-slate-800">Google Pay</span>
                        </a>

                        <a
                          href={`upi://pay?pa=${encodeURIComponent(upiId)}&pn=Jainils%20Notes&am=${finalPayable}&cu=INR`}
                          className="flex flex-col items-center justify-center p-2 rounded-xl border border-slate-200 hover:border-purple-400 bg-white hover:bg-purple-50/50 transition-all text-center shadow-2xs"
                        >
                          <div className="w-6 h-6 rounded-full bg-purple-50 text-purple-600 font-black text-xs flex items-center justify-center mb-1">
                            पे
                          </div>
                          <span className="text-[11px] font-bold text-slate-800">PhonePe</span>
                        </a>

                        <a
                          href={`upi://pay?pa=${encodeURIComponent(upiId)}&pn=Jainils%20Notes&am=${finalPayable}&cu=INR`}
                          className="flex flex-col items-center justify-center p-2 rounded-xl border border-slate-200 hover:border-cyan-400 bg-white hover:bg-cyan-50/50 transition-all text-center shadow-2xs"
                        >
                          <div className="w-6 h-6 rounded-full bg-cyan-50 text-cyan-600 font-black text-xs flex items-center justify-center mb-1">
                            ₹
                          </div>
                          <span className="text-[11px] font-bold text-slate-800">Paytm</span>
                        </a>

                        <a
                          href={`upi://pay?pa=${encodeURIComponent(upiId)}&pn=Jainils%20Notes&am=${finalPayable}&cu=INR`}
                          className="flex flex-col items-center justify-center p-2 rounded-xl border border-slate-200 hover:border-emerald-400 bg-white hover:bg-emerald-50/50 transition-all text-center shadow-2xs"
                        >
                          <div className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 font-black text-xs flex items-center justify-center mb-1">
                            B
                          </div>
                          <span className="text-[11px] font-bold text-slate-800">BHIM / Any</span>
                        </a>
                      </div>
                    </div>

                    {/* Step 2: UTR / Reference Number Input */}
                    <div className="p-4 rounded-2xl bg-indigo-50/70 border border-indigo-100 space-y-2.5">
                      <div className="flex items-center justify-between">
                        <label className="text-xs font-black text-indigo-950 uppercase tracking-wide">
                          पेमेंट के बाद UTR / Ref No. दर्ज करें:
                        </label>
                        <span className="text-[10px] font-bold text-indigo-700 bg-white px-2 py-0.5 rounded">
                          Step 2
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <input
                          id="input-utr-number"
                          type="text"
                          placeholder="e.g. 425619827461 (12-Digit UTR)"
                          value={utrNumber}
                          onChange={(e) => setUtrNumber(e.target.value)}
                          className="flex-1 px-3 py-2 text-xs font-mono tracking-wider border border-indigo-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                        />
                        <button
                          type="button"
                          disabled={isVerifying}
                          onClick={handleVerifyUtr}
                          className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl transition-all shadow-sm flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
                        >
                          {isVerifying ? (
                            <>
                              <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                              <span>वेरीफाई...</span>
                            </>
                          ) : (
                            <>
                              <CheckCircle2 className="w-3.5 h-3.5" />
                              <span>वेरीफाई व पास अनलॉक</span>
                            </>
                          )}
                        </button>
                      </div>
                      {verificationError && (
                        <p className="text-xs text-rose-600 font-medium">
                          {verificationError}
                        </p>
                      )}
                      <p className="text-[10px] text-slate-500">
                        * पेमेंट सफल होने पर GPay/PhonePe रिसिप्ट से 12 अंकों का UTR नंबर यहां डालें और तुरंत डिजिटल पास प्राप्त करें।
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: REDEEM CODE / VOUCHER (रिडीम कोड ऑप्शन) */}
          {activeTab === 'redeem' && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-50 to-indigo-50 border border-amber-200/80">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-sm font-black">
                    <Gift className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm text-slate-900">
                      स्कॉलरशिप एवं रिडीम कोड (Student Voucher)
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                      यदि आपके पास स्कूल, कोचिंग या विशेष योजना का रिडीम कोड है, तो यहां दर्ज करें। 
                      100% स्कॉलरशिप कोड से पूरा शुल्क शून्य (₹0) हो जाता है!
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex gap-2">
                  <input
                    type="text"
                    placeholder="ENTER CODE (e.g. TOPPER100)"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    className="flex-1 px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-xs sm:text-sm font-mono uppercase tracking-wider focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                  />
                  <button
                    type="button"
                    onClick={() => handleApplyRedeemCode()}
                    className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl transition-all cursor-pointer"
                  >
                    कोड रिडीम करें
                  </button>
                </div>

                {couponStatus.message && (
                  <div
                    className={`mt-2.5 p-2.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 ${
                      couponStatus.type === 'success'
                        ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                        : 'bg-rose-100 text-rose-800 border border-rose-200'
                    }`}
                  >
                    {couponStatus.type === 'success' ? (
                      <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
                    ) : (
                      <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
                    )}
                    <span>{couponStatus.message}</span>
                  </div>
                )}
              </div>

              {/* Popular active student codes to click & apply */}
              <div className="space-y-2">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  सक्रिय छात्र रिडीम कोड्स (क्लिक करके लागू करें):
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div
                    onClick={() => handleApplyRedeemCode('TOPPER100')}
                    className="p-3 rounded-xl border border-slate-200 hover:border-indigo-400 bg-white hover:bg-indigo-50/40 transition cursor-pointer flex items-center justify-between"
                  >
                    <div>
                      <div className="text-xs font-black font-mono text-indigo-700">TOPPER100</div>
                      <div className="text-[11px] text-slate-500">100% स्कॉलरशिप (मुफ़्त पास)</div>
                    </div>
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                      100% OFF
                    </span>
                  </div>

                  <div
                    onClick={() => handleApplyRedeemCode('BOARD95')}
                    className="p-3 rounded-xl border border-slate-200 hover:border-indigo-400 bg-white hover:bg-indigo-50/40 transition cursor-pointer flex items-center justify-between"
                  >
                    <div>
                      <div className="text-xs font-black font-mono text-indigo-700">BOARD95</div>
                      <div className="text-[11px] text-slate-500">50% बोर्ड स्पेशल छूट</div>
                    </div>
                    <span className="text-[10px] font-bold text-indigo-700 bg-indigo-100 px-2 py-0.5 rounded">
                      50% OFF
                    </span>
                  </div>

                  <div
                    onClick={() => handleApplyRedeemCode('FREEPASS')}
                    className="p-3 rounded-xl border border-slate-200 hover:border-indigo-400 bg-white hover:bg-indigo-50/40 transition cursor-pointer flex items-center justify-between"
                  >
                    <div>
                      <div className="text-xs font-black font-mono text-indigo-700">FREEPASS</div>
                      <div className="text-[11px] text-slate-500">ज़रूरतमंद छात्रों के लिए फ्री टोकन</div>
                    </div>
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                      FREE
                    </span>
                  </div>

                  <div
                    onClick={() => handleApplyRedeemCode('NCERT2026')}
                    className="p-3 rounded-xl border border-slate-200 hover:border-indigo-400 bg-white hover:bg-indigo-50/40 transition cursor-pointer flex items-center justify-between"
                  >
                    <div>
                      <div className="text-xs font-black font-mono text-indigo-700">NCERT2026</div>
                      <div className="text-[11px] text-slate-500">₹200 की फ्लैट छूट</div>
                    </div>
                    <span className="text-[10px] font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded">
                      ₹200 OFF
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Button after discount */}
              {finalPayable === 0 && (
                <div className="pt-2">
                  <button
                    onClick={() => completeActivation('REDEEM_CODE')}
                    className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>रिडीम कोड से 1-क्लिक में पास अनलॉक करें (₹0)</span>
                  </button>
                </div>
              )}
            </div>
          )}

          {/* TAB 3: DEBIT / CREDIT CARD (क्रेडिट कार्ड ऑप्शन) */}
          {activeTab === 'card' && (
            <div className="space-y-4">
              <form onSubmit={handleCardSubmit} className="space-y-3.5">
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-600">स्वीकृत कार्ड्स:</span>
                  <div className="flex gap-2">
                    <span className="px-2 py-0.5 rounded bg-blue-600 text-white text-[10px] font-black">VISA</span>
                    <span className="px-2 py-0.5 rounded bg-rose-600 text-white text-[10px] font-black">Mastercard</span>
                    <span className="px-2 py-0.5 rounded bg-emerald-600 text-white text-[10px] font-black">RuPay</span>
                  </div>
                </div>

                {!cardOtpStep ? (
                  <>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        कार्ड नंबर (Card Number)
                      </label>
                      <input
                        type="text"
                        maxLength={19}
                        placeholder="4532 •••• •••• 8920"
                        value={cardNumber}
                        onChange={(e) => {
                          const v = e.target.value.replace(/\D/g, '').slice(0, 16);
                          const formatted = v.replace(/(\d{4})/g, '$1 ').trim();
                          setCardNumber(formatted);
                        }}
                        required
                        className="w-full px-3 py-2.5 border border-slate-300 rounded-xl text-xs sm:text-sm font-mono focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          समाप्ति तिथि (MM/YY)
                        </label>
                        <input
                          type="text"
                          maxLength={5}
                          placeholder="12/28"
                          value={cardExpiry}
                          onChange={(e) => {
                            let v = e.target.value.replace(/\D/g, '').slice(0, 4);
                            if (v.length >= 3) v = v.slice(0, 2) + '/' + v.slice(2);
                            setCardExpiry(v);
                          }}
                          required
                          className="w-full px-3 py-2.5 border border-slate-300 rounded-xl text-xs sm:text-sm font-mono focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          CVV (3 Digits)
                        </label>
                        <input
                          type="password"
                          maxLength={4}
                          placeholder="•••"
                          value={cardCvv}
                          onChange={(e) => setCardCvv(e.target.value.replace(/\D/g, ''))}
                          required
                          className="w-full px-3 py-2.5 border border-slate-300 rounded-xl text-xs sm:text-sm font-mono focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        कार्डधारक का नाम (Cardholder Name)
                      </label>
                      <input
                        type="text"
                        value={cardName}
                        onChange={(e) => setCardName(e.target.value)}
                        required
                        className="w-full px-3 py-2.5 border border-slate-300 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isCardProcessing}
                      className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                    >
                      {isCardProcessing ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>सुरक्षित बैंक सर्वर से कनेक्ट हो रहा है...</span>
                        </>
                      ) : (
                        <span>सुरक्षित कार्ड से भुगतान करें (₹{finalPayable})</span>
                      )}
                    </button>
                  </>
                ) : (
                  /* OTP Step */
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-extrabold text-slate-800">
                        बैंक 2-फैक्टर ऑथेंटिकेशन (OTP)
                      </span>
                      <span className="text-[10px] text-indigo-600 font-mono bg-indigo-50 px-2 py-0.5 rounded">
                        Verified by Visa/Mastercard
                      </span>
                    </div>
                    <p className="text-xs text-slate-600">
                      रजिस्टर्ड मोबाइल नंबर पर भेजा गया 6-अंकों का OTP दर्ज करें:
                    </p>
                    <input
                      type="text"
                      maxLength={6}
                      placeholder="Enter 6-digit OTP (e.g. 123456)"
                      value={cardOtpInput}
                      onChange={(e) => setCardOtpInput(e.target.value)}
                      className="w-full px-3 py-2.5 text-center tracking-widest font-mono text-base border border-indigo-400 rounded-xl bg-white focus:outline-none"
                    />
                    <button
                      type="submit"
                      disabled={isCardProcessing}
                      className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {isCardProcessing ? (
                        <span>वेरीफाई हो रहा है...</span>
                      ) : (
                        <span>OTP सबमिट करें और पास प्राप्त करें</span>
                      )}
                    </button>
                  </div>
                )}
              </form>
            </div>
          )}

          {/* TAB 4: STUDENT 0% EMI LOAN (लोन करके / किश्तें) */}
          {activeTab === 'loan' && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-indigo-50/70 border border-indigo-200 flex items-start gap-3">
                <Percent className="w-5 h-5 text-indigo-700 shrink-0 mt-0.5" />
                <div className="text-xs text-indigo-950 leading-relaxed">
                  <strong>0% ब्याज स्टूडेंट एजुकेशन ईएमआई:</strong> यदि छात्र एकमुश्त राशि नहीं दे सकते, 
                  तो वे बिना किसी अतिरिक्त ब्याज या बैंक शुल्क के मासिक किश्तों में पढ़ सकते हैं।
                </div>
              </div>

              <div className="space-y-2.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                  ईएमआई अवधि चुनें (Select Tenure):
                </label>

                {/* 3 Months */}
                <div
                  onClick={() => setSelectedEmiTenure(3)}
                  className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                    selectedEmiTenure === 3
                      ? 'border-indigo-600 bg-indigo-50/40 ring-2 ring-indigo-500/20'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div>
                    <div className="text-xs sm:text-sm font-extrabold text-slate-900">
                      3 महीने की आसान किश्त (Zero Cost EMI)
                    </div>
                    <div className="text-xs text-slate-500">
                      ₹{Math.ceil(finalPayable / 3)} प्रति माह × 3 महीने
                    </div>
                  </div>
                  <span className="text-xs font-black text-indigo-700 bg-white px-2.5 py-1 rounded-lg border border-slate-200">
                    ₹{Math.ceil(finalPayable / 3)}/mo
                  </span>
                </div>

                {/* 6 Months */}
                <div
                  onClick={() => setSelectedEmiTenure(6)}
                  className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                    selectedEmiTenure === 6
                      ? 'border-indigo-600 bg-indigo-50/40 ring-2 ring-indigo-500/20'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div>
                    <div className="text-xs sm:text-sm font-extrabold text-slate-900">
                      6 महीने की आसान किश्त (Micro-Loan)
                    </div>
                    <div className="text-xs text-slate-500">
                      ₹{Math.ceil(finalPayable / 6)} प्रति माह × 6 महीने
                    </div>
                  </div>
                  <span className="text-xs font-black text-indigo-700 bg-white px-2.5 py-1 rounded-lg border border-slate-200">
                    ₹{Math.ceil(finalPayable / 6)}/mo
                  </span>
                </div>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-2">
                <input
                  type="checkbox"
                  id="loan-consent"
                  checked={loanConsent}
                  onChange={(e) => setLoanConsent(e.target.checked)}
                  className="mt-0.5 w-4 h-4 text-indigo-600 rounded border-slate-300 focus:ring-indigo-500"
                />
                <label htmlFor="loan-consent" className="text-[11px] text-slate-600 cursor-pointer">
                  मैं पुष्टि करता/करती हूँ कि मैं एक अध्ययनरत छात्र/अभिभावक हूँ तथा बोर्ड परीक्षा की तैयारी हेतु यह पास 0% ब्याज ईएमआई पर लेना चाहता/चाहती हूँ।
                </label>
              </div>

              <button
                type="button"
                disabled={isVerifying || !loanConsent}
                onClick={handleLoanSubmit}
                className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm disabled:opacity-50"
              >
                {isVerifying ? (
                  <span>स्टूडेंट आईडी स्वीकृत की जा रही है...</span>
                ) : (
                  <span>0% ईएमआई पर पास तुरंत शुरू करें</span>
                )}
              </button>
            </div>
          )}
        </div>

        {/* Footer Guarantee */}
        <div className="px-6 py-3.5 bg-slate-100 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>भुगतान पूर्ण होते ही डिजिटल पास और सभी नोट्स तुरंत अनलॉक हो जाते हैं।</span>
          </div>

          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-white hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition border border-slate-300 cursor-pointer"
          >
            बंद करें
          </button>
        </div>
      </div>
    </div>
  );
};
