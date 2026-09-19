import React, { useState } from 'react';
import { Sparkles, Copy, Check, Printer, BookOpen, Layers, Search } from 'lucide-react';
import { FORMULA_SECTIONS, FormulaSection } from '../data/formulaData';

export const FormulaCheatSheet: React.FC = () => {
  const [selectedClass, setSelectedClass] = useState<number | 'All'>('All');
  const [activeCategory, setActiveCategory] = useState<'All' | 'Physics' | 'Chemistry' | 'Mathematics'>('All');
  const [copiedFormula, setCopiedFormula] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSections = FORMULA_SECTIONS.filter((s) => {
    const matchesClass = selectedClass === 'All' || s.classLevel === selectedClass;
    const matchesCategory = activeCategory === 'All' || s.category === activeCategory;
    const matchesSearch = !searchQuery.trim() ||
      s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.items.some(
        (i) =>
          i.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          i.formula.toLowerCase().includes(searchQuery.toLowerCase()) ||
          i.topperTip.toLowerCase().includes(searchQuery.toLowerCase())
      );

    return matchesClass && matchesCategory && matchesSearch;
  });

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedFormula(text);
    setTimeout(() => setCopiedFormula(null), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-2xl p-6 sm:p-8 text-white mb-8 border border-indigo-800/80 shadow-md">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-4 h-4" />
              Classes 9th, 10th, 11th & 12th Formula Library
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Formula & Reaction Cheat Sheets
            </h1>
            <p className="mt-1.5 text-xs sm:text-sm text-indigo-200 max-w-xl">
              High-yield formulas, sign conventions, reaction archetypes, and topper memory tricks for 9th, 10th, 11th, and 12th board exams.
            </p>
          </div>

          <div className="flex items-center gap-2 no-print shrink-0">
            <button
              onClick={() => window.print()}
              className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-bold text-white transition-all flex items-center gap-2 cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              Print Cheat Sheet
            </button>
          </div>
        </div>

        {/* Class Selection Pills */}
        <div className="mt-6 pt-4 border-t border-indigo-800/80 flex flex-col md:flex-row md:items-center justify-between gap-4 no-print">
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
            <span className="text-xs text-indigo-300 font-semibold mr-1 shrink-0">Class:</span>
            {[
              { level: 'All' as const, label: 'All Classes' },
              { level: 9 as const, label: 'Class 9th' },
              { level: 10 as const, label: 'Class 10th' },
              { level: 11 as const, label: 'Class 11th' },
              { level: 12 as const, label: 'Class 12th' },
            ].map((item) => (
              <button
                key={String(item.level)}
                onClick={() => setSelectedClass(item.level)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                  selectedClass === item.level
                    ? 'bg-amber-400 text-slate-950 font-black shadow-xs'
                    : 'bg-white/10 text-indigo-200 hover:bg-white/20 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-indigo-300" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search formulas, laws, reactions..."
              className="w-full pl-9 pr-3 py-1.5 rounded-xl bg-white/10 border border-white/20 text-white text-xs placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>
        </div>

        {/* Category Subject Filters */}
        <div className="flex items-center gap-2 mt-3 overflow-x-auto no-scrollbar no-print">
          {(['All', 'Physics', 'Chemistry', 'Mathematics'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat as any)}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                activeCategory === cat
                  ? 'bg-white text-indigo-950 shadow-xs'
                  : 'text-indigo-200 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat === 'All' ? '⚡ All Subjects' : cat === 'Physics' ? '🔬 Physics' : cat === 'Chemistry' ? '🧪 Chemistry' : '📐 Mathematics'}
            </button>
          ))}
        </div>
      </div>

      {/* Formula Sections */}
      {filteredSections.length === 0 ? (
        <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center text-slate-500">
          <BookOpen className="w-12 h-12 mx-auto text-slate-300 mb-3" />
          <p className="text-base font-bold text-slate-800">No matching formulas found</p>
          <p className="text-xs text-slate-400 mt-1">Try clearing your search query or selecting "All Classes".</p>
        </div>
      ) : (
        <div className="space-y-8">
          {filteredSections.map((sec, sIdx) => (
            <div key={sIdx} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
              <div className="flex items-center justify-between mb-4 border-b border-slate-100 pb-3 flex-wrap gap-2">
                <div className="flex items-center gap-2.5">
                  <span className="text-[11px] font-black px-2 py-0.5 rounded bg-indigo-100 text-indigo-900">
                    Class {sec.classLevel}th
                  </span>
                  <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-indigo-600" />
                    {sec.title}
                  </h2>
                </div>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
                  {sec.category}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {sec.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl border border-slate-200/80 hover:border-indigo-300 bg-slate-50/40 hover:bg-white transition-all space-y-2 group"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-xs font-bold text-slate-800">{item.name}</h3>
                      <button
                        onClick={() => copyToClipboard(item.formula)}
                        className="text-slate-400 hover:text-indigo-600 p-1 rounded transition-colors no-print cursor-pointer"
                        title="Copy formula"
                      >
                        {copiedFormula === item.formula ? (
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>

                    <div className="font-mono text-sm font-bold text-indigo-700 bg-white p-2.5 rounded-lg border border-slate-200 shadow-2xs overflow-x-auto">
                      {item.formula}
                    </div>

                    <div className="text-[11px] text-slate-500">
                      <strong>Notation:</strong> {item.variables}
                    </div>

                    <div className="text-[11px] text-emerald-700 font-medium bg-emerald-50/70 p-2 rounded-md border border-emerald-200/60">
                      💡 <strong>Topper Tip:</strong> {item.topperTip}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
