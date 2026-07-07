# Proposal: Implement Creative Pro Portfolio

## Intent

Replace the old Firebase portfolio with a bilingual TrejoDev site that reflects the approved Creative Pro direction, presents Alejandro Trejo as **Frontend Developer**, and turns the current docs-only repo into a deployable product without inventing projects or recruiter-only copy.

## Scope

### In Scope

- Scaffold Next.js App Router + TypeScript + Tailwind for a static-first site.
- Implement six public pages: Home, About, Experience, Skills, Certifications, Contact.
- Add EN/ES content, CV download links, SEO baseline, responsive/accessibility baseline, and Firebase deploy config.

### Out of Scope

- Public projects/case studies in v1; `/projects` stays hidden or minimal.
- Blog, analytics, CMS, contact backend, or non-brief extras.

## Capabilities

### New Capabilities

- `portfolio-foundation`: app scaffold, global layout, design tokens, navigation, and static export baseline.
- `portfolio-i18n-routing`: locale-prefixed routing, shared slug strategy, language switcher, and localized metadata/content loading.
- `portfolio-content-pages`: page requirements for Home, About, Experience, Skills, Certifications, Contact, and CV access.

### Modified Capabilities

None.

## Approach

Build a **static-first Next.js App Router** site with Server Components by default, `app/[locale]/` routing, locale dictionaries, Tailwind tokens aligned to Creative Pro, and `output: 'export'` for classic Firebase Hosting. Route recommendation: `/en` as primary default locale and `/es` as alternate. For v1, use **shared slugs** (`/es/about`, `/es/experience`) instead of localized Spanish slugs to reduce routing, metadata, and switcher complexity; revisit localized slugs after launch if SEO or editorial needs justify it.

## Affected Areas

| Area                                                                  | Impact   | Description                                   |
| --------------------------------------------------------------------- | -------- | --------------------------------------------- |
| `package.json`, `next.config.*`, `tailwind.config.*`, `tsconfig.json` | New      | App/tooling scaffold                          |
| `src/app/[locale]/**`                                                 | New      | Locale routes and page entrypoints            |
| `src/content/**`, `src/lib/**`, `src/components/**`                   | New      | Dictionaries, route helpers, UI/layout system |
| `public/cv/**`, `firebase.json`, `.firebaserc`                        | New      | CV assets and deploy config                   |
| `docs/portfolio-brief.md`                                             | Modified | Only if assumptions need sync                 |

## Risks

| Risk                                 | Likelihood | Mitigation                                                        |
| ------------------------------------ | ---------- | ----------------------------------------------------------------- |
| Missing CV PDFs                      | High       | Allow placeholders or block final deploy until files exist        |
| Wrong Firebase hosting path          | Med        | Confirm classic Hosting target/domain before apply                |
| Scope exceeds 400-line review budget | High       | Plan chained PR slices: foundation, pages/content, quality/deploy |
| Shared slugs later rejected          | Med        | Centralize route mapping for future localized slugs               |

## Rollback Plan

Keep deployment isolated until export/build succeeds; if rollout fails, stop before Firebase deploy or redeploy the previous Hosting artifact.

## Dependencies

- Existing Firebase Hosting project access and target name.
- English and Spanish CV PDFs or approved temporary placeholders.

## Success Criteria

- [ ] Six bilingual public pages work under `/en` and `/es` with a visible language switcher.
- [ ] Projects remain omitted from primary navigation and no invented public work appears.
- [ ] Static export deploys to Firebase and replaces the previous portfolio only after validation.
- [ ] Implementation plan is split if review size exceeds the 400-line budget.
