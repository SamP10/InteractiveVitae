# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

**Note:** The dev server is run manually by the user. Do not run `npm run dev`.

```bash
npm run build        # Production build

# Code Quality
npm run lint         # Run ESLint
npm run lint:fix     # Auto-fix ESLint issues
npm run format       # Format with Prettier

# Testing
npm test             # Run Jest tests
npm run test:watch   # Jest in watch mode
```

## Architecture Overview

**Stack:** Next.js 15 (App Router) + React 19 + TypeScript + Tailwind CSS

**Path Alias:** `@/*` maps to `./src/*`

### Project Structure

```
src/app/
├── components/          # Feature-based component folders
│   ├── callingCard/     # Header with avatar & name
│   ├── landing/         # Hero/intro section
│   ├── navigation/      # Nav components (bar, container, item)
│   ├── footer/          # Footer with social links
│   └── legacy/          # Deprecated implementations (reference only)
├── assets/images/       # Static images
├── globals.css          # Tailwind + custom animations/colors
├── layout.tsx           # Root layout with fonts
└── page.tsx             # Main page composition
```

### Animation System

- Respects `prefers-reduced-motion` OS setting via CSS media query in `globals.css`
- Custom keyframes defined in `globals.css`: slideInFromLeft/Right, navPopUpBounce, etc.
- Staggered animations use inline `animationDelay` styles

### Styling

- Tailwind CSS with custom theme colors defined as CSS variables in `globals.css`
- Custom colors: cream, moss, pine, lily-pad, darkPine
- Do not use Tailwind opacity modifiers (e.g., `text-pine/70`) with custom colors - they don't work with CSS variables
- Custom fonts: Young Serif, Notable, Limelight
- Dark mode via `prefers-color-scheme` media query

### Component Patterns

- Client components use `"use client"` directive
- React hooks for state (no external state management)
- Feature-based folder organization
- Test files co-located as `*.test.tsx`

## Code Style

- Prettier: 4-space tabs, 100-char width, single quotes, no trailing commas
- JSX brackets on same line as props
