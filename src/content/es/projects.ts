import type { ProjectsContent } from "../types";

export const projects = {
  eyebrow: "Proyectos",
  title: "Trabajo de producto con resultados claros.",
  description:
    "Una selección enfocada de trabajo de producto, basada en la implementación actual y su roadmap documentado.",
  emptyState: "Estoy preparando más material de proyectos.",
  projects: [
    {
      slug: "racerlab",
      name: "RacerLab",
      summary:
        "Un SaaS de gestión para talleres automotrices, con una API en NestJS y un cliente Angular centrados en una base segura de sesiones.",
      role: "Founder & Full-Stack Developer",
      period: "Jul 2026 – Present",
      locale: "es",
      cover: {
        src: "/projects/raceplab/screen.png",
        alt: "Interfaz del panel de taller de RacerLab",
        caption: "Interfaz de resumen del taller",
      },
      screenshots: [
        {
          src: "/projects/raceplab/screen.png",
          alt: "Interfaz del panel de taller de RacerLab",
          caption: "Resumen del taller",
        },
        {
          src: "/projects/raceplab/screen 5.png",
          alt: "Interfaz de órdenes de servicio de RacerLab",
          caption: "Interfaz de órdenes de servicio",
        },
        {
          src: "/projects/raceplab/screen 3.png",
          alt: "Interfaz de gestión de inventario de RacerLab",
          caption: "Interfaz de gestión de inventario",
        },
        {
          src: "/projects/raceplab/screen 4.png",
          alt: "Interfaz de inicio de sesión de RacerLab",
          caption: "Interfaz de inicio de sesión",
        },
      ],
      foundation: [
        {
          title: "API y control de acceso",
          description:
            "La API en NestJS implementa autenticación, control de acceso basado en roles, gestión protegida de usuarios, documentación con Swagger y health checks. Su modelo de sesión usa tokens de acceso de vida corta, cookies HttpOnly opacas de refresh, sesiones hasheadas y rotación.",
        },
        {
          title: "Modelo de dominio del taller",
          description:
            "El esquema inicial cubre usuarios, roles, permisos y sesiones, además de clientes, vehículos, órdenes de servicio, diagnósticos, presupuestos, tareas de reparación, inventario, evidencias y comentarios.",
        },
        {
          title: "Base de la aplicación Angular",
          description:
            "El cliente en Angular 22 incluye arquitectura standalone, rutas lazy de login y dashboard, guard de rutas, interceptor bearer, restauración de sesión, Signals e integración de login, refresh y logout.",
        },
      ],
      roadmap: {
        title: "Alcance actual",
        description:
          "RacerLab está en desarrollo activo. Los módulos operativos y la multi-tenencia para varios talleres están planificados o en progreso; no se presentan aquí como funcionalidad terminada.",
      },
      repositories: [
        {
          label: "Ver repositorio de la API",
          href: "https://github.com/istrejo/racerlab-api",
        },
        {
          label: "Ver repositorio web",
          href: "https://github.com/istrejo/racerlab-web",
        },
      ],
    },
  ],
} as const satisfies ProjectsContent;
