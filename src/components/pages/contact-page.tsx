import { contentFor } from '@/content';
import { ContactPanel } from '@/components/sections/contact-panel';
import { PageHero } from '@/components/sections/page-hero';
import type { Locale } from '@/lib/i18n';

export function ContactPage({ locale }: { locale: Locale }) {
  const page = contentFor(locale).contact;
  return (
    <>
      <PageHero content={page} />
      <ContactPanel content={page} />
    </>
  );
}
