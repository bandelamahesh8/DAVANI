import React from 'react';

export default function BackgroundEffects() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Light orbs with soft blur */}
      <div 
        className="absolute w-[500px] h-[500px] rounded-full bg-[#F5E6D3] opacity-40 blur-[100px] -top-32 -left-32 animate-gentle-drift"
        style={{ animationDuration: '24s' }}
      />
      <div 
        className="absolute w-[450px] h-[450px] rounded-full bg-[#FCECEF] opacity-35 blur-[120px] top-1/3 -right-24 animate-gentle-drift"
        style={{ animationDuration: '28s', animationDelay: '-7s' }}
      />
      <div 
        className="absolute w-[400px] h-[400px] rounded-full bg-[#F0E6D8] opacity-30 blur-[90px] bottom-10 left-1/4 animate-gentle-drift"
        style={{ animationDuration: '22s', animationDelay: '-14s' }}
      />

      {/* Film grain texture */}
      <div className="film-grain" />

      {/* Very faint background geometric rings for editorial feel */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-[#C5A059]/10 pointer-events-none animate-spin" style={{ animationDuration: '180s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[1100px] rounded-full border border-dashed border-[#C5A059]/5 pointer-events-none animate-spin" style={{ animationDuration: '240s', animationDirection: 'reverse' }} />
    </div>
  );
}
