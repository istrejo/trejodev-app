import type { ProjectsContent } from "../types";

export const projects = {
  eyebrow: "Projects",
  title: "Product work with clear outcomes.",
  description:
    "A focused selection of product work, grounded in the current implementation and its documented roadmap.",
  emptyState: "More project material is being prepared.",
  projects: [
    {
      slug: "miraigo",
      name: "Mirai Go",
      tagline: "Direct bookings for independent hotels, no OTAs.",
      summary:
        "A direct-booking engine for independent hotels, guesthouses, rural houses and apartments, so they sell from their own website without depending on OTAs.",
      role: "Software Developer",
      period: "Launched Oct 2026",
      locale: "en",
      client: "FreshCommerce",
      status: "Live · Oct 2026",
      contribution:
        "I owned the web build: a WordPress block theme (FSE) with custom Gutenberg blocks in React and HubSpot forms for lead capture.",
      stack: ["WordPress FSE", "Gutenberg", "React", "HubSpot Forms"],
      liveUrl: "https://miraigo.com",
      cover: {
        src: "/projects/miraigo/home.jpg",
        width: 1440,
        height: 900,
        alt: "Mirai Go homepage: sell direct from your website, without depending on OTAs",
        caption: "Mirai Go homepage",
      },
      screenshots: [
        {
          src: "/projects/miraigo/home.jpg",
          width: 1440,
          height: 900,
          alt: "Mirai Go homepage: sell direct from your website, without depending on OTAs",
          caption: "Marketing homepage",
        },
        {
          src: "/projects/miraigo/booking.jpg",
          width: 1440,
          height: 760,
          alt: "Mirai Go booking engine showing room selection for a hotel",
          caption: "Booking engine: room selection",
        },
        {
          src: "/projects/miraigo/mobile.jpg",
          width: 585,
          height: 831,
          alt: "Mirai Go homepage on a phone",
          caption: "Homepage on mobile",
        },
      ],
      foundation: [
        {
          title: "The product",
          description:
            "Guided onboarding, fast checkout with cards, Apple Pay, Google Pay and PayPal, a loyalty club, real-time sync with 200+ channel managers and PMS, and optional AI sales add-ons.",
        },
        {
          title: "My part: the web build",
          description:
            "A WordPress block theme (FSE) with custom Gutenberg blocks built in React, and HubSpot forms integrated for lead capture.",
        },
      ],
      repositories: [],
    },
    {
      slug: "racerlab",
      name: "RacerLab",
      tagline: "Workshop management SaaS.",
      summary:
        "An automotive workshop management SaaS, with a NestJS API and an Angular client focused on a secure session foundation.",
      role: "Founder & Full-Stack Developer",
      period: "Jul 2026 – Present",
      locale: "en",
      cover: {
        src: "/projects/racerlab/dashboard.png",
        width: 1600,
        height: 1280,
        alt: "RacerLab workshop dashboard interface",
        caption: "Workshop overview interface",
      },
      screenshots: [
        {
          src: "/projects/racerlab/dashboard.png",
          alt: "RacerLab workshop dashboard interface",
          caption: "Workshop overview",
        },
        {
          src: "/projects/racerlab/service-orders.png",
          alt: "RacerLab service orders interface",
          caption: "Service orders interface",
        },
        {
          src: "/projects/racerlab/inventory.png",
          alt: "RacerLab inventory management interface",
          caption: "Inventory management interface",
        },
        {
          src: "/projects/racerlab/sign-in.png",
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
