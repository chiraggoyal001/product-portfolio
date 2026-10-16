'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { profileData } from '@/data/profileData';
import { ProfileData, ToolItem, LanguageItem, EducationItem } from '@/types/portfolio';
import { GradualBlur } from '@/components/GradualBlur';

export interface ToolsSectionProps {
  data?: ProfileData;
  tools?: ToolItem[];
  languages?: LanguageItem[];
  education?: EducationItem[];
}

const revealTransition = {
  duration: 0.7,
  ease: [0.16, 1, 0.3, 1],
};

export function ToolsSection({
  data = profileData,
  tools = data?.tools ?? profileData.tools ?? [],
  languages = data?.languages ?? profileData.languages ?? [],
  education = data?.education ?? profileData.education ?? [],
}: ToolsSectionProps) {
  return (
    <section
      id="tools"
      aria-label="Toolset and Craft"
      className="relative w-full bg-background text-primary border-t border-dark py-[100px] px-6 sm:px-10 lg:px-16 scroll-mt-20 overflow-hidden"
    >
      {/* Gradual Optical Blur across Projects -> Tools section change */}
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
        {/* Section Header matching Image 1 */}
        <div className="mb-10 md:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={revealTransition}
            className="font-mono text-xs sm:text-sm text-secondary uppercase tracking-[0.1em] mb-4 flex items-center gap-2"
          >
            <span className="text-accent font-semibold">{'//'}</span>
            <span>TOOLSET</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ ...revealTransition, delay: 0.1 }}
            className="font-space font-bold text-3xl sm:text-4xl lg:text-[44px] leading-[1.1] tracking-tighter-headline text-white"
          >
            The tools of the craft.
          </motion.h2>
        </div>

        {/* Pill Badges Grid */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ ...revealTransition, delay: 0.15 }}
          className="flex flex-wrap gap-2.5 sm:gap-3"
        >
          {tools.map((tool) => (
            <span
              key={tool.name}
              className={`inline-flex items-center rounded-card px-4 py-2.5 font-mono text-xs sm:text-sm transition-colors ${
                tool.isHighlighted
                  ? 'border border-accent/40 bg-accent/[0.04] text-accent font-medium hover:border-accent'
                  : 'border border-dark bg-white/[0.02] text-white/90 hover:border-white/30'
              }`}
            >
              {tool.name}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default ToolsSection;
