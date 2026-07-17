export const locales = ["en", "es"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, string> = {
  en: "English",
  es: "Español",
};

export function isLocale(value: string | undefined): value is Locale {
  return locales.some((locale) => locale === value);
}

export function resolveLocale(
  value: string | undefined,
  fallback: Locale = defaultLocale,
): Locale {
  return isLocale(value) ? value : fallback;
}

export function otherLocale(locale: Locale): Locale {
  return locale === "en" ? "es" : "en";
}
