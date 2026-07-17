import type { ProjectsContent } from "../types";

export const projects = {
  eyebrow: "Projects",
  title: "Product work with clear outcomes.",
  description:
    "A focused selection of product work, grounded in the current implementation and its documented roadmap.",
  emptyState: "More project material is being prepared.",
  projects: [
    {
      slug: "racerlab",
      name: "RacerLab",
      summary:
        "An automotive workshop management SaaS, with a NestJS API and an Angular client focused on a secure session foundation.",
      role: "Founder & Full-Stack Developer",
      period: "Jul 2026 – Present",
      locale: "en",
      cover: {
        src: "/projects/raceplab/screen.png",
        alt: "RacerLab workshop dashboard interface",
        caption: "Workshop overview interface",
      },
      screenshots: [
        {
          src: "/projects/raceplab/screen.png",
          alt: "RacerLab workshop dashboard interface",
          caption: "Workshop overview",
        },
        {
          src: "/projects/raceplab/screen 5.png",
          alt: "RacerLab service orders interface",
          caption: "Service orders interface",
        },
        {
          src: "/projects/raceplab/screen 3.png",
          alt: "RacerLab inventory management interface",
          caption: "Inventory management interface",
        },
        {
          src: "/projects/raceplab/screen 4.png",
          alt: "RacerLab sign-in interface",
          caption: "Sign-in interface",
        },
      ],
      foundation: [
        {
          title: "API and access control",
          description:
            "The NestJS API implements authentication, role-based access control, protected user management, Swagger documentation and health checks. Its session model uses short-lived access tokens with opaque HttpOnly refresh cookies, hashed sessions and rotation.",
        },
        {
          title: "Workshop domain model",
          description:
            "The initial schema covers users, roles, permissions and sessions alongside customers, vehicles, service orders, diagnoses, quotations, repair tasks, inventory, evidence and comments.",
        },
        {
          title: "Angular application foundation",
          description:
            "The Angular 22 client provides standalone architecture, lazy login and dashboard routes, a route guard, bearer interceptor, session restoration, Signals and login, refresh and logout integration.",
        },
      ],
      roadmap: {
        title: "Current scope",
        description:
          "RacerLab is in active development. Operational modules and multi-workshop tenancy are planned or in progress; they are not presented here as completed functionality.",
      },
      repositories: [
        {
          label: "View API repository",
          href: "https://github.com/istrejo/racerlab-api",
        },
        {
          label: "View web repository",
          href: "https://github.com/istrejo/racerlab-web",
        },
      ],
    },
  ],
} as const satisfies ProjectsContent;
