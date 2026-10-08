---
version: "superdesign-alpha"
name: "Signal Black Executive"
description: "Dark-mode-default editorial system with a full-bleed portrait hero, a single rationed vermilion accent, and Space Grotesk carrying every headline at extreme negative tracking."
colors:
  background: "#111111"
  surface: "#F0EFEB"
  text-primary: "#FFFFFF"
  text-secondary: "#666666"
  text-ink-on-light: "#111111"
  accent: "#E84020"
  border-light: "#000000"
  border-dark: "#FFFFFF"
typography:
  display-lg:
    fontFamily: "Space Grotesk"
    fontSize: "132px"
    fontWeight: 700
    lineHeight: "0.92"
    letterSpacing: "-5.9px"
  headline-md:
    fontFamily: "Space Grotesk"
    fontSize: "44px"
    fontWeight: 700
    lineHeight: "1.1"
    letterSpacing: "-1.8px"
  body-md:
    fontFamily: "Space Grotesk"
    fontSize: "52px"
    fontWeight: 600
    lineHeight: "1.25"
  label-md:
    fontFamily: "Space Grotesk"
    fontSize: "36px"
    fontWeight: 700
    letterSpacing: "-1.1px"
  body-copy:
    fontFamily: "Space Grotesk"
    fontSize: "14px"
    fontWeight: 400
    color: "#FFFFFF"
  accent-mono:
    fontFamily: "DM Mono"
    role: "eyebrow labels, index numerals, metadata"
  accent-serif:
    fontFamily: "Times New Roman"
    role: "rare editorial interruption, used sparingly"
spacing:
  base: "7px"
  gap: "40px"
  section-padding: "100px"
  section-gap: "156px"
rounded:
  control: "50px"
  pill: "9999px"
  card: "2px"
  tight: "5px"
components:
  navbar-capsule:
    background: "rgba(17, 17, 17, 0.55)"
    backdrop-filter: "blur(20px) saturate(1.4)"
    radius: "9999px"
    height: "46px"
    width: "650px (centered, ~34% viewport)"
  button-nav-cta:
    background: "#E84020"
    text-color: "#FFFFFF"
    radius: "9999px"
    height: "29px"
  button-primary-hero:
    background: "observed near-solid dark/glass fill under headline"
    radius: "observed ~50px, full pill"
    text-color: "#FFFFFF"
  button-back-to-top:
    background: "#E84020"
    text-color: "#FFFFFF"
    radius: "2px"
    height: "observed ~36px"
  card-media-panel:
    background: "#F0EFEB"
    radius: "0px"
    padding: "0px"
  card-feature-block:
    background: "transparent"
    radius: "0px"
    padding: "129.6px 153.6px 151.2px"
  card-media-shadow:
    background: "transparent"
    radius: "2px"
    shadow: "rgba(0, 0, 0, 0.7) 0px 24px 60px 0px"
  card-cert-callout:
    background: "#F0EFEB"
    radius: "0px"
    border-left: "3px solid #E84020"
---
# Signal Black Executive
Source: https://p.superdesign.dev/draft/9e1d9ad5-5118-4304-bcac-ec64436201cc

