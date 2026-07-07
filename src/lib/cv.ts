import type { Locale } from "./i18n";

export type CvAsset = {
  locale: Locale;
  href: `/cv/${string}.pdf`;
  label: string;
};

export const cvAssets: Record<Locale, CvAsset> = {
  en: {
    locale: "en",
    href: "/cv/alejandro-trejo-cv-en.pdf",
    label: "Download CV",
  },
  es: {
    locale: "es",
    href: "/cv/alejandro-trejo-cv-es.pdf",
    label: "Descargar CV",
  },
};

export function cvFor(locale: Locale) {
  return cvAssets[locale];
}
