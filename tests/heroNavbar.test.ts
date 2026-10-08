import assert from 'node:assert';
import { test, describe } from 'node:test';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { NavbarCapsule } from '../src/components/NavbarCapsule';
import { HeroSection } from '../src/components/HeroSection';
import Home from '../src/app/page';
import { profileData } from '../src/data/profileData';

describe('Task 3: Floating Navbar Capsule & Hero Screen', () => {
  describe('NavbarCapsule component (src/components/NavbarCapsule.tsx)', () => {
    const html = renderToStaticMarkup(React.createElement(NavbarCapsule));

    test('renders floating capsule container with 650px max width and 46px height', () => {
      assert.ok(html.includes('max-w-[650px]'), 'Must include 650px max width constraint');
      assert.ok(html.includes('h-[46px]'), 'Must be 46px in height');
      assert.ok(
        html.includes('rounded-pill') || html.includes('rounded-[9999px]'),
        'Must have full pill radius'
      );
    });

    test('has dark glass background rgba(17, 17, 17, 0.55) and blur backdrop filter', () => {
      assert.ok(
        html.includes('rgba(17, 17, 17, 0.55)') || html.includes('rgba(17,17,17,0.55)'),
        'Must set background rgba(17, 17, 17, 0.55)'
      );
      assert.ok(
        html.includes('blur(20px)') && html.includes('saturate(1.4)'),
        'Must set backdrop-filter blur(20px) saturate(1.4)'
      );
    });

    test('renders brand monogram or logo mark on the left', () => {
      assert.ok(
        html.includes('ER') || html.includes('Eddy Ready'),
        'Must contain brand monogram or name'
      );
    });

    test('connects to profileData: defaults brandName and computes monogram initials', () => {
      assert.ok(html.includes(profileData.name), 'Must default brand name to profileData.name');
      assert.ok(html.includes('ER'), 'Must compute initials ER from Eddy Ready');

      // Test custom brandName computes correct initials
      const customHtml = renderToStaticMarkup(
        React.createElement(NavbarCapsule, { brandName: 'Alex Mercer' })
      );
      assert.ok(customHtml.includes('AM'), 'Must compute initials AM from Alex Mercer');
    });

    test('renders all 5 navigation links pointing to required section anchors', () => {
      assert.ok(html.includes('href="#about"'), 'Must link to #about');
      assert.ok(html.includes('href="#expertise"'), 'Must link to #expertise');
      assert.ok(html.includes('href="#career"'), 'Must link to #career');
      assert.ok(html.includes('href="#projects"'), 'Must link to #projects');
      assert.ok(html.includes('href="#contact"'), 'Must link to #contact');

      assert.ok(html.includes('About'), 'Must contain About label');
      assert.ok(html.includes('Expertise'), 'Must contain Expertise label');
      assert.ok(html.includes('Experience'), 'Must contain Experience label');
      assert.ok(html.includes('Projects'), 'Must contain Projects label');
      assert.ok(html.includes('Contact'), 'Must contain Contact label');
    });

    test('renders right accent CTA pill button with #E84020, 29px height, and white text', () => {
      assert.ok(
        html.includes('#E84020') || html.includes('bg-accent'),
        'CTA button must use accent color #E84020'
      );
      assert.ok(
        html.includes('h-[29px]'),
        'CTA button must be 29px height'
      );
      assert.ok(
        html.includes('rounded-pill') || html.includes('rounded-[9999px]'),
        'CTA button must have pill radius'
      );
      assert.ok(html.includes('Connect'), 'CTA button should display action text');
    });

    test('includes responsive mobile menu toggle', () => {
      assert.ok(
        html.includes('aria-label="Open Menu"') || html.includes('aria-label="Close Menu"') || html.includes('aria-expanded'),
        'Must provide accessible mobile menu toggle'
      );
    });
  });

  describe('HeroSection component (src/components/HeroSection.tsx)', () => {
    const html = renderToStaticMarkup(React.createElement(HeroSection));

    test('renders vertical HONORS badge pinned to right edge with 0px radius', () => {
      assert.ok(html.includes('HONORS'), 'Must render HONORS badge label');
      assert.ok(
        html.includes('rounded-none') || html.includes('rounded-0') || html.includes('0px'),
        'Honors badge must have 0px radius'
      );
      assert.ok(
        html.includes('font-mono'),
        'Honors badge must use DM Mono font'
      );
      profileData.honors.forEach((honor) => {
        assert.ok(html.includes(honor), `Must include honor: ${honor}`);
      });
    });

    test('renders unbounded lower-left social channels (LinkedIn, Email, Phone) with white text and no card', () => {
      assert.ok(html.includes('LinkedIn'), 'Must include LinkedIn label');
      assert.ok(html.includes('Email'), 'Must include Email label');
      assert.ok(html.includes('Phone'), 'Must include Phone label');
      assert.ok(html.includes('mailto:'), 'Must include email link');
      assert.ok(html.includes('tel:'), 'Must include phone link');
      assert.ok(html.includes('linkedin.com'), 'Must include LinkedIn URL');
    });

    test('renders Space Grotesk display-lg headline with -5.9px tracking for PM title and name', () => {
      assert.ok(html.includes(profileData.name), 'Must display PM name');
      assert.ok(html.includes(profileData.role), 'Must display PM role/title');
      assert.ok(
        html.includes('tracking-tighter-display'),
        'Must use tracking-tighter-display (-5.9px letter-spacing)'
      );
      assert.ok(
        html.includes('leading-[0.92]'),
        'Must use 0.92 line height'
      );
    });

    test('renders near-solid dark glass pill primary button (~50px radius) under headline, NOT vermilion', () => {
      assert.ok(
        html.includes('rounded-control') || html.includes('rounded-[50px]'),
        'Hero primary button must have ~50px pill radius'
      );
      assert.ok(
        html.includes('rgba(255, 255, 255, 0.08)') ||
          html.includes('rgba(255,255,255,0.08)') ||
          html.includes('bg-white/[0.08]'),
        'Hero primary button must use dark glass fill rgba(255,255,255,0.08)'
      );
      const heroButtonMatch = html.match(/<a[^>]*href="#projects"[^>]*>[\s\S]*?<\/a>/i);
      if (heroButtonMatch) {
        assert.ok(!heroButtonMatch[0].includes('bg-accent'), 'Hero primary button must not be bg-accent');
        assert.ok(!heroButtonMatch[0].includes('#E84020'), 'Hero primary button must not use #E84020 fill');
      }
    });

    test('renders scroll indicator arrow with animate-scroll-bob motion', () => {
      assert.ok(
        html.includes('animate-scroll-bob'),
        'Scroll indicator must have animate-scroll-bob class'
      );
    });

    test('maintains moody green-black atmospheric background and never light blue gradient', () => {
      assert.ok(
        !html.includes('rgb(238, 242, 251)'),
        'Must not contain light blue gradient in Hero'
      );
      assert.ok(
        !html.includes('rgb(246, 248, 253)'),
        'Must not contain light blue gradient in Hero'
      );
    });
  });

  describe('Home Page integration (src/app/page.tsx)', () => {
    const html = renderToStaticMarkup(React.createElement(Home));

    test('mounts NavbarCapsule and HeroSection', () => {
      assert.ok(html.includes('max-w-[650px]'), 'Page must mount NavbarCapsule');
      assert.ok(html.includes('HONORS'), 'Page must mount HeroSection with honors');
      assert.ok(html.includes(profileData.name), 'Page must mount HeroSection with name');
    });
  });
});
