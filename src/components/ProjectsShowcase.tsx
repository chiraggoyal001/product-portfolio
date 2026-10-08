'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Github,
  FileText,
  ArrowRight,
} from 'lucide-react';
import { projectsData } from '@/data/projectsData';
import { ProjectItem } from '@/types/portfolio';
import { CaseStudyDrawer } from '@/components/CaseStudyDrawer';
import { VideoEmbed } from '@/components/VideoEmbed';

export interface ProjectsShowcaseProps {
  projects?: ProjectItem[];
  title?: string;
  eyebrow?: string;
}

const revealTransition = {
  duration: 0.7,
  ease: [0.16, 1, 0.3, 1],
};

export function ShowcaseVideoPlayer({
  url,
  title,
  forcePlaceholder = false,
}: {
  url?: string;
  title: string;
  forcePlaceholder?: boolean;
}) {
  return (
    <VideoEmbed
      url={url}
      title={title}
      forcePlaceholder={forcePlaceholder}
      eyebrowLeft="// EXPERIMENT PREVIEW"
      eyebrowRight="1080P // DEMO"
      actionLabel="Launch Interactive Walkthrough"
      buttonSize="lg"
    />
  );
}

export function ProjectsShowcase({
  projects = projectsData,
  eyebrow = 'EXPERIMENTS & PRODUCTS',
}: ProjectsShowcaseProps) {
  const projectList = projects?.length ? projects : projectsData;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const total = projectList.length;
  // Guard if empty
  const currentProject = projectList[selectedIndex] || projectList[0];

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev + 1) % total);
  };

  const paginationText = `${String(selectedIndex + 1).padStart(2, '0')} / ${String(
    total
  ).padStart(2, '0')}`;

  if (!currentProject) {
    return null;
  }

  return (
    <section
      id="projects"
      aria-label="Projects & Experiments Showcase"
      className="relative w-full bg-background text-primary py-[100px] px-6 sm:px-10 lg:px-16 scroll-mt-20"
    >
      <div className="max-w-[1200px] mx-auto w-full">
        {/* Top Row: Eyebrow on left; Numeric pagination with Prev/Next controls on right */}
        <div className="flex items-center justify-between border-b border-dark pb-6 mb-12 md:mb-16">
          {/* Eyebrow in DM Mono */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={revealTransition}
            className="font-mono text-xs sm:text-sm text-secondary uppercase tracking-[0.1em] flex items-center gap-2"
          >
            <span className="text-accent">{'//'}</span>
            <span>{eyebrow}</span>
          </motion.div>

          {/* Numeric Pagination (e.g. 01 / 03) with Prev/Next Controls */}
          <div className="flex items-center gap-3">
            <span
              className="font-mono text-xs sm:text-sm text-secondary tracking-widest select-none"
              aria-label={`Project ${paginationText}`}
            >
              {paginationText}
            </span>

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous project"
                className="p-2 rounded-card border border-dark bg-white/[0.02] text-secondary hover:text-white hover:border-white/30 transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={handleNext}
                aria-label="Next project"
                className="p-2 rounded-card border border-dark bg-white/[0.02] text-secondary hover:text-white hover:border-white/30 transition-colors cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Interactive Project Showcase Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Project Info & Actions (~6-7 cols) */}
          <motion.div
            key={currentProject.id || currentProject.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={revealTransition}
            className="lg:col-span-6 xl:col-span-6 flex flex-col justify-start"
          >
            {/* Category & Timeline Subtitle in DM Mono uppercase */}
            <div className="text-secondary font-mono text-xs sm:text-sm uppercase tracking-wider mb-3 flex flex-wrap items-center gap-2">
              <span className="text-accent font-semibold">{currentProject.category}</span>
              <span className="text-secondary/40 select-none">•</span>
              <span>{currentProject.timeline}</span>
            </div>

            {/* Title in Space Grotesk headline-md (44px, bold, tracking -1.8px, text-white) */}
            <h2 className="font-space font-bold text-3xl sm:text-4xl lg:text-[44px] leading-[1.1] tracking-tighter-headline text-white mb-4">
              {currentProject.title}
            </h2>

            {/* Subtitle / Pitch Statement */}
            <p className="font-space text-base sm:text-lg text-white/85 leading-relaxed mb-6">
              {currentProject.subtitle}
            </p>

            {/* Key Metric Badges Row with Quantified Impact (+44% ARR Growth, etc.) */}
            <div
              className="flex flex-wrap gap-2.5 sm:gap-3 mb-8"
              aria-label="Key quantified metrics"
            >
              {currentProject.metrics.map((metric, idx) => (
                <div
                  key={idx}
                  className="border border-dark bg-white/[0.03] px-3.5 py-2.5 rounded-card flex items-baseline gap-2 hover:border-white/20 transition-colors"
                >
                  <span className="font-space font-bold text-base sm:text-lg text-accent tracking-tight">
                    {metric.value}
                  </span>
                  <span className="font-mono text-xs text-white/90 uppercase tracking-wider">
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Tags row */}
            <div className="flex flex-wrap gap-2 mb-8">
              {currentProject.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center px-3 py-1 rounded-pill border border-dark bg-transparent font-mono text-[11px] text-secondary uppercase tracking-wider"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Action Buttons: Deep Dive Case Study, GitHub, Live Demo, PRD */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => setIsDrawerOpen(true)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-pill bg-accent text-white font-mono text-xs sm:text-sm font-semibold uppercase tracking-wider hover:bg-accent/90 transition-colors shadow-md cursor-pointer group"
              >
                <span>Deep Dive Case Study</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>

              {currentProject.githubUrl && (
                <a
                  href={currentProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${currentProject.title} source code on GitHub`}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-pill border border-dark bg-transparent font-mono text-xs sm:text-sm text-secondary uppercase tracking-wider hover:text-white hover:border-white/40 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
              )}

              {currentProject.liveUrl && (
                <a
                  href={currentProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${currentProject.title} live demo app`}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-pill border border-dark bg-transparent font-mono text-xs sm:text-sm text-secondary uppercase tracking-wider hover:text-white hover:border-white/40 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Demo</span>
                </a>
              )}

              {currentProject.prdDocUrl && (
                <a
                  href={currentProject.prdDocUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Read ${currentProject.title} PRD document`}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-pill border border-dark bg-transparent font-mono text-xs sm:text-sm text-secondary uppercase tracking-wider hover:text-white hover:border-white/40 transition-colors"
                >
                  <FileText className="w-4 h-4" />
                  <span>PRD Spec</span>
                </a>
              )}
            </div>
          </motion.div>

          {/* Right Column: Interactive Media Surface (~6 cols) */}
          <motion.div
            key={`media-${currentProject.id || currentProject.slug}`}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={revealTransition}
            className="lg:col-span-6 xl:col-span-6 w-full"
          >
            <div className="relative w-full aspect-video rounded-card border border-dark overflow-hidden bg-black shadow-2xl">
              <ShowcaseVideoPlayer
                url={currentProject.videoUrl}
                title={currentProject.title}
              />
            </div>
          </motion.div>
        </div>

        {/* Thumbnail / Project Selector Tabs Strip (Bottom) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-16 pt-10 border-t border-dark">
          {projectList.map((project, idx) => {
            const isSelected = idx === selectedIndex;
            return (
              <button
                key={project.id || project.slug || idx}
                type="button"
                aria-pressed={isSelected}
                onClick={() => setSelectedIndex(idx)}
                className={`text-left p-5 rounded-card border transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'border-accent bg-white/[0.05] shadow-lg'
                    : 'border-dark bg-transparent hover:border-white/30 hover:bg-white/[0.02]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`font-mono text-xs font-bold tracking-widest ${
                      isSelected ? 'text-accent' : 'text-secondary'
                    }`}
                  >
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  {isSelected && (
                    <span className="font-mono text-[10px] uppercase text-accent tracking-wider font-semibold">
                      • CURRENT
                    </span>
                  )}
                </div>
                <h3 className="font-space font-bold text-lg text-white mb-1">
                  {project.title}
                </h3>
                <p className="font-mono text-xs text-secondary uppercase tracking-wider truncate">
                  {project.category}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Case Study Slide-Over Drawer */}
      <CaseStudyDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        project={currentProject}
      />
    </section>
  );
}

export default ProjectsShowcase;
