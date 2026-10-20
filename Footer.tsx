import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowUp, Linkedin, Github, Mail, MessageSquare, ShieldCheck, FileText } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenResume: () => void;
  onOpenProfile: () => void;
  onOpenPrivacy: () => void;
  onShow404: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenResume,
  onOpenProfile,
  onOpenPrivacy,
  onShow404
}) => {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-neutral-800/80 bg-neutral-950 text-neutral-400 text-xs py-16 no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-neutral-800/60">
          {/* Brand Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-700/80 flex items-center justify-center font-cinzel font-bold text-white text-base">
                AA
              </div>
              <div>
                <h3 className="font-serif text-lg text-white font-medium">Mohd. Arhan Ansari</h3>
                <p className="text-[11px] text-neutral-400 tracking-wider uppercase font-mono">
                  BBA Student · HR & Marketing Enthusiast
                </p>
              </div>
            </div>

            <p className="text-xs text-neutral-400 font-light leading-relaxed max-w-sm">
              &ldquo;Where Business Meets Creativity.&rdquo; Combining academic rigor at Allenhouse Business School with practical retail sales operations at Reliance Retail Ltd.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={`https://${personal.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-neutral-600 text-neutral-300 hover:text-white transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-neutral-600 text-neutral-300 hover:text-white transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="p-2.5 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-neutral-600 text-neutral-300 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={personal.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-neutral-600 text-neutral-300 hover:text-white transition-colors"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Nav Directory (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-neutral-300 font-semibold font-mono">
              Portfolio Directory
            </h4>
            <div className="grid grid-cols-2 gap-y-2 gap-x-4">
              <button
                onClick={() => onNavigate('home')}
                className="text-left text-neutral-400 hover:text-white transition-colors text-xs"
              >
                01. Home / Hero
              </button>
              <button
                onClick={() => onNavigate('about')}
                className="text-left text-neutral-400 hover:text-white transition-colors text-xs"
              >
                02. Narrative / About
              </button>
              <button
                onClick={() => onNavigate('education')}
                className="text-left text-neutral-400 hover:text-white transition-colors text-xs"
              >
                03. Education
              </button>
              <button
                onClick={() => onNavigate('experience')}
                className="text-left text-neutral-400 hover:text-white transition-colors text-xs"
              >
                04. Work Experience
              </button>
              <button
                onClick={() => onNavigate('skills')}
                className="text-left text-neutral-400 hover:text-white transition-colors text-xs"
              >
                05. Professional Skills
              </button>
              <button
                onClick={() => onNavigate('projects')}
                className="text-left text-neutral-400 hover:text-white transition-colors text-xs"
              >
                06. Projects & Case Work
              </button>
              <button
                onClick={() => onNavigate('training')}
                className="text-left text-neutral-400 hover:text-white transition-colors text-xs"
              >
                07. Training & Workshops
              </button>
              <button
                onClick={() => onNavigate('interests')}
                className="text-left text-neutral-400 hover:text-white transition-colors text-xs"
              >
                08. Interests & Vision
              </button>
              <button
                onClick={() => onNavigate('achievements')}
                className="text-left text-neutral-400 hover:text-white transition-colors text-xs"
              >
                09. Achievements
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="text-left text-neutral-400 hover:text-white transition-colors text-xs"
              >
                10. Contact Inquiries
              </button>
            </div>
          </div>

          {/* Downloads & Legal (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-neutral-300 font-semibold font-mono">
              Documents & Governance
            </h4>
            <div className="space-y-2">
              <button
                onClick={onOpenResume}
                className="w-full text-left p-2.5 rounded-lg bg-neutral-900/60 border border-neutral-800 hover:border-neutral-600 text-neutral-300 hover:text-white text-xs flex items-center justify-between transition-colors"
              >
                <span>Full Professional Resume</span>
                <FileText className="w-3.5 h-3.5 text-neutral-400" />
              </button>

              <button
                onClick={onOpenProfile}
                className="w-full text-left p-2.5 rounded-lg bg-neutral-900/60 border border-neutral-800 hover:border-neutral-600 text-neutral-300 hover:text-white text-xs flex items-center justify-between transition-colors"
              >
                <span>1-Page Executive Profile</span>
                <FileText className="w-3.5 h-3.5 text-neutral-400" />
              </button>

              <div className="pt-2 flex items-center gap-4 text-[11px] text-neutral-500">
                <button onClick={onOpenPrivacy} className="hover:text-neutral-300 underline">
                  Privacy Notice
                </button>
                <span>·</span>
                <button onClick={onShow404} className="hover:text-neutral-300">
                  Test 404
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            © {new Date().getFullYear()} Mohd. Arhan Ansari. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="font-mono text-[11px]">Deployable on GitHub Pages & Vercel</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
