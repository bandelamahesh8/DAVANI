import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, Heart } from 'lucide-react';
import { birthdayConfig } from '../config/birthday.config';
import { soundFx } from '../hooks/useSoundEffects';

export default function BirthdayFinale({ onSisterNameClick }) {
  const { finale } = birthdayConfig;

  // Trigger luxury champagne confetti on mount
  useEffect(() => {
    soundFx.playCelebration();
    const count = 200;
    const defaults = {
      origin: { y: 0.7 },
      colors: ['#C5A059', '#F4E8D5', '#C4738B', '#FCECEF', '#E08D79']
    };

    function fire(particleRatio, opts) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio)
      });
    }

    fire(0.25, { spread: 26, startVelocity: 55 });
    fire(0.2, { spread: 60 });
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
    fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
    fire(0.1, { spread: 120, startVelocity: 45 });
  }, []);

  const handleLaunchMoreConfetti = () => {
    soundFx.playClick();
    soundFx.playCelebration();
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#C5A059', '#C4738B', '#FAF6F0', '#E08D79']
    });
  };

  return (
    <section className="py-28 px-4 sm:px-6 max-w-4xl mx-auto relative z-10 text-center">
      <div className="space-y-12">
        
        {/* Celebration Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C5A059]/15 border border-[#C5A059]/30 text-[#C5A059] text-xs font-mono tracking-[0.25em] uppercase shadow-sm">
          <Sparkles size={14} className="animate-spin" style={{ animationDuration: '6s' }} />
          {finale.badge}
        </div>

        {/* Grand Typography */}
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-mono uppercase tracking-[0.35em] text-[#726860]">
            {finale.title}
          </h2>
          <h1 
            onClick={onSisterNameClick}
            className="text-4xl sm:text-7xl lg:text-8xl font-display font-medium text-[#1E1B18] tracking-tight hover:text-[#C4738B] transition-colors cursor-pointer select-none"
            title="Click to celebrate (or trigger easter egg)"
          >
            {finale.name}
          </h1>
          <p className="text-[11px] font-mono text-[#726860]/50 tracking-widest uppercase">
            (Tap name for surprise)
          </p>
        </div>

        {/* Sister Poetry / Quotes */}
        <div className="max-w-lg mx-auto bg-white/70 backdrop-blur-md rounded-3xl p-8 border border-[#C5A059]/20 shadow-xl shadow-[#C5A059]/5 space-y-3 font-serif italic text-lg sm:text-xl text-[#1E1B18]/90">
          {finale.quotes.map((q, idx) => (
            <p key={idx} className={idx === finale.quotes.length - 1 ? "text-[#C4738B] font-semibold pt-2" : ""}>
              "{q}"
            </p>
          ))}
        </div>

        {/* Personal wishes */}
        <p className="max-w-md mx-auto text-sm sm:text-base font-serif text-[#726860] leading-relaxed">
          {finale.wishes}
        </p>

        {/* Extra celebration confetti button */}
        <div className="pt-2">
          <button
            onClick={handleLaunchMoreConfetti}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#1E1B18] text-white text-xs sm:text-sm font-sans tracking-wide hover:bg-[#C5A059] hover:text-[#1E1B18] shadow-xl shadow-black/10 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
          >
            <Sparkles size={16} />
            Throw More Champagne Confetti
          </button>
        </div>

      </div>
    </section>
  );
}
