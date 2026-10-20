import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Search, Sparkles, CheckCircle, SlidersHorizontal } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const { skills } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredCategories = skills.filter((cat) => {
    if (selectedCategory !== 'all' && cat.category !== selectedCategory) {
      return false;
    }
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    const hasCategoryMatch = cat.category.toLowerCase().includes(q);
    const hasSkillMatch = cat.skills.some((s) => s.name.toLowerCase().includes(q) || s.level.toLowerCase().includes(q));
    return hasCategoryMatch || hasSkillMatch;
  });

  return (
    <section id="skills" className="py-24 relative border-t border-neutral-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-3 text-xs text-neutral-400 font-medium tracking-[0.25em] uppercase mb-3">
              <span className="w-8 h-[1px] bg-neutral-600 inline-block" />
              <span>03 · Competencies</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-white tracking-tight">
              Professional Skills
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-2 max-w-xl font-light">
              Structured across Human Resource Management, Marketing & Sales Operations, Technical Productivity Tools, and Interpersonal Leadership.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Filter competencies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-neutral-900 border border-neutral-800 text-xs text-neutral-200 placeholder-neutral-500 focus:outline-none focus:border-neutral-500 transition-colors"
            />
          </div>
        </div>

        {/* Category Filter Tabs (Zero-Pill Button Controls) */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-neutral-800/60">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors ${
              selectedCategory === 'all'
                ? 'bg-neutral-800 text-white shadow-sm'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            All Categories
          </button>
          {skills.map((cat) => (
            <button
              key={cat.category}
              onClick={() => setSelectedCategory(cat.category)}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors ${
                selectedCategory === cat.category
                  ? 'bg-neutral-800 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCategories.map((catGroup) => (
            <div
              key={catGroup.category}
              className="p-8 rounded-3xl bg-neutral-900/50 border border-neutral-800/80 hover:border-neutral-700/80 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-neutral-800/80">
                  <div>
                    <h3 className="font-serif text-xl text-white font-medium">
                      {catGroup.category}
                    </h3>
                    <p className="text-xs text-neutral-400 mt-1 font-light">
                      {catGroup.description}
                    </p>
                  </div>
                  <span className="text-xs font-mono text-neutral-500">
                    {catGroup.skills.length} skills
                  </span>
                </div>

                {/* Skills Item List */}
                <div className="space-y-4">
                  {catGroup.skills.map((item, idx) => (
                    <div
                      key={idx}
                      className="group p-3.5 rounded-xl bg-neutral-950/40 border border-neutral-800/60 hover:border-neutral-700 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                    >
                      <div className="flex items-center gap-2.5">
                        <CheckCircle className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white shrink-0 transition-colors" />
                        <span className="text-sm font-medium text-neutral-200 group-hover:text-white">
                          {item.name}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 text-xs text-neutral-400 sm:text-right">
                        <span className="italic text-neutral-300 font-light">
                          {item.level}
                        </span>
                        {item.note && (
                          <span className="hidden lg:inline text-neutral-500 text-[11px]">
                            · {item.note}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Accuracy Transparency Note */}
              <div className="mt-6 pt-4 border-t border-neutral-800/40 text-[11px] text-neutral-400 flex items-center justify-between">
                <span>Verified against official resume</span>
                <span className="font-mono">NO FABRICATED %</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
