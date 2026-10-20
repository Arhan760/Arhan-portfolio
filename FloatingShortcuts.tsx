import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { MessageSquare, Mail } from 'lucide-react';

export const FloatingShortcuts: React.FC = () => {
  const { personal } = portfolioData;

  return (
    <div className="fixed bottom-20 lg:bottom-8 right-6 z-40 flex flex-col gap-3 no-print">
      {/* WhatsApp Floating Shortcut */}
      <a
        href={personal.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp Message"
        className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-[0_4px_20px_rgba(16,185,129,0.35)] transition-all duration-300 hover:scale-110"
        title="WhatsApp Direct Message"
      >
        <MessageSquare className="w-5 h-5 fill-current" />
        <span className="absolute right-14 px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-white text-xs font-medium tracking-wide whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-150 shadow-xl">
          Chat on WhatsApp
        </span>
      </a>

      {/* Direct Email Floating Shortcut */}
      <a
        href={`mailto:${personal.email}`}
        aria-label="Send Direct Email"
        className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-neutral-900 hover:bg-neutral-800 border border-neutral-700/80 text-white shadow-[0_4px_20px_rgba(0,0,0,0.5)] transition-all duration-300 hover:scale-110"
        title="Send Direct Email"
      >
        <Mail className="w-5 h-5" />
        <span className="absolute right-14 px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-white text-xs font-medium tracking-wide whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-150 shadow-xl">
          Email Arhan
        </span>
      </a>
    </div>
  );
};
