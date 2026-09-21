import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { birthdayConfig } from '../config/birthday.config';
import { soundFx } from '../hooks/useSoundEffects';

export default function PhotoMontage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isJokeVisible, setIsJokeVisible] = useState(false);
  const { montage, montageCloser, montageJoke } = birthdayConfig;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % montage.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [montage.length]);

  useEffect(() => {
    const jokeTimer = setTimeout(() => {
      setIsJokeVisible(true);
    }, 2500);
    return () => clearTimeout(jokeTimer);
  }, []);

  const handlePrev = () => {
    soundFx.playClick();
    setCurrentIndex((prev) => (prev - 1 + montage.length) % montage.length);
  };

  const handleNext = () => {
    soundFx.playClick();
    setCurrentIndex((prev) => (prev + 1) % montage.length);
  };

  const currentItem = montage[currentIndex];

  return (
    <section className="py-28 px-4 sm:px-6 max-w-4xl mx-auto relative z-10">
      
      {/* BIG Left Side GIF: Hello Kitty Glamour */}
      <div className="hidden xl:flex flex-col items-center absolute -left-28 2xl:-left-44 top-1/3 z-20 animate-soft-float pointer-events-auto">
        <div className="relative group cursor-pointer" onClick={() => soundFx.playCelebration()}>
          <img 
            src="/gifs/hello-kitty.gif" 
            alt="Hello Kitty Sparkles" 
            className="w-40 h-40 xl:w-48 xl:h-48 2xl:w-56 2xl:h-56 object-contain rounded-3xl drop-shadow-2xl hover:scale-110 transition-transform" 
          />
          <div className="mt-3 text-center bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#C5A059]/40 shadow-xl text-xs font-mono text-[#C5A059] font-bold tracking-wide">
            "DAVANI APPALA ✨"
          </div>
          <span className="text-[10px] font-mono text-[#726860] block text-center mt-1">
            Birthday Queen Energy
          </span>
        </div>
      </div>

      {/* BIG Right Side GIF: Happy Dance Party */}
      <div className="hidden xl:flex flex-col items-center absolute -right-28 2xl:-right-44 top-1/3 z-20 animate-soft-float pointer-events-auto" style={{ animationDelay: '-2.5s' }}>
        <div className="relative group cursor-pointer" onClick={() => soundFx.playHarmonicChime()}>
          <img 
            src="/gifs/happy-friday-dance.gif" 
            alt="Sibling Celebration Dance" 
            className="w-40 h-40 xl:w-48 xl:h-48 2xl:w-56 2xl:h-56 object-contain rounded-3xl drop-shadow-2xl hover:scale-110 transition-transform" 
          />
          <div className="mt-3 text-center bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#E08D79]/40 shadow-xl text-xs font-mono text-[#E08D79] font-bold tracking-wide">
            "PARTY PROTOCOL 🕺"
          </div>
          <span className="text-[10px] font-mono text-[#726860] block text-center mt-1">
            Surviving each other in style
          </span>
        </div>
      </div>

      {/* Container */}
      <div className="flex flex-col items-center text-center space-y-10">
        
        {/* Editorial Subtitle */}
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#C5A059]">
          Cinematic Sibling Journey
        </span>

        {/* Cinematic Single-Photo Frame */}
        <div className="relative max-w-lg w-full aspect-4/5 rounded-3xl overflow-hidden shadow-2xl shadow-[#1E1B18]/15 border-4 border-white bg-white">
          <img
            key={currentIndex}
            src={currentItem.photo}
            alt={currentItem.caption}
            className="w-full h-full object-cover animate-fade-in transition-all duration-1000"
            style={{ objectPosition: currentItem.objectPosition || 'center top' }}
          />

          {/* Minimal cinematic caption overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 sm:p-10 text-white">
            <p className="font-serif italic text-2xl sm:text-3xl tracking-wide drop-shadow-md">
              "{currentItem.caption}"
            </p>
            <span className="font-mono text-[11px] text-white/70 uppercase tracking-widest mt-1">
              Chapter {currentIndex + 1} of {montage.length}
            </span>
          </div>

          {/* Nav Controls */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 text-white hover:bg-black/70 backdrop-blur-sm transition-all"
            aria-label="Previous photo"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 text-white hover:bg-black/70 backdrop-blur-sm transition-all"
            aria-label="Next photo"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Dots indicator */}
        <div className="flex items-center gap-2">
          {montage.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                soundFx.playClick();
                setCurrentIndex(i);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === currentIndex ? 'w-8 bg-[#C5A059]' : 'w-2 bg-[#E8D5C4]'
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Emotional punchline with comedic sibling tension-breaker */}
        <div className="space-y-2 pt-6">
          <h3 className="text-2xl sm:text-4xl font-display font-medium text-[#1E1B18]">
            "{montageCloser}"
          </h3>
          {isJokeVisible && (
            <p className="font-mono text-sm sm:text-base text-[#C4738B] font-semibold animate-fade-in tracking-wider">
              {montageJoke}
            </p>
          )}
        </div>

      </div>
    </section>
  );
}
