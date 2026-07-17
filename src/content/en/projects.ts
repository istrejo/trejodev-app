import type { ProjectsContent } from "../types";

export const projects = {
  eyebrow: "Projects",
  title: "Product work with clear outcomes.",
  description:
    "A focused selection of product work, documented with verified facts and explicit media placeholders where approval is still pending.",
  emptyState: "More approved project material is being prepared.",
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
      screenshots: [
        { kind: "placeholder", name: "approved-screenshot-pending" },
      ],
      publicUrl: { kind: "disabled", reason: "approved-public-url-pending" },
    },
  ],
} as const satisfies ProjectsContent;
