import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { NotesViewer } from './components/NotesViewer';
import { TopperHandwrittenStudio } from './components/TopperHandwrittenStudio';
import { AccessForm } from './components/AccessForm';
import { FormulaCheatSheet } from './components/FormulaCheatSheet';
import { FlashcardsViewer } from './components/FlashcardsViewer';
import { PracticeQuiz } from './components/PracticeQuiz';
import { AiDoubtSolver } from './components/AiDoubtSolver';
import { AiVideoGenerator } from './components/AiVideoGenerator';
import { PlayStorePublishGuideModal } from './components/PlayStorePublishGuideModal';
import { PaymentModal } from './components/PaymentModal';
import { StudentPass } from './types';
import { Sparkles, CheckCircle2, Award, BookOpen, ShieldCheck, ArrowRight, PenTool, Video, Play, QrCode } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'notes' | 'handwritten' | 'formulas' | 'flashcards' | 'quiz' | 'ai-doubt' | 'video' | 'form'>('notes');
  const [studentPass, setStudentPass] = useState<StudentPass | null>(null);
  const [selectedHandwrittenChapterId, setSelectedHandwrittenChapterId] = useState<string>('sci-ch1');
  const [selectedVideoChapterId, setSelectedVideoChapterId] = useState<string>('sci-ch1');
  const [isPlayStoreGuideOpen, setIsPlayStoreGuideOpen] = useState<boolean>(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState<boolean>(false);
  const [aiContext, setAiContext] = useState<{ question: string; subject: string; chapter: string }>({
    question: '',
    subject: 'Science',
    chapter: 'General',
  });

  // Load existing student pass if previously registered
  useEffect(() => {
    try {
      const saved = localStorage.getItem('topper10_pass');
      if (saved) {
        setStudentPass(JSON.parse(saved));
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  const handlePassSuccess = (pass: StudentPass) => {
    setStudentPass(pass);
  };

  const handleAskAiFromChapter = (questionText: string, subject: string, chapter: string) => {
    setAiContext({ question: questionText, subject, chapter });
    setActiveTab('ai-doubt');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenHandwrittenStudio = (chapterId: string) => {
    setSelectedHandwrittenChapterId(chapterId);
    setActiveTab('handwritten');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenVideo = (chapterId: string) => {
    setSelectedVideoChapterId(chapterId);
    setActiveTab('video');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col selection:bg-indigo-500 selection:text-white">
      {/* Top Notification Announcement Bar */}
      <div className="bg-gradient-to-r from-indigo-900 via-indigo-800 to-indigo-900 text-white text-xs py-2 px-4 border-b border-indigo-700/50 no-print">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2 justify-center">
            <span className="bg-amber-400 text-indigo-950 font-black px-1.5 py-0.5 rounded text-[10px] uppercase tracking-wider">
              NEW 2026/2027
            </span>
            <span className="font-medium text-indigo-100">
              Class 10th Board Exam Revision Hub & Editable Topper Handwritten Notes are Live!
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[11px] text-indigo-200">
              Use code <strong className="text-amber-300 font-mono">TOPPER100</strong> for 100% scholarship on all subjects!
            </span>
            {!studentPass && (
              <button
                onClick={() => setActiveTab('form')}
                className="underline font-bold text-amber-300 hover:text-amber-200 text-xs flex items-center gap-0.5 cursor-pointer"
              >
                Enroll Now <ArrowRight className="w-3 h-3" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Main App Navigation Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        studentPass={studentPass}
        onOpenForm={() => setActiveTab('form')}
        onPrintNotes={handlePrint}
        onOpenPlayStoreGuide={() => setIsPlayStoreGuideOpen(true)}
        onOpenPayment={() => setIsPaymentModalOpen(true)}
      />

      {/* Hero Welcome Ribbon for New Students (when on notes and not enrolled yet) */}
      {activeTab === 'notes' && !studentPass && (
        <div className="bg-gradient-to-r from-indigo-50 via-white to-violet-50 border-b border-indigo-100/80 py-4 px-4 no-print">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center shrink-0 shadow-2xs">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-sm font-bold text-slate-900">
                  Targeting 95%+ in Class 10th Board Exams?
                </h2>
                <p className="text-xs text-slate-500">
                  Access chapter-wise editable handwritten topper notes, previous 10-year solved PYQs with mark distribution, and formula cheat sheets.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              <button
                onClick={() => setIsPaymentModalOpen(true)}
                className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-black text-xs shadow-xs transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <QrCode className="w-3.5 h-3.5" />
                Pay via QR / GPay
              </button>
              <button
                onClick={() => setActiveTab('video')}
                className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-rose-500 hover:from-amber-600 hover:to-rose-600 text-white font-bold text-xs shadow-xs transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <Video className="w-3.5 h-3.5" />
                🎥 AI Animated Videos
              </button>
              <button
                onClick={() => setActiveTab('handwritten')}
                className="px-3.5 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shadow-xs transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <PenTool className="w-3.5 h-3.5" />
                Edit Handwritten Notes
              </button>
              <button
                onClick={() => setActiveTab('form')}
                className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-xs transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <span>Enrollment Form</span>
                <span className="text-[10px] bg-white/20 px-1.5 py-0.5 rounded">FREE</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Dynamic View Content */}
      <main className="flex-1">
        {activeTab === 'notes' && (
          <NotesViewer
            onOpenForm={() => setActiveTab('form')}
            onAskAi={handleAskAiFromChapter}
            onOpenStudio={handleOpenHandwrittenStudio}
            onOpenVideo={handleOpenVideo}
          />
        )}

        {activeTab === 'handwritten' && (
          <TopperHandwrittenStudio
            initialChapterId={selectedHandwrittenChapterId}
            onOpenAskAi={handleAskAiFromChapter}
          />
        )}

        {activeTab === 'video' && (
          <AiVideoGenerator
            initialChapterId={selectedVideoChapterId}
            onOpenNotes={(chapterId) => {
              setSelectedHandwrittenChapterId(chapterId);
              setActiveTab('notes');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenPlayStoreGuide={() => setIsPlayStoreGuideOpen(true)}
          />
        )}

        {activeTab === 'formulas' && <FormulaCheatSheet />}

        {activeTab === 'flashcards' && <FlashcardsViewer />}

        {activeTab === 'quiz' && <PracticeQuiz />}

        {activeTab === 'ai-doubt' && (
          <AiDoubtSolver
            initialQuestion={aiContext.question}
            initialSubject={aiContext.subject}
            initialChapter={aiContext.chapter}
          />
        )}

        {activeTab === 'form' && (
          <AccessForm
            currentPass={studentPass}
            onSuccess={handlePassSuccess}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-8 px-4 sm:px-6 lg:px-8 mt-12 no-print">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-indigo-600 text-white flex items-center justify-center font-bold text-xs">
              10
            </div>
            <span className="font-bold text-slate-800">Jainil's Notes</span>
            <span>• Classes 9th, 10th, 11th & 12th Board Hub</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsPlayStoreGuideOpen(true)}
              className="flex items-center gap-1.5 px-3 py-1 bg-slate-900 hover:bg-slate-800 text-amber-300 rounded-lg font-bold text-xs shadow-xs transition-colors cursor-pointer"
            >
              <Play className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              Publish on Play Store Guide
            </button>
            <span>•</span>
            <span>PWA & TWA Ready</span>
            <span>•</span>
            <span>NCERT Aligned</span>
          </div>
        </div>
      </footer>

      {/* Google Play Store Publishing Guide Modal */}
      <PlayStorePublishGuideModal
        isOpen={isPlayStoreGuideOpen}
        onClose={() => setIsPlayStoreGuideOpen(false)}
      />

      {/* Global Payment & QR Code Modal */}
      {isPaymentModalOpen && (
        <PaymentModal
          isOpen={isPaymentModalOpen}
          onClose={() => setIsPaymentModalOpen(false)}
          studentData={{
            fullName: studentPass?.fullName || 'Board Aspirant',
            phone: studentPass?.phone || '',
            email: studentPass?.email || 'student@boardprep.edu',
            board: studentPass?.board || 'CBSE',
            medium: studentPass?.medium || 'English',
            targetYear: studentPass?.targetYear || '2026',
            selectedPlan: 'topper_super_pack',
            planTitle: 'Super Ranker 95+ (All Notes, PYQs & AI Doubt Solver)',
            subjects: studentPass?.subjects || ['Science', 'Mathematics', 'Social Science', 'English'],
            basePrice: 499,
            initialCoupon: 'TOPPER100',
            initialDiscount: 0,
          }}
          onPaymentSuccess={(pass) => {
            handlePassSuccess(pass);
            setIsPaymentModalOpen(false);
          }}
        />
      )}
    </div>
  );
}
