import { projectSlugs } from "@/content";
import { locales } from "@/lib/i18n";

export const localeStaticPaths = () =>
  locales.map((locale) => ({ params: { locale } }));

export const localeProjectStaticPaths = () =>
  locales.flatMap((locale) =>
    projectSlugs.map((slug) => ({ params: { locale, slug } })),
  );
