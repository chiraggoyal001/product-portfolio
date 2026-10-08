# Design Specification: Executive Product Manager Portfolio ("Signal Black Executive")

- **Date:** 2026-10-08
- **Status:** Approved
- **Target Role:** Product Manager
- **Deployment Target:** Netlify
- **Optional Backend/Storage:** Supabase

---

## 1. Overview & Aesthetic Identity

The portfolio implements the **"Signal Black Executive"** design system: a dark-mode-default executive portfolio built on near-black surfaces (`#111111`), an editorial `Space Grotesk` type system pushed to extreme negative tracking, and a single rationed vermilion accent (`#E84020`) dedicated to high-intent CTAs, numerals, and emphasis keywords.

It projects Swiss/International grid discipline tailored for a high-impact Product Manager: hairline dividers, monospace index labels (`DM Mono`), left-aligned metric-driven body copy, and oversized display type that behaves like an editorial cover line.

### Core Visual Principles
- **Editorial Rhythm:** Alternates between dark cinematic bands and a warm light surface break (`#F0EFEB`) in the About section.
- **Rationed Accent:** `#E84020` is strictly reserved for actionable or emphatic elements (nav CTA pill, index digits, key headline words, timeline bullet points, and back-to-top button); never used as a large background wash.
- **Negative Space & Restraint:** Content max-width constrained to ~`1200px` with generous section padding (`100px`) and section gaps (`156px`), favoring paired 2-column or stacked single-column density over busy multi-card grids.

---

## 2. Design Tokens & Typography

### 2.1 Color Tokens
| Token | Value | Role |
| :--- | :--- | :--- |
| `background` | `#111111` | Primary surface for Hero, Intro, Expertise, Timeline, and Footer |
| `surface-light` | `#F0EFEB` | Warm off-white ground for About section break |
| `text-primary` | `#FFFFFF` | Default text on dark backgrounds |
| `text-secondary` | `#666666` | Supporting text, dates, organization names |
| `text-ink` | `#111111` | Primary text on `#F0EFEB` light surface |
| `accent` | `#E84020` | Vermilion accent (CTAs, index numerals, metric bullets, back-to-top) |
| `border-dark` | `rgba(255, 255, 255, 0.12)` | Hairline dividers and chip outlines on dark backgrounds |
| `border-light` | `#000000` | Hairline dividers on light background |

### 2.2 Typography Scale
- **Display Large:** `Space Grotesk`, `132px` (fluid scale down to `56px` on mobile), Weight 700, Line Height `0.92`, Letter Spacing `-5.9px`.
- **Headline Medium:** `Space Grotesk`, `44px`, Weight 700, Line Height `1.1`, Letter Spacing `-1.8px`.
- **Body Medium:** `Space Grotesk`, `52px` (fluid scale down to `28px` on mobile), Weight 600, Line Height `1.25`.
- **Label Medium:** `Space Grotesk`, `36px`, Weight 700, Letter Spacing `-1.1px`.
- **Body Copy:** `Space Grotesk`, `14px` / `16px`, Weight 400.
- **Eyebrow / Monospace:** `DM Mono`, `12px` - `14px`, Uppercase, Letter Spacing `0.1em` (`// INTRO`, `// EXPERTISE`, `01`, `02`).
- **Editorial Serif:** `Times New Roman`, Italic, for rare editorial emphasis.

### 2.3 Motion & Keyframes
- **Entrances:** Decelerating `cubic-bezier(0.16, 1, 0.3, 1)` at `0.7s` for opacity and transforms.
- **Scroll Indicator:** Subtle bounce (`scrollBob` keyframe).
- **Status Dot:** Subtle breathing pulse (`livePulse` keyframe) indicating active availability.
- **Fast Transitions:** `0.2s` - `0.3s` ease for hover, active states, and color transitions.

---

## 3. Component Architecture & Page Hierarchy

### 3.1 Sticky Navbar Capsule
- Centered floating capsule: `650px` width (~34% viewport on desktop), `46px` height, full pill radius (`9999px`).
- Background: `rgba(17, 17, 17, 0.55)` with `backdrop-filter: blur(20px) saturate(1.4)`.
- Content: Brand monogram/logo + 5 navigation links (`About`, `Expertise`, `Experience`, `Projects`, `Contact`) + 1 accent CTA pill (`#E84020` fill, `#FFFFFF` text, `29px` height, `9999px` radius).

### 3.2 Hero Screen
- Cinematic dark portrait backdrop with soft lighting and green-black studio ambiance.
- Vertical **"Honors"** badge pinned to the right edge of the viewport.
- Unbounded social channels list anchored in the lower-left corner (LinkedIn, Email, Phone/X) with clean icon + label pairing.
- Display-scale headline with high-contrast text.
- Hero primary action: Dark glass pill button (~`50px` radius) positioned beneath the headline.
- Scroll indicator arrow anchored at bottom center with `scrollBob` motion.

### 3.3 Intro Statement Band
- Full-width band on `#111111`.
- Eyebrow in `DM Mono`: `// INTRO`.
- Multi-line `display-lg` headline mixing crisp white words and vermilion `#E84020` emphasis words across 4 lines.

