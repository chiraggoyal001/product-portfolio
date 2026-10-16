import assert from 'node:assert';
import { test, describe } from 'node:test';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { CareerTimeline } from '../src/components/CareerTimeline';
import Home from '../src/app/page';
import { careerData } from '../src/data/careerData';
import { ExperienceItem } from '../src/types/portfolio';

function escapeHtml(str: string): string {
  return str.replace(/&/g, '&amp;');
}

describe('Task 6: Career & Impact Timeline', () => {
  describe('CareerTimeline component (src/components/CareerTimeline.tsx)', () => {
    const html = renderToStaticMarkup(React.createElement(CareerTimeline));

    test('renders full-width band on #111111 with py-[100px] padding and max-w-[1200px] container', () => {
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

    test('renders section anchor id="career" with scroll-mt-20 offset matching navbar link', () => {
      assert.ok(html.includes('id="career"'), 'Must have id="career" matching navbar link #career');
      assert.ok(html.includes('scroll-mt-20'), 'Must include scroll-mt-20 offset for sticky capsule navbar');
    });

    test('renders eyebrow in DM Mono with // EXPERIENCE, uppercase, and 0.1em tracking', () => {
      assert.ok(html.includes('EXPERIENCE'), 'Must include EXPERIENCE eyebrow label');
      assert.ok(html.includes('//'), 'Must include // prefix');
      assert.ok(html.includes('font-mono'), 'Must use DM Mono font for eyebrow');
      assert.ok(
        html.includes('tracking-[0.1em]'),
        'Must have tracked-out letter-spacing (0.1em)'
      );
      assert.ok(
        html.includes('text-secondary'),
        'Must use muted secondary text color for eyebrow'
      );
      assert.ok(
        html.includes('text-accent'),
        'Must use vermilion accent color for // slash'
      );
    });

    test('renders section title in Space Grotesk headline-md with -1.8px tracking in white', () => {
      assert.ok(html.includes('font-space'), 'Section title must use Space Grotesk font');
      assert.ok(html.includes('font-bold'), 'Section title must be bold');
      assert.ok(
        html.includes('tracking-tighter-headline'),
        'Section title must use tracking-tighter-headline (-1.8px)'
      );
      assert.ok(
        html.includes('text-white') || html.includes('text-primary'),
        'Section title must be white text'
      );
    });

    test('renders stacked full-width rows divided by hairline dividers (border-b border-dark)', () => {
      assert.ok(
        html.includes('border-b') && html.includes('border-dark'),
        'Rows must be divided by full-width hairline dividers (border-b border-dark)'
      );
    });

    test('renders all 3 career entries from careerData with required content bindings', () => {
      assert.strictEqual(careerData.length, 3, 'careerData must contain 3 items');

      careerData.forEach((item) => {
        assert.ok(
          html.includes(escapeHtml(item.role)),
          `Must render role: ${item.role}`
        );
        assert.ok(
          html.includes(escapeHtml(item.organization)),
          `Must render organization: ${item.organization}`
        );
        assert.ok(
          html.includes(escapeHtml(item.location)),
          `Must render location: ${item.location}`
        );
        assert.ok(
          html.includes(item.period),
          `Must render period: ${item.period}`
        );
        assert.ok(
          html.includes(item.duration),
          `Must render duration: ${item.duration}`
        );
        assert.ok(
          html.includes(escapeHtml(item.summary)),
          `Must render summary for ${item.role}`
        );
      });
    });

    test('renders 2-digit index numerals in vermilion accent (text-accent, font-mono)', () => {
      careerData.forEach((item) => {
        assert.ok(
          html.includes(item.indexNumber),
          `Must render indexNumber: ${item.indexNumber}`
        );
      });
      assert.ok(
        html.includes('text-accent') && html.includes('font-mono'),
        'Must render 2-digit index numerals in vermilion accent and DM Mono'
      );
    });

    test('renders right-aligned date range in vermilion accent and duration in secondary text', () => {
      assert.ok(
        html.includes('md:items-end') || html.includes('md:text-right'),
        'Date block must be right-aligned on desktop'
      );
      assert.ok(
        html.includes('text-accent') && html.includes('font-mono'),
        'Date range must use vermilion accent and DM Mono'
      );
      assert.ok(
        html.includes('text-secondary'),
        'Duration must use secondary muted text'
      );
    });

    test('renders metric-driven checklist bullets with custom square vermilion bullet icons (w-2 h-2 bg-accent mt-2 shrink-0)', () => {
      assert.ok(
        html.includes('w-2 h-2 bg-accent mt-2 shrink-0'),
        'Checklist must feature custom square vermilion bullet icons with exact classes (w-2 h-2 bg-accent mt-2 shrink-0)'
      );

      // Verify sample metric bullets are present in rendered markup
      assert.ok(
        html.includes('robotics operations') || html.includes('egocentric sprint planner'),
        'Must render Awign metric bullet'
      );
      assert.ok(
        html.includes('Alternative Credit Scoring') || html.includes('Kamada'),
        'Must render Masai x BITSOM metric bullet'
      );
      assert.ok(
        html.includes('Pine Script') || html.includes('Salary Confidence Scoring'),
        'Must render Independent Builder metric bullet'
      );
    });

    test('renders cluster of outlined pill tag-chips with transparent fill, border-dark, and uppercase DM Mono', () => {
      assert.ok(
        html.includes('rounded-pill'),
        'Skill tags must have rounded-pill radius'
      );
      assert.ok(
        html.includes('border-dark'),
        'Skill tags must feature thin border-dark border'
      );
      assert.ok(
        html.includes('font-mono'),
        'Skill tags must use DM Mono font'
      );
      assert.ok(
        html.includes('text-secondary'),
        'Skill tags must use text-secondary'
      );
      assert.ok(
        html.includes('uppercase'),
        'Skill tags must be uppercase'
      );

      // Verify sample skill tags from careerData
      assert.ok(html.includes('Internal Tools'));
      assert.ok(html.includes('GenAI &amp; Agentic AI') || html.includes('PRD Authoring'));
      assert.ok(html.includes('Pine Script'));
    });

    test('supports defensive custom items prop injection', () => {
      const customItems: ExperienceItem[] = [
        {
          id: 'custom-exp-1',
          indexNumber: '01',
          role: 'VP of Product Innovation',
          organization: 'Apex Quantum Cloud',
          location: 'Seattle, WA',
          period: '2024 — Present',
          duration: '1 yr',
          summary: 'Directing quantum-accelerated distributed computing platform initiatives.',
          metricBullets: [
            'Scaled enterprise customer count by 300% across Fortune 100 organizations.',
            'Delivered $45M in net-new annual recurring revenue within 12 months.',
          ],
          tags: ['Quantum Computing', 'Distributed Systems', 'Enterprise SaaS'],
        },
      ];

      const customHtml = renderToStaticMarkup(
        React.createElement(CareerTimeline, { items: customItems })
      );

      assert.ok(customHtml.includes('VP of Product Innovation'));
      assert.ok(customHtml.includes('Apex Quantum Cloud'));
      assert.ok(customHtml.includes('Seattle, WA'));
      assert.ok(customHtml.includes('Directing quantum-accelerated distributed computing'));
      assert.ok(customHtml.includes('Scaled enterprise customer count by 300%'));
      assert.ok(customHtml.includes('Quantum Computing'));
    });
  });

  describe('Home Page integration (src/app/page.tsx)', () => {
    const html = renderToStaticMarkup(React.createElement(Home));

    test('mounts CareerTimeline directly after AboutSection in page flow', () => {
      assert.ok(html.includes('id="hero"'), 'Page must mount HeroSection');
      assert.ok(html.includes('id="intro"'), 'Page must mount IntroSection');
      assert.ok(html.includes('id="expertise"'), 'Page must mount ExpertiseSection');
      assert.ok(html.includes('id="about"'), 'Page must mount AboutSection');
      assert.ok(html.includes('id="career"'), 'Page must mount CareerTimeline');

      const heroPos = html.indexOf('id="hero"');
      const introPos = html.indexOf('id="intro"');
      const expertisePos = html.indexOf('id="expertise"');
      const aboutPos = html.indexOf('id="about"');
      const careerPos = html.indexOf('id="career"');

      assert.ok(heroPos < introPos, 'Hero must appear before Intro');
      assert.ok(introPos < expertisePos, 'Intro must appear before Expertise');
      assert.ok(expertisePos < aboutPos, 'Expertise must appear before About');
      assert.ok(aboutPos < careerPos, 'About must appear before Career');
    });
  });
});
