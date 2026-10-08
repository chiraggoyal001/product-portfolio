import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert';
import { test, describe } from 'node:test';

describe('Task 9: Verification, Build & Netlify Export', () => {
  describe('Netlify Configuration (netlify.toml)', () => {
    const netlifyPath = path.resolve('netlify.toml');

    test('netlify.toml exists and is non-empty', () => {
      assert.ok(fs.existsSync(netlifyPath), 'netlify.toml must exist at project root');
      const content = fs.readFileSync(netlifyPath, 'utf8');
      assert.ok(content.length > 0, 'netlify.toml must not be empty');
    });

    test('netlify.toml configures build command and out publish directory', () => {
      const content = fs.readFileSync(netlifyPath, 'utf8');
      assert.ok(
        content.includes('publish = "out"') || content.includes("publish = 'out'"),
        'netlify.toml must configure publish = "out"'
      );
      assert.ok(
        content.includes('command = "npm run build"') || content.includes("command = 'npm run build'"),
        'netlify.toml must configure command = "npm run build"'
      );
    });

    test('netlify.toml sets Node.js environment to LTS version', () => {
      const content = fs.readFileSync(netlifyPath, 'utf8');
      assert.ok(
        content.includes('NODE_VERSION'),
        'netlify.toml must specify NODE_VERSION'
      );
    });

    test('netlify.toml provides security headers (X-Frame-Options, X-Content-Type-Options)', () => {
      const content = fs.readFileSync(netlifyPath, 'utf8');
      assert.ok(
        content.includes('X-Frame-Options'),
        'netlify.toml must define X-Frame-Options'
      );
      assert.ok(
        content.includes('X-Content-Type-Options'),
        'netlify.toml must define X-Content-Type-Options'
      );
    });
  });

  describe('Next.js Static Configuration (next.config.js)', () => {
    const nextConfigPath = path.resolve('next.config.js');

    test('next.config.js configures output: "export" for zero-server Netlify deployment', () => {
      assert.ok(fs.existsSync(nextConfigPath), 'next.config.js must exist');
      const content = fs.readFileSync(nextConfigPath, 'utf8');
      assert.ok(
        content.includes("output: 'export'") || content.includes('output: "export"'),
        'next.config.js must explicitly declare output: "export"'
      );
    });
  });

  describe('Static Export Artifacts (out/)', () => {
    const outDir = path.resolve('out');

    test('out/ directory contains pre-rendered index.html', () => {
      assert.ok(fs.existsSync(outDir), 'out/ directory must exist from build');
      const indexPath = path.join(outDir, 'index.html');
      assert.ok(fs.existsSync(indexPath), 'out/index.html must exist');
      const html = fs.readFileSync(indexPath, 'utf8');
      assert.ok(html.includes('<html'), 'index.html must contain HTML document root');
      assert.ok(html.includes('id="hero"'), 'index.html must contain Hero section');
      assert.ok(html.includes('id="projects"'), 'index.html must contain Projects section');
      assert.ok(html.includes('id="contact"'), 'index.html must contain Contact section');
    });

    test('out/ directory contains static chunk assets (_next/static)', () => {
      const staticDir = path.join(outDir, '_next', 'static');
      assert.ok(fs.existsSync(staticDir), 'out/_next/static must exist');
      const chunks = fs.readdirSync(staticDir);
      assert.ok(chunks.length > 0, 'Static chunk directories must be generated');
    });

    test('out/ contains 404 fallback page', () => {
      const notFoundPath = path.join(outDir, '404.html');
      assert.ok(fs.existsSync(notFoundPath), 'out/404.html must exist for static routing fallback');
    });
  });
});
