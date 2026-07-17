import { projectSlugs, type ProjectSlug } from "@/content";
import { type Locale, locales } from "./i18n";

export type PageKey =
  | "home"
  | "about"
  | "experience"
  | "skills"
  | "certifications"
  | "contact"
  | "work"
  | "projects";

export type RouteTarget = PageKey | { key: "project-detail"; slug: ProjectSlug };

export type Route = {
  key: PageKey;
  slug: string;
  nav: boolean;
  labels: Record<Locale, string>;
};

export const routes: Route[] = [
  { key: "home", slug: "", nav: true, labels: { en: "Home", es: "Inicio" } },
  {
    key: "about",
    slug: "about",
    nav: true,
    labels: { en: "About", es: "Sobre mí" },
  },
  {
    key: "experience",
    slug: "experience",
    nav: true,
    labels: { en: "Experience", es: "Experiencia" },
  },
  {
    key: "skills",
    slug: "skills",
    nav: true,
    labels: { en: "Skills", es: "Habilidades" },
  },
  {
    key: "certifications",
    slug: "certifications",
    nav: true,
    labels: { en: "Certifications", es: "Certificaciones" },
  },
  {
    key: "contact",
    slug: "contact",
    nav: true,
    labels: { en: "Contact", es: "Contacto" },
  },
  {
    key: "work",
    slug: "work",
    nav: false,
    labels: { en: "Work", es: "Trabajo" },
  },
  {
    key: "projects",
    slug: "projects",
    nav: false,
    labels: { en: "Projects", es: "Proyectos" },
  },
];

export const navRoutes = routes.filter((route) => route.nav);

const v4NavKeys = ["home", "about", "work", "projects"] as const;

export const v4NavRoutes = v4NavKeys.map((key) => ({
  key,
  slug: key === "home" ? "" : key,
  nav: true,
  labels: {
    en: key === "work" ? "Work" : routeFor(key).labels.en,
    es:
      key === "home"
        ? "Inicio"
        : key === "about"
          ? "Sobre mí"
          : key === "work"
            ? "Trabajo"
            : "Proyectos",
  },
}));

export function routeFor(key: PageKey) {
  const route = routes.find((item) => item.key === key);

  if (!route) {
    throw new Error(`Unknown route key: ${key}`);
  }

  return route;
}

export function pathFor(locale: Locale, key: PageKey): `/${Locale}${string}` {
  const route = routeFor(key);
  return route.slug ? `/${locale}/${route.slug}` : `/${locale}`;
}

export function projectDetailPath(
  locale: Locale,
  slug: ProjectSlug,
): `/${Locale}/projects/${ProjectSlug}` {
  return `/${locale}/projects/${slug}`;
}

function normalizePath(path: string): string {
  const [pathname] = path.split(/[?#]/);
  if (!pathname) return "/";
  return pathname !== "/" && pathname.endsWith("/")
    ? pathname.slice(0, -1)
    : pathname;
}

function isProjectSlug(value: string | undefined): value is ProjectSlug {
  return !!value && projectSlugs.includes(value as ProjectSlug);
}

export function localizedRouteTarget(currentPath: string): RouteTarget {
  const normalizedPath = normalizePath(currentPath);
  const [, , maybeSection, maybeSlug] = normalizedPath.split("/");
  const section = maybeSection ?? "";

  if (section === "projects" && isProjectSlug(maybeSlug)) {
    return { key: "project-detail", slug: maybeSlug };
  }

  const key = routes.find((route) => route.slug === section)?.key;

  if (key) {
    return key;
  }

  if (section === "work") {
    return "work";
  }

  return "home";
}

export function localizedPath(
  currentPath: string,
  nextLocale: Locale,
): `/${Locale}${string}` {
  const target = localizedRouteTarget(currentPath);

  if (typeof target === "object") {
    return projectDetailPath(nextLocale, target.slug);
  }

  return pathFor(nextLocale, target);
}

export function staticPageParams() {
  return locales.map((locale) => ({ locale }));
}

export function staticSubPageParams() {
  return locales.flatMap((locale) =>
    routes
      .filter((route) => route.slug && route.nav)
      .map((route) => ({ locale, slug: route.slug })),
  );
}
