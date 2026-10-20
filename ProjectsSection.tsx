import React, { useState } from 'react';
import { portfolioData, Project } from '../data/portfolioData';
import { ProjectDetailModal } from './ProjectDetailModal';
import { ArrowUpRight, CheckCircle, FolderGit2, Layers } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 relative border-t border-neutral-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 text-xs text-neutral-400 font-medium tracking-[0.25em] uppercase mb-3">
            <span className="w-8 h-[1px] bg-neutral-600 inline-block" />
            <span>04 · Field Studies & Case Work</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-white tracking-tight">
            Featured Projects
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-2 max-w-xl font-light">
            In-depth exploration of retail customer experience at Reliance Retail Ltd. and academic research projects in HR and marketing.
          </p>
        </div>

        {/* Editorial Project Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className="group p-8 sm:p-10 rounded-3xl bg-neutral-900/40 border border-neutral-800/80 hover:border-neutral-700 transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
            >
              {/* Top Meta Line (Unboxed text with typographic separators) */}
              <div>
                <div className="flex items-center justify-between text-xs text-neutral-400 mb-4 pb-3 border-b border-neutral-800/60">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-neutral-200">{project.organization}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.category}</span>
                  </div>
                  <span className="font-mono text-neutral-400 text-xs">0{idx + 1}</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl text-white font-medium group-hover:text-silver-bright transition-colors mb-2">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 font-light mb-6">
                  {project.subtitle}
                </p>

                <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed mb-6 line-clamp-3">
                  {project.overview}
                </p>

                {/* Key Points preview */}
                <div className="space-y-2 mb-6">
                  {project.outcomes.slice(0, 2).map((item, oIdx) => (
                    <div key={oIdx} className="flex items-start gap-2 text-xs text-neutral-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card Controls */}
              <div className="pt-6 border-t border-neutral-800/80 flex items-center justify-between">
                <div className="flex flex-wrap items-center gap-x-2 text-[11px] text-neutral-400">
                  {project.skillsUsed.slice(0, 3).map((skill, sIdx) => (
                    <React.Fragment key={sIdx}>
                      <span>{skill}</span>
                      {sIdx < 2 && <span className="text-neutral-600">·</span>}
                    </React.Fragment>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-white hover:text-neutral-300 transition-colors"
                >
                  <span>View Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
