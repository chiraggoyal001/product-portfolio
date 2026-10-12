'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
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
  if (parts.length === 0 || !parts[0]) return 'CG';
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
  const navRef = useRef<HTMLElement>(null);

  // Keyboard Escape listener & Click-outside dismissal
  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Mobile Backdrop Overlay for Touch Dismissal */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-xs md:hidden"
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      <header className="fixed top-5 left-0 right-0 z-50 flex flex-col items-center px-4 pointer-events-none">
        <nav
          ref={navRef}
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

        {/* Mobile Menu Animated via Framer Motion */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="pointer-events-auto md:hidden w-full max-w-[650px] mt-2 p-4 rounded-2xl border border-dark flex flex-col gap-3 shadow-2xl"
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
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}

export default NavbarCapsule;
