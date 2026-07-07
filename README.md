# TrejoDev App

Static-first bilingual site for Alejandro Trejo, built with Next.js App Router, TypeScript and Tailwind CSS.

## Quick Path

1. Install dependencies with `pnpm install`.
2. Run local development with `pnpm dev`.
3. Validate code with `pnpm lint`, `pnpm typecheck`, `pnpm test`, and `pnpm build`.
4. Install Playwright browsers with `pnpm exec playwright install` before running `pnpm test:e2e` in a new environment.
5. Run `pnpm ready:deploy` before deploy.

## Routes

| Locale  | Pages                                                                                   |
| ------- | --------------------------------------------------------------------------------------- |
| English | `/en`, `/en/about`, `/en/experience`, `/en/skills`, `/en/certifications`, `/en/contact` |
| Spanish | `/es`, `/es/about`, `/es/experience`, `/es/skills`, `/es/certifications`, `/es/contact` |

Projects are intentionally omitted from primary navigation for v1. No public case studies are included until real public work is approved.

## Deployment Readiness

The app uses `output: 'export'`, so `pnpm build` generates the static `out/` directory for classic Firebase Hosting. `pnpm ready:deploy` runs typecheck, lint, unit tests and build.

The Firebase project alias in `.firebaserc` is a placeholder and must be replaced with the existing Hosting project before deploy.
