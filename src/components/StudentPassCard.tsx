import React from 'react';
import { GraduationCap, CheckCircle2, Printer, QrCode, Sparkles, BookOpen } from 'lucide-react';
import { StudentPass } from '../types';

interface StudentPassCardProps {
  pass: StudentPass;
  onModify?: () => void;
}

export const StudentPassCard: React.FC<StudentPassCardProps> = ({ pass, onModify }) => {
  return (
    <div className="max-w-xl mx-auto bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-950 text-white rounded-2xl p-6 sm:p-7 shadow-xl border border-indigo-700/60 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10">
        {/* Pass Header */}
        <div className="flex items-center justify-between border-b border-indigo-800/80 pb-4 mb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-amber-400/20 border border-amber-400/30 text-amber-300 flex items-center justify-center">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest">
                Official Student Identity Pass
              </span>
              <h2 className="text-base sm:text-lg font-extrabold text-white">
                Jainil's Notes • Class 10th Pass
              </h2>
            </div>
          </div>

          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
            <CheckCircle2 className="w-3 h-3" />
            VERIFIED
          </span>
        </div>

        {/* Student Details Grid */}
        <div className="grid grid-cols-2 gap-3 mb-4 text-left">
          <div className="p-2.5 rounded-lg bg-white/5 border border-white/10">
            <div className="text-[10px] text-indigo-300 uppercase">Student Name</div>
            <div className="text-sm font-bold text-white truncate">{pass.fullName}</div>
          </div>

          <div className="p-2.5 rounded-lg bg-white/5 border border-white/10">
            <div className="text-[10px] text-indigo-300 uppercase">Pass / Roll ID</div>
            <div className="text-sm font-mono font-bold text-amber-300">{pass.passId}</div>
          </div>

          <div className="p-2.5 rounded-lg bg-white/5 border border-white/10">
            <div className="text-[10px] text-indigo-300 uppercase">Board & Medium</div>
            <div className="text-xs font-semibold text-white truncate">
              {pass.board} ({pass.medium})
            </div>
          </div>

          <div className="p-2.5 rounded-lg bg-white/5 border border-white/10">
            <div className="text-[10px] text-indigo-300 uppercase">Target Board Exam</div>
            <div className="text-xs font-semibold text-emerald-300">
              Board Batch {pass.targetYear}
            </div>
          </div>
        </div>

        {/* Unlocked subjects */}
        <div className="p-3 rounded-lg bg-white/5 border border-white/10 mb-4 text-left">
          <div className="text-[10px] text-indigo-300 font-medium mb-1">
            Access Permissions:
          </div>
          <div className="flex flex-wrap gap-1.5">
            {pass.subjects.map((sub) => (
              <span
                key={sub}
                className="px-2 py-0.5 rounded text-[10px] font-semibold bg-indigo-500/20 text-indigo-200 border border-indigo-400/30"
              >
                ✓ {sub}
              </span>
            ))}
            <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-amber-500/20 text-amber-200 border border-amber-400/30">
              ★ Topper PYQs
            </span>
          </div>
        </div>

        {/* QR code and verification token */}
        <div className="flex items-center justify-between pt-2 border-t border-indigo-800/80">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-white text-slate-900 rounded-md p-1 flex items-center justify-center">
              <QrCode className="w-full h-full" />
            </div>
            <div className="text-left">
              <div className="text-[10px] text-indigo-300 font-mono">TOKEN: {pass.verificationCode}</div>
              <div className="text-[9px] text-slate-400">Class 10 Board Auth</div>
            </div>
          </div>

          <div className="flex items-center gap-2 no-print">
            {onModify && (
              <button
                onClick={onModify}
                className="px-3 py-1.5 rounded-lg text-xs font-semibold text-indigo-200 hover:text-white"
              >
                Edit Form
              </button>
            )}
            <button
              onClick={() => window.print()}
              className="px-3 py-1.5 rounded-lg bg-white/15 hover:bg-white/25 text-white text-xs font-bold flex items-center gap-1.5 transition-all"
            >
              <Printer className="w-3.5 h-3.5" />
              Print Pass
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
