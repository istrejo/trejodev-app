import { contentFor } from "@/content";
import { PageHero, PageSectionIntro } from "@/components/sections/page";
import { Container } from "@/components/ui/container";
import { experienceItems } from "@/data/experience";
import type { Locale } from "@/lib/i18n";
import { experiencePageCopy } from "@/translations/pages";

const accents = ["ember", "mint", "sky"] as const;

export function ExperiencePage({ locale }: { locale: Locale }) {
  const page = contentFor(locale).experience;
  const copy = experiencePageCopy[locale];
  const currentRoles = experienceItems.slice(0, 3);
  const earlierRoles = experienceItems.slice(3, 6);

  return (
    <div id="experience-page-root" className="bg-bone text-ink">
      <PageHero
        eyebrow={page.eyebrow}
        title={page.title}
        description={page.description}
        panelTitle={copy.snapshot}
        panelType="snapshot"
        stats={copy.stats}
        signals={copy.signals.map((label, index) => ({
          label,
          value: label,
          accent: accents[index],
        }))}
      />
      <section
        className="motion-section bg-paper py-16 sm:py-20"
        aria-labelledby="experience-list-title"
      >
        <Container>
          <PageSectionIntro
            id="experience-list-title"
            title={copy.listTitle}
            description={copy.listDescription}
          />
          <div className="mt-8 grid gap-4">
            {currentRoles.map((item, index) => (
              <article
                className="motion-card grid gap-5 rounded-[1.5rem] border border-line bg-bone p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-ink/25 hover:shadow-[0_28px_80px_rgba(10,10,10,0.12)] lg:grid-cols-[10px_260px_1fr_210px] lg:items-center"
                key={item.company}
              >
                <span
                  className={`hidden h-full min-h-24 w-2.5 rounded-full lg:block ${index === 0 ? "bg-ember" : index === 1 ? "bg-mint" : "bg-sky"}`}
                  aria-hidden="true"
                />
                <div>
                  <h3 className="font-display text-2xl font-black tracking-[-0.05em] text-ink">
                    {item.company}
                  </h3>
                  <p className="mt-2 text-sm font-black text-slate">
                    {item.role}
                  </p>
                </div>
                <p className="text-sm leading-7 text-slate sm:text-base">
                  {item.summary}
                </p>
                <div className="grid gap-2 text-xs font-black uppercase leading-5 tracking-[0.12em] text-ink">
                  <span>{item.stack.slice(0, 2).join(" · ")}</span>
                  <span>{item.stack.slice(2, 4).join(" · ")}</span>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <section
        className="motion-section bg-ink py-16 text-white sm:py-20"
        aria-labelledby="experience-earlier-title"
      >
        <Container>
          <div className="grid gap-8 lg:grid-cols-[420px_1fr] lg:items-start">
            <PageSectionIntro
              id="experience-earlier-title"
              title={copy.earlierTitle}
              description={copy.earlierDescription}
              dark
            />
            <div className="grid gap-4 md:grid-cols-3">
              {earlierRoles.map((item) => (
                <article
                  className="motion-card rounded-[1.25rem] bg-zinc-900 p-6 transition duration-300 hover:-translate-y-1 hover:bg-zinc-800"
                  key={item.company}
                >
                  <h3 className="font-display text-2xl font-black tracking-[-0.05em] text-white">
                    {item.company}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-white/65">
                    {item.summary}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
