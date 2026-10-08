'use client';

import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, FileText, Play } from 'lucide-react';
import { ProjectItem } from '@/types/portfolio';

export interface CaseStudyDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  project: ProjectItem | null;
  role?: string;
}

export function parseVideoEmbedUrl(url?: string): {
  type: 'youtube' | 'loom' | 'video' | 'placeholder';
  src?: string;
} {
  if (!url) return { type: 'placeholder' };

  const ytMatch = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]+)/i
  );
  if (ytMatch && ytMatch[1]) {
    return {
      type: 'youtube',
      src: `https://www.youtube.com/embed/${ytMatch[1]}`,
    };
  }

  const loomMatch = url.match(/loom\.com\/(?:share|embed)\/([a-zA-Z0-9_-]+)/i);
  if (loomMatch && loomMatch[1]) {
    return {
      type: 'loom',
      src: `https://www.loom.com/embed/${loomMatch[1]}`,
    };
  }

  if (/\.(mp4|webm|ogg)($|\?)/i.test(url)) {
    return {
      type: 'video',
      src: url,
    };
  }

  return {
    type: 'placeholder',
    src: url,
  };
}

export function CaseStudyVideoEmbed({
  url,
  title,
}: {
  url?: string;
  title: string;
}) {
  const embed = parseVideoEmbedUrl(url);

  if (embed.type === 'youtube' && embed.src) {
    return (
      <iframe
        src={embed.src}
        title={`${title} video demonstration`}
        className="w-full h-full border-0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
  }

  if (embed.type === 'loom' && embed.src) {
    return (
      <iframe
        src={embed.src}
        title={`${title} Loom walkthrough`}
        className="w-full h-full border-0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
  }

  if (embed.type === 'video' && embed.src) {
    return (
      <video
        src={embed.src}
        controls
        className="w-full h-full object-cover"
        title={`${title} walkthrough video`}
      >
        Your browser does not support the video tag.
      </video>
    );
  }

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-b from-[#1c1c1c] via-[#0f0f0f] to-black">
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between font-mono text-[11px] text-white/50 tracking-wider uppercase">
        <span>{'// VIDEO WALKTHROUGH'}</span>
        <span>{'1080P // DEMO'}</span>
      </div>

      <button
        type="button"
        aria-label={`Play ${title} walkthrough`}
        className="w-14 h-14 rounded-full bg-accent text-white flex items-center justify-center shadow-xl hover:scale-105 transition-transform group cursor-pointer"
      >
        <Play className="w-5 h-5 fill-white ml-0.5 group-hover:scale-110 transition-transform" />
      </button>

      <span className="mt-3 font-mono text-xs text-secondary uppercase tracking-widest">
        Watch Product Walkthrough
      </span>

      <div className="absolute top-4 left-4 w-3 h-3 border-t border-l border-white/20 pointer-events-none" />
      <div className="absolute top-4 right-4 w-3 h-3 border-t border-r border-white/20 pointer-events-none" />
      <div className="absolute bottom-4 left-4 w-3 h-3 border-b border-l border-white/20 pointer-events-none" />
      <div className="absolute bottom-4 right-4 w-3 h-3 border-b border-r border-white/20 pointer-events-none" />
    </div>
  );
}

export function CaseStudyDrawer({
  isOpen,
  onClose,
  project,
  role = 'Lead Product Manager',
}: CaseStudyDrawerProps) {
  const panelRef = useRef<HTMLElement>(null);

  // Keyboard Escape listener & Lock body scroll
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose]);

  const caseStudy = project?.caseStudy;
  const videoUrl = caseStudy?.videoUrl || project?.videoUrl;
  const githubUrl = caseStudy?.githubUrl || project?.githubUrl;
  const liveUrl = caseStudy?.liveUrl || project?.liveUrl;
  const prdDocUrl = caseStudy?.prdDocUrl || project?.prdDocUrl;

  return (
    <AnimatePresence>
      {isOpen && project && caseStudy && (
        <div className="fixed inset-0 z-50 flex justify-end">
        {/* Dark Backdrop with Blur */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md cursor-pointer"
          aria-hidden="true"
        />

        {/* Slide-over panel (Framer Motion) from right side */}
        <motion.aside
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby="case-study-heading"
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-50 w-full max-w-2xl sm:max-w-[700px] h-full bg-background text-primary border-l border-dark shadow-2xl flex flex-col overflow-hidden"
        >
          {/* Drawer Top Navigation Bar */}
          <div className="sticky top-0 z-20 flex items-center justify-between px-6 sm:px-8 py-5 border-b border-dark bg-background/95 backdrop-blur-md">
            <div className="font-mono text-xs uppercase tracking-widest text-secondary flex items-center gap-2">
              <span className="text-accent">{'//'}</span>
              <span>PM CASE STUDY DEEP DIVE</span>
            </div>

            {/* Dismissal Close Button */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close case study drawer"
              className="p-2 -mr-2 rounded-card text-secondary hover:text-white hover:bg-white/[0.05] transition-colors cursor-pointer group"
            >
              <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-200" />
            </button>
          </div>

          {/* Drawer Scrollable Content Body */}
          <div className="flex-1 overflow-y-auto px-6 sm:px-8 py-8 space-y-10">
            {/* 1. Header Section: Title, Category, Role, Timeline */}
            <header className="space-y-4">
              <div className="font-mono text-xs uppercase tracking-wider text-accent">
                {project.category}
              </div>

              <h2
                id="case-study-heading"
                className="font-space font-bold text-3xl sm:text-4xl text-white tracking-tight leading-tight"
              >
                {project.title}
              </h2>

              <p className="font-space text-base sm:text-lg text-white/85 leading-relaxed">
                {caseStudy.summary || project.subtitle}
              </p>

              {/* Executive Metadata Ribbon: Category, Role, Timeline */}
              <div className="pt-2 grid grid-cols-2 sm:grid-cols-3 gap-3 border-y border-dark py-4 font-mono text-xs">
                <div>
                  <span className="text-secondary block uppercase tracking-wider mb-1">
                    Role
                  </span>
                  <span className="text-white font-medium">{role}</span>
                </div>
                <div>
                  <span className="text-secondary block uppercase tracking-wider mb-1">
                    Timeline
                  </span>
                  <span className="text-white font-medium">{project.timeline}</span>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <span className="text-secondary block uppercase tracking-wider mb-1">
                    Domain
                  </span>
                  <span className="text-white font-medium truncate block">
                    {project.category}
                  </span>
                </div>
              </div>
            </header>

            {/* 2. Metrics Highlight Bar: Grid of cards with label, value, change */}
            <section aria-labelledby="metrics-heading">
              <h3
                id="metrics-heading"
                className="font-mono text-xs text-accent uppercase tracking-widest mb-4 flex items-center gap-2"
              >
                <span>{'//'}</span>
                <span>KEY METRICS & QUANTIFIED IMPACT</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {(caseStudy.metrics?.length ? caseStudy.metrics : project.metrics).map(
                  (metric, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-card border border-dark bg-white/[0.03] flex flex-col justify-between"
                    >
                      <div className="font-space font-bold text-2xl text-accent tracking-tight">
                        {metric.value}
                      </div>
                      <div className="font-mono text-xs font-semibold text-white/90 uppercase tracking-wider mt-1">
                        {metric.label}
                      </div>
                      {metric.change && (
                        <div className="font-space text-xs text-secondary mt-2 leading-relaxed">
                          {metric.change}
                        </div>
                      )}
                    </div>
                  )
                )}
              </div>
            </section>

            {/* 3. Problem Statement & Target Audience */}
            <section className="space-y-6" aria-labelledby="problem-heading">
              <div>
                <h3
                  id="problem-heading"
                  className="font-mono text-xs text-accent uppercase tracking-widest mb-3 flex items-center gap-2"
                >
                  <span>{'//'}</span>
                  <span>PROBLEM STATEMENT</span>
                </h3>
                <p className="font-space text-base text-white/85 leading-relaxed">
                  {caseStudy.problem}
                </p>
              </div>

              <div>
                <h4 className="font-mono text-xs text-accent uppercase tracking-widest mb-3 flex items-center gap-2">
                  <span>{'//'}</span>
                  <span>TARGET AUDIENCE</span>
                </h4>
                <div className="p-4 rounded-card border border-dark bg-white/[0.02]">
                  <p className="font-space text-sm sm:text-base text-white/80 leading-relaxed">
                    {caseStudy.targetAudience}
                  </p>
                </div>
              </div>
            </section>

            {/* 4. Product Hypothesis */}
            <section aria-labelledby="hypothesis-heading">
              <h3
                id="hypothesis-heading"
                className="font-mono text-xs text-accent uppercase tracking-widest mb-3 flex items-center gap-2"
              >
                <span>{'//'}</span>
                <span>PRODUCT HYPOTHESIS</span>
              </h3>
              <div className="border-l-[3px] border-accent bg-white/[0.03] p-5 rounded-r-card">
                <p className="font-space text-base sm:text-lg text-white/95 leading-relaxed italic">
                  &ldquo;{caseStudy.hypothesis}&rdquo;
                </p>
              </div>
            </section>

            {/* 5. 4-Part Solution Breakdown */}
            <section aria-labelledby="solution-heading">
              <h3
                id="solution-heading"
                className="font-mono text-xs text-accent uppercase tracking-widest mb-4 flex items-center gap-2"
              >
                <span>{'//'}</span>
                <span>4-PART SOLUTION BREAKDOWN</span>
              </h3>
              <div className="space-y-3.5">
                {caseStudy.solution.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-card border border-dark bg-white/[0.02] flex items-start gap-4 hover:border-white/20 transition-colors"
                  >
                    <span className="font-mono text-accent text-sm font-bold tracking-widest pt-0.5 shrink-0">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <p className="font-space text-sm sm:text-base text-white/85 leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* 6. Product Architecture Decisions & Trade-offs */}
            <section aria-labelledby="decisions-heading">
              <h3
                id="decisions-heading"
                className="font-mono text-xs text-accent uppercase tracking-widest mb-4 flex items-center gap-2"
              >
                <span>{'//'}</span>
                <span>PRODUCT ARCHITECTURE DECISIONS &amp; TRADE-OFFS</span>
              </h3>
              <ul className="space-y-3">
                {caseStudy.productDecisions.map((decision, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span
                      className="w-2 h-2 bg-accent mt-2 shrink-0"
                      aria-hidden="true"
                    />
                    <p className="font-space text-sm sm:text-base text-white/85 leading-relaxed">
                      {decision}
                    </p>
                  </li>
                ))}
              </ul>
            </section>

            {/* 7. Video Walkthrough Embed (if available) */}
            {videoUrl && (
              <section aria-labelledby="video-heading">
                <h3
                  id="video-heading"
                  className="font-mono text-xs text-accent uppercase tracking-widest mb-4 flex items-center gap-2"
                >
                  <span>{'//'}</span>
                  <span>VIDEO WALKTHROUGH</span>
                </h3>
                <div className="relative w-full aspect-video rounded-card border border-dark overflow-hidden bg-black shadow-lg">
                  <CaseStudyVideoEmbed url={videoUrl} title={project.title} />
                </div>
              </section>
            )}

            {/* 8. Action Links: GitHub, Live Demo, PRD */}
            <section className="pt-4 border-t border-dark" aria-labelledby="links-heading">
              <h3
                id="links-heading"
                className="font-mono text-xs text-secondary uppercase tracking-widest mb-4 flex items-center gap-2"
              >
                <span>{'//'}</span>
                <span>PROJECT REPOSITORIES &amp; SPECIFICATIONS</span>
              </h3>
              <div className="flex flex-wrap gap-3">
                {githubUrl && (
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-pill border border-dark bg-white/[0.04] font-mono text-xs sm:text-sm text-white uppercase tracking-wider hover:border-accent hover:text-accent transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub Repo</span>
                  </a>
                )}
                {liveUrl && (
                  <a
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-pill border border-dark bg-white/[0.04] font-mono text-xs sm:text-sm text-white uppercase tracking-wider hover:border-accent hover:text-accent transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Web App</span>
                  </a>
                )}
                {prdDocUrl && (
                  <a
                    href={prdDocUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-pill border border-dark bg-white/[0.04] font-mono text-xs sm:text-sm text-white uppercase tracking-wider hover:border-accent hover:text-accent transition-colors"
                  >
                    <FileText className="w-4 h-4" />
                    <span>PRD Document</span>
                  </a>
                )}
              </div>
            </section>
          </div>
        </motion.aside>
      </div>
    )}
  </AnimatePresence>
);
}

export default CaseStudyDrawer;
