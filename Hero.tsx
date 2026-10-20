import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import {
  ArrowDown,
  Download,
  Mail,
  Camera,
  Play,
  Video,
  X,
  ExternalLink,
  MapPin,
  Sparkles
} from 'lucide-react';

interface HeroProps {
  onExplorePortfolio: () => void;
  onOpenResume: () => void;
  onContactClick: () => void;
  customPhotoUrl: string | null;
  onOpenPhotoModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExplorePortfolio,
  onOpenResume,
  onContactClick,
  customPhotoUrl,
  onOpenPhotoModal
}) => {
  const { personal } = portfolioData;
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section id="home" className="relative min-h-[92vh] pt-24 pb-16 flex items-center justify-center overflow-hidden">
      {/* Background Subtle Luxury Radial Lighting */}
      <div className="absolute inset-0 bg-radial-luxury pointer-events-none opacity-60" />
      <div className="absolute -top-32 right-1/4 w-96 h-96 bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Editorial Top Kicker */}
        <div className="flex items-center gap-3 mb-6 text-xs text-neutral-400 font-medium tracking-[0.25em] uppercase">
          <span className="w-8 h-[1px] bg-neutral-600 inline-block" />
          <span>Executive Portfolio · Class of 2028</span>
          <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-emerald-500/80" />
          <span className="hidden sm:inline-block text-neutral-400 lowercase tracking-normal">
            Available for Traineeships & Entry-Level Roles
          </span>
        </div>

        {/* Hero Grid: Editorial Typography Left, Executive Portrait & Media Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Oversized Editorial Typography & Actions (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Oversized Editorial Name ARHAN */}
            <div className="relative mb-2">
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-200 to-neutral-500 select-none">
                {personal.editorialName}
              </h1>
              <p className="font-serif text-2xl sm:text-3xl text-neutral-300 tracking-wide font-normal -mt-2 sm:-mt-4">
                {personal.fullName}
              </p>
            </div>

            {/* Headline: Where Business Meets Creativity. */}
            <div className="mt-4 mb-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-white tracking-tight">
                Where Business Meets <span className="font-serif italic text-silver font-normal">Creativity</span>.
              </h2>
            </div>

            {/* Subheading: HR | Marketing | Business & Management */}
            <div className="flex flex-wrap items-center gap-2 text-sm sm:text-base font-medium tracking-wide text-neutral-400 mt-2 mb-6">
              <span className="text-neutral-200">HR</span>
              <span className="text-neutral-600">|</span>
              <span className="text-neutral-200">Marketing</span>
              <span className="text-neutral-600">|</span>
              <span className="text-neutral-200">Business & Management</span>
            </div>

            {/* Executive Bio Excerpt */}
            <p className="text-sm sm:text-base text-neutral-400 leading-relaxed max-w-xl mb-8 font-light">
              Motivated BBA scholar at Allenhouse Business School with practical retail sales and marketing experience at Reliance Retail Ltd. Bridging strategic talent management with modern consumer insights and operational discipline.
            </p>

            {/* 3 Prominent Actions */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10">
              {/* Action 1: Explore Portfolio */}
              <button
                onClick={onExplorePortfolio}
                className="group px-6 py-3 rounded-xl bg-white hover:bg-neutral-200 text-neutral-950 font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-lg hover:shadow-white/10 flex items-center gap-2"
              >
                <span>Explore Portfolio</span>
                <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
              </button>

              {/* Action 2: Download Resume */}
              <button
                onClick={onOpenResume}
                className="group px-6 py-3 rounded-xl border border-neutral-700 hover:border-neutral-300 text-neutral-200 hover:text-white font-medium text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 bg-neutral-900/40 hover:bg-neutral-800/60 flex items-center gap-2"
              >
                <Download className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
                <span>Download Resume</span>
              </button>

              {/* Action 3: Contact Me */}
              <button
                onClick={onContactClick}
                className="px-6 py-3 rounded-xl border border-neutral-800 hover:border-neutral-600 text-neutral-300 hover:text-white font-medium text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
              </button>
            </div>

            {/* Quick Location & Academic Credentials Strip */}
            <div className="pt-6 border-t border-neutral-800/60 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-neutral-400">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                <span>{personal.location}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-500" />
                <span>Allenhouse Business School</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-500" />
                <span>Reliance Retail Ltd. Trainee</span>
              </div>
            </div>
          </div>

          {/* Right Column: Uploaded Professional Photograph & Video Area (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            {/* Visual Frame */}
            <div className="relative w-full max-w-sm sm:max-w-md mx-auto">
              {/* Luxury Frame Outer Border */}
              <div className="relative rounded-3xl p-3 bg-gradient-to-b from-neutral-800/80 via-neutral-900/60 to-neutral-950 border border-neutral-800 shadow-2xl backdrop-blur-sm group">
                {/* Photo Container */}
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-neutral-900 flex flex-col items-center justify-center border border-neutral-800/60">
                  {customPhotoUrl ? (
                    <img
                      src={customPhotoUrl}
                      alt="Mohd. Arhan Ansari - Professional Portrait"
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    /* Default Executive Monogram & Silhouette Portrait Frame */
                    <div className="w-full h-full flex flex-col items-center justify-between p-6 bg-gradient-to-b from-neutral-900 via-neutral-950 to-black text-center relative overflow-hidden">
                      {/* Geometric background grid */}
                      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />

                      {/* Top status */}
                      <div className="relative z-10 w-full flex items-center justify-between text-[11px] text-neutral-400">
                        <span className="tracking-widest uppercase font-mono">PORTRAIT FRAME</span>
                        <span className="font-cinzel text-xs text-neutral-300">EST. 2026</span>
                      </div>

                      {/* Center Monogram Insignia */}
                      <div className="relative z-10 my-auto flex flex-col items-center">
                        <div className="w-28 h-28 rounded-full border border-neutral-700 bg-neutral-900/90 shadow-[0_0_40px_rgba(255,255,255,0.06)] flex items-center justify-center mb-4 relative">
                          <span className="font-cinzel text-4xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-200 to-neutral-400">
                            AA
                          </span>
                          <div className="absolute inset-1 rounded-full border border-dashed border-white/20" />
                        </div>
                        <h3 className="font-serif text-xl text-white font-medium">Mohd. Arhan Ansari</h3>
                        <p className="text-xs text-neutral-400 font-light mt-1">Professional Portrait Area</p>
                      </div>

                      {/* Interactive Upload Notice Button */}
                      <div className="relative z-10 w-full pt-4 border-t border-neutral-800/80">
                        <button
                          onClick={onOpenPhotoModal}
                          className="w-full py-2 px-3 rounded-xl bg-neutral-800/80 hover:bg-neutral-700 text-neutral-200 text-xs font-medium flex items-center justify-center gap-2 transition-colors border border-neutral-700/60"
                        >
                          <Camera className="w-3.5 h-3.5 text-neutral-400" />
                          <span>Upload / Set Headshot</span>
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Corner Accent Brackets */}
                  <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-white/40 pointer-events-none" />
                  <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-white/40 pointer-events-none" />
                  <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-white/40 pointer-events-none" />
                  <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-white/40 pointer-events-none" />
                </div>

                {/* Sub-Card Media Strip: Video Introduction & Photo Quick Switch */}
                <div className="mt-3 flex items-center justify-between px-1">
                  {/* Video Area Trigger */}
                  <button
                    onClick={() => setVideoModalOpen(true)}
                    className="flex items-center gap-2 text-xs font-medium text-neutral-300 hover:text-white transition-colors py-1.5 px-3 rounded-lg hover:bg-neutral-800/50"
                  >
                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-white">
                      <Play className="w-3 h-3 fill-current ml-0.5" />
                    </div>
                    <span>Introduction Video</span>
                  </button>

                  {/* Photo Customizer Trigger */}
                  <button
                    onClick={onOpenPhotoModal}
                    className="text-xs text-neutral-400 hover:text-neutral-200 flex items-center gap-1.5 py-1 px-2 rounded-lg hover:bg-neutral-800/40"
                    title="Change or reset headshot"
                  >
                    <Camera className="w-3.5 h-3.5" />
                    <span>Change Photo</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Optional Introduction Video Modal */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-neutral-900 border border-neutral-800 rounded-3xl p-6 shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-neutral-800 mb-6">
              <div className="flex items-center gap-2.5">
                <Video className="w-5 h-5 text-neutral-300" />
                <h3 className="font-serif text-lg text-white font-medium">Professional Introduction Video</h3>
              </div>
              <button
                onClick={() => setVideoModalOpen(false)}
                className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="aspect-video w-full rounded-2xl bg-neutral-950 border border-neutral-800 flex flex-col items-center justify-center p-8 text-center relative overflow-hidden">
              <div className="w-16 h-16 rounded-full bg-neutral-900 border border-neutral-700 flex items-center justify-center text-neutral-300 mb-4">
                <Play className="w-6 h-6 fill-current ml-1" />
              </div>
              <h4 className="text-white text-base font-medium mb-1">
                Candidate Introduction Video Placeholder
              </h4>
              <p className="text-xs text-neutral-400 max-w-md leading-relaxed mb-4">
                As per accuracy rules, this video area is pre-configured to host Mohd. Arhan Ansari&apos;s introduction video (MP4, YouTube, or Vimeo embed).
              </p>
              <div className="text-[11px] text-neutral-400 font-mono bg-neutral-900 px-3 py-1.5 rounded-md border border-neutral-800">
                To embed: place video in /public/intro-video.mp4 or link YouTube unlisted URL
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setVideoModalOpen(false)}
                className="px-5 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-medium"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
