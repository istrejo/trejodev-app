import type { ProjectsContent } from "../types";

export const projects = {
  eyebrow: "Proyectos",
  title: "Estoy preparando una selección de proyectos públicos.",
  description:
    "Los case studies públicos se limitan a trabajo aprobado con placeholders explícitos de media y enlaces hasta completar la verificación.",
  emptyState: "Estoy preparando una selección de proyectos públicos.",
  projects: [
    {
      slug: "racerlab",
      name: "RacerLab",
      summary:
        "SaaS de gestión para talleres automotrices representado por ahora con texto verificado y media placeholder.",
      role: "Founder & Full-Stack Developer",
      period: "Jul 2026 – Present",
      locale: "es",
      cover: { kind: "placeholder", name: "approved-cover-pending" },
      screenshots: [{ kind: "placeholder", name: "approved-screenshot-pending" }],
      publicUrl: { kind: "disabled", reason: "approved-public-url-pending" },
    },
  ],
} as const satisfies ProjectsContent;
