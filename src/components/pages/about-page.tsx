import { contentFor } from '@/content';
import { PageHero } from '@/components/sections/page-hero';
import { Card } from '@/components/ui/card';
import { Container } from '@/components/ui/container';
import type { Locale } from '@/lib/i18n';

export function AboutPage({ locale }: { locale: Locale }) {
  const page = contentFor(locale).about;

  return (
    <>
      <PageHero content={page} />
      <section className="pb-20">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <Card>
              <div className="space-y-5 text-lg leading-8 text-slate">
                {page.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </Card>
            <Card className="bg-ink text-white">
              <h2 className="font-display text-3xl font-black tracking-[-0.04em]">{locale === 'en' ? 'Working principles' : 'Principios de trabajo'}</h2>
              <ul className="mt-6 grid gap-3">
                {page.principles.map((principle) => (
                  <li className="rounded-2xl border border-white/15 p-4 font-bold text-white/80" key={principle}>
                    {principle}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </Container>
      </section>
    </>
  );
}
