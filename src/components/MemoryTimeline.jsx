import React from 'react';
import { Calendar, Sparkles } from 'lucide-react';
import { birthdayConfig } from '../config/birthday.config';

export default function MemoryTimeline() {
  const { timeline } = birthdayConfig;

  return (
    <section className="py-28 px-4 sm:px-6 max-w-5xl mx-auto relative z-10">
      
      {/* Editorial Header */}
      <div className="text-center max-w-2xl mx-auto mb-20 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C5A059]/15 text-[#C5A059] text-xs font-mono tracking-widest uppercase">
          <Sparkles size={14} />
          Nostalgic Chapters
        </div>
        <h2 className="text-3xl sm:text-5xl font-display font-medium text-[#1E1B18]">
          Somehow, We Grew Up.
        </h2>
        <p className="text-sm sm:text-base font-serif italic text-[#726860]">
          We were smaller. We fought over smaller things. Life was simpler. And somehow every year went faster.
        </p>
      </div>

      {/* Timeline spine */}
      <div className="relative">
        <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-transparent via-[#C5A059]/30 to-transparent" />

        {/* Timeline items */}
        <div className="space-y-16 sm:space-y-24">
          {timeline.map((item, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <div
                key={idx}
                className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${
                  isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Photo Column */}
                <div className="w-full md:w-1/2 flex justify-center">
                  <div className="relative group max-w-sm w-full">
                    <div className="relative aspect-[3/4] sm:aspect-4/5 rounded-2xl overflow-hidden border-2 border-white/80 bg-white shadow-xl shadow-[#1E1B18]/5 transition-all duration-700 group-hover:scale-102 group-hover:shadow-2xl">
                      <img
                        src={item.photo}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        style={{ objectPosition: item.objectPosition || 'center top' }}
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Polaroid-style stamp */}
                    <div className="absolute -bottom-3 left-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full border border-[#C5A059]/30 text-[11px] font-mono text-[#726860] shadow-sm">
                      {item.tag}
                    </div>
                  </div>
                </div>

                {/* Text / Milestone Column */}
                <div className="w-full md:w-1/2 space-y-3 text-center md:text-left">
                  <div className={`flex items-center gap-2 justify-center ${isEven ? 'md:justify-start' : 'md:justify-start'} text-xs font-mono text-[#C5A059] uppercase tracking-wider`}>
                    <Calendar size={14} />
                    <span>{item.year}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-display font-medium text-[#1E1B18]">
                    {item.title}
                  </h3>

                  <p className="text-sm sm:text-base font-serif text-[#726860] leading-relaxed max-w-md">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
}
