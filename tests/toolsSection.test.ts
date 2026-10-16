import assert from 'node:assert';
import { test, describe } from 'node:test';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { ToolsSection } from '../src/components/ToolsSection';
import { profileData } from '../src/data/profileData';

describe('ToolsSection component (src/components/ToolsSection.tsx)', () => {
  const html = renderToStaticMarkup(React.createElement(ToolsSection));

  test('renders section with id="tools" and scroll-mt-20 matching navbar anchor', () => {
    assert.ok(html.includes('id="tools"'), 'Must feature id="tools"');
    assert.ok(html.includes('scroll-mt-20'), 'Must feature scroll-mt-20 offset');
  });

  test('renders full-width band on #111111 with top hairline divider and max-w-[1200px] container', () => {
    assert.ok(
      html.includes('bg-background') || html.includes('#111111'),
      'Must sit on dark background (#111111 / bg-background)'
    );
    assert.ok(
      html.includes('border-t') && (html.includes('border-dark') || html.includes('border-')),
      'Must feature top hairline divider'
    );
    assert.ok(
      html.includes('max-w-[1200px]'),
      'Must constrain content to 1200px container'
    );
    assert.ok(
      html.includes('py-[100px]'),
      'Must maintain section padding of py-[100px]'
    );
  });

  test('renders eyebrow in DM Mono with // TOOLSET, uppercase, and vermilion slash', () => {
    assert.ok(html.includes('TOOLSET'), 'Must include TOOLSET eyebrow label');
    assert.ok(html.includes('//'), 'Must include // prefix in eyebrow');
    assert.ok(html.includes('font-mono'), 'Must use DM Mono font');
    assert.ok(html.includes('text-accent'), 'Must colorize // slash with vermilion accent');
  });

  test('renders section headline "The tools of the craft." in Space Grotesk headline-md', () => {
    assert.ok(
      html.includes('The tools of the craft.'),
      'Must render "The tools of the craft." title'
    );
    assert.ok(html.includes('font-space'), 'Must use Space Grotesk font');
    assert.ok(html.includes('font-bold'), 'Headline must use bold weight');
    assert.ok(
      html.includes('tracking-tighter-headline'),
      'Headline must apply tracking-tighter-headline'
    );
  });

  test('renders tool badges with vermilion AI highlights matching Image 1', () => {
    const tools = profileData.tools ?? [];
    assert.ok(tools.length > 0, 'Must have tools defined in profileData');

    tools.forEach((tool) => {
      assert.ok(html.includes(tool.name), `Must render tool pill: ${tool.name}`);
    });

    // Check highlighted AI tools style
    assert.ok(
      html.includes('text-accent') && html.includes('border-accent'),
      'Highlighted AI tools must use vermilion text and border'
    );
  });

  test('renders LANGUAGES metadata panel matching Image 1', () => {
    assert.ok(html.includes('LANGUAGES'), 'Must render LANGUAGES header');
    const languages = profileData.languages ?? [];
    assert.ok(languages.length > 0, 'Must have languages defined');

    languages.forEach((item) => {
      assert.ok(html.includes(item.language), `Must render language: ${item.language}`);
      assert.ok(html.includes(item.proficiency), `Must render proficiency: ${item.proficiency}`);
    });
  });

  test('renders EDUCATION metadata panel matching Image 1', () => {
    assert.ok(html.includes('EDUCATION'), 'Must render EDUCATION header');
    const education = profileData.education ?? [];
    assert.ok(education.length > 0, 'Must have education items defined');

    education.forEach((item) => {
      assert.ok(html.includes(item.institution), `Must render institution: ${item.institution}`);
      assert.ok(html.includes(item.degree), `Must render degree: ${item.degree}`);
    });
  });

  test('mounts GradualBlur at top boundary for Projects -> Tools section change', () => {
    assert.ok(html.includes('gradual-blur'), 'ToolsSection must contain GradualBlur');
    assert.ok(html.includes('to top'), 'ToolsSection must blur top boundary');
  });

  test('supports custom tools, languages, and education prop injection', () => {
    const customHtml = renderToStaticMarkup(
      React.createElement(ToolsSection, {
        tools: [{ name: 'CustomTool', isHighlighted: true }],
        languages: [{ language: 'Spanish', proficiency: 'Conversational' }],
        education: [{ institution: 'Stanford', degree: 'CS Course', period: '2024' }],
      })
    );

    assert.ok(customHtml.includes('CustomTool'), 'Must render custom tool');
    assert.ok(customHtml.includes('Spanish'), 'Must render custom language');
    assert.ok(customHtml.includes('Stanford'), 'Must render custom education');
  });
});
