import React, { useState, useEffect } from 'react';
import { birthdayConfig } from '../config/birthday.config';
import { ChevronDown } from 'lucide-react';

export default function CinematicIntro({ onNext }) {
  const [lineIndex, setLineIndex] = useState(0);
  const { intro } = birthdayConfig;

  useEffect(() => {
    if (lineIndex < intro.lines.length) {
      const isPause = intro.lines[lineIndex] === "...";
      const timer = setTimeout(() => {
        setLineIndex(prev => prev + 1);
      }, isPause ? 1200 : 900);
      return () => clearTimeout(timer);
    }
  }, [lineIndex, intro.lines]);

  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden px-6 py-20">
      
      {/* Background container with soft depth & Ken Burns effect */}
      <div className="absolute inset-0 z-0 overflow-hidden flex items-center justify-center">
        <img
          src={intro.heroImage}
          alt="Davani Childhood Portrait"
          className="w-full h-full object-cover sm:object-contain max-h-[85vh] rounded-3xl opacity-30 filter blur-xs scale-105 animate-pulse duration-[10000ms] transition-transform"
          style={{ animationDuration: '16s' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FFFDF9] via-[#FFFDF9]/80 to-[#FFFDF9]/60" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto text-center space-y-8 flex flex-col items-center">
        
        {/* Editorial Frame with the Portrait */}
        <div className="relative group">
          <div className="w-56 h-72 sm:w-64 sm:h-80 rounded-2xl overflow-hidden shadow-2xl shadow-[#C5A059]/20 border-2 border-white/80 p-1.5 bg-white/50 backdrop-blur-sm transition-transform duration-700 hover:scale-102">
            <img
              src={intro.heroImage}
              alt="Sweet and innocent Davani"
              className="w-full h-full object-cover rounded-xl transition-all duration-1000 group-hover:scale-105"
            />
          </div>
          {/* Subtle gold stamp */}
          <div className="absolute -bottom-3 -right-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full border border-[#C5A059]/40 text-[11px] font-mono uppercase tracking-widest text-[#C5A059] shadow-md">
            Archive • Innocence Era
          </div>
        </div>

        {/* Progressive Story Text */}
        <div className="space-y-3 min-h-[140px] flex flex-col items-center justify-center">
          {intro.lines.map((line, idx) => {
            if (idx > lineIndex) return null;
            if (line === "...") return null;

            const isPunchline = idx >= 6;
            return (
              <p
                key={idx}
                className={`transition-all duration-700 ${
                  isPunchline
                    ? 'text-2xl sm:text-3xl font-display font-medium text-[#C4738B]'
                    : idx === 0
                    ? 'text-sm sm:text-base font-mono uppercase tracking-[0.25em] text-[#C5A059]'
                    : 'text-lg sm:text-2xl font-serif text-[#1E1B18]/90 italic'
                }`}
              >
                {line}
              </p>
            );
          })}
        </div>

        {/* Transition prompt */}
        {lineIndex >= intro.lines.length && (
          <div className="pt-4 animate-fade-in flex flex-col items-center gap-2">
            <button
              onClick={onNext}
              className="px-6 py-2.5 rounded-full bg-white/80 hover:bg-[#FAF6F0] border border-[#C5A059]/30 text-xs sm:text-sm font-sans tracking-wider text-[#1E1B18] shadow-md transition-all duration-300 hover:scale-105 flex items-center gap-2 cursor-pointer"
            >
              See the Official Complaints
              <ChevronDown size={16} className="text-[#C5A059] animate-bounce" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
