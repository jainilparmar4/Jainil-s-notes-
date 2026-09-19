import React, { useState } from 'react';
import { Sparkles, RotateCw, CheckCircle, HelpCircle, ArrowRight, ArrowLeft, Eye } from 'lucide-react';
import { FLASHCARDS } from '../data/class10NotesData';

export const FlashcardsViewer: React.FC = () => {
  const [selectedClass, setSelectedClass] = useState<number | 'all'>('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [knownCount, setKnownCount] = useState(0);
  const [reviewCount, setReviewCount] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'formula' | 'definition' | 'reaction' | 'rule'>('all');

  const filteredCards = FLASHCARDS.filter((card) => {
    const cardClass = card.classLevel || 10;
    const matchesClass = selectedClass === 'all' || cardClass === selectedClass;
    const matchesCategory = selectedCategory === 'all' || card.category === selectedCategory;
    return matchesClass && matchesCategory;
  });

  const currentCard = filteredCards[currentIndex] || filteredCards[0];

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % filteredCards.length);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev - 1 + filteredCards.length) % filteredCards.length);
  };

  const markKnown = () => {
    setKnownCount((prev) => prev + 1);
    handleNext();
  };

  const markReview = () => {
    setReviewCount((prev) => prev + 1);
    handleNext();
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      {/* Top Header */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-200/60 mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          Active Recall Memory Drills
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Classes 9th, 10th, 11th & 12th Flashcards
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 max-w-lg mx-auto mt-1">
          Master high-frequency board questions, definitions, and equations using rapid active recall drills.
        </p>

        {/* Class Filter Bar */}
        <div className="flex items-center justify-center gap-1.5 mt-4 overflow-x-auto no-scrollbar">
          {[
            { level: 'all' as const, label: 'All Classes' },
            { level: 9 as const, label: 'Class 9th' },
            { level: 10 as const, label: 'Class 10th' },
            { level: 11 as const, label: 'Class 11th' },
            { level: 12 as const, label: 'Class 12th' },
          ].map((item) => (
            <button
              key={String(item.level)}
              onClick={() => {
                setSelectedClass(item.level);
                setCurrentIndex(0);
                setIsFlipped(false);
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedClass === item.level
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Category Pills & Score Stats */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-3 rounded-xl border border-slate-200 mb-6 shadow-2xs">
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
          {(['all', 'formula', 'definition', 'reaction', 'rule'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setCurrentIndex(0);
                setIsFlipped(false);
              }}
              className={`px-3 py-1 text-xs font-bold rounded-lg capitalize transition-all ${
                selectedCategory === cat
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3 text-xs font-semibold">
          <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
            ✓ Mastered: {knownCount}
          </span>
          <span className="text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">
            ↺ Review: {reviewCount}
          </span>
        </div>
      </div>

      {/* Flashcard Box */}
      {currentCard && (
        <div className="perspective-1000 mb-6">
          <div
            onClick={() => setIsFlipped(!isFlipped)}
            className={`cursor-pointer min-h-[300px] sm:min-h-[340px] rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-md border ${
              isFlipped
                ? 'bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-950 text-white border-indigo-700'
                : 'bg-white text-slate-900 border-slate-200 hover:border-indigo-400'
            }`}
          >
            {/* Card top row */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-amber-400 text-slate-950">
                  Class {currentCard.classLevel || 10}th
                </span>
                <span
                  className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                    isFlipped ? 'bg-indigo-500/20 text-indigo-200' : 'bg-indigo-50 text-indigo-700'
                  }`}
                >
                  {currentCard.subject} • {currentCard.chapter}
                </span>
                <span
                  className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                    isFlipped ? 'bg-white/10 text-slate-300' : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  {currentCard.category}
                </span>
              </div>

              <span className="text-xs text-slate-400 font-mono">
                Card {currentIndex + 1} of {filteredCards.length}
              </span>
            </div>

            {/* Card Body */}
            <div className="my-auto py-6 text-center">
              {!isFlipped ? (
                <div className="space-y-3">
                  <div className="text-[11px] font-bold uppercase tracking-widest text-indigo-600">
                    Question / Term
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 max-w-xl mx-auto leading-snug">
                    {currentCard.front}
                  </h3>
                  <p className="text-xs text-slate-400 italic">
                    Hint: {currentCard.hint}
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="text-[11px] font-bold uppercase tracking-widest text-amber-400">
                    Topper Solution & Concept
                  </div>
                  <p className="text-sm sm:text-base font-medium text-white max-w-xl mx-auto leading-relaxed whitespace-pre-line font-mono">
                    {currentCard.back}
                  </p>
                </div>
              )}
            </div>

            {/* Card bottom footer */}
            <div className="flex items-center justify-between text-xs border-t pt-3 border-slate-100/20">
              <span className={`text-[11px] flex items-center gap-1 ${isFlipped ? 'text-indigo-300' : 'text-slate-400'}`}>
                <RotateCw className="w-3 h-3" /> Click card to flip
              </span>
              <button
                id="flashcard-open-answer-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsFlipped(!isFlipped);
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 shadow-2xs cursor-pointer ${
                  isFlipped 
                    ? 'bg-amber-400 text-slate-900 hover:bg-amber-300' 
                    : 'bg-indigo-600 text-white hover:bg-indigo-700'
                }`}
              >
                <Eye className="w-3.5 h-3.5" />
                <span>{isFlipped ? 'Close Answer (उत्तर छुपाएं)' : 'Open Answer (उत्तर खोलें)'}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Control Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <button
            onClick={handlePrev}
            className="flex-1 sm:flex-none px-4 py-2 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 flex items-center justify-center gap-1.5 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Previous
          </button>
          <button
            onClick={handleNext}
            className="flex-1 sm:flex-none px-4 py-2 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 flex items-center justify-center gap-1.5 transition-colors"
          >
            Next
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <button
            onClick={markReview}
            className="flex-1 sm:flex-none px-4 py-2 rounded-xl bg-amber-50 border border-amber-300 text-xs font-bold text-amber-800 hover:bg-amber-100 flex items-center justify-center gap-1.5 transition-colors"
          >
            <HelpCircle className="w-4 h-4" />
            Needs Review
          </button>
          <button
            onClick={markKnown}
            className="flex-1 sm:flex-none px-4 py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700 flex items-center justify-center gap-1.5 shadow-xs transition-colors"
          >
            <CheckCircle className="w-4 h-4" />
            I Know This!
          </button>
        </div>
      </div>
    </div>
  );
};
