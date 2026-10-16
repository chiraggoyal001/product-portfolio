'use client';

import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, FileText } from 'lucide-react';
import { ProjectItem } from '@/types/portfolio';
import { VideoEmbed, parseVideoEmbedUrl } from '@/components/VideoEmbed';

export { parseVideoEmbedUrl };

export interface CaseStudyDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  project: ProjectItem | null;
  role?: string;
}

export function CaseStudyVideoEmbed({
  url,
  title,
}: {
  url?: string;
  title: string;
}) {
  return (
    <VideoEmbed
      url={url}
      title={title}
      eyebrowLeft="// VIDEO WALKTHROUGH"
      eyebrowRight="1080P // DEMO"
      actionLabel="Watch Product Walkthrough"
      buttonSize="md"
    />
  );
}

export function CaseStudyDrawer({
  isOpen,
  onClose,
  project,
  role = 'Product Manager',
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
        <motion.div
          key="drawer-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 flex justify-end"
        >
          {/* Dark Backdrop with Blur */}
          <div
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

              {/* Project Visual Interface Preview */}
              {project.thumbnailPlaceholder && (
                <div className="relative aspect-video w-full rounded-card overflow-hidden border border-dark bg-black shadow-lg">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.thumbnailPlaceholder}
                    alt={`${project.title} Interface Preview`}
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-black/85 backdrop-blur-sm border border-white/10 px-2.5 py-1 rounded text-[10px] font-mono tracking-wider text-accent uppercase flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                    <span>SYSTEM PREVIEW</span>
                  </div>
                </div>
              )}

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
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default CaseStudyDrawer;
