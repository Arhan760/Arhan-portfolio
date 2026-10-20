import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle, Clock } from 'lucide-react';

export const EducationExperienceSection: React.FC = () => {
  const { education, experience } = portfolioData;
  const [activeTab, setActiveTab] = useState<'all' | 'experience' | 'education'>('all');

  return (
    <section id="experience" className="py-24 relative border-t border-neutral-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 text-xs text-neutral-400 font-medium tracking-[0.25em] uppercase mb-3">
              <span className="w-8 h-[1px] bg-neutral-600 inline-block" />
              <span>02 · Trajectory</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-white tracking-tight">
              Education & Experience
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-2 max-w-xl font-light">
              Verified academic credentials from Allenhouse Business School and hands-on retail operations traineeships at Reliance Retail Ltd.
            </p>
          </div>

          {/* Segmented Filter Control (Zero-Pill compliant button group) */}
          <div className="flex items-center gap-1 p-1 bg-neutral-900 border border-neutral-800 rounded-xl self-start md:self-auto">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors ${
                activeTab === 'all'
                  ? 'bg-neutral-800 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              All Milestones
            </button>
            <button
              onClick={() => setActiveTab('experience')}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors ${
                activeTab === 'experience'
                  ? 'bg-neutral-800 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Work Experience ({experience.length})
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors ${
                activeTab === 'education'
                  ? 'bg-neutral-800 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Education ({education.length})
            </button>
          </div>
        </div>

        {/* Dual Grid Layout or Full Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Work Experience Column */}
          {(activeTab === 'all' || activeTab === 'experience') && (
            <div className={activeTab === 'experience' ? 'lg:col-span-2 max-w-4xl mx-auto w-full' : ''}>
              <div className="flex items-center gap-3 pb-6 mb-8 border-b border-neutral-800/80">
                <div className="w-9 h-9 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-white">
                  <Briefcase className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-lg font-serif text-white font-medium">Work Experience & Traineeships</h3>
                  <p className="text-xs text-neutral-400">Retail sales operations & customer engagement</p>
                </div>
              </div>

              {/* Vertical Timeline Items */}
              <div className="relative pl-6 space-y-12 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-neutral-800">
                {experience.map((item) => (
                  <div key={item.id} className="relative group">
                    {/* Timeline Node */}
                    <div className="absolute -left-[30px] top-1.5 w-4 h-4 rounded-full bg-neutral-950 border-2 border-neutral-600 group-hover:border-white transition-colors flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-neutral-400 group-hover:bg-white" />
                    </div>

                    {/* Card Content */}
                    <div className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800/80 group-hover:border-neutral-700 transition-all duration-300">
                      {/* Meta header (clean unboxed text with separators) */}
                      <div className="flex flex-wrap items-center gap-2 text-xs text-neutral-400 mb-2">
                        <span className="font-semibold text-neutral-200">{item.company}</span>
                        <span aria-hidden="true">·</span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {item.period}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {item.duration}
                        </span>
                      </div>

                      <h4 className="text-base font-semibold text-white tracking-wide mb-1">
                        {item.role}
                      </h4>

                      <div className="flex items-center gap-2 text-xs text-neutral-400 mb-4">
                        <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                        <span>{item.location}</span>
                        <span aria-hidden="true">·</span>
                        <span className="italic">{item.type}</span>
                      </div>

                      {/* Responsibilities list from resume */}
                      <ul className="space-y-2 mb-5 text-xs sm:text-sm text-neutral-300 font-light">
                        {item.highlights.map((highlight, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-2.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-neutral-500 mt-1.5 shrink-0" />
                            <span className="leading-relaxed">{highlight}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Skills Acquired / Applied (Unboxed list with separators) */}
                      <div className="pt-4 border-t border-neutral-800/80">
                        <div className="text-[11px] uppercase tracking-wider text-neutral-400 font-medium mb-1.5">
                          Competencies Demonstrated:
                        </div>
                        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-neutral-300">
                          {item.skills.map((skill, sIdx) => (
                            <React.Fragment key={sIdx}>
                              <span>{skill}</span>
                              {sIdx < item.skills.length - 1 && (
                                <span className="text-neutral-600" aria-hidden="true">·</span>
                              )}
                            </React.Fragment>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Education Column */}
          {(activeTab === 'all' || activeTab === 'education') && (
            <div id="education" className={activeTab === 'education' ? 'lg:col-span-2 max-w-4xl mx-auto w-full' : ''}>
              <div className="flex items-center gap-3 pb-6 mb-8 border-b border-neutral-800/80">
                <div className="w-9 h-9 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-white">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-lg font-serif text-white font-medium">Educational Qualifications</h3>
                  <p className="text-xs text-neutral-400">Formal academic background & institutions</p>
                </div>
              </div>

              {/* Vertical Timeline Items */}
              <div className="relative pl-6 space-y-12 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-neutral-800">
                {education.map((item) => (
                  <div key={item.id} className="relative group">
                    {/* Timeline Node */}
                    <div className="absolute -left-[30px] top-1.5 w-4 h-4 rounded-full bg-neutral-950 border-2 border-neutral-600 group-hover:border-white transition-colors flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-neutral-400 group-hover:bg-white" />
                    </div>

                    {/* Card Content */}
                    <div className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800/80 group-hover:border-neutral-700 transition-all duration-300">
                      {/* Meta Header */}
                      <div className="flex flex-wrap items-center gap-2 text-xs text-neutral-400 mb-2">
                        <span className="font-semibold text-neutral-200">{item.institution}</span>
                        <span aria-hidden="true">·</span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {item.period}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span className="text-emerald-400 font-medium">{item.status}</span>
                      </div>

                      <h4 className="text-base font-semibold text-white tracking-wide mb-1">
                        {item.degree}
                      </h4>

                      <div className="flex items-center gap-2 text-xs text-neutral-400 mb-4">
                        <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                        <span>{item.location}</span>
                      </div>

                      {/* Details list */}
                      <ul className="space-y-2 text-xs sm:text-sm text-neutral-300 font-light">
                        {item.details.map((detail, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-2.5">
                            <CheckCircle className="w-3.5 h-3.5 text-neutral-500 mt-1 shrink-0" />
                            <span className="leading-relaxed">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
