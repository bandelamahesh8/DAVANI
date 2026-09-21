import React, { useState, useEffect, useMemo } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight, Image as ImageIcon, Box, Grid3X3, Sparkles } from 'lucide-react';
import { birthdayConfig } from '../config/birthday.config';
import { soundFx } from '../hooks/useSoundEffects';
import InfiniteGallery from '@/components/ui/3d-gallery-photography';

export default function PhotoWall() {
  const [activePhotoIdx, setActivePhotoIdx] = useState(null);
  const [viewMode, setViewMode] = useState('3d'); // '3d' or 'grid'
  const { gallery } = birthdayConfig;

  // Format images for InfiniteGallery
  const threeDImages = useMemo(() => {
    return gallery.map(item => ({
      src: item.src,
      alt: item.caption
    }));
  }, [gallery]);

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
      
      {/* BIG Left Side GIF: Gallery Curator */}
      <div className="hidden xl:flex flex-col items-center absolute -left-28 2xl:-left-44 top-36 z-20 animate-soft-float pointer-events-auto">
        <div className="relative group cursor-pointer" onClick={() => soundFx.playClick()}>
          <img 
            src="/gifs/sanjay-chat-tamil-chat.gif" 
            alt="Gallery Curator Reaction" 
            className="w-40 h-40 xl:w-48 xl:h-48 2xl:w-56 2xl:h-56 object-contain rounded-3xl drop-shadow-2xl hover:scale-110 transition-transform" 
          />
          <div className="mt-3 text-center bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#C5A059]/40 shadow-xl text-xs font-mono text-[#1E1B18] font-bold tracking-wide">
            "GALLERY CURATOR 📸"
          </div>
          <span className="text-[10px] font-mono text-[#726860] block text-center mt-1">
            Certified 4K Candids
          </span>
        </div>
      </div>

      {/* BIG Right Side GIF: Running Frog */}
      <div className="hidden xl:flex flex-col items-center absolute -right-28 2xl:-right-44 top-48 z-20 animate-soft-float pointer-events-auto" style={{ animationDelay: '-3.5s' }}>
        <div className="relative group cursor-pointer" onClick={() => soundFx.playClick()}>
          <img 
            src="/gifs/frog-run.gif" 
            alt="Running from the Camera" 
            className="w-40 h-40 xl:w-48 xl:h-48 2xl:w-56 2xl:h-56 object-contain rounded-3xl drop-shadow-2xl hover:scale-110 transition-transform" 
          />
          <div className="mt-3 text-center bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#C4738B]/40 shadow-xl text-xs font-mono text-[#C4738B] font-bold tracking-wide">
            "RUNNING FROM PHOTOS 🏃"
          </div>
          <span className="text-[10px] font-mono text-[#726860] block text-center mt-1">
            Can't escape the memory reel
          </span>
        </div>
      </div>

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C5A059]/15 text-[#C5A059] text-xs font-mono tracking-widest uppercase">
          <ImageIcon size={14} />
          Living Archive
        </div>
        <h2 className="text-3xl sm:text-5xl font-display font-medium text-[#1E1B18]">
          The Sister Memory Dimension
        </h2>
        <p className="text-sm sm:text-base font-serif italic text-[#726860]">
          Portraits, childhood moments, beach trips, and pure unscripted sibling history.
        </p>

        {/* View Mode Toggle Controls */}
        <div className="pt-4 flex items-center justify-center gap-3">
          <button
            onClick={() => {
              soundFx.playClick();
              setViewMode('3d');
            }}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono tracking-wider transition-all duration-300 cursor-pointer ${
              viewMode === '3d'
                ? 'bg-[#1E1B18] text-white shadow-lg scale-105 border border-[#C5A059]/50'
                : 'bg-white/80 text-[#726860] hover:bg-[#FAF6F0] border border-[#C5A059]/20'
            }`}
          >
            <Box size={14} className={viewMode === '3d' ? 'text-[#C5A059]' : ''} />
            3D Flythrough Tunnel
          </button>

          <button
            onClick={() => {
              soundFx.playClick();
              setViewMode('grid');
            }}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono tracking-wider transition-all duration-300 cursor-pointer ${
              viewMode === 'grid'
                ? 'bg-[#1E1B18] text-white shadow-lg scale-105 border border-[#C5A059]/50'
                : 'bg-white/80 text-[#726860] hover:bg-[#FAF6F0] border border-[#C5A059]/20'
            }`}
          >
            <Grid3X3 size={14} className={viewMode === 'grid' ? 'text-[#C5A059]' : ''} />
            Classic Photo Wall
          </button>
        </div>
      </div>

      {/* 3D Infinite Flythrough Tunnel View */}
      {viewMode === '3d' && (
        <div className="mb-16 animate-fade-in relative rounded-3xl overflow-hidden bg-[#1E1B18] border border-[#C5A059]/30 shadow-2xl shadow-black/30">
          <InfiniteGallery
            images={threeDImages}
            speed={1.2}
            zSpacing={3}
            visibleCount={10}
            falloff={{ near: 0.8, far: 14 }}
            className="h-[520px] sm:h-[620px] w-full"
          />

          {/* Overlay Title */}
          <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-6 sm:p-10 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[#C5A059] text-[11px] font-mono tracking-widest uppercase self-center border border-[#C5A059]/30">
              <Sparkles size={12} />
              Interactive 3D WebGL Flythrough
            </div>

            <div className="text-white space-y-1">
              <h3 className="font-serif italic text-3xl sm:text-5xl tracking-tight text-white/95 drop-shadow-md">
                Davani's Memory Tunnel
              </h3>
              <p className="text-[11px] sm:text-xs font-mono text-[#F4E8D5]/80 uppercase tracking-widest">
                Use scroll wheel, arrow keys, or touch to glide through memories
              </p>
              <p className="text-[10px] font-mono text-white/40 tracking-wider">
                (Auto-gliding resumes after 3 seconds of inactivity)
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Masonry-Style Grid View */}
      {(viewMode === 'grid' || viewMode === '3d') && (
        <div className="mt-8">
          <div className="flex items-center justify-between mb-6 pb-2 border-b border-[#C5A059]/20">
            <span className="font-mono text-xs uppercase tracking-widest text-[#726860]">
              Full Archive Collection ({gallery.length} Exhibits)
            </span>
            <span className="font-mono text-[11px] text-[#C5A059]">
              Tap any photo for full view
            </span>
          </div>

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
        </div>
      )}

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
