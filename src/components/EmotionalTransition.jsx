import React, { useState, useEffect } from 'react';
import { birthdayConfig } from '../config/birthday.config';

export default function EmotionalTransition() {
  const [revealedCount, setRevealedCount] = useState(1);
  const { unspokenTruths } = birthdayConfig;

  useEffect(() => {
    if (revealedCount < unspokenTruths.length) {
      const currentItem = unspokenTruths[revealedCount];
      const timer = setTimeout(() => {
        setRevealedCount(prev => prev + 1);
      }, currentItem.pause);
      return () => clearTimeout(timer);
    }
  }, [revealedCount, unspokenTruths]);

  return (
    <section className="min-h-[85vh] flex items-center justify-center py-28 px-6 relative z-10">
      <div className="max-w-xl mx-auto text-center space-y-10">
        
        {/* Title */}
        <div className="space-y-2">
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#C5A059]">
            Honest Truths
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-medium text-[#726860] italic">
            Things I'll probably never say normally.
          </h2>
        </div>

        {/* Sentences revealed one by one */}
        <div className="space-y-4 min-h-[320px] flex flex-col items-center justify-center">
          {unspokenTruths.map((item, idx) => {
            if (idx >= revealedCount) return null;
            if (item.text === "...") {
              return <div key={idx} className="w-12 h-0.5 bg-[#C5A059]/30 my-4" />;
            }

            const isHeartfelt = idx >= 5; // The transition to genuine sibling love

            return (
              <p
                key={idx}
                className={`transition-all duration-1000 ${
                  isHeartfelt
                    ? idx === unspokenTruths.length - 1
                      ? 'text-xl sm:text-2xl font-serif text-[#1E1B18] font-medium pt-2'
                      : 'text-lg sm:text-xl font-serif text-[#1E1B18]/90 italic'
                    : 'text-base sm:text-lg font-sans text-[#726860]/80'
                }`}
              >
                {item.text}
              </p>
            );
          })}
        </div>

      </div>
    </section>
  );
}
