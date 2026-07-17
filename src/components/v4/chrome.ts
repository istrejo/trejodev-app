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
  },
  es: {
    menu: "Menú",
    close: "Cerrar",
    locale: "Cambiar idioma a inglés",
  },
} as const;

export const profileSocialLinks = profileLinks;

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
