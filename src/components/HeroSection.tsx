'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Linkedin, Mail, Phone, Github } from 'lucide-react';
import { profileData } from '@/data/profileData';
import { ProfileData } from '@/types/portfolio';

export interface HeroSectionProps {
  data?: ProfileData;
}

const revealTransition = {
  duration: 0.7,
  ease: [0.16, 1, 0.3, 1],
};

export function HeroSection({ data = profileData }: HeroSectionProps) {
  const linkedinChannel = data.directChannels.find((c) => c.type === 'linkedin');
  const emailChannel = data.directChannels.find((c) => c.type === 'email');
  const githubChannel = data.directChannels.find((c) => c.type === 'github');
  const phoneOrXChannel = data.directChannels.find(
    (c) => c.type === 'phone' || c.type === 'x'
  );
  const phoneOrXLabel = phoneOrXChannel?.type === 'x' ? 'X' : 'Phone';

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-background text-primary pt-28 pb-16 px-6 sm:px-10 lg:px-16"
      style={{
        background: `
          radial-gradient(circle at 82% 38%, rgba(20, 42, 32, 0.45) 0%, rgba(13, 25, 20, 0.22) 35%, rgba(17, 17, 17, 0) 70%),
          radial-gradient(ellipse at 50% 50%, rgba(0, 0, 0, 0) 45%, rgba(10, 12, 11, 0.8) 100%),
          #111111
        `,
      }}
      aria-label="Hero Screen"
    >
      {/* Studio Portrait Atmospheric Background Element (Right Side) */}
      <div
        className="pointer-events-none absolute right-0 top-1/4 -translate-y-12 w-[340px] sm:w-[480px] lg:w-[620px] h-[500px] lg:h-[680px] opacity-25 mix-blend-screen"
        style={{
          background:
            'radial-gradient(ellipse at 70% 40%, rgba(32, 68, 52, 0.5) 0%, rgba(17, 30, 24, 0.2) 50%, transparent 80%)',
        }}
        aria-hidden="true"
      />

      {/* Main Hero Content Area */}
      <div className="relative z-10 max-w-[1200px] w-full mx-auto my-auto flex flex-col justify-center">
        {/* Eyebrow Label with flex-wrap */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={revealTransition}
          className="font-mono text-xs text-secondary tracking-widest uppercase mb-4 flex flex-wrap items-center gap-2"
        >
          <span className="text-accent">{'//'}</span>
          <span>PORTFOLIO</span>
          <span className="text-secondary/40">—</span>
          <span className="text-white/80">{data.role.toUpperCase()}</span>
        </motion.div>

        {/* Display Large Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...revealTransition, delay: 0.1 }}
          className="font-space font-bold text-[56px] sm:text-[84px] md:text-[108px] lg:text-[132px] leading-[0.92] tracking-tighter-display text-white max-w-5xl"
        >
          {data.name}
        </motion.h1>

        {/* Subtitle / Role & Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...revealTransition, delay: 0.2 }}
          className="mt-6 max-w-2xl"
        >
          <p className="font-space font-bold text-2xl sm:text-3xl md:text-4xl text-white/90 tracking-tighter-headline">
            {data.role}
          </p>
          <p className="font-space text-base sm:text-lg text-secondary font-light mt-3 leading-relaxed">
            {data.headline}
          </p>
        </motion.div>

        {/* Primary Action Button (~50px dark glass pill) & Status Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...revealTransition, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center gap-6"
        >
          {/* Near-Solid Dark Glass Pill Button (Declarative Tailwind, NOT #E84020) */}
          <a
            href="#projects"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-control font-space text-sm font-medium text-white border border-dark bg-white/[0.08] hover:bg-white/[0.15] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-md backdrop-blur-sm"
          >
            Explore Product Case Studies
          </a>

          {/* Live Availability Status */}
          <div className="inline-flex items-center gap-2 font-mono text-xs text-secondary tracking-wider">
            <span className="w-2 h-2 rounded-full bg-accent animate-live-pulse" />
            <span>{data.about.status.text.toUpperCase()}</span>
          </div>
        </motion.div>
      </div>

      {/* Bottom Row: Unbounded Socials (Lower-Left) & Scroll Bob Indicator (Bottom-Center) */}
      <div className="relative z-10 max-w-[1200px] w-full mx-auto flex items-end justify-between pt-12">
        {/* Unbounded Social Icon List (Lower-Left Corner, NO Card Container) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...revealTransition, delay: 0.4 }}
          className="flex flex-col gap-2.5 text-white"
          aria-label="Direct Social Channels"
        >
          {/* LinkedIn */}
          {linkedinChannel && (
            <a
              href={linkedinChannel.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-white/80 hover:text-white transition-colors group"
              aria-label={`${data.name} LinkedIn profile`}
            >
              <Linkedin
                size={15}
                className="text-white/60 group-hover:text-accent transition-colors"
              />
              <span className="font-space text-xs tracking-wide">LinkedIn</span>
            </a>
          )}

          {/* Email */}
          {emailChannel && (
            <a
              href={emailChannel.url}
              className="inline-flex items-center gap-3 text-white/80 hover:text-white transition-colors group"
              aria-label={`${data.name} email inquiry`}
            >
              <Mail
                size={15}
                className="text-white/60 group-hover:text-accent transition-colors"
              />
              <span className="font-space text-xs tracking-wide">Email</span>
            </a>
          )}

          {/* GitHub */}
          {githubChannel && (
            <a
              href={githubChannel.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-white/80 hover:text-white transition-colors group"
              aria-label={`${data.name} GitHub profile`}
            >
              <Github
                size={15}
                className="text-white/60 group-hover:text-accent transition-colors"
              />
              <span className="font-space text-xs tracking-wide">GitHub</span>
            </a>
          )}

          {/* Phone */}
          {phoneOrXChannel && (
            <a
              href={phoneOrXChannel.url}
              className="inline-flex items-center gap-3 text-white/80 hover:text-white transition-colors group"
              aria-label={`${data.name} ${phoneOrXLabel} contact`}
            >
              <Phone
                size={15}
                className="text-white/60 group-hover:text-accent transition-colors"
              />
              <span className="font-space text-xs tracking-wide">{phoneOrXLabel}</span>
            </a>
          )}
        </motion.div>

        {/* Centered Scroll Indicator */}
        <a
          href="#about"
          aria-label="Scroll to about section"
          className="absolute bottom-2 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-secondary hover:text-primary transition-colors cursor-pointer group"
        >
          <span className="font-mono text-[10px] uppercase tracking-widest text-secondary group-hover:text-primary transition-colors">
            SCROLL
          </span>
          <ArrowDown
            size={14}
            className="animate-scroll-bob text-secondary group-hover:text-primary transition-colors"
          />
        </a>
      </div>
    </section>
  );
}

export default HeroSection;
