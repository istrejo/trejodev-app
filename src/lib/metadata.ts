import type { Metadata } from 'next';
import { type Locale, locales } from './i18n';
import { pathFor, type PageKey, routeFor } from './routes';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://trejodev.web.app';

const descriptions: Record<Locale, string> = {
  en: 'Alejandro Trejo builds modern web and mobile interfaces with React, Angular, TypeScript, Ionic and scalable frontend architectures.',
  es: 'Alejandro Trejo crea interfaces web y móviles modernas con React, Angular, TypeScript, Ionic y arquitecturas frontend escalables.',
};

const titleSuffix = 'TrejoDev - Frontend Developer';

export function canonicalUrl(locale: Locale, key: PageKey) {
  return new URL(pathFor(locale, key), siteUrl).toString();
}

export function localizedAlternates(key: PageKey) {
  return Object.fromEntries(locales.map((locale) => [locale, canonicalUrl(locale, key)]));
}

export function pageMetadata(locale: Locale, key: PageKey, title?: string, description?: string): Metadata {
  const route = routeFor(key);
  const pageTitle = key === 'home' ? titleSuffix : `${title ?? route.labels[locale]} | ${titleSuffix}`;
  const pageDescription = description ?? descriptions[locale];

  return {
    title: pageTitle,
    description: pageDescription,
    alternates: {
      canonical: canonicalUrl(locale, key),
      languages: localizedAlternates(key),
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: canonicalUrl(locale, key),
      siteName: 'TrejoDev',
      locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
    },
  };
}
