import React, { useState, useEffect } from 'react';
import { birthdayConfig } from '../config/birthday.config';
import { soundFx } from '../hooks/useSoundEffects';

export default function OpeningExperience({ onComplete }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [showButton, setShowButton] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (currentStep < birthdayConfig.openingMessages.length) {
      const timer = setTimeout(() => {
        setCurrentStep(prev => prev + 1);
      }, birthdayConfig.openingMessages[currentStep].delay);
      return () => clearTimeout(timer);
    } else {
      const btnTimer = setTimeout(() => setShowButton(true), 400);
      return () => clearTimeout(btnTimer);
    }
  }, [currentStep]);

  const handleProceed = () => {
    soundFx.playClick();
    soundFx.playDiagnosticBeep(true);
    setIsExiting(true);
    setTimeout(() => {
      onComplete();
    }, 900);
  };

  return (
    <div 
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#151311] text-[#FAF6F0] p-6 transition-all duration-1000 ${
        isExiting ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* Background subtle noise and glow */}
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_center,rgba(197,160,89,0.2)_0%,transparent_70%)]" />
      
      <div className="relative max-w-xl w-full text-center space-y-8 flex flex-col items-center justify-center min-h-[300px]">
        <div className="space-y-4">
          {birthdayConfig.openingMessages.map((msg, index) => {
            if (index > currentStep) return null;
            const isLatest = index === currentStep;
            return (
              <p
                key={index}
                className={`font-serif tracking-wide transition-all duration-700 ${
                  index === birthdayConfig.openingMessages.length - 1
                    ? 'text-3xl sm:text-4xl text-[#C5A059] font-medium pt-4'
                    : isLatest
                    ? 'text-xl sm:text-2xl text-[#FAF6F0] opacity-100 scale-100'
                    : 'text-base sm:text-lg text-[#726860] opacity-50'
                }`}
              >
                {msg.text}
              </p>
            );
          })}
        </div>

        {/* Action Button */}
        {showButton && (
          <div className="pt-6 animate-fade-in transition-all duration-700">
            <button
              onClick={handleProceed}
              className="group relative px-8 py-3.5 rounded-full bg-[#FAF6F0] text-[#151311] font-sans font-medium text-sm sm:text-base tracking-wider hover:bg-[#C5A059] hover:text-[#151311] shadow-2xl hover:shadow-[#C5A059]/30 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span className="relative z-10 flex items-center gap-2">
                {birthdayConfig.openingButtonText}
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </span>
            </button>
            <p className="text-xs text-[#726860] mt-3 font-mono tracking-widest uppercase">
              Click to initiate verification
            </p>
          </div>
        )}
      </div>

      <div className="absolute bottom-8 text-center">
        <span className="text-[11px] font-mono tracking-[0.25em] text-[#726860] uppercase">
          Confidential • Sibling Protocol
        </span>
      </div>
    </div>
  );
}
