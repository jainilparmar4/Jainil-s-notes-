import React from 'react';
import { BookOpen, Sparkles, Award, FileText, CheckCircle2, BrainCircuit, Printer, PenTool, Video, Play, Smartphone, QrCode } from 'lucide-react';
import { StudentPass } from '../types';

interface HeaderProps {
  activeTab: 'notes' | 'handwritten' | 'formulas' | 'flashcards' | 'quiz' | 'ai-doubt' | 'video' | 'form';
  setActiveTab: (tab: 'notes' | 'handwritten' | 'formulas' | 'flashcards' | 'quiz' | 'ai-doubt' | 'video' | 'form') => void;
  studentPass: StudentPass | null;
  onOpenForm: () => void;
  onPrintNotes: () => void;
  onOpenPlayStoreGuide?: () => void;
  onOpenPayment?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  studentPass,
  onOpenForm,
  onPrintNotes,
  onOpenPlayStoreGuide,
  onOpenPayment,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-slate-200 shadow-xs no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Brand Logo & Class 10 Badge */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('notes')}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-600 text-white flex items-center justify-center shadow-sm">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-slate-900 tracking-tight text-lg">Jainil's Notes</span>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-300">
                  Classes 9 • 10 • 11 • 12
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium hidden sm:block">
                9th to 12th Notes, Board Question Answers & Topper Tips
              </p>
            </div>
          </div>

          {/* Navigation Items */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-100/80 p-1 rounded-xl border border-slate-200/60">
            <button
              id="nav-notes"
              onClick={() => setActiveTab('notes')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'notes'
                  ? 'bg-white text-indigo-700 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              Notes Library
            </button>

            <button
              id="nav-handwritten"
              onClick={() => setActiveTab('handwritten')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'handwritten'
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'text-amber-900 hover:text-amber-950 hover:bg-amber-100/60'
              }`}
            >
              <PenTool className="w-3.5 h-3.5 text-amber-500" />
              Toppers Handwriting Notes
            </button>

            <button
              id="nav-formulas"
              onClick={() => setActiveTab('formulas')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'formulas'
                  ? 'bg-white text-indigo-700 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              Formula Sheets
            </button>

            <button
              id="nav-flashcards"
              onClick={() => setActiveTab('flashcards')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'flashcards'
                  ? 'bg-white text-indigo-700 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              Flashcard Drills
            </button>

            <button
              id="nav-quiz"
              onClick={() => setActiveTab('quiz')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'quiz'
                  ? 'bg-white text-indigo-700 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
              }`}
            >
              <Award className="w-3.5 h-3.5" />
              Board Quiz
            </button>

            <button
              id="nav-ai-doubt"
              onClick={() => setActiveTab('ai-doubt')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'ai-doubt'
                  ? 'bg-white text-indigo-700 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
              }`}
            >
              <BrainCircuit className="w-3.5 h-3.5 text-violet-600" />
              Topper AI Doubt Solver
            </button>

            <button
              id="nav-video"
              onClick={() => setActiveTab('video')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'video'
                  ? 'bg-gradient-to-r from-amber-500 to-rose-500 text-white shadow-xs'
                  : 'text-rose-900 hover:text-rose-950 hover:bg-rose-100/60'
              }`}
            >
              <Video className="w-3.5 h-3.5 text-rose-500" />
              AI Video Studio
            </button>
          </nav>

          {/* Right Action: Registration Form or Student Pass */}
          <div className="flex items-center gap-2">
            {onOpenPlayStoreGuide && (
              <button
                id="btn-play-store-guide"
                onClick={onOpenPlayStoreGuide}
                title="Google Play Store Publishing Guide"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-amber-300 border border-slate-700/80 text-xs font-bold transition-all shadow-xs cursor-pointer shrink-0"
              >
                <Play className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span className="hidden lg:inline">Play Store Guide</span>
                <span className="lg:hidden text-[10px] bg-amber-400/20 text-amber-300 px-1 py-0.5 rounded">APK</span>
              </button>
            )}

            <button
              id="btn-print-notes"
              onClick={onPrintNotes}
              title="Print Current Notes"
              className="p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-lg border border-slate-200/80 transition-colors hidden sm:flex items-center justify-center"
            >
              <Printer className="w-4 h-4" />
            </button>

            {onOpenPayment && !studentPass && (
              <button
                id="btn-header-pay-qr"
                onClick={onOpenPayment}
                title="Google Pay / UPI QR Code & Redeem Code Payment"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 text-xs font-black transition-all shadow-xs cursor-pointer shrink-0"
              >
                <QrCode className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Pay via QR</span>
                <span className="sm:hidden">Pay</span>
              </button>
            )}

            {studentPass ? (
              <button
                id="btn-view-pass"
                onClick={() => setActiveTab('form')}
                className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-50 border border-emerald-300/80 text-emerald-800 hover:bg-emerald-100/70 transition-all text-xs font-semibold shadow-2xs"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <div className="text-left">
                  <div className="leading-tight font-bold">{studentPass.fullName.split(' ')[0]}'s Pass</div>
                  <div className="text-[10px] text-emerald-700 font-mono">{studentPass.passId}</div>
                </div>
              </button>
            ) : (
              <button
                id="btn-open-enroll-form"
                onClick={onOpenForm}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-xs font-bold hover:from-indigo-700 hover:to-violet-700 shadow-sm transition-all flex items-center gap-1.5"
              >
                <span>Enrollment & Access Form</span>
                <span className="bg-white/20 text-[10px] px-1.5 py-0.5 rounded-full uppercase tracking-wider font-extrabold">
                  FREE / PRO
                </span>
              </button>
            )}
          </div>
        </div>

        {/* Mobile Navigation Row */}
        <div className="flex md:hidden items-center justify-between py-2 border-t border-slate-100 overflow-x-auto gap-2 no-scrollbar">
          <button
            onClick={() => setActiveTab('notes')}
            className={`px-2.5 py-1 text-xs whitespace-nowrap rounded-md font-medium ${
              activeTab === 'notes' ? 'bg-indigo-600 text-white' : 'text-slate-600'
            }`}
          >
            Notes
          </button>
          <button
            onClick={() => setActiveTab('handwritten')}
            className={`px-2.5 py-1 text-xs whitespace-nowrap rounded-md font-medium ${
              activeTab === 'handwritten' ? 'bg-amber-600 text-white' : 'text-amber-800'
            }`}
          >
            ✍️ Handwriting
          </button>
          <button
            onClick={() => setActiveTab('formulas')}
            className={`px-2.5 py-1 text-xs whitespace-nowrap rounded-md font-medium ${
              activeTab === 'formulas' ? 'bg-indigo-600 text-white' : 'text-slate-600'
            }`}
          >
            Formulas
          </button>
          <button
            onClick={() => setActiveTab('flashcards')}
            className={`px-2.5 py-1 text-xs whitespace-nowrap rounded-md font-medium ${
              activeTab === 'flashcards' ? 'bg-indigo-600 text-white' : 'text-slate-600'
            }`}
          >
            Flashcards
          </button>
          <button
            onClick={() => setActiveTab('quiz')}
            className={`px-2.5 py-1 text-xs whitespace-nowrap rounded-md font-medium ${
              activeTab === 'quiz' ? 'bg-indigo-600 text-white' : 'text-slate-600'
            }`}
          >
            Quiz
          </button>
          <button
            onClick={() => setActiveTab('ai-doubt')}
            className={`px-2.5 py-1 text-xs whitespace-nowrap rounded-md font-medium ${
              activeTab === 'ai-doubt' ? 'bg-indigo-600 text-white' : 'text-slate-600'
            }`}
          >
            AI Doubt
          </button>
          <button
            onClick={() => setActiveTab('video')}
            className={`px-2.5 py-1 text-xs whitespace-nowrap rounded-md font-bold ${
              activeTab === 'video' ? 'bg-gradient-to-r from-amber-500 to-rose-500 text-white' : 'text-rose-700'
            }`}
          >
            🎥 AI Video
          </button>
          <button
            onClick={() => setActiveTab('form')}
            className={`px-2.5 py-1 text-xs whitespace-nowrap rounded-md font-medium ${
              activeTab === 'form' ? 'bg-indigo-600 text-white' : 'text-slate-600'
            }`}
          >
            Form & Pass
          </button>
          {onOpenPlayStoreGuide && (
            <button
              onClick={onOpenPlayStoreGuide}
              className="px-2.5 py-1 text-xs whitespace-nowrap rounded-md font-bold bg-slate-900 text-amber-300 flex items-center gap-1 shrink-0"
            >
              <Play className="w-3 h-3 fill-amber-400 text-amber-400" />
              Play Store
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
