import type { ProjectsContent } from "../types";

export const projects = {
  eyebrow: "Proyectos",
  title: "Trabajo de producto con resultados claros.",
  description:
    "Una selección enfocada de trabajo de producto, documentada con hechos verificados y placeholders explícitos cuando la media aprobada sigue pendiente.",
  emptyState: "Estoy preparando más material aprobado de proyectos.",
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
      screenshots: [
        { kind: "placeholder", name: "approved-screenshot-pending" },
      ],
      publicUrl: { kind: "disabled", reason: "approved-public-url-pending" },
    },
  ],
} as const satisfies ProjectsContent;
