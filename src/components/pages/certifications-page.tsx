import { contentFor } from '@/content';
import { CertificationList } from '@/components/sections/certification-list';
import { PageHero } from '@/components/sections/page-hero';
import type { Locale } from '@/lib/i18n';

export function CertificationsPage({ locale }: { locale: Locale }) {
  const page = contentFor(locale).certifications;
  return (
    <>
      <PageHero content={page} />
      <CertificationList />
    </>
  );
}
