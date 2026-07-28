# AuditForge AI — Landing Page (v2)

Marketing landing page for **AuditForge AI**, an AI-assisted Solidity
smart contract pre-audit platform. Built with React, TypeScript, Vite,
Tailwind CSS, and Framer Motion — styled as a professional API platform
in the spirit of Swagger UI / Stripe Docs / Postman.

## Stack

- [Vite](https://vitejs.dev/) 5 + React 19 + TypeScript
- [Tailwind CSS](https://tailwindcss.com/) v3 (custom light theme, see
  `tailwind.config.js`)
- [Framer Motion](https://www.framer.com/motion/) for entrance,
  scroll-triggered, and hover animations
- [Lucide React](https://lucide.dev/) for icons, plus hand-drawn inline
  SVG brand marks for the tech stack (`src/components/TechIcons.tsx`)

## Getting started

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:5173` by default.

## Build

```bash
npm run build
npm run preview
```

`npm run build` type-checks the project (`tsc -b`) and then produces a
production bundle in `dist/`. `npm run lint` runs oxlint.

## Project structure

```
src/
  components/
    Navbar, Hero, SocialProof, Features, HowItWorks, ExampleResponse,
    TechStack, WhyAuditForge, CTASection, Footer   — page sections
    Logo, DashboardCard, TechIcons, AmbientBackground — shared UI
  lib/
    constants.ts    Copy, links, trust badges, and section content
  App.tsx           Page composition
  main.tsx          React entry point
  index.css         Tailwind layers + shared component classes
public/
  logo-transparent.png   Official AuditForge AI logo (background removed)
  logo-128/256/512.png   Sized logo exports for various contexts
  favicon.ico / favicon-*.png / apple-touch-icon.png
  og-cover.png       Open Graph preview image (built from the real logo)
```

## Official links

All external links live in one place — `src/lib/constants.ts` under
`LINKS` — update them there if any endpoint or profile URL changes:

| Key | Points to |
|---|---|
| `docs` | `https://audit.arvinlabs.tech/docs` |
| `apiEndpoint` | `https://audit.arvinlabs.tech/audit` |
| `github` | `https://github.com/ArvinFarrelP/auditforge-ai` |
| `okx` | `https://www.okx.ai/agents/9186` |

## What's in this pass

- Official AuditForge AI logo (background removed) wired into the
  Navbar, Hero, Footer, favicon set, and Open Graph image.
- A verifiable trust-badge cluster in the Hero (OKX.AI Marketplace
  listing, Agent #9186, Open Source, Production REST API) plus a
  "Powered by" strip (FastAPI, Fireworks AI, Docker).
- A new Social Proof section below the Hero with links out to the OKX
  Marketplace, GitHub, and Swagger docs.
- Hover/scroll animation polish on Features, How It Works (animated
  connector between steps), and Why AuditForge AI cards.
- A copy button on the example JSON response panel.
- Real (hand-drawn, offline, no CDN) brand marks for Python, FastAPI,
  Docker, Solidity, and OpenAPI in the Tech Stack section.
- A third CTA button (View on OKX.AI) in the final call-to-action.
- Footer reorganized with Documentation / GitHub / OKX Marketplace /
  API Endpoint links, plus the required pre-audit disclaimer.
- SEO pass: richer meta description, absolute Open Graph/Twitter image
  URLs, and JSON-LD structured data (`SoftwareApplication`) referencing
  the GitHub repo and OKX.AI listing.
