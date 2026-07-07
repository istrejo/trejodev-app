import type { Locale } from "@/lib/i18n";

export type Accent = "ember" | "mint" | "sky";

export type PageTranslations<T> = Record<Locale, T>;

export type CardCopy = {
  title: string;
  description: string;
  footer?: string;
  accent: Accent;
};

export type SignalCopy = {
  label: string;
  value: string;
  accent: Accent;
};
