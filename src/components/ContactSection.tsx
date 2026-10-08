'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUp,
  ArrowUpRight,
  Mail,
  Linkedin,
  Github,
  Phone,
  Calendar,
  ExternalLink,
} from 'lucide-react';
import { profileData } from '@/data/profileData';
import { SocialChannel } from '@/types/portfolio';

export interface ContactSectionProps {
  directChannels?: SocialChannel[];
  headline?: string;
  eyebrow?: string;
  introText?: string;
}

const revealTransition = {
  duration: 0.7,
  ease: [0.16, 1, 0.3, 1],
};

function getChannelIcon(type?: string) {
  switch (type?.toLowerCase()) {
    case 'email':
      return Mail;
    case 'linkedin':
      return Linkedin;
    case 'github':
      return Github;
    case 'phone':
      return Phone;
    case 'calendar':
      return Calendar;
    default:
      return ExternalLink;
  }
}

export function ContactSection({
  directChannels = profileData.directChannels,
  headline = "Let's build the next high-leverage product.",
  eyebrow = 'CONTACT & ENGAGEMENT',
  introText,
}: ContactSectionProps) {
  const channels = directChannels?.length
    ? directChannels
    : profileData.directChannels;

  const handleBackToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="contact"
      aria-label="Contact and Engagement"
      className="relative w-full bg-background text-primary py-[100px] px-6 sm:px-10 lg:px-16 scroll-mt-20 border-t border-dark"
    >
      <div className="max-w-[1200px] mx-auto w-full">
        {/* Section Header: Eyebrow, Headline, Editorial Intro */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={revealTransition}
            className="font-mono text-xs sm:text-sm text-secondary uppercase tracking-[0.1em] flex items-center gap-2 mb-4"
          >
            <span className="text-accent font-semibold">{'//'}</span>
            <span>{eyebrow}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={revealTransition}
            className="font-space font-bold text-3xl sm:text-4xl lg:text-[44px] leading-[1.1] tracking-tighter-headline text-white mb-6"
          >
            {headline}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={revealTransition}
            className="font-space text-base sm:text-lg text-white/80 leading-relaxed"
          >
            {introText ? (
              introText
            ) : (
              <>
                Available for{' '}
                <strong className="text-white font-bold">
                  Executive Product Leadership
                </strong>
                ,{' '}
                <strong className="text-white font-bold">
                  Advisory &amp; Board Roles
                </strong>
                , and high-stakes{' '}
                <strong className="text-white font-bold">
                  0-to-1 Product Strategy
                </strong>
                . Direct communication channels monitored daily.
              </>
            )}
          </motion.p>
        </div>

        {/* 2-Column Split: Image Tile Left, Direct Channels Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">
          {/* Left Column: Square image placeholder tile with pinned back-to-top button */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={revealTransition}
            className="relative aspect-square w-full rounded-card border border-dark bg-[#181818] overflow-hidden flex flex-col items-center justify-center p-8 select-none group shadow-2xl"
          >
            {/* Viewfinder corner brackets */}
            <div className="absolute top-6 left-6 w-4 h-4 border-t border-l border-white/20 pointer-events-none" />
            <div className="absolute top-6 right-6 w-4 h-4 border-t border-r border-white/20 pointer-events-none" />
            <div className="absolute bottom-6 right-6 w-4 h-4 border-b border-r border-white/20 pointer-events-none" />

            {/* Technical grid lines */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/[0.03] via-transparent to-transparent pointer-events-none" />

            {/* Center Decorative Watermark Text */}
            <div className="flex flex-col items-center text-center z-0" aria-hidden="true">
              <span className="font-mono text-2xl sm:text-3xl tracking-[0.3em] text-white/20 uppercase font-light mb-2">
                Image
              </span>
              <span className="font-mono text-xs text-secondary/40 uppercase tracking-widest">
                EXECUTIVE STUDIO PROFILE // 1:1 TILE
              </span>
            </div>

            {/* Pinned Accent Back-To-Top Button at bottom-left corner with 2px radius */}
            <button
              type="button"
              onClick={handleBackToTop}
              aria-label="Back to top"
              className="absolute bottom-6 left-6 z-10 inline-flex items-center gap-2 px-4 py-2.5 bg-accent text-white font-mono text-xs font-semibold uppercase tracking-wider rounded-card shadow-xl hover:bg-accent/90 active:scale-95 focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none transition-all cursor-pointer group/btn"
            >
              <ArrowUp className="w-3.5 h-3.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              <span>Back to top</span>
            </button>
          </motion.div>

          {/* Right Column: Stacked Direct Channels List */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={revealTransition}
            className="flex flex-col justify-center"
          >
            <div className="border-t border-b border-dark divide-y divide-dark">
              {channels.map((channel, idx) => {
                const IconComponent = getChannelIcon(channel.type);
                const isExternal =
                  channel.url.startsWith('http://') ||
                  channel.url.startsWith('https://');

                return (
                  <a
                    key={channel.name || idx}
                    href={channel.url}
                    target={isExternal ? '_blank' : undefined}
                    rel={isExternal ? 'noopener noreferrer' : undefined}
                    aria-label={`${channel.name}: ${channel.handle}`}
                    className="flex items-center justify-between py-5 sm:py-6 px-2 group hover:bg-white/[0.02] focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none rounded-card transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-4 sm:gap-5">
                      {/* Bordered Square Swatch */}
                      <div className="w-12 h-12 shrink-0 rounded-card border border-dark bg-white/[0.02] flex items-center justify-center text-white/80 group-hover:text-accent group-hover:border-accent/40 group-hover:bg-white/[0.05] transition-all">
                        <IconComponent className="w-5 h-5 transition-transform group-hover:scale-110" />
                      </div>

                      {/* Small caps label + Value line */}
                      <div>
                        <div className="font-mono text-[11px] text-secondary uppercase tracking-widest mb-1">
                          {channel.name}
                        </div>
                        <div className="font-space font-medium text-base sm:text-lg text-white group-hover:text-accent transition-colors">
                          {channel.handle}
                        </div>
                      </div>
                    </div>

                    {/* Trailing arrow */}
                    <div className="text-secondary/60 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all pr-2">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
