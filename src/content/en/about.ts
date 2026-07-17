import type { AboutContent } from "../types";

export const about: AboutContent = {
  eyebrow: "About",
  title: "I'm Alejandro Trejo.",
  description:
    "Software Developer based in Tenerife, Spain, building dependable web and mobile products for distributed teams across Latin America and the United States.",
  paragraphs: [
    "I build web and mobile products for distributed teams across Latin America and the United States, working on the details that turn an idea into a dependable everyday tool.",
    "My focus stays on maintainability, technical quality, testing, and user experience so teams inherit interfaces they can understand, evolve, and trust.",
  ],
  networksLabel: "Professional networks",
  principlesTitle: "How I work",
  principles: [
    {
      title: "Architecture with intent",
      description:
        "I use modular frontend architecture and clear state boundaries so products remain understandable as they grow.",
    },
    {
      title: "Quality as a product feature",
      description:
        "Testing, performance, and well-documented components are part of the product from the start, not a final pass.",
    },
    {
      title: "Interfaces for real work",
      description:
        "I begin with the workflow so people can move quickly, understand what happens next, and use complex tools with confidence.",
    },
  ],
  focusTitle: "Technical focus",
  focusRows: [
    {
      label: "Frontend & mobile",
      value: "Angular, React, React Native, Ionic",
    },
    {
      label: "Backend & APIs",
      value: "NestJS, Prisma ORM, PostgreSQL, REST APIs, Swagger/OpenAPI",
    },
    {
      label: "State management",
      value: "NgRx, SignalStore, Redux",
    },
    {
      label: "UI systems",
      value: "Tailwind CSS, SCSS, PrimeNG, Storybook",
    },
    {
      label: "Quality",
      value: "Unit and component testing with Jest, React Testing Library, Karma, and Jasmine",
    },
    {
      label: "Cloud & BaaS",
      value: "Supabase, Firebase, Google Cloud Platform",
    },
  ],
};
