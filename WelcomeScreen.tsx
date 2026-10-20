import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface WelcomeScreenProps {
  onComplete: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onComplete }) => {
  const [fadingOut, setFadingOut] = useState(false);

  useEffect(() => {
    // Quick, respectful duration: 2.2s auto-transition
    const timer = setTimeout(() => {
      handleEnter();
    }, 2400);

    return () => clearTimeout(timer);
  }, []);

  const handleEnter = () => {
    setFadingOut(true);
    setTimeout(() => {
      onComplete();
    }, 500);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#070707] text-white transition-opacity duration-500 welcome-screen ${
        fadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Background subtle radial texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-800/20 via-black to-black pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-lg mx-auto">
        {/* Silver Monogram Emblem */}
        <div className="relative mb-8 group">
          <div className="w-20 h-20 rounded-2xl border border-white/20 bg-neutral-900/90 shadow-[0_0_35px_rgba(255,255,255,0.08)] flex items-center justify-center relative overflow-hidden">
            <span className="font-cinzel text-3xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-br from-white via-slate-200 to-slate-400">
              AA
            </span>
            <div className="absolute inset-0 border border-white/10 rounded-2xl" />
          </div>
        </div>

        {/* Introduction Phrase */}
        <p className="text-xs uppercase tracking-[0.35em] text-neutral-400 mb-3 font-medium">
          Mohd. Arhan Ansari
        </p>

        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-white tracking-wide mb-6">
          An Introduction to My World.
        </h1>

        <p className="text-sm text-neutral-400 font-light max-w-md leading-relaxed mb-8">
          Where Business Meets Creativity — Strategic HR, Dynamic Marketing, & Operational Excellence.
        </p>

        {/* Enter Button */}
        <button
          onClick={handleEnter}
          className="group flex items-center gap-3 px-6 py-2.5 rounded-full border border-white/25 hover:border-white text-xs uppercase tracking-[0.2em] font-medium text-white hover:bg-white hover:text-black transition-all duration-300 shadow-sm"
        >
          <span>Enter Portfolio</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>

      {/* Subtle bottom note */}
      <div className="absolute bottom-8 text-[11px] uppercase tracking-widest text-neutral-500">
        Executive Portfolio · 2026
      </div>
    </div>
  );
};
