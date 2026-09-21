import React, { useState } from 'react';
import { FileText, Eye, X, AlertCircle, ShieldAlert } from 'lucide-react';
import { birthdayConfig } from '../config/birthday.config';
import { soundFx } from '../hooks/useSoundEffects';

export default function ComplaintDepartment() {
  const [activeEvidence, setActiveEvidence] = useState(null);
  const { complaints } = birthdayConfig;

  const handleOpenEvidence = (complaint) => {
    soundFx.playClick();
    setActiveEvidence(complaint);
  };

  const handleCloseEvidence = () => {
    soundFx.playClick();
    setActiveEvidence(null);
  };

  return (
    <section id="complaints-section" className="py-24 px-4 sm:px-6 max-w-6xl mx-auto relative z-10">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E08D79]/15 text-[#C4738B] text-xs font-mono tracking-wider uppercase">
          <ShieldAlert size={14} />
          Bureau of Sibling Grievances
        </div>
        <h2 className="text-3xl sm:text-5xl font-display font-medium text-[#1E1B18]">
          Official Complaints Filed By Your Brother
        </h2>
        <p className="text-sm sm:text-base font-serif italic text-[#726860]">
          Formal grievances logged over years of cohabitation, snack confiscation, and unprovoked drama.
        </p>
      </div>

      {/* Grid of Complaints */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {complaints.map((item, idx) => (
          <div
            key={item.id}
            className="group relative bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-[#C5A059]/20 shadow-xl shadow-[#1E1B18]/5 hover:shadow-2xl hover:shadow-[#C5A059]/15 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
          >
            {/* Top case header */}
            <div>
              <div className="flex items-center justify-between border-b border-[#1E1B18]/10 pb-3 mb-4">
                <span className="font-mono text-xs font-bold text-[#C5A059] tracking-widest">
                  {item.id}
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#FAF6F0] text-[#726860] uppercase border border-[#C5A059]/20">
                  {item.threatLevel}
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-display font-semibold text-[#1E1B18] mb-2 leading-snug">
                {item.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#726860] leading-relaxed mb-4">
                {item.description}
              </p>
            </div>

            {/* Bottom status & action */}
            <div className="pt-4 border-t border-[#1E1B18]/5 flex items-center justify-between">
              <div>
                <p className="text-[10px] uppercase font-mono text-[#726860]/70">Status</p>
                <p className="text-xs font-mono font-medium text-[#C4738B]">{item.status}</p>
              </div>

              <button
                onClick={() => handleOpenEvidence(item)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FAF6F0] hover:bg-[#C5A059] hover:text-white text-xs font-mono text-[#1E1B18] transition-colors border border-[#C5A059]/30 cursor-pointer"
              >
                <Eye size={12} />
                Evidence
              </button>
            </div>

            {/* Subtle paper clip or stamp accent */}
            <div className="absolute top-2 right-6 w-3 h-8 bg-gradient-to-b from-[#C5A059]/30 to-transparent rounded-sm opacity-40 pointer-events-none" />
          </div>
        ))}
      </div>

      {/* Evidence Modal Popover */}
      {activeEvidence && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
          onClick={handleCloseEvidence}
        >
          <div 
            className="relative bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full border border-[#C5A059]/30 shadow-2xl space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-[#1E1B18]/10 pb-3">
              <div className="flex items-center gap-2">
                <FileText size={16} className="text-[#C5A059]" />
                <span className="font-mono text-xs font-bold text-[#1E1B18] tracking-widest">
                  {activeEvidence.id} • CONFIDENTIAL EXHIBIT
                </span>
              </div>
              <button 
                onClick={handleCloseEvidence}
                className="p-1.5 rounded-full hover:bg-[#FAF6F0] text-[#726860] hover:text-[#1E1B18] transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            <div className="w-full max-h-[380px] rounded-2xl overflow-hidden bg-[#FAF6F0] border border-[#1E1B18]/10 flex items-center justify-center">
              <img
                src={activeEvidence.evidenceImage}
                alt="Case Evidence"
                className="w-full h-full object-cover max-h-[380px]"
              />
            </div>

            <div className="space-y-1 text-center">
              <p className="font-serif italic text-sm text-[#1E1B18]">
                "{activeEvidence.evidenceCaption}"
              </p>
              <p className="font-mono text-[11px] text-[#C4738B] uppercase tracking-wider">
                Forensic Verdict: Indisputable Sibling Guilt
              </p>
            </div>

            <div className="pt-2 text-center">
              <button
                onClick={handleCloseEvidence}
                className="px-5 py-2 rounded-full bg-[#1E1B18] text-white text-xs font-sans tracking-wide hover:bg-[#C5A059] transition-colors"
              >
                Dismiss Case File
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
