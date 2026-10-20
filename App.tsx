/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { WelcomeScreen } from './components/WelcomeScreen';
import { CustomCursor } from './components/CustomCursor';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { EducationExperienceSection } from './components/EducationExperienceSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { TrainingWorkshopsSection } from './components/TrainingWorkshopsSection';
import { InterestsVisionSection } from './components/InterestsVisionSection';
import { AchievementsSection } from './components/AchievementsSection';
import { ContactSection } from './components/ContactSection';
import { FloatingShortcuts } from './components/FloatingShortcuts';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { OnePageProfileModal } from './components/OnePageProfileModal';
import { PhotoUploadModal } from './components/PhotoUploadModal';
import { PrivacyPolicyModal } from './components/PrivacyPolicyModal';
import { NotFoundView } from './components/NotFoundView';

export default function App() {
  // Welcome screen state: show once per session or on first visit
  const [showWelcome, setShowWelcome] = useState(() => {
    return !sessionStorage.getItem('arhan_welcome_viewed');
  });

  // Dark mode by default
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('arhan_theme');
    return saved ? saved === 'dark' : true;
  });

  // Active section tracking
  const [activeSection, setActiveSection] = useState<string>('home');

  // Modals & sub-views
  const [resumeOpen, setResumeOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [photoModalOpen, setPhotoModalOpen] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [is404, setIs404] = useState(false);

  // Custom photo
  const [customPhotoUrl, setCustomPhotoUrl] = useState<string | null>(() => {
    return localStorage.getItem('arhan_custom_photo');
  });

  // Theme synchronization with html tag
  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      root.classList.remove('light');
      localStorage.setItem('arhan_theme', 'dark');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
      localStorage.setItem('arhan_theme', 'light');
    }
  }, [isDarkMode]);

  // Handle Hash Navigation
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (!hash) return;

      if (hash === 'resume') {
        setResumeOpen(true);
      } else if (hash === 'one-page-profile' || hash === 'profile-summary') {
        setProfileOpen(true);
      } else if (hash === 'privacy') {
        setPrivacyOpen(true);
      } else if (hash === '404') {
        setIs404(true);
      } else {
        setIs404(false);
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          setActiveSection(hash);
        }
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  // Intersection Observer for active section detection
  useEffect(() => {
    if (is404) return;

    const sections = ['home', 'about', 'education', 'experience', 'skills', 'projects', 'training', 'interests', 'achievements', 'contact'];
    const observers: IntersectionObserver[] = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        { threshold: 0.3 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, [is404]);

  const handleWelcomeComplete = () => {
    sessionStorage.setItem('arhan_welcome_viewed', 'true');
    setShowWelcome(false);
  };

  const handleToggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  const handleNavigate = (sectionId: string) => {
    setIs404(false);
    setActiveSection(sectionId);
    window.location.hash = sectionId;
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePhotoUpdated = (newPhoto: string | null) => {
    setCustomPhotoUrl(newPhoto);
    if (newPhoto) {
      localStorage.setItem('arhan_custom_photo', newPhoto);
    } else {
      localStorage.removeItem('arhan_custom_photo');
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-[#080808] text-neutral-100' : 'bg-[#FAFAFA] text-neutral-900'}`}>
      {/* Intro Welcome Screen */}
      {showWelcome && <WelcomeScreen onComplete={handleWelcomeComplete} />}

      {/* Silver Custom Desktop Cursor */}
      <CustomCursor />

      {/* Floating Navigation */}
      <Navigation
        activeSection={activeSection}
        onNavigate={handleNavigate}
        isDarkMode={isDarkMode}
        onToggleTheme={handleToggleTheme}
        onOpenResume={() => setResumeOpen(true)}
        onOpenProfile={() => setProfileOpen(true)}
      />

      {/* Main Content Area */}
      {is404 ? (
        <NotFoundView onReturnHome={() => handleNavigate('home')} />
      ) : (
        <main className="relative">
          {/* Hero Section */}
          <Hero
            onExplorePortfolio={() => handleNavigate('about')}
            onOpenResume={() => setResumeOpen(true)}
            onContactClick={() => handleNavigate('contact')}
            customPhotoUrl={customPhotoUrl}
            onOpenPhotoModal={() => setPhotoModalOpen(true)}
          />

          {/* About Narrative Section */}
          <AboutSection
            onExploreProjects={() => handleNavigate('projects')}
            onOpenResume={() => setResumeOpen(true)}
          />

          {/* Education & Experience Timeline */}
          <EducationExperienceSection />

          {/* Skills Section */}
          <SkillsSection />

          {/* Projects Showcase */}
          <ProjectsSection />

          {/* Training & Workshops */}
          <TrainingWorkshopsSection />

          {/* Interests & Career Vision */}
          <InterestsVisionSection />

          {/* Achievements & Participation */}
          <AchievementsSection />

          {/* Contact Section */}
          <ContactSection onOpenPrivacy={() => setPrivacyOpen(true)} />
        </main>
      )}

      {/* Floating WhatsApp and Email Contact Shortcuts */}
      <FloatingShortcuts />

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenResume={() => setResumeOpen(true)}
        onOpenProfile={() => setProfileOpen(true)}
        onOpenPrivacy={() => setPrivacyOpen(true)}
        onShow404={() => setIs404(true)}
      />

      {/* Full Professional Resume Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />

      {/* One-Page Profile Modal */}
      <OnePageProfileModal
        isOpen={profileOpen}
        onClose={() => setProfileOpen(false)}
      />

      {/* Photo Manager Modal */}
      <PhotoUploadModal
        isOpen={photoModalOpen}
        onClose={() => setPhotoModalOpen(false)}
        currentPhoto={customPhotoUrl}
        onPhotoSelected={handlePhotoUpdated}
      />

      {/* Privacy Policy Modal */}
      <PrivacyPolicyModal
        isOpen={privacyOpen}
        onClose={() => setPrivacyOpen(false)}
      />
    </div>
  );
}
