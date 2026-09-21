import React, { useState } from 'react';
import { Mail, Heart, Sparkles } from 'lucide-react';
import { birthdayConfig } from '../config/birthday.config';
import { soundFx } from '../hooks/useSoundEffects';

export default function EnvelopeLetter() {
  const [isOpen, setIsOpen] = useState(false);
  const { letter } = birthdayConfig;

  const handleOpen = () => {
    soundFx.playHarmonicChime();
    setIsOpen(true);
  };

  return (
    <section className="py-28 px-4 sm:px-6 max-w-4xl mx-auto relative z-10">
      
      {/* Section Pre-text */}
      <div className="text-center max-w-xl mx-auto mb-16 space-y-2">
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#C5A059]">
          Personal Dispatch
        </span>
        <h2 className="text-3xl sm:text-4xl font-display font-medium text-[#1E1B18]">
          {letter.envelopePrompt}
        </h2>
        <p className="text-xs sm:text-sm font-serif italic text-[#726860]">
          Sent with brotherly affection and 0% sarcasm.
        </p>
      </div>

      {/* Envelope Container */}
      <div className="relative max-w-2xl mx-auto perspective-1000 flex flex-col items-center">
        
        {!isOpen ? (
          /* Closed Envelope Card */
          <div className="w-full max-w-md bg-[#FAF6F0] rounded-2xl border-2 border-[#C5A059]/40 p-8 sm:p-12 shadow-2xl shadow-[#C5A059]/15 flex flex-col items-center text-center space-y-6 relative overflow-hidden transition-all duration-500 hover:scale-102">
            
            {/* Envelope flap triangular accents */}
            <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#E8D5C4]/30 to-transparent border-b border-[#C5A059]/20" />
            
            <div className="w-16 h-16 rounded-full bg-[#C5A059]/15 border border-[#C5A059]/40 flex items-center justify-center text-[#C5A059] shadow-inner">
              <Mail size={28} />
            </div>

            <div className="space-y-1 relative z-10">
              <span className="font-mono text-[11px] text-[#726860] uppercase tracking-widest">
                For: Davani Appala
              </span>
              <h3 className="text-2xl font-display font-medium text-[#1E1B18]">
                A Letter From Your Brother
              </h3>
            </div>

            {/* Wax seal styled button */}
            <div className="pt-2 relative z-10">
              <button
                onClick={handleOpen}
                className="group relative inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[#C4738B] text-white font-sans text-xs sm:text-sm font-medium tracking-wide shadow-lg shadow-[#C4738B]/25 hover:bg-[#b05e76] transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
              >
                <Sparkles size={15} className="group-hover:rotate-12 transition-transform" />
                {letter.openButton}
              </button>
            </div>

            <span className="text-[10px] font-mono text-[#726860]/70 uppercase tracking-widest">
              Physical Seal • Click to Unfold
            </span>
          </div>
        ) : (
          /* Unfolded Letter Presentation */
          <div className="w-full bg-[#FFFDF9] rounded-3xl border border-[#C5A059]/30 p-8 sm:p-14 shadow-2xl shadow-[#C5A059]/15 space-y-8 animate-fade-in relative overflow-hidden">
            
            {/* Subtle header stamp */}
            <div className="flex justify-between items-center border-b border-[#C5A059]/20 pb-4">
              <span className="font-mono text-[11px] text-[#C5A059] tracking-widest uppercase">
                {letter.date}
              </span>
              <div className="flex items-center gap-1.5 text-[#C4738B]">
                <Heart size={14} fill="#C4738B" />
                <span className="font-mono text-xs uppercase tracking-wider">Brother's Letter</span>
              </div>
            </div>

            {/* Letter Salutation */}
            <h3 className="text-2xl sm:text-3xl font-display font-semibold text-[#1E1B18]">
              {letter.salutation}
            </h3>

            {/* Paragraphs */}
            <div className="space-y-4 text-sm sm:text-base font-serif text-[#1E1B18]/90 leading-relaxed sm:leading-loose">
              {letter.paragraphs.map((para, i) => (
                <p key={i} className="text-justify">
                  {para}
                </p>
              ))}
            </div>

            {/* Letter Signoff */}
            <div className="pt-8 border-t border-[#C5A059]/20 flex flex-col items-end space-y-1">
              <span className="font-serif italic text-sm text-[#726860]">
                {letter.signoff}
              </span>
              <span className="font-handwriting text-3xl sm:text-4xl text-[#1E1B18] font-bold">
                {letter.signature}
              </span>
            </div>

            {/* Delicate gold corner frames */}
            <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-[#C5A059]/30 rounded-tl-lg pointer-events-none" />
            <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-[#C5A059]/30 rounded-tr-lg pointer-events-none" />
            <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-[#C5A059]/30 rounded-bl-lg pointer-events-none" />
            <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-[#C5A059]/30 rounded-br-lg pointer-events-none" />
          </div>
        )}

      </div>
    </section>
  );
}
