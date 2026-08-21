import { type ProjectSlug, projectFor } from "@/content";
import { type Locale, locales } from "./i18n";
import { pathFor, projectDetailPath, type PageKey, routeFor } from "./routes";

export const siteUrl =
  import.meta.env.PUBLIC_SITE_URL ?? "https://trejodev.com";

type MetadataRoute = PageKey | { key: "project-detail"; slug: ProjectSlug };

export type SeoMetadata = {
  title: string;
  description: string;
  alternates: {
    canonical: string;
    languages: Record<Locale, string>;
  };
  openGraph: {
    title: string;
    description: string;
    url: string;
    siteName: string;
    locale: "en_US" | "es_ES";
    image: string;
    type: "website";
  };
  twitter: {
    card: "summary_large_image";
    title: string;
    description: string;
    image: string;
  };
};

const descriptions: Record<Locale, string> = {
  en: "Alejandro Trejo is a Software Developer building modern web and mobile applications with React, Angular, TypeScript and Ionic.",
  es: "Alejandro Trejo es Software Developer y crea aplicaciones web y móviles modernas con React, Angular, TypeScript e Ionic.",
};

const titleSuffix = "TrejoDev - Software Developer";

function titleForRoute(locale: Locale, route: MetadataRoute) {
  if (typeof route === "object") {
    return projectFor(locale, route.slug)?.name ?? "Project";
  }

  if (route === "work") {
    return locale === "en" ? "Work" : "Trabajo";
  }

  return routeFor(route).labels[locale];
}

export function canonicalUrl(locale: Locale, route: MetadataRoute) {
  const path =
    typeof route === "object"
      ? projectDetailPath(locale, route.slug)
      : pathFor(locale, route);

  return new URL(path, siteUrl).toString();
}

export function localizedAlternates(route: MetadataRoute) {
  return locales.reduce<Record<Locale, string>>(
    (alternates, locale) => {
      alternates[locale] = canonicalUrl(locale, route);
      return alternates;
    },
    { en: "", es: "" },
  );
}

export function pageMetadata(
  locale: Locale,
  route: MetadataRoute,
  title?: string,
  description?: string,
): SeoMetadata {
  const pageTitle =
    route === "home"
      ? titleSuffix
      : `${title ?? titleForRoute(locale, route)} | ${titleSuffix}`;
  const pageDescription = description ?? descriptions[locale];

  return {
    title: pageTitle,
    description: pageDescription,
    alternates: {
      canonical: canonicalUrl(locale, route),
      languages: localizedAlternates(route),
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: canonicalUrl(locale, route),
      siteName: "TrejoDev",
      locale: locale === "en" ? "en_US" : "es_ES",
      image: new URL("/og-image.svg", siteUrl).toString(),
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      image: new URL("/og-image.svg", siteUrl).toString(),
    },
  };
}
