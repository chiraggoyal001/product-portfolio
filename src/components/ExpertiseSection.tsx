'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { profileData } from '@/data/profileData';
import { ProfileData } from '@/types/portfolio';
import { GradualBlur } from '@/components/GradualBlur';

export interface ExpertiseSectionProps {
  data?: ProfileData;
}

const revealTransition = {
  duration: 0.7,
  ease: [0.16, 1, 0.3, 1],
};

export function ExpertiseSection({ data = profileData }: ExpertiseSectionProps) {
  const expertiseItems = data?.expertise ?? profileData.expertise;

  return (
    <section
      id="expertise"
      aria-label="Areas of Specialisation"
      className="relative w-full bg-background text-primary border-t border-dark py-[100px] px-6 sm:px-10 lg:px-16 scroll-mt-20 overflow-hidden"
    >
      {/* Gradual Optical Blur across Intro -> Expertise section change */}
      <GradualBlur
        position="top"
        height="5rem"
        strength={2}
        divCount={6}
        curve="ease-out"
        exponential={true}
        zIndex={10}
      />

      <div className="max-w-[1200px] mx-auto w-full">
        {/* Section Header matching Image 2 */}
        <div className="mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={revealTransition}
            className="font-mono text-xs sm:text-sm text-accent uppercase tracking-[0.1em] mb-4 flex items-center gap-2"
          >
            <span>{'//'}</span>
            <span>EXPERTISE</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ ...revealTransition, delay: 0.1 }}
            className="font-space font-bold text-3xl sm:text-4xl lg:text-[44px] leading-[1.1] tracking-tighter-headline text-white"
          >
            Areas of<br className="hidden sm:inline" /> Specialisation.
          </motion.h2>
        </div>

        {/* 2-Column Numbered Tabular List (matching Image 2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16">
          {expertiseItems.map((item, idx) => (
            <motion.div
              key={item.indexNumber || idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ ...revealTransition, delay: (idx % 8) * 0.05 }}
              className="group flex items-center justify-between py-4 border-b border-dark/60 bg-transparent rounded-none transition-colors hover:border-white/30"
            >
              <h3 className="font-space font-bold text-base sm:text-lg text-white group-hover:text-white transition-colors pr-4">
                {item.title}
              </h3>
              <span className="font-mono text-xs sm:text-sm text-secondary/70 group-hover:text-accent font-medium transition-colors shrink-0">
                {item.indexNumber}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExpertiseSection;

