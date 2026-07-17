import { profileLinks } from "@/data/links";
import { otherLocale, type Locale } from "@/lib/i18n";
import {
  pathFor,
  projectDetailPath,
  type RouteTarget,
  v4NavRoutes,
} from "@/lib/routes";

export const chromeCopy = {
  en: {
    menu: "Menu",
    close: "Close",
    locale: "Switch language to Spanish",
    copy: "Copy email",
    copied: "Email copied",
    failed: "Copy failed",
  },
  es: {
    menu: "Menú",
    close: "Cerrar",
    locale: "Cambiar idioma a inglés",
    copy: "Copiar email",
    copied: "Email copiado",
    failed: "No se pudo copiar",
  },
} as const;

export const contactEmail = profileLinks.find((link) => link.kind === "email")!;
export const profileSocialLinks = profileLinks.filter(
  (link): link is (typeof profileLinks)[number] & { kind: "linkedin" | "github" } =>
    link.kind !== "email",
);

export function v4NavItems(locale: Locale) {
  return v4NavRoutes.map((route) => ({
    key: route.key,
    href: pathFor(locale, route.key),
    label: route.labels[locale],
  }));
}

export function localeSwitchPath(locale: Locale, route: RouteTarget) {
  const nextLocale = otherLocale(locale);
  return typeof route === "object"
    ? projectDetailPath(nextLocale, route.slug)
    : pathFor(nextLocale, route);
}
