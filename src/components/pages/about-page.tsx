import { contentFor } from "@/content";
import {
  PageCardGrid,
  PageCta,
  PageHero,
  PageSectionIntro,
} from "@/components/sections/page";
import { Container } from "@/components/ui/container";
import type { Locale } from "@/lib/i18n";
import { pathFor } from "@/lib/routes";
import { aboutPageCopy } from "@/translations/pages";

export function AboutPage({ locale }: { locale: Locale }) {
  const page = contentFor(locale).about;
  const copy = aboutPageCopy[locale];

  return (
    <div id="about-page-root" className="bg-bone text-ink">
      <PageHero
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
          <PageSectionIntro
            id="about-principles-title"
            title={copy.sectionTitle}
            description={copy.sectionDescription}
          />
          <PageCardGrid cards={copy.cards} />
        </Container>
      </section>
      <PageCta
        title={copy.ctaTitle}
        description={copy.ctaDescription}
        href={pathFor(locale, "experience")}
        label={copy.ctaLabel}
      />
    </div>
  );
}
