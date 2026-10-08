import React from 'react';
import { profileData } from '@/data/profileData';

export interface FooterMarqueeProps {
  items?: string[];
  name?: string;
  role?: string;
}

const defaultMarqueeItems = [
  'PRODUCT MANAGEMENT',
  '0-TO-1 VENTURE SYSTEMS',
  'AI AGENTS & LLM INFRASTRUCTURE',
  'HIGH-LEVERAGE TEAMS',
  'QUANTIFIED ENTERPRISE ROI',
  'EXECUTIVE LEADERSHIP',
  'CONTINUOUS CUSTOMER DISCOVERY',
  'PRODUCT-LED GROWTH (PLG)',
];

export function FooterMarquee({
  items = defaultMarqueeItems,
  name = profileData.name,
  role = profileData.role,
}: FooterMarqueeProps) {
  const currentYear = new Date().getFullYear();

  // Duplicate items array for infinite loop
  const tickerItems = [...items, ...items];

  return (
    <footer
      aria-label="Footer Marquee and Attribution"
      className="relative w-full bg-[#0c0c0c] border-t border-dark overflow-hidden"
    >
      {/* 1. Scrolling Horizontal Marquee Strip (decorative, hidden from screen readers) */}
      <div
        aria-hidden="true"
        className="py-4 border-b border-dark/50 overflow-hidden relative flex items-center group select-none"
      >
        <div className="animate-hf-marquee motion-reduce:animate-none flex items-center whitespace-nowrap group-hover:[animation-play-state:paused]">
          {tickerItems.map((item, idx) => (
            <div key={idx} className="inline-flex items-center mx-6 sm:mx-8">
              <span className="font-mono text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-white/70">
                {item}
              </span>
              <span className="text-accent text-sm font-mono ml-6 sm:ml-8">
                {'//'}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Executive Attribution Strip (selectable text) */}
      <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-16 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        {/* Name, Role & Year */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 font-mono text-xs text-secondary">
          <span className="text-white font-medium">{name}</span>
          <span className="text-white/30" aria-hidden="true">•</span>
          <span>{role}</span>
          <span className="text-white/30" aria-hidden="true">•</span>
          <span>&copy; {currentYear}</span>
        </div>

        {/* System & Architecture Tag */}
        <div className="font-mono text-[11px] text-secondary uppercase tracking-widest flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" aria-hidden="true" />
          <span>Signal Black Executive System</span>
        </div>
      </div>
    </footer>
  );
}

export default FooterMarquee;
