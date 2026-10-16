import assert from 'node:assert';
import { test, describe } from 'node:test';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { GradualBlur } from '../src/components/GradualBlur';
import { IntroSection } from '../src/components/IntroSection';
import { ExpertiseSection } from '../src/components/ExpertiseSection';
import { AboutSection } from '../src/components/AboutSection';
import { CareerTimeline } from '../src/components/CareerTimeline';
import { ProjectsShowcase } from '../src/components/ProjectsShowcase';
import { ContactSection } from '../src/components/ContactSection';

describe('GradualBlur Component & Section Change Transitions', () => {
  describe('GradualBlur component logic (src/components/GradualBlur.tsx)', () => {
    test('renders default GradualBlur container with 5 blur layers', () => {
      const html = renderToStaticMarkup(React.createElement(GradualBlur));
      assert.ok(html.includes('gradual-blur'), 'Must contain gradual-blur class');
      assert.ok(html.includes('gradual-blur-parent'), 'Default target must be parent');

      const layerMatches = html.match(/gradual-blur-layer/g);
      assert.strictEqual(layerMatches?.length, 5, 'Default config must render 5 blur layers');
    });

    test('supports custom divCount prop (e.g. 6 layers for section transitions)', () => {
      const html = renderToStaticMarkup(
        React.createElement(GradualBlur, {
          divCount: 6,
          position: 'top',
        })
      );
      const layerMatches = html.match(/gradual-blur-layer/g);
      assert.strictEqual(layerMatches?.length, 6, 'Must render exactly 6 blur layers');
      assert.ok(html.includes('to top'), 'Gradient mask must use "to top" direction');
    });

    test('supports directional positioning (top, bottom, left, right)', () => {
      const topHtml = renderToStaticMarkup(React.createElement(GradualBlur, { position: 'top' }));
      assert.ok(topHtml.includes('to top'), 'Top position must use "to top" gradient direction');

      const bottomHtml = renderToStaticMarkup(React.createElement(GradualBlur, { position: 'bottom' }));
      assert.ok(bottomHtml.includes('to bottom'), 'Bottom position must use "to bottom" gradient direction');

      const leftHtml = renderToStaticMarkup(React.createElement(GradualBlur, { position: 'left' }));
      assert.ok(leftHtml.includes('to left'), 'Left position must use "to left" gradient direction');

      const rightHtml = renderToStaticMarkup(React.createElement(GradualBlur, { position: 'right' }));
      assert.ok(rightHtml.includes('to right'), 'Right position must use "to right" gradient direction');
    });

    test('enforces pointer-events: none on layers so clicks and interactions are never blocked', () => {
      const html = renderToStaticMarkup(
        React.createElement(GradualBlur, { position: 'top', height: '5rem' })
      );
      assert.ok(
        html.includes('pointer-events:none') || html.includes('pointer-events: none'),
        'Blur layers must enforce pointer-events: none'
      );
    });

    test('supports exponential falloff scaling for smooth optical blur', () => {
      const linearHtml = renderToStaticMarkup(
        React.createElement(GradualBlur, { exponential: false, strength: 3, divCount: 4 })
      );
      const expHtml = renderToStaticMarkup(
        React.createElement(GradualBlur, { exponential: true, strength: 3, divCount: 4 })
      );
      assert.ok(linearHtml.includes('backdrop-filter:blur'), 'Linear blur must render backdrop-filter');
      assert.ok(expHtml.includes('backdrop-filter:blur'), 'Exponential blur must render backdrop-filter');
      assert.notStrictEqual(linearHtml, expHtml, 'Exponential and linear blur styles must differ');
    });

    test('supports target="page" with fixed positioning and target="parent" with absolute positioning', () => {
      const parentHtml = renderToStaticMarkup(
        React.createElement(GradualBlur, { target: 'parent' })
      );
      const pageHtml = renderToStaticMarkup(
        React.createElement(GradualBlur, { target: 'page' })
      );

      assert.ok(parentHtml.includes('position:absolute'), 'target="parent" must use absolute positioning');
      assert.ok(pageHtml.includes('position:fixed'), 'target="page" must use fixed positioning');
    });
  });

  describe('Section Change Transitions Integration', () => {
    test('IntroSection mounts GradualBlur at top boundary for Hero -> Intro section change', () => {
      const html = renderToStaticMarkup(React.createElement(IntroSection));
      assert.ok(html.includes('id="intro"'), 'Must render IntroSection');
      assert.ok(html.includes('gradual-blur'), 'IntroSection must contain GradualBlur');
      assert.ok(html.includes('to top'), 'IntroSection must blur top boundary');
    });

    test('ExpertiseSection mounts GradualBlur at top boundary for Intro -> Expertise section change', () => {
      const html = renderToStaticMarkup(React.createElement(ExpertiseSection));
      assert.ok(html.includes('id="expertise"'), 'Must render ExpertiseSection');
      assert.ok(html.includes('gradual-blur'), 'ExpertiseSection must contain GradualBlur');
      assert.ok(html.includes('to top'), 'ExpertiseSection must blur top boundary');
    });

    test('AboutSection mounts GradualBlur at boundaries for Expertise -> About and About -> Career changes', () => {
      const html = renderToStaticMarkup(React.createElement(AboutSection));
      assert.ok(html.includes('id="about"'), 'Must render AboutSection');
      assert.ok(html.includes('gradual-blur'), 'AboutSection must contain GradualBlur');
      assert.ok(html.includes('to top'), 'AboutSection must blur top boundary');
      assert.ok(html.includes('to bottom'), 'AboutSection must blur bottom boundary');
    });

    test('CareerTimeline mounts GradualBlur at top boundary for About -> Career section change', () => {
      const html = renderToStaticMarkup(React.createElement(CareerTimeline));
      assert.ok(html.includes('id="career"'), 'Must render CareerTimeline');
      assert.ok(html.includes('gradual-blur'), 'CareerTimeline must contain GradualBlur');
      assert.ok(html.includes('to top'), 'CareerTimeline must blur top boundary');
    });

    test('ProjectsShowcase mounts GradualBlur at top boundary for Career -> Projects section change', () => {
      const html = renderToStaticMarkup(React.createElement(ProjectsShowcase));
      assert.ok(html.includes('id="projects"'), 'Must render ProjectsShowcase');
      assert.ok(html.includes('gradual-blur'), 'ProjectsShowcase must contain GradualBlur');
      assert.ok(html.includes('to top'), 'ProjectsShowcase must blur top boundary');
    });

    test('ContactSection mounts GradualBlur at top boundary for Projects -> Contact section change', () => {
      const html = renderToStaticMarkup(React.createElement(ContactSection));
      assert.ok(html.includes('id="contact"'), 'Must render ContactSection');
      assert.ok(html.includes('gradual-blur'), 'ContactSection must contain GradualBlur');
      assert.ok(html.includes('to top'), 'ContactSection must blur top boundary');
    });
  });
});
