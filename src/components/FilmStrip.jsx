import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Hand } from 'lucide-react';
import { birthdayConfig } from '../config/birthday.config';
import { soundFx } from '../hooks/useSoundEffects';

export default function FilmStrip() {
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const { filmStrip } = birthdayConfig;

  // Mouse Drag to Scroll handlers
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Scroll speed factor
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const scroll = (direction) => {
    soundFx.playClick();
    if (containerRef.current) {
      const scrollAmount = direction === 'left' ? -340 : 340;
      containerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 overflow-hidden relative z-10">
      
      {/* Header */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-[#C5A059] block mb-1">
            Physical Memory Strip
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-medium text-[#1E1B18]">
            The Sibling Film Reel
          </h2>
          <p className="text-xs sm:text-sm font-serif italic text-[#726860] mt-1">
            Drag, swipe, or hover over prints to straighten and read the secret notes.
          </p>
        </div>

        {/* Scroll Nav Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => scroll('left')}
            className="p-2.5 rounded-full bg-white/80 hover:bg-white border border-[#C5A059]/30 text-[#1E1B18] shadow-sm hover:shadow-md transition-all active:scale-90 cursor-pointer"
            aria-label="Scroll left"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => scroll('right')}
            className="p-2.5 rounded-full bg-white/80 hover:bg-white border border-[#C5A059]/30 text-[#1E1B18] shadow-sm hover:shadow-md transition-all active:scale-90 cursor-pointer"
            aria-label="Scroll right"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Draggable Film Strip Reel */}
      <div
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        className={`flex items-center gap-8 px-8 sm:px-16 py-8 overflow-x-auto scrollbar-none cursor-grab ${
          isDragging ? 'cursor-grabbing select-none' : ''
        }`}
        style={{ scrollSnapType: isDragging ? 'none' : 'x mandatory' }}
      >
        {filmStrip.map((item, idx) => (
          <div
            key={idx}
            className="shrink-0 w-72 sm:w-80 group transition-transform duration-500 hover:rotate-0 hover:scale-105 hover:z-20 relative select-none"
            style={{ 
              transform: `rotate(${item.rotation})`,
              scrollSnapAlign: 'center'
            }}
          >
            {/* Washi Tape at top */}
            <div className="washi-tape" />

            {/* Polaroid Container */}
            <div className="bg-white p-3.5 pb-6 rounded-lg shadow-xl shadow-[#1E1B18]/10 border border-[#E8D5C4]/50 flex flex-col gap-3 transition-shadow duration-300 group-hover:shadow-2xl">
              
              {/* Photo */}
              <div className="aspect-4/5 w-full rounded overflow-hidden bg-[#FAF6F0] relative">
                <img
                  src={item.photo}
                  alt={item.note}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 pointer-events-none"
                  loading="lazy"
                />
              </div>

              {/* Handwritten note caption */}
              <div className="text-center pt-2">
                <p className="font-handwriting text-xl sm:text-2xl text-[#1E1B18] leading-tight group-hover:text-[#C4738B] transition-colors">
                  "{item.note}"
                </p>
              </div>

            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-4">
        <span className="text-[11px] font-mono text-[#726860]/70 uppercase tracking-widest inline-flex items-center gap-1.5">
          <Hand size={12} /> Drag or swipe horizontally to explore all memories
        </span>
      </div>

    </section>
  );
}
