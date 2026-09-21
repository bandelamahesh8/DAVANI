import { useState, useEffect } from 'react';
import { soundFx } from './useSoundEffects';

export function useEasterEggs() {
  const [activeEgg, setActiveEgg] = useState(null);
  const [sisterNameClicks, setSisterNameClicks] = useState(0);

  // Keyboard sequence listener: S-I-S
  useEffect(() => {
    let buffer = [];
    const targetSequence = ['s', 'i', 's'];

    const handleKeyDown = (e) => {
      // Ignore if inside an input or textarea
      if (['input', 'textarea'].includes(e.target.tagName.toLowerCase())) return;

      buffer.push(e.key.toLowerCase());
      if (buffer.length > targetSequence.length) {
        buffer.shift();
      }

      if (buffer.join('') === targetSequence.join('')) {
        soundFx.playCelebration();
        setActiveEgg({
          title: "SECRET EASTER EGG UNLOCKED 🔑",
          message: "Certified favourite sister.",
          subtext: "(You're also my only candidate.)"
        });
        buffer = [];
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // 5 clicks on sister's name
  const triggerSisterNameClick = () => {
    const nextCount = sisterNameClicks + 1;
    setSisterNameClicks(nextCount);

    if (nextCount === 5) {
      soundFx.playDiagnosticBeep(false);
      setActiveEgg({
        title: "OBSERVATION DETECTED 👁️",
        message: "Why are you clicking your own name? 😭",
        subtext: "Are you expecting an achievement trophy or something?"
      });
      setSisterNameClicks(0);
    }
  };

  const closeEgg = () => {
    soundFx.playClick();
    setActiveEgg(null);
  };

  return {
    activeEgg,
    triggerSisterNameClick,
    closeEgg
  };
}
