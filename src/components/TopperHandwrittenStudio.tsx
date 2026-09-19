import React, { useState, useEffect, useMemo } from 'react';
import { 
  Sparkles, 
  Edit3, 
  Plus, 
  Trash2, 
  RotateCcw, 
  Printer, 
  Save, 
  Star, 
  Palette, 
  Check, 
  BookOpen, 
  FileText,
  AlertCircle,
  Copy,
  PenTool,
  ChevronRight
} from 'lucide-react';
import { ChapterNote, HandwrittenNoteEntry } from '../types';
import { CHAPTER_NOTES } from '../data/class10NotesData';

interface TopperHandwrittenStudioProps {
  initialChapterId?: string;
  onOpenAskAi?: (question: string, subject: string, chapter: string) => void;
}

const INK_COLORS: { id: HandwrittenNoteEntry['inkColor']; name: string; hex: string; bg: string; text: string; border: string }[] = [
  { id: 'blue', name: 'Fountain Blue', hex: '#1e40af', bg: 'bg-blue-50/80', text: 'text-blue-900', border: 'border-blue-300' },
  { id: 'violet', name: 'Royal Violet', hex: '#6b21a8', bg: 'bg-purple-50/80', text: 'text-purple-900', border: 'border-purple-300' },
  { id: 'emerald', name: 'Mnemonic Green', hex: '#065f46', bg: 'bg-emerald-50/80', text: 'text-emerald-900', border: 'border-emerald-300' },
  { id: 'crimson', name: 'Examiner Red', hex: '#991b1b', bg: 'bg-rose-50/80', text: 'text-rose-900', border: 'border-rose-300' },
  { id: 'amber', name: 'Golden Formula', hex: '#92400e', bg: 'bg-amber-50/80', text: 'text-amber-900', border: 'border-amber-300' },
  { id: 'black', name: 'Charcoal Black', hex: '#18181b', bg: 'bg-stone-50/80', text: 'text-stone-900', border: 'border-stone-300' },
];

const CATEGORIES: HandwrittenNoteEntry['category'][] = [
  'Topper Secret',
  'Formula Tip',
  'Mnemonic',
  'Examiner Trap',
  'Personal Note',
];