### 3.4 Expertise Grid (Product Management Competencies)
- Full-width band on `#111111` with top hairline divider.
- 2-column paired layout containing 6 distinct core competencies (e.g., Product Strategy & Roadmapping, User Research & Discovery, Growth & Metric Optimization, Technical System Architecture, Cross-functional Leadership, AI/ML Product Development).
- Each item displays title + trailing 2-digit `DM Mono` index number (`01` through `06`).

### 3.5 About Section (Off-White Surface Break)
- Surface background: `#F0EFEB` (warm off-white mid-page pause).
- Two-column split:
  - **Left:** Black-and-white portrait frame overlaid with a vermilion credential tag at bottom.
  - **Right:** Dark ink (`#111111`) headline, 3-4 narrative PM paragraphs highlighting business impact, named entities, and KPI growth.
  - **Credential Callout Box:** Off-white card with a `3px solid #E84020` left border stripe, displaying key career metrics.
  - **Status Indicator:** Live pulsing dot + current city/location.

### 3.6 Career & Impact Timeline
- Stacked full-width entries on `#111111` divided by hairline rules.
- Each entry features:
  - Vermilion index numeral (`01`, `02`, etc.).
  - Role title (bold white) + Organization & Location (muted gray `#666666`).
  - Right-aligned date duration in vermilion accent.
  - High-impact summary paragraph.
  - Bulleted metric list with custom square vermilion bullet icons.
  - Outlined pill tag-chips for methodologies and technologies.

### 3.7 Live Experiment & Project Showcase
- Full-viewport dark band with `DM Mono` eyebrow `// EXPERIMENTS & PRODUCTS` and numeric pagination `01 / 09`.
- Video demo embed / interactive screen placeholder (with support for YouTube, Loom, or direct MP4 playback).
- Direct triggers to open the **PM Case Study Deep-Dive Drawer**.

### 3.8 PM Case Study Deep-Dive Drawer / Modal
- Interactive slide-over panel designed specifically for Product Management case studies:
  - **Header:** Project title, category, role, timeline.
  - **KPI / Metrics Bar:** Highlighting key results (e.g., `+38% Conversion`, `$1.5M ARR`, `4.8★ Rating`).
  - **Problem Statement & Hypothesis:** Context, user pain points, hypotheses.
  - **Solution & User Journey:** Feature breakdown, UX screenshots, Loom/video walkthrough.
  - **Technical & Product Decisions:** Trade-offs, architecture choices.
  - **External Links:** GitHub repository, live web app link, and PRD document link.

### 3.9 Contact & Footer Band
- Black background with direct inquiry copy.
- 2-column layout:
  - **Left:** Image placeholder tile with pinned `#E84020` back-to-top button (`2px` radius).
  - **Right:** Stacked direct channels list (Email, LinkedIn, GitHub, Calendar) with bordered square swatches and hairline dividers.
- Animated horizontal marquee ticker at the base.

---

## 4. Technical Stack & Implementation Architecture

### 4.1 Framework & Build Pipeline
- **Next.js 14+ (App Router)** with TypeScript.
- **Static Export:** `output: 'export'` in `next.config.js` generates static HTML, CSS, and JS into `out/`.
- **Fonts:** `next/font/google` self-hosting `Space Grotesk` and `DM Mono` for zero CLS and instant rendering.
- **Styling:** Tailwind CSS with custom design system theme tokens and plugins.
- **Icons:** `lucide-react`.
- **Animations:** `framer-motion` for fluid scroll reveals and drawer transitions.

### 4.2 Data Layer Schema
All content is cleanly organized in `src/data/`:
- `src/data/profileData.ts`: Bio, titles, contact info, social links, location.
- `src/data/projectsData.ts`: Typed projects list with video URLs, GitHub links, live links, impact metrics, and deep-dive case study details.
- `src/data/careerData.ts`: Timeline entries, accomplishments, metric bullets, skill tags.
- `src/lib/supabase.ts`: Graceful integration layer that falls back to static TypeScript data, enabling easy Supabase connection later if remote tables or bucket storage are desired.

### 4.3 Netlify Deployment Configuration
File: `netlify.toml`
```toml
[build]
  command = "npm run build"
  publish = "out"

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
```

---

## 5. Verification & Acceptance Criteria
1. **Design System Fidelity:**
   - Background colors match `#111111` and `#F0EFEB` exactly.
   - Space Grotesk letter-spacing accurately reflects the compressed editorial aesthetic (`-5.9px` on display-lg, `-1.8px` on headline-md).
   - Floating navbar capsule is ~650px wide, centered with `blur(20px) saturate(1.4)`.
   - Vermilion `#E84020` is rationed strictly to intended interactive and accent elements.
2. **Product Manager Showcase Capabilities:**
   - Case study drawer opens smoothly and renders problem statements, metrics, demo videos, and external GitHub/PRD links.
   - Modular data files allow instant updates when new videos, GitHub repos, or project stats are added.
3. **Build & Deployment Readiness:**
   - Clean Next.js static build (`npm run build`) without TypeScript errors or broken links.
   - Generates complete `out/` directory ready for 1-click Netlify deployment.
