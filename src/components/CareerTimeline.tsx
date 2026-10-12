'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { careerData } from '@/data/careerData';
import { ExperienceItem } from '@/types/portfolio';

export interface CareerTimelineProps {
  items?: ExperienceItem[];
  title?: string;
  eyebrow?: string;
}

const revealTransition = {
  duration: 0.7,
  ease: [0.16, 1, 0.3, 1],
};

export function CareerTimeline({
  items = careerData,
  title = 'Career & Impact Timeline',
  eyebrow = 'EXPERIENCE',
}: CareerTimelineProps) {
  const timelineItems = items?.length ? items : careerData;

  return (
    <section
      id="career"
      aria-label="Career & Impact Timeline"
      className="relative w-full bg-background text-primary py-[100px] px-6 sm:px-10 lg:px-16 scroll-mt-20"
    >
      <div className="max-w-[1200px] mx-auto w-full">
        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={revealTransition}
            className="font-mono text-xs sm:text-sm text-secondary uppercase tracking-[0.1em] mb-4 flex items-center gap-2"
          >
            <span className="text-accent">{'//'}</span>
            <span>{eyebrow}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ ...revealTransition, delay: 0.1 }}
            className="font-space font-bold text-3xl sm:text-4xl lg:text-[44px] leading-[1.1] tracking-tighter-headline text-white"
          >
            {title}
          </motion.h2>
        </div>

        {/* Stacked Full-Width Timeline Entries */}
        <div className="border-t border-dark">
          {timelineItems.map((item, idx) => (
            <motion.article
              key={item.id || item.indexNumber || idx}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ ...revealTransition, delay: idx * 0.1 }}
              className={`${
                idx < timelineItems.length - 1 ? 'border-b border-dark' : ''
              } py-12 md:py-16`}
            >
              {/* Entry Header: Role, Organization, Location, Dates */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
                <div className="flex items-start gap-4 sm:gap-6">
                  {/* 2-Digit Index Numeral in Vermilion Accent */}
                  <span className="font-mono text-accent text-lg sm:text-xl font-bold tracking-widest pt-1 shrink-0">
                    {item.indexNumber}
                  </span>

                  <div>
                    {/* Role Title in Bold Space Grotesk */}
                    <h3 className="font-space font-bold text-2xl sm:text-3xl text-white tracking-tight mb-2">
                      {item.role}
                    </h3>

                    {/* Organization & Location in Muted Gray */}
                    <div className="font-space text-sm sm:text-base text-secondary flex flex-wrap items-center gap-x-2">
                      <span className="text-secondary font-medium">{item.organization}</span>
                      <span className="text-secondary/40 select-none">•</span>
                      <span className="text-secondary">{item.location}</span>
                    </div>
                  </div>
                </div>

                {/* Right-Aligned Date Range and Duration */}
                <div className="flex flex-col md:items-end shrink-0 pl-10 sm:pl-12 md:pl-0 font-mono">
                  <span className="text-accent text-sm sm:text-base font-semibold tracking-wide">
                    {item.period}
                  </span>
                  <span className="text-secondary text-xs sm:text-sm mt-1">
                    {item.duration}
                  </span>
                </div>
              </div>

              {/* High-Impact Summary Paragraph */}
              <p className="font-space text-base sm:text-lg text-white/85 leading-relaxed mb-8 md:pl-12">
                {item.summary}
              </p>

              {/* Metric-Driven Bullet Points Checklist with Custom Square Vermilion Bullet Icons */}
              <ul className="space-y-4 mb-8 md:pl-12">
                {item.metricBullets.map((bullet, bulletIdx) => (
                  <li key={bulletIdx} className="flex items-start gap-3">
                    <span
                      className="w-2 h-2 bg-accent mt-2 shrink-0"
                      aria-hidden="true"
                    />
                    <span className="font-space text-sm sm:text-base text-white/80 leading-relaxed">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Cluster of Outlined Pill Tag-Chips */}
              <div className="flex flex-wrap gap-2 md:pl-12">
                {item.tags.map((tag, tagIdx) => (
                  <span
                    key={tagIdx}
                    className="inline-flex items-center px-3.5 py-1 rounded-pill border border-dark bg-transparent font-mono text-xs text-secondary uppercase tracking-wider hover:border-white/30 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CareerTimeline;
