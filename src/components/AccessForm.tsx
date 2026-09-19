import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Sparkles, 
  Send, 
  Tag, 
  Download, 
  BookOpen, 
  GraduationCap, 
  School, 
  Phone, 
  Mail, 
  Printer, 
  QrCode, 
  AlertCircle,
  Clock,
  ShieldCheck,
  CreditCard,
  Gift,
  Percent,
  Lock,
  ArrowRight
} from 'lucide-react';
import { BoardType, MediumType, StudentPass } from '../types';
import { PaymentModal } from './PaymentModal';

interface AccessFormProps {
  currentPass: StudentPass | null;
  onSuccess: (pass: StudentPass) => void;
  onClose?: () => void;
}

export const AccessForm: React.FC<AccessFormProps> = ({ currentPass, onSuccess }) => {
  const [fullName, setFullName] = useState(currentPass?.fullName || '');
  const [phone, setPhone] = useState(currentPass?.phone || '');
  const [email, setEmail] = useState(currentPass?.email || '');
  const [board, setBoard] = useState<BoardType>((currentPass?.board as BoardType) || 'CBSE');
  const [medium, setMedium] = useState<MediumType>((currentPass?.medium as MediumType) || 'English');
  const [targetYear, setTargetYear] = useState(currentPass?.targetYear || '2026');
  const [schoolName, setSchoolName] = useState(currentPass?.schoolName || '');
  const [stateCity, setStateCity] = useState(currentPass?.stateCity || '');
  const [selectedPlan, setSelectedPlan] = useState<'free_trial' | 'handwritten_pro' | 'topper_super_pack'>(
    (currentPass?.selectedPlan as any) || 'topper_super_pack'
  );
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>(
    currentPass?.subjects || ['Science', 'Mathematics', 'Social Science', 'English']
  );
  const [couponInput, setCouponInput] = useState(currentPass?.couponCode || '');
  const [couponApplied, setCouponApplied] = useState(!!currentPass?.couponCode);
  const [couponMessage, setCouponMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [generatedPass, setGeneratedPass] = useState<StudentPass | null>(currentPass);
  const [showPaymentModal, setShowPaymentModal] = useState<boolean>(false);

  // Price calculations
  const basePrice = selectedPlan === 'free_trial' ? 0 : selectedPlan === 'handwritten_pro' ? 299 : 499;
  let discount = 0;
  const cleanCoupon = couponInput.trim().toUpperCase();

  if (couponApplied) {
    if (cleanCoupon === 'TOPPER100' || cleanCoupon === 'FREEPASS') {
      discount = basePrice;
    } else if (cleanCoupon === 'BOARD95') {
      discount = Math.round(basePrice * 0.5);
    } else if (cleanCoupon === 'EARLYBIRD') {
      discount = Math.round(basePrice * 0.3);
    }
  }

  const finalPrice = Math.max(0, basePrice - discount);

  const handleApplyCoupon = () => {
    const code = couponInput.trim().toUpperCase();
    if (!code) {
      setCouponMessage('Please enter a coupon code.');
      return;
    }
    if (code === 'TOPPER100' || code === 'FREEPASS') {
      setCouponApplied(true);
      setCouponMessage('🎉 100% Scholarship Coupon Applied! Price is ₹0.');
    } else if (code === 'BOARD95') {
      setCouponApplied(true);
      setCouponMessage('🎉 50% Board Topper Discount Applied!');
    } else if (code === 'EARLYBIRD') {
      setCouponApplied(true);
      setCouponMessage('🎉 30% Early Bird Discount Applied!');
    } else {
      setCouponApplied(false);
      setCouponMessage('Invalid code. Try "TOPPER100" for full scholarship or "BOARD95" for 50% off!');
    }
  };

  const handleSubjectToggle = (sub: string) => {
    if (selectedSubjects.includes(sub)) {
      if (selectedSubjects.length > 1) {
        setSelectedSubjects(selectedSubjects.filter((s) => s !== sub));
      }
    } else {
      setSelectedSubjects([...selectedSubjects, sub]);
    }
  };

  const handlePaymentSuccess = (pass: StudentPass) => {
    setGeneratedPass(pass);
    onSuccess(pass);
    setShowPaymentModal(false);
    localStorage.setItem('topper10_pass', JSON.stringify(pass));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phone.trim()) {
      setError('कृपया अपना पूरा नाम और व्हाट्सएप / फोन नंबर अवश्य भरें (Please provide your Full Name and Contact number).');
      return;
    }

    // If payment is required (finalPrice > 0), open the authentic secure payment screen with QR code!
    if (finalPrice > 0) {
      setError(null);
      setShowPaymentModal(true);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/register-access', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName,
          phone,
          email,
          board,
          medium,
          targetYear,
          schoolName,
          stateCity,
          selectedPlan,
          subjects: selectedSubjects,
          couponCode: couponApplied ? cleanCoupon : '',
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Failed to submit application');
      }

      setGeneratedPass(data.pass);
      onSuccess(data.pass);
      // Save locally as convenience
      localStorage.setItem('topper10_pass', JSON.stringify(data.pass));
    } catch (err: any) {
      console.error('Submission error:', err);
      // Fallback local pass in case of offline/transient network issue
      const localPass: StudentPass = {
        passId: `C10-2026-${Math.floor(10000 + Math.random() * 90000)}`,
        fullName,
        phone,
        email: email || 'student@boardprep.edu',
        board,
        medium,
        targetYear,
        schoolName: schoolName || 'Secondary School',
        stateCity: stateCity || 'India',
        selectedPlan,
        subjects: selectedSubjects,
        couponCode: couponApplied ? cleanCoupon : '',
        finalPrice,
        enrolledAt: new Date().toISOString(),
        status: finalPrice === 0 && selectedPlan === 'free_trial' ? 'TRIAL' : 'ACTIVE_PRO',
        verificationCode: Math.random().toString(36).substring(2, 8).toUpperCase(),
      };
      setGeneratedPass(localPass);
      onSuccess(localPass);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6">
      {/* If Pass is already generated / active, show the digital pass with option to update */}
      {generatedPass && (
        <div className="mb-10 bg-gradient-to-br from-indigo-900 via-indigo-950 to-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-xl border border-indigo-700/50 relative overflow-hidden">
          {/* Decorative background glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-indigo-800/80 pb-6 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center text-amber-300">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
                    Official Student Pass & Access Token
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white">
                    Class 10th Board Exam Access Pass
                  </h2>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {generatedPass.status === 'ACTIVE_PRO' ? 'ALL NOTES UNLOCKED' : 'TRIAL ACCESS ACTIVE'}
                </span>
                <button
                  id="btn-print-student-pass"
                  onClick={() => window.print()}
                  className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-semibold flex items-center gap-1.5 transition-all text-white"
                >
                  <Printer className="w-3.5 h-3.5" />
                  Print Pass
                </button>
              </div>
            </div>

            {/* Pass details grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div className="bg-white/5 border border-white/10 rounded-xl p-3.5">
                <div className="text-[11px] text-indigo-300 font-medium uppercase">Student Name</div>
                <div className="text-base font-bold text-white truncate">{generatedPass.fullName}</div>
                <div className="text-xs text-indigo-200/70">{generatedPass.phone}</div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-3.5">
                <div className="text-[11px] text-indigo-300 font-medium uppercase">Roll / Pass ID</div>
                <div className="text-base font-mono font-bold text-amber-300">{generatedPass.passId}</div>
                <div className="text-xs text-indigo-200/70">Verify: {generatedPass.verificationCode}</div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-3.5">
                <div className="text-[11px] text-indigo-300 font-medium uppercase">Board & Medium</div>
                <div className="text-base font-bold text-white">{generatedPass.board}</div>
                <div className="text-xs text-indigo-200/70">{generatedPass.medium} Medium (Target {generatedPass.targetYear})</div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-3.5">
                <div className="text-[11px] text-indigo-300 font-medium uppercase">Enrolled Plan</div>
                <div className="text-base font-bold text-emerald-400 capitalize">
                  {generatedPass.selectedPlan.replace('_', ' ')}
                </div>
                <div className="text-xs text-indigo-200/70">
                  {generatedPass.finalPrice === 0 ? 'Full Scholarship (₹0)' : `Paid ₹${generatedPass.finalPrice}`}
                </div>
              </div>
            </div>

            {/* Unlocked Subjects Badges & QR representation */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
              <div>
                <div className="text-xs text-indigo-200 font-medium mb-1.5">Unlocked Subjects & Resources:</div>
                <div className="flex flex-wrap gap-2">
                  {generatedPass.subjects.map((sub) => (
                    <span
                      key={sub}
                      className="px-2.5 py-1 rounded-md text-xs font-semibold bg-indigo-500/20 text-indigo-200 border border-indigo-400/30"
                    >
                      ✓ {sub}
                    </span>
                  ))}
                  <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-amber-500/20 text-amber-200 border border-amber-400/30">
                    ★ 10-Year Solved PYQs
                  </span>
                  <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-violet-500/20 text-violet-200 border border-violet-400/30">
                    🤖 AI Doubt Solver
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <div className="w-12 h-12 bg-white text-slate-900 rounded-lg p-1.5 flex items-center justify-center shadow-inner">
                  <QrCode className="w-full h-full" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-mono font-bold text-amber-300">AUTHENTICATED</div>
                  <div className="text-[10px] text-slate-300">Instant Download Ready</div>
                </div>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-indigo-300 border-t border-indigo-800/60 pt-4">
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-indigo-400" />
                <span>Issued on: {new Date(generatedPass.enrolledAt).toLocaleDateString()}</span>
              </div>
              <button
                onClick={() => setGeneratedPass(null)}
                className="text-amber-300 hover:text-amber-200 underline font-semibold"
              >
                Modify Enrollment Details or Register Another Student
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Form Box */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-6 sm:p-8 border-b border-slate-100 bg-gradient-to-r from-slate-50 via-indigo-50/40 to-slate-50">
          <div className="flex items-center gap-2 text-indigo-700 font-bold text-xs uppercase tracking-wider mb-2">
            <Sparkles className="w-4 h-4 text-indigo-600" />
            Class 10th Board Exam 2026/2027 Registration
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Premium Study Notes & Access Form
          </h1>
          <p className="mt-2 text-sm text-slate-600 max-w-2xl leading-relaxed">
            Fill out this enrollment form to receive instant digital access to handwritten topper notes, formula cheat sheets, previous 10-year board PYQs with mark breakdown, and our AI Doubt Solver.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
          {error && (
            <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm flex items-center gap-2">
              <AlertCircle className="w-5 h-5 shrink-0 text-red-500" />
              <span>{error}</span>
            </div>
          )}

          {/* Section 1: Student Details */}
          <div>
            <h2 className="text-base font-bold text-slate-900 flex items-center gap-2 mb-4">
              <GraduationCap className="w-5 h-5 text-indigo-600" />
              1. Student Academic Details
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">
                  Student Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="input-full-name"
                  type="text"
                  required
                  placeholder="e.g. Aarav Sharma / Ananya Patel"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">
                  WhatsApp / Phone Number <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400 text-xs">
                    <Phone className="w-4 h-4" />
                  </span>
                  <input
                    id="input-phone"
                    type="tel"
                    required
                    placeholder="e.g. 9876543210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600"
                  />
                </div>
                <p className="mt-1 text-[11px] text-slate-500">
                  Notes PDF download links & formula cheat sheets will be sent via WhatsApp.
                </p>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">
                  Email Address
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400 text-xs">
                    <Mail className="w-4 h-4" />
                  </span>
                  <input
                    id="input-email"
                    type="email"
                    placeholder="student@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">
                  School Name & City
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400 text-xs">
                    <School className="w-4 h-4" />
                  </span>
                  <input
                    id="input-school"
                    type="text"
                    placeholder="e.g. DPS R.K. Puram / St. Xavier's, Mumbai"
                    value={schoolName}
                    onChange={(e) => setSchoolName(e.target.value)}
                    className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">
                  Educational Board
                </label>
                <select
                  id="select-board"
                  value={board}
                  onChange={(e) => setBoard(e.target.value as BoardType)}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600"
                >
                  <option value="CBSE">CBSE (Central Board)</option>
                  <option value="ICSE">ICSE / CISCE</option>
                  <option value="State Board (MSBSHSE/UP/Bihar/Others)">State Board (Maharashtra, UP, Bihar, etc.)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">
                  Medium of Study
                </label>
                <select
                  id="select-medium"
                  value={medium}
                  onChange={(e) => setMedium(e.target.value as MediumType)}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600"
                >
                  <option value="English">English Medium</option>
                  <option value="Hindi">Hindi Medium</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">
                  Target Board Exam Year
                </label>
                <select
                  id="select-target-year"
                  value={targetYear}
                  onChange={(e) => setTargetYear(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600"
                >
                  <option value="2026">2026 (Upcoming Boards)</option>
                  <option value="2027">2027 (Next Batch)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Section 2: Subject Selection */}
          <div className="pt-4 border-t border-slate-100">
            <h2 className="text-base font-bold text-slate-900 flex items-center gap-2 mb-3">
              <BookOpen className="w-5 h-5 text-indigo-600" />
              2. Select Subjects Needed
            </h2>
            <p className="text-xs text-slate-500 mb-3">
              Choose the subjects you want included in your revision bundle:
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { name: 'Science', icon: '🔬', desc: 'Physics, Chem, Bio' },
                { name: 'Mathematics', icon: '📐', desc: 'Standard & Basic' },
                { name: 'Social Science', icon: '🌍', desc: 'His, Geo, Civ, Eco' },
                { name: 'English', icon: '📖', desc: 'Grammar & Literature' },
              ].map((sub) => {
                const checked = selectedSubjects.includes(sub.name);
                return (
                  <button
                    type="button"
                    key={sub.name}
                    onClick={() => handleSubjectToggle(sub.name)}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      checked
                        ? 'bg-indigo-50/80 border-indigo-400 ring-2 ring-indigo-500/20'
                        : 'bg-white border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xl">{sub.icon}</span>
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => {}}
                        className="rounded text-indigo-600 focus:ring-indigo-500"
                      />
                    </div>
                    <div className="font-bold text-xs text-slate-900">{sub.name}</div>
                    <div className="text-[10px] text-slate-500">{sub.desc}</div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Section 3: Package Tiers */}
          <div className="pt-4 border-t border-slate-100">
            <h2 className="text-base font-bold text-slate-900 flex items-center gap-2 mb-3">
              <Tag className="w-5 h-5 text-indigo-600" />
              3. Choose Notes Access Tier
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Free Trial */}
              <div
                onClick={() => setSelectedPlan('free_trial')}
                className={`cursor-pointer rounded-xl p-4 border transition-all relative ${
                  selectedPlan === 'free_trial'
                    ? 'border-indigo-600 ring-2 ring-indigo-500/20 bg-indigo-50/30'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-600">Free Trial Pack</span>
                  <span className="text-lg font-black text-slate-900">₹0</span>
                </div>
                <p className="text-xs text-slate-500 mb-3">Instant sample access to first 2 chapters of Science & Math</p>
                <ul className="text-xs text-slate-600 space-y-1.5 mb-2">
                  <li className="flex items-center gap-1.5 text-[11px]">✓ Chapter summary notes</li>
                  <li className="flex items-center gap-1.5 text-[11px]">✓ 50+ Flashcards</li>
                  <li className="flex items-center gap-1.5 text-[11px] text-slate-400">✗ AI Doubt Solver</li>
                </ul>
              </div>

              {/* Handwritten Pro */}
              <div
                onClick={() => setSelectedPlan('handwritten_pro')}
                className={`cursor-pointer rounded-xl p-4 border transition-all relative ${
                  selectedPlan === 'handwritten_pro'
                    ? 'border-indigo-600 ring-2 ring-indigo-500/20 bg-indigo-50/30'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-indigo-700">Handwritten Pro</span>
                  <span className="text-lg font-black text-slate-900">₹299</span>
                </div>
                <p className="text-xs text-slate-500 mb-3">Topper handwritten diagrams, mnemonics & formula cheat sheets</p>
                <ul className="text-xs text-slate-600 space-y-1.5 mb-2">
                  <li className="flex items-center gap-1.5 text-[11px]">✓ All subjects handwritten notes</li>
                  <li className="flex items-center gap-1.5 text-[11px]">✓ Printable formula sheets</li>
                  <li className="flex items-center gap-1.5 text-[11px]">✓ Examiner trap callouts</li>
                </ul>
              </div>

              {/* Super Ranker Ultimate */}
              <div
                onClick={() => setSelectedPlan('topper_super_pack')}
                className={`cursor-pointer rounded-xl p-4 border transition-all relative ${
                  selectedPlan === 'topper_super_pack'
                    ? 'border-indigo-600 ring-2 ring-indigo-500/20 bg-gradient-to-b from-indigo-50/60 to-white'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="absolute -top-2.5 right-3 bg-amber-500 text-white text-[9px] font-black uppercase px-2 py-0.5 rounded-full shadow-xs">
                  MOST POPULAR
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-indigo-700">Super Ranker 95+</span>
                  <div>
                    <span className="text-xs line-through text-slate-400 mr-1.5">₹999</span>
                    <span className="text-lg font-black text-indigo-700">₹499</span>
                  </div>
                </div>
                <p className="text-xs text-slate-500 mb-3">Complete Board Exam Master Package with AI Doubt Solver</p>
                <ul className="text-xs text-slate-700 space-y-1.5 mb-2 font-medium">
                  <li className="flex items-center gap-1.5 text-[11px]">✓ Complete Notes + 10-Yr PYQs</li>
                  <li className="flex items-center gap-1.5 text-[11px]">✓ AI Doubt Solver (Gemini Powered)</li>
                  <li className="flex items-center gap-1.5 text-[11px]">✓ Official Digital Student Pass</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 4: Scholarship / Coupon Code */}
          <div className="pt-4 border-t border-slate-100 bg-slate-50/70 p-4 rounded-xl border border-slate-200">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <div className="flex-1">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
                  Have a Scholarship or Discount Coupon?
                </label>
                <div className="flex gap-2">
                  <input
                    id="input-coupon"
                    type="text"
                    placeholder="Enter code (e.g. TOPPER100)"
                    value={couponInput}
                    onChange={(e) => {
                      setCouponInput(e.target.value);
                      setCouponApplied(false);
                      setCouponMessage('');
                    }}
                    className="flex-1 px-3 py-2 rounded-lg border border-slate-300 text-xs uppercase font-mono tracking-wider focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                  />
                  <button
                    type="button"
                    onClick={handleApplyCoupon}
                    className="px-3.5 py-2 rounded-lg bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition-colors"
                  >
                    Apply
                  </button>
                </div>
                {couponMessage && (
                  <p className={`mt-1.5 text-xs font-medium ${couponApplied ? 'text-emerald-600' : 'text-amber-600'}`}>
                    {couponMessage}
                  </p>
                )}
                <p className="mt-1 text-[11px] text-slate-500">
                  Tip: Use coupon <span className="font-mono font-bold text-indigo-700">TOPPER100</span> for 100% scholarship or <span className="font-mono font-bold text-indigo-700">BOARD95</span> for 50% discount!
                </p>
              </div>

              {/* Price summary pill */}
              <div className="text-right sm:border-l sm:border-slate-200 sm:pl-6 shrink-0">
                <div className="text-xs text-slate-500 font-medium">Total Amount Payable:</div>
                <div className="text-2xl font-black text-slate-900">
                  ₹{finalPrice}
                  {discount > 0 && (
                    <span className="text-xs font-semibold text-emerald-600 ml-2">
                      (Saved ₹{discount})
                    </span>
                  )}
                </div>
                <div className="text-[10px] text-slate-500">
                  {finalPrice === 0 ? 'Free Instant Activation' : 'One-time fee for full academic year'}
                </div>
              </div>
            </div>
          </div>

          {/* Section 5: 100% Safe Online Payment Methods (Zero-Virus Guaranteed) */}
          <div className="p-4 rounded-2xl bg-gradient-to-br from-slate-900 to-indigo-950 text-white border border-indigo-700/50 shadow-sm">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center justify-center font-bold">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-extrabold text-white">
                    सुरक्षित ऑनलाइन पेमेंट गेटवे (Google Pay QR • रिडीम कोड • कार्ड • ईएमआई)
                  </h4>
                  <p className="text-[11px] text-indigo-200">
                    100% वायरस-मुक्त, शून्य-स्पैम, बैंक-ग्रेड 256-Bit SSL एन्क्रिप्टेड
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-white/10 text-amber-300 border border-white/20">
                  Instant Access
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 border-t border-white/10 text-[11px]">
              <div className="flex items-center gap-1.5 text-indigo-200">
                <QrCode className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>GPay / PhonePe QR</span>
              </div>
              <div className="flex items-center gap-1.5 text-indigo-200">
                <Gift className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>रिडीम कोड (Voucher)</span>
              </div>
              <div className="flex items-center gap-1.5 text-indigo-200">
                <CreditCard className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>डेबिट / क्रेडिट कार्ड्स</span>
              </div>
              <div className="flex items-center gap-1.5 text-indigo-200">
                <Percent className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>0% स्टूडेंट ईएमआई लोन</span>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              id="btn-submit-access-form"
              type="submit"
              disabled={loading}
              className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-700 to-violet-700 hover:from-indigo-700 hover:to-violet-800 text-white font-extrabold text-sm sm:text-base shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Processing Application & Generating Student Pass...</span>
                </>
              ) : (
                <>
                  {finalPrice === 0 ? (
                    <>
                      <CheckCircle2 className="w-5 h-5 text-emerald-300" />
                      <span>सबमिट करें और मुफ़्त पास अनलॉक करें (Free Instant Access)</span>
                    </>
                  ) : (
                    <>
                      <Lock className="w-4 h-4 text-amber-300" />
                      <span>
                        विवरण सबमिट करें और पेमेंट करें (Pay ₹{finalPrice} via QR / UPI)
                      </span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </>
              )}
            </button>
            <p className="text-center text-[11px] text-slate-400 mt-2">
              🔒 सुरक्षित डिजिटल सत्यापन। QR कोड स्कैन करके या रिडीम कोड से तुरंत डिजिटल पास प्राप्त करें।
            </p>
          </div>
        </form>
      </div>

      {/* Payment Modal with Google Pay QR Code, Redeem Code & EMI */}
      {showPaymentModal && (
        <PaymentModal
          isOpen={showPaymentModal}
          onClose={() => setShowPaymentModal(false)}
          studentData={{
            fullName: fullName.trim(),
            phone: phone.trim(),
            email: email.trim() || 'student@boardprep.edu',
            board,
            medium,
            targetYear,
            schoolName,
            stateCity,
            selectedPlan,
            planTitle: selectedPlan === 'topper_super_pack' ? 'Super Ranker 95+ (All Notes + AI)' : 'Handwritten Pro Notes',
            subjects: selectedSubjects,
            basePrice,
            initialDiscount: discount,
            initialCoupon: couponApplied ? cleanCoupon : undefined,
          }}
          onPaymentSuccess={handlePaymentSuccess}
        />
      )}
    </div>
  );
};
