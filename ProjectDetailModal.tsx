import React from 'react';
import { Project } from '../data/portfolioData';
import { X, CheckCircle, Target, Lightbulb, Briefcase, ArrowUpRight, ShieldAlert } from 'lucide-react';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto no-print">
      <div className="relative w-full max-w-3xl my-8 bg-neutral-900 border border-neutral-800 rounded-3xl p-6 sm:p-10 shadow-2xl max-h-[90vh] overflow-y-auto">
        {/* Modal Header */}
        <div className="flex items-start justify-between pb-6 border-b border-neutral-800 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs text-neutral-400 font-medium tracking-widest uppercase mb-2">
              <span>{project.organization}</span>
              <span aria-hidden="true">·</span>
              <span className="text-neutral-300">{project.category}</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-white font-medium">
              {project.title}
            </h3>
            <p className="text-sm text-neutral-400 mt-1 font-light">
              {project.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors ml-4 shrink-0"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="space-y-8 text-neutral-300">
          {/* Overview */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-neutral-400 font-semibold mb-2">
              Project Overview
            </h4>
            <p className="text-sm sm:text-base leading-relaxed text-neutral-200 font-light">
              {project.overview}
            </p>
          </div>

          {/* Objective */}
          <div className="p-5 rounded-2xl bg-neutral-950/60 border border-neutral-800/80 flex items-start gap-3.5">
            <Target className="w-5 h-5 text-neutral-400 mt-0.5 shrink-0" />
            <div>
              <h5 className="text-xs uppercase tracking-wider text-neutral-300 font-semibold mb-1">
                Core Objective
              </h5>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
                {project.objective}
              </p>
            </div>
          </div>

          {/* Key Contributions */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-neutral-400 font-semibold mb-3">
              My Practical Contribution
            </h4>
            <div className="space-y-2.5">
              {project.myContribution.map((contrib, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm font-light">
                  <CheckCircle className="w-4 h-4 text-neutral-400 mt-0.5 shrink-0" />
                  <span className="leading-relaxed">{contrib}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Methodology (if applicable) */}
          {project.methodology && project.methodology.length > 0 && (
            <div>
              <h4 className="text-xs uppercase tracking-widest text-neutral-400 font-semibold mb-3">
                Field Approach & Methodology
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.methodology.map((meth, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-neutral-950/40 border border-neutral-800/60 text-xs text-neutral-300 flex items-start gap-2">
                    <span className="font-mono text-neutral-400">0{idx + 1}.</span>
                    <span>{meth}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Outcomes (Supported by Resume) */}
          <div className="p-6 rounded-2xl bg-neutral-950/80 border border-neutral-800">
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-neutral-300 font-semibold mb-3">
              <Lightbulb className="w-4 h-4 text-amber-200" />
              <span>Grounded Outcomes & Key Takeaways</span>
            </div>
            <div className="space-y-2 text-xs sm:text-sm text-neutral-300 font-light">
              {project.outcomes.map((outcome, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2 shrink-0" />
                  <span className="leading-relaxed">{outcome}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Applied Tags */}
          <div className="pt-4 border-t border-neutral-800">
            <h4 className="text-xs uppercase tracking-widest text-neutral-400 font-semibold mb-2">
              Skills Applied
            </h4>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-neutral-300">
              {project.skillsUsed.map((skill, idx) => (
                <React.Fragment key={idx}>
                  <span>{skill}</span>
                  {idx < project.skillsUsed.length - 1 && (
                    <span className="text-neutral-600" aria-hidden="true">·</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="mt-8 pt-6 border-t border-neutral-800 flex items-center justify-between">
          <div className="text-[11px] text-neutral-400">
            Documented from official academic & internship records
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-white text-neutral-950 font-medium text-xs hover:bg-neutral-200 transition-colors"
          >
            Close Detail
          </button>
        </div>
      </div>
    </div>
  );
};
