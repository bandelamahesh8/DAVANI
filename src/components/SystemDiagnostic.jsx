import React, { useState, useEffect } from 'react';
import { CheckCircle2, AlertTriangle, ShieldCheck, RefreshCw } from 'lucide-react';
import { birthdayConfig } from '../config/birthday.config';
import { soundFx } from '../hooks/useSoundEffects';

export default function SystemDiagnostic({ onComplete }) {
  const [completedChecks, setCompletedChecks] = useState([]);
  const [showWarning, setShowWarning] = useState(false);
  const [showSnark, setShowSnark] = useState(false);
  const [scanningIndex, setScanningIndex] = useState(0);

  const { diagnostics } = birthdayConfig;

  useEffect(() => {
    if (scanningIndex < diagnostics.checks.length) {
      const timer = setTimeout(() => {
        soundFx.playDiagnosticBeep(true);
        setCompletedChecks(prev => [...prev, diagnostics.checks[scanningIndex]]);
        setScanningIndex(prev => prev + 1);
      }, 700);
      return () => clearTimeout(timer);
    } else {
      const pauseTimer = setTimeout(() => {
        soundFx.playDiagnosticBeep(false);
        setShowWarning(true);
      }, 800);
      return () => clearTimeout(pauseTimer);
    }
  }, [scanningIndex]);

  const handleContinue = () => {
    soundFx.playClick();
    setShowSnark(true);
    setTimeout(() => {
      onComplete();
    }, 1400);
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-16 relative z-10">
      <div className="max-w-xl w-full bg-white/80 backdrop-blur-xl border border-[#C5A059]/20 rounded-3xl p-6 sm:p-10 shadow-2xl shadow-[#C5A059]/10 relative overflow-hidden transition-all duration-500">
        
        {/* Apple-style window controls */}
        <div className="flex items-center justify-between border-b border-[#1E1B18]/5 pb-4 mb-6">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#E08D79]/60 inline-block" />
            <span className="w-3 h-3 rounded-full bg-[#D9A066]/60 inline-block" />
            <span className="w-3 h-3 rounded-full bg-[#8FA89B]/60 inline-block" />
          </div>
          <span className="text-[11px] font-mono text-[#726860] uppercase tracking-wider">
            {diagnostics.title}
          </span>
          <ShieldCheck size={16} className="text-[#C5A059]" />
        </div>

        <div className="text-center mb-8">
          <p className="text-xs uppercase tracking-[0.2em] font-mono text-[#C5A059] mb-1">
            System Scan in Progress
          </p>
          <h2 className="text-2xl sm:text-3xl font-display font-medium text-[#1E1B18]">
            Verifying Birthday Subject
          </h2>
          <p className="text-xs text-[#726860] mt-1 font-mono">
            {diagnostics.subtitle}
          </p>
        </div>

        {/* Diagnostic checklist */}
        <div className="space-y-3 font-mono text-xs sm:text-sm">
          {diagnostics.checks.map((check, idx) => {
            const isDone = completedChecks.some(c => c.id === check.id);
            const isCurrent = scanningIndex === idx;

            return (
              <div
                key={check.id}
                className={`flex items-center justify-between p-3.5 rounded-xl border transition-all duration-300 ${
                  isDone
                    ? 'bg-[#FAF6F0]/80 border-[#C5A059]/30 text-[#1E1B18]'
                    : isCurrent
                    ? 'bg-[#FCECEF]/40 border-[#C4738B]/40 text-[#1E1B18] scale-[1.01]'
                    : 'bg-transparent border-transparent text-[#726860]/40'
                }`}
              >
                <div className="flex items-center gap-3">
                  {isDone ? (
                    <CheckCircle2 size={16} className="text-[#8FA89B] shrink-0" />
                  ) : isCurrent ? (
                    <RefreshCw size={16} className="text-[#C5A059] animate-spin shrink-0" />
                  ) : (
                    <div className="w-4 h-4 rounded-full border border-dashed border-[#726860]/30 shrink-0" />
                  )}
                  <span>{check.label}</span>
                </div>
                <span className={`text-xs font-semibold ${
                  isDone 
                    ? check.status === 'warning' ? 'text-[#D9A066]' : check.status === 'fail' ? 'text-[#C4738B]' : 'text-[#8FA89B]'
                    : 'text-transparent'
                }`}>
                  {isDone ? check.result : 'Scanning...'}
                </span>
              </div>
            );
          })}
        </div>

        {/* Warning card when scan finishes */}
        {showWarning && (
          <div className="mt-8 pt-6 border-t border-[#1E1B18]/10 animate-fade-in text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E08D79]/15 text-[#C4738B] text-xs font-mono font-medium">
              <AlertTriangle size={14} />
              {diagnostics.warningTitle}
            </div>
            
            <p className="text-sm font-sans text-[#726860] max-w-md mx-auto leading-relaxed">
              "{diagnostics.warningMessage}"
            </p>

            {!showSnark ? (
              <div className="pt-2">
                <button
                  onClick={handleContinue}
                  className="px-6 py-3 rounded-full bg-[#1E1B18] text-[#FAF6F0] text-xs sm:text-sm font-sans font-medium tracking-wide hover:bg-[#C5A059] transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-black/10 cursor-pointer"
                >
                  {diagnostics.buttonText} →
                </button>
              </div>
            ) : (
              <div className="pt-2 animate-bounce">
                <p className="text-sm sm:text-base font-serif italic text-[#C4738B] font-medium">
                  "{diagnostics.buttonSnark}"
                </p>
              </div>
            )}
          </div>
        )}

      </div>
    </section>
  );
}
