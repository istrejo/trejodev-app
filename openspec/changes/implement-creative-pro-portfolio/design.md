# Design: Implement Creative Pro Portfolio

## Technical Approach

Create a static-first Next.js App Router app with TypeScript, Tailwind, and locale-prefixed routes under `src/app/[locale]`. Public pages render from typed bilingual content modules and shared layout/components. The design follows the six delta specs: static foundation, shared-slug i18n, Creative Pro tokens, six primary pages, accessibility/performance/SEO gates, and classic Firebase Hosting static export.

## Architecture Decisions

| Option                                                                 | Tradeoff                                                                                | Decision                                                                                              |
| ---------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `output: 'export'` on classic Firebase Hosting vs Firebase App Hosting | Static export limits runtime features but fits content-only v1 and simpler rollout.     | Use classic Hosting for v1; avoid middleware/server actions for public content.                       |
| Shared slugs vs localized slugs                                        | Shared slugs reduce route mapping, switcher, and metadata complexity.                   | Use `/en/about` and `/es/about` for v1. Centralize route definitions for future localized slugs.      |
| Typed TS content modules vs CMS/JSON                                   | TS modules require deploys for copy changes but keep v1 dependency-light and type-safe. | Store content in `src/content/{en,es}` and shared structured data in `src/data`.                      |
| Server Components by default vs client-heavy UI                        | Client components enable richer interactions but add JS weight.                         | Keep pages/sections server-rendered; only language and mobile-menu interactions require browser code. |
| Chained PRs vs one large PR                                            | One PR will likely exceed the 400-line budget.                                          | Recommend stacked/chained slices before apply: foundation, content/pages, quality/deploy.             |

## Data Flow

```txt
Route params `[locale]` -> route/content helpers -> page sections -> UI primitives
                         -> metadata helpers -> localized SEO
                         -> Firebase `out/` static assets
```

`generateStaticParams` publishes `en` and `es`. `src/lib/routes.ts` owns page keys, paths, nav visibility, and language-switch equivalents. Projects stays omitted from primary navigation; if implemented, it is direct-only/minimal.

## File Changes

| File                                                                                                        | Action         | Description                                                                        |
| ----------------------------------------------------------------------------------------------------------- | -------------- | ---------------------------------------------------------------------------------- |
| `package.json`, `next.config.ts`, `tsconfig.json`, `tailwind.config.ts`, `postcss.config.*`                 | Create         | Next.js, TypeScript, Tailwind, lint/build scripts, static export config.           |
| `src/app/layout.tsx`, `src/app/page.tsx`, `src/app/[locale]/layout.tsx`, `src/app/[locale]/**/page.tsx`     | Create         | Root redirect/export handling, locale shell, six page entrypoints.                 |
| `src/app/globals.css`, `src/styles/tokens.ts`                                                               | Create         | Creative Pro CSS variables, font setup, base styles, focus states.                 |
| `src/components/layout/**`, `src/components/ui/**`, `src/components/sections/**`, `src/components/pages/**` | Create         | Header/footer/language switcher, primitives, reusable sections, page compositions. |
| `src/content/{en,es}/**`, `src/data/{experience,skills,certifications,links}.ts`                            | Create         | Typed bilingual copy and reusable structured profile data.                         |
| `src/lib/{i18n,routes,metadata,cv}.ts`                                                                      | Create         | Locale validation, route contracts, metadata generation, CV link helpers.          |
| `public/cv/alejandro-trejo-cv-{en,es}.pdf`                                                                  | Create/Blocker | Required CV assets or approved placeholders before release.                        |
| `firebase.json`, `.firebaserc`                                                                              | Create         | Publish `out`, set clean URLs/root redirect, target existing Firebase project.     |

## Interfaces / Contracts

```ts
type Locale = "en" | "es";
type PageKey =
  | "home"
  | "about"
  | "experience"
  | "skills"
  | "certifications"
  | "contact"
  | "projects";
type Route = { key: PageKey; slug: string; nav: boolean };
type CvAsset = { locale: Locale; href: `/cv/${string}.pdf`; label: string };
type ProfileLink = {
  kind: "linkedin" | "github";
  href: string;
  label: string;
};
type ExperienceItem = {
  company: string;
  role: string;
  dates: string;
  summary: string;
  highlights: string[];
  stack: string[];
};
```

## Responsive Strategy

Translate OpenPencil desktop pages into mobile-first layouts: single-column reading flow, collapsible navigation, reduced ornamental density, stacked cards/timelines, preserved dark panels as section accents, and breakpoint upgrades at `md`/`lg` for editorial asymmetry. Do not copy absolute canvas positions into production CSS.

## Accessibility / SEO / Performance

Use semantic landmarks, ordered headings, descriptive links, visible `:focus-visible`, AA contrast tokens, keyboard-tested nav/actions, and non-color-only meaning. Generate localized `metadata`, alternates/hreflang, canonical URLs, sitemap/robots if supported by static export, and OG image assets without photo/avatar. Use `next/font`, static assets, minimal dependencies, restrained CSS transitions, and client components only where needed.

## Testing Strategy

| Layer     | What to Test                                                       | Approach                                                                   |
| --------- | ------------------------------------------------------------------ | -------------------------------------------------------------------------- |
| Unit      | `routes`, locale guards, metadata, content contracts               | Vitest after scaffold exists.                                              |
| Component | Header, language switcher, cards, CV buttons                       | React Testing Library + axe checks after scaffold exists.                  |
| E2E       | `/en` and `/es` routes, keyboard nav, language switching, CV links | Playwright smoke tests after scaffold exists.                              |
| Build     | Static export and Firebase readiness                               | `npm run typecheck`, `lint`, `build`; verify `out/` and required CV files. |

## Migration / Rollout

No data migration required. Roll out by validating production export locally, confirming Firebase target/domain, then deploying to the existing Hosting site. Use root redirect from `/` to `/en` through Firebase/static config, not Next middleware.

## Work-Unit / Chained PR Recommendation

Because the repo has no scaffold and the change covers six pages plus deploy, budget risk is high. Recommended slices: (1) scaffold, routing, tokens, shell; (2) bilingual content and six page compositions; (3) accessibility/SEO/performance checks, CV assets, Firebase config.

## Open Questions

- [ ] Confirm Firebase project/hosting target and final domain.
- [ ] Provide English and Spanish CV PDFs or approve placeholders.
- [ ] Confirm git repository setup before implementation/PR planning.
