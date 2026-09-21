import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Play, Pause, Music } from 'lucide-react';
import { birthdayConfig } from '../config/birthday.config';
import { soundFx } from '../hooks/useSoundEffects';

export default function AudioPlayer({ autoStart = false }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.4);
  const [isMuted, setIsMuted] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    if (autoStart && audioRef.current && !isPlaying) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch((err) => console.log('Audio autoplay prevented:', err));
      }
    }
  }, [autoStart]);

  const togglePlay = () => {
    soundFx.playClick();
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(e => console.log(e));
    }
  };

  const toggleMute = () => {
    soundFx.playClick();
    if (!audioRef.current) return;
    if (isMuted) {
      audioRef.current.muted = false;
      setIsMuted(false);
    } else {
      audioRef.current.muted = true;
      setIsMuted(true);
    }
  };

  return (
    <div 
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 transition-all duration-300"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <audio 
        ref={audioRef} 
        src={birthdayConfig.audio.src} 
        loop 
        preload="auto"
      />

      {/* Expanded Controls Panel */}
      <div 
        className={`flex items-center gap-3 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full border border-[#C5A059]/25 shadow-lg shadow-black/5 transition-all duration-300 ${
          showControls ? 'opacity-100 translate-x-0 pointer-events-auto' : 'opacity-0 translate-x-4 pointer-events-none'
        }`}
      >
        <span className="text-xs font-serif italic text-[#726860] max-w-[120px] truncate">
          {birthdayConfig.audio.title}
        </span>
        <button 
          onClick={toggleMute}
          className="text-[#726860] hover:text-[#1E1B18] transition-colors p-1"
          title={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
        </button>
        <input 
          type="range" 
          min="0" 
          max="1" 
          step="0.05"
          value={isMuted ? 0 : volume}
          onChange={(e) => {
            const v = parseFloat(e.target.value);
            setVolume(v);
            setIsMuted(v === 0);
          }}
          className="w-16 h-1 bg-[#E8D5C4] accent-[#C5A059] rounded-lg cursor-pointer"
        />
      </div>

      {/* Floating Action Button */}
      <button
        onClick={togglePlay}
        className="group relative w-12 h-12 rounded-full bg-white/95 backdrop-blur-md border border-[#C5A059]/40 shadow-xl shadow-[#C5A059]/10 flex items-center justify-center text-[#1E1B18] hover:scale-105 active:scale-95 transition-all duration-300"
        title={isPlaying ? "Pause Music" : "Play Music"}
      >
        {/* Animated sound wave aura when playing */}
        {isPlaying && (
          <span className="absolute inset-0 rounded-full border-2 border-[#C5A059] animate-ping opacity-25 pointer-events-none" />
        )}
        
        <div className={`transition-transform duration-700 ${isPlaying ? 'rotate-180' : ''}`}>
          {isPlaying ? (
            <Pause size={18} className="text-[#C5A059]" />
          ) : (
            <Play size={18} className="text-[#726860] ml-0.5 group-hover:text-[#C5A059]" />
          )}
        </div>
      </button>
    </div>
  );
}
