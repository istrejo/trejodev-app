import type { ProjectsContent } from "../types";

export const projects = {
  eyebrow: "Projects",
  title: "Selected projects are being curated.",
  description:
    "Public case studies stay limited to approved work with explicit media and link placeholders until verification is complete.",
  emptyState: "Selected projects are being curated.",
  projects: [
    {
      slug: "racerlab",
      name: "RacerLab",
      summary:
        "Automotive workshop management SaaS currently represented with verified text and placeholder media.",
      role: "Founder & Full-Stack Developer",
      period: "Jul 2026 – Present",
      locale: "en",
      cover: { kind: "placeholder", name: "approved-cover-pending" },
      screenshots: [{ kind: "placeholder", name: "approved-screenshot-pending" }],
      publicUrl: { kind: "disabled", reason: "approved-public-url-pending" },
    },
  ],
} as const satisfies ProjectsContent;
