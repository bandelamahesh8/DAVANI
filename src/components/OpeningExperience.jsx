import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { birthdayConfig } from '../config/birthday.config';
import { soundFx } from '../hooks/useSoundEffects';

const stepGifs = [
  { gif: "/gifs/hello-kitty.gif", label: "Hey you ✨" },
  { gif: "/gifs/cute-cha-pri.gif", label: "Yes, Davani, YOU 👀" },
  { gif: "/gifs/mochi-cat-angry-cat.gif", label: "Do NOT click skip! 😾" },
  { gif: "/gifs/peach-goma-peach-and-goma.gif", label: "Handcrafted with brotherly care 🎁" },
  { gif: "/gifs/cute-cat-cute-kittens.gif", label: "Emotion sensors loading... 🥺" },
  { gif: "/gifs/milkangry-milk-and-mocha.gif", label: "Reality check: Still your brother 😈" },
  { gif: "/gifs/happy-friday-dance.gif", label: "Launch sequence ready! 🎉" }
];

export default function OpeningExperience({ onComplete }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [showButton, setShowButton] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [audioPlaying, setAudioPlaying] = useState(false);
  const [autoCountdown, setAutoCountdown] = useState(3);
  const audioRef = useRef(null);

  // Automatically play opening sister meme sound on mount without muting
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.muted = false;
    audio.volume = 0.85;

    const attemptPlay = () => {
      if (!audio) return;
      audio.muted = false;
      audio.volume = 0.85;
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setAudioPlaying(true);
          })
          .catch((err) => {
            console.log('Autoplay waiting for audio permission:', err);
          });
      }
      soundFx.init();
    };

    // Try immediately on mount
    attemptPlay();

    // Also trigger as soon as browser buffers enough audio data
    audio.addEventListener('canplay', attemptPlay);
    audio.addEventListener('loadeddata', attemptPlay);

    // Also trigger on first mouse entry, movement, hover, touch or key
    const passiveEvents = [
      'mouseenter', 'mousemove', 'pointermove', 'pointerdown', 
      'click', 'touchstart', 'touchend', 'keydown', 'wheel', 'scroll', 'focus'
    ];
    passiveEvents.forEach(evt => {
      window.addEventListener(evt, attemptPlay, { passive: true });
    });

    return () => {
      audio.removeEventListener('canplay', attemptPlay);
      audio.removeEventListener('loadeddata', attemptPlay);
      passiveEvents.forEach(evt => {
        window.removeEventListener(evt, attemptPlay);
      });
    };
  }, []);

  // Sequence progression
  useEffect(() => {
    if (currentStep < birthdayConfig.openingMessages.length) {
      soundFx.playClick();
      const timer = setTimeout(() => {
        setCurrentStep(prev => prev + 1);
      }, birthdayConfig.openingMessages[currentStep].delay);
      return () => clearTimeout(timer);
    } else {
      const btnTimer = setTimeout(() => {
        soundFx.playDiagnosticBeep(true);
        setShowButton(true);
      }, 400);
      return () => clearTimeout(btnTimer);
    }
  }, [currentStep]);

  // Automatic progression countdown so user doesn't even have to tap to continue
  useEffect(() => {
    if (!showButton || isExiting) return;
    if (autoCountdown <= 0) {
      handleProceed();
      return;
    }
    const timer = setTimeout(() => {
      setAutoCountdown(prev => prev - 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, [showButton, autoCountdown, isExiting]);

  const toggleAudio = (e) => {
    e.stopPropagation();
    soundFx.playClick();
    if (!audioRef.current) return;
    if (audioRef.current.paused || audioRef.current.muted) {
      audioRef.current.muted = false;
      audioRef.current.play();
      setAudioPlaying(true);
    } else {
      audioRef.current.pause();
      setAudioPlaying(false);
    }
  };

  const handleProceed = () => {
    if (isExiting) return;
    soundFx.playClick();
    soundFx.playCelebration();
    setIsExiting(true);

    // Gently fade out the opening meme track
    if (audioRef.current) {
      let vol = audioRef.current.volume;
      const fadeInterval = setInterval(() => {
        if (vol > 0.1) {
          vol -= 0.15;
          if (audioRef.current) audioRef.current.volume = Math.max(0, vol);
        } else {
          clearInterval(fadeInterval);
          if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.src = '';
          }
        }
      }, 80);
    }

    setTimeout(() => {
      onComplete();
    }, 900);
  };

  const activeGifInfo = stepGifs[Math.min(currentStep, stepGifs.length - 1)];

  return (
    <div 
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#151311] text-[#FAF6F0] p-6 transition-all duration-1000 overflow-hidden ${
        isExiting ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* Background subtle noise and warm radial glow */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(197,160,89,0.3)_0%,transparent_70%)] pointer-events-none" />

      {/* ================= CORNER COMPANION GIFS (Big Size) ================= */}
      
      {/* Top Left Corner: Hello Kitty */}
      <div className="absolute top-6 left-6 sm:top-10 sm:left-12 z-20 pointer-events-none animate-soft-float">
        <div className="flex flex-col items-center">
          <img 
            src="/gifs/hello-kitty.gif" 
            alt="Hello Kitty" 
            className="w-24 h-24 sm:w-36 sm:h-36 object-contain drop-shadow-2xl" 
          />
          <span className="text-[10px] font-mono text-[#C5A059] uppercase tracking-wider mt-1 px-2.5 py-0.5 rounded-full bg-white/5 border border-[#C5A059]/20 hidden sm:block">
            Davani Appala 👑
          </span>
        </div>
      </div>

      {/* Top Right Corner: Happy Friday Dance */}
      <div className="absolute top-6 right-6 sm:top-10 sm:right-12 z-20 pointer-events-none animate-soft-float" style={{ animationDelay: '-2.5s' }}>
        <div className="flex flex-col items-center">
          <img 
            src="/gifs/happy-friday-dance.gif" 
            alt="Celebration Dance" 
            className="w-24 h-24 sm:w-36 sm:h-36 object-contain drop-shadow-2xl" 
          />
          <span className="text-[10px] font-mono text-[#E08D79] uppercase tracking-wider mt-1 px-2.5 py-0.5 rounded-full bg-white/5 border border-[#E08D79]/20 hidden sm:block">
            Birthday Protocol 🎂
          </span>
        </div>
      </div>

      {/* Bottom Left Corner: Mochi Angry Cat */}
      <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-12 z-20 pointer-events-none animate-soft-float" style={{ animationDelay: '-4s' }}>
        <div className="flex flex-col items-center">
          <img 
            src="/gifs/mochi-cat-angry-cat.gif" 
            alt="Angry Sister Cat" 
            className="w-20 h-20 sm:w-32 sm:h-32 object-contain drop-shadow-2xl" 
          />
          <span className="text-[9px] font-mono text-white/50 uppercase tracking-wider mt-1 px-2 py-0.5 rounded-full bg-white/5 border border-white/10 hidden sm:block">
            No Skipping Allowed 😾
          </span>
        </div>
      </div>

      {/* Bottom Right Corner: Frog Sprint */}
      <div className="absolute bottom-6 right-6 sm:bottom-10 sm:right-12 z-20 pointer-events-none animate-soft-float" style={{ animationDelay: '-1.5s' }}>
        <div className="flex flex-col items-center">
          <img 
            src="/gifs/frog-run.gif" 
            alt="Frog Sprint" 
            className="w-24 h-24 sm:w-36 sm:h-36 object-contain drop-shadow-2xl" 
          />
          <span className="text-[9px] font-mono text-[#C5A059] uppercase tracking-wider mt-1 px-2 py-0.5 rounded-full bg-white/5 border border-[#C5A059]/20 hidden sm:block">
            Brother Patience: 18% 🏃
          </span>
        </div>
      </div>

      {/* Audio Element for Browser Autoplay */}
      <audio
        ref={audioRef}
        src="/audio/opening_sister_meme.mp3"
        autoPlay
        playsInline
        loop
        preload="auto"
      />

      {/* ================= CENTER STAGE CONTENT ================= */}
      <div className="relative max-w-xl w-full text-center space-y-6 flex flex-col items-center justify-center min-h-[360px] z-30">
        
        {/* Interactive Audio Toggle Pill */}
        <button
          onClick={toggleAudio}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/15 border border-[#C5A059]/40 text-xs font-mono text-[#FAF6F0] backdrop-blur-md transition-all duration-300 shadow-xl cursor-pointer hover:scale-105 active:scale-95 select-none"
          title={audioPlaying ? "Audio Playing (Click to Mute)" : "Audio Muted (Click to Unmute)"}
        >
          {audioPlaying ? (
            <>
              <Volume2 size={14} className="text-[#C5A059] animate-bounce" />
              <span className="text-[11px] font-mono tracking-wider text-[#C5A059] font-bold">
                🔊 Playing: "Tag Your Sister" 🤣
              </span>
              <span className="flex items-center gap-0.5 ml-1">
                <span className="w-1 h-3 bg-[#C5A059] rounded-full animate-pulse" />
                <span className="w-1 h-4 bg-[#C4738B] rounded-full animate-pulse" style={{ animationDelay: '150ms' }} />
                <span className="w-1 h-2 bg-[#C5A059] rounded-full animate-pulse" style={{ animationDelay: '300ms' }} />
              </span>
            </>
          ) : (
            <>
              <VolumeX size={14} className="text-white/60" />
              <span className="text-[11px] font-mono tracking-wider text-white/80">
                🔇 Sound Auto-Unmuting...
              </span>
            </>
          )}
        </button>

        {/* Dynamic Center Reaction GIF (Changes on every step!) */}
        <div className="relative mb-2 flex flex-col items-center animate-fade-in" key={currentStep}>
          <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-3xl bg-white/10 border-2 border-[#C5A059]/40 flex items-center justify-center p-3 shadow-2xl backdrop-blur-md">
            <img 
              src={activeGifInfo.gif}
              alt={activeGifInfo.label}
              className="w-full h-full object-contain rounded-2xl drop-shadow-2xl"
            />
          </div>
          <div className="mt-3 text-center">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#C5A059] font-bold px-3 py-1 rounded-full bg-white/10 border border-[#C5A059]/30 shadow-md">
              {activeGifInfo.label}
            </span>
          </div>
        </div>

        {/* Story Text Messages */}
        <div className="space-y-3 min-h-[160px] flex flex-col items-center justify-center">
          {birthdayConfig.openingMessages.map((msg, index) => {
            if (index > currentStep) return null;
            const isLatest = index === currentStep;
            return (
              <p
                key={index}
                className={`font-serif tracking-wide transition-all duration-700 ${
                  index === birthdayConfig.openingMessages.length - 1
                    ? 'text-3xl sm:text-4xl text-[#C5A059] font-bold pt-2'
                    : isLatest
                    ? 'text-xl sm:text-2xl text-[#FAF6F0] opacity-100 scale-105 font-medium'
                    : 'text-base sm:text-lg text-[#726860] opacity-40'
                }`}
              >
                {msg.text}
              </p>
            );
          })}
        </div>

        {/* Action Button & Auto-Play Countdown Indicator */}
        {showButton && (
          <div className="pt-4 animate-fade-in transition-all duration-700 flex flex-col items-center gap-3">
            <button
              onClick={handleProceed}
              className="group relative px-8 py-3.5 rounded-full bg-[#FAF6F0] text-[#151311] font-sans font-bold text-sm sm:text-base tracking-wider hover:bg-[#C5A059] hover:text-[#151311] shadow-2xl hover:shadow-[#C5A059]/40 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span className="relative z-10 flex items-center gap-2">
                {birthdayConfig.openingButtonText}
                <span className="group-hover:translate-x-1.5 transition-transform duration-300">→</span>
              </span>
            </button>
            
            <div className="flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-[#C5A059]/30 text-[11px] font-mono text-[#C5A059]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              <span>Auto-playing • Continuing in {autoCountdown}s...</span>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Footer Tag */}
      <div className="absolute bottom-6 text-center z-10">
        <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.25em] text-[#726860] uppercase">
          Confidential • Sibling Protocol v9.0 • Mahesh → Davani
        </span>
      </div>
    </div>
  );
}
