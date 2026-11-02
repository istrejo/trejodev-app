import type { ProjectsContent } from "../types";

export const projects = {
  eyebrow: "Proyectos",
  title: "Trabajo de producto con resultados claros.",
  description:
    "Una selección enfocada de trabajo de producto, basada en la implementación actual y su roadmap documentado.",
  emptyState: "Estoy preparando más material de proyectos.",
  projects: [
    {
      slug: "miraigo",
      name: "Mirai Go",
      tagline: "Reservas directas para hoteles independientes, sin OTA.",
      summary:
        "Un motor de reservas directas para hoteles independientes, pensiones, casas rurales y apartamentos, para que vendan desde su propia web sin depender de las OTA.",
      role: "Software Developer",
      period: "Lanzado en oct. 2026",
      locale: "es",
      client: "FreshCommerce",
      status: "En producción · oct. 2026",
      contribution:
        "Me encargué de la web: un tema de bloques de WordPress (FSE) con bloques Gutenberg personalizados en React y formularios de HubSpot para captar leads.",
      stack: ["WordPress FSE", "Gutenberg", "React", "HubSpot Forms"],
      liveUrl: "https://miraigo.com",
      cover: {
        src: "/projects/miraigo/home.jpg",
        width: 1440,
        height: 900,
        alt: "Página de inicio de Mirai Go: vende directo desde tu web, sin depender de las OTA",
        caption: "Página de inicio de Mirai Go",
      },
      screenshots: [
        {
          src: "/projects/miraigo/home.jpg",
          width: 1440,
          height: 900,
          alt: "Página de inicio de Mirai Go: vende directo desde tu web, sin depender de las OTA",
          caption: "Página de inicio",
        },
        {
          src: "/projects/miraigo/booking.jpg",
          width: 1440,
          height: 760,
          alt: "Motor de reservas de Mirai Go mostrando la selección de habitaciones de un hotel",
          caption: "Motor de reservas: selección de habitación",
        },
        {
          src: "/projects/miraigo/mobile.jpg",
          width: 585,
          height: 831,
          alt: "Página de inicio de Mirai Go en un teléfono",
          caption: "Página de inicio en móvil",
        },
      ],
      foundation: [
        {
          title: "El producto",
          description:
            "Onboarding guiado, pago rápido con tarjeta, Apple Pay, Google Pay y PayPal, club de fidelidad, sincronización en tiempo real con más de 200 channel managers y PMS, y complementos opcionales de venta con IA.",
        },
        {
          title: "Mi parte: la web",
          description:
            "Un tema de bloques de WordPress (FSE) con bloques Gutenberg personalizados creados en React, y formularios de HubSpot integrados para captar leads.",
        },
      ],
      repositories: [],
    },
    {
      slug: "racerlab",
      name: "RacerLab",
      tagline: "SaaS de gestión para talleres.",
      summary:
        "Un SaaS de gestión para talleres automotrices, con una API en NestJS y un cliente Angular centrados en una base segura de sesiones.",
      role: "Founder & Full-Stack Developer",
      period: "Jul 2026 – Present",
      locale: "es",
      cover: {
        src: "/projects/racerlab/dashboard.png",
        width: 1600,
        height: 1280,
        alt: "Interfaz del panel de taller de RacerLab",
        caption: "Interfaz de resumen del taller",
      },
      screenshots: [
        {
          src: "/projects/racerlab/dashboard.png",
          alt: "Interfaz del panel de taller de RacerLab",
          caption: "Resumen del taller",
        },
        {
          src: "/projects/racerlab/service-orders.png",
          alt: "Interfaz de órdenes de servicio de RacerLab",
          caption: "Interfaz de órdenes de servicio",
        },
        {
          src: "/projects/racerlab/inventory.png",
          alt: "Interfaz de gestión de inventario de RacerLab",
          caption: "Interfaz de gestión de inventario",
        },
        {
          src: "/projects/racerlab/sign-in.png",
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