export const TopperHandwrittenStudio: React.FC<TopperHandwrittenStudioProps> = ({
  initialChapterId = 'sci-ch1',
  onOpenAskAi
}) => {
  const [selectedClass, setSelectedClass] = useState<number | 'All'>('All');
  const [selectedSubject, setSelectedSubject] = useState<string>('All');
  const [selectedChapterId, setSelectedChapterId] = useState<string>(initialChapterId);

  // Edit state
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editText, setEditText] = useState('');
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [newNoteContent, setNewNoteContent] = useState('');
  const [newNoteColor, setNewNoteColor] = useState<HandwrittenNoteEntry['inkColor']>('blue');
  const [newNoteCategory, setNewNoteCategory] = useState<HandwrittenNoteEntry['category']>('Topper Secret');
  const [paperStyle, setPaperStyle] = useState<'ruled' | 'blank' | 'sticky'>('ruled');
  const [savedAlert, setSavedAlert] = useState(false);

  // Available subjects for the current class
  const availableSubjects = useMemo(() => {
    const classChapters = selectedClass === 'All'
      ? CHAPTER_NOTES
      : CHAPTER_NOTES.filter((c) => (c.classLevel || 10) === selectedClass);
    const unique = Array.from(new Set(classChapters.map((c) => c.subject)));
    return ['All', ...unique];
  }, [selectedClass]);

  // Filtered chapters by class & subject
  const availableChapters = useMemo(() => {
    return CHAPTER_NOTES.filter((ch) => {
      const matchesClass = selectedClass === 'All' || (ch.classLevel || 10) === selectedClass;
      const matchesSubject = selectedSubject === 'All' || ch.subject === selectedSubject;
      return matchesClass && matchesSubject;
    });
  }, [selectedClass, selectedSubject]);

  const currentChapter = CHAPTER_NOTES.find((ch) => ch.id === selectedChapterId) || availableChapters[0] || CHAPTER_NOTES[0];

  // Load custom notes for this chapter from localStorage
  const storageKey = `topper_handwritten_${currentChapter.id}`;

  const [notes, setNotes] = useState<HandwrittenNoteEntry[]>(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error(e);
    }
    // Default seeded from currentChapter.topperHandwrittenHighlights
    return (currentChapter.topperHandwrittenHighlights || []).map((text: string, idx: number) => ({
      id: `default-${currentChapter.id}-${idx}`,
      chapterId: currentChapter.id,
      subject: currentChapter.subject,
      content: text,
      inkColor: idx % 3 === 0 ? 'blue' : idx % 3 === 1 ? 'violet' : 'emerald',
      category: idx === 0 ? 'Topper Secret' : idx === 1 ? 'Formula Tip' : 'Mnemonic',
      createdAt: new Date().toISOString(),
      isStarred: idx === 0,
    }));
  });

  // Re-sync when selectedChapterId changes
  useEffect(() => {
    try {
      const saved = localStorage.getItem(`topper_handwritten_${currentChapter.id}`);
      if (saved) {
        setNotes(JSON.parse(saved));
        return;
      }
    } catch (e) {
      console.error(e);
    }

    setNotes(
      (currentChapter.topperHandwrittenHighlights || []).map((text: string, idx: number) => ({
        id: `default-${currentChapter.id}-${idx}`,
        chapterId: currentChapter.id,
        subject: currentChapter.subject,
        content: text,
        inkColor: idx % 3 === 0 ? 'blue' : idx % 3 === 1 ? 'violet' : 'emerald',
        category: idx === 0 ? 'Topper Secret' : idx === 1 ? 'Formula Tip' : 'Mnemonic',
        createdAt: new Date().toISOString(),
        isStarred: idx === 0,
      }))
    );
    setEditingId(null);
    setIsAddingNew(false);
  }, [currentChapter.id]);

  const saveNotesToStorage = (updatedNotes: HandwrittenNoteEntry[]) => {
    setNotes(updatedNotes);
    try {
      localStorage.setItem(`topper_handwritten_${currentChapter.id}`, JSON.stringify(updatedNotes));
      setSavedAlert(true);
      setTimeout(() => setSavedAlert(false), 2000);
    } catch (e) {
      console.error(e);
    }
  };

  const handleStartEdit = (note: HandwrittenNoteEntry) => {
    setEditingId(note.id);
    setEditText(note.content);
  };

  const handleSaveEdit = (noteId: string) => {
    if (!editText.trim()) return;
    const updated = notes.map((n) =>
      n.id === noteId
        ? { ...n, content: editText.trim(), updatedAt: new Date().toISOString() }
        : n
    );
    saveNotesToStorage(updated);
    setEditingId(null);
  };

  const handleDeleteNote = (noteId: string) => {
    const updated = notes.filter((n) => n.id !== noteId);
    saveNotesToStorage(updated);
  };

  const handleToggleStar = (noteId: string) => {
    const updated = notes.map((n) =>
      n.id === noteId ? { ...n, isStarred: !n.isStarred } : n
    );
    saveNotesToStorage(updated);
  };

  const handleChangeColor = (noteId: string, color: HandwrittenNoteEntry['inkColor']) => {
    const updated = notes.map((n) =>
      n.id === noteId ? { ...n, inkColor: color } : n
    );
    saveNotesToStorage(updated);
  };

  const handleAddNewNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newNoteContent.trim()) return;

    const newEntry: HandwrittenNoteEntry = {
      id: `custom-${Date.now()}`,
      chapterId: currentChapter.id,
      subject: currentChapter.subject,
      content: newNoteContent.trim(),
      inkColor: newNoteColor,
      category: newNoteCategory,
      createdAt: new Date().toISOString(),
      isStarred: false,
    };

    saveNotesToStorage([newEntry, ...notes]);
    setNewNoteContent('');
    setIsAddingNew(false);
  };

  const handleResetToDefault = () => {
    if (window.confirm('Reset this chapter\'s handwritten notes to original official topper notes? Any custom edits for this chapter will be restored.')) {
      try {
        localStorage.removeItem(`topper_handwritten_${currentChapter.id}`);
      } catch (e) {
        console.error(e);
      }
      const defaults: HandwrittenNoteEntry[] = (currentChapter.topperHandwrittenHighlights || []).map((text: string, idx: number) => ({
        id: `default-${currentChapter.id}-${idx}`,
        chapterId: currentChapter.id,
        subject: currentChapter.subject,
        content: text,
        inkColor: idx % 3 === 0 ? 'blue' : idx % 3 === 1 ? 'violet' : 'emerald',
        category: idx === 0 ? 'Topper Secret' : idx === 1 ? 'Formula Tip' : 'Mnemonic',
        createdAt: new Date().toISOString(),
        isStarred: idx === 0,
      }));
      setNotes(defaults);
      setSavedAlert(true);
      setTimeout(() => setSavedAlert(false), 2000);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Studio Header */}
      <div className="bg-gradient-to-r from-amber-900 via-amber-950 to-stone-900 rounded-2xl p-6 sm:p-8 text-white mb-6 border border-amber-800/60 shadow-md relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-amber-300 text-xs font-bold uppercase tracking-wider mb-2">
              <PenTool className="w-4 h-4 text-amber-400" />
              Interactive Notebook Editor • All Subjects
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-handwriting">
              Topper's Handwritten Notes & Personal Annotations
            </h1>
            <p className="mt-1.5 text-xs sm:text-sm text-amber-100/90 max-w-2xl leading-relaxed">
              Edit, customize, or add your own handwritten revision tips, mnemonics, equations, and diagrams across all Class 10 subjects. Every edit is saved automatically for offline practice.
            </p>
          </div>

          <div className="flex items-center gap-2 no-print shrink-0">
            <button
              onClick={() => window.print()}
              className="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-bold transition-all flex items-center gap-1.5"
              title="Print Ruled Sheet"
            >
              <Printer className="w-4 h-4" />
              Print Notes Sheet
            </button>
            <button
              onClick={handleResetToDefault}
              className="px-3.5 py-2 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 border border-amber-400/30 text-amber-200 text-xs font-semibold transition-all flex items-center gap-1.5"
              title="Restore original topper notes"
            >
              <RotateCcw className="w-4 h-4" />
              Reset Chapter
            </button>
          </div>
        </div>

        {/* Saved Alert Toast */}
        {savedAlert && (
          <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs font-bold animate-fadeIn">
            <Check className="w-4 h-4" />
            Edits saved to personal notebook!
          </div>
        )}
      </div>

      {/* Class Level Selector Bar */}
      <div className="mb-4 no-print">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 bg-gradient-to-r from-amber-950 via-amber-900 to-amber-950 rounded-2xl text-white shadow-xs">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse"></span>
            <span className="text-xs font-extrabold uppercase tracking-wider text-amber-300">
              Select Class / कक्षा चुनें:
            </span>
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
            {[
              { level: 'All' as const, label: 'All Classes' },
              { level: 9 as const, label: 'Class 9th' },
              { level: 10 as const, label: 'Class 10th' },
              { level: 11 as const, label: 'Class 11th' },
              { level: 12 as const, label: 'Class 12th' },
            ].map((item) => {
              const isActive = selectedClass === item.level;
              return (
                <button
                  key={String(item.level)}
                  onClick={() => {
                    setSelectedClass(item.level);
                    setSelectedSubject('All');
                    const firstMatching = CHAPTER_NOTES.find(
                      (c) => item.level === 'All' || (c.classLevel || 10) === item.level
                    );
                    if (firstMatching) setSelectedChapterId(firstMatching.id);
                  }}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-amber-400 text-slate-950 shadow-xs ring-2 ring-amber-300'
                      : 'bg-white/10 hover:bg-white/20 text-white'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Subject Filter Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mb-6 no-print">
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 no-scrollbar">
          {availableSubjects.map((sub: string) => (
            <button
              key={sub}
              onClick={() => {
                setSelectedSubject(sub);
                const firstMatching = CHAPTER_NOTES.find((c) => {
                  const matchCl = selectedClass === 'All' || (c.classLevel || 10) === selectedClass;
                  const matchSub = sub === 'All' || c.subject === sub;
                  return matchCl && matchSub;
                });
                if (firstMatching) setSelectedChapterId(firstMatching.id);
              }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                selectedSubject === sub
                  ? 'bg-amber-700 text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {sub === 'All' ? '📚 All Subjects' : `📖 ${sub}`}
            </button>
          ))}
        </div>

        {/* Paper style selector */}
        <div className="flex items-center gap-2 bg-white p-1 rounded-xl border border-slate-200 text-xs">
          <span className="text-slate-400 text-[11px] px-2 font-medium">Notebook Style:</span>
          {(['ruled', 'blank', 'sticky'] as const).map((style) => (
            <button
              key={style}
              onClick={() => setPaperStyle(style)}
              className={`px-2.5 py-1 rounded-lg text-xs font-semibold capitalize transition-all cursor-pointer ${
                paperStyle === style
                  ? 'bg-amber-100 text-amber-900 shadow-2xs'
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              {style === 'ruled' ? '📝 Ruled Paper' : style === 'blank' ? '📄 Plain Paper' : '📌 Sticky Pad'}
            </button>
          ))}
        </div>
      </div>

      {/* Main Studio Grid: Chapter Nav on Left + Notebook Paper on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Chapter list */}
        <div className="lg:col-span-4 space-y-2 no-print">
          <div className="flex items-center justify-between px-1 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Select Chapter to Edit ({availableChapters.length})
            </span>
          </div>

          <div className="space-y-2 max-h-[650px] overflow-y-auto pr-1">
            {availableChapters.map((ch: ChapterNote) => {
              const isSelected = ch.id === currentChapter.id;
              return (
                <div
                  key={ch.id}
                  onClick={() => setSelectedChapterId(ch.id)}
                  className={`p-3.5 rounded-xl border transition-all cursor-pointer text-left ${
                    isSelected
                      ? 'bg-amber-50/70 border-amber-600 ring-2 ring-amber-500/20 shadow-xs'
                      : 'bg-white border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between gap-1.5 mb-1 flex-wrap">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] font-black px-1.5 py-0.5 rounded bg-amber-200 text-amber-950">
                        Class {ch.classLevel || 10}th
                      </span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                        Ch {ch.chapterNumber}
                      </span>
                    </div>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-amber-100 text-amber-800">
                      {ch.subject}
                    </span>
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900 line-clamp-1">
                    {ch.chapterTitle}
                  </div>
                  <div className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                    {ch.tagline}
                  </div>

                  <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center justify-between gap-2">
                    <span className="text-[10px] text-slate-400 font-medium">
                      {ch.topperHandwrittenHighlights.length} Tips & Traps
                    </span>
                    <button
                      type="button"
                      id={`btn-open-handwritten-${ch.id}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedChapterId(ch.id);
                        setTimeout(() => {
                          const canvasElem = document.getElementById('handwritten-notebook-canvas');
                          if (canvasElem) canvasElem.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }, 50);
                      }}
                      className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1 cursor-pointer shadow-2xs ${
                        isSelected
                          ? 'bg-amber-600 text-white ring-2 ring-amber-300'
                          : 'bg-amber-100 text-amber-900 hover:bg-amber-200'
                      }`}
                    >
                      <BookOpen className="w-3 h-3" />
                      <span>{isSelected ? 'Open Hai (खुला हुआ है)' : 'Open Notes (नोट्स खोलें)'}</span>
                      <ChevronRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Realistic Handwritten Notebook Canvas */}
        <div className="lg:col-span-8" id="handwritten-notebook-canvas">
          <div className="bg-white rounded-2xl border border-stone-200 shadow-md overflow-hidden">
            {/* Spiral binding header */}
            <div className="bg-stone-100 border-b border-stone-200 p-4 flex flex-wrap items-center justify-between gap-3 no-print">
              <div className="flex items-center gap-2">
                <div className="flex items-center space-x-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                </div>
                <span className="text-xs font-bold text-stone-700 font-mono ml-2">
                  Class 10th • {currentChapter.subject} • Chapter {currentChapter.chapterNumber} Notebook
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsAddingNew(true)}
                  className="px-3.5 py-1.5 rounded-lg bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold transition-all flex items-center gap-1.5 shadow-2xs cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  Write New Note
                </button>
              </div>
            </div>

            {/* Notebook Paper Body */}
            <div
              className={`p-6 sm:p-10 min-h-[550px] transition-all relative ${
                paperStyle === 'ruled'
                  ? 'notebook-paper-ruled notebook-margin-line pl-8 sm:pl-12'
                  : paperStyle === 'sticky'
                  ? 'bg-amber-50/50'
                  : 'bg-white'
              }`}
            >
              {/* Paper header notes info */}
              <div className="mb-6 border-b border-stone-300 pb-3">
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-stone-500 font-handwriting text-lg sm:text-xl">
                  <span className="font-bold text-stone-900">
                    Topic: {currentChapter.chapterTitle}
                  </span>
                  <span className="text-amber-800 font-semibold text-base">
                    ★ Target: Board 95%+ High Yield
                  </span>
                </div>
              </div>

              {/* Add New Note Box */}
              {isAddingNew && (
                <div className="mb-6 p-4 rounded-xl bg-amber-100/90 border-2 border-dashed border-amber-400 shadow-sm animate-fadeIn">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-amber-900 flex items-center gap-1.5">
                      <Edit3 className="w-3.5 h-3.5" />
                      Add Custom Topper Note / Memory Trick:
                    </span>
                    <button
                      onClick={() => setIsAddingNew(false)}
                      className="text-stone-400 hover:text-stone-600 text-xs font-bold"
                    >
                      Cancel
                    </button>
                  </div>

                  <form onSubmit={handleAddNewNote} className="space-y-3">
                    <textarea
                      rows={3}
                      value={newNoteContent}
                      onChange={(e) => setNewNoteContent(e.target.value)}
                      placeholder="Write your personal handwritten note, mnemonics, reaction shortcut, or board tip..."
                      className="w-full p-3 rounded-lg border border-amber-300 bg-white font-handwriting text-base text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                      autoFocus
                    />

                    <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
                      {/* Ink color selector */}
                      <div className="flex items-center gap-1.5">
                        <span className="text-[11px] text-stone-600 font-medium">Pen Ink:</span>
                        {INK_COLORS.map((col) => (
                          <button
                            key={col.id}
                            type="button"
                            onClick={() => setNewNoteColor(col.id)}
                            className={`w-6 h-6 rounded-full flex items-center justify-center transition-all ${
                              newNoteColor === col.id ? 'ring-2 ring-stone-900 scale-110 shadow-2xs' : 'opacity-80'
                            }`}
                            style={{ backgroundColor: col.hex }}
                            title={col.name}
                          >
                            {newNoteColor === col.id && <Check className="w-3.5 h-3.5 text-white" />}
                          </button>
                        ))}
                      </div>

                      {/* Category selector */}
                      <div className="flex items-center gap-2">
                        <select
                          value={newNoteCategory}
                          onChange={(e) => setNewNoteCategory(e.target.value as any)}
                          className="px-2.5 py-1 text-xs rounded-lg border border-amber-300 bg-white font-semibold text-stone-800"
                        >
                          {CATEGORIES.map((cat) => (
                            <option key={cat} value={cat}>
                              {cat}
                            </option>
                          ))}
                        </select>

                        <button
                          type="submit"
                          className="px-4 py-1.5 rounded-lg bg-stone-900 text-white text-xs font-bold hover:bg-stone-800 transition-colors shadow-2xs cursor-pointer"
                        >
                          Add to Notebook
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              )}

              {/* Notes List */}
              <div className="space-y-4">
                {notes.map((note, index) => {
                  const colorConfig =
                    INK_COLORS.find((c) => c.id === note.inkColor) || INK_COLORS[0];
                  const isBeingEdited = editingId === note.id;

                  return (
                    <div
                      key={note.id}
                      className={`p-4 rounded-xl border transition-all relative group ${
                        paperStyle === 'sticky'
                          ? 'bg-amber-100/70 border-amber-300 shadow-2xs rotate-[-0.3deg] hover:rotate-0'
                          : `${colorConfig.bg} ${colorConfig.border} shadow-2xs`
                      }`}
                    >
                      {/* Note Top Bar */}
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <div className="flex items-center gap-2">
                          <span
                            className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md text-white shadow-2xs"
                            style={{ backgroundColor: colorConfig.hex }}
                          >
                            {note.category}
                          </span>
                          {note.isStarred && (
                            <span className="text-[10px] font-bold text-amber-600 flex items-center gap-0.5">
                              ★ High Yield
                            </span>
                          )}
                        </div>

                        {/* Note Actions */}
                        <div className="flex items-center gap-1.5 no-print opacity-80 group-hover:opacity-100 transition-opacity">
                          {/* Ink Color Switcher */}
                          <div className="hidden sm:flex items-center gap-1 mr-1">
                            {INK_COLORS.map((col) => (
                              <button
                                key={col.id}
                                onClick={() => handleChangeColor(note.id, col.id)}
                                className={`w-3.5 h-3.5 rounded-full transition-transform ${
                                  note.inkColor === col.id ? 'scale-125 ring-1 ring-stone-900' : 'hover:scale-110'
                                }`}
                                style={{ backgroundColor: col.hex }}
                                title={`Switch to ${col.name}`}
                              />
                            ))}
                          </div>

                          <button
                            onClick={() => handleToggleStar(note.id)}
                            className={`p-1 rounded text-xs transition-colors ${
                              note.isStarred ? 'text-amber-500' : 'text-stone-400 hover:text-amber-500'
                            }`}
                            title="Star note"
                          >
                            <Star className="w-3.5 h-3.5 fill-current" />
                          </button>

                          <button
                            onClick={() => handleStartEdit(note)}
                            className="p-1 rounded text-stone-500 hover:text-stone-800 transition-colors"
                            title="Edit Note"
                          >
                            <Edit3 className="w-3.5 h-3.5" />
                          </button>

                          <button
                            onClick={() => handleDeleteNote(note.id)}
                            className="p-1 rounded text-stone-400 hover:text-rose-600 transition-colors"
                            title="Delete Note"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                      {/* Content (Handwriting styled) */}
                      {!isBeingEdited ? (
                        <div
                          className="font-handwriting text-lg sm:text-xl font-normal leading-relaxed whitespace-pre-line tracking-wide select-text cursor-text"
                          style={{ color: colorConfig.hex }}
                          onClick={() => handleStartEdit(note)}
                          title="Click to edit"
                        >
                          {note.content}
                        </div>
                      ) : (
                        <div className="space-y-2 mt-2">
                          <textarea
                            rows={3}
                            value={editText}
                            onChange={(e) => setEditText(e.target.value)}
                            className="w-full p-2.5 rounded-lg border border-stone-300 font-handwriting text-lg text-stone-900 bg-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                            autoFocus
                          />
                          <div className="flex items-center justify-end gap-2">
                            <button
                              onClick={() => setEditingId(null)}
                              className="px-2.5 py-1 text-xs text-stone-500 hover:text-stone-700"
                            >
                              Cancel
                            </button>
                            <button
                              onClick={() => handleSaveEdit(note.id)}
                              className="px-3 py-1 rounded bg-stone-900 text-white text-xs font-bold hover:bg-stone-800 transition-colors"
                            >
                              Save Edits
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}

                {notes.length === 0 && (
                  <div className="text-center py-12 border-2 border-dashed border-stone-300 rounded-xl p-6">
                    <p className="font-handwriting text-xl text-stone-500">
                      No handwritten notes yet for this chapter.
                    </p>
                    <button
                      onClick={() => setIsAddingNew(true)}
                      className="mt-3 px-4 py-2 rounded-xl bg-amber-600 text-white text-xs font-bold hover:bg-amber-700"
                    >
                      Write the First Topper Note
                    </button>
                  </div>
                )}
              </div>

              {/* Bottom handwriting advice / signature */}
              <div className="mt-10 pt-4 border-t border-stone-300 flex flex-col sm:flex-row items-center justify-between gap-3 text-stone-400 font-handwriting text-base">
                <span>Class 10th Board Exam Mastery • Topper's Secret Notebook</span>
                <span className="italic">Jainil's Personal Notes Collection</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
