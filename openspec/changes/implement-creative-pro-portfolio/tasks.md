# Tasks: Implement Creative Pro Portfolio

## Review Workload Forecast

| Field | Value |
|-------|-------|
| Estimated changed lines | 1,200-1,800 |
| 400-line budget risk | High |
| Chained PRs recommended | Yes |
| Suggested split | PR 1 foundation → PR 2 pages/content → PR 3 quality/deploy |
| Delivery strategy | ask-always |
| Chain strategy | pending |

Decision needed before apply: Yes
Chained PRs recommended: Yes
Chain strategy: pending
400-line budget risk: High

### Suggested Work Units

| Unit | Goal | Likely PR | Notes |
|------|------|-----------|-------|
| 1 | Create runnable app foundation and test/build baseline | PR 1 | Scaffold, routes contract, shell, Vitest/RTL, Playwright stub |
| 2 | Add bilingual content and six public pages | PR 2 | Depends on PR 1; keep tests with each page composition |
| 3 | Finish SEO/a11y/perf and Firebase readiness | PR 3 | Depends on PR 2; no deploy until target/CV assets are confirmed |

## Phase 1: Foundation / Tooling

- [ ] 1.1 Create `package.json`, `next.config.ts`, `tsconfig.json`, `postcss.config.js`, `tailwind.config.ts`, `.gitignore`, and `src/app/globals.css`; verify `npm install` and `npm run build` bootstrap.
- [ ] 1.2 Add `vitest.config.ts`, `playwright.config.ts`, `src/test/setup.ts`, and scripts for `lint`, `typecheck`, `test`, `test:e2e`; verify empty smoke commands run.
- [ ] 1.3 Create `src/lib/routes.ts`, `src/lib/i18n.ts`, `src/lib/metadata.ts`, `src/lib/cv.ts`, `src/styles/tokens.ts`; verify locale list, shared slugs, and route mapping by unit tests.
- [ ] 1.4 Build `src/app/layout.tsx`, `src/app/page.tsx`, `src/app/[locale]/layout.tsx`, `src/components/layout/{site-header,site-footer,language-switcher}.tsx`; verify shared shell excludes Projects nav.

## Phase 2: Content / Data Contracts

- [ ] 2.1 Create `src/data/{experience,skills,certifications,links}.ts` with typed reusable records; verify content contracts compile without `any`.
- [ ] 2.2 Create `src/content/en/{home,about,experience,skills,certifications,contact}.ts`; verify Home/About/Experience use approved Frontend Developer positioning.
- [ ] 2.3 Create `src/content/es/{home,about,experience,skills,certifications,contact}.ts`; verify ES pages mirror EN scope without mixed-language output.
- [ ] 2.4 Add tests for route-to-content resolution and language switching in `src/lib/__tests__/*`; verify `/en/*` ↔ `/es/*` equivalents.

## Phase 3: Page Implementation / Wiring

- [ ] 3.1 Create UI primitives in `src/components/ui/**` and section blocks in `src/components/sections/**`; verify Creative Pro tokens, focus states, and restrained motion.
- [ ] 3.2 Create page compositions in `src/components/pages/**`; verify Home, About, Experience, Skills, Certifications, and Contact stay within approved scope.
- [ ] 3.3 Create locale routes under `src/app/[locale]/**/page.tsx` with `generateStaticParams`; verify `/en` and `/es` render six pages plus optional minimal direct-only `/projects`.
- [ ] 3.4 Add component/page tests with RTL and axe for header, switcher, CV actions, and key sections; verify keyboard reachability and descriptive labels.

## Phase 4: Quality / SEO / Export

- [ ] 4.1 Add localized metadata, alternates, canonical helpers, and sitemap/robots support in `src/lib/metadata.ts` and app routes; verify locale-specific titles/descriptions.
- [ ] 4.2 Add Playwright smoke flows for `/en`, `/es`, language switch, nav, and CV links; verify static export pages work without runtime APIs.
- [ ] 4.3 Validate `npm run lint`, `typecheck`, `test`, `test:e2e`, and `build`; verify `out/` is generated and client JS stays minimal.

## Phase 5: Firebase Readiness / Documentation

- [ ] 5.1 Create `firebase.json` and `.firebaserc` for publishing `out/` and redirecting `/` to `/en`; verify config targets existing hosting only after user confirmation.
- [ ] 5.2 Add `public/cv/alejandro-trejo-cv-{en,es}.pdf` or approved placeholders and document blocker handling in `README.md`; verify missing CV assets fail readiness before deploy.
