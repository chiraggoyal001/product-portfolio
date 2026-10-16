'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { profileData } from '@/data/profileData';
import { ProfileData } from '@/types/portfolio';

export interface AboutSectionProps {
  data?: ProfileData;
  portraitUrl?: string;
  credentialTag?: string;
}

const revealTransition = {
  duration: 0.7,
  ease: [0.16, 1, 0.3, 1],
};

function formatBioParagraph(text: string): React.ReactNode {
  // If markdown bold syntax (**phrase**) is present
  if (text.includes('**')) {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong key={i} className="font-semibold text-ink">
            {part.slice(2, -2)}
          </strong>
        );
      }
      return part;
    });
  }

  // Target key PM metrics, scale numbers, and strategic impact terms
  const highlightPattern = /(10,000\+?|40,000\s+records|Awign|Masai\s+x\s+BITSOM|AI-enabled internal tools|robotics operations|Whimsical\/Miro|GenAI\s+and\s+Agentic\s+AI|zero-to-one|rapid prototyping)/i;
  const parts = text.split(new RegExp(highlightPattern.source, 'gi'));

  return parts.map((part, i) => {
    if (highlightPattern.test(part)) {
      return (
        <strong key={i} className="font-semibold text-ink">
          {part}
        </strong>
      );
    }
    return part;
  });
}

export function AboutSection({
  data = profileData,
  portraitUrl,
  credentialTag = 'PRODUCT ARCHITECTURE // 0-TO-1 SCALE',
}: AboutSectionProps) {
  const about = data?.about ?? profileData.about;
  const headline = about?.headline ?? profileData.about.headline;
  const bioParagraphs = about?.bioParagraphs ?? profileData.about.bioParagraphs;
  const credentialCallout = about?.credentialCallout ?? profileData.about.credentialCallout;
  const status = about?.status ?? profileData.about.status;
  const name = data?.name ?? profileData.name;
  const isAvailable = status?.available ?? true;

  const effectivePortraitUrl = portraitUrl ?? about?.portraitUrl ?? '/images/profile/chirag-goyal.jpg';
  const statusLine = [status?.location, status?.text].filter(Boolean).join(' • ');

  return (
    <section
      id="about"
      aria-label={`About ${name}`}
      className="relative w-full bg-surface text-ink py-[100px] px-6 sm:px-10 lg:px-16 scroll-mt-20 overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto w-full">
        {/* Eyebrow in DM Mono */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={revealTransition}
          className="font-mono text-xs sm:text-sm text-secondary uppercase tracking-[0.1em] mb-12 md:mb-16 flex items-center gap-2"
        >
          <span className="text-accent">{'//'}</span>
          <span>ABOUT</span>
        </motion.div>

        {/* Two-Column Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: B&W Portrait / Stylistic Silhouette Frame (~5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={revealTransition}
            className="lg:col-span-5 w-full"
          >
            {/* Note: Grayscale is applied to inner portrait contents only, so the overlaid vermilion badge is NOT desaturated */}
            <div className="relative w-full aspect-[4/5] rounded-card overflow-hidden border border-light bg-black shadow-lg">
              {effectivePortraitUrl ? (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={effectivePortraitUrl}
                  alt={name}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center grayscale contrast-110"
                />
              ) : (
                /* Stylistic Executive Silhouette Photography Frame */
                <div
                  className="relative w-full h-full flex flex-col justify-between p-6 bg-gradient-to-b from-[#1c1c1c] via-[#0f0f0f] to-black grayscale"
                  aria-label="Executive Portrait Silhouette"
                >
                  {/* Viewfinder Frame Meta */}
                  <div className="flex items-center justify-between font-mono text-[11px] text-white/50 tracking-wider uppercase z-10">
                    <span>{'// PORTRAIT [4:5]'}</span>
                    <span>{'SILHOUETTE // B&W'}</span>
                  </div>

                  {/* Centered Silhouette Vector */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <svg
                      className="w-3/4 h-3/4 text-white/[0.08]"
                      viewBox="0 0 200 240"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <circle cx="100" cy="70" r="38" opacity="0.9" />
                      <path
                        d="M30 210 C30 145, 60 125, 100 125 C140 125, 170 145, 170 210 Z"
                        opacity="0.9"
                      />
                    </svg>
                    {/* Studio Directional Light */}
                    <div
                      className="absolute inset-0 opacity-40 mix-blend-screen"
                      style={{
                        background:
                          'radial-gradient(ellipse at 50% 30%, rgba(255, 255, 255, 0.18) 0%, rgba(255, 255, 255, 0.05) 40%, transparent 70%)',
                      }}
                    />
                  </div>

                  {/* Framing Viewfinder Corner Marks */}
                  <div className="absolute top-4 left-4 w-3 h-3 border-t border-l border-white/30 pointer-events-none" />
                  <div className="absolute top-4 right-4 w-3 h-3 border-t border-r border-white/30 pointer-events-none" />
                  <div className="absolute bottom-16 left-4 w-3 h-3 border-b border-l border-white/30 pointer-events-none" />
                  <div className="absolute bottom-16 right-4 w-3 h-3 border-b border-r border-white/30 pointer-events-none" />
                </div>
              )}

              {/* Overlaid Vermilion Credential Tag at Bottom Edge */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5 z-20">
                <div className="bg-accent text-white px-3 sm:px-3.5 py-2 sm:py-2.5 rounded-card inline-flex items-center gap-2 font-mono text-[10px] sm:text-xs md:text-sm font-semibold tracking-wider uppercase shadow-md">
                  <span>{credentialTag}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Narrative Headline, Bio Paragraphs, Callout & Status (~7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ ...revealTransition, delay: 0.1 }}
            className="lg:col-span-7 w-full flex flex-col justify-start"
          >
            {/* Headline in Dark Ink */}
            <h2 className="font-space font-bold text-3xl sm:text-4xl lg:text-[44px] leading-[1.15] tracking-tighter-headline text-ink mb-8">
              {headline}
            </h2>

            {/* 3 Narrative Bio Paragraphs with Inline Bold Emphasis */}
            <div className="space-y-5 text-ink/85 font-space font-normal text-base sm:text-lg leading-relaxed mb-8">
              {bioParagraphs.map((paragraph, idx) => (
                <p key={idx}>{formatBioParagraph(paragraph)}</p>
              ))}
            </div>

            {/* Bordered Stat Callout Box with 3px solid vermilion stripe */}
            <div className="bg-white/60 border-l-[3px] border-accent p-6 rounded-r-card shadow-sm mb-8">
              <div className="font-space font-bold text-3xl sm:text-4xl text-ink tracking-tight">
                {credentialCallout.stat}
              </div>
              <div className="font-mono text-xs sm:text-sm font-semibold text-accent uppercase tracking-wider mt-1.5">
                {credentialCallout.label}
              </div>
              <p className="font-space text-sm sm:text-base text-ink/75 mt-2 leading-relaxed">
                {credentialCallout.subtext}
              </p>
            </div>

            {/* Availability Status & Location Line with Live Pulsing Dot */}
            <div className="flex items-center gap-3 font-mono text-xs sm:text-sm text-ink/80">
              <span
                className="relative flex h-2.5 w-2.5 items-center justify-center shrink-0"
                aria-hidden="true"
              >
                {isAvailable && (
                  <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-75 animate-ping" />
                )}
                <span
                  className={`relative inline-flex h-2.5 w-2.5 rounded-full ${
                    isAvailable ? 'bg-accent animate-live-pulse' : 'bg-secondary'
                  }`}
                />
              </span>
              <span>{statusLine}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
