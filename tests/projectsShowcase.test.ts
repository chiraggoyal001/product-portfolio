import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert';
import { test, describe } from 'node:test';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import {
  ProjectsShowcase,
  ShowcaseVideoPlayer,
} from '../src/components/ProjectsShowcase';
import {
  CaseStudyDrawer,
  CaseStudyVideoEmbed,
  parseVideoEmbedUrl,
} from '../src/components/CaseStudyDrawer';
import Home from '../src/app/page';
import { projectsData } from '../src/data/projectsData';
import { ProjectItem } from '../src/types/portfolio';

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

describe('Task 7: Live Experiment / Project Showcase & Case Study Drawer', () => {
  describe('ProjectsShowcase component (src/components/ProjectsShowcase.tsx)', () => {
    const html = renderToStaticMarkup(React.createElement(ProjectsShowcase));

    test('renders full-width band on #111111 with py-[100px] padding and max-w-[1200px] container', () => {
      assert.ok(
        html.includes('bg-background') || html.includes('#111111'),
        'Must feature dark background (#111111 / bg-background)'
      );
      assert.ok(
        html.includes('py-[100px]'),
        'Must maintain section padding of py-[100px]'
      );
      assert.ok(
        html.includes('border-t') && html.includes('border-dark'),
        'Must feature full-bleed border-t border-dark touching both edges of viewport on section change'
      );
      assert.ok(
        html.includes('max-w-[1200px]'),
        'Must constrain container to max-w-[1200px]'
      );
    });

    test('renders section title in Space Grotesk headline-md (44px, bold, tracking -1.8px, text-white)', () => {
      assert.ok(
        html.includes('Featured Products &amp; Experiments') ||
          html.includes('Featured Products & Experiments'),
        'Must render section title in header'
      );
    });

    test('renders section anchor id="projects" with scroll-mt-20 offset matching navbar link', () => {
      assert.ok(
        html.includes('id="projects"'),
        'Must have id="projects" matching navbar link #projects'
      );
      assert.ok(
        html.includes('scroll-mt-20'),
        'Must include scroll-mt-20 offset for sticky capsule navbar'
      );
    });

    test('renders top row eyebrow in DM Mono with // EXPERIMENTS & PRODUCTS on left', () => {
      assert.ok(
        html.includes('EXPERIMENTS &amp; PRODUCTS') ||
          html.includes('EXPERIMENTS & PRODUCTS'),
        'Must include EXPERIMENTS & PRODUCTS eyebrow label'
      );
      assert.ok(html.includes('//'), 'Must include // prefix');
      assert.ok(
        html.includes('font-mono'),
        'Must use DM Mono font for eyebrow'
      );
      assert.ok(
        html.includes('tracking-[0.1em]'),
        'Must have tracked-out letter-spacing (0.1em)'
      );
      assert.ok(
        html.includes('text-secondary'),
        'Must use muted secondary text color for eyebrow'
      );
      assert.ok(
        html.includes('text-accent'),
        'Must use vermilion accent color for // slash'
      );
    });

    test('renders numeric pagination in 01 / 05 format with Prev and Next controls on right', () => {
      assert.ok(
        html.includes('01 / 05'),
        'Must render pagination in 01 / 05 format'
      );
      assert.ok(
        html.includes('aria-label="Previous project"'),
        'Must include previous project accessible control'
      );
      assert.ok(
        html.includes('aria-label="Next project"'),
        'Must include next project accessible control'
      );
    });

    test('renders currently selected project (defaults to first project Kamada)', () => {
      const firstProject = projectsData[0];
      assert.ok(
        html.includes(escapeHtml(firstProject.title)),
        `Must display title of first project: ${firstProject.title}`
      );
      assert.ok(
        html.includes(escapeHtml(firstProject.category)),
        `Must display category: ${firstProject.category}`
      );
      assert.ok(
        html.includes(escapeHtml(firstProject.timeline)),
        `Must display timeline: ${firstProject.timeline}`
      );
      assert.ok(
        html.includes(escapeHtml(firstProject.subtitle)),
        `Must display subtitle: ${firstProject.subtitle}`
      );
    });

    test('renders project title in Space Grotesk headline-md (44px, bold, tracking -1.8px, text-white)', () => {
      assert.ok(
        html.includes('font-space'),
        'Must use Space Grotesk font for project title'
      );
      assert.ok(
        html.includes('font-bold'),
        'Project title must be bold font weight'
      );
      assert.ok(
        html.includes('tracking-tighter-headline'),
        'Project title must use tracking-tighter-headline (-1.8px)'
      );
      assert.ok(
        html.includes('text-white') || html.includes('text-primary'),
        'Project title must be white text'
      );
    });

    test('renders category & timeline subtitle in text-secondary font-mono text-xs/sm uppercase tracking-wider', () => {
      assert.ok(
        html.includes('font-mono'),
        'Subtitle must use DM Mono font'
      );
      assert.ok(
        html.includes('uppercase'),
        'Subtitle must be uppercase'
      );
      assert.ok(
        html.includes('tracking-wider'),
        'Subtitle must use tracking-wider'
      );
    });

    test('renders key metric badges row with quantified impact (4 Members, 100% Mapped, etc.)', () => {
      const firstProject = projectsData[0];
      firstProject.metrics.forEach((metric) => {
        assert.ok(
          html.includes(metric.value),
          `Must render metric value: ${metric.value}`
        );
        assert.ok(
          html.includes(metric.label),
          `Must render metric label: ${metric.label}`
        );
      });
      assert.ok(
        html.includes('4 Members'),
        'Must render 4 Members quantified metric value'
      );
      assert.ok(
        html.includes('Capstone Squad'),
        'Must render Capstone Squad metric label'
      );
    });

    test('renders interactive media surface with video player embed support', () => {
      assert.ok(
        html.includes('aspect-video'),
        'Media surface must maintain 16:9 aspect ratio'
      );
      assert.ok(
        html.includes('iframe') || html.includes('youtube.com/embed'),
        'Must embed YouTube video player for Nexus AI'
      );
    });

    test('renders required action buttons (Deep Dive Case Study, GitHub, Live Demo, PRD)', () => {
      assert.ok(
        html.includes('Deep Dive Case Study'),
        'Must have Deep Dive Case Study button'
      );
      assert.ok(
        html.includes('GitHub'),
        'Must render GitHub link with icon'
      );
      assert.ok(
        html.includes('Live Demo'),
        'Must render Live Demo link with ExternalLink icon'
      );
      assert.ok(
        html.includes('PRD'),
        'Must render PRD link'
      );
      assert.ok(
        html.includes(projectsData[0].githubUrl!),
        'Must link to project GitHub repository'
      );
      assert.ok(
        html.includes(projectsData[0].liveUrl!),
        'Must link to project live web demo'
      );
      assert.ok(
        html.includes(projectsData[0].prdDocUrl!),
        'Must link to project PRD specification'
      );
    });

    test('renders thumbnail / project selector tabs to switch between all projects', () => {
      projectsData.forEach((project, idx) => {
        assert.ok(
          html.includes(escapeHtml(project.title)),
          `Selector must render title for project ${idx + 1}: ${project.title}`
        );
        assert.ok(
          html.includes(escapeHtml(project.category)),
          `Selector must render category for project ${idx + 1}: ${project.category}`
        );
        const indexStr = String(idx + 1).padStart(2, '0');
        assert.ok(
          html.includes(indexStr),
          `Selector must render index numeral: ${indexStr}`
        );
      });
    });

    test('supports defensive custom projects prop injection', () => {
      const customProjects: ProjectItem[] = [
        {
          id: 'custom-proj-1',
          slug: 'custom-proj-1',
          title: 'Aegis Quantum Gateway',
          subtitle: 'Zero-trust cryptographic API gateway for hybrid clouds',
          category: 'Cloud Security / Cryptography',
          timeline: 'Q1 2025 — Q3 2025',
          featured: true,
          videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
          githubUrl: 'https://github.com/custom/aegis',
          liveUrl: 'https://aegis.custom.dev',
          prdDocUrl: 'https://notion.so/custom/aegis-prd',
          metrics: [
            { label: 'Latency Overhead', value: '<2ms', change: '-80% vs baseline' },
            { label: 'Throughput', value: '1.2M RPS', change: '1.2M peak requests' },
          ],
          tags: ['Quantum Cryptography', 'Rust', 'eBPF'],
          caseStudy: {
            summary: 'Aegis provides post-quantum cryptographic security.',
            problem: 'Legacy TLS implementations are vulnerable to store-now-decrypt-later.',
            hypothesis: 'Hardware-accelerated lattice cryptography eliminates performance tax.',
            targetAudience: 'Chief Information Security Officers & Platform Leads',
            solution: [
              'Custom eBPF packet filter bypass kernel overhead.',
              'Hardware offload via dedicated FPGA coprocessors.',
              'Automated post-quantum key rotation with zero packet drops.',
              'Unified compliance dashboard with verifiable audit logs.',
            ],
            productDecisions: [
              'Selected Kyber algorithm over traditional RSA for post-quantum resistance.',
              'Adopted zero-copy memory architecture to hit sub-2ms SLA.',
            ],
            metrics: [
              { label: 'Latency Overhead', value: '<2ms', change: '-80% vs baseline' },
            ],
            videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
          },
        },
      ];

      const customHtml = renderToStaticMarkup(
        React.createElement(ProjectsShowcase, { projects: customProjects })
      );

      assert.ok(customHtml.includes('Aegis Quantum Gateway'));
      assert.ok(customHtml.includes('Zero-trust cryptographic API gateway'));
      assert.ok(customHtml.includes('Cloud Security / Cryptography'));
      assert.ok(customHtml.includes('01 / 01'));
      assert.ok(customHtml.includes('&lt;2ms') || customHtml.includes('<2ms'));
      assert.ok(customHtml.includes('Latency Overhead'));
    });
  });

  describe('ShowcaseVideoPlayer component', () => {
    test('renders YouTube iframe embed for YouTube video URLs', () => {
      const ytHtml = renderToStaticMarkup(
        React.createElement(ShowcaseVideoPlayer, {
          url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
          title: 'Nexus AI Demo',
        })
      );
      assert.ok(ytHtml.includes('<iframe'), 'Must render iframe element');
      assert.ok(
        ytHtml.includes('https://www.youtube.com/embed/dQw4w9WgXcQ'),
        'Must format YouTube embed URL'
      );
      assert.ok(
        ytHtml.toLowerCase().includes('allowfullscreen'),
        'Must allow fullscreen'
      );
    });

    test('renders Loom iframe embed for Loom video URLs', () => {
      const loomHtml = renderToStaticMarkup(
        React.createElement(ShowcaseVideoPlayer, {
          url: 'https://www.loom.com/share/placeholder-pulse',
          title: 'Pulse Analytics Walkthrough',
        })
      );
      assert.ok(loomHtml.includes('<iframe'), 'Must render iframe element');
      assert.ok(
        loomHtml.includes('https://www.loom.com/embed/placeholder-pulse'),
        'Must format Loom embed URL'
      );
    });

    test('renders direct <video> tag for direct video files (.mp4, .webm)', () => {
      const videoHtml = renderToStaticMarkup(
        React.createElement(ShowcaseVideoPlayer, {
          url: 'https://storage.googleapis.com/assets/demo-walkthrough.mp4',
          title: 'Direct Video Demo',
        })
      );
      assert.ok(videoHtml.includes('<video'), 'Must render video tag');
      assert.ok(
        videoHtml.includes('https://storage.googleapis.com/assets/demo-walkthrough.mp4'),
        'Must set video src correctly'
      );
      assert.ok(videoHtml.includes('controls'), 'Must include video controls');
    });

    test('renders stylistic dark placeholder frame with play trigger when URL is empty or forced placeholder', () => {
      const placeholderHtml = renderToStaticMarkup(
        React.createElement(ShowcaseVideoPlayer, {
          url: '',
          title: 'Placeholder Walkthrough',
          forcePlaceholder: true,
        })
      );
      assert.ok(
        placeholderHtml.includes('aria-label="Play Placeholder Walkthrough video demonstration"'),
        'Must render play button trigger'
      );
      assert.ok(
        placeholderHtml.includes('bg-accent'),
        'Play button must feature vermilion accent'
      );
      assert.ok(
        placeholderHtml.includes('// EXPERIMENT PREVIEW'),
        'Must include stylistic viewfinder metadata header'
      );
    });
  });

  describe('CaseStudyDrawer component (src/components/CaseStudyDrawer.tsx)', () => {
    const project = projectsData[0];
    const html = renderToStaticMarkup(
      React.createElement(CaseStudyDrawer, {
        isOpen: true,
        onClose: () => {},
        project,
      })
    );


    test('implements Escape key event listener and click-outside dismissal', () => {
      const drawerSource = fs.readFileSync(
        path.resolve('src/components/CaseStudyDrawer.tsx'),
        'utf8'
      );
      assert.ok(
        drawerSource.includes("e.key === 'Escape'"),
        'Must check e.key === "Escape"'
      );
      assert.ok(
        drawerSource.includes("window.addEventListener('keydown'"),
        'Must register keydown listener on window'
      );
      assert.ok(
        drawerSource.includes("window.removeEventListener('keydown'"),
        'Must clean up keydown listener on unmount'
      );
      assert.ok(
        html.includes('bg-black/80') && html.includes('cursor-pointer'),
        'Backdrop must be clickable overlay for click-outside dismissal'
      );
    });

    test('returns null when isOpen is false', () => {
      const closedHtml = renderToStaticMarkup(
        React.createElement(CaseStudyDrawer, {
          isOpen: false,
          onClose: () => {},
          project,
        })
      );
      assert.strictEqual(closedHtml, '', 'Must render nothing when closed');
    });

    test('renders dark backdrop with blur (fixed inset-0 z-50 bg-black/80 backdrop-blur-md)', () => {
      assert.ok(
        html.includes('bg-black/80') && html.includes('backdrop-blur-md'),
        'Backdrop must use bg-black/80 and backdrop-blur-md'
      );
      assert.ok(
        html.includes('fixed inset-0'),
        'Backdrop must be fixed full-screen overlay'
      );
    });

    test('renders slide-over panel on #111111 (bg-background) with border-l border-dark and max-w-2xl / max-w-[700px]', () => {
      assert.ok(
        html.includes('bg-background') || html.includes('#111111'),
        'Drawer must use bg-background'
      );
      assert.ok(
        html.includes('border-l') && html.includes('border-dark'),
        'Drawer must have border-l border-dark'
      );
      assert.ok(
        html.includes('max-w-2xl') || html.includes('max-w-[700px]'),
        'Drawer must be constrained to desktop width'
      );
    });

    test('renders accessible dismissal close button (X) with aria-label', () => {
      assert.ok(
        html.includes('aria-label="Close case study drawer"'),
        'Close button must have aria-label="Close case study drawer"'
      );
    });

    test('renders Header with Project title, category, role, and timeline', () => {
      assert.ok(
        html.includes(escapeHtml(project.title)),
        `Header must render project title: ${project.title}`
      );
      assert.ok(
        html.includes(escapeHtml(project.category)),
        `Header must render category: ${project.category}`
      );
      assert.ok(
        html.includes(escapeHtml(project.timeline)),
        `Header must render timeline: ${project.timeline}`
      );
      assert.ok(
        html.includes('Role') && html.includes('Lead Product Manager'),
        'Header must render role'
      );
      assert.ok(
        html.includes(escapeHtml(project.caseStudy.summary)),
        'Header must render executive case study summary'
      );
    });

    test('renders Metrics highlight bar as grid of cards with label, value, and change', () => {
      assert.ok(
        html.includes('KEY METRICS &amp; QUANTIFIED IMPACT') ||
          html.includes('KEY METRICS & QUANTIFIED IMPACT'),
        'Must include metrics section header'
      );
      assert.ok(
        html.includes('grid') && html.includes('sm:grid-cols-2'),
        'Metrics must be structured as a grid of cards'
      );

      project.caseStudy.metrics.forEach((metric) => {
        assert.ok(
          html.includes(metric.value),
          `Must render metric value: ${metric.value}`
        );
        assert.ok(
          html.includes(metric.label),
          `Must render metric label: ${metric.label}`
        );
        if (metric.change) {
          assert.ok(
            html.includes(escapeHtml(metric.change)),
            `Must render metric change: ${metric.change}`
          );
        }
      });
    });

    test('renders Problem Statement & Target Audience', () => {
      assert.ok(
        html.includes('PROBLEM STATEMENT'),
        'Must render PROBLEM STATEMENT header'
      );
      assert.ok(
        html.includes(escapeHtml(project.caseStudy.problem)),
        'Must render problem statement text'
      );
      assert.ok(
        html.includes('TARGET AUDIENCE'),
        'Must render TARGET AUDIENCE header'
      );
      assert.ok(
        html.includes(escapeHtml(project.caseStudy.targetAudience)),
        'Must render target audience text'
      );
    });

    test('renders Product Hypothesis with styled callout card and border-l-[3px] border-accent', () => {
      assert.ok(
        html.includes('PRODUCT HYPOTHESIS'),
        'Must render PRODUCT HYPOTHESIS header'
      );
      assert.ok(
        html.includes('border-l-[3px]') && html.includes('border-accent'),
        'Must format hypothesis with border-l-[3px] border-accent'
      );
      assert.ok(
        html.includes(escapeHtml(project.caseStudy.hypothesis)),
        'Must render hypothesis statement'
      );
    });

    test('renders 4-part Solution breakdown with 2-digit numbered numerals (01..04)', () => {
      assert.ok(
        html.includes('4-PART SOLUTION BREAKDOWN'),
        'Must render 4-PART SOLUTION BREAKDOWN header'
      );
      assert.strictEqual(
        project.caseStudy.solution.length,
        4,
        'Solution must contain 4 items'
      );

      ['01', '02', '03', '04'].forEach((num) => {
        assert.ok(
          html.includes(num),
          `Must render 2-digit step numeral: ${num}`
        );
      });

      project.caseStudy.solution.forEach((sol) => {
        assert.ok(
          html.includes(escapeHtml(sol)),
          `Must render solution item: ${sol}`
        );
      });
    });

    test('renders Product Architecture Decisions & Trade-offs with vermilion bullet markers', () => {
      assert.ok(
        html.includes('PRODUCT ARCHITECTURE DECISIONS &amp; TRADE-OFFS') ||
          html.includes('PRODUCT ARCHITECTURE DECISIONS & TRADE-OFFS'),
        'Must render decisions section header'
      );
      assert.ok(
        html.includes('w-2 h-2 bg-accent mt-2 shrink-0'),
        'Must render custom square vermilion bullet markers'
      );

      project.caseStudy.productDecisions.forEach((decision) => {
        assert.ok(
          html.includes(escapeHtml(decision)),
          `Must render architecture decision: ${decision}`
        );
      });
    });

    test('renders Video walkthrough embed for case study with videoUrl', () => {
      assert.ok(
        html.includes('VIDEO WALKTHROUGH'),
        'Must render VIDEO WALKTHROUGH header'
      );
      assert.ok(
        html.includes('iframe') || html.includes('youtube.com/embed'),
        'Must render video embed for case study'
      );
    });

    test('renders Action links (GitHub repo, Live Web App, PRD document)', () => {
      assert.ok(
        html.includes('GitHub Repo'),
        'Must render GitHub Repo action link'
      );
      assert.ok(
        html.includes('Live Web App'),
        'Must render Live Web App action link'
      );
      assert.ok(
        html.includes('PRD Document'),
        'Must render PRD Document action link'
      );
      assert.ok(
        html.includes(project.caseStudy.githubUrl!),
        'Must link to caseStudy.githubUrl'
      );
      assert.ok(
        html.includes(project.caseStudy.liveUrl!),
        'Must link to caseStudy.liveUrl'
      );
      assert.ok(
        html.includes(project.caseStudy.prdDocUrl!),
        'Must link to caseStudy.prdDocUrl'
      );
    });
  });

  describe('parseVideoEmbedUrl helper (src/components/CaseStudyDrawer.tsx)', () => {
    test('correctly parses standard YouTube URLs', () => {
      const res = parseVideoEmbedUrl('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
      assert.strictEqual(res.type, 'youtube');
      assert.strictEqual(res.src, 'https://www.youtube.com/embed/dQw4w9WgXcQ');
    });

    test('correctly parses short youtu.be URLs', () => {
      const res = parseVideoEmbedUrl('https://youtu.be/dQw4w9WgXcQ');
      assert.strictEqual(res.type, 'youtube');
      assert.strictEqual(res.src, 'https://www.youtube.com/embed/dQw4w9WgXcQ');
    });

    test('correctly parses Loom share URLs', () => {
      const res = parseVideoEmbedUrl('https://www.loom.com/share/placeholder-pulse');
      assert.strictEqual(res.type, 'loom');
      assert.strictEqual(res.src, 'https://www.loom.com/embed/placeholder-pulse');
    });

    test('correctly parses direct MP4 and WebM URLs', () => {
      const res = parseVideoEmbedUrl('https://example.com/video.mp4');
      assert.strictEqual(res.type, 'video');
      assert.strictEqual(res.src, 'https://example.com/video.mp4');
    });

    test('returns placeholder type when URL is missing or empty', () => {
      const res = parseVideoEmbedUrl('');
      assert.strictEqual(res.type, 'placeholder');
    });
  });

  describe('Home Page integration (src/app/page.tsx)', () => {
    const html = renderToStaticMarkup(React.createElement(Home));

    test('mounts ProjectsShowcase directly after CareerTimeline in page flow', () => {
      assert.ok(html.includes('id="hero"'), 'Page must mount HeroSection');
      assert.ok(html.includes('id="intro"'), 'Page must mount IntroSection');
      assert.ok(html.includes('id="expertise"'), 'Page must mount ExpertiseSection');
      assert.ok(html.includes('id="about"'), 'Page must mount AboutSection');
      assert.ok(html.includes('id="career"'), 'Page must mount CareerTimeline');
      assert.ok(html.includes('id="projects"'), 'Page must mount ProjectsShowcase');

      const careerPos = html.indexOf('id="career"');
      const projectsPos = html.indexOf('id="projects"');

      assert.ok(
        careerPos < projectsPos,
        'CareerTimeline must appear before ProjectsShowcase'
      );
    });

    test('navbar #projects anchor target corresponds to mounted section', () => {
      assert.ok(
        html.includes('href="#projects"'),
        'Navbar must contain link to #projects'
      );
      assert.ok(
        html.includes('id="projects"'),
        'Showcase must have matching id="projects"'
      );
    });
  });
});
