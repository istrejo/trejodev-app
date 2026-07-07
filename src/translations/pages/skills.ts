import type { CardCopy, PageTranslations } from "./types";

type SkillsPageCopy = {
  coreStack: string;
  stackRows: string[];
  sectionTitle: string;
  sectionDescription: string;
  cards: CardCopy[];
  ctaTitle: string;
  ctaDescription: string;
  ctaLabel: string;
};

export const skillsPageCopy = {
  en: {
    coreStack: "Core stack",
    stackRows: [
      "React · Next.js · TypeScript",
      "Angular · Ionic · Capacitor",
      "Testing · Firebase · Supabase",
      "Claude Code · Cursor · Codex",
    ],
    sectionTitle: "From framework choices to delivery quality.",
    sectionDescription:
      "Each group is written to be scannable: clear category, practical capability, and enough signal to start a technical conversation.",
    cards: [
      {
        title: "Frontend",
        description:
          "React, Next.js, Angular, Ionic, Capacitor and TypeScript for modern web and mobile interfaces.",
        footer: "React · Angular · Next.js · Ionic",
        accent: "ember",
      },
      {
        title: "State & architecture",
        description:
          "Reusable structures for data flow, feature boundaries, micro frontends and maintainable UI systems.",
        footer: "NgRx · Redux · Signals · Module Federation",
        accent: "mint",
      },
      {
        title: "UI systems",
        description:
          "Styling and component workflows that keep interfaces consistent, responsive and easier to evolve.",
        footer: "Tailwind · PrimeNG · Storybook · Responsive UI",
        accent: "sky",
      },
      {
        title: "Testing & quality",
        description:
          "Practical testing habits for safer iteration and clearer confidence when shipping frontend changes.",
        footer: "Karma · Jasmine · Jest · RTL",
        accent: "ember",
      },
      {
        title: "Cloud & tooling",
        description:
          "Enough cloud and workflow context to connect frontend implementation with real delivery needs.",
        footer: "Firebase · Supabase · Google Cloud · Docker",
        accent: "mint",
      },
      {
        title: "AI dev tools",
        description:
          "Using AI as a development accelerator while keeping architectural decisions and code quality human-led.",
        footer: "Claude Code · Cursor · Windsurf · Codex",
        accent: "sky",
      },
    ],
    ctaTitle: "Skills are useful when they solve real interface problems.",
    ctaDescription:
      "That is the thread connecting the stack: product clarity, maintainability and frontend delivery.",
    ctaLabel: "Get in touch",
  },
  es: {
    coreStack: "Stack principal",
    stackRows: [
      "React · Next.js · TypeScript",
      "Angular · Ionic · Capacitor",
      "Testing · Firebase · Supabase",
      "Claude Code · Cursor · Codex",
    ],
    sectionTitle: "De decisiones de framework a calidad de entrega.",
    sectionDescription:
      "Cada grupo está escrito para escanearse fácil: categoría clara, capacidad práctica y señal suficiente para una conversación técnica.",
    cards: [
      {
        title: "Frontend",
        description:
          "React, Next.js, Angular, Ionic, Capacitor y TypeScript para interfaces web y móviles modernas.",
        footer: "React · Angular · Next.js · Ionic",
        accent: "ember",
      },
      {
        title: "Estado y arquitectura",
        description:
          "Estructuras reutilizables para flujo de datos, límites de features, microfrontends y sistemas UI mantenibles.",
        footer: "NgRx · Redux · Signals · Module Federation",
        accent: "mint",
      },
      {
        title: "Sistemas UI",
        description:
          "Flujos de estilos y componentes que mantienen interfaces consistentes, responsive y más fáciles de evolucionar.",
        footer: "Tailwind · PrimeNG · Storybook · Responsive UI",
        accent: "sky",
      },
      {
        title: "Testing y calidad",
        description:
          "Hábitos de prueba prácticos para iterar con más seguridad y confianza al entregar cambios frontend.",
        footer: "Karma · Jasmine · Jest · RTL",
        accent: "ember",
      },
      {
        title: "Cloud y tooling",
        description:
          "Contexto suficiente de cloud y flujo de trabajo para conectar frontend con necesidades reales de entrega.",
        footer: "Firebase · Supabase · Google Cloud · Docker",
        accent: "mint",
      },
      {
        title: "Herramientas AI",
        description:
          "Uso IA como acelerador de desarrollo mientras las decisiones de arquitectura y calidad siguen siendo humanas.",
        footer: "Claude Code · Cursor · Windsurf · Codex",
        accent: "sky",
      },
    ],
    ctaTitle:
      "Las habilidades sirven cuando resuelven problemas reales de interfaz.",
    ctaDescription:
      "Ese es el hilo que conecta el stack: claridad de producto, mantenibilidad y entrega frontend.",
    ctaLabel: "Contactar",
  },
} satisfies PageTranslations<SkillsPageCopy>;
