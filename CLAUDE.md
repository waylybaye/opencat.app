# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

OpenCat.app — the marketing and documentation website for OpenCat, a native AI client for Mac/iOS/iPad. Built with Next.js 14 (App Router), TypeScript, React 18, and Tailwind CSS 3.

## Commands

- **Dev server:** `pnpm dev`
- **Build:** `pnpm build`
- **Lint:** `pnpm lint`
- **Lint fix:** `pnpm lint:fix`

Package manager is **pnpm**.

## Architecture

### Routing & i18n

All user-facing pages live under `src/app/[lang]/`. The middleware (`src/middleware.ts`) detects the user's preferred locale from the `Accept-Language` header and redirects bare paths (e.g., `/doc/`) to the localized version (e.g., `/en/doc/`).

- Supported locales: `en`, `zh-Hans` (configured in `src/utils/i18n-config.ts`)
- Default locale: `en`
- Translation JSON files: `content/i18n/{locale}.json`
- Dictionary loader: `src/utils/get-dictionary.ts` — server-only, lazy-imports the JSON

Pages are server components that call `getDictionary(lang)` and pass translated data to child components via `params` props.

### Content (Markdown Docs)

Documentation lives in `content/docs/{lang}/*.md` with YAML frontmatter, parsed by `gray-matter` and rendered with `react-markdown`. Doc pages are at `/[lang]/doc/[slug]/`.

### Release Management

`/release/` API route (`src/app/release/route.ts`) parses the Sparkle XML feed at `public/releases/versions.xml` and redirects to the latest DMG. Release binaries and delta updates are stored in `public/releases/`.

### Path Aliases (tsconfig)

- `@/*` → `src/*`
- `#/*` → `content/*`

### Styling

Tailwind CSS with plugins: `@tailwindcss/forms`, `@tailwindcss/typography`, `@headlessui/tailwindcss`, `@egoist/tailwindcss-icons` (mingcute icon set). Configuration in `tailwind.config.js`.

### Linting

ESLint with `@antfu/eslint-config` (React + JSONC enabled). Config in `eslint.config.js`.

## Key Conventions

- Components are in `src/components/`, images in `src/images/`.
- `next.config.js` enables `trailingSlash: true` — all URLs end with `/`.
- Static assets excluded from middleware: `img`, `releases`, `release`, `docs` (paths under `public/`).
- `generateStaticParams()` is used to pre-render pages for all locales.
