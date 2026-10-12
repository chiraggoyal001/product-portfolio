# AGENTS.md — Executive Portfolio Knowledge Base

## Architecture Overview
- **Framework:** Next.js 14 App Router configured with `output: 'export'` for deterministic zero-server static builds on Netlify.
- **Design System:** "Signal Black Executive" design token mapping:
  - Base Dark: `#111111` (`bg-background`)
  - Mid-Page Surface Break: `#F0EFEB` (`bg-surface`) exclusively for About section
  - Dark Ink on Light: `#111111` (`text-ink`)
  - Rationed Vermilion Accent: `#E84020` (`bg-accent`, `text-accent`) strictly for nav CTA, numerals, metric bullet markers, and keyword emphasis
  - Typography: Space Grotesk with negative tracking (`-5.9px` display-lg, `-1.8px` headline-md) and DM Mono for eyebrows and numerals
  - Layout: Max-width 1200px, 650px floating glass pill navbar (`blur(20px) saturate(1.4)`), paired 2-column or stacked density (never 3+ card grids).

## Learned Patterns
1. **Direct Child of `<AnimatePresence>`**: Always ensure the immediate child of `<AnimatePresence>` is a keyed `<motion.div key="...">`. A plain wrapping `<div>` bypasses Framer Motion's exit lifecycle, preventing exit animations from executing prior to unmounting.
2. **React `renderToStaticMarkup` String Escaping**: React's SSR serializer replaces literal `&` characters with `&amp;` and double quotes with `&quot;`. Test assertions verifying rendered static HTML must account for HTML entities when matching copy like `Product Strategy &amp; Vision`.
3. **Hardware-Accelerated Marquee**: Use pure CSS keyframe transforms (`translateX(0%)` to `translateX(-50%)`) on duplicated arrays, pairing with `motion-reduce:animate-none` and `@media (prefers-reduced-motion: reduce)` for WCAG 2.2.2 compliance.
4. **CSS Filter Grayscale Isolation**: Applying CSS `filter: grayscale` to a parent container desaturates all child descendants including badges and CTA accents. Always isolate grayscale classes strictly to the image or silhouette element.
5. **Adjacent Section Vertical Rhythm & Hairline Bridging**: When stacking multiple full-bleed dark sections (`#111111`) that terminate with bordered lists (such as a career timeline ending with `border-b border-dark`), avoid applying full `py-[100px]` on both adjacent sections. Stacked `pb-[100px] + pt-[100px]` creates a 200px+ dead zone. Instead, balance with `pb-14 md:pb-16` on the preceding section and `pt-14 md:pt-16` on the succeeding section, and ensure the following section features an anchored `<h2>` headline alongside its eyebrow tag.

## Known Traps
1. **Windows Google Font CA Certs**: On Windows environments, Node.js fetch can reject Google Font root certificates during Next.js static builds unless invoked with `node --use-system-ca ./node_modules/next/dist/bin/next build`.
2. **ESLint JSX Comment Nodes**: Using raw `//` inside JSX text children triggers `react/jsx-no-comment-textnodes`. Always wrap literal slashes in expressions: `{'//'}`.
3. **Netlify Export Target**: Ensure `netlify.toml` explicitly sets `publish = "out"` and `command = "npm run build"` to properly match Next.js `output: 'export'`.
