import assert from 'node:assert';
import { test, describe } from 'node:test';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { IntroSection } from '../src/components/IntroSection';
import { ExpertiseSection } from '../src/components/ExpertiseSection';
import Home from '../src/app/page';
import { profileData } from '../src/data/profileData';

describe('Task 4: Editorial Intro Statement & PM Expertise Grid', () => {
  describe('IntroSection component (src/components/IntroSection.tsx)', () => {
    const html = renderToStaticMarkup(React.createElement(IntroSection));

    test('renders full-width band with id="intro", max-w-[1200px] container, and py-[100px] padding', () => {
      assert.ok(html.includes('id="intro"'), 'Must have id="intro" for anchor navigation');
      assert.ok(html.includes('max-w-[1200px]'), 'Must constrain statement within 1200px container');
      assert.ok(
        html.includes('py-[100px]') || html.includes('py-24'),
        'Must feature generous section padding (py-[100px] or py-24)'
      );
      assert.ok(
        html.includes('bg-background') || html.includes('#111111'),
        'Must sit on dark background (#111111)'
      );
    });

    test('renders eyebrow in DM Mono with // INTRO, uppercase, and 0.1em tracking', () => {
      assert.ok(html.includes('INTRO'), 'Must include INTRO eyebrow label');
      assert.ok(html.includes('//'), 'Must include // prefix');
      assert.ok(html.includes('font-mono'), 'Must use DM Mono font');
      assert.ok(
        html.includes('tracking-[0.1em]') || html.includes('tracking-widest'),
        'Must have tracked-out letter-spacing'
      );
      assert.ok(
        html.includes('text-secondary'),
        'Must use muted secondary text color'
      );
    });

    test('renders display-lg editorial statement with extreme negative tracking and 0.92 leading', () => {
      assert.ok(
        html.includes('font-space'),
        'Statement must use Space Grotesk font'
      );
      assert.ok(
        html.includes('font-bold'),
        'Statement must be bold'
      );
      assert.ok(
        html.includes('leading-[0.92]'),
        'Statement must use tight 0.92 leading'
      );
      assert.ok(
        html.includes('tracking-tighter-display'),
        'Statement must use tracking-tighter-display (-5.9px letter-spacing)'
      );
    });

    test('signature colorization: mixes crisp white text and rationed vermilion accent words', () => {
      // Must contain white and accent text runs from profileData.introStatement
      assert.ok(
        html.includes(profileData.introStatement.whiteTextPre.trim()),
        'Must render initial white text'
      );
      assert.ok(
        html.includes(profileData.introStatement.accentText1),
        'Must render first vermilion accent phrase'
      );
      assert.ok(
        html.includes(profileData.introStatement.accentText2),
        'Must render second vermilion accent phrase'
      );
      assert.ok(
        html.includes(profileData.introStatement.whiteTextPost.trim()),
        'Must render closing white text'
      );
      assert.ok(
        html.includes('text-accent'),
        'Must style emphasis phrases with text-accent (#E84020)'
      );
    });

    test('supports custom data prop injection', () => {
      const customData = {
        ...profileData,
        introStatement: {
          whiteTextPre: 'Leading ',
          accentText1: 'mission-critical software',
          whiteTextMid: ' with ',
          accentText2: 'uncompromising precision',
          whiteTextPost: ' at scale.',
        },
      };
      const customHtml = renderToStaticMarkup(
        React.createElement(IntroSection, { data: customData })
      );
      assert.ok(customHtml.includes('mission-critical software'));
      assert.ok(customHtml.includes('uncompromising precision'));
    });
  });

  describe('ExpertiseSection component (src/components/ExpertiseSection.tsx)', () => {
    const html = renderToStaticMarkup(React.createElement(ExpertiseSection));

    test('renders full-width band with id="expertise", top hairline divider, and max-w-[1200px]', () => {
      assert.ok(html.includes('id="expertise"'), 'Must have id="expertise"');
      assert.ok(
        html.includes('border-t') && (html.includes('border-dark') || html.includes('rgba(255, 255, 255, 0.12)')),
        'Must have top hairline divider'
      );
      assert.ok(html.includes('max-w-[1200px]'), 'Must constrain content within 1200px container');
    });

    test('renders eyebrow in DM Mono // EXPERTISE and headline-md section heading with -1.8px tracking', () => {
      assert.ok(html.includes('EXPERTISE'), 'Must render EXPERTISE eyebrow');
      assert.ok(html.includes('//'), 'Must render // prefix');
      assert.ok(html.includes('font-mono'), 'Eyebrow must use DM Mono font');
      assert.ok(
        html.includes('tracking-tighter-headline'),
        'Section heading must use tracking-tighter-headline (-1.8px letter-spacing)'
      );
      assert.ok(
        html.includes('leading-[1.1]'),
        'Section heading must use 1.1 leading'
      );
    });

    test('enforces strictly 2-column paired layout and NEVER a 3+ card grid', () => {
      assert.ok(
        html.includes('grid-cols-1') && html.includes('md:grid-cols-2'),
        'Must use 2-column grid layout on desktop'
      );
      assert.ok(
        !html.includes('grid-cols-3') && !html.includes('lg:grid-cols-3') && !html.includes('xl:grid-cols-3'),
        'GUARDRAIL: Never convert to a 3+ card generic grid'
      );
    });

    test('maintains transparent chrome with 0px radius and hairline divider', () => {
      assert.ok(
        html.includes('bg-transparent'),
        'Must have transparent background for list items'
      );
      assert.ok(
        html.includes('rounded-none') || html.includes('rounded-0'),
        'Must maintain 0px radius (no cards)'
      );
      assert.ok(
        html.includes('border-b') && (html.includes('border-dark') || html.includes('rgba(255, 255, 255, 0.12)')),
        'Must include hairline bottom divider for each item'
      );
    });

    test('renders all 6 core PM expertise disciplines from profileData.expertise', () => {
      assert.strictEqual(profileData.expertise.length, 6, 'Must contain 6 expertise disciplines');
      profileData.expertise.forEach((item) => {
        const escapedTitle = item.title.replace(/&/g, '&amp;');
        const escapedDesc = item.description.replace(/&/g, '&amp;');
        assert.ok(html.includes(escapedTitle), `Must render discipline title: ${item.title}`);
        assert.ok(html.includes(escapedDesc), `Must render description for: ${item.title}`);
      });
    });

    test('renders 2-digit DM Mono index numerals (01..06) in vermilion accent', () => {
      profileData.expertise.forEach((item) => {
        assert.ok(html.includes(item.indexNumber), `Must render index numeral: ${item.indexNumber}`);
      });
      assert.ok(html.includes('text-accent'), 'Index numerals must be in vermilion accent');
      assert.ok(html.includes('font-mono'), 'Index numerals must use DM Mono font');
    });

    test('renders core competencies checklist / pills for each discipline', () => {
      profileData.expertise.forEach((item) => {
        item.coreCompetencies.forEach((comp) => {
          const escapedComp = comp.replace(/&/g, '&amp;');
          assert.ok(html.includes(escapedComp), `Must render competency chip: ${comp}`);
        });
      });
      assert.ok(
        html.includes('rounded-pill') || html.includes('rounded-[9999px]'),
        'Competency chips must have pill radius'
      );
    });
  });

  describe('Home Page integration (src/app/page.tsx)', () => {
    const html = renderToStaticMarkup(React.createElement(Home));

    test('mounts HeroSection, IntroSection, and ExpertiseSection in order', () => {
      assert.ok(html.includes('id="hero"'), 'Page must mount HeroSection');
      assert.ok(html.includes('id="intro"'), 'Page must mount IntroSection');
      assert.ok(html.includes('id="expertise"'), 'Page must mount ExpertiseSection');

      const heroPos = html.indexOf('id="hero"');
      const introPos = html.indexOf('id="intro"');
      const expertisePos = html.indexOf('id="expertise"');

      assert.ok(heroPos < introPos, 'HeroSection must appear before IntroSection');
      assert.ok(introPos < expertisePos, 'IntroSection must appear before ExpertiseSection');
    });
  });
});
