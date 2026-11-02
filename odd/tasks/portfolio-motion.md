# Portfolio motion — purposeful animation pass

Locator: `odd/tasks/portfolio-motion.md` · Engram mirror: `odd/portfolio-motion/tasks`
Branch: `feat/portfolio-motion` · Skill: `/impeccable animate` (mode: Experience)

## Objective

Replace the single identical fade-and-rise on every section with a motion system that explains the page: one authored focal moment, continuity into case studies, and list-aware supporting motion.

## Problem / why

Every home section uses the same `[data-reveal]` 560ms fade-up. It is decoration, not meaning: it does not say which content matters, and navigation from a project to its case study is a generic crossfade that loses the object the visitor clicked.

## Motion thesis

- **Focal moment:** the featured project collage "deals" itself out — the two secondary screenshots start tucked under the primary one and settle into the grid while the primary unmasks (clip-path + transform, ~760ms, `cubic-bezier(0.16, 1, 0.3, 1)`). The portfolio's evidence is real product screens; the motion composes that evidence.
- **Continuity:** shared-element view transition of the project cover between home, `/projects`, and the project detail hero (Astro `transition:name="project-cover-<slug>"`, `ClientRouter` already on).
- **First viewport:** quiet load sequence for the hero (opacity + short rise + blur clearing, capped stagger) and a finite "available" ping on the status dot (3 iterations, then still).
- **Lists:** metrics and experience entries stagger as lists (delay capped), instead of fading as one block.
- **Budget:** CSS-only, no new dependency; reuse the existing IntersectionObserver in `SiteChrome.astro`. No infinite loops.
- **Reduced motion:** final states shown immediately; no spatial movement; view transitions off; color/state feedback preserved.

## Scope

- `src/styles/global.css` (motion tokens, hero sequence, deal, list stagger, view-transition CSS, reduced-motion path)
- `src/pages/[locale]/index.astro` (reveal attributes, transition names)
- `src/components/ProjectVisual.astro` (optional `transitionName` prop)
- `src/pages/[locale]/projects/index.astro`, `src/pages/[locale]/projects/[slug].astro` (cover transition names; gallery excluded)
- `e2e/smoke.spec.ts` (behavior tests)

## Constraints

- Content must stay visible without JS (hidden states scoped under `.js`).
- Metric text stays exact (no counter animation).
- Buttons stay ≥44px; no horizontal overflow at 390px; axe stays clean.
- No duplicate `view-transition-name` on one page.

## TDD

Mode: strict (on) · Source: session orchestrator config ("Strict TDD Mode: enabled") · Runners: `pnpm test` (vitest), `pnpm test:e2e` (Playwright).

## Delivery

Strategy: `ask-on-risk` · Forecast: ~250 authored changed lines (single PR slice).

## Tasks

- [x] T1 — E2E RED: shared cover `view-transition-name` on home and detail; reduced motion shows hero and collage in final state (no animation, no transform); collage visible without JS. Then implement motion (GREEN). Route: delegated writer (writer trigger: 5 non-trivial files).
- [x] T2 — Verification: `pnpm typecheck`, `pnpm lint`, `pnpm test`, `pnpm build`, `pnpm test:e2e`; visual check desktop + 390px. Route: writer reports, parent spot-checks + screenshots.

## Progress / evidence

- Branch created from `main` at `0660755`.
- T1 RED observed: 4 failed / 48 passed (view-transition name `none`; collage `data-visible` empty). GREEN after implementation. Reduced-motion hero needed `!important` on `animation: none`.
- Deviation: `exactOptionalPropertyTypes` rejects `transition:name={undefined}`; `ProjectVisual` falls back to `"none"`.
- Visual check (1440 + 390): hero sequence and collage deal render correctly; no horizontal overflow. Hero blur softened 6px → 4px after review of mid-frame.
- T2 checks: typecheck 0 errors, lint clean, vitest 18 passed, build 20 pages, e2e 52 passed (re-run by parent after blur tweak). `format:check` fails only on pre-existing `src/content/{en,es}/about.ts` (fails on base too).
- Work-unit commit: `c50989e` feat(motion). Review assess: medium (`executable_change`), `review_due=false` (`under_budget`, 258 lines) — pending in slice.

## Next step

Push / PR are the user's call. Optional follow-up: `/impeccable polish`.
