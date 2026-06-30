# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

OpenCat.app — the marketing and documentation website for OpenCat, a native AI client for Mac/iOS/iPad. Built with Astro 7, TypeScript, React 18 (interactive islands only), and Tailwind CSS 3. Deployed to Cloudflare Workers via the `@astrojs/cloudflare` adapter.

## Commands

- **Dev server:** `pnpm dev` (`astro dev`, runs on Cloudflare's workerd runtime)
- **Build:** `pnpm build` (`astro build` → `dist/`)
- **Preview (built worker):** `pnpm preview` (`astro build && wrangler dev`)
- **Deploy:** `pnpm deploy` (`astro build && wrangler deploy`)
- **Typecheck:** `pnpm astro check`
- **Lint / Lint fix:** `pnpm lint` / `pnpm lint:fix`
- **Cloudflare env types:** `pnpm cf-typegen` (regenerate after editing `wrangler.jsonc`)

Package manager is **pnpm**.

## Architecture

### Rendering model

`output: 'static'` with the `@astrojs/cloudflare` adapter. Content pages are prerendered to static HTML (`export const prerender = true`); a small set of redirect/endpoint routes are on-demand (`export const prerender = false`) and run in the Cloudflare Worker.

Interactivity is shipped as **React islands**: presentational React components render to static HTML at build time (zero JS); only the 7 interactive components (`Header`, `NavLinks`, `I18nSwitch`, `PrimaryFeatures`, `Pricing`, `Reviews`, `ContactLink`) hydrate, via `client:*` directives in the pages. React is enabled by `@astrojs/react`.

### Routing & i18n

Pages live under `src/pages/`. Localized pages are under `src/pages/[lang]/` (`getStaticPaths` enumerates locales).

- Supported locales: `en`, `zh-Hans` (configured in `src/utils/i18n-config.ts`); default `en`.
- Translation JSON: `content/i18n/{locale}.json`; loader `src/utils/get-dictionary.ts` (lazy `import`).
- Pages call `getDictionary(lang)` and pass translated data to components via `params` props.

**Important — redirects are declared routes, not middleware.** Astro+Cloudflare middleware only runs for *declared* routes, so it cannot catch unmatched paths. Every redirect is therefore an explicit on-demand route file using `src/utils/locale.ts` (`detectLocale`, Accept-Language negotiation via `negotiator` + `intl-localematcher`):

- `src/pages/index.astro` — bare `/` → `/{locale}/` (302)
- `src/pages/doc/index.astro` — bare `/doc` → `/{locale}/doc/` (302)
- `src/pages/[lang]/doc/help.astro` — `/[lang]/doc/help` → `/[lang]/doc/` (301)
- `src/pages/docs/[...path].astro` — legacy `/docs/*` → localized `/doc/*` (301; `zh-CN` → `zh-Hans`)

### Content (Markdown Docs)

Markdown lives in `content/docs/{lang}/*.md` and `content/privacy/*.md`, loaded via **Astro Content Collections** (`src/content.config.ts`, glob loader). A custom `generateId` preserves path casing so ids match locales (e.g. `zh-Hans/help`). Pages render with `astro:content`'s `render()` (`<Content />`); Astro's Markdown pipeline (Sätteri, GFM on by default) replaces the old `react-markdown`. The privacy page rewrites a `mailto:contact` placeholder into an obfuscated mail link via an inline `<script>` (anti-scraping; the real address is never in the HTML).

### Release Management

`src/pages/release.ts` (on-demand endpoint) parses the Sparkle XML feed at `public/releases/versions.xml` (read via the `ASSETS` binding) and 302-redirects to the latest DMG. Env is read with `import { env } from 'cloudflare:workers'`. Binaries live on R2 (custom domain in `RELEASES_DOWNLOAD_BASE`), not in this repo.

### Images

Images in `src/images/` are imported and rendered through `src/components/Image.tsx` (a tiny `next/image` replacement → `<img>`). Astro's image service is `passthrough` (no build-time optimization; images are already optimized webp/svg).

### Path Aliases (tsconfig)

- `@/*` → `src/*`
- `#/*` → `content/*`

### Styling

Tailwind CSS 3 via PostCSS (the `postcss` field in `package.json`; **no** `@astrojs/tailwind` integration). Plugins: `@tailwindcss/forms`, `@tailwindcss/typography`, `@headlessui/tailwindcss`, `@egoist/tailwindcss-icons` (mingcute). Config in `tailwind.config.js`; global CSS in `src/styles/globals.css` (imported by `src/layouts/Layout.astro`).

### Deployment

`wrangler.jsonc` is the source config; `astro build` emits `dist/` plus a generated `dist/server/wrangler.json`, and `wrangler deploy` (via wrangler's redirected-config mechanism) deploys with assets from `dist/client`. `@astrojs/sitemap` generates `sitemap-index.xml`; `public/robots.txt` points to it.

## Key Conventions

- `astro.config.mjs` sets `trailingSlash: 'always'` — all URLs end with `/`.
- Pages are `.astro`; reusable components are React `.tsx` in `src/components/` (rendered statically unless given a `client:*` directive).
- Add a new doc: drop a `.md` in `content/docs/{lang}/` — it's picked up by the collection and `[slug]` route automatically (no manual registration).
- The SEO sitemap is auto-generated from real routes (localized URLs).
