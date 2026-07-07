import type { CardCopy, PageTranslations } from "./types";

type AboutPageCopy = {
  workingStyle: string;
  rows: string[];
  sectionTitle: string;
  sectionDescription: string;
  cards: CardCopy[];
  ctaTitle: string;
  ctaDescription: string;
  ctaLabel: string;
};

export const aboutPageCopy = {
  en: {
    workingStyle: "Working style",
    rows: [
      "Product clarity before implementation details.",
      "Maintainable UI systems over one-off screens.",
      "Remote collaboration with calm execution.",
    ],
    sectionTitle: "How I approach frontend work.",
    sectionDescription:
      "Practical frontend work starts with product clarity, maintainable interfaces and careful delivery.",
    cards: [
      {
        title: "Product-minded UI",
        description:
          "I care about the why behind the screen: goals, constraints, states, users and team needs.",
        accent: "ember",
      },
      {
        title: "Frontend architecture",
        description:
          "Feature structure, reusable components, state management and performance are treated as product quality.",
        accent: "mint",
      },
      {
        title: "Team-ready delivery",
        description:
          "Clear communication, practical decisions and clean implementation help remote teams move faster.",
        accent: "sky",
      },
    ],
    ctaTitle: "Curious about the experience behind the interfaces?",
    ctaDescription:
      "Review the path from personal product work to remote frontend teams.",
    ctaLabel: "View experience",
  },
  es: {
    workingStyle: "Forma de trabajo",
    rows: [
      "Claridad de producto antes de detalles de implementación.",
      "Sistemas de UI mantenibles por encima de pantallas aisladas.",
      "Colaboración remota con ejecución ordenada.",
    ],
    sectionTitle: "Cómo abordo el frontend.",
    sectionDescription:
      "El trabajo frontend práctico empieza con criterio de producto, interfaces mantenibles y entrega cuidada.",
    cards: [
      {
        title: "UI con criterio de producto",
        description:
          "Me importa el porqué detrás de la pantalla: objetivos, restricciones, estados, usuarios y necesidades del equipo.",
        accent: "ember",
      },
      {
        title: "Arquitectura frontend",
        description:
          "Estructura de features, componentes reutilizables, estado y rendimiento son parte de la calidad del producto.",
        accent: "mint",
      },
      {
        title: "Entrega lista para equipo",
        description:
          "Comunicación clara, decisiones prácticas e implementación limpia ayudan a que equipos remotos avancen mejor.",
        accent: "sky",
      },
    ],
    ctaTitle: "¿Querés ver la experiencia detrás de las interfaces?",
    ctaDescription:
      "Revisá el recorrido desde producto personal hasta equipos frontend remotos.",
    ctaLabel: "Ver experiencia",
  },
} satisfies PageTranslations<AboutPageCopy>;
