import React, { useState } from 'react';
import { Award, CheckCircle2, XCircle, RotateCcw, ArrowRight, HelpCircle, Sparkles, Eye } from 'lucide-react';
import { QUIZ_QUESTIONS } from '../data/class10NotesData';

export const PracticeQuiz: React.FC = () => {
  const [selectedClass, setSelectedClass] = useState<number | 'all'>('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [showResults, setShowResults] = useState(false);

  const filteredQuestions = QUIZ_QUESTIONS.filter((q) => {
    const qClass = q.classLevel || 10;
    return selectedClass === 'all' || qClass === selectedClass;
  });

  const totalQuestions = filteredQuestions.length;
  const currentQ = filteredQuestions[currentIndex] || filteredQuestions[0];
  const answeredCount = Object.keys(selectedAnswers).length;

  const handleSelect = (optionIdx: number) => {
    if (!currentQ || selectedAnswers[currentQ.id] !== undefined) return;
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQ.id]: optionIdx,
    });
  };

  const handleNext = () => {
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleRestart = () => {
    setSelectedAnswers({});
    setCurrentIndex(0);
    setShowResults(false);
  };

  // Calculate score
  const correctCount = filteredQuestions.filter(
    (q) => selectedAnswers[q.id] === q.correctIndex
  ).length;

  const scorePercentage = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
      {/* Quiz Header */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-200/60 mb-2">
          <Award className="w-3.5 h-3.5" />
          Exam & Board Pattern 2026/2027 Drill
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Classes 9th, 10th, 11th & 12th Practice Quiz
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 max-w-lg mx-auto mt-1">
          Test your conceptual mastery with MCQs & Assertion-Reasoning questions frequently asked in board exams.
        </p>

        {/* Class Selection Pills */}
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
                setSelectedAnswers({});
                setShowResults(false);
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

      {!showResults && currentQ ? (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 sm:p-8">
          {/* Progress bar and counter */}
          <div className="flex items-center justify-between text-xs text-slate-500 font-semibold mb-3">
            <span>
              Question {currentIndex + 1} of {totalQuestions}
            </span>
            <span className="text-indigo-600 font-bold">
              Class {currentQ.classLevel || 10}th • {currentQ.subject} • {currentQ.chapter}
            </span>
          </div>

          <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden mb-6">
            <div
              className="bg-indigo-600 h-full transition-all duration-300 rounded-full"
              style={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }}
            />
          </div>

          {/* Question Tag */}
          <div className="flex items-center gap-2 mb-3 flex-wrap">
            <span className="text-[10px] font-black px-2 py-0.5 rounded bg-amber-400 text-slate-950">
              Class {currentQ.classLevel || 10}th
            </span>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 border border-indigo-100">
              {currentQ.questionType}
            </span>
            <span className="text-[10px] font-semibold text-slate-500">
              {currentQ.boardReference}
            </span>
          </div>

          {/* Question Text */}
          <h2 className="text-base sm:text-lg font-bold text-slate-900 leading-snug mb-6 whitespace-pre-line">
            {currentQ.questionText}
          </h2>

          {/* Options */}
          <div className="space-y-3 mb-6">
            {currentQ.options.map((option, idx) => {
              const hasAnswered = selectedAnswers[currentQ.id] !== undefined;
              const isSelected = selectedAnswers[currentQ.id] === idx;
              const isCorrect = currentQ.correctIndex === idx;

              let btnStyle = 'border-slate-200 hover:border-indigo-400 bg-white text-slate-800';

              if (hasAnswered) {
                if (isCorrect) {
                  btnStyle = 'border-emerald-500 bg-emerald-50/70 text-emerald-950 font-bold';
                } else if (isSelected) {
                  btnStyle = 'border-red-400 bg-red-50 text-red-950';
                } else {
                  btnStyle = 'border-slate-100 bg-slate-50/40 text-slate-400 opacity-60';
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelect(idx)}
                  disabled={hasAnswered}
                  className={`w-full p-4 rounded-xl border text-left text-xs sm:text-sm transition-all flex items-start gap-3 cursor-pointer ${btnStyle}`}
                >
                  <span className="w-6 h-6 rounded-full border border-current font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span className="flex-1">{option}</span>
                  {hasAnswered && isCorrect && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  )}
                  {hasAnswered && isSelected && !isCorrect && (
                    <XCircle className="w-5 h-5 text-red-500 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Explanation box after selection */}
          {selectedAnswers[currentQ.id] !== undefined && (
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 mb-6 space-y-1.5 animate-fadeIn">
              <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                NCERT Board Explanation:
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {currentQ.explanation}
              </p>
            </div>
          )}

          {/* Next & Open Answer Button */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-slate-100">
            <div className="flex items-center gap-3 w-full sm:w-auto justify-between">
              <span className="text-xs text-slate-400 font-medium">
                {answeredCount}/{totalQuestions} Answered
              </span>

              {selectedAnswers[currentQ.id] === undefined && (
                <button
                  id="quiz-open-answer-btn"
                  onClick={() => handleSelect(currentQ.correctIndex)}
                  className="px-3.5 py-1.5 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200 text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-2xs"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Open Answer (उत्तर देखें)</span>
                </button>
              )}
            </div>

            <button
              onClick={handleNext}
              disabled={selectedAnswers[currentQ.id] === undefined}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-indigo-600 text-white text-xs font-bold hover:bg-indigo-700 transition-colors flex items-center justify-center gap-1.5 disabled:opacity-40 disabled:cursor-not-allowed shadow-xs cursor-pointer"
            >
              <span>{currentIndex === totalQuestions - 1 ? 'Finish & See Score' : 'Next Question'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      ) : (
        /* Results View */
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 text-center space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-indigo-50 border border-indigo-200 text-indigo-600 flex items-center justify-center mx-auto shadow-2xs">
            <Award className="w-8 h-8" />
          </div>

          <div>
            <h2 className="text-2xl font-extrabold text-slate-900">Quiz Completed!</h2>
            <p className="text-sm text-slate-500 mt-1">
              Here is your performance in the Class 10 Board Drill:
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 max-w-sm mx-auto">
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
              <div className="text-xs text-slate-400 font-medium">Score</div>
              <div className="text-2xl font-black text-indigo-700">{scorePercentage}%</div>
            </div>
            <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-100">
              <div className="text-xs text-emerald-700 font-medium">Correct</div>
              <div className="text-2xl font-black text-emerald-700">{correctCount}</div>
            </div>
            <div className="p-3.5 rounded-xl bg-red-50 border border-red-100">
              <div className="text-xs text-red-600 font-medium">Wrong</div>
              <div className="text-2xl font-black text-red-600">{totalQuestions - correctCount}</div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-indigo-50/70 border border-indigo-200 text-xs text-indigo-900 max-w-md mx-auto">
            {scorePercentage >= 80 ? (
              <span>🌟 <strong>Outstanding!</strong> Your concepts align with 95%+ Board Exam Topper standards.</span>
            ) : scorePercentage >= 60 ? (
              <span>👍 <strong>Good Effort!</strong> Review the examiner traps and formula sheets to boost your score to 90%+.</span>
            ) : (
              <span>📖 <strong>Keep practicing!</strong> Spend 15 minutes reviewing our Topper Handwritten Notes before retrying.</span>
            )}
          </div>

          <div className="flex items-center justify-center gap-3">
            <button
              onClick={handleRestart}
              className="px-5 py-2.5 rounded-xl bg-indigo-600 text-white text-xs font-bold hover:bg-indigo-700 transition-colors flex items-center gap-1.5 shadow-xs"
            >
              <RotateCcw className="w-4 h-4" />
              Retake Quiz
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
