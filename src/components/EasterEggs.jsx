import React from 'react';
import { Sparkles, X } from 'lucide-react';

export default function EasterEggs({ activeEgg, onClose }) {
  if (!activeEgg) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative bg-[#FFFDF9] rounded-3xl p-6 sm:p-8 max-w-sm w-full border-2 border-[#C5A059]/50 shadow-2xl text-center space-y-4"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-[#FAF6F0] text-[#726860] transition-colors"
        >
          <X size={18} />
        </button>

        <div className="w-12 h-12 rounded-full bg-[#C5A059]/15 border border-[#C5A059]/40 flex items-center justify-center mx-auto text-[#C5A059]">
          <Sparkles size={24} className="animate-spin" style={{ animationDuration: '4s' }} />
        </div>

        <div className="space-y-1">
          <span className="font-mono text-[11px] uppercase tracking-widest text-[#C5A059]">
            {activeEgg.title}
          </span>
          <h3 className="text-xl sm:text-2xl font-display font-medium text-[#1E1B18]">
            "{activeEgg.message}"
          </h3>
          <p className="text-xs font-mono text-[#C4738B] pt-1">
            {activeEgg.subtext}
          </p>
        </div>

        <div className="pt-2">
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-full bg-[#1E1B18] text-white text-xs font-sans hover:bg-[#C5A059] transition-colors"
          >
            Acknowledge & Continue
          </button>
        </div>
      </div>
    </div>
  );
}
