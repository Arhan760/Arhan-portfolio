import React, { useEffect, useState } from 'react';
import {
  Home,
  User,
  GraduationCap,
  Briefcase,
  Layers,
  FolderGit2,
  Compass,
  Award,
  Mail,
  Sun,
  Moon,
  FileText,
  Menu,
  X
} from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  isDarkMode: boolean;
  onToggleTheme: () => void;
  onOpenResume: () => void;
  onOpenProfile: () => void;
}

export const navItems = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'about', label: 'About', icon: User },
  { id: 'education', label: 'Education', icon: GraduationCap },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'skills', label: 'Skills', icon: Layers },
  { id: 'projects', label: 'Projects', icon: FolderGit2 },
  { id: 'interests', label: 'Interests & Vision', icon: Compass },
  { id: 'achievements', label: 'Achievements', icon: Award },
  { id: 'contact', label: 'Contact', icon: Mail },
];

export const Navigation: React.FC<NavigationProps> = ({
  activeSection,
  onNavigate,
  isDarkMode,
  onToggleTheme,
  onOpenResume,
  onOpenProfile
}) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, progress)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Scroll Progress Indicator Bar at Top */}
      <div className="fixed top-0 left-0 right-0 h-[2px] bg-neutral-800/40 z-50 pointer-events-none no-print">
        <div
          className="h-full bg-gradient-to-r from-neutral-400 via-slate-200 to-white transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Top Header Bar for Brand & Quick Utilities (Desktop & Mobile) */}
      <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-neutral-950/80 dark:bg-neutral-950/80 light:bg-white/80 border-b border-neutral-800/40 dark:border-neutral-800/40 light:border-neutral-200/60 transition-colors duration-300 no-print">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Silver Monogram Brand */}
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-3 text-left group focus:outline-none"
          >
            <div className="w-9 h-9 rounded-lg border border-neutral-700/60 dark:border-neutral-700/60 light:border-neutral-300 bg-neutral-900 dark:bg-neutral-900 light:bg-neutral-100 flex items-center justify-center transition-all duration-300 group-hover:border-neutral-400 shadow-sm">
              <span className="font-cinzel text-sm font-bold tracking-wider text-neutral-200 dark:text-neutral-200 light:text-neutral-800">
                AA
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs uppercase font-semibold tracking-[0.2em] text-neutral-200 dark:text-neutral-200 light:text-neutral-900 group-hover:text-white transition-colors">
                Mohd. Arhan Ansari
              </span>
              <span className="text-[10px] tracking-wider text-neutral-400 dark:text-neutral-400 light:text-neutral-500 font-light">
                Executive Portfolio
              </span>
            </div>
          </button>

          {/* Quick Actions (Right Header) */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Resume Quick Trigger */}
            <button
              onClick={onOpenResume}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium border border-neutral-700/70 dark:border-neutral-700/70 light:border-neutral-300 text-neutral-300 dark:text-neutral-300 light:text-neutral-700 hover:text-white dark:hover:text-white light:hover:text-black hover:border-neutral-400 transition-colors"
              title="Preview & Download Complete Resume"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume PDF</span>
            </button>

            {/* Profile PDF Quick Trigger */}
            <button
              onClick={onOpenProfile}
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium border border-neutral-800 dark:border-neutral-800 light:border-neutral-200 text-neutral-400 dark:text-neutral-400 light:text-neutral-600 hover:text-neutral-200 transition-colors"
              title="Preview One-Page Executive Profile"
            >
              <span>1-Page Profile</span>
            </button>

            {/* Dark / Light Mode Toggle */}
            <button
              onClick={onToggleTheme}
              className="p-2 rounded-lg border border-neutral-800 dark:border-neutral-800 light:border-neutral-200 text-neutral-400 hover:text-neutral-100 dark:hover:text-white light:hover:text-neutral-900 hover:bg-neutral-900/60 dark:hover:bg-neutral-900/60 light:hover:bg-neutral-100 transition-colors"
              aria-label={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-amber-200" /> : <Moon className="w-4 h-4 text-neutral-800" />}
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg border border-neutral-800 dark:border-neutral-800 light:border-neutral-200 text-neutral-400 hover:text-white transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Desktop Vertical Side Navigation Rail */}
      <nav
        aria-label="Side Navigation"
        className="hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 z-40 flex-col gap-2 p-2 rounded-2xl backdrop-blur-xl bg-neutral-950/70 dark:bg-neutral-950/70 light:bg-white/80 border border-neutral-800/80 dark:border-neutral-800/80 light:border-neutral-200 shadow-[0_4px_30px_rgba(0,0,0,0.3)] no-print"
      >
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`group relative flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-200 ${
                isActive
                  ? 'bg-neutral-100 text-neutral-950 dark:bg-white dark:text-neutral-950 light:bg-neutral-900 light:text-white shadow-md'
                  : 'text-neutral-400 hover:text-neutral-100 dark:hover:text-white light:hover:text-neutral-900 hover:bg-neutral-900/60 dark:hover:bg-neutral-900/60 light:hover:bg-neutral-100'
              }`}
              title={item.label}
              aria-label={item.label}
            >
              <Icon className="w-4 h-4 transition-transform duration-200 group-hover:scale-110" />

              {/* Tooltip Label on Hover */}
              <span className="absolute left-14 px-3 py-1.5 rounded-lg bg-neutral-900 dark:bg-neutral-900 light:bg-white text-white dark:text-white light:text-neutral-900 border border-neutral-800 dark:border-neutral-800 light:border-neutral-200 text-xs font-medium tracking-wide whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-150 shadow-xl">
                {item.label}
              </span>

              {/* Active Indicator pip */}
              {isActive && (
                <span className="absolute -left-1 w-1 h-3 rounded-full bg-white dark:bg-white light:bg-neutral-900" />
              )}
            </button>
          );
        })}
      </nav>

      {/* Mobile Drawer Navigation (When open) */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex flex-col justify-between p-6 animate-in fade-in duration-200 no-print">
          <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
            <div className="flex items-center gap-3">
              <span className="font-cinzel text-lg font-bold text-white">AA</span>
              <span className="text-xs uppercase tracking-widest text-neutral-300">Mohd. Arhan Ansari</span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg text-neutral-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-2 my-auto py-4">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`flex items-center gap-3 p-3 rounded-xl text-xs font-medium transition-colors text-left ${
                    isActive
                      ? 'bg-white text-neutral-950 font-semibold'
                      : 'text-neutral-300 hover:bg-neutral-900'
                  }`}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          <div className="pt-4 border-t border-neutral-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full py-2.5 rounded-lg border border-neutral-700 text-xs font-medium text-white flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4" />
              <span>Preview & Download Full Resume</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenProfile();
              }}
              className="w-full py-2 rounded-lg text-xs text-neutral-400 hover:text-white"
            >
              <span>View One-Page Profile</span>
            </button>
          </div>
        </div>
      )}

      {/* Mobile Floating Bottom Bar for Essential Anchors */}
      <div className="lg:hidden fixed bottom-4 left-4 right-4 z-40 flex items-center justify-around py-2 px-3 rounded-2xl backdrop-blur-xl bg-neutral-950/85 dark:bg-neutral-950/85 light:bg-white/90 border border-neutral-800/80 dark:border-neutral-800/80 light:border-neutral-200 shadow-2xl no-print">
        {navItems.slice(0, 5).map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`p-2 rounded-lg flex flex-col items-center gap-1 transition-colors ${
                isActive ? 'text-white dark:text-white light:text-neutral-950 font-bold' : 'text-neutral-500'
              }`}
              aria-label={item.label}
            >
              <Icon className="w-4 h-4" />
              <span className="text-[9px] tracking-tight">{item.label}</span>
            </button>
          );
        })}
        <button
          onClick={() => onNavigate('contact')}
          className={`p-2 rounded-lg flex flex-col items-center gap-1 transition-colors ${
            activeSection === 'contact' ? 'text-white dark:text-white light:text-neutral-950 font-bold' : 'text-neutral-500'
          }`}
          aria-label="Contact"
        >
          <Mail className="w-4 h-4" />
          <span className="text-[9px] tracking-tight">Contact</span>
        </button>
      </div>
    </>
  );
};
