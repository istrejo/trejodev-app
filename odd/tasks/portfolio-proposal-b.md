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

Review follow-ups (branch `fix/review-follow-ups`, requested by the user after the proposal B deploy). Route: one delegated writer (writer trigger: e2e + page + en/es content files).

- [x] T4 — R3-001: e2e for `/en/projects/miraigo` (live link to https://miraigo.com opens in a new tab with `rel` including `noopener`; no repositories section/heading) and `/en/projects/racerlab` (repositories section still present).
- [x] T5 — R3-002: localize the stack list `aria-label` on home from en/es content; e2e asserts the Spanish label on `/es`.
- [x] T6 — R3-003: Axe in dark theme on a non-home page that renders `.button.primary` (`/en/projects/miraigo`).
- [x] T7 — R3-004: overflow + touch-target check at a 390px viewport for `/en` and `/es`.
- [x] T8 — R3-005: assert the micro-frontends metric value exactly (`.metric-value` text "7").

Cleanup (branch `chore/portfolio-cleanup`, requested by the user after the follow-up deploy). Route: one delegated writer (writer trigger: assets + en/es content + e2e + CSS).

- [x] T9 — Rename `public/projects/raceplab/` → `public/projects/racerlab/` with web-safe file names (no spaces); update en/es project content and e2e paths together.
- [x] T10 — Remove CSS left unused by the proposal B home (`.outcomes`, `.timeline`, `.home-proof-grid` and related selectors) only where no page or component still uses it.
- [x] T11 — Confirm the RacerLab cover renders on mobile (390px) on home and the projects pages after scrolling it into view; fix if it does not.

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

- Native review (consent granted, lens reliability): approved and acknowledged, lineage `review-27815b77187a0240`. Non-blocking findings recorded as follow-ups below (R3-001…R3-005).

- T4–T8 `b04780e` fix(home): localize stack label and harden external link rel (single commit: spec + src). RED (old build, `pnpm test:e2e --project=chromium`): 2 failed — T5 `/es` list "Tecnologías" missing (hardcoded "Stack"); T4 live link `rel` was "noreferrer", expected /noopener/ (real hygiene bug; fixed with `noopener noreferrer` on live and repository links). GREEN after rebuild: 42 passed, 2 skipped. Already passing, coverage only: T6 dark Axe on `/en/projects/miraigo`, T7 overflow/touch targets at 390x844 for `/en` and `/es` (no CSS fix needed), T8 exact `.metric-value` "7", T4 repositories hidden/present branches.

- T9 `0c1b093` refactor(assets): `public/projects/raceplab/` -> `racerlab/` via `git mv`; files `dashboard.png`, `service-orders.png`, `inventory.png`, `sign-in.png` (match captions); en/es content + e2e paths updated. RED (e2e updated first, `-g "RacerLab project pages"`): 1 failed on cover src -> GREEN after rename. Remaining `raceplab` hits only in historical `docs/` (none found live).
- T10 `cbd5c09` refactor(styles): refactor, behavior unchanged. Deleted `.home-proof-grid`, `.outcomes`, `.outcome` (+ `strong`, `p`), `.timeline` (+ `::before`, `li`), `.timeline-dot` (+ `.current`), `.timeline-mark`, `.timeline-copy` (+ `strong`, `span`, `p`), `.timeline-date`, and their 900px/640px media variants. rg proof: zero class usages in `src/` pages/components/layouts and `e2e/`; `/work` uses `work-timeline`/`work-evidence` (kept). Build + full e2e (Axe/visual) green.
- T11 `8eb2100` test(e2e): coverage only. At 390x844 the RacerLab cover on `/en` (home work card), `/en/projects` and `/en/projects/racerlab` loads (`naturalWidth > 0`) and is visible after `scrollIntoViewIfNeeded`; the blank capture was an unscrolled lazy image, not a defect. No source fix.
- Verification (branch): typecheck 0 errors · lint clean · test 18 passed · build 20 pages · test:e2e 44 passed, 2 skipped (viewport-specific).

## Follow-ups

None open.

## Next step

T4–T8 shipped: `main` at `d2ad386`, verified live. T9–T11 done on `chore/portfolio-cleanup`; ask before pushing/merging to `main` (push deploys).
