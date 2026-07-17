import type { AboutContent } from "../types";

export const about: AboutContent = {
  eyebrow: "Sobre mí",
  title: "Soy Alejandro Trejo.",
  description:
    "Frontend Developer en Tenerife, España, construyendo productos web y móviles confiables para equipos distribuidos en Latinoamérica y Estados Unidos.",
  paragraphs: [
    "Construyo productos web y móviles para equipos distribuidos en Latinoamérica y Estados Unidos, cuidando los detalles que convierten una idea en una herramienta confiable para el día a día.",
    "Mi foco está en mantenibilidad, calidad técnica, testing y experiencia de usuario para que los equipos reciban interfaces que puedan entender, evolucionar y confiar.",
  ],
  portraitLabel: "Placeholder de retrato — agregar foto aprobada",
  networksLabel: "Redes profesionales",
  principlesTitle: "Cómo trabajo",
  principles: [
    {
      title: "Arquitectura con intención",
      description:
        "Uso arquitectura frontend modular y límites claros de estado para que los productos sigan siendo entendibles cuando crecen.",
    },
    {
      title: "La calidad como feature de producto",
      description:
        "Testing, performance y componentes bien documentados forman parte del producto desde el inicio, no como una revisión final.",
    },
    {
      title: "Interfaces para trabajo real",
      description:
        "Empiezo por el flujo para que las personas avancen rápido, entiendan qué sigue y usen herramientas complejas con confianza.",
    },
  ],
  focusTitle: "Foco técnico",
  focusRows: [
    {
      label: "Frontend y mobile",
      value: "Angular, React, Ionic, Capacitor, TypeScript",
    },
    {
      label: "Arquitectura y entrega",
      value: "Micro Frontends, Module Federation, NgRx, Redux, Tailwind CSS",
    },
    {
      label: "Calidad y plataformas",
      value: "Jest, React Testing Library, Firebase, Supabase, Docker",
    },
  ],
};
