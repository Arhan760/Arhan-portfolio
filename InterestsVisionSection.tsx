import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Compass, Users, TrendingUp, ShoppingBag, Cpu, ChevronRight, Check } from 'lucide-react';

export const InterestsVisionSection: React.FC = () => {
  const { interests, personal } = portfolioData;
  const [activeInterestIdx, setActiveInterestIdx] = useState(0);

  const interestIcons = [
    Users,
    TrendingUp,
    ShoppingBag,
    Cpu
  ];

  return (
    <section id="interests" className="py-24 relative border-t border-neutral-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 text-xs text-neutral-400 font-medium tracking-[0.25em] uppercase mb-3">
            <span className="w-8 h-[1px] bg-neutral-600 inline-block" />
            <span>06 · Perspective & Horizon</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-white tracking-tight">
            Interests & Career Vision
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-2 max-w-xl font-light">
            Strategic focus areas spanning human resource dynamics, consumer psychology, retail efficiency, and applied business analytics.
          </p>
        </div>

        {/* Interactive Interests Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 items-stretch">
          {/* Left Column: Interest Selectors (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            {interests.map((interest, idx) => {
              const Icon = interestIcons[idx % interestIcons.length];
              const isSelected = activeInterestIdx === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveInterestIdx(idx)}
                  className={`w-full p-5 rounded-2xl border text-left transition-all duration-300 flex items-start gap-4 ${
                    isSelected
                      ? 'bg-neutral-900 border-neutral-600 shadow-xl'
                      : 'bg-neutral-950/40 border-neutral-800/80 hover:border-neutral-700 hover:bg-neutral-900/30'
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                      isSelected
                        ? 'bg-white text-neutral-950 font-bold'
                        : 'bg-neutral-800 text-neutral-400'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="flex-1">
                    <h3 className={`text-sm font-semibold tracking-wide ${isSelected ? 'text-white' : 'text-neutral-300'}`}>
                      {interest.title}
                    </h3>
                    <p className="text-xs text-neutral-400 font-light mt-0.5">
                      {interest.subtitle}
                    </p>
                  </div>

                  <ChevronRight
                    className={`w-4 h-4 mt-2 transition-transform duration-200 ${
                      isSelected ? 'text-white translate-x-1' : 'text-neutral-600'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Deep Narrative on Selected Interest (7 cols) */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-neutral-900/60 border border-neutral-800 flex flex-col justify-between">
            <div>
              <div className="text-xs uppercase tracking-widest text-neutral-400 font-medium mb-3">
                Focus Area Exploration · 0{activeInterestIdx + 1}
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-white font-medium mb-2">
                {interests[activeInterestIdx].title}
              </h3>
              <p className="text-sm font-serif italic text-neutral-300 mb-6">
                {interests[activeInterestIdx].subtitle}
              </p>

              <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed mb-8">
                {interests[activeInterestIdx].description}
              </p>

              {/* Focus Points List */}
              <div className="space-y-3">
                <div className="text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-2">
                  Specialized Themes & Key Inquiries
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {interests[activeInterestIdx].focusAreas.map((area, aIdx) => (
                    <div
                      key={aIdx}
                      className="p-3 rounded-xl bg-neutral-950/60 border border-neutral-800/80 text-xs text-neutral-200 flex items-center gap-2"
                    >
                      <Check className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-800/80 text-xs text-neutral-400 flex items-center justify-between">
              <span>Aligned with Allenhouse Business School & Reliance Traineeships</span>
              <span className="font-mono text-neutral-500">2026–2028</span>
            </div>
          </div>
        </div>

        {/* Future Career Roadmap & Long-Term Vision */}
        <div className="p-8 sm:p-12 rounded-3xl bg-neutral-900/30 border border-neutral-800/80">
          <div className="max-w-3xl mb-10">
            <p className="text-xs uppercase tracking-widest text-neutral-400 font-semibold">
              Strategic Roadmap
            </p>
            <h3 className="font-serif text-2xl sm:text-3xl text-white font-medium mt-1">
              {personal.careerVision.headline}
            </h3>
            <p className="text-sm text-neutral-300 font-light leading-relaxed mt-3">
              {personal.careerVision.statement}
            </p>
          </div>

          {/* 3-Phase Roadmap Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {personal.careerVision.milestones.map((milestone, mIdx) => (
              <div
                key={mIdx}
                className="p-6 rounded-2xl bg-neutral-950/50 border border-neutral-800/80 relative flex flex-col justify-between"
              >
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 mb-2">
                    {milestone.phase}
                  </div>
                  <h4 className="text-sm font-semibold text-white tracking-wide mb-3">
                    {milestone.title}
                  </h4>
                  <p className="text-xs text-neutral-400 font-light leading-relaxed">
                    {milestone.focus}
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-neutral-800/60 flex items-center gap-2 text-[11px] text-neutral-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                  <span>Phase 0{mIdx + 1} Target</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
