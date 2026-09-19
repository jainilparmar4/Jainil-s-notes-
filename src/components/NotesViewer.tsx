import React, { useState, useMemo, useEffect } from 'react';
import { 
  BookOpen, 
  Search, 
  CheckCircle2, 
  AlertTriangle, 
  Sparkles, 
  Printer, 
  FileText, 
  HelpCircle, 
  Network,
  Share2,
  Bookmark,
  ChevronRight,
  ChevronLeft,
  Edit3,
  PenTool,
  Plus,
  RotateCcw,
  Eye,
  EyeOff,
  ChevronDown,
  ChevronUp,
  Maximize2,
  Minimize2,
  X,
  ExternalLink,
  Layers,
  Video
} from 'lucide-react';
import { ChapterNote, HandwrittenNoteEntry, ClassLevel } from '../types';
import { CHAPTER_NOTES } from '../data/class10NotesData';

interface NotesViewerProps {
  onOpenForm: () => void;
  onAskAi: (questionText: string, subject: string, chapter: string) => void;
  onOpenStudio?: (chapterId: string) => void;
  onOpenVideo?: (chapterId: string) => void;
  initialClass?: ClassLevel | 'All';
}

export const NotesViewer: React.FC<NotesViewerProps> = ({
  onOpenForm,
  onAskAi,
  onOpenStudio,
  onOpenVideo,
  initialClass = 'All',
}) => {
  const [selectedClass, setSelectedClass] = useState<ClassLevel | 'All'>(initialClass);
  const [selectedSubject, setSelectedSubject] = useState<string>('All');
  const [selectedChapterId, setSelectedChapterId] = useState<string>('sci-ch1');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'all' | 'summary' | 'formulas' | 'pyqs' | 'mindmap'>('all');
  const [isNotesModalOpen, setIsNotesModalOpen] = useState(false);
  const [justOpenedId, setJustOpenedId] = useState<string | null>(null);
  const [openNotice, setOpenNotice] = useState<string | null>(null);
  const [isEditingHandwritten, setIsEditingHandwritten] = useState(false);
  const [quickNoteText, setQuickNoteText] = useState('');
  const [revisedChapters, setRevisedChapters] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('topper10_revised');
      return saved ? JSON.parse(saved) : ['sci-ch1'];
    } catch {
      return ['sci-ch1'];
    }
  });

  // State to track which question answers are opened
  const [openedAnswerIds, setOpenedAnswerIds] = useState<Record<string, boolean>>({});

  const toggleOpenAnswer = (pyqId: string) => {
    setOpenedAnswerIds((prev) => ({
      ...prev,
      [pyqId]: !prev[pyqId],
    }));
  };

  const handleOpenAllAnswers = () => {
    const allOpen: Record<string, boolean> = {};
    currentChapter.pyqs.forEach((p) => {
      allOpen[p.id] = true;
    });
    setOpenedAnswerIds(allOpen);
  };

  const handleCloseAllAnswers = () => {
    setOpenedAnswerIds({});
  };

  // Explicit handler to open a chapter's notes
  const handleOpenChapterNotes = (chapterId: string, openInModal: boolean = false) => {
    setSelectedChapterId(chapterId);
    setJustOpenedId(chapterId);
    const ch = CHAPTER_NOTES.find((c) => c.id === chapterId);
    if (ch) {
      setOpenNotice(`"${ch.chapterTitle}" के सम्पूर्ण नोट्स खुल गए हैं!`);
      setTimeout(() => setOpenNotice(null), 4000);
    }
    setTimeout(() => setJustOpenedId(null), 2500);

    if (openInModal) {
      setIsNotesModalOpen(true);
    } else {
      // Smoothly scroll down to the chapter reader container
      setTimeout(() => {
        const readerElem = document.getElementById('chapter-reader-container');
        if (readerElem) {
          readerElem.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 50);
    }
  };

  // Get available subjects for the selected class
  const availableSubjects = useMemo(() => {
    const classChapters = selectedClass === 'All' 
      ? CHAPTER_NOTES 
      : CHAPTER_NOTES.filter((c) => (c.classLevel || 10) === selectedClass);
    const uniqueSubs = Array.from(new Set(classChapters.map((c) => c.subject)));
    return ['All', ...uniqueSubs];
  }, [selectedClass]);

  // Filter chapters based on class, subject and search query
  const filteredChapters = useMemo(() => {
    return CHAPTER_NOTES.filter((ch) => {
      const chClass = ch.classLevel || 10;
      const matchesClass = selectedClass === 'All' || chClass === selectedClass;
      const matchesSubject = selectedSubject === 'All' || ch.subject === selectedSubject;
      const matchesSearch =
        ch.chapterTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ch.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ch.summaryPoints.some((p) => p.toLowerCase().includes(searchQuery.toLowerCase())) ||
        ch.formulasAndReactions.some((f) => f.name.toLowerCase().includes(searchQuery.toLowerCase()) || f.formula.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesClass && matchesSubject && matchesSearch;
    });
  }, [selectedClass, selectedSubject, searchQuery]);

  // Currently selected chapter
  const currentChapter = useMemo(() => {
    return (
      CHAPTER_NOTES.find((c) => c.id === selectedChapterId) ||
      filteredChapters[0] ||
      CHAPTER_NOTES[0]
    );
  }, [selectedChapterId, filteredChapters]);

  // Load custom handwritten highlights if student edited them
  const [chapterHandwrittenNotes, setChapterHandwrittenNotes] = useState<string[]>([]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(`topper_handwritten_${currentChapter.id}`);
      if (saved) {
        const parsed: HandwrittenNoteEntry[] = JSON.parse(saved);
        setChapterHandwrittenNotes(parsed.map((p) => p.content));
        return;
      }
    } catch (e) {
      console.error(e);
    }
    setChapterHandwrittenNotes(currentChapter.topperHandwrittenHighlights);
  }, [currentChapter.id, currentChapter.topperHandwrittenHighlights]);

  const handleAddQuickNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickNoteText.trim()) return;

    const updated = [quickNoteText.trim(), ...chapterHandwrittenNotes];
    setChapterHandwrittenNotes(updated);
    try {
      const entryList: HandwrittenNoteEntry[] = updated.map((txt, idx) => ({
        id: `note-${Date.now()}-${idx}`,
        chapterId: currentChapter.id,
        subject: currentChapter.subject,
        content: txt,
        inkColor: 'blue',
        category: 'Personal Note',
        createdAt: new Date().toISOString()
      }));
      localStorage.setItem(`topper_handwritten_${currentChapter.id}`, JSON.stringify(entryList));
    } catch (e) {
      console.error(e);
    }
    setQuickNoteText('');
  };

  const handleResetHandwritten = () => {
    try {
      localStorage.removeItem(`topper_handwritten_${currentChapter.id}`);
    } catch (e) {
      console.error(e);
    }
    setChapterHandwrittenNotes(currentChapter.topperHandwrittenHighlights);
  };

  const toggleRevised = (id: string) => {
    const updated = revisedChapters.includes(id)
      ? revisedChapters.filter((c) => c !== id)
      : [...revisedChapters, id];
    setRevisedChapters(updated);
    try {
      localStorage.setItem('topper10_revised', JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Class Level Selector Bar (9th, 10th, 11th, 12th) */}
      <div className="mb-4 no-print">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-2xl text-white shadow-xs">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-xs font-extrabold uppercase tracking-wider text-amber-300">
              Select Class / कक्षा चुनें:
            </span>
            <span className="text-xs text-slate-300 hidden md:inline">
              (9th, 10th, 11th, 12th Notes, Topper Tips & Board PYQs)
            </span>
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
            {[
              { level: 'All' as const, label: 'All Classes', badge: '9th-12th' },
              { level: 9 as const, label: 'Class 9th', badge: 'Foundation' },
              { level: 10 as const, label: 'Class 10th', badge: 'Board' },
              { level: 11 as const, label: 'Class 11th', badge: 'Core' },
              { level: 12 as const, label: 'Class 12th', badge: 'Senior Board' },
            ].map((item) => {
              const isActive = selectedClass === item.level;
              return (
                <button
                  key={String(item.level)}
                  id={`btn-class-filter-${item.level}`}
                  onClick={() => {
                    setSelectedClass(item.level);
                    setSelectedSubject('All');
                  }}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-amber-400 text-slate-950 shadow-xs ring-2 ring-amber-300'
                      : 'bg-white/10 hover:bg-white/20 text-white'
                  }`}
                >
                  <span>{item.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                    isActive ? 'bg-slate-950 text-amber-300' : 'bg-white/15 text-slate-300'
                  }`}>
                    {item.badge}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Top Controls: Subject Filters & Search */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-6 no-print">
        {/* Subject Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 no-scrollbar">
          {availableSubjects.map((sub) => (
            <button
              key={sub}
              id={`btn-sub-${sub.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => setSelectedSubject(sub)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                selectedSubject === sub
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {sub === 'All' ? '📚 All Subjects' : `📖 ${sub}`}
            </button>
          ))}
        </div>

        {/* Search input */}
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            id="notes-search-input"
            type="text"
            placeholder="Search topics, formulas, laws (e.g. Ohm, Gauss, Mole, Matrix)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600"
          />
        </div>
      </div>

      {/* Main Grid: Chapter List Sidebar + Chapter Notes Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Chapter Selection Sidebar */}
        <div className="lg:col-span-4 space-y-2 no-print">
          <div className="flex items-center justify-between px-1 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Chapters ({filteredChapters.length})
            </span>
            <span className="text-xs font-semibold text-indigo-600">
              {revisedChapters.length}/{CHAPTER_NOTES.length} Revised
            </span>
          </div>

          <div className="space-y-2 max-h-[600px] overflow-y-auto pr-1">
            {filteredChapters.map((ch) => {
              const isSelected = ch.id === currentChapter.id;
              const isRevised = revisedChapters.includes(ch.id);

              return (
                <div
                  key={ch.id}
                  id={`chapter-card-${ch.id}`}
                  onClick={() => handleOpenChapterNotes(ch.id)}
                  className={`p-3.5 rounded-xl border transition-all cursor-pointer text-left ${
                    isSelected
                      ? 'bg-white border-indigo-600 ring-2 ring-indigo-500/30 shadow-sm'
                      : 'bg-white/80 border-slate-200 hover:border-slate-300 hover:bg-white'
                  } ${justOpenedId === ch.id ? 'ring-2 ring-emerald-500 bg-emerald-50/20' : ''}`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="text-[10px] font-black px-2 py-0.5 rounded-md bg-amber-100 text-amber-900 border border-amber-300/60">
                        Class {ch.classLevel || 10}th
                      </span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700">
                        Ch {ch.chapterNumber}
                      </span>
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-indigo-50 text-indigo-700">
                        {ch.subject}
                      </span>
                    </div>

                    <span className="text-[10px] font-medium text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded shrink-0">
                      {ch.estimatedBoardWeightage}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-slate-900 mt-1.5 line-clamp-1">
                    {ch.chapterTitle}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                    {ch.tagline}
                  </p>

                  <div className="flex items-center justify-between mt-3 pt-2 border-t border-slate-100 text-xs gap-1.5 flex-wrap">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleRevised(ch.id);
                      }}
                      className={`flex items-center gap-1 text-[11px] font-medium transition-colors ${
                        isRevised ? 'text-emerald-600 font-semibold' : 'text-slate-400 hover:text-slate-600'
                      }`}
                    >
                      <CheckCircle2 className={`w-3.5 h-3.5 ${isRevised ? 'text-emerald-600' : 'text-slate-300'}`} />
                      {isRevised ? 'Revised' : 'Mark Revised'}
                    </button>

                    <div className="flex items-center gap-1.5">
                      {onOpenVideo && (
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            onOpenVideo(ch.id);
                          }}
                          className="px-2.5 py-1.5 rounded-lg text-xs font-bold bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200/80 transition-all flex items-center gap-1 cursor-pointer"
                          title="इस चैप्टर का AI एनिमेटेड वीडियो देखें"
                        >
                          <Video className="w-3 h-3 text-rose-600" />
                          <span>Video</span>
                        </button>
                      )}

                      <button
                        type="button"
                        id={`btn-open-notes-${ch.id}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleOpenChapterNotes(ch.id);
                        }}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-2xs ${
                          isSelected
                            ? 'bg-emerald-600 text-white hover:bg-emerald-700 ring-2 ring-emerald-300'
                            : 'bg-indigo-600 text-white hover:bg-indigo-700 active:scale-95'
                        }`}
                        title="इस चैप्टर के नोट्स खोलें"
                      >
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>{isSelected ? 'Open Hai' : 'Open Notes'}</span>
                        <ChevronRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}

            {filteredChapters.length === 0 && (
              <div className="p-8 text-center bg-white rounded-xl border border-slate-200 text-slate-500 text-xs">
                No chapters matching your search. Try "Light", "Chemical", or "Trigonometry".
              </div>
            )}
          </div>
        </div>

        {/* Chapter Detailed Reader & Content */}
        <div className="lg:col-span-8" id="chapter-reader-container">
          <article className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
            {/* Open Notice Success Banner */}
            {openNotice && (
              <div className="bg-emerald-600 text-white text-xs font-bold px-4 py-2.5 flex items-center justify-between animate-fadeIn shadow-xs no-print">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-200" />
                  <span>{openNotice}</span>
                </span>
                <button
                  onClick={() => setIsNotesModalOpen(true)}
                  className="bg-white/20 hover:bg-white/30 text-white px-2.5 py-1 rounded-lg text-[11px] font-bold flex items-center gap-1 cursor-pointer transition-colors"
                >
                  <Maximize2 className="w-3 h-3" />
                  Full Screen में खोलें
                </button>
              </div>
            )}

            {/* Chapter Header Banner */}
            <div className="p-6 sm:p-8 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white relative">
              <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-indigo-200 mb-2">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-md bg-amber-400 text-slate-950 font-black text-xs">
                    Class {currentChapter.classLevel || 10}th
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-white/10 font-mono font-semibold">
                    {currentChapter.subject} • Chapter {currentChapter.chapterNumber}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30 hidden sm:inline-flex items-center gap-1 text-[11px]">
                    <CheckCircle2 className="w-3 h-3" />
                    Notes Open Hai
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-md bg-amber-500/20 text-amber-300 font-bold border border-amber-500/30">
                    🎯 Board: {currentChapter.estimatedBoardWeightage}
                  </span>
                  {onOpenVideo && (
                    <button
                      onClick={() => onOpenVideo(currentChapter.id)}
                      className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-amber-500 to-rose-500 hover:from-amber-400 hover:to-rose-400 text-white transition-all text-xs font-bold flex items-center gap-1.5 shadow-sm cursor-pointer no-print"
                      title="Watch AI Animated Video for this Chapter"
                    >
                      <Video className="w-3.5 h-3.5" />
                      <span>Watch AI Video</span>
                    </button>
                  )}
                  <button
                    onClick={() => setIsNotesModalOpen(true)}
                    className="px-2.5 py-1.5 rounded-lg bg-indigo-500/30 hover:bg-indigo-500/50 text-indigo-100 border border-indigo-400/30 transition-all text-xs font-semibold flex items-center gap-1 cursor-pointer no-print"
                    title="Open Notes in Fullscreen Reader"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Fullscreen</span>
                  </button>
                  <button
                    onClick={handlePrint}
                    className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors no-print cursor-pointer"
                    title="Print Chapter Notes"
                  >
                    <Printer className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {currentChapter.chapterTitle}
              </h2>
              <p className="mt-2 text-sm text-indigo-200/90 leading-relaxed">
                {currentChapter.tagline}
              </p>

              {/* View Mode Tabs */}
              <div className="flex items-center gap-1.5 mt-6 border-t border-indigo-800/80 pt-4 overflow-x-auto no-scrollbar no-print">
                {[
                  { id: 'all', label: '📖 All Notes (सम्पूर्ण नोट्स)', icon: BookOpen },
                  { id: 'summary', label: '📑 Topper Notes', icon: FileText },
                  { id: 'formulas', label: '⚡ Formulas & Equations', icon: Sparkles },
                  { id: 'pyqs', label: '🎯 10-Yr Board PYQs', icon: HelpCircle },
                  { id: 'mindmap', label: '🗺️ Concept Mind Map', icon: Network },
                ].map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as any)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
                        activeTab === tab.id
                          ? 'bg-amber-400 text-slate-950 font-black shadow-xs ring-2 ring-amber-300'
                          : 'text-indigo-200 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      {tab.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Tab 1: Comprehensive Summary & Highlights */}
            {(activeTab === 'summary' || activeTab === 'all') && (
              <div className="p-6 sm:p-8 space-y-6">
                {activeTab === 'all' && (
                  <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                    <FileText className="w-5 h-5 text-indigo-600" />
                    <h3 className="text-base font-extrabold text-slate-900">
                      भाग 1: Topper Handwritten Notes & NCERT Theory
                    </h3>
                  </div>
                )}
                {/* Topper Handwritten Highlights (Notebook Styled Box) */}
                <div className="bg-amber-50/90 border border-amber-300/80 rounded-2xl p-5 sm:p-6 shadow-xs relative overflow-hidden">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-amber-200/80 pb-3 mb-4">
                    <div className="flex items-center gap-2 text-xs font-extrabold text-amber-900 uppercase tracking-wide">
                      <Sparkles className="w-4 h-4 text-amber-600" />
                      Topper's Handwritten Revision Secret Notes ({currentChapter.subject})
                    </div>

                    <div className="flex items-center gap-2 no-print">
                      {onOpenStudio && (
                        <button
                          onClick={() => onOpenStudio(currentChapter.id)}
                          className="px-3 py-1 rounded-lg bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold transition-all flex items-center gap-1.5 shadow-2xs cursor-pointer"
                        >
                          <Edit3 className="w-3.5 h-3.5" />
                          Open Full Handwritten Editor
                        </button>
                      )}
                      <button
                        onClick={() => setIsEditingHandwritten(!isEditingHandwritten)}
                        className="px-2.5 py-1 rounded-lg bg-white border border-amber-300 text-amber-900 hover:bg-amber-100 text-xs font-semibold transition-all flex items-center gap-1 cursor-pointer"
                      >
                        <PenTool className="w-3 h-3 text-amber-700" />
                        {isEditingHandwritten ? 'Close Quick Add' : 'Quick Add'}
                      </button>
                      <button
                        onClick={handleResetHandwritten}
                        className="p-1 text-stone-400 hover:text-stone-700 rounded transition-colors"
                        title="Reset notes to original"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Inline quick add input */}
                  {isEditingHandwritten && (
                    <form onSubmit={handleAddQuickNote} className="mb-4 flex gap-2 no-print">
                      <input
                        type="text"
                        value={quickNoteText}
                        onChange={(e) => setQuickNoteText(e.target.value)}
                        placeholder="Add your handwritten formula tip, mnemonic or revision note..."
                        className="flex-1 px-3 py-1.5 text-xs sm:text-sm bg-white border border-amber-300 rounded-xl font-handwriting text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                        autoFocus
                      />
                      <button
                        type="submit"
                        className="px-3 py-1.5 rounded-xl bg-amber-800 text-white text-xs font-bold hover:bg-amber-900 shrink-0"
                      >
                        Save Note
                      </button>
                    </form>
                  )}

                  <ul className="space-y-3 font-handwriting text-base sm:text-lg text-amber-950 leading-relaxed font-normal">
                    {chapterHandwrittenNotes.map((tip, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 bg-white/70 p-2.5 rounded-xl border border-amber-200/60 shadow-2xs">
                        <span className="text-amber-600 font-bold shrink-0 text-base">•</span>
                        <span className="select-text">{tip}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 pt-3 border-t border-amber-200/60 flex items-center justify-between text-[11px] text-amber-800/80 font-medium">
                    <span>✨ High-yield points compiled by 99% Board Merit Rankers</span>
                    <span className="italic">Customizable per student</span>
                  </div>
                </div>

                {/* Core NCERT Summary Points */}
                <div>
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-indigo-600" />
                    Crucial Line-by-Line NCERT Summary
                  </h3>
                  <div className="space-y-3">
                    {currentChapter.summaryPoints.map((point, index) => (
                      <div
                        key={index}
                        className="p-3.5 rounded-xl bg-slate-50/60 border border-slate-100 text-xs sm:text-sm text-slate-700 leading-relaxed flex items-start gap-3"
                      >
                        <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 font-bold text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                          {index + 1}
                        </span>
                        <p>{point}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Examiner Traps Alert Box */}
                <div className="bg-rose-50/80 border border-rose-200 rounded-xl p-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-rose-800 uppercase tracking-wide mb-2">
                    <AlertTriangle className="w-4 h-4 text-rose-600" />
                    Examiner's Favorite Pitfalls & Mark Deductions
                  </div>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-rose-950">
                    {currentChapter.examinerTraps.map((trap, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-rose-600 font-bold shrink-0">⚠️</span>
                        <span>{trap}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* AI Question trigger banner */}
                <div className="p-4 rounded-xl bg-gradient-to-r from-indigo-50 to-violet-50 border border-indigo-200/80 flex flex-col sm:flex-row items-center justify-between gap-3 no-print">
                  <div>
                    <h4 className="text-xs font-bold text-indigo-900">Have a doubt in this chapter?</h4>
                    <p className="text-[11px] text-slate-600">
                      Ask our Class 10 Topper AI to explain any derivation, equation, or 5-mark answer!
                    </p>
                  </div>
                  <button
                    onClick={() => onAskAi(`Explain key concepts of ${currentChapter.chapterTitle}`, currentChapter.subject, currentChapter.chapterTitle)}
                    className="px-3.5 py-1.5 rounded-lg bg-indigo-600 text-white text-xs font-bold hover:bg-indigo-700 transition-colors shadow-2xs whitespace-nowrap"
                  >
                    Ask Topper AI
                  </button>
                </div>
              </div>
            )}

            {/* Tab 2: Key Formulas & Reactions */}
            {(activeTab === 'formulas' || activeTab === 'all') && (
              <div className="p-6 sm:p-8 space-y-4 border-t border-slate-200">
                {activeTab === 'all' && (
                  <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                    <Sparkles className="w-5 h-5 text-amber-500" />
                    <h3 className="text-base font-extrabold text-slate-900">
                      भाग 2: Key Formulas, Equations & Constant Values
                    </h3>
                  </div>
                )}
                <div className="text-xs text-slate-500 font-medium mb-2">
                  All vital formulas, chemical equations, and sign conventions for {currentChapter.chapterTitle}:
                </div>

                <div className="grid grid-cols-1 gap-4">
                  {currentChapter.formulasAndReactions.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl border border-slate-200 bg-white hover:border-indigo-300 transition-all"
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-xs font-bold text-slate-900">{item.name}</span>
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                          {item.where}
                        </span>
                      </div>

                      <div className="font-mono text-sm sm:text-base font-bold text-indigo-700 bg-slate-50 p-3 rounded-lg border border-slate-200/80 my-2 overflow-x-auto">
                        {item.formula}
                      </div>

                      {item.mnemonicOrTip && (
                        <div className="text-xs text-emerald-700 font-medium flex items-center gap-1.5">
                          <span>💡 Mnemonic:</span>
                          <span>{item.mnemonicOrTip}</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tab 3: Previous 10-Year Board PYQs */}
            {(activeTab === 'pyqs' || activeTab === 'all') && (
              <div className="p-6 sm:p-8 space-y-6 border-t border-slate-200">
                {activeTab === 'all' && (
                  <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                    <HelpCircle className="w-5 h-5 text-indigo-600" />
                    <h3 className="text-base font-extrabold text-slate-900">
                      भाग 3: 10-Year Board Solved Questions & Model Answers
                    </h3>
                  </div>
                )}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-indigo-600" />
                      Class {currentChapter.classLevel || 10}th Board & Exam Solved Questions (PYQs)
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Standard board questions. Click <strong>"Open Answer"</strong> button to reveal the official model answer and topper tips!
                    </p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      id="pyq-open-all-btn"
                      onClick={handleOpenAllAnswers}
                      className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200 transition-colors flex items-center gap-1.5 cursor-pointer shadow-2xs"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      Open All Answers
                    </button>
                    <button
                      id="pyq-hide-all-btn"
                      onClick={handleCloseAllAnswers}
                      className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors flex items-center gap-1.5 cursor-pointer"
                    >
                      <EyeOff className="w-3.5 h-3.5" />
                      Hide All
                    </button>
                  </div>
                </div>

                <div className="space-y-4">
                  {currentChapter.pyqs.map((pyq) => {
                    const isOpen = !!openedAnswerIds[pyq.id];
                    return (
                      <div key={pyq.id} className="p-4 sm:p-5 rounded-xl border border-slate-200 bg-white space-y-3 shadow-2xs hover:border-indigo-200 transition-all">
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200/60">
                            {pyq.year}
                          </span>
                          <span className="text-xs font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800">
                            {pyq.marks} Marks Question
                          </span>
                        </div>

                        <div className="text-xs sm:text-sm font-bold text-slate-900">
                          Q. {pyq.question}
                        </div>

                        {/* Open Answer Button (Open ka Option) */}
                        <div className="pt-1 flex items-center gap-3">
                          <button
                            id={`btn-open-answer-${pyq.id}`}
                            onClick={() => toggleOpenAnswer(pyq.id)}
                            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-2 cursor-pointer shadow-2xs ${
                              isOpen
                                ? 'bg-slate-800 text-white hover:bg-slate-900 ring-2 ring-slate-200'
                                : 'bg-emerald-600 text-white hover:bg-emerald-700 active:scale-95'
                            }`}
                          >
                            {isOpen ? (
                              <>
                                <EyeOff className="w-3.5 h-3.5" />
                                <span>Answer Open Hai (Hide Answer)</span>
                                <ChevronUp className="w-3.5 h-3.5" />
                              </>
                            ) : (
                              <>
                                <Eye className="w-3.5 h-3.5" />
                                <span>Open Answer (उत्तर खोलें)</span>
                                <ChevronDown className="w-3.5 h-3.5" />
                              </>
                            )}
                          </button>

                          {!isOpen && (
                            <span className="text-[11px] text-slate-400 italic">
                              Click to view step-by-step board answer & topper tip
                            </span>
                          )}
                        </div>

                        {/* Answer Details (Appears when Open button is clicked) */}
                        {isOpen && (
                          <div className="space-y-3 pt-2 animate-fadeIn border-t border-slate-100">
                            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-800 leading-relaxed">
                              <div className="text-[11px] font-extrabold text-emerald-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                                Model Answer for Board Checkers:
                              </div>
                              <p className="whitespace-pre-line text-slate-700">{pyq.modelAnswer}</p>
                            </div>

                            <div className="text-xs text-indigo-700 font-medium flex items-center gap-2 bg-indigo-50/70 p-3 rounded-xl border border-indigo-100">
                              <Sparkles className="w-4 h-4 text-indigo-600 shrink-0" />
                              <span><strong>Topper Secret:</strong> {pyq.topperTip}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Tab 4: Concept Mind Map */}
            {(activeTab === 'mindmap' || activeTab === 'all') && (
              <div className="p-6 sm:p-8 space-y-6 border-t border-slate-200">
                {activeTab === 'all' && (
                  <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                    <Network className="w-5 h-5 text-indigo-600" />
                    <h3 className="text-base font-extrabold text-slate-900">
                      भाग 4: Visual Concept Mind Map (रिवीजन ट्री)
                    </h3>
                  </div>
                )}
                <div className="text-xs text-slate-500 mb-2">
                  Hierarchical concept tree for quick last-minute visual recall before entering exam hall:
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {(currentChapter.mindMapNodes || [
                    { title: 'Core Definitions & Principles', children: currentChapter.summaryPoints.slice(0, 4) },
                    { title: 'Crucial Exam Concepts', children: currentChapter.summaryPoints.slice(4) }
                  ]).map((node, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl border border-indigo-200/80 bg-gradient-to-br from-white to-indigo-50/40"
                    >
                      <div className="text-sm font-bold text-indigo-900 border-b border-indigo-100 pb-2 mb-3 flex items-center gap-2">
                        <Network className="w-4 h-4 text-indigo-600" />
                        {node.title}
                      </div>
                      <ul className="space-y-2">
                        {node.children.map((child, cIdx) => (
                          <li
                            key={cIdx}
                            className="text-xs font-medium text-slate-700 bg-white p-2 rounded-lg border border-slate-200/60 shadow-2xs flex items-center gap-2"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 shrink-0" />
                            <span>{child}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Footer revision bar */}
            <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600 no-print">
              <span>{currentChapter.chapterTitle} • Full Class 10 Syllabus</span>
              <button
                onClick={() => toggleRevised(currentChapter.id)}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
                  revisedChapters.includes(currentChapter.id)
                    ? 'bg-emerald-100 text-emerald-800'
                    : 'bg-slate-200 text-slate-800 hover:bg-slate-300'
                }`}
              >
                {revisedChapters.includes(currentChapter.id) ? '✓ Marked Completed' : 'Mark as Completed'}
              </button>
            </div>
          </article>
        </div>
      </div>

      {/* Dedicated Fullscreen Notes Reader Modal */}
      {isNotesModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 md:p-6 no-print animate-fadeIn">
          <div className="bg-white w-full max-w-5xl h-[92vh] rounded-2xl shadow-2xl flex flex-col border border-slate-200 overflow-hidden">
            {/* Modal Header */}
            <div className="p-4 sm:p-5 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white flex items-center justify-between gap-4 border-b border-indigo-900 shrink-0">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white shrink-0 shadow-xs">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <div className="flex items-center gap-2 flex-wrap text-xs">
                    <span className="px-2 py-0.5 rounded bg-amber-400 text-slate-950 font-black">
                      Class {currentChapter.classLevel || 10}th
                    </span>
                    <span className="text-indigo-200 font-mono font-medium">
                      {currentChapter.subject} • Chapter {currentChapter.chapterNumber}
                    </span>
                  </div>
                  <h2 className="text-base sm:text-xl font-black text-white truncate tracking-tight mt-0.5">
                    {currentChapter.chapterTitle}
                  </h2>
                </div>
              </div>

              {/* Action controls */}
              <div className="flex items-center gap-2 shrink-0">
                {onOpenVideo && (
                  <button
                    onClick={() => {
                      setIsNotesModalOpen(false);
                      onOpenVideo(currentChapter.id);
                    }}
                    className="p-2 rounded-xl bg-gradient-to-r from-amber-500 to-rose-500 hover:from-amber-400 hover:to-rose-400 text-white transition-all text-xs flex items-center gap-1.5 font-bold cursor-pointer shadow-sm"
                    title="Watch AI Animated Video for this Chapter"
                  >
                    <Video className="w-4 h-4" />
                    <span className="hidden sm:inline">AI Video</span>
                  </button>
                )}
                <button
                  onClick={handlePrint}
                  className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer text-xs flex items-center gap-1.5 font-bold"
                  title="Print Chapter Notes"
                >
                  <Printer className="w-4 h-4" />
                  <span className="hidden sm:inline">Print Notes</span>
                </button>
                <button
                  onClick={() => setIsNotesModalOpen(false)}
                  className="p-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white transition-colors cursor-pointer font-bold flex items-center gap-1.5 text-xs shadow-sm"
                  title="Close Reader"
                >
                  <X className="w-4 h-4" />
                  <span>Close (नोट्स बंद करें)</span>
                </button>
              </div>
            </div>

            {/* Quick Chapter Switcher in Modal */}
            <div className="bg-slate-100 border-b border-slate-200 px-4 py-2 flex items-center justify-between gap-2 overflow-x-auto shrink-0 text-xs">
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-slate-700 whitespace-nowrap">Chapter Chunein:</span>
                <select
                  value={currentChapter.id}
                  onChange={(e) => handleOpenChapterNotes(e.target.value, true)}
                  className="px-2.5 py-1 rounded-lg bg-white border border-slate-300 font-semibold text-slate-800 text-xs focus:ring-2 focus:ring-indigo-500"
                >
                  {filteredChapters.map((c) => (
                    <option key={c.id} value={c.id}>
                      Class {c.classLevel || 10} - Ch {c.chapterNumber}: {c.chapterTitle}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex items-center gap-1">
                {[
                  { id: 'all', label: '📖 All Notes' },
                  { id: 'summary', label: '📑 Summary' },
                  { id: 'formulas', label: '⚡ Formulas' },
                  { id: 'pyqs', label: '🎯 PYQs' },
                  { id: 'mindmap', label: '🗺️ Mind Map' },
                ].map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setActiveTab(t.id as any)}
                    className={`px-2.5 py-1 rounded-lg font-bold text-xs transition-colors cursor-pointer whitespace-nowrap ${
                      activeTab === t.id
                        ? 'bg-indigo-600 text-white shadow-xs'
                        : 'bg-white text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Modal Body: Scrollable Reader Content */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8 space-y-6">
              {/* Topper Note Highlight in modal */}
              <div className="bg-amber-50 border border-amber-300 rounded-xl p-5 shadow-xs">
                <div className="flex items-center gap-2 text-xs font-black text-amber-900 uppercase tracking-wide mb-2">
                  <Sparkles className="w-4 h-4 text-amber-600" />
                  Topper's Secret Quick Revision Points ({currentChapter.subject})
                </div>
                <ul className="space-y-2">
                  {currentChapter.topperHandwrittenHighlights.map((tip, idx) => (
                    <li key={idx} className="text-xs sm:text-sm font-medium text-amber-950 flex items-start gap-2">
                      <span className="font-bold text-amber-600">✦</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* NCERT Summary points */}
              <div className="space-y-3">
                <h3 className="text-sm sm:text-base font-extrabold text-slate-900 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-indigo-600" />
                  NCERT Core Points & Crucial Definitions
                </h3>
                <div className="space-y-2">
                  {currentChapter.summaryPoints.map((pt, idx) => (
                    <div key={idx} className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 flex items-start gap-2">
                      <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-800 text-[10px] font-black flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Examiner Traps */}
              <div className="p-4 bg-rose-50 border border-rose-200 rounded-xl space-y-2">
                <div className="flex items-center gap-2 text-xs font-black text-rose-900">
                  <AlertTriangle className="w-4 h-4 text-rose-600" />
                  Examiner Traps & Common Mistakes in Board Exams
                </div>
                <ul className="space-y-1.5 text-xs text-rose-800">
                  {currentChapter.examinerTraps.map((trap, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span>⚠️</span>
                      <span>{trap}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Formulas */}
              <div className="space-y-3">
                <h3 className="text-sm sm:text-base font-extrabold text-slate-900 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-600" />
                  Key Formulas, Constants & Equations
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentChapter.formulasAndReactions.map((f, idx) => (
                    <div key={idx} className="p-3.5 bg-white border border-slate-200 rounded-xl shadow-2xs">
                      <div className="text-xs font-bold text-slate-900 mb-1">{f.name}</div>
                      <div className="font-mono text-xs sm:text-sm font-bold text-indigo-700 bg-slate-50 p-2 rounded-lg border border-slate-200 overflow-x-auto">
                        {f.formula}
                      </div>
                      {f.mnemonicOrTip && (
                        <div className="text-[11px] text-emerald-700 mt-1 font-medium">
                          💡 {f.mnemonicOrTip}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Solved PYQs */}
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-sm sm:text-base font-extrabold text-slate-900 flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-indigo-600" />
                    Board Solved Questions (PYQs)
                  </h3>
                  <button
                    onClick={handleOpenAllAnswers}
                    className="px-2.5 py-1 rounded-lg text-xs font-bold bg-emerald-100 text-emerald-800 hover:bg-emerald-200 cursor-pointer"
                  >
                    Open All Answers
                  </button>
                </div>
                <div className="space-y-3">
                  {currentChapter.pyqs.map((q) => {
                    const isOpen = !!openedAnswerIds[q.id];
                    return (
                      <div key={q.id} className="p-4 bg-white border border-slate-200 rounded-xl space-y-2">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-bold px-2 py-0.5 rounded bg-indigo-50 text-indigo-700">
                            {q.year}
                          </span>
                          <span className="font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800">
                            {q.marks} Marks
                          </span>
                        </div>
                        <div className="text-xs sm:text-sm font-bold text-slate-900">
                          Q. {q.question}
                        </div>
                        <button
                          onClick={() => toggleOpenAnswer(q.id)}
                          className={`px-3 py-1 rounded-lg text-xs font-bold flex items-center gap-1.5 cursor-pointer ${
                            isOpen ? 'bg-slate-800 text-white' : 'bg-emerald-600 text-white hover:bg-emerald-700'
                          }`}
                        >
                          {isOpen ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                          <span>{isOpen ? 'Hide Answer' : 'Open Answer (उत्तर खोलें)'}</span>
                        </button>
                        {isOpen && (
                          <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs sm:text-sm text-slate-800 whitespace-pre-line mt-2">
                            <div className="font-bold text-emerald-700 mb-1">Model Answer:</div>
                            {q.modelAnswer}
                            <div className="mt-2 text-indigo-700 font-medium bg-indigo-50 p-2 rounded">
                              Topper Secret: {q.topperTip}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-3 sm:p-4 bg-slate-100 border-t border-slate-200 flex items-center justify-between text-xs shrink-0">
              <span className="text-slate-600 font-medium">
                {currentChapter.chapterTitle} • Complete Study Notes
              </span>
              <button
                onClick={() => setIsNotesModalOpen(false)}
                className="px-4 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-bold cursor-pointer"
              >
                Close (बंद करें)
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
