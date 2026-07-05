## Exploration: implement-creative-pro-portfolio

### Current State
The repository is still documentation-first. It currently contains `docs/portfolio-brief.md`, `openspec/`, and `.atl/`, but no app scaffold, no `package.json`, no `src/`, no Next.js/Tailwind/Firebase config, no public assets, no tests, and it is not a git repo yet. The design source is stronger than the code source: the OpenPencil live canvas already has six Creative Pro pages (Home, About, Experience, Skills, Certifications, Contact) plus design tokens and design guidance that match the brief.

### Affected Areas
- `docs/portfolio-brief.md` — source of truth for scope, bilingual behavior, CV handling, and deploy constraints.
- `openspec/config.yaml` — current SDD rules already document the docs-first repo state and target stack.
- `openspec/changes/implement-creative-pro-portfolio/exploration.md` — exploration artifact for this change.
- `package.json` *(to be created)* — app/tooling entry point for Next.js, TypeScript, Tailwind, linting, and scripts.
- `next.config.ts` *(to be created)* — static export vs framework-hosted behavior will be decided here.
- `firebase.json` and likely `.firebaserc` *(to be created)* — Firebase deploy target and hosting mode.
- `src/app/[locale]/...` *(to be created)* — App Router locale pages for Home, About, Experience, Skills, Certifications, and Contact.
- `src/content/` or equivalent dictionaries *(to be created)* — bilingual copy source for `en` and `es`.
- `public/cv/` *(to be created)* — English and Spanish CV PDFs referenced by the brief.

### Approaches
1. **Static-first Next.js App Router on classic Firebase Hosting** — Build the portfolio as a static App Router site with locale-prefixed routes, static content dictionaries, and `output: 'export'`, then deploy the generated static assets to Firebase Hosting.
   - Pros: Best fit for the current scope (content-heavy, no auth, no forms, no dynamic backend), lowest runtime complexity, strong performance/SEO potential, cheaper/simpler hosting model, easier rollback/redeploy.
   - Cons: No server-only features, no middleware/cookie-driven locale detection, stricter limitations around dynamic features, and some Next.js features must be avoided or adapted for static export.
   - Effort: Medium

2. **Full Next.js deployment through Firebase App Hosting / framework-aware hosting** — Keep the App Router app in framework mode and deploy it through Firebase's Next.js-aware flow.
   - Pros: Better long-term flexibility for future blog/case-study dynamics, server features, redirects, or forms; closer to the default full-stack Next.js path.
   - Cons: More infrastructure/runtime complexity than version 1 needs, more deployment moving parts, and less benefit while the portfolio is mostly static content.
   - Effort: Medium/High

### Recommendation
Recommend **Approach 1** for the first implementation slice: scaffold a **Next.js App Router + TypeScript + Tailwind** project as a **static-first** site, use `app/[locale]/` routes with `generateStaticParams` for `en` and `es`, keep pages as Server Components by default, centralize copy in locale dictionaries, use `next/font` for Space Grotesk + Inter, and deploy the exported site to **classic Firebase Hosting**. This matches the real scope better than a full server-backed deployment and still leaves a migration path to Firebase App Hosting later if the portfolio grows dynamic features.

The proposed change boundary for v1 should include: scaffold, global layout/navigation, six public pages, hidden/omitted Projects navigation, bilingual content wiring, metadata/SEO baseline, responsive implementation, CV download links, and Firebase deploy configuration. It should explicitly exclude blog work, analytics, contact form backend, invented projects/case studies, and any non-brief extras.

This work is **very likely above the 400-line review budget** if delivered as one PR. It should be planned as chained slices at minimum: **(1) scaffold + design system + routing foundation**, **(2) page implementation + content**, **(3) quality/deploy hardening**.

### Risks
- **i18n scope** — localized routes/slugs, language switch persistence, and metadata duplication can create avoidable complexity if not constrained early.
- **Firebase deployment path** — the implementation must confirm whether the existing Firebase target should stay on classic Hosting or move to App Hosting before apply.
- **CV assets** — the brief requires two PDF files under `public/cv/`, but they are not in the repo yet.
- **No public projects** — `/projects` must stay hidden or low-emphasis without inventing content.
- **Responsive fidelity** — translating the OpenPencil Creative Pro layouts into robust mobile/tablet behavior will take deliberate implementation, not just visual copying.
- **Accessibility and performance** — the visual direction uses contrast, chips, dark panels, and subtle motion, so semantic structure, focus states, font loading, and motion restraint must be verified.
- **No scaffolded tests yet** — current repo state prevents meaningful test execution until the app/tooling exists; initial quality gates will likely be typecheck, lint, and build first.

### Ready for Proposal
Yes — proposal/spec/design/tasks can start now. Before proposal becomes final, the orchestrator should call out four explicit decisions/questions: **(1)** use classic Firebase Hosting static export for v1 unless the user prefers App Hosting now, **(2)** confirm whether Spanish routes use localized slugs or shared slugs for v1, **(3)** confirm the real Firebase project/hosting target and final domain, and **(4)** confirm whether the English/Spanish CV PDFs already exist or must be supplied later as placeholders.
