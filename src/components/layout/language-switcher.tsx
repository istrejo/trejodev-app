"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { otherLocale, type Locale } from "@/lib/i18n";
import { localizedPath } from "@/lib/routes";

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const nextLocale = otherLocale(locale);
  const pathname = usePathname();

  return (
    <Link
      aria-label={
        locale === "en"
          ? "Switch language to Spanish"
          : "Cambiar idioma a inglés"
      }
      className="rounded-full border border-line bg-paper px-3 py-2 text-xs font-black uppercase tracking-[0.16em] text-ink transition hover:border-ember focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ember"
      href={localizedPath(pathname, nextLocale)}
    >
      {locale.toUpperCase()} / {nextLocale.toUpperCase()}
    </Link>
  );
}
