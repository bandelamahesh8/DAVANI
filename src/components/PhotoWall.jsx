import React, { useState, useEffect } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';
import { birthdayConfig } from '../config/birthday.config';
import { soundFx } from '../hooks/useSoundEffects';

export default function PhotoWall() {
  const [activePhotoIdx, setActivePhotoIdx] = useState(null);
  const { gallery } = birthdayConfig;

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activePhotoIdx === null) return;
      if (e.key === 'Escape') setActivePhotoIdx(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activePhotoIdx]);

  const handleOpenPhoto = (idx) => {
    soundFx.playClick();
    setActivePhotoIdx(idx);
  };

  const handleNext = () => {
    soundFx.playClick();
    setActivePhotoIdx((prev) => (prev + 1) % gallery.length);
  };

  const handlePrev = () => {
    soundFx.playClick();
    setActivePhotoIdx((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

  return (
    <section className="py-24 px-4 sm:px-8 max-w-7xl mx-auto relative z-10">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C5A059]/15 text-[#C5A059] text-xs font-mono tracking-widest uppercase">
          <ImageIcon size={14} />
          Living Archive
        </div>
        <h2 className="text-3xl sm:text-5xl font-display font-medium text-[#1E1B18]">
          The Sister Memory Wall
        </h2>
        <p className="text-sm sm:text-base font-serif italic text-[#726860]">
          Portraits, childhood moments, beach trips, and pure unscripted sibling chaos.
        </p>
      </div>

      {/* Masonry-Style Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {gallery.map((item, idx) => (
          <div
            key={idx}
            onClick={() => handleOpenPhoto(idx)}
            className="group relative rounded-2xl overflow-hidden bg-white border border-[#C5A059]/20 shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer break-inside-avoid hover:-translate-y-1"
          >
            <img
              src={item.src}
              alt={item.caption}
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-103"
              loading="lazy"
            />

            {/* Hover overlay with caption */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#E8D5C4] mb-1">
                {item.tag}
              </span>
              <p className="font-serif italic text-base leading-snug">
                "{item.caption}"
              </p>
              <span className="text-[10px] font-mono text-white/60 mt-2 inline-flex items-center gap-1">
                <Maximize2 size={10} /> Tap for Fullscreen
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen Lightbox Modal */}
      {activePhotoIdx !== null && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in"
          onClick={() => setActivePhotoIdx(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setActivePhotoIdx(null)}
            className="absolute top-6 right-6 p-2.5 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors cursor-pointer z-20"
            aria-label="Close fullscreen"
          >
            <X size={24} />
          </button>

          {/* Prev button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors cursor-pointer z-20"
            aria-label="Previous photo"
          >
            <ChevronLeft size={28} />
          </button>

          {/* Next button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors cursor-pointer z-20"
            aria-label="Next photo"
          >
            <ChevronRight size={28} />
          </button>

          {/* Lightbox Content */}
          <div 
            className="max-w-4xl max-h-[88vh] flex flex-col items-center gap-4 z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative rounded-2xl overflow-hidden border-2 border-white/20 bg-black/40 shadow-2xl">
              <img
                src={gallery[activePhotoIdx].src}
                alt={gallery[activePhotoIdx].caption}
                className="max-h-[72vh] w-auto max-w-full object-contain mx-auto"
              />
            </div>

            {/* Caption in lightbox */}
            <div className="text-center text-white space-y-1 px-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#C5A059]">
                {gallery[activePhotoIdx].tag} • {activePhotoIdx + 1} of {gallery.length}
              </span>
              <p className="font-serif italic text-lg sm:text-xl">
                "{gallery[activePhotoIdx].caption}"
              </p>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
