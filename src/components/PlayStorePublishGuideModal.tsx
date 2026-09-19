import React, { useState } from 'react';
import {
  Smartphone,
  ExternalLink,
  CheckCircle2,
  Copy,
  Check,
  Download,
  ShieldCheck,
  Sparkles,
  HelpCircle,
  X,
  FileCode,
  ArrowRight,
  Play,
  Layers,
  Globe
} from 'lucide-react';

interface PlayStorePublishGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PlayStorePublishGuideModal: React.FC<PlayStorePublishGuideModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<'steps' | 'metadata' | 'twa' | 'faq'>('steps');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const appTitle = "Jainil's Notes - Class 9 to 12 Notes & AI Videos";
  const shortDesc = "Class 9th, 10th, 11th & 12th CBSE Topper Notes, AI Animated Video Lessons & Formulas.";
  const fullDesc = `Jainil's Notes is the ultimate all-in-one smart study companion for CBSE and State Board students of Classes 9, 10, 11, and 12!

⭐ KEY FEATURES:
• 70+ AI 3D Animated Video Lessons: Watch electric circuits, ray optics, chemical reactions, Bohr atomic shells, and math curves with live voiceover and subtitles!
• Topper Handwritten Notes: Authentic handwritten memory aids, mnemonics, and high-yield highlights.
• NCERT Core & Formula Cheat Sheets: Instant formula recall for Physics, Chemistry, and Mathematics.
• CBSE Examiner Trap Alerts: Avoid common board exam blunders and lose zero step marks.
• Board PYQs with Model Answers: 10-year previous year questions with step-by-step topper scoring strategies.
• Multi-Language Audio: Listen to lessons in Hindi/Hinglish with speed control.
• 100% Offline PWA Mode: Study anytime, anywhere without buffering.

Class Coverage:
- Class 10: Science, Mathematics, Social Science, English
- Class 12: Physics, Chemistry, Mathematics, Biology
- Class 11: Physics, Chemistry, Mathematics
- Class 9: Science, Mathematics

Empower your board exam preparation and score 95%+ with clarity and confidence!`;

  const assetLinksJson = JSON.stringify(
    [
      {
        relation: ["delegate_permission/common.handle_all_urls"],
        target: {
          namespace: "android_app",
          package_name: "com.jainilnotes.app",
          sha256_cert_fingerprints: [
            "YOUR_PLAY_STORE_SHA256_FINGERPRINT_HERE"
          ]
        }
      }
    ],
    null,
    2
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="px-6 py-5 bg-gradient-to-r from-indigo-900 via-indigo-800 to-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-amber-400 to-amber-500 flex items-center justify-center shadow-lg text-slate-950 font-black">
              <Play className="w-6 h-6 fill-current" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg sm:text-xl font-black tracking-tight">
                  Google Play Store Publishing Master Guide
                </h2>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-[10px] font-extrabold uppercase">
                  TWA / PWA Ready
                </span>
              </div>
              <p className="text-xs text-indigo-200 mt-0.5">
                इस वेब ऐप को Google Play Store पर Android App (.aab) बनाकर लाइव करने की पूरी विधि (हिंदी + इंग्लिश)
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-slate-200 bg-slate-50 px-6 gap-2 pt-2">
          {[
            { id: 'steps', label: '5-Step Publish Roadmap', icon: Layers },
            { id: 'metadata', label: 'Play Store Listing Text', icon: Copy },
            { id: 'twa', label: 'PWABuilder & Digital Asset Links', icon: Globe },
            { id: 'faq', label: 'Help & FAQs', icon: HelpCircle },
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-bold border-b-2 transition-all cursor-pointer ${
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
          {/* TAB 1: 5-STEP PUBLISH ROADMAP */}
          {activeTab === 'steps' && (
            <div className="space-y-6">
              <div className="p-4 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-indigo-950 leading-relaxed">
                  <strong>खुशखबरी!</strong> यह एप्लिकेशन एक <strong>Progressive Web App (PWA)</strong> है। 
                  Google आधिकारिक तौर पर <strong>Trusted Web Activity (TWA)</strong> तकनीक का समर्थन करता है, 
                  जिससे आप बिना जावा (Java) या कोटलिन (Kotlin) कोडिंग किए मात्र <strong>PWABuilder.com</strong> की मदद से 
                  5 मिनट में <strong>Android App Bundle (.aab)</strong> बनाकर Google Play Store पर पब्लिश कर सकते हैं!
                </div>
              </div>

              {/* 5 Step Timeline */}
              <div className="space-y-4">
                {/* Step 1 */}
                <div className="flex items-start gap-4 p-4 rounded-2xl border border-slate-200 bg-white hover:border-indigo-300 transition-all shadow-2xs">
                  <div className="w-9 h-9 rounded-xl bg-indigo-600 text-white font-extrabold flex items-center justify-center shrink-0">
                    1
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-extrabold text-sm sm:text-base text-slate-900">
                        Step 1: PWA कॉन्फ़िगरेशन सत्यापित करें (App is Already Configured!)
                      </h4>
                      <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Done & Ready
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      आपकी ऐप में <code className="bg-slate-100 px-1 py-0.5 rounded text-indigo-700">manifest.json</code>, 
                      512x512 ऐप आइकन, स्टैंडअलोन डिस्प्ले और थीम कलर्स पहले से जोड़ दिए गए हैं।
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex items-start gap-4 p-4 rounded-2xl border-2 border-indigo-500/40 bg-indigo-50/30 shadow-sm">
                  <div className="w-9 h-9 rounded-xl bg-amber-500 text-slate-950 font-black flex items-center justify-center shrink-0">
                    2
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <h4 className="font-extrabold text-sm sm:text-base text-indigo-950">
                        Step 2: PWABuilder से 1-Click में Android App Bundle (.aab) बनाएं
                      </h4>
                      <a
                        href="https://www.pwabuilder.com"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1 bg-indigo-600 text-white text-xs font-bold rounded-lg hover:bg-indigo-700 transition"
                      >
                        Open PWABuilder.com <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                    <ol className="text-xs text-slate-700 mt-2 space-y-1.5 list-decimal pl-4">
                      <li>
                        <strong>PWABuilder.com</strong> खोलें और अपनी ऐप का लाइव URL (Production URL) पेस्ट करके <strong>"Start"</strong> दबाएं।
                      </li>
                      <li>
                        स्कोर 100/100 आएगा। इसके बाद <strong>"Package for Stores"</strong> पर क्लिक करें।
                      </li>
                      <li>
                        <strong>Android</strong> कार्ड के अंदर <strong>"Generate Package"</strong> चुनें।
                      </li>
                      <li>
                        Package Name (उदा. <code className="bg-slate-200 px-1 rounded">com.jainilnotes.app</code>) चुनें और <strong>"Generate"</strong> पर क्लिक करें।
                      </li>
                      <li>
                        आपको एक <strong>.zip</strong> फाइल मिलेगी जिसमें Google Play Store के लिए साइन की हुई <strong>.aab (Android App Bundle)</strong> फाइल होगी!
                      </li>
                    </ol>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex items-start gap-4 p-4 rounded-2xl border border-slate-200 bg-white hover:border-indigo-300 transition-all shadow-2xs">
                  <div className="w-9 h-9 rounded-xl bg-slate-900 text-white font-extrabold flex items-center justify-center shrink-0">
                    3
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <h4 className="font-extrabold text-sm sm:text-base text-slate-900">
                        Step 3: Google Play Console डेवलपर अकाउंट खोलें
                      </h4>
                      <a
                        href="https://play.google.com/console"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-800 text-white text-xs font-bold rounded-lg hover:bg-slate-900 transition"
                      >
                        Play Console <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Google Play Store पर ऐप्स पब्लिश करने के लिए एक बार (One-time) $25 (लगभग ₹2,100) का डेवलपर रजिस्ट्रेशन शुल्क लगता है।
                      साइन इन करने के बाद <strong>"Create app"</strong> बटन दबाएं।
                    </p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex items-start gap-4 p-4 rounded-2xl border border-slate-200 bg-white hover:border-indigo-300 transition-all shadow-2xs">
                  <div className="w-9 h-9 rounded-xl bg-slate-900 text-white font-extrabold flex items-center justify-center shrink-0">
                    4
                  </div>
                  <div className="flex-1">
                    <h4 className="font-extrabold text-sm sm:text-base text-slate-900">
                      Step 4: ऐप का शीर्षक, विवरण और स्क्रीनशॉट भरें
                    </h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Play Console में स्टोर लिस्टिंग पेज पर ऐप का टाइटल, शॉर्ट डिस्क्रिप्शन और फुल डिस्क्रिप्शन डालें। 
                      (हमने अगले टैब <strong>"Play Store Listing Text"</strong> में आपके लिए रेडी-टू-कॉपी विवरण तैयार कर रखा है!)
                    </p>
                    <div className="mt-2 flex gap-2">
                      <button
                        onClick={() => setActiveTab('metadata')}
                        className="text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1 cursor-pointer"
                      >
                        कॉपी करने के लिए यहाँ क्लिक करें <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Step 5 */}
                <div className="flex items-start gap-4 p-4 rounded-2xl border border-slate-200 bg-white hover:border-indigo-300 transition-all shadow-2xs">
                  <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white font-extrabold flex items-center justify-center shrink-0">
                    5
                  </div>
                  <div className="flex-1">
                    <h4 className="font-extrabold text-sm sm:text-base text-slate-900">
                      Step 5: .aab फाइल अपलोड करें और "Rollout to Production" करें
                    </h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Play Console के बाएं मेन्यू में <strong>"Production"</strong> &gt; <strong>"Create new release"</strong> पर जाएं।
                      PWABuilder से मिली <strong>.aab</strong> फाइल को ड्रैग एंड ड्रॉप करें।
                      रिव्यू करें और <strong>"Start rollout to Production"</strong> दबाएं। 
                      गूगल 24-72 घंटों में आपकी ऐप को रिव्यू करके Google Play Store पर लाइव कर देगा!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: STORE LISTING METADATA */}
          {activeTab === 'metadata' && (
            <div className="space-y-4">
              <p className="text-xs text-slate-500">
                Google Play Console के <strong>Main store listing</strong> फॉर्म में इन जानकारियों को सीधे कॉपी करके पेस्ट करें:
              </p>

              {/* Title */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold text-slate-700 uppercase tracking-wider">
                    App Name / Title (Max 30 chars)
                  </span>
                  <button
                    onClick={() => handleCopy(appTitle, 'title')}
                    className="flex items-center gap-1 text-xs font-bold text-indigo-600 hover:text-indigo-800 cursor-pointer"
                  >
                    {copiedKey === 'title' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    {copiedKey === 'title' ? 'Copied!' : 'Copy'}
                  </button>
                </div>
                <div className="font-bold text-sm text-slate-900 bg-white p-2.5 rounded-xl border border-slate-200 select-all">
                  {appTitle}
                </div>
              </div>

              {/* Short Description */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold text-slate-700 uppercase tracking-wider">
                    Short Description (Max 80 chars)
                  </span>
                  <button
                    onClick={() => handleCopy(shortDesc, 'shortDesc')}
                    className="flex items-center gap-1 text-xs font-bold text-indigo-600 hover:text-indigo-800 cursor-pointer"
                  >
                    {copiedKey === 'shortDesc' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    {copiedKey === 'shortDesc' ? 'Copied!' : 'Copy'}
                  </button>
                </div>
                <div className="text-xs font-medium text-slate-800 bg-white p-2.5 rounded-xl border border-slate-200 select-all">
                  {shortDesc}
                </div>
              </div>

              {/* Full Description */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold text-slate-700 uppercase tracking-wider">
                    Full Description (Max 4000 chars)
                  </span>
                  <button
                    onClick={() => handleCopy(fullDesc, 'fullDesc')}
                    className="flex items-center gap-1 text-xs font-bold text-indigo-600 hover:text-indigo-800 cursor-pointer"
                  >
                    {copiedKey === 'fullDesc' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    {copiedKey === 'fullDesc' ? 'Copied!' : 'Copy Full Description'}
                  </button>
                </div>
                <textarea
                  readOnly
                  rows={8}
                  value={fullDesc}
                  className="w-full text-xs font-sans text-slate-800 bg-white p-3 rounded-xl border border-slate-200 focus:outline-none resize-none select-all"
                />
              </div>

              {/* Graphic Assets Checklist */}
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200">
                <h4 className="font-extrabold text-xs text-amber-900 flex items-center gap-1.5">
                  <Smartphone className="w-4 h-4 text-amber-600" /> Required Graphic Assets for Play Store:
                </h4>
                <ul className="text-xs text-amber-900 mt-2 space-y-1 list-disc pl-4">
                  <li><strong>App Icon:</strong> 512 x 512 px PNG (32-bit with alpha channel).</li>
                  <li><strong>Feature Graphic:</strong> 1024 x 500 px JPG or PNG (Banner at top of store listing).</li>
                  <li><strong>Phone Screenshots:</strong> कम से कम 2 स्क्रीनशॉट (Recommended 4-6) रेशियो 16:9 या 9:16.</li>
                </ul>
              </div>
            </div>
          )}

          {/* TAB 3: TWA & ASSET LINKS */}
          {activeTab === 'twa' && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <h4 className="font-extrabold text-sm text-slate-900 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-600" />
                  Digital Asset Links (assetlinks.json)
                </h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  जब कोई यूजर Play Store से आपकी ऐप इंस्टॉल करता है, तो Android सिस्टम यह पुष्टि करता है कि ऐप और वेबसाइट एक ही डेवलपर की है।
                  इसके लिए आपकी वेबसाइट पर <code className="bg-slate-200 px-1 rounded text-indigo-700">/.well-known/assetlinks.json</code> फाइल होनी चाहिए।
                </p>

                <div className="mt-3 relative">
                  <div className="flex items-center justify-between bg-slate-900 text-slate-200 px-3 py-1.5 rounded-t-xl text-xs font-mono">
                    <span>public/.well-known/assetlinks.json</span>
                    <button
                      onClick={() => handleCopy(assetLinksJson, 'assetlinks')}
                      className="flex items-center gap-1 text-xs text-indigo-300 hover:text-white cursor-pointer"
                    >
                      {copiedKey === 'assetlinks' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      {copiedKey === 'assetlinks' ? 'Copied' : 'Copy JSON'}
                    </button>
                  </div>
                  <pre className="p-3 bg-slate-950 text-emerald-400 rounded-b-xl text-xs font-mono overflow-x-auto">
                    {assetLinksJson}
                  </pre>
                </div>
              </div>

              {/* Bubblewrap CLI Alternate Method */}
              <div className="p-4 rounded-2xl bg-indigo-50 border border-indigo-200">
                <h4 className="font-extrabold text-sm text-indigo-950 flex items-center gap-2">
                  <FileCode className="w-5 h-5 text-indigo-700" />
                  वैकल्पिक डेवलपर तरीका: Bubblewrap CLI (Google Official)
                </h4>
                <p className="text-xs text-indigo-900 mt-1 leading-relaxed">
                  यदि आप कमांड लाइन पसंद करते हैं, तो Google का आधिकारिक टूल इस्तेमाल कर सकते हैं:
                </p>
                <pre className="mt-2 p-2.5 bg-slate-900 text-indigo-200 rounded-xl text-xs font-mono overflow-x-auto">
                  npm install -g @bubblewrap/cli<br />
                  bubblewrap init --manifest="https://your-domain.com/manifest.json"<br />
                  bubblewrap build
                </pre>
                <p className="text-[11px] text-indigo-700 mt-1.5">
                  यह कमांड सीधे आपके कंप्यूटर पर signed release-bundle.aab जनरेट कर देती है।
                </p>
              </div>
            </div>
          )}

          {/* TAB 4: FAQs */}
          {activeTab === 'faq' && (
            <div className="space-y-3">
              {[
                {
                  q: 'क्या ऐप अपडेट करने पर बार-बार Play Store पर नई फाइल अपलोड करनी होगी?',
                  a: 'नहीं! यही Trusted Web Activity (TWA) और PWA का सबसे बड़ा जादू है। जब भी आप ऐप में नया चैप्टर, नोट्स या वीडियो अपडेट करेंगे, वह Play Store से डाउनलोड किए गए सभी यूजर्स के फोन में बिना किसी ऐप अपडेट के तुरंत लाइव दिखाई देगा!',
                },
                {
                  q: 'क्या इसके लिए Android Studio या Java/Kotlin की जरूरत है?',
                  a: 'बिल्कुल नहीं! PWABuilder.com क्लाउड पर अपने आप Android प्रोजेक्ट बनाकर साइन की हुई .aab फाइल तैयार कर देता है।',
                },
                {
                  q: 'Google Play Store का रिव्यू होने में कितना समय लगता है?',
                  a: 'पहली बार जब आप नया डेवलपर अकाउंट बनाकर ऐप सबमिट करते हैं, तो Google 2 से 4 कार्यदिवसों (Business days) में ऐप को अप्रूव करके दुनिया भर के लिए लाइव कर देता है।',
                },
                {
                  q: 'क्या ऐप फोन में फुलस्क्रीन (बिना ब्राउजर यूआरएल बार के) खुलेगी?',
                  a: 'हाँ! हमने manifest.json में "display": "standalone" सेट कर रखा है। जब यूजर Play Store से इसे इंस्टॉल करेंगे, तो यह बिना किसी Chrome/ब्राउज़र बार के बिल्कुल नेटिव ऐप की तरह खुलेगी।',
                },
              ].map((faq, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <h4 className="font-extrabold text-xs sm:text-sm text-slate-900 flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0 text-xs font-black">
                      Q
                    </span>
                    {faq.q}
                  </h4>
                  <p className="text-xs text-slate-600 mt-2 pl-7 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-slate-100 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            PWA Manifest & 512px Icons Verified for Play Store
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <a
              href="https://www.pwabuilder.com"
              target="_blank"
              rel="noreferrer"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold transition shadow-sm"
            >
              Start on PWABuilder.com <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-white hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition border border-slate-300 cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
