---
name: ABA PayWay SDK Documentation
description: Edge-ready TypeScript SDK documentation and interactive KHQR playground for ABA PayWay Cambodia
colors:
  primary: "#005C8A"
  primary-hover: "#007BB8"
  accent-cyan: "#00B2E3"
  neutral-bg: "#040911"
  neutral-surface: "#0A121E"
  neutral-text: "#F5F5F5"
  neutral-muted: "#9CA3AF"
  border-subtle: "rgba(255, 255, 255, 0.1)"
  success-green: "#10B981"
  warning-amber: "#F59E0B"
  khr-red: "#E00025"
typography:
  display:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 4.5rem)"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: "clamp(1.5rem, 3vw, 2.25rem)"
    fontWeight: 800
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  title:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.4
  body:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.05em"
rounded:
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "24px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  xxl: "48px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral-text}"
    rounded: "{rounded.full}"
    padding: "12px 24px"
  button-secondary:
    backgroundColor: "rgba(255, 255, 255, 0.05)"
    textColor: "{colors.neutral-text}"
    rounded: "{rounded.full}"
    padding: "12px 24px"
  card-bezel:
    backgroundColor: "{colors.neutral-surface}"
    textColor: "{colors.neutral-text}"
    rounded: "{rounded.xl}"
    padding: "24px"
---

# Design System: ABA PayWay SDK Documentation

## Overview

**Creative North Star: "The FinTech Cockpit"**

The design system projects security, cryptographic rigor, and frictionless speed. Built for Cambodian developers navigating real financial transactions, the interface pairs deep dark navy canvases with glowing Cambodian Royal Blue and vibrant Cyan highlights. It combines the tactile precision of high-end developer tooling with the unshakeable trust required for payment gateways.

Surfaces use a distinct double-bezel hardware architecture with translucent frosted glass, subtle internal reflections, and ambient radial background glows. Information is organized with high visual hierarchy: interactive simulators, instant copyable code tabs, and crisp tabular figures for currency amounts.

**Key Characteristics:**
- Deep obsidian backdrop (`#040911`) paired with frosted midnight panels (`#0A121E`).
- Royal Blue (`#005C8A`) and PayWay Cyan (`#00B2E3`) brand accents.
- Double-bezel hardware styling with subtle light borders.
- Smooth spring and ease-out micro-interactions (`var(--ease-smooth)`).
- Tabular numbers and monospaced code blocks for financial accuracy.

## Colors

The palette is tuned for high-contrast dark mode readability with authoritative banking blue and vibrant electronic cyan.

### Primary
- **ABA Royal Blue** (`#005C8A`): Primary actions, CTA gradient anchors, and active tab states. Represents banking trust.
- **Royal Blue Light** (`#007BB8`): Gradient highlight and hover states for primary interactive elements.

### Secondary
- **PayWay Cyan** (`#00B2E3`): Focus rings, active status indicators, code highlights, and subtitle text gradients.

### Neutral
- **Obsidian Black Background** (`#040911`): Base page canvas and outer contrast shell.
- **Midnight Glass Surface** (`#0A121E`): Inner card surfaces and input backgrounds with backdrop blur.
- **Pure / Off-White Text** (`#F5F5F5`): Primary headlines, button labels, and high-emphasis copy.
- **Muted Steel Gray** (`#9CA3AF`): Secondary descriptions, placeholders, and documentation prose.
- **Subtle White Border** (`rgba(255, 255, 255, 0.1)`): Card rims, dividers, and tab boundaries.

### Status & Context
- **Edge Green** (`#10B981`): Success badges, live pulse dots, and copied confirmations.
- **Community Amber** (`#F59E0B`): Unofficial SDK tag and AI prompt banners.
- **Bakong Red** (`#E00025`): Khmer Riel (KHR) currency toggles and NBC Bakong standard badges.

### Named Rules
**The Trust Anchor Rule.** Royal Blue and Cyan are reserved strictly for interactive affordances, brand anchors, and verified statuses. Decorative colors must never obscure payment state.

## Typography

**Display Font:** `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`
**Body Font:** `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`
**Label/Mono Font:** `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace`

**Character:** Clean, objective system font stack with enabled OpenType features (`cv02`, `cv03`, `cv04`, `cv11`) and tabular figures for numbers.

