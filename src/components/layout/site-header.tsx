import Link from "next/link";
import { type Locale } from "@/lib/i18n";
import { navRoutes, pathFor } from "@/lib/routes";
import { LanguageSwitcher } from "./language-switcher";

const primaryRoutes = navRoutes.filter((route) =>
  ["about", "experience", "skills", "contact"].includes(route.key),
);

export function SiteHeader({ locale }: { locale: Locale }) {
  return (
    <header className="relative z-40 bg-bone">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-5 sm:px-8 lg:px-10">
        <Link
          className="inline-flex items-center gap-3 font-display text-xl font-black tracking-[-0.05em] text-ink transition duration-300 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ember"
          href={pathFor(locale, "home")}
        >
          <span
            className="grid h-9 w-9 place-items-center rounded-full bg-ink text-sm text-white transition duration-300"
            aria-hidden="true"
          >
            T
          </span>
          <span>TrejoDev</span>
        </Link>
        <nav
          aria-label={
            locale === "en" ? "Primary navigation" : "Navegación principal"
          }
          className="hidden items-center gap-5 md:flex"
        >
          {primaryRoutes.map((route) => (
            <Link
              className="text-sm font-bold text-slate transition duration-300 hover:-translate-y-0.5 hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ember"
              href={pathFor(locale, route.key)}
              key={route.key}
            >
              {route.labels[locale]}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <LanguageSwitcher locale={locale} />
          <Link
            className="hidden rounded-full bg-ember px-4 py-2.5 text-sm font-black text-ink transition duration-300 hover:-translate-y-0.5 hover:scale-[1.02] hover:bg-ink hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ember sm:inline-flex"
            href={pathFor(locale, "contact")}
          >
            {locale === "en" ? "Let's talk" : "Hablemos"}
          </Link>
        </div>
      </div>
      <nav
        aria-label={
          locale === "en"
            ? "Mobile primary navigation"
            : "Navegación principal móvil"
        }
        className="flex gap-2 overflow-x-auto px-5 pb-4 md:hidden"
      >
        {primaryRoutes.map((route) => (
          <Link
            className="shrink-0 rounded-full bg-paper px-3 py-2 text-xs font-bold text-slate transition duration-300 hover:-translate-y-0.5 hover:text-ink"
            href={pathFor(locale, route.key)}
            key={route.key}
          >
            {route.labels[locale]}
          </Link>
        ))}
      </nav>
    </header>
  );
}
