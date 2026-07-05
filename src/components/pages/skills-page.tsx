import { contentFor } from '@/content';
import { PageHero } from '@/components/sections/page-hero';
import { SkillsGrid } from '@/components/sections/skills-grid';
import type { Locale } from '@/lib/i18n';

export function SkillsPage({ locale }: { locale: Locale }) {
  const page = contentFor(locale).skills;
  return (
    <>
      <PageHero content={page} />
      <SkillsGrid />
    </>
  );
}
