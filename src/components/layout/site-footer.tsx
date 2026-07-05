import Link from 'next/link';
import type { Locale } from '@/lib/i18n';
import { pathFor } from '@/lib/routes';

export function SiteFooter({ locale }: { locale: Locale }) {
  return (
    <footer className="border-t border-white/10 bg-ink text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-7 text-sm text-white/65 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
        <p className="font-bold">TrejoDev · Alejandro Trejo · Frontend Developer</p>
        <Link className="font-black uppercase tracking-[0.16em] transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ember" href={pathFor(locale === 'en' ? 'es' : 'en', 'home')}>
          EN / ES
        </Link>
      </div>
    </footer>
  );
}
