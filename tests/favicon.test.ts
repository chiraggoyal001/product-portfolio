import { test, describe } from 'node:test';
import assert from 'node:assert';
import fs from 'node:fs';
import path from 'node:path';

describe('Favicon & Branding Icons Verification', () => {
  test('public/favicon.ico exists and has valid binary payload', () => {
    const icoPath = path.join(process.cwd(), 'public', 'favicon.ico');
    assert.ok(fs.existsSync(icoPath), 'public/favicon.ico must exist');
    const stat = fs.statSync(icoPath);
    assert.ok(stat.size > 100, 'favicon.ico must not be empty');
  });

  test('public/icon.svg exists and contains CG monogram with vermilion accent', () => {
    const svgPath = path.join(process.cwd(), 'public', 'icon.svg');
    assert.ok(fs.existsSync(svgPath), 'public/icon.svg must exist');
    const content = fs.readFileSync(svgPath, 'utf8');
    assert.ok(content.includes('<svg'), 'icon.svg must be an SVG file');
    assert.ok(content.includes('CG'), 'icon.svg must display CG monogram');
    assert.ok(content.includes('#E84020'), 'icon.svg must contain vermilion accent #E84020');
  });

  test('public/apple-touch-icon.png exists for iOS home screen', () => {
    const appleIconPath = path.join(process.cwd(), 'public', 'apple-touch-icon.png');
    assert.ok(fs.existsSync(appleIconPath), 'public/apple-touch-icon.png must exist');
    const stat = fs.statSync(appleIconPath);
    assert.ok(stat.size > 200, 'apple-touch-icon.png must not be empty');
  });

  test('src/app/layout.tsx configures favicon and icon links in metadata', () => {
    const layoutPath = path.join(process.cwd(), 'src', 'app', 'layout.tsx');
    assert.ok(fs.existsSync(layoutPath), 'src/app/layout.tsx must exist');
    const content = fs.readFileSync(layoutPath, 'utf8');
    assert.ok(content.includes('icons:'), 'layout metadata must configure icons');
    assert.ok(content.includes('/favicon.ico'), 'layout metadata must specify /favicon.ico');
    assert.ok(content.includes('/icon.svg'), 'layout metadata must specify /icon.svg');
    assert.ok(content.includes('/apple-touch-icon.png'), 'layout metadata must specify apple touch icon');
  });
});
