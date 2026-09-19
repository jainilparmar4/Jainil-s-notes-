import React, { useState } from 'react';
import { BrainCircuit, Send, Sparkles, AlertCircle, HelpCircle, BookOpen, Lightbulb } from 'lucide-react';

interface AiDoubtSolverProps {
  initialQuestion?: string;
  initialSubject?: string;
  initialChapter?: string;
}

const PRESET_DOUBTS = [
  {
    label: "Fleming's Left Hand Rule",
    subject: "Science",
    chapter: "Magnetic Effects",
    prompt: "State Fleming's Left Hand Rule and write its application in electric motors with a clear 3-mark board answer format."
  },
  {
    label: "Prove √5 is Irrational",
    subject: "Mathematics",
    chapter: "Real Numbers",
    prompt: "Prove that √5 is an irrational number using the method of contradiction. Write the exact wording required by CBSE board examiners."
  },
  {
    label: "Why Respiration is Exothermic?",
    subject: "Science",
    chapter: "Chemical Reactions",
    prompt: "Why is respiration considered an exothermic reaction? Explain with the chemical equation and energy balance."
  },
  {
    label: "Series vs Parallel Circuits",
    subject: "Science",
    chapter: "Electricity",
    prompt: "Compare series and parallel resistor combinations. Why is parallel arrangement strictly preferred in domestic household circuits?"
  },
  {
    label: "Double Circulation in Humans",
    subject: "Science",
    chapter: "Life Processes",
    prompt: "Explain the process of double circulation in human beings with pulmonary and systemic circuits. Why is it advantageous for warm-blooded animals?"
  }
];

export const AiDoubtSolver: React.FC<AiDoubtSolverProps> = ({
  initialQuestion = '',
  initialSubject = 'Science',
  initialChapter = 'General'
}) => {
  const [question, setQuestion] = useState(initialQuestion);
  const [subject, setSubject] = useState(initialSubject);
  const [chapter, setChapter] = useState(initialChapter);
  const [loading, setLoading] = useState(false);
  const [answer, setAnswer] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e?: React.FormEvent, customQ?: string) => {
    if (e) e.preventDefault();
    const query = customQ || question;
    if (!query.trim()) return;

    setLoading(true);
    setError(null);
    setAnswer(null);

    try {
      const res = await fetch('/api/gemini/doubt-solver', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          question: query,
          subject,
          chapter,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to get doubt answer');
      }

      setAnswer(data.answer);
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'Unable to connect to AI Mentor. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const selectPreset = (item: typeof PRESET_DOUBTS[0]) => {
    setQuestion(item.prompt);
    setSubject(item.subject);
    setChapter(item.chapter);
    handleSubmit(undefined, item.prompt);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-violet-950 via-indigo-900 to-slate-900 rounded-2xl p-6 sm:p-8 text-white mb-6 border border-indigo-700/60 shadow-md">
        <div className="flex items-center gap-2 text-violet-300 text-xs font-bold uppercase tracking-wider mb-2">
          <BrainCircuit className="w-4 h-4 text-violet-400" />
          Powered by Gemini AI • Class 10th Master Mentor
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
          Topper AI Board Exam Doubt Solver
        </h1>
        <p className="mt-1.5 text-xs sm:text-sm text-indigo-200/90 max-w-2xl leading-relaxed">
          Ask any Class 10th doubt in Science, Mathematics, or Social Science. Get NCERT-grounded step-by-step solutions formatted specifically for 3-mark and 5-mark board exam answers with crucial scoring keywords highlighted.
        </p>

        {/* Preset query chips */}
        <div className="mt-5 border-t border-indigo-800/80 pt-4">
          <div className="text-[11px] font-semibold text-indigo-300 mb-2 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Quick Board Exam Favorite Queries:
          </div>
          <div className="flex flex-wrap gap-2">
            {PRESET_DOUBTS.map((item, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => selectPreset(item)}
                className="px-2.5 py-1 rounded-lg text-xs font-medium bg-white/10 hover:bg-white/20 border border-white/15 text-indigo-100 transition-all text-left"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Input Box */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs mb-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Subject</label>
              <select
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
              >
                <option value="Science">Science (Physics, Chem, Bio)</option>
                <option value="Mathematics">Mathematics (Standard/Basic)</option>
                <option value="Social Science">Social Science</option>
                <option value="English">English</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Chapter / Topic</label>
              <input
                type="text"
                placeholder="e.g. Electricity, Light, Trigonometry"
                value={chapter}
                onChange={(e) => setChapter(e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Your Question or Doubt:
            </label>
            <textarea
              id="doubt-query-textarea"
              rows={3}
              placeholder="e.g. Explain how to balance: Fe + H2O -> Fe3O4 + H2 step-by-step with state symbols..."
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600"
            />
          </div>

          <div className="flex items-center justify-between pt-1">
            <span className="text-[11px] text-slate-400">
              💡 Tip: Ask for derivations, diagrams, chemical equations, or 5-mark answer structuring.
            </span>
            <button
              type="submit"
              disabled={loading || !question.trim()}
              className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold flex items-center gap-1.5 transition-colors shadow-xs disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Solving Doubt...</span>
                </>
              ) : (
                <>
                  <Send className="w-3.5 h-3.5" />
                  <span>Solve Doubt</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>

      {/* Error state */}
      {error && (
        <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2 mb-6">
          <AlertCircle className="w-4 h-4 text-red-500 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {/* Answer Display */}
      {answer && (
        <div className="bg-white rounded-2xl border border-indigo-200 shadow-sm overflow-hidden animate-fadeIn">
          <div className="p-4 sm:p-5 bg-gradient-to-r from-indigo-50 via-slate-50 to-indigo-50 border-b border-indigo-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-indigo-600 text-white flex items-center justify-center text-xs font-bold">
                AI
              </div>
              <div>
                <h3 className="text-xs font-bold text-slate-900">Topper AI Board Answer</h3>
                <span className="text-[10px] text-slate-500">
                  Targeted for Class 10 Board Standards
                </span>
              </div>
            </div>

            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
              NCERT Aligned
            </span>
          </div>

          <div className="p-6 sm:p-8 space-y-4">
            <div className="prose prose-sm max-w-none text-slate-800 text-xs sm:text-sm leading-relaxed whitespace-pre-wrap font-sans">
              {answer}
            </div>

            <div className="p-3.5 rounded-xl bg-amber-50/80 border border-amber-200 text-[11px] text-amber-900 flex items-start gap-2">
              <Lightbulb className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <strong>Examiner Guidance:</strong> Always underline the primary scientific terms and write balanced equations with state symbols (s, l, g, aq) to score 100% in Class 10 boards.
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
