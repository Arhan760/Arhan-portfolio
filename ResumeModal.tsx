import React, { useRef } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Printer, Download, Copy, Check, X, FileText, ExternalLink } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = React.useState(false);
  const { personal, education, experience, projects, skills, trainingAndWorkshops, achievements } = portfolioData;

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const resumeText = `
MOHD. ARHAN ANSARI
BBA STUDENT | HR & MARKETING ENTHUSIAST
Email: ${personal.email} | Phone: ${personal.phone} | Location: ${personal.location}
LinkedIn: ${personal.linkedin} | GitHub: ${personal.github}
Portfolio: ${personal.livePortfolio}

PROFILE SUMMARY:
${personal.summary}

EDUCATION:
${education.map((e) => `${e.degree}\n${e.institution} | ${e.period}\nStatus: ${e.status}\n`).join('\n')}

WORK EXPERIENCE:
${experience.map((exp) => `${exp.company}\n${exp.role} | ${exp.period} | ${exp.duration}\n${exp.highlights.map((h) => `- ${h}`).join('\n')}\n`).join('\n')}

ACADEMIC & PROFESSIONAL PROJECTS:
${projects.map((p) => `${p.title} (${p.organization})\n${p.overview}\nSkills: ${p.skillsUsed.join(', ')}\n`).join('\n')}

PROFESSIONAL SKILLS:
${skills.map((s) => `${s.category}: ${s.skills.map((sk) => sk.name).join(', ')}`).join('\n')}

TRAINING & DEVELOPMENT:
${trainingAndWorkshops.map((t) => `- ${t.title} – ${t.provider} (${t.year})`).join('\n')}

ACHIEVEMENTS & PARTICIPATION:
${achievements.map((a) => `- ${a.title}: ${a.description}`).join('\n')}
    `.trim();

    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/90 backdrop-blur-md overflow-y-auto no-print">
      <div className="relative w-full max-w-4xl my-auto bg-neutral-900 border border-neutral-800 rounded-3xl shadow-2xl flex flex-col max-h-[94vh]">
        {/* Top Control Bar */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-neutral-800 bg-neutral-900 rounded-t-3xl shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-neutral-800 border border-neutral-700 flex items-center justify-center text-white">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif text-lg text-white font-medium">Complete Professional Resume</h3>
              <p className="text-xs text-neutral-400">Official Curriculum Vitae · Mohd. Arhan Ansari</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-lg bg-white hover:bg-neutral-200 text-neutral-950 text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-sm"
              title="Print or Save as PDF using your browser dialog"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={handleCopyText}
              className="px-3 py-1.5 rounded-lg border border-neutral-700 hover:border-neutral-500 text-neutral-300 text-xs font-medium flex items-center gap-1.5 transition-colors"
              title="Copy plain text"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Text'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
              aria-label="Close resume preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Paper Canvas Area (Scrollable in modal, pristine white/black paper print styling) */}
        <div className="p-4 sm:p-8 overflow-y-auto bg-neutral-950/60 flex justify-center">
          <div className="w-full max-w-[800px] bg-white text-neutral-900 p-8 sm:p-12 shadow-2xl rounded-xl print-page font-sans text-left">
            {/* Resume Header */}
            <div className="text-center pb-6 border-b border-neutral-300">
              <h1 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950 uppercase">
                {personal.fullName}
              </h1>
              <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-neutral-700 mt-1">
                {personal.title}
              </p>

              {/* Contact Information Bar */}
              <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-neutral-600 mt-3 pt-3 border-t border-neutral-200 font-mono">
                <span>{personal.email}</span>
                <span>•</span>
                <span>{personal.phone}</span>
                <span>•</span>
                <span>{personal.location}</span>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-neutral-700 mt-1 font-mono">
                <span>{personal.linkedin}</span>
                <span>•</span>
                <span>{personal.github}</span>
              </div>
            </div>

            {/* Profile Summary */}
            <div className="mt-6">
              <h2 className="text-xs font-bold tracking-widest uppercase text-neutral-950 pb-1 border-b border-neutral-400 mb-2 font-mono">
                PROFILE SUMMARY
              </h2>
              <p className="text-xs sm:text-sm text-neutral-800 leading-relaxed text-justify">
                {personal.summary}
              </p>
            </div>

            {/* Education */}
            <div className="mt-6">
              <h2 className="text-xs font-bold tracking-widest uppercase text-neutral-950 pb-1 border-b border-neutral-400 mb-3 font-mono">
                EDUCATION
              </h2>
              <div className="space-y-3">
                {education.map((item) => (
                  <div key={item.id} className="text-xs sm:text-sm">
                    <div className="flex justify-between font-bold text-neutral-950">
                      <span>{item.degree}</span>
                      <span className="font-mono text-xs">{item.period}</span>
                    </div>
                    <div className="flex justify-between text-neutral-700 italic">
                      <span>{item.institution}</span>
                      <span>{item.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Work Experience */}
            <div className="mt-6">
              <h2 className="text-xs font-bold tracking-widest uppercase text-neutral-950 pb-1 border-b border-neutral-400 mb-3 font-mono">
                WORK EXPERIENCE
              </h2>
              <div className="space-y-4">
                {experience.map((item) => (
                  <div key={item.id} className="text-xs sm:text-sm">
                    <div className="flex justify-between font-bold text-neutral-950">
                      <span>{item.company}</span>
                      <span className="font-mono text-xs">{item.period} | {item.duration}</span>
                    </div>
                    <div className="text-neutral-700 font-medium mb-1.5 italic">
                      {item.role}
                    </div>
                    <ul className="list-disc list-inside space-y-1 text-xs text-neutral-800">
                      {item.highlights.map((h, i) => (
                        <li key={i}>{h}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Academic & Professional Projects */}
            <div className="mt-6">
              <h2 className="text-xs font-bold tracking-widest uppercase text-neutral-950 pb-1 border-b border-neutral-400 mb-3 font-mono">
                ACADEMIC & PROFESSIONAL PROJECTS
              </h2>
              <div className="space-y-4">
                {projects.map((proj) => (
                  <div key={proj.id} className="text-xs sm:text-sm">
                    <div className="flex justify-between font-bold text-neutral-950">
                      <span>{proj.title}</span>
                      <span className="font-serif italic text-xs">{proj.organization}</span>
                    </div>
                    <ul className="list-disc list-inside space-y-1 text-xs text-neutral-800 mt-1">
                      {proj.outcomes.map((out, i) => (
                        <li key={i}>{out}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Professional Skills */}
            <div className="mt-6">
              <h2 className="text-xs font-bold tracking-widest uppercase text-neutral-950 pb-1 border-b border-neutral-400 mb-3 font-mono">
                PROFESSIONAL SKILLS
              </h2>
              <div className="space-y-2 text-xs sm:text-sm">
                <div>
                  <strong className="text-neutral-950">Technical Skills: </strong>
                  <span className="text-neutral-800">MS Excel, PowerPoint, Canva, Power BI, Google Workspace</span>
                </div>
                <div>
                  <strong className="text-neutral-950">Business & Functional Skills: </strong>
                  <span className="text-neutral-800">Human Resource Management, Digital Marketing, Market Research, Sales Operations, Customer Relationship Management, Retail Operations</span>
                </div>
                <div>
                  <strong className="text-neutral-950">Soft Skills: </strong>
                  <span className="text-neutral-800">Communication & Interpersonal Skills, Teamwork & Collaboration, Leadership, Time Management, Customer Interaction, Adaptability</span>
                </div>
              </div>
            </div>

            {/* Training & Development */}
            <div className="mt-6">
              <h2 className="text-xs font-bold tracking-widest uppercase text-neutral-950 pb-1 border-b border-neutral-400 mb-3 font-mono">
                TRAINING & DEVELOPMENT
              </h2>
              <ul className="list-disc list-inside space-y-1 text-xs text-neutral-800">
                {trainingAndWorkshops.filter((t) => t.type === 'training').map((item) => (
                  <li key={item.id}>
                    <strong>{item.title}</strong> – {item.provider} ({item.year})
                  </li>
                ))}
              </ul>
            </div>

            {/* Workshops & Seminars */}
            <div className="mt-6">
              <h2 className="text-xs font-bold tracking-widest uppercase text-neutral-950 pb-1 border-b border-neutral-400 mb-3 font-mono">
                WORKSHOPS & SEMINARS
              </h2>
              <ul className="list-disc list-inside space-y-1 text-xs text-neutral-800">
                {trainingAndWorkshops.filter((t) => t.type === 'workshop').map((item) => (
                  <li key={item.id}>
                    <strong>{item.title}</strong> – {item.provider} ({item.year})
                  </li>
                ))}
              </ul>
            </div>

            {/* Achievements & Participation */}
            <div className="mt-6">
              <h2 className="text-xs font-bold tracking-widest uppercase text-neutral-950 pb-1 border-b border-neutral-400 mb-3 font-mono">
                ACHIEVEMENTS & PARTICIPATION
              </h2>
              <ul className="list-disc list-inside space-y-1 text-xs text-neutral-800">
                {achievements.map((item) => (
                  <li key={item.id}>
                    {item.title} – {item.description}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
