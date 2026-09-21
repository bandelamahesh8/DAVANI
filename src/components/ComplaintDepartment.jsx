import React, { useState } from 'react';
import { 
  ShieldAlert, 
  Scale, 
  PhoneCall, 
  AlertOctagon, 
  X, 
  FileText, 
  Eye, 
  Gavel, 
  Sparkles, 
  ArrowUpRight,
  Flame,
  CheckCheck
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { birthdayConfig } from '../config/birthday.config';
import { soundFx } from '../hooks/useSoundEffects';
import { RadialScrollGallery } from '@/components/ui/portfolio-and-image-gallery';
import { Badge } from '@/components/ui/badge';

const unsplashFallbacks = [
  "https://images.unsplash.com/photo-1584905066893-7d5c142ba4e1?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80"
];

export default function ComplaintDepartment() {
  const [activeEvidence, setActiveEvidence] = useState(null);
  const [guiltyCases, setGuiltyCases] = useState({});
  const [activeToast, setActiveToast] = useState(null);
  const { complaints } = birthdayConfig;

  const handleOpenEvidence = (complaint) => {
    soundFx.playClick();
    setActiveEvidence(complaint);
  };

  const handleCloseEvidence = () => {
    soundFx.playClick();
    setActiveEvidence(null);
  };

  // Sibling Action: Plead Guilty
  const handlePleadGuilty = (caseId, title) => {
    soundFx.playGavel();
    setGuiltyCases(prev => ({ ...prev, [caseId]: true }));
    
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#E08D79', '#C4738B', '#C5A059']
    });

    setActiveToast({
      type: 'guilty',
      title: 'GUILTY PLEA ENTERED! ⚖️',
      message: `Plea accepted for ${caseId}. Penalty of ₹500 + 1 plate of French fries billed to Davani's conscience!`
    });

    setTimeout(() => {
      setActiveToast(null);
    }, 4500);
  };

  // Sibling Action: Call Mom (Snitch Mode)
  const handleCallMom = (caseId) => {
    soundFx.playPhoneRing();

    setActiveToast({
      type: 'mom',
      title: 'CALLING HEADQUARTERS (MOM)... 📞',
      message: "📱 Ringing... Connected! Mom's verdict: 'Don't fight with your brother, and Mahesh is older so listen to him.' Appeal Denied! 😂"
    });

    setTimeout(() => {
      setActiveToast(null);
    }, 5500);
  };

  return (
    <section id="complaints-section" className="py-28 px-4 sm:px-6 max-w-7xl mx-auto relative z-10">
      
      {/* BIG Cute Side GIF: Left Upper Margin */}
      <div className="hidden xl:flex flex-col items-center absolute -left-28 2xl:-left-44 top-28 z-20 animate-soft-float pointer-events-auto">
        <div className="relative group cursor-pointer" onClick={() => soundFx.playBuzzer()}>
          <img 
            src="/gifs/mochi-cat-angry-cat.gif" 
            alt="Angry Sister Cat" 
            className="w-44 h-44 xl:w-52 xl:h-52 object-contain rounded-3xl drop-shadow-2xl hover:scale-115 transition-transform" 
          />
          <div className="mt-2 text-center bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#C4738B]/40 shadow-xl text-xs font-mono text-[#C4738B] font-bold tracking-wide">
            "I AM INNOCENT! 😾"
          </div>
        </div>
      </div>

      {/* BIG Cute Side GIF: Right Upper Margin */}
      <div className="hidden xl:flex flex-col items-center absolute -right-28 2xl:-right-44 top-40 z-20 animate-soft-float pointer-events-auto" style={{ animationDelay: '-3s' }}>
        <div className="relative group cursor-pointer" onClick={() => soundFx.playGavel()}>
          <img 
            src="/gifs/frog-run.gif" 
            alt="Fleeing Crime Scene" 
            className="w-48 h-48 xl:w-56 xl:h-56 object-contain rounded-3xl drop-shadow-2xl hover:scale-115 transition-transform" 
          />
          <div className="mt-2 text-center bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#C5A059]/40 shadow-xl text-xs font-mono text-[#1E1B18] font-bold tracking-wide">
            "Fleeing with brother's fries 🍟"
          </div>
        </div>
      </div>

      {/* BIG Cute Side GIF: Left Lower Margin */}
      <div className="hidden xl:flex flex-col items-center absolute -left-28 2xl:-left-44 top-[62%] z-20 animate-soft-float pointer-events-auto" style={{ animationDelay: '-5s' }}>
        <div className="relative group cursor-pointer" onClick={() => soundFx.playPhoneRing()}>
          <img 
            src="/gifs/milkangry-milk-and-mocha.gif" 
            alt="Pouting Sister" 
            className="w-40 h-40 xl:w-48 xl:h-48 object-contain rounded-3xl drop-shadow-2xl hover:scale-115 transition-transform" 
          />
          <div className="mt-2 text-center bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#E08D79]/40 shadow-xl text-xs font-mono text-[#C4738B] font-bold tracking-wide">
            "Dialing Mom right now! 📱"
          </div>
        </div>
      </div>

      {/* BIG Cute Side GIF: Right Lower Margin */}
      <div className="hidden xl:flex flex-col items-center absolute -right-28 2xl:-right-44 top-[65%] z-20 animate-soft-float pointer-events-auto" style={{ animationDelay: '-2s' }}>
        <div className="relative group cursor-pointer" onClick={() => soundFx.playClick()}>
          <img 
            src="/gifs/sanjay-chat-tamil-chat.gif" 
            alt="Sister Chat Reaction" 
            className="w-40 h-40 xl:w-48 xl:h-48 object-contain rounded-3xl drop-shadow-2xl hover:scale-115 transition-transform" 
          />
          <div className="mt-2 text-center bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#C5A059]/40 shadow-xl text-xs font-mono text-[#726860] font-bold tracking-wide">
            "Caught in 4K resolution 📸"
          </div>
        </div>
      </div>

      {/* Interactive Toast Notification */}
      {activeToast && (
        <div className="fixed top-8 left-1/2 -translate-x-1/2 z-50 max-w-md w-[92%] bg-[#1E1B18] text-[#FAF6F0] p-4 sm:p-5 rounded-2xl border-2 border-[#C4738B] shadow-2xl animate-bounce">
          <div className="flex items-start justify-between gap-3">
            <div className="space-y-1">
              <span className="font-mono text-xs font-bold text-[#E08D79] tracking-wider block">
                {activeToast.title}
              </span>
              <p className="text-xs sm:text-sm font-sans leading-relaxed text-white/90">
                {activeToast.message}
              </p>
            </div>
            <button
              onClick={() => setActiveToast(null)}
              className="p-1 rounded-full hover:bg-white/10 text-white/60 hover:text-white"
            >
              <X size={16} />
            </button>
          </div>
        </div>
      )}

      {/* Crime Bureau Editorial Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        
        {/* Top Secret Stamp Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E08D79]/15 border border-[#C4738B]/40 text-[#C4738B] text-xs font-mono font-bold tracking-widest uppercase shadow-sm">
          <ShieldAlert size={15} className="animate-pulse" />
          <span>DECLASSIFIED SIBLING DOSSIER • CASE RECORDS</span>
        </div>

        <div className="flex items-center justify-center gap-3 sm:gap-5">
          <img 
            src="/gifs/mochi-cat-angry-cat.gif" 
            alt="Angry Sister Cat" 
            className="w-12 h-12 sm:w-16 sm:h-16 object-contain rounded-xl drop-shadow-md -scale-x-100 hidden sm:block" 
          />
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold text-[#1E1B18] tracking-tight">
            Bureau of Sibling Grievances
          </h2>
          <img 
            src="/gifs/mochi-cat-angry-cat.gif" 
            alt="Angry Sister Cat" 
            className="w-12 h-12 sm:w-16 sm:h-16 object-contain rounded-xl drop-shadow-md hidden sm:block" 
          />
        </div>

        <p className="text-sm sm:text-base font-serif italic text-[#726860] max-w-2xl mx-auto">
          A forensic record of unprovoked crimes, stolen French fries, missing hoodies, and Olympic-level gaslighting logged across 20+ years of cohabitation.
        </p>

        {/* Forensic Sibling Statistics Ticker */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto pt-3">
          <div className="bg-[#FAF6F0] border border-[#C5A059]/30 rounded-xl p-2.5 text-center">
            <span className="text-[10px] font-mono text-[#726860] uppercase block">Cases Logged</span>
            <span className="text-lg font-bold font-mono text-[#1E1B18]">5 Felonies</span>
          </div>
          <div className="bg-[#FAF6F0] border border-[#C5A059]/30 rounded-xl p-2.5 text-center">
            <span className="text-[10px] font-mono text-[#726860] uppercase block">Guilty Rate</span>
            <span className="text-lg font-bold font-mono text-[#C4738B]">100% Conviction</span>
          </div>
          <div className="bg-[#FAF6F0] border border-[#C5A059]/30 rounded-xl p-2.5 text-center">
            <span className="text-[10px] font-mono text-[#726860] uppercase block">Hoodies Recovered</span>
            <span className="text-lg font-bold font-mono text-[#E08D79]">0 Returned</span>
          </div>
          <div className="bg-[#FAF6F0] border border-[#C5A059]/30 rounded-xl p-2.5 text-center">
            <span className="text-[10px] font-mono text-[#726860] uppercase block">Sister Remorse</span>
            <span className="text-lg font-bold font-mono text-[#726860]">-47% (None)</span>
          </div>
        </div>

      </div>

      {/* Grid of Classified Case Dossiers */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {complaints.map((item, idx) => {
          const isGuilty = guiltyCases[item.id];

          return (
            <div
              key={item.id}
              className="group relative bg-[#FFFDF9] rounded-3xl p-6 sm:p-7 border-2 border-[#D9C2A7]/60 shadow-xl shadow-[#1E1B18]/5 hover:shadow-2xl hover:border-[#C5A059] transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 overflow-hidden"
            >
              {/* Manila Folder Tab Accent */}
              <div className="absolute top-0 left-6 px-4 py-1 bg-[#D9C2A7]/30 border-b border-x border-[#D9C2A7] rounded-b-lg font-mono text-[10px] font-bold text-[#726860] uppercase tracking-wider">
                {item.crimeCode || item.id}
              </div>

              {/* Red Diagonal Rubber Stamp (Appears on Hover or when Guilty Pleaded) */}
              <div 
                className={`absolute top-10 right-3 z-30 pointer-events-none transition-all duration-300 transform rotate-12 ${
                  isGuilty 
                    ? 'scale-110 opacity-100 rotate-[-14deg]' 
                    : 'opacity-70 group-hover:opacity-100 group-hover:scale-105'
                }`}
              >
                <div className="px-3 py-1 border-2 border-dashed border-[#C4738B] bg-white/90 backdrop-blur-sm rounded-md text-[#C4738B] font-mono text-xs font-black tracking-widest uppercase shadow-sm">
                  {isGuilty ? '🔴 CONVICTED' : item.stamp}
                </div>
              </div>

              {/* Case Content */}
              <div className="pt-4 space-y-4">
                
                {/* Header Info */}
                <div className="flex items-center justify-between border-b border-[#1E1B18]/10 pb-3">
                  <span className="font-mono text-xs font-bold text-[#C5A059] tracking-widest">
                    {item.id}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#E08D79]/15 text-[#C4738B] font-bold uppercase border border-[#C4738B]/30">
                    {item.threatLevel}
                  </span>
                </div>

                {/* Case Title */}
                <h3 className="text-xl sm:text-2xl font-display font-bold text-[#1E1B18] leading-tight group-hover:text-[#C4738B] transition-colors">
                  {item.title}
                </h3>

                {/* Crime Evidence Photo (Framed with exact objectPosition) */}
                <div 
                  onClick={() => handleOpenEvidence(item)}
                  className="relative overflow-hidden rounded-2xl bg-[#1E1B18] border border-[#C5A059]/40 h-44 sm:h-48 group-hover:h-52 transition-all duration-500 cursor-pointer shadow-inner"
                >
                  <img
                    src={item.evidenceImage}
                    alt={item.title}
                    onError={(e) => {
                      e.currentTarget.src = unsplashFallbacks[idx % unsplashFallbacks.length];
                    }}
                    style={{ objectPosition: item.objectPosition || 'center center' }}
                    className="w-full h-full object-cover filter brightness-[0.96] contrast-[1.05] transition-all duration-700 ease-out group-hover:scale-105 group-hover:brightness-100"
                    loading="lazy"
                  />
                  
                  {/* Crime Scene Watermark Badge */}
                  <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded bg-black/75 backdrop-blur-md text-[10px] font-mono text-[#F4E8D5] uppercase tracking-wider flex items-center gap-1.5 border border-[#C5A059]/30">
                    <Eye size={11} className="text-[#C5A059]" />
                    <span>EXHIBIT • {item.id}</span>
                  </div>

                  {/* Evidence caption bar */}
                  <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/90 via-black/50 to-transparent text-white text-[11px] font-serif italic flex items-center justify-between">
                    <span className="truncate max-w-[80%]">"{item.evidenceCaption}"</span>
                    <span className="text-[10px] font-mono text-[#C5A059] opacity-90 group-hover:opacity-100 flex items-center gap-0.5">
                      Enlarge <ArrowUpRight size={11} />
                    </span>
                  </div>
                </div>

                {/* Roasted Dialogues: Sister's Defense vs Brother's Indictment */}
                <div className="space-y-2.5 text-xs">
                  {/* Sister's Defense Bubble */}
                  <div className="p-3 rounded-xl bg-[#FAF6F0] border-l-3 border-[#C5A059] space-y-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#726860] font-bold block">
                      Sister's Defense Testimony:
                    </span>
                    <p className="font-serif italic text-[#1E1B18] text-xs sm:text-[13px] leading-snug">
                      {item.sisterDefense || `"${item.description}"`}
                    </p>
                  </div>

                  {/* Brother's Indictment Note */}
                  <div className="p-3 rounded-xl bg-[#FCECEF]/60 border-l-3 border-[#C4738B] space-y-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#C4738B] font-bold block">
                      Brother's Forensic Finding:
                    </span>
                    <p className="font-sans text-[#1E1B18]/90 text-xs sm:text-[13px] leading-snug">
                      {item.brotherIndictment || item.description}
                    </p>
                  </div>

                  {/* Penalty Sentence */}
                  {item.penalty && (
                    <div className="text-[11px] font-mono text-[#C5A059] font-medium pt-1">
                      ⚖️ {item.penalty}
                    </div>
                  )}
                </div>

              </div>

              {/* Teasing Sibling Action Buttons */}
              <div className="pt-5 mt-4 border-t border-[#1E1B18]/10 space-y-2">
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => handlePleadGuilty(item.id, item.title)}
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-[#1E1B18] text-white hover:bg-[#C4738B] text-[11px] font-mono transition-all duration-200 hover:scale-102 active:scale-95 cursor-pointer shadow-sm"
                  >
                    <Gavel size={12} className="text-[#C5A059]" />
                    <span>Plead Guilty</span>
                  </button>

                  <button
                    onClick={() => handleCallMom(item.id)}
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-[#FAF6F0] hover:bg-[#E08D79]/20 text-[#1E1B18] border border-[#C5A059]/30 text-[11px] font-mono transition-all duration-200 hover:scale-102 active:scale-95 cursor-pointer"
                  >
                    <PhoneCall size={12} className="text-[#C4738B]" />
                    <span>Call Mom 📱</span>
                  </button>
                </div>

                <button
                  onClick={() => handleOpenEvidence(item)}
                  className="w-full inline-flex items-center justify-center gap-1.5 py-1.5 rounded-lg text-[11px] font-mono text-[#726860] hover:text-[#1E1B18] hover:bg-[#FAF6F0] transition-colors cursor-pointer"
                >
                  <Eye size={12} />
                  <span>Inspect Confidential Dossier</span>
                </button>
              </div>

            </div>
          );
        })}
      </div>

      {/* 360° Circular Forensic Evidence Vault (RadialScrollGallery) */}
      <div id="evidence-vault" className="mt-28 pt-16 border-t border-[#C5A059]/20 relative">
        <div className="text-center max-w-2xl mx-auto mb-6 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C5A059]/15 text-[#1E1B18] text-xs font-mono tracking-widest uppercase">
            <Scale size={14} className="text-[#C5A059]" />
            Evidence Reel • Physical Exhibits
          </div>
          <h3 className="text-2xl sm:text-4xl font-display font-medium text-[#1E1B18]">
            The 360° Forensic Evidence Wheel
          </h3>
          <p className="text-xs sm:text-base font-serif italic text-[#726860]">
            Scroll to rotate through the unredacted visual evidence submitted into the public sibling record.
          </p>
          <div className="animate-bounce text-[#C5A059] text-xs font-mono pt-2">
            ↓ Scroll through the vault
          </div>
        </div>

        <RadialScrollGallery
          className="!min-h-[620px]"
          baseRadius={420}
          mobileRadius={240}
          visiblePercentage={48}
          scrollDuration={2200}
          onItemSelect={(index) => handleOpenEvidence(complaints[index])}
        >
          {(hoveredIndex) =>
            complaints.map((item, index) => {
              const isActive = hoveredIndex === index;
              const categoryBadge = item.crimeCode || `CRIME-${index + 1}`;
              const badgeVariant = index === 0 || index === 4 ? "destructive" : index === 1 ? "secondary" : "outline";

              return (
                <div
                  key={item.id}
                  onClick={() => handleOpenEvidence(item)}
                  className="group relative w-[210px] h-[290px] sm:w-[250px] sm:h-[330px] overflow-hidden rounded-2xl bg-white border border-[#C5A059]/30 shadow-xl shadow-[#1E1B18]/10 cursor-pointer"
                >
                  <div className="absolute inset-0 overflow-hidden">
                    <img
                      src={item.evidenceImage}
                      alt={item.title}
                      onError={(e) => {
                        e.currentTarget.src = unsplashFallbacks[index % unsplashFallbacks.length];
                      }}
                      style={{ objectPosition: item.objectPosition || 'center center' }}
                      className={`h-full w-full object-cover transition-transform duration-700 ease-out ${
                        isActive ? 'scale-110 blur-0' : 'scale-100 blur-[0.5px] grayscale-[20%]'
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-85" />
                  </div>

                  <div className="absolute inset-0 flex flex-col justify-between p-4 z-10 text-white">
                    <div className="flex justify-between items-start">
                      <div className="space-y-1">
                        <span className="font-mono text-[10px] text-[#C5A059] tracking-widest block font-bold">
                          {item.id}
                        </span>
                        <Badge variant={badgeVariant} className="text-[9px] px-2 py-0 uppercase">
                          {categoryBadge}
                        </Badge>
                      </div>
                      <div
                        className={`w-7 h-7 rounded-full bg-[#C5A059] text-white flex items-center justify-center transition-all duration-500 shadow-md ${
                          isActive ? 'opacity-100 rotate-0 scale-110' : 'opacity-70 -rotate-45'
                        }`}
                      >
                        <ArrowUpRight size={14} />
                      </div>
                    </div>

                    <div className={`transition-transform duration-500 ${isActive ? 'translate-y-0' : 'translate-y-1.5'}`}>
                      <h4 className="text-sm sm:text-base font-display font-bold leading-tight text-white drop-shadow-sm line-clamp-2">
                        {item.title}
                      </h4>
                      <p className="text-[11px] font-serif italic text-white/80 line-clamp-2 mt-1">
                        "{item.evidenceCaption}"
                      </p>
                      <div
                        className={`h-0.5 bg-[#C5A059] mt-2 transition-all duration-500 ${
                          isActive ? 'w-full opacity-100' : 'w-0 opacity-0'
                        }`}
                      />
                    </div>
                  </div>
                </div>
              );
            })
          }
        </RadialScrollGallery>
      </div>

      {/* Forensic Case File Modal Popover */}
      {activeEvidence && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fade-in"
          onClick={handleCloseEvidence}
        >
          <div 
            className="relative bg-[#FFFDF9] rounded-3xl p-6 sm:p-8 max-w-lg w-full border-2 border-[#C5A059] shadow-2xl space-y-4 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Confidential Dossier Header */}
            <div className="flex items-center justify-between border-b border-[#1E1B18]/15 pb-3">
              <div className="flex items-center gap-2">
                <FileText size={18} className="text-[#C4738B]" />
                <span className="font-mono text-xs font-bold text-[#1E1B18] tracking-widest uppercase">
                  {activeEvidence.id} • CONFIDENTIAL EXHIBIT FILE
                </span>
              </div>
              <button 
                onClick={handleCloseEvidence}
                className="p-1.5 rounded-full hover:bg-[#FAF6F0] text-[#726860] hover:text-[#1E1B18] transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            {/* Evidence Image */}
            <div className="w-full max-h-[340px] rounded-2xl overflow-hidden bg-black border border-[#1E1B18]/10 flex items-center justify-center">
              <img
                src={activeEvidence.evidenceImage}
                alt="Case Evidence"
                style={{ objectPosition: activeEvidence.objectPosition || 'center center' }}
                onError={(e) => {
                  e.currentTarget.src = unsplashFallbacks[0];
                }}
                className="w-full h-full object-cover max-h-[340px]"
              />
            </div>

            {/* Case Details */}
            <div className="space-y-2">
              <h4 className="font-display font-bold text-xl text-[#1E1B18]">
                {activeEvidence.title}
              </h4>

              <div className="p-3 rounded-xl bg-[#FAF6F0] text-xs font-serif italic text-[#726860] border-l-2 border-[#C5A059]">
                Defense Excuse: {activeEvidence.sisterDefense || `"${activeEvidence.evidenceCaption}"`}
              </div>

              <div className="p-3 rounded-xl bg-[#FCECEF]/80 text-xs font-sans text-[#1E1B18] border-l-2 border-[#C4738B]">
                Prosecution Statement: {activeEvidence.brotherIndictment || activeEvidence.description}
              </div>

              <p className="font-mono text-[11px] text-[#C4738B] uppercase tracking-wider text-center pt-1 font-bold">
                Court Verdict: 100% Sibling Guilt • No Right of Appeal
              </p>
            </div>

            {/* Modal Actions */}
            <div className="pt-2 flex items-center justify-center gap-3">
              <button
                onClick={() => {
                  handlePleadGuilty(activeEvidence.id, activeEvidence.title);
                  handleCloseEvidence();
                }}
                className="px-5 py-2.5 rounded-full bg-[#C4738B] text-white text-xs font-mono tracking-wide hover:bg-[#b05e76] transition-colors cursor-pointer shadow-md"
              >
                Plead Guilty (₹500) ⚖️
              </button>

              <button
                onClick={handleCloseEvidence}
                className="px-5 py-2.5 rounded-full bg-[#1E1B18] text-white text-xs font-mono tracking-wide hover:bg-[#C5A059] transition-colors cursor-pointer"
              >
                Close Case File
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
