'use client';

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { profileData } from '@/data/profileData';

export interface NavLinkItem {
  label: string;
  href: string;
}

export interface NavbarCapsuleProps {
  brandMonogram?: string;
  brandName?: string;
  ctaText?: string;
  ctaHref?: string;
}

export const navItems: NavLinkItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Experience', href: '#career' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 0 || !parts[0]) return 'ER';
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export function NavbarCapsule({
  brandName = profileData.name,
  brandMonogram,
  ctaText = 'Connect',
  ctaHref = '#contact',
}: NavbarCapsuleProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const monogram = brandMonogram || getInitials(brandName);

  return (
    <header className="fixed top-5 left-0 right-0 z-50 flex flex-col items-center px-4 pointer-events-none">
      <nav
        className="pointer-events-auto relative flex items-center justify-between w-full max-w-[650px] h-[46px] px-3.5 sm:px-4 rounded-pill border border-dark transition-all duration-300 shadow-lg"
        style={{
          backgroundColor: 'rgba(17, 17, 17, 0.55)',
          backdropFilter: 'blur(20px) saturate(1.4)',
          WebkitBackdropFilter: 'blur(20px) saturate(1.4)',
        }}
        aria-label="Primary Navigation"
      >
        {/* Brand Monogram / Logo Mark */}
        <a
          href="#"
          className="flex items-center gap-2 group text-primary focus:outline-none"
          aria-label={`${brandName} home`}
        >
          <span className="font-mono text-xs font-bold px-1.5 py-0.5 rounded bg-white/10 text-primary group-hover:bg-accent group-hover:text-white transition-colors">
            {monogram}
          </span>
          <span className="font-space text-xs font-semibold tracking-tight hidden sm:inline text-primary/90 group-hover:text-primary transition-colors">
            {brandName}
          </span>
        </a>

        {/* Desktop 5 Navigation Links */}
        <div className="hidden md:flex items-center gap-5">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-space text-[13px] text-secondary hover:text-primary transition-colors font-medium tracking-tight"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Right CTA Button & Mobile Toggle */}
        <div className="flex items-center gap-2">
          <a
            href={ctaHref}
            className="inline-flex items-center justify-center h-[29px] px-3.5 bg-accent text-primary rounded-pill font-space text-xs font-medium tracking-tight hover:opacity-90 active:scale-95 transition-all shadow-[0_0_10px_rgba(232,64,32,0.4)]"
            style={{ backgroundColor: '#E84020' }}
          >
            {ctaText}
          </a>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex items-center justify-center w-[29px] h-[29px] text-secondary hover:text-primary rounded-pill border border-dark bg-white/5 transition-colors focus:outline-none"
            aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={14} /> : <Menu size={14} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown Overlay (maintaining pill/capsule aesthetic) */}
      {isMobileMenuOpen && (
        <div
          className="pointer-events-auto md:hidden w-full max-w-[650px] mt-2 p-4 rounded-2xl border border-dark flex flex-col gap-3 animate-in fade-in slide-in-from-top-2 duration-200"
          style={{
            backgroundColor: 'rgba(17, 17, 17, 0.95)',
            backdropFilter: 'blur(20px) saturate(1.4)',
            WebkitBackdropFilter: 'blur(20px) saturate(1.4)',
          }}
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-space text-sm text-secondary hover:text-primary transition-colors py-1.5 px-2 rounded hover:bg-white/5 flex items-center justify-between"
            >
              <span>{item.label}</span>
              <span className="font-mono text-xs text-secondary/60">→</span>
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

export default NavbarCapsule;
