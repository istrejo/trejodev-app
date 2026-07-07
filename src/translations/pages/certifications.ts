import type { Accent, PageTranslations } from "./types";

type CertificationRowCopy = {
  year: string;
  title: string;
  description: string;
  tag: string;
  accent: Accent;
};

type CertificationsPageCopy = {
  focusAreas: string;
  focusRows: string[];
  sectionTitle: string;
  sectionDescription: string;
  rows: CertificationRowCopy[];
  ctaTitle: string;
  ctaDescription: string;
  ctaLabel: string;
};

export const certificationsPageCopy = {
  en: {
    focusAreas: "Focus areas",
    focusRows: [
      "Angular and performance",
      "React and UI delivery",
      "AI tools for developers",
    ],
    sectionTitle: "Recent learning, edited for relevance.",
    sectionDescription:
      "Recent learning stays focused and easy to scan, connecting each step back to frontend work.",
    rows: [
      {
        year: "2026",
        title: "Angular Frontend Development",
        description:
          "Platzi · Frontend specialization focused on Angular workflows and modern interface delivery.",
        tag: "Angular · Frontend",
        accent: "ember",
      },
      {
        year: "2026",
        title: "Software Engineer Fundamental",
        description:
          "Platzi · Engineering foundations that support cleaner decisions, maintainability and collaboration.",
        tag: "Foundations",
        accent: "mint",
      },
      {
        year: "2026",
        title: "AI Tools for Developers + Claude Code",
        description:
          "Platzi · AI-assisted development workflows used as a productivity layer, not as a replacement for understanding.",
        tag: "AI DevTools",
        accent: "sky",
      },
      {
        year: "2025",
        title: "Angular: Web Optimization with Lighthouse & SSR",
        description:
          "Platzi · Performance-oriented frontend learning connected to Lighthouse, SSR and user experience quality.",
        tag: "Performance",
        accent: "ember",
      },
      {
        year: "2024",
        title: "React.js + Linux Dev Environment Setup",
        description:
          "Platzi · Practical frontend and development environment foundations that support daily delivery.",
        tag: "React · Tooling",
        accent: "mint",
      },
    ],
    ctaTitle: "Learning matters when it shows up in the work.",
    ctaDescription:
      "The important part is not the badge. It is how the knowledge improves delivery.",
    ctaLabel: "Contact me",
  },
  es: {
    focusAreas: "Áreas de foco",
    focusRows: [
      "Angular y performance",
      "React y entrega UI",
      "Herramientas AI para desarrollo",
    ],
    sectionTitle: "Aprendizaje reciente, editado por relevancia.",
    sectionDescription:
      "El aprendizaje reciente se mantiene enfocado y fácil de leer, conectado siempre con trabajo frontend.",
    rows: [
      {
        year: "2026",
        title: "Angular Frontend Development",
        description:
          "Platzi · Especialización frontend enfocada en flujos Angular y entrega moderna de interfaces.",
        tag: "Angular · Frontend",
        accent: "ember",
      },
      {
        year: "2026",
        title: "Software Engineer Fundamental",
        description:
          "Platzi · Bases de ingeniería que apoyan mejores decisiones, mantenibilidad y colaboración.",
        tag: "Fundamentos",
        accent: "mint",
      },
      {
        year: "2026",
        title: "AI Tools for Developers + Claude Code",
        description:
          "Platzi · Flujos de desarrollo asistidos por IA usados como capa de productividad, no como reemplazo del criterio.",
        tag: "AI DevTools",
        accent: "sky",
      },
      {
        year: "2025",
        title: "Angular: Web Optimization with Lighthouse & SSR",
        description:
          "Platzi · Aprendizaje frontend orientado a performance con Lighthouse, SSR y calidad de experiencia.",
        tag: "Performance",
        accent: "ember",
      },
      {
        year: "2024",
        title: "React.js + Linux Dev Environment Setup",
        description:
          "Platzi · Bases prácticas de frontend y entorno de desarrollo que apoyan la entrega diaria.",
        tag: "React · Tooling",
        accent: "mint",
      },
    ],
    ctaTitle: "Aprender importa cuando se refleja en el trabajo.",
    ctaDescription:
      "Lo importante no es la insignia. Es cómo ese conocimiento mejora la entrega.",
    ctaLabel: "Contactar",
  },
} satisfies PageTranslations<CertificationsPageCopy>;
