# TrejoDev Portfolio

Static-first bilingual portfolio for Alejandro Trejo. Astro renders every page at build time; a few small browser scripts provide theme persistence, the mobile menu, section reveals, and page transitions.

## Quick path

```bash
pnpm install
pnpm dev
pnpm ready:deploy
pnpm test:e2e
```

Astro requires Node.js 22.12 or newer. Install Playwright browsers once with `pnpm exec playwright install` when running end-to-end tests in a new environment.

## Routes

| Content        | English                 | Spanish                 |
| -------------- | ----------------------- | ----------------------- |
| Home           | `/en`                   | `/es`                   |
| About          | `/en/about`             | `/es/about`             |
| Work           | `/en/work`              | `/es/work`              |
| Skills         | `/en/skills`            | `/es/skills`            |
| Certifications | `/en/certifications`    | `/es/certifications`    |
| Contact        | `/en/contact`           | `/es/contact`           |
| Projects       | `/en/projects`          | `/es/projects`          |
| Project detail | `/en/projects/racerlab` | `/es/projects/racerlab` |

Unlocalized paths redirect to English. Legacy localized `/experience` paths redirect to the equivalent `/work` page so experience content has one canonical source.

## Content and UI

- Localized page content lives in `src/content` and `src/translations/pages`.
- Astro pages live in `src/pages`; shared chrome and project visuals live in `src/components`.
- Design tokens, responsive behavior, focus states, and reduced-motion fallbacks live in `src/styles/global.css`.
- The three Stitch screen records expose no `htmlCode`; their full-screen captures are visual references, not RacerLab media. Because those references also use placeholders, `ProjectVisual` intentionally remains a mock until approved project assets exist.

## Validation

| Command             | Checks                                                                      |
| ------------------- | --------------------------------------------------------------------------- |
| `pnpm format:check` | Formatting                                                                  |
| `pnpm lint`         | TypeScript and Astro lint rules                                             |
| `pnpm typecheck`    | Astro and strict TypeScript diagnostics                                     |
| `pnpm test`         | Unit contracts for routes, metadata, and chrome                             |
| `pnpm build`        | Static output in `dist/`                                                    |
| `pnpm test:e2e`     | Desktop/mobile routes, accessibility, navigation, theme, and console errors |

## Deployment

Firebase Hosting serves `dist/` with clean URLs. `pnpm ready:deploy` runs typecheck, lint, unit tests, and build before deployment. Set `PUBLIC_SITE_URL` when building for a host other than `https://trejodev.web.app`.
