# Site polish — final quality pass

Locator: `odd/tasks/site-polish.md` · Engram mirror: `odd/site-polish/tasks`
Branch: `feat/site-polish` (from `main` at `1aed7ec`) · Skill: `/impeccable polish` (mode: Experience)

## Objective

Bring every page of the portfolio to the same finished quality bar without changing the incumbent visual world, copy, or behavior.

## Scope

All locale pages (home, about, work, skills, certifications, contact, projects index, project detail, 404, language chooser), `src/styles/global.css`, shared components. No new features, no copy changes without asking.

## Constraints

- Refinement only: incumbent tokens, fonts, palette, layout language stay.
- No horizontal overflow at 390px; axe stays clean; e2e stays green.
- No PRODUCT.md / DESIGN.md exists: code is design authority (offer `/impeccable init` afterwards).

## TDD

Mode: strict (on) · Source: session orchestrator config · Runners: `pnpm test` (vitest), `pnpm test:e2e` (Playwright). Behavior-bearing fixes get an e2e/unit RED first; purely visual value changes are verified by computed-style e2e where a stable assertion exists.

## Delivery

Strategy: `ask-on-risk` · Forecast: ~150–300 authored changed lines (single slice).

## Tasks

- [x] T1 — Evidence: detector over built HTML (`impeccable detect dist`), screenshots of every page at 1440 and 390 (light + dark home). Triage into functional / state / system drift / visual. Route: inline (evidence gathering, parent must judge visuals).
- [x] T2 — Fixes from triage. Route: decided after T1 (writer trigger if 2+ non-trivial files).
- [x] T3 — Verification: typecheck, lint, vitest, build, e2e, detector re-run, visual re-check 1440 + 390.

## Progress / evidence

- Detector (regex over `src`): nothing actionable; over `dist`: 78 findings, dominated by `undersized-ui-text` (tracked-caps labels at 0.68rem = 10.88px and 0.62rem = 9.92px, `global.css:227,302,568,728,955`), `hero-eyebrow-chip`, `cramped-padding` (to verify visually), one `flat-type-hierarchy` on project detail, `tiny-text` 10.56px on work page.

- T1 screenshots (1440 light/dark, 390 light; 10 routes): no horizontal overflow. Triage: (a) functional labels below 11px across eyebrows, locale button, work kicker/dates/timeline initials (mobile node at 0.48rem = 7.7px), outcome company names, project meta terms; (b) project detail repeated each section heading as an eyebrow with identical text (`What was built`, `Product interface gallery`, `Source repositories`); (c) gallery screenshots cropped from the center, cutting the mobile shot mid-headline.
- T2 route: inline (2 files, mechanical value changes + 3 markup deletions). RED: 3 new e2e (`polish` describe) failed — small-text lists per page, repeated labels, gallery `object-position` `50% 50%`. GREEN: labels raised to 0.75rem (timeline initials 0.6875rem), duplicate eyebrows removed, `.project-gallery .project-image { object-position: top center }`.
- T3: typecheck 0 errors, lint clean, vitest 23, build 20 pages, e2e 97 passed / 13 skipped. Detector over `dist`: 78 → 56; all `undersized-ui-text` / `tiny-text` cleared. Remaining, judged against the rendered pages: `cramped-padding` (full-bleed bordered sections whose `.container` carries the inset — renders with generous padding) and `flat-type-hierarchy` (static pass reads unstyled 16px headings; rendered h2/h3 have clear steps) are false positives; `hero-eyebrow-chip` is the incumbent site-wide label pattern, kept because polish preserves the visual world (flagged to the user as a possible follow-up).

## Next step

Push / merge are the user's call. Optional: `/impeccable init` to capture PRODUCT.md and DESIGN.md.
