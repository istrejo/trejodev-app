import { contentFor } from '@/content';
import { ButtonLink } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { cvFor } from '@/lib/cv';
import type { Locale } from '@/lib/i18n';
import { pathFor } from '@/lib/routes';

const accentClasses = {
  ember: 'bg-ember',
  mint: 'bg-mint',
  sky: 'bg-sky',
};

export function HomePage({ locale }: { locale: Locale }) {
  const content = contentFor(locale);
  const home = content.home;

  return (
    <div id="home-v3-root" className="bg-bone text-ink">
      <section className="overflow-hidden py-12 sm:py-16 lg:py-20" aria-labelledby="home-hero-title">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
            <div>
              <p className="inline-flex rounded-full bg-paper px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-slate shadow-soft">{home.eyebrow}</p>
              <h1 id="home-hero-title" className="mt-7 max-w-4xl font-display text-5xl font-black tracking-[-0.07em] text-ink sm:text-7xl lg:text-8xl">
                {home.title}
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate sm:text-xl sm:leading-9">{home.description}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href={pathFor(locale, 'experience')}>{home.primaryCta}</ButtonLink>
                <ButtonLink href={cvFor(locale).href} variant="secondary">
                  {home.secondaryCta}
                </ButtonLink>
              </div>
              <div className="mt-8 flex flex-wrap gap-2" aria-label={locale === 'en' ? 'Frontend technologies' : 'Tecnologías frontend'}>
                {home.signals.map((signal) => (
                  <span className="rounded-full border border-line bg-paper px-3 py-1.5 text-xs font-black uppercase tracking-[0.16em] text-slate" key={signal}>
                    {signal}
                  </span>
                ))}
              </div>
            </div>

            <aside className="rounded-[2rem] bg-ink p-5 text-white shadow-soft sm:p-7 lg:p-8" aria-label={locale === 'en' ? 'Frontend signal' : 'Señal frontend'}>
              <div className="flex items-center justify-between gap-4">
                <h2 className="font-display text-3xl font-black tracking-[-0.05em]">{home.proofTitle}</h2>
                <span className="h-4 w-4 rounded-full bg-ember shadow-[0_0_0_8px_rgba(255,107,53,0.16)]" aria-hidden="true" />
              </div>
              <div className="mt-7 grid gap-3">
                {home.proofRows.map((row, index) => (
                  <div className="grid grid-cols-[auto_1fr] gap-4 rounded-3xl bg-zinc-900 p-4" key={row}>
                    <span className="font-display text-sm font-black text-ember">{String(index + 1).padStart(2, '0')}</span>
                    <p className="text-sm leading-6 text-white/80 sm:text-base">{row}</p>
                  </div>
                ))}
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {[home.lighthouseStat, home.bilingualStat].map((stat) => (
                  <div className="rounded-3xl bg-paper p-5 text-ink" key={stat}>
                    <p className="font-display text-2xl font-black tracking-[-0.05em]">{stat}</p>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <section className="bg-ink py-5 text-white" aria-label={locale === 'en' ? 'Technology stack' : 'Stack tecnológico'}>
        <Container>
          <div className="flex min-h-[3.9rem] flex-wrap items-center justify-center gap-x-5 gap-y-3 text-center font-display text-lg font-black tracking-[-0.03em] sm:text-2xl">
            {home.signals.map((signal, index) => (
              <span className="inline-flex items-center gap-5" key={signal}>
                {index > 0 ? <span className={['h-2.5 w-2.5 rounded-full', index % 3 === 1 ? 'bg-ember' : index % 3 === 2 ? 'bg-mint' : 'bg-sky'].join(' ')} aria-hidden="true" /> : null}
                {signal}
              </span>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-paper py-16 sm:py-24" aria-labelledby="home-preview-title">
        <Container>
          <div className="max-w-3xl">
            <h2 id="home-preview-title" className="font-display text-4xl font-black tracking-[-0.06em] text-ink sm:text-6xl">
              {home.previewTitle}
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate">{home.previewDescription}</p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {home.previewCards.map((card) => (
              <article className="flex min-h-[18rem] flex-col justify-between overflow-hidden rounded-[1.75rem] border border-line bg-bone p-6 shadow-soft" key={card.title}>
                <div>
                  <div className={`h-2 w-16 rounded-full ${accentClasses[card.accent]}`} aria-hidden="true" />
                  <h3 className="mt-7 font-display text-2xl font-black tracking-[-0.05em] text-ink">{card.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate">{card.description}</p>
                </div>
                <p className="mt-8 border-t border-line pt-5 text-xs font-black uppercase leading-5 tracking-[0.14em] text-slate">{card.footer}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-ink py-16 text-white sm:py-20" aria-labelledby="home-footer-cta-title">
        <Container>
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <h2 id="home-footer-cta-title" className="font-display text-4xl font-black tracking-[-0.06em] sm:text-6xl">
                {home.footerCtaTitle}
              </h2>
              <p className="mt-5 text-lg leading-8 text-white/70">{home.footerCtaDescription}</p>
            </div>
            <ButtonLink className="bg-ember text-ink hover:bg-white" href={pathFor(locale, 'contact')}>
              {home.contactCta}
            </ButtonLink>
          </div>
        </Container>
      </section>
    </div>
  );
}
