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
  items,
  name = profileData.name,
  role = profileData.role,
}: FooterMarqueeProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      aria-label="Footer and Attribution"
      className="relative w-full bg-[#0c0c0c] border-t border-dark overflow-hidden"
    >
      {/* Portfolio Attribution & Copyright Strip */}
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
          <span>Product Portfolio</span>
        </div>
      </div>
    </footer>
  );
}

export default FooterMarquee;
