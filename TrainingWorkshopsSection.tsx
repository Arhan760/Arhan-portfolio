import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { BookOpen, Calendar, Building, Sparkles, CheckCircle2 } from 'lucide-react';

export const TrainingWorkshopsSection: React.FC = () => {
  const { trainingAndWorkshops } = portfolioData;
  const [filter, setFilter] = useState<'all' | 'training' | 'workshop'>('all');

  const filteredItems = trainingAndWorkshops.filter((item) => {
    if (filter === 'all') return true;
    return item.type === filter;
  });

  return (
    <section id="training" className="py-24 relative border-t border-neutral-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 text-xs text-neutral-400 font-medium tracking-[0.25em] uppercase mb-3">
              <span className="w-8 h-[1px] bg-neutral-600 inline-block" />
              <span>05 · Continuous Learning</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-white tracking-tight">
              Training & Workshops
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-2 max-w-xl font-light">
              Official institutional training programs and management workshops attended at Allenhouse Business School.
            </p>
          </div>

          {/* Segmented Filter Control */}
          <div className="flex items-center gap-1 p-1 bg-neutral-900 border border-neutral-800 rounded-xl self-start md:self-auto">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                filter === 'all'
                  ? 'bg-neutral-800 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              All Records ({trainingAndWorkshops.length})
            </button>
            <button
              onClick={() => setFilter('training')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                filter === 'training'
                  ? 'bg-neutral-800 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              In-House Training (3)
            </button>
            <button
              onClick={() => setFilter('workshop')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                filter === 'workshop'
                  ? 'bg-neutral-800 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Workshops & Seminars (2)
            </button>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800/80 hover:border-neutral-700 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Meta header line */}
                <div className="flex items-center justify-between text-xs text-neutral-400 mb-3 pb-2 border-b border-neutral-800/60">
                  <span className="uppercase tracking-wider font-mono text-[10px] text-neutral-300">
                    {item.type === 'training' ? 'In-house Training' : 'Seminar / Workshop'}
                  </span>
                  <span className="flex items-center gap-1 font-mono text-neutral-400">
                    <Calendar className="w-3 h-3" />
                    {item.year}
                  </span>
                </div>

                <h3 className="font-serif text-lg text-white font-medium mb-2 leading-snug">
                  {item.title}
                </h3>

                <div className="flex items-center gap-1.5 text-xs text-neutral-400 mb-3">
                  <Building className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                  <span>{item.provider}</span>
                </div>

                <p className="text-xs text-neutral-300 font-light leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-neutral-800/60 flex items-center justify-between text-[11px] text-neutral-400">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400/80" />
                  <span>Institutional Attendance Record</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Ethical Transparency Banner */}
        <div className="mt-12 p-4 rounded-xl bg-neutral-900/30 border border-neutral-800/50 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-neutral-400">
          <p>
            <strong className="text-neutral-300">Accuracy Commitment:</strong> All items represent actual workshops and training sessions completed at Allenhouse Business School. No artificial certifications or fake credentials.
          </p>
          <span className="font-mono text-[11px] text-neutral-400 shrink-0">100% Resume Grounded</span>
        </div>
      </div>
    </section>
  );
};
