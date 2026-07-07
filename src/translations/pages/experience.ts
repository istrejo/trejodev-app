import type { PageTranslations } from "./types";

type ExperiencePageCopy = {
  snapshot: string;
  stats: { value: string; label: string }[];
  signals: string[];
  listTitle: string;
  listDescription: string;
  earlierTitle: string;
  earlierDescription: string;
};

export const experiencePageCopy = {
  en: {
    snapshot: "Snapshot",
    stats: [
      { value: "6", label: "experience entries" },
      { value: "EN/ES", label: "bilingual ready" },
    ],
    signals: [
      "Product frontend",
      "Remote collaboration",
      "Architecture and UI quality",
    ],
    listTitle: "Experience, edited for signal.",
    listDescription:
      "Each card summarizes context, contribution and stack without copying the CV word for word or over-selling seniority.",
    earlierTitle: "Earlier roles stay concise.",
    earlierDescription:
      "Continuity matters, but the page keeps the scan focused on useful context and delivery signals.",
  },
  es: {
    snapshot: "Resumen",
    stats: [
      { value: "6", label: "entradas de experiencia" },
      { value: "EN/ES", label: "bilingüe" },
    ],
    signals: [
      "Frontend de producto",
      "Colaboración remota",
      "Arquitectura y calidad UI",
    ],
    listTitle: "Experiencia editada para señal.",
    listDescription:
      "Cada tarjeta resume contexto, aporte y stack sin copiar el CV palabra por palabra ni sobredimensionar el rol.",
    earlierTitle: "Roles anteriores, en formato breve.",
    earlierDescription:
      "La continuidad importa, pero la página mantiene el foco en contexto útil y señales de entrega.",
  },
} satisfies PageTranslations<ExperiencePageCopy>;
