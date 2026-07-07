import { contentFor } from "@/content";
import {
  V3CardGrid,
  V3Cta,
  V3Hero,
  V3SectionIntro,
} from "@/components/sections/v3-page-sections";
import { Container } from "@/components/ui/container";
import type { Locale } from "@/lib/i18n";
import { pathFor } from "@/lib/routes";
import { skillsPageCopy } from "@/translations/pages";

export function SkillsPage({ locale }: { locale: Locale }) {
  const page = contentFor(locale).skills;
  const copy = skillsPageCopy[locale];

  return (
    <div id="skills-v3-root" className="bg-bone text-ink">
      <V3Hero
        eyebrow={page.eyebrow}
        title={page.title}
        description={page.description}
        panelTitle={copy.coreStack}
        panelType="rows"
        rows={copy.stackRows.map((text, index) => ({
          text,
          accent:
            index === 0 || index === 3 ? "ember" : index === 1 ? "mint" : "sky",
        }))}
      />
      <section
        className="motion-section bg-paper py-16 sm:py-20"
        aria-labelledby="skills-grid-title"
      >
        <Container>
          <V3SectionIntro
            id="skills-grid-title"
            title={copy.sectionTitle}
            description={copy.sectionDescription}
          />
          <V3CardGrid cards={copy.cards} />
        </Container>
      </section>
      <V3Cta
        title={copy.ctaTitle}
        description={copy.ctaDescription}
        href={pathFor(locale, "contact")}
        label={copy.ctaLabel}
      />
    </div>
  );
}
