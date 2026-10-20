# Mohd. Arhan Ansari — Executive Portfolio

A personal brand and executive portfolio website for **Mohd. Arhan Ansari**, built with an **Executive Luxury** design philosophy (Jet Black, Pure White, and Silver accents).

Designed for leadership recruiters, HR directors, and business management teams.

---

## 🏛️ Brand & Architectural Highlights

- **Executive Luxury Identity**: Deep jet black baseline (`#080808`), ivory light mode option, brushed silver typography, and custom silver monogram crest (`AA`).
- **Editorial Magazine Hero**: Oversized display typography (`ARHAN`), official headline: *"Where Business Meets Creativity"*, and subheading: *"HR | Marketing | Business & Management"*.
- **100% Resume Grounded**: Strictly derived from Mohd. Arhan Ansari's official resume and academic records (Allenhouse Business School BBA '28, Reliance Retail Ltd. sales & operations traineeships, in-house AI in Business 2026). Zero fabricated percentages, awards, or certificates.
- **Dual Document Suite**:
  1. **Complete Professional Resume** (Interactive preview + Print / Save to PDF + Plain Text copy).
  2. **One-Page Executive Profile** (Fast-scan briefing sheet for recruiters + 1-Page PDF export).
- **Interactive Headshot Manager**: Upload or replace professional portraits dynamically with instant preview or drop `public/profile.jpg`.
- **Real Contact Integration**: Direct communication channels (Email `mohdarhanansari760@gmail.com`, WhatsApp `+91 6389052675`, LinkedIn, GitHub), anti-spam math verification, and client-side draft dispatch.
- **Zero-Pill Discipline**: High-end typography with typographic separators (`·`, `•`), avoiding generic AI template badges.
- **Silent & Accessible**: Completely silent (no audio), WCAG AA color contrast, responsive from mobile (360px) to ultra-wide (4K).

---

## 🚀 Quick Start

### 1. Installation
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build
```bash
npm run build
```
The optimized production bundle will be generated in `/dist`.

---

## 🌐 Deployment Instructions

### A. Deploy to GitHub Pages
1. In `vite.config.ts`, verify the `base` path matches your GitHub repository name (e.g., `base: '/my-personal-portfolio/'` or `base: './'`).
2. Run `npm run build`.
3. Push the `dist` folder to your `gh-pages` branch, or use GitHub Actions:
   ```yaml
   # .github/workflows/deploy.yml
   name: Deploy Portfolio
   on:
     push:
       branches: [main]
   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v4
         - uses: actions/setup-node@v4
           with:
             node-version: 20
         - run: npm ci
         - run: npm run build
         - uses: JamesIves/github-pages-deploy-action@v4
           with:
             folder: dist
   ```

### B. Deploy to Vercel
1. Push your code to GitHub or GitLab.
2. Go to [vercel.com](https://vercel.com) and import the repository.
3. Framework Preset: **Vite**.
4. Root Directory: `./`.
5. Click **Deploy**. Vercel will build and host it automatically on a global edge CDN with SSL.

---

## ✏️ Future Editing & Content Updates

All content is cleanly decoupled into modular data files:

- **All Data & Facts**: Edit `src/data/portfolioData.ts` to update education, Reliance Retail experience, skills, projects, contact numbers, or career vision without touching UI components.
- **Headshot**: Either use the interactive upload button on the live site, or save your picture as `public/profile.jpg`.
- **Introduction Video**: Place your introduction video in `public/intro-video.mp4` or embed a YouTube / Vimeo link in `src/components/Hero.tsx`.

---

© 2026 Mohd. Arhan Ansari. All rights reserved.
