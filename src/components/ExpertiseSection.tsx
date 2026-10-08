'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { profileData } from '@/data/profileData';
import { ProfileData } from '@/types/portfolio';

export interface ExpertiseSectionProps {
  data?: ProfileData;
}

const revealTransition = {
  duration: 0.7,
  ease: [0.16, 1, 0.3, 1],
};

export function ExpertiseSection({ data = profileData }: ExpertiseSectionProps) {
  const expertiseItems = data.expertise;

  return (
    <section
      id="expertise"
      aria-label="Product Management Expertise"
      className="relative w-full bg-background text-primary border-t border-dark py-[100px] px-6 sm:px-10 lg:px-16"
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
            <span>EXPERTISE</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ ...revealTransition, delay: 0.1 }}
            className="font-space font-bold text-3xl sm:text-4xl lg:text-[44px] leading-[1.1] tracking-tighter-headline text-white"
          >
            Core Disciplines & PM Competencies
          </motion.h2>
        </div>

        {/* 2-Column Paired Layout (Strictly 2 columns, never 3+ card grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 lg:gap-x-16 lg:gap-y-16">
          {expertiseItems.map((item, idx) => (
            <motion.article
              key={item.indexNumber || idx}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ ...revealTransition, delay: (idx % 2) * 0.15 }}
              className="flex flex-col justify-between border-b border-dark pb-10 bg-transparent rounded-none"
            >
              <div>
                {/* 2-digit DM Mono index number in vermilion accent */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-accent text-sm md:text-base font-semibold tracking-widest">
                    {item.indexNumber}
                  </span>
                </div>

                {/* Discipline title in bold Space Grotesk */}
                <h3 className="font-space font-bold text-xl sm:text-2xl text-white tracking-tight mb-3">
                  {item.title}
                </h3>

                {/* Concise impact description in muted text */}
                <p className="font-space text-sm sm:text-base text-secondary font-light leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Core competencies checklist / pills */}
              <div className="flex flex-wrap gap-2 pt-2">
                {item.coreCompetencies.map((comp, compIdx) => (
                  <span
                    key={compIdx}
                    className="inline-flex items-center rounded-pill border border-dark bg-white/[0.04] px-3 py-1 font-mono text-[11px] sm:text-xs text-white/80 hover:border-white/30 transition-colors"
                  >
                    {comp}
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

export default ExpertiseSection;
