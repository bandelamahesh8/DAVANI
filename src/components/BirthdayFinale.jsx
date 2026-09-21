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
    <section className="py-28 px-4 sm:px-6 max-w-5xl mx-auto relative z-10 text-center">
      
      {/* ================= LOW-OPACITY BACKGROUND SIBLING PHOTOS ================= */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden select-none">
        
        {/* Left Photo: Beach Candid (B&W) */}
        <div className="absolute -left-10 sm:-left-20 lg:-left-28 top-16 w-60 sm:w-80 lg:w-96 aspect-3/4 rounded-3xl overflow-hidden opacity-20 rotate-[-5deg] shadow-2xl filter blur-[0.5px] transition-all duration-700 hover:opacity-40">
          <img 
            src="/photos/finale/bg_finale_2.jpg" 
            alt="Davani & Mahesh Beach Memory" 
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#FFFDF9]/60 via-transparent to-[#FFFDF9]/80" />
        </div>

        {/* Center Hero Photo: Sunny Color Sibling Selfie */}
        <div className="absolute left-1/2 -translate-x-1/2 top-4 w-72 sm:w-[520px] lg:w-[680px] aspect-16/10 rounded-3xl overflow-hidden opacity-18 filter blur-[0.6px] transition-all duration-700 hover:opacity-35">
          <img 
            src="/photos/finale/bg_finale_1.jpg" 
            alt="Davani & Mahesh Sunshine Selfie" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#FFFDF9]/50 via-transparent to-[#FFFDF9]/80" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,#FFFDF9_95%)]" />
        </div>

        {/* Right Photo: Korean Finger Heart (B&W) */}
        <div className="absolute -right-10 sm:-right-20 lg:-right-28 top-28 w-60 sm:w-80 lg:w-96 aspect-3/4 rounded-3xl overflow-hidden opacity-20 rotate-[5deg] shadow-2xl filter blur-[0.5px] transition-all duration-700 hover:opacity-40">
          <img 
            src="/photos/finale/bg_finale_3.jpg" 
            alt="Davani Korean Finger Heart" 
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-tl from-[#FFFDF9]/60 via-transparent to-[#FFFDF9]/80" />
        </div>

      </div>

      {/* BIG Left Side GIF: Birthday Queen Dancing */}
      <div className="hidden xl:flex flex-col items-center absolute -left-28 2xl:-left-44 top-28 z-20 animate-soft-float pointer-events-auto">
        <div className="relative group cursor-pointer" onClick={() => { soundFx.playCelebration(); handleLaunchMoreConfetti(); }}>
          <img 
            src="/gifs/happy-friday-dance.gif" 
            alt="Birthday Queen Dance" 
            className="w-40 h-40 xl:w-48 xl:h-48 2xl:w-56 2xl:h-56 object-contain rounded-3xl drop-shadow-2xl hover:scale-110 transition-transform" 
          />
          <div className="mt-3 text-center bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#C5A059]/40 shadow-xl text-xs font-mono text-[#1E1B18] font-bold tracking-wide">
            "BIRTHDAY QUEEN 👑"
          </div>
          <span className="text-[10px] font-mono text-[#726860] block text-center mt-1">
            Tap for Confetti Blast!
          </span>
        </div>
      </div>

      {/* BIG Right Side GIF: Dancing Mikonay */}
      <div className="hidden xl:flex flex-col items-center absolute -right-28 2xl:-right-44 top-28 z-20 animate-soft-float pointer-events-auto" style={{ animationDelay: '-2s' }}>
        <div className="relative group cursor-pointer" onClick={() => { soundFx.playCelebration(); handleLaunchMoreConfetti(); }}>
          <img 
            src="/gifs/mikonay.gif" 
            alt="Proud Brother Mikonay Dance" 
            className="w-40 h-40 xl:w-48 xl:h-48 2xl:w-56 2xl:h-56 object-contain rounded-3xl drop-shadow-2xl hover:scale-110 transition-transform" 
          />
          <div className="mt-3 text-center bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#E08D79]/40 shadow-xl text-xs font-mono text-[#C4738B] font-bold tracking-wide">
            "PROUD BROTHER: 1000% 🥳"
          </div>
          <span className="text-[10px] font-mono text-[#726860] block text-center mt-1">
            Celebration Protocol Active
          </span>
        </div>
      </div>

      <div className="space-y-12 relative z-10">
        
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

          {/* Cute Birthday Dance Celebration GIF */}
          <div className="flex justify-center pt-2">
            <img 
              src="/gifs/happy-friday-dance.gif" 
              alt="Birthday Victory Dance" 
              className="w-24 h-24 sm:w-28 sm:h-28 object-contain rounded-2xl drop-shadow-md hover:scale-110 transition-transform" 
            />
          </div>
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
