import { contentFor } from '@/content';
import { ExperienceList } from '@/components/sections/experience-list';
import { PageHero } from '@/components/sections/page-hero';
import type { Locale } from '@/lib/i18n';

export function ExperiencePage({ locale }: { locale: Locale }) {
  const page = contentFor(locale).experience;
  return (
    <>
      <PageHero content={page} />
      <ExperienceList />
    </>
  );
}