## Overview
This is a dark-mode-default executive portfolio built on near-black surfaces (#111111), an editorial Space Grotesk type system pushed to extreme negative tracking, and a single vermilion accent (#E84020) rationed to CTAs, numerals, and emphasis words. It reads as Swiss/International grid discipline transplanted into a personal-brand context: ruled hairline dividers, monospace index labels, and left-aligned body copy sit beside oversized display type that behaves like a magazine cover line. The system alternates between full-bleed cinematic image sections and flat editorial black bands — a rhythm of photographic drama followed by typographic austerity.

## Composition
The first screen is a full-bleed portrait photograph on a dark green-black backdrop, with a floating glass navbar capsule at top and a vertical "Honors" tab pinned to the right edge — social icons sit isolated lower-left, unbounded by any card. Scroll rhythm below alternates: a black intro band with a giant multi-line statement (mixed white/accent-colored words), a two-column expertise list on black, a light "surface" (#F0EFEB) about section with a portrait photo and a bordered credential callout, then a black career timeline with numbered entries and pill-shaped tag chips. A full-viewport black canvas placeholder appears mid-page for a live experiment surface. The page closes on a black contact band with a large placeholder image tile and a stacked direct-channels list. The deliberate choice is maximal negative space in the black sections (single-column, generous section-padding of 100px, section-gaps of 156px) rather than a dense multi-column dashboard — this is a slow, one-idea-per-scroll editorial pace, not a compressed grid.

## Colors
Background black (#111111, ~44–33% of pixel field including its #181818 near-neighbor) is the dominant surface, confirmed by the mostly-black/near-black screenshots. The light surface #F0EFEB (~27% of declared area) appears only in the About section as a warm off-white card ground — a deliberate mid-page tonal break, not the base. Text ink flips accordingly: #FFFFFF on black sections, #111111 on the light section. The accent #E84020 is tightly rationed: nav CTA fill, index digits, select emphasis words inside headlines, timeline bullet icons, and the back-to-top button — never a background wash. Borders use #000000 on light surfaces and #FFFFFF on dark ones as hairline dividers. A pale blue-tinted gradient (`linear-gradient(160deg, rgb(238, 242, 251) 0%, rgb(246, 248, 253) 55%, rgb(238, 243, 252) 100%)`) exists only as a small localized fill (roughly 4% of the page), not a hero backdrop — the hero itself stays photographic and dark, with the green tone coming from the portrait's lit backdrop, not a design token.

## Typography
Space Grotesk carries the entire hierarchy at bold weights and unusually tight, sometimes negative, letter-spacing: display-lg at 132px/700/-5.9px for hero-scale statements, headline-md at 44px/700/-1.8px for section titles, body-md at 52px/600 for large intro paragraphs, label-md at 36px/700/-1.1px for sub-headings. Small body copy drops to 14px/400 in white with secondary text set at #666666 for supporting lines (job descriptions, dates). DM Mono supplies the "// LABEL" eyebrow tags and index numerals (01, 02, 03) in uppercase tracked-out small caps style — the label face throughout. Times New Roman appears as an incidental system serif, reserved for rare editorial accents rather than structural use.

## Layout
Content is held to a max-width around 1200px with 100px section padding and up to 156px between major sections — a single-column, contained layout rather than a multi-track grid. The career section uses a stacked list of numbered entries (not a grid), each with a right-aligned date/duration and a right-side cluster of pill-shaped skill tags. The expertise block is a 2-column list-style grid (rows of paired labeled items, each with a trailing 2-digit index). The contact footer uses a 2-column split: one large image-placeholder tile left, a stacked direct-channels list right. Measured grids confirm 2-column patterns at gaps of 40px, 0px, and 80px with row pairs near 29/27%, 35/23%, and 47/47% — consistently two-up, never three-across; this system favors paired or single-column density over multi-card rows.

## Components
- **Navbar**: sticky centered bounded capsule, 650px wide (~34% viewport, symmetric 635px insets), 46px tall, corners fully rounded all four corners (999px/999px/999px/999px — true pill), fill `rgba(17, 17, 17, 0.55)` with `backdrop-filter: blur(20px) saturate(1.4)`. Contains a small logo mark + wordmark left, 5 text nav items, one accent-filled CTA pill (#E84020 background, #FFFFFF text, 999px radius, 29px height) right-aligned — 7 items total including logo and CTA.
- **Hero primary button**: not in the measured navbar set — the emphasized action beneath the hero portrait is an observed near-solid dark/glass pill, roughly 50px radius, sitting low in the composition; treat as the true primary and do not substitute the nav CTA's values for it.
- **Vertical honors tab**: single fixed tab pinned to the right viewport edge, black fill, white text rotated vertically, no radius — a persistent badge, one per page.
- **Social icon list**: unbounded (no card), lower-left of hero, 3 stacked rows (LinkedIn / Email / Phone), icon + label pairing, white text on the dark backdrop.
- **Intro statement band**: one full-width block on black, eyebrow label in DM Mono ("// INTRO" style), followed by a multi-line display-lg statement mixing white and accent-colored word runs — the accent covers roughly a third of the words across 4 lines, repeating as the system's signature colorization move.
- **Expertise list grid**: 2-column paired list, six labeled rows total, each row = label + 2-digit DM Mono index number, thin horizontal rule above the group, no card chrome (transparent, 0px radius).
- **About card**: light-surface (#F0EFEB) two-up split — black-and-white portrait photo left with a small accent-filled credential tag (#E84020 bg, white text, small radius) overlaid at its bottom edge; right column carries a headline in dark ink, 3–4 body paragraphs with bold inline emphasis on named entities and metrics, and a bordered stat callout box (light bg, left accent border-stripe, small caps label + supporting line) beneath the copy; a small status dot + location line closes the block.
- **Career timeline entries**: stacked full-width rows on black, ×2+ visible, each = index numeral (accent) + role headline (white, bold) + org/location line (secondary gray) + right-aligned date range and duration (accent for the range) + body paragraph + a bulleted checklist (accent square-icon bullets) of metric-driven achievements + a right-side cluster of outlined pill tag-chips (transparent fill, thin border, small caps labels). Divided by full-width hairline rules.
- **Live experiment canvas placeholder**: full-viewport black band, eyebrow label top-left in DM Mono, numeric pagination top-right ("01 / 09" style index), otherwise empty — stands in for a live canvas/video surface; rebuild with a static dark placeholder.
- **Contact/footer band**: black background, intro paragraphs with bold inline role labels, a large square image-placeholder tile (gray fill, "Image" watermark text, back-to-top accent button pinned at its bottom-left corner, 2px radius) beside a stacked "direct channels" list — each row = icon in a bordered square swatch + small caps label + value line, separated by hairline dividers.

## Graphics & Effects
The only gradient evidence, `linear-gradient(160deg, rgb(238, 242, 251) 0%, rgb(246, 248, 253) 55%, rgb(238, 243, 252) 100%)`, is a small localized fill covering roughly 4% of total page area — likely a light-surface panel accent, not the hero or any full-screen wash; the hero itself is a photographic portrait against a dark, moodily-lit green-black studio backdrop with a soft light bloom entering from the right edge, giving it a cinematic, almost vignette-lit quality without any CSS gradient overlay. Two canvas elements and one video element are live surfaces (interactive experiment demos and background motion); stand in with static dark placeholder frames when rebuilding. Shadow language is heavy and directional: `rgba(0, 0, 0, 0.7) 0px 24px 60px 0px` for elevated media cards, `rgba(232, 64, 32, 0.7) 0px 0px 10px 0px` as a colored glow specifically around accent-filled elements (likely the CTA), and `rgba(0, 0, 0, 0.25) 0px 8px 28px 0px` for lighter card elevation. Backdrop blur appears at two strengths — `blur(8px)` for lighter glass and `blur(20px) saturate(1.4)` for the navbar capsule, the latter adding a saturation boost that keeps the glass from looking washed out against the photographic hero.

## Motion
Entrances use a slow, decelerating cubic-bezier(0.16, 1, 0.3, 1) at 0.7s for both opacity and transform — a soft, editorial ease-out suited to large type and photography settling into place (named keyframes heroNameIn, heroFadeIn, heroSocialIn suggest a staggered hero reveal sequence: name, background, then social links). Utility transitions are fast and linear-feeling: opacity fades at 0.3s ease, and generic hover/color transitions at 0.2s ease. A scrollBob keyframe drives the small scroll-indicator arrow beneath the hero portrait; livePulse likely animates a status/availability dot; hfMarquee scrolls a horizontal marquee strip (probable footer or logo band). Motion is restrained and functional — no springs or overshoot — reinforcing the composed, confident executive tone rather than a playful one.

## Guardrails
- Never fill the hero background with the light blue-toned gradient — it belongs to a small ~4% panel element only; the hero stays a dark, moodily-lit photographic portrait.
- Never render the navbar as an edge-to-edge bar — it is a centered, inset, fully-pill capsule at ~650px width with symmetric margins.
- Never substitute the nav CTA's accent-fill values for the hero's primary button — the hero action is a separate, only-observed near-solid pill beneath the headline.
- Keep the vermilion accent rationed to words, numerals, chips, and small CTAs — never as a large background fill or full-section wash.
- Preserve the extreme negative letter-spacing on display and headline sizes; loosening it breaks the signature compressed-type feel.
- Keep career and expertise sections single/dual-column and list-driven — do not convert them into 3+ card grids.