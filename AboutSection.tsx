import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ShieldCheck, Users, RefreshCw, CheckCircle2, ArrowRight } from 'lucide-react';

interface AboutSectionProps {
  onExploreProjects: () => void;
  onOpenResume: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onExploreProjects,
  onOpenResume
}) => {
  const { personal } = portfolioData;

  const valueIcons = [
    ShieldCheck,
    Users,
    RefreshCw,
    CheckCircle2
  ];

  return (
    <section id="about" className="py-24 relative border-t border-neutral-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 text-xs text-neutral-400 font-medium tracking-[0.25em] uppercase mb-3">
            <span className="w-8 h-[1px] bg-neutral-600 inline-block" />
            <span>01 · Narrative & Philosophy</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-white tracking-tight">
            About Mohd. Arhan Ansari
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-2 max-w-2xl font-light">
            A portrait of professional curiosity, grounded retail fieldwork, and strategic ambitions in Human Resource Management and Brand Operations.
          </p>
        </div>

        {/* Editorial Storytelling Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          {/* Left Column: Pull Quote & Quick Facts (4 cols) */}
          <div className="lg:col-span-4 space-y-8">
            <div className="p-8 rounded-3xl bg-neutral-900/60 border border-neutral-800/80 backdrop-blur-sm relative overflow-hidden">
              <span className="font-serif text-6xl text-neutral-700 absolute -top-2 left-4 select-none pointer-events-none">
                “
              </span>
              <p className="font-serif italic text-lg sm:text-xl text-neutral-200 relative z-10 leading-relaxed mb-6 pt-4">
                Practical floor exposure taught me that operational efficiency and human empathy aren&apos;t opposites—they are twin drivers of organizational excellence.
              </p>
              <div className="pt-4 border-t border-neutral-800 text-xs text-neutral-400 flex items-center justify-between">
                <span className="font-medium text-neutral-300">Mohd. Arhan Ansari</span>
                <span>Kanpur, India</span>
              </div>
            </div>

            {/* Quick Professional Snapshot */}
            <div className="p-6 rounded-2xl bg-neutral-900/30 border border-neutral-800/60 space-y-4">
              <h3 className="text-xs uppercase tracking-widest text-neutral-400 font-semibold">
                Executive Profile Summary
              </h3>
              <div className="space-y-3 text-xs text-neutral-300 divide-y divide-neutral-800/60">
                <div className="pt-2 flex justify-between">
                  <span className="text-neutral-500">Degree</span>
                  <span className="font-medium text-right">BBA (2025–2028)</span>
                </div>
                <div className="pt-2 flex justify-between">
                  <span className="text-neutral-500">Institution</span>
                  <span className="font-medium text-right">Allenhouse Business School</span>
                </div>
                <div className="pt-2 flex justify-between">
                  <span className="text-neutral-500">Practical Exposure</span>
                  <span className="font-medium text-right">Reliance Retail Ltd.</span>
                </div>
                <div className="pt-2 flex justify-between">
                  <span className="text-neutral-500">Primary Focus</span>
                  <span className="font-medium text-right">HR & Marketing Strategy</span>
                </div>
                <div className="pt-2 flex justify-between">
                  <span className="text-neutral-500">Academic Tools</span>
                  <span className="font-medium text-right">Power BI, Excel, AI in Business</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Paragraphs (8 cols) */}
          <div className="lg:col-span-8 flex flex-col justify-between space-y-6">
            <div className="prose prose-invert max-w-none space-y-6 text-neutral-300 leading-relaxed text-sm sm:text-base font-light">
              {personal.storyParagraphs.map((paragraph, idx) => (
                <p key={idx} className="first:text-base sm:first:text-lg first:text-white first:leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Verified Resume Profile Summary Box */}
            <div className="p-6 rounded-2xl bg-neutral-900/80 border border-neutral-800/90 text-xs sm:text-sm text-neutral-300 space-y-2 mt-4">
              <div className="flex items-center gap-2 text-neutral-400 text-xs uppercase tracking-wider font-semibold">
                <span className="w-2 h-2 rounded-full bg-slate-300" />
                <span>Primary Resume Summary Statement</span>
              </div>
              <p className="italic text-neutral-300 leading-relaxed font-serif">
                &ldquo;{personal.summary}&rdquo;
              </p>
            </div>

            {/* Call to Actions within About */}
            <div className="pt-6 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenResume}
                className="px-5 py-2.5 rounded-xl bg-white hover:bg-neutral-200 text-neutral-950 font-semibold text-xs tracking-wider uppercase transition-colors"
              >
                View Full Resume Document
              </button>
              <button
                onClick={onExploreProjects}
                className="px-5 py-2.5 rounded-xl border border-neutral-800 hover:border-neutral-600 text-neutral-300 hover:text-white text-xs font-medium tracking-wider uppercase transition-colors flex items-center gap-2"
              >
                <span>Review Projects</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Guiding Core Values Grid */}
        <div className="pt-12 border-t border-neutral-800/60">
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-xs uppercase tracking-widest text-neutral-400 font-semibold">
                Core Principles
              </p>
              <h3 className="font-serif text-2xl text-white font-normal mt-1">
                Values That Guide My Work
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {personal.values.map((val, idx) => {
              const Icon = valueIcons[idx % valueIcons.length];
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800/70 hover:border-neutral-700 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-neutral-800/80 border border-neutral-700/60 flex items-center justify-center text-white mb-4 group-hover:bg-white group-hover:text-black transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-semibold text-white tracking-wide mb-2">
                    {val.title}
                  </h4>
                  <p className="text-xs text-neutral-400 font-light leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
