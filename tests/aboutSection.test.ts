import assert from 'node:assert';
import { test, describe } from 'node:test';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { AboutSection } from '../src/components/AboutSection';
import Home from '../src/app/page';
import { profileData } from '../src/data/profileData';

describe('Task 5: About Section Surface Break & Metric Callout', () => {
  describe('AboutSection component (src/components/AboutSection.tsx)', () => {
    const html = renderToStaticMarkup(React.createElement(AboutSection));

    test('renders visual surface break with bg-surface (#F0EFEB) and text-ink (#111111)', () => {
      assert.ok(
        html.includes('bg-surface') || html.includes('#F0EFEB'),
        'Must feature warm off-white surface break background (#F0EFEB / bg-surface)'
      );
      assert.ok(
        html.includes('text-ink') || html.includes('#111111'),
        'Text color must be dark ink (#111111 / text-ink)'
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

    test('renders section anchor id="about" with scroll-mt-20 offset matching navbar link', () => {
      assert.ok(html.includes('id="about"'), 'Must have id="about" for navbar capsule navigation');
      assert.ok(html.includes('scroll-mt-20'), 'Must include scroll-mt-20 offset for sticky capsule navbar');
    });

    test('renders eyebrow in DM Mono with // ABOUT, uppercase, and 0.1em tracking', () => {
      assert.ok(html.includes('ABOUT'), 'Must include ABOUT eyebrow label');
      assert.ok(html.includes('//'), 'Must include // prefix');
      assert.ok(html.includes('font-mono'), 'Must use DM Mono font');
      assert.ok(
        html.includes('tracking-[0.1em]'),
        'Must have tracked-out letter-spacing (0.1em)'
      );
      assert.ok(
        html.includes('text-secondary'),
        'Must use muted secondary text color for eyebrow'
      );
    });

    test('renders two-column split layout (lg:grid-cols-12, items-start)', () => {
      assert.ok(
        html.includes('grid-cols-1') && html.includes('lg:grid-cols-12'),
        'Must use 12-column responsive grid layout'
      );
      assert.ok(
        html.includes('lg:col-span-5'),
        'Left column must span ~5 columns on desktop'
      );
      assert.ok(
        html.includes('lg:col-span-7'),
        'Right column must span ~7 columns on desktop'
      );
    });

    test('renders B&W portrait / silhouette frame with 4:5 aspect ratio and dark border', () => {
      assert.ok(
        html.includes('aspect-[4/5]'),
        'Portrait frame must have 4/5 aspect ratio'
      );
      assert.ok(
        html.includes('grayscale'),
        'Portrait frame must apply grayscale filter'
      );
      assert.ok(
        html.includes('border-light') || html.includes('border'),
        'Portrait frame must have subtle dark border'
      );
    });

    test('renders overlaid vermilion credential tag at bottom edge with uppercase DM Mono text', () => {
      assert.ok(
        html.includes('bg-accent') || html.includes('#E84020'),
        'Credential tag must use vermilion accent background (#E84020)'
      );
      assert.ok(
        html.includes('PRODUCT ARCHITECTURE // 0-TO-1 SCALE'),
        'Must display credential tag text'
      );
      assert.ok(
        html.includes('font-mono'),
        'Credential tag must use DM Mono font'
      );
      assert.ok(
        html.includes('rounded-card') || html.includes('rounded-tight'),
        'Credential tag must have subtle rounded corners'
      );
    });

    test('renders Space Grotesk headline-md in dark ink with negative letter-spacing', () => {
      const escapedHeadline = profileData.about.headline.replace(/&/g, '&amp;');
      assert.ok(html.includes(escapedHeadline), 'Must render headline from profileData.about.headline');
      assert.ok(html.includes('font-space'), 'Headline must use Space Grotesk');
      assert.ok(html.includes('font-bold'), 'Headline must be bold');
      assert.ok(
        html.includes('tracking-tighter-headline'),
        'Headline must use tracking-tighter-headline (-1.8px)'
      );
      assert.ok(html.includes('text-ink'), 'Headline must use dark ink color');
    });

    test('renders all 3 narrative bio paragraphs with bold inline emphasis on metrics and scale', () => {
      assert.strictEqual(
        profileData.about.bioParagraphs.length,
        3,
        'profileData must define 3 bio paragraphs'
      );
      profileData.about.bioParagraphs.forEach((para) => {
        const plainWords = para.replace(/\*\*/g, '').split(/[ ,.]+/).filter((w) => w.length > 5);
        const sampleWord = plainWords[0];
        assert.ok(
          html.includes(sampleWord),
          `Must render paragraph containing keyword: ${sampleWord}`
        );
      });

      assert.ok(html.includes('<strong'), 'Must render bold inline emphasis tags');
      assert.ok(html.includes('10,000+'), 'Must highlight metric: 10,000+');
      assert.ok(html.includes('Awign'), 'Must highlight company: Awign');
      assert.ok(html.includes('Masai x BITSOM') || html.includes('40,000 records'), 'Must highlight education/modeling');
    });

    test('renders bordered stat callout box with 3px solid vermilion left stripe', () => {
      assert.ok(
        html.includes('border-l-[3px]') && (html.includes('border-accent') || html.includes('#E84020')),
        'Stat callout box must have 3px solid vermilion left border stripe'
      );
      assert.ok(html.includes('p-6'), 'Stat callout box must have p-6 padding');
      assert.ok(
        html.includes(profileData.about.credentialCallout.stat),
        'Must display callout stat'
      );
      assert.ok(
        html.includes(profileData.about.credentialCallout.label),
        'Must display callout label'
      );
      assert.ok(
        html.includes(profileData.about.credentialCallout.subtext),
        'Must display callout subtext'
      );
    });

    test('renders live status dot with pulsing animation and current availability location text', () => {
      assert.ok(
        html.includes('animate-live-pulse'),
        'Live status dot must use animate-live-pulse'
      );
      assert.ok(
        html.includes('bg-accent'),
        'Live status dot must use vermilion accent color'
      );
      assert.ok(
        html.includes('rounded-full'),
        'Live status dot must be a circle'
      );
      assert.ok(
        html.includes(profileData.about.status.location),
        'Must display status location from profileData'
      );
      const escapedStatusText = profileData.about.status.text.replace(/&/g, '&amp;');
      assert.ok(
        html.includes(escapedStatusText),
        'Must display status text from profileData'
      );
    });

    test('supports custom data prop injection defensively', () => {
      const customData = {
        ...profileData,
        about: {
          headline: 'Custom Executive Strategy Headline',
          bioParagraphs: [
            'Pioneered novel machine learning architectures.',
            'Scaled revenue from seed to Series C.',
            'Architected mission critical enterprise platforms.',
          ],
          credentialCallout: {
            stat: '$250M+',
            label: 'GLOBAL PIPELINE UNLOCKED',
            subtext: 'Across high velocity enterprise SaaS',
          },
          status: {
            available: true,
            text: 'Open to Board Advisory',
            location: 'New York / Global',
          },
        },
      };

      const customHtml = renderToStaticMarkup(
        React.createElement(AboutSection, { data: customData })
      );
      assert.ok(customHtml.includes('Custom Executive Strategy Headline'));
      assert.ok(customHtml.includes('$250M+'));
      assert.ok(customHtml.includes('GLOBAL PIPELINE UNLOCKED'));
      assert.ok(customHtml.includes('New York / Global'));
      assert.ok(customHtml.includes('Open to Board Advisory'));
    });
  });

  describe('Home Page integration (src/app/page.tsx)', () => {
    const html = renderToStaticMarkup(React.createElement(Home));

    test('mounts AboutSection after ExpertiseSection and maintains page visual rhythm', () => {
      assert.ok(html.includes('id="hero"'), 'Page must mount HeroSection');
      assert.ok(html.includes('id="intro"'), 'Page must mount IntroSection');
      assert.ok(html.includes('id="expertise"'), 'Page must mount ExpertiseSection');
      assert.ok(html.includes('id="about"'), 'Page must mount AboutSection');

      const heroPos = html.indexOf('id="hero"');
      const introPos = html.indexOf('id="intro"');
      const expertisePos = html.indexOf('id="expertise"');
      const aboutPos = html.indexOf('id="about"');

      assert.ok(heroPos < introPos, 'Hero must appear before Intro');
      assert.ok(introPos < expertisePos, 'Intro must appear before Expertise');
      assert.ok(expertisePos < aboutPos, 'Expertise must appear before About');
    });

    test('guardrail: bg-surface (#F0EFEB) appears ONLY in About section', () => {
      const sections = html.split('<section');
      const aboutSectionMarkup = sections.find((s) => s.includes('id="about"'));
      assert.ok(aboutSectionMarkup, 'Must find About section markup');
      assert.ok(
        aboutSectionMarkup.includes('bg-surface'),
        'About section must use bg-surface'
      );

      sections
        .filter((s) => !s.includes('id="about"'))
        .forEach((s) => {
          assert.ok(
            !s.includes('bg-surface'),
            'Other sections must NOT use bg-surface (reserved exclusively for About section break)'
          );
        });
    });
  });
});
