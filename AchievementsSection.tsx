import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Award, Sparkles, CheckCircle2, Flag, Users2, Presentation } from 'lucide-react';

export const AchievementsSection: React.FC = () => {
  const { achievements } = portfolioData;

  const achievementIcons = [
    Sparkles,
    Award,
    CheckCircle2,
    Presentation
  ];

  return (
    <section id="achievements" className="py-24 relative border-t border-neutral-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 text-xs text-neutral-400 font-medium tracking-[0.25em] uppercase mb-3">
            <span className="w-8 h-[1px] bg-neutral-600 inline-block" />
            <span>07 · Co-Curricular & Collegiate</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-white tracking-tight">
            Achievements & Participation
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-2 max-w-xl font-light">
            Collegiate festival participation, inter-college business competitions, and collaborative group presentations.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((item, idx) => {
            const Icon = achievementIcons[idx % achievementIcons.length];
            return (
              <div
                key={item.id}
                className="p-8 rounded-3xl bg-neutral-900/40 border border-neutral-800/80 hover:border-neutral-700 transition-all duration-300 flex items-start gap-5"
              >
                <div className="w-12 h-12 rounded-2xl bg-neutral-800/80 border border-neutral-700/60 flex items-center justify-center text-white shrink-0">
                  <Icon className="w-6 h-6" />
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between text-xs text-neutral-400 mb-1">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-300">
                      {item.category}
                    </span>
                    {item.year && (
                      <span className="font-mono text-neutral-400">{item.year}</span>
                    )}
                  </div>

                  <h3 className="font-serif text-xl text-white font-medium mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
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
};
