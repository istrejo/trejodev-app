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
import { aboutPageCopy } from "@/translations/pages";

export function AboutPage({ locale }: { locale: Locale }) {
  const page = contentFor(locale).about;
  const copy = aboutPageCopy[locale];

  return (
    <div id="about-v3-root" className="bg-bone text-ink">
      <V3Hero
        eyebrow={page.eyebrow}
        title={page.title}
        description={page.description}
        panelTitle={copy.workingStyle}
        panelType="rows"
        rows={copy.rows.map((text, index) => ({
          text,
          accent: index === 0 ? "ember" : index === 1 ? "mint" : "sky",
        }))}
      />
      <section
        className="motion-section bg-paper py-16 sm:py-20"
        aria-labelledby="about-principles-title"
      >
        <Container>
          <V3SectionIntro
            id="about-principles-title"
            title={copy.sectionTitle}
            description={copy.sectionDescription}
          />
          <V3CardGrid cards={copy.cards} />
        </Container>
      </section>
      <V3Cta
        title={copy.ctaTitle}
        description={copy.ctaDescription}
        href={pathFor(locale, "experience")}
        label={copy.ctaLabel}
      />
    </div>
  );
}
