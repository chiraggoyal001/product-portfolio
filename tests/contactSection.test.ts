import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert';
import { test, describe } from 'node:test';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { ContactSection } from '../src/components/ContactSection';
import { FooterMarquee } from '../src/components/FooterMarquee';
import Home from '../src/app/page';
import { profileData } from '../src/data/profileData';

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

describe('Task 8: Contact Band, Footer & Page Integration', () => {
  describe('ContactSection component (src/components/ContactSection.tsx)', () => {
    const html = renderToStaticMarkup(React.createElement(ContactSection));

    test('renders section with id="contact" and scroll-mt-20 matching navbar link', () => {
      assert.ok(
        html.includes('id="contact"'),
        'Must feature id="contact" for navbar anchor target'
      );
      assert.ok(
        html.includes('scroll-mt-20'),
        'Must feature scroll-mt-20 offset for sticky capsule navbar'
      );
    });

    test('renders full-width band on #111111 with py-[100px] and max-w-[1200px] container', () => {
      assert.ok(
        html.includes('bg-background') || html.includes('#111111'),
        'Must feature dark background (#111111 / bg-background)'
      );
      assert.ok(
        html.includes('py-[100px]'),
        'Must maintain section padding of py-[100px]'
      );
      assert.ok(
        html.includes('max-w-[1200px]'),
        'Must constrain container to max-w-[1200px]'
      );
    });

    test('renders DM Mono eyebrow // CONTACT & ENGAGEMENT with accent slash', () => {
      assert.ok(
        html.includes('CONTACT &amp; ENGAGEMENT') ||
          html.includes('CONTACT & ENGAGEMENT') ||
          html.includes('INITIATE CONTACT'),
        'Must render contact eyebrow'
      );
      assert.ok(html.includes('//'), 'Must include // prefix in eyebrow');
      assert.ok(html.includes('font-mono'), 'Must use DM Mono for eyebrow');
      assert.ok(html.includes('text-accent'), 'Must colorize // slash with vermilion accent');
    });

    test('renders headline-md section title with -1.8px negative tracking in Space Grotesk', () => {
      assert.ok(
        html.includes('font-space'),
        'Must use Space Grotesk font for headline'
      );
      assert.ok(
        html.includes('font-bold'),
        'Headline must use bold weight'
      );
      assert.ok(
        html.includes('tracking-tighter-headline'),
        'Headline must apply tracking-tighter-headline (-1.8px)'
      );
    });

    test('renders intro paragraph with bold inline role labels', () => {
      assert.ok(
        html.includes('font-bold') || html.includes('&lt;strong&gt;') || html.includes('<strong>'),
        'Must include bold inline emphasis in copy'
      );
    });

    test('enforces strictly 2-column layout split and NEVER a generic 3+ card grid', () => {
      assert.ok(
        html.includes('grid-cols-1 lg:grid-cols-2') ||
          html.includes('lg:grid-cols-12') ||
          html.includes('md:grid-cols-2'),
        'Must feature 2-column split on desktop'
      );
      assert.ok(
        !html.includes('grid-cols-3') && !html.includes('grid-cols-4'),
        'Must not use generic 3+ card grids'
      );
    });

    test('renders large square image-placeholder tile on left with gray fill and Image watermark text', () => {
      assert.ok(
        html.includes('aspect-square'),
        'Image placeholder tile must maintain square aspect ratio'
      );
      assert.ok(
        html.includes('Image'),
        'Must include "Image" watermark text inside placeholder tile'
      );
    });

    test('renders pinned #E84020 back-to-top button at bottom-left corner with 2px radius', () => {
      assert.ok(
        html.includes('bg-accent'),
        'Back-to-top button must be filled with vermilion accent #E84020'
      );
      assert.ok(
        html.includes('rounded-card'),
        'Back-to-top button must have 2px radius (rounded-card)'
      );
      assert.ok(
        html.includes('Back to top') ||
          html.includes('aria-label="Back to top"'),
        'Back-to-top button must have accessible label'
      );
    });

    test('renders stacked direct channels on right with bordered square swatches and hairline dividers', () => {
      profileData.directChannels.forEach((channel) => {
        assert.ok(
          html.includes(escapeHtml(channel.name)),
          `Must render channel name: ${channel.name}`
        );
        assert.ok(
          html.includes(escapeHtml(channel.handle)),
          `Must render channel handle: ${channel.handle}`
        );
        assert.ok(
          html.includes(escapeHtml(channel.url)),
          `Must render channel url link: ${channel.url}`
        );
      });

      assert.ok(
        html.includes('border-b') && html.includes('border-dark'),
        'Must separate direct channels with hairline dividers'
      );
    });

    test('supports custom directChannels and headline prop injection', () => {
      const customChannels = [
        {
          name: 'Signal',
          url: 'https://signal.me/#p/custom',
          handle: '@custompm',
          type: 'phone' as const,
        },
      ];

      const customHtml = renderToStaticMarkup(
        React.createElement(ContactSection, {
          directChannels: customChannels,
          headline: 'Custom Executive Inquiry',
        })
      );

      assert.ok(
        customHtml.includes('Custom Executive Inquiry'),
        'Must render custom headline'
      );
      assert.ok(
        customHtml.includes('Signal'),
        'Must render custom channel Signal'
      );
      assert.ok(
        customHtml.includes('@custompm'),
        'Must render custom channel handle @custompm'
      );
    });
  });

  describe('FooterMarquee component (src/components/FooterMarquee.tsx)', () => {
    const html = renderToStaticMarkup(React.createElement(FooterMarquee));

    test('renders marquee container with border-t border-dark and low-contrast background', () => {
      assert.ok(
        html.includes('border-t') && html.includes('border-dark'),
        'Must feature top border with border-dark'
      );
      assert.ok(
        html.includes('bg-') || html.includes('#0c0c0c'),
        'Must feature low-contrast dark footer surface'
      );
    });

    test('renders ticker items in DM Mono uppercase with vermilion separators', () => {
      assert.ok(
        html.includes('font-mono'),
        'Marquee items must use DM Mono font'
      );
      assert.ok(
        html.includes('text-accent'),
        'Marquee separators must use vermilion accent color'
      );
      assert.ok(
        html.includes('PRODUCT MANAGEMENT') || html.includes('EXECUTIVE LEADERSHIP'),
        'Marquee must render executive PM capabilities'
      );
    });

    test('renders copyright and executive name/role attribution strip', () => {
      assert.ok(
        html.includes(escapeHtml(profileData.name)),
        'Must include executive name in footer'
      );
      const currentYear = new Date().getFullYear().toString();
      assert.ok(
        html.includes(currentYear),
        `Must include current year (${currentYear}) in copyright`
      );
    });
  });

  describe('Home Page integration (src/app/page.tsx)', () => {
    const html = renderToStaticMarkup(React.createElement(Home));

    test('mounts all portfolio sections in canonical Signal Black Executive sequence', () => {
      const heroIdx = html.indexOf('id="hero"');
      const introIdx = html.indexOf('id="intro"');
      const expertiseIdx = html.indexOf('id="expertise"');
      const aboutIdx = html.indexOf('id="about"');
      const careerIdx = html.indexOf('id="career"');
      const projectsIdx = html.indexOf('id="projects"');
      const contactIdx = html.indexOf('id="contact"');

      assert.ok(heroIdx !== -1, 'HeroSection must be mounted');
      assert.ok(introIdx !== -1, 'IntroSection must be mounted');
      assert.ok(expertiseIdx !== -1, 'ExpertiseSection must be mounted');
      assert.ok(aboutIdx !== -1, 'AboutSection must be mounted');
      assert.ok(careerIdx !== -1, 'CareerTimeline must be mounted');
      assert.ok(projectsIdx !== -1, 'ProjectsShowcase must be mounted');
      assert.ok(contactIdx !== -1, 'ContactSection must be mounted');

      assert.ok(heroIdx < introIdx, 'Hero must precede Intro');
      assert.ok(introIdx < expertiseIdx, 'Intro must precede Expertise');
      assert.ok(expertiseIdx < aboutIdx, 'Expertise must precede About');
      assert.ok(aboutIdx < careerIdx, 'About must precede Career');
      assert.ok(careerIdx < projectsIdx, 'Career must precede Projects');
      assert.ok(projectsIdx < contactIdx, 'Projects must precede Contact');
    });

    test('mounts FooterMarquee at the bottom of the page', () => {
      assert.ok(
        html.includes('PRODUCT MANAGEMENT') || html.includes('EXECUTIVE LEADERSHIP'),
        'FooterMarquee must be mounted in Home page'
      );
    });

    test('contains all 5 navbar anchor targets corresponding to navbar capsule links', () => {
      const anchors = ['#about', '#expertise', '#career', '#projects', '#contact'];
      anchors.forEach((anchor) => {
        const id = anchor.replace('#', '');
        assert.ok(
          html.includes(`id="${id}"`),
          `Page must contain anchor target id="${id}" for ${anchor}`
        );
      });
    });
  });
});