### Hierarchy
- **Display** (800, `clamp(2.25rem, 5vw, 4.5rem)`, 1.1): Hero headlines with negative letter-spacing (`-0.02em`).
- **Headline** (800, `clamp(1.5rem, 3vw, 2.25rem)`, 1.2): Section titles and bento grid headers.
- **Title** (700, `1.25rem`, 1.4): Card headings and demo mode titles.
- **Body** (400, `0.9375rem`, 1.6): Documentation text and explanatory paragraphs (max width 65ch).
- **Label** (700, `0.75rem`, 1.0, tracking `0.05em`, uppercase): Badges, category headers, and sub-hints.

### Named Rules
**The Tabular Number Rule.** All monetary amounts, transaction IDs, and numeric metrics must render with `.tabular-nums` or monospace fonts to ensure alignment.

## Layout

- **Max Width Containers:** Content constrained to `max-w-6xl` (1152px) for landing page sections, `max-w-5xl` for interactive demos, and `max-w-2xl` for install snippets.
- **Spacing Scale:** Built on a 4px/8px modular scale (`4px`, `8px`, `16px`, `24px`, `32px`, `48px`).
- **Grid Architecture:** 3-column asymmetric Bento Grid (`md:grid-cols-3`) with 2-column feature spans (`md:col-span-2`).
- **Responsive Padding:** `px-4` on mobile stepping to `px-8` on desktop; vertical section spacing `my-12` (48px).

## Elevation & Depth

Depth is established through translucent frosted surfaces, double-bezel rims, and diffuse atmospheric backdrops.

### Shadow Vocabulary
- **Double Bezel Glow** (`box-shadow: 0 20px 40px -15px rgba(0, 54, 90, 0.35)`): Ambient hover lift for cards.
- **CTA Blue Glow** (`box-shadow: 0 8px 24px -4px rgba(0, 92, 138, 0.5)`): Rest shadow for primary button.
- **Inner Light Catch** (`box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.1)`): Top specular rim on cards and buttons.

### Named Rules
**The Double-Bezel Rule.** Significant containers use a two-layer structure: an outer gradient border shell (`p-1.5`) enclosing an inner frosted dark surface (`backdrop-blur-xl`).

## Shapes

- **Pill Geometry (`rounded-full` / `9999px`):** Buttons, badge pills, and mode switches.
- **Card Geometry (`rounded-2xl` / `1.5rem` / `24px`):** Outer bento cards and playground frames.
- **Inner Module Geometry (`rounded-lg` / `rounded-xl` / `8px`–`12px`): Inputs, code blocks, and tab buttons.

## Components

### Buttons
- **Primary Button (`.btn-primary`):** Full pill (`rounded-full`), gradient background (`#005C8A` to `#007BB8`), bold white text, with an embedded icon circle on the trailing edge. Hover elevates `-2px` with increased glow.
- **Secondary Button (`.btn-secondary`):** Full pill (`rounded-full`), translucent dark fill (`rgba(255,255,255,0.05)`), subtle border (`rgba(255,255,255,0.12)`). Hover turns border to Cyan (`rgba(0,178,227,0.4)`).

### Double-Bezel Card (`.bezel-card`)
- **Outer Shell:** `rounded-2xl`, `padding: 1.5px`, gradient stroke (`rgba(255,255,255,0.12)` to `0.03`).
- **Inner Content:** `rounded-[calc(1.5rem-1.5px)]`, `background: rgba(10, 18, 30, 0.7)`, `backdrop-filter: blur(16px)`.
- **Hover:** Smooth translateY(`-3px`) with blue-tinted elevation shadow.

### Install Snippet Box
- Multi-tab pill switcher (pnpm, npm, bun, yarn, ai).
- Dark terminal interior (`#070E17`) with cyan command text.
- One-click copy button with green checkmark feedback animation.

### Interactive Demo Playground
- Top status header with active pulsing green beacon.
- 3-step tab flow (Create Purchase, Check Status, Webhook Verify).
- Live currency toggle between USD ($) and Khmer Riel (៛).
- Live QR rendering, ABA Mobile deeplink copy, and EMVCo payload inspection.

## Do's and Don'ts

### Do:
- **Do** wrap primary interactive modules in the double-bezel card structure (`.bezel-card`).
- **Do** use `font-mono` and `.tabular-nums` for all transaction IDs, monetary figures, and hashes.
- **Do** include focus rings with `#00B2E3` outline on all interactive inputs and buttons.
- **Do** respect user preferences with `@media (prefers-reduced-motion: reduce)`.

### Don't:
- **Don't** use generic stark gray cards with flat solid borders.
- **Don't** mix unstyled raw numbers into financial tables or QR codes.
- **Don't** introduce competing accent colors (purple, orange) outside established status tags.
- **Don't** create sharp 90-degree square buttons; preserve the pill and rounded geometry.
