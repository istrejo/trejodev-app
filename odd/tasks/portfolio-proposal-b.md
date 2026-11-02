# Portfolio proposal B — home redesign on current identity

Locator: `odd/tasks/portfolio-proposal-b.md` · Engram mirror: `odd/portfolio-proposal-b/tasks`
Branch: `feat/portfolio-proposal-b` · Design reference: canvas "Portfolio Redesign — Alejandro Trejo", artboards `HomeB` / `MobileB`

## Objective

Ship proposal B: keep the current visual identity (tokens in `src/styles/global.css`, Hanken Grotesk, pill buttons, white cards) and restructure the home page around the person, verified metrics, and the latest work (FreshCommerce + Mirai Go).

## Problem / why

The impeccable critique (22/40) found the home page hides the person ("Software Developer" H1), buries the best metrics, omits the current job (FreshCommerce, Sep 2026–) and the Mirai Go launch, and ships content defects (typo "Frntend", stale dev notes, unused contradicting `previewCards`).

## Scope

- Content (en + es): FreshCommerce role, Mirai Go project, cleanup of unused/stale home fields, typo fix.
- Home page `src/pages/[locale]/index.astro` + its styles: hero (status chip, name H1, promise, 2 CTAs), metrics band, selected work (Mirai Go, RacerLab), experience list, contact CTA (LinkedIn/GitHub only).
- Mirai Go screenshots under `public/projects/miraigo/`.
- Tests updated to the new intended behavior.

## Constraints

- Header/footer (`SiteChrome`), theme toggle, i18n routes stay as they are. Dark theme must keep working via existing tokens.
- No email address: none exists in the repo and the contact page intentionally exposes LinkedIn + GitHub only.
- Experience data stays single-sourced in `home.timelineEntries` (also feeds `/work`).
- No invented facts.

## TDD

Mode: strict (on) · Source: session orchestrator config ("Strict TDD Mode: enabled") · Runners: `pnpm test` (vitest), `pnpm test:e2e` (Playwright).

## Tasks

- [x] T1 — Content: add FreshCommerce role (latest first) and Mirai Go project (en/es), add Mirai Go assets, fix "Frntend", remove unused `previewCards`/`preview*`/`footerCta*`/stale notes from home content + types. Route: delegated writer (writer trigger: 5+ non-trivial files).
- [x] T2 — Home page redesign per proposal B (index.astro + global.css home section styles), update e2e home assertions first (RED), then implement (GREEN). Route: delegated writer (same writer, writer trigger).
- [x] T3 — Verification: `pnpm typecheck`, `pnpm lint`, `pnpm test`, `pnpm build`, `pnpm test:e2e`. Route: writer reports, parent spot-checks.

## Acceptance criteria

- `/en` and `/es`: H1 is "Alejandro Trejo"; status chip names FreshCommerce; hero CTAs go to work section and contact.
- Metrics band shows −80% load time, 50→90 Lighthouse, 7 micro frontends, 4+ years, each with source.
- Selected work shows Mirai Go (live link miraigo.com, WordPress FSE / Gutenberg / React / HubSpot Forms) then RacerLab.
- `/en/work` lists 7 roles with FreshCommerce first.
- No "Frntend", "Work slice", "Contact slice", "Pendie" left in `src/`.
- All checks in T3 pass; Axe passes on home.

## Delivery

Forecast ~500 authored changed lines. Strategy: `ask-on-risk` (default) — chain strategy to be confirmed with the user before opening any PR.

## Progress

- Branch created.
- T1 `581357f` feat(content): FreshCommerce role, Mirai Go project (`/projects/miraigo`, optional `liveUrl`/`contribution`/`stack` on `ProjectContent`), unused home fields removed, typo fixed. RED: `pnpm test` 8 failed → GREEN 18 passed. No e2e RED captured for T1 (assertions changed with content).
- T2 `eb756ac` feat(home): proposal B home. RED: `pnpm test:e2e --project=chromium -g home` 4 failed → GREEN. Axe on `/en` and `/es` in light + dark.
- T3 (writer, foreground): typecheck 0 errors · lint clean · test 18 passed · build 20 pages · test:e2e 32 passed, 2 skipped (viewport-specific). Parent spot check: `pnpm test` 18 passed.
- Review: `gentle-ai review assess` → medium (executable change in e2e), `slice_budget_reached` (1,204 changed lines vs ~400 budget).

## Follow-ups

- Rename `public/projects/raceplab` → `racerlab` (content + e2e paths together).
- Remove now-unused `.outcomes`, `.timeline`, `.home-proof-grid` CSS if no other page uses it.
- Confirm RacerLab cover renders on mobile (lazy image blank in a full-page capture, unconfirmed).

## Next step

Native review of the branch slice, then user decides on push/PR (delivery strategy pending).
