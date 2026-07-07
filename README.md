# TrejoDev App

Static-first bilingual site for Alejandro Trejo, built with Next.js App Router, TypeScript and Tailwind CSS.

## Quick Path

1. Install dependencies with `npm install`.
2. Run local development with `npm run dev`.
3. Validate code with `npm run lint`, `npm run typecheck`, `npm run test`, and `npm run build`.
4. Install Playwright browsers with `npx playwright install` before running `npm run test:e2e` in a new environment.
5. Run `npm run ready:deploy` only after the final CV PDFs exist.

## Routes

| Locale  | Pages                                                                                   |
| ------- | --------------------------------------------------------------------------------------- |
| English | `/en`, `/en/about`, `/en/experience`, `/en/skills`, `/en/certifications`, `/en/contact` |
| Spanish | `/es`, `/es/about`, `/es/experience`, `/es/skills`, `/es/certifications`, `/es/contact` |

Projects are intentionally omitted from primary navigation for v1. No public case studies are included until real public work is approved.

## Deployment Readiness

The app uses `output: 'export'`, so `npm run build` generates the static `out/` directory for classic Firebase Hosting.

Required CV assets are not committed yet:

- `public/cv/alejandro-trejo-cv-en.pdf`
- `public/cv/alejandro-trejo-cv-es.pdf`

`npm run ready:deploy` is expected to fail at the CV asset gate until those files are provided or explicitly approved placeholders are added. Do not deploy with fabricated CV PDFs.

The Firebase project alias in `.firebaserc` is a placeholder and must be replaced with the existing Hosting project before deploy.
