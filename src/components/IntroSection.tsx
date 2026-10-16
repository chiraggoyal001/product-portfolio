'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { profileData } from '@/data/profileData';
import { ProfileData } from '@/types/portfolio';
import { GradualBlur } from '@/components/GradualBlur';

export interface IntroSectionProps {
  data?: ProfileData;
}

const revealTransition = {
  duration: 0.7,
  ease: [0.16, 1, 0.3, 1],
};

export function IntroSection({ data = profileData }: IntroSectionProps) {
  const statement = data?.introStatement ?? profileData.introStatement;

  return (
    <section
      id="intro"
      aria-label="Editorial Intro Statement"
      className="relative w-full bg-background text-primary border-t border-dark py-[100px] px-6 sm:px-10 lg:px-16 overflow-hidden scroll-mt-20"
    >
      {/* Gradual Optical Blur across Hero -> Intro section change */}
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
        {/* Eyebrow in DM Mono */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={revealTransition}
          className="font-mono text-xs sm:text-sm text-secondary uppercase tracking-[0.1em] mb-8 md:mb-12 flex items-center gap-2"
        >
          <span className="text-accent">{'//'}</span>
          <span>INTRO</span>
        </motion.div>

        {/* Multi-line display statement with refined editorial scale */}
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ ...revealTransition, delay: 0.1 }}
          className="font-space font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[44px] xl:text-[48px] leading-[1.18] md:leading-[1.14] tracking-tight text-white max-w-[1100px]"
        >
          <span className="text-white">{statement.whiteTextPre}</span>
          <span className="text-accent">{statement.accentText1}</span>
          <span className="text-white">{statement.whiteTextMid}</span>
          <span className="text-accent">{statement.accentText2}</span>
          <span className="text-white">{statement.whiteTextPost}</span>
          {statement.line2Accent1 && (
            <span className="block mt-4 sm:mt-6">
              <span className="text-accent">{statement.line2Accent1}</span>
              <span className="text-white">{statement.line2WhiteMid}</span>
              <span className="text-accent">{statement.line2Accent2}</span>
              <span className="text-white">{statement.line2WhitePost}</span>
            </span>
          )}
        </motion.h2>
      </div>
    </section>
  );
}

export default IntroSection;

