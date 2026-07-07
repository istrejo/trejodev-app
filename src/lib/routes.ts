import { defaultLocale, type Locale, locales } from "./i18n";

export type PageKey =
  | "home"
  | "about"
  | "experience"
  | "skills"
  | "certifications"
  | "contact"
  | "projects";

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
    key: "projects",
    slug: "projects",
    nav: false,
    labels: { en: "Projects", es: "Proyectos" },
  },
];

export const navRoutes = routes.filter((route) => route.nav);

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

export function localizedPath(
  currentPath: string,
  nextLocale: Locale,
): `/${Locale}${string}` {
  const [, maybeLocale, maybeSlug] = currentPath.split("/");
  const key =
    routes.find((route) => route.slug === (maybeSlug ?? ""))?.key ?? "home";
  return pathFor(
    locales.includes(maybeLocale as Locale) ? nextLocale : defaultLocale,
    key,
  );
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
