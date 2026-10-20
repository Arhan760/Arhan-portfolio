import React from 'react';
import { ArrowLeft, Compass } from 'lucide-react';

interface NotFoundViewProps {
  onReturnHome: () => void;
}

export const NotFoundView: React.FC<NotFoundViewProps> = ({ onReturnHome }) => {
  return (
    <div className="min-h-[85vh] flex flex-col items-center justify-center p-6 text-center text-white">
      <div className="w-20 h-20 rounded-2xl border border-neutral-700 bg-neutral-900/80 flex items-center justify-center mb-8 shadow-2xl">
        <span className="font-cinzel text-3xl font-bold tracking-widest text-silver">
          404
        </span>
      </div>

      <p className="text-xs uppercase tracking-[0.3em] text-neutral-400 font-mono mb-2">
        Coordinates Uncharted
      </p>

      <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-white mb-4">
        Page Not Located
      </h1>

      <p className="text-sm text-neutral-400 max-w-md font-light leading-relaxed mb-8">
        The portfolio page or briefing document you requested does not exist or has been relocated within Mohd. Arhan Ansari&apos;s executive directory.
      </p>

      <button
        onClick={onReturnHome}
        className="px-6 py-3 rounded-xl bg-white hover:bg-neutral-200 text-neutral-950 font-semibold text-xs uppercase tracking-widest flex items-center gap-2 shadow-lg transition-all"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Return to Home</span>
      </button>
    </div>
  );
};
