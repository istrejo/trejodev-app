import { contentFor } from "@/content";
import {
  V3Cta,
  V3Hero,
  V3SectionIntro,
} from "@/components/sections/v3-page-sections";
import { Container } from "@/components/ui/container";
import type { Locale } from "@/lib/i18n";
import { pathFor } from "@/lib/routes";
import { certificationsPageCopy } from "@/translations/pages";

export function CertificationsPage({ locale }: { locale: Locale }) {
  const page = contentFor(locale).certifications;
  const copy = certificationsPageCopy[locale];

  return (
    <div id="certifications-v3-root" className="bg-bone text-ink">
      <V3Hero
        eyebrow={page.eyebrow}
        title={page.title}
        description={page.description}
        panelTitle={copy.focusAreas}
        panelType="rows"
        rows={copy.focusRows.map((text, index) => ({
          text,
          accent: index === 0 ? "ember" : index === 1 ? "mint" : "sky",
        }))}
      />
      <section
        className="motion-section bg-paper py-16 sm:py-20"
        aria-labelledby="certification-list-title"
      >
        <Container>
          <V3SectionIntro
            id="certification-list-title"
            title={copy.sectionTitle}
            description={copy.sectionDescription}
          />
          <div className="mt-10 grid gap-4">
            {copy.rows.map((row) => (
              <article
                className="motion-card grid gap-5 rounded-[1.5rem] border border-line bg-bone p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-ink/25 hover:shadow-[0_28px_80px_rgba(10,10,10,0.12)] lg:grid-cols-[100px_1fr_170px] lg:items-center"
                key={`${row.year}-${row.title}`}
              >
                <p
                  className={`font-display text-3xl font-black tracking-[-0.05em] ${row.accent === "ember" ? "text-ember" : row.accent === "mint" ? "text-mint" : "text-sky"}`}
                >
                  {row.year}
                </p>
                <div>
                  <h3 className="font-display text-2xl font-black tracking-[-0.05em] text-ink">
                    {row.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate sm:text-base">
                    {row.description}
                  </p>
                </div>
                <p className="text-xs font-black uppercase leading-5 tracking-[0.14em] text-ink">
                  {row.tag}
                </p>
              </article>
            ))}
          </div>
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
