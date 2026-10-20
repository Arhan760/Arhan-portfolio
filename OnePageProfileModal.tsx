import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Printer, Download, X, Copy, Check, Briefcase, Award, CheckCircle } from 'lucide-react';

interface OnePageProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OnePageProfileModal: React.FC<OnePageProfileModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = React.useState(false);
  const { personal, education, experience, skills, trainingAndWorkshops } = portfolioData;

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopySummary = () => {
    const summary = `MOHD. ARHAN ANSARI — ONE-PAGE EXECUTIVE PROFILE\n${personal.title}\nContact: ${personal.email} | ${personal.phone} | ${personal.location}\nLinkedIn: ${personal.linkedin}\n\nPROFILE:\n${personal.summary}\n\nEDUCATION:\nBBA (2025-2028), Allenhouse Business School\n\nEXPERIENCE:\nReliance Retail Ltd. - Marketing & Sales Operations Trainee (Aug 2025, Jan 2026)\n\nKEY COMPETENCIES:\nHR Management, Sales Operations, CRM, MS Excel, Power BI, PowerPoint, Canva.`;
    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/90 backdrop-blur-md overflow-y-auto no-print">
      <div className="relative w-full max-w-4xl my-auto bg-neutral-900 border border-neutral-800 rounded-3xl shadow-2xl flex flex-col max-h-[94vh]">
        {/* Top Control Bar */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-neutral-800 bg-neutral-900 rounded-t-3xl shrink-0">
          <div>
            <h3 className="font-serif text-lg text-white font-medium">One-Page Professional Profile</h3>
            <p className="text-xs text-neutral-400">Executive Fast-Scan Briefing Sheet · Mohd. Arhan Ansari</p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-lg bg-white hover:bg-neutral-200 text-neutral-950 text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-sm"
              title="Print or Save One-Page PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save 1-Page PDF</span>
            </button>

            <button
              onClick={handleCopySummary}
              className="px-3 py-1.5 rounded-lg border border-neutral-700 hover:border-neutral-500 text-neutral-300 text-xs font-medium flex items-center gap-1.5 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
              aria-label="Close profile modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Canvas */}
        <div className="p-4 sm:p-8 overflow-y-auto bg-neutral-950/60 flex justify-center">
          <div className="w-full max-w-[800px] bg-white text-neutral-900 p-8 sm:p-10 shadow-2xl rounded-xl print-page font-sans text-left">
            {/* Header */}
            <div className="flex items-start justify-between pb-4 border-b-2 border-neutral-900 mb-6">
              <div>
                <h1 className="font-serif text-3xl font-bold uppercase tracking-tight text-neutral-950">
                  {personal.fullName}
                </h1>
                <p className="text-xs font-semibold tracking-wider uppercase text-neutral-700 mt-0.5">
                  BBA Scholar · HR, Marketing & Sales Operations
                </p>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-0.5 text-xs text-neutral-600 mt-2 font-mono">
                  <span>{personal.email}</span>
                  <span>|</span>
                  <span>{personal.phone}</span>
                  <span>|</span>
                  <span>{personal.location}</span>
                </div>
              </div>

              <div className="w-14 h-14 rounded-xl border border-neutral-900 bg-neutral-950 text-white flex items-center justify-center font-cinzel font-bold text-xl shrink-0">
                AA
              </div>
            </div>

            {/* Executive Summary */}
            <div className="mb-6">
              <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900 pb-1 border-b border-neutral-300 mb-2">
                Executive Profile
              </h2>
              <p className="text-xs text-neutral-800 leading-relaxed">
                Motivated and ambitious Bachelor of Business Administration (BBA) candidate at Allenhouse Business School with practical retail sales operations exposure at Reliance Retail Ltd. Proven aptitude in customer engagement, teamwork, store processes, and analytical tool adoption (Power BI, Advanced Excel). Eager to contribute disciplined operational execution and creative marketing thinking to forward-looking enterprise teams.
              </p>
            </div>

            {/* Core Competencies Grid */}
            <div className="mb-6">
              <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900 pb-1 border-b border-neutral-300 mb-2">
                Core Competencies & Tool Stack
              </h2>
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <div className="font-bold text-neutral-900 mb-1">Business & Management:</div>
                  <p className="text-neutral-700 leading-normal">
                    Human Resource Management, Sales Operations, Retail Customer Experience, Customer Relationship Management (CRM), Digital Marketing, Market Research.
                  </p>
                </div>
                <div>
                  <div className="font-bold text-neutral-900 mb-1">Technical & Soft Skills:</div>
                  <p className="text-neutral-700 leading-normal">
                    MS Excel (In-house certified), Power BI, PowerPoint, Canva, Google Workspace, Leadership, Interpersonal Communication, Adaptability.
                  </p>
                </div>
              </div>
            </div>

            {/* Dual Column: Experience & Education */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Experience Column */}
              <div>
                <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900 pb-1 border-b border-neutral-300 mb-2">
                  Practical Experience
                </h2>
                <div className="space-y-3 text-xs">
                  <div>
                    <div className="flex justify-between font-bold text-neutral-950">
                      <span>Reliance Retail Ltd.</span>
                      <span className="font-mono text-[11px]">Jan 2026 (10 Days)</span>
                    </div>
                    <div className="italic text-neutral-700 text-[11px] mb-1">Marketing & Sales Operations Trainee</div>
                    <ul className="list-disc list-inside text-neutral-800 text-[11px] space-y-0.5">
                      <li>Customer interaction and retail sales floor activities.</li>
                      <li>Promotional engagement and communication of product benefits.</li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex justify-between font-bold text-neutral-950">
                      <span>Reliance Retail Ltd.</span>
                      <span className="font-mono text-[11px]">Aug 2025 (7 Days)</span>
                    </div>
                    <div className="italic text-neutral-700 text-[11px] mb-1">Marketing & Sales Operations Trainee</div>
                    <ul className="list-disc list-inside text-neutral-800 text-[11px] space-y-0.5">
                      <li>Interacted with shoppers to evaluate needs and communicate product info.</li>
                      <li>Supported sales floor workflows and customer relationship practices.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Education & Training Column */}
              <div>
                <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900 pb-1 border-b border-neutral-300 mb-2">
                  Education & Training
                </h2>
                <div className="space-y-3 text-xs">
                  <div>
                    <div className="font-bold text-neutral-950">Bachelor of Business Administration (BBA)</div>
                    <div className="text-neutral-700 text-[11px] italic">Allenhouse Business School · 2025–2028 (Currently Pursuing)</div>
                  </div>
                  <div>
                    <div className="font-bold text-neutral-950">Intermediate (Class XII)</div>
                    <div className="text-neutral-700 text-[11px] italic">B.N.S.D. Inter College, Chunniganj, Kanpur</div>
                  </div>
                  <div>
                    <div className="font-bold text-neutral-950">Key Institutional Workshops (2026):</div>
                    <div className="text-neutral-700 text-[11px]">
                      • AI in Business & MS Excel In-house Training<br/>
                      • Strategic Decision-Making (HR) Workshop
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Footer Verification */}
            <div className="pt-3 border-t border-neutral-300 text-[10px] text-neutral-500 flex justify-between font-mono">
              <span>Verified Candidate Profile · Kanpur, UP, India</span>
              <span>Available for Traineeships & Entry-Level Roles</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
