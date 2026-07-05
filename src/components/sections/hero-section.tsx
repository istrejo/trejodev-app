import { cvFor } from '@/lib/cv';
import type { Locale } from '@/lib/i18n';
import { pathFor } from '@/lib/routes';
import { ButtonLink } from '../ui/button';
import { Container } from '../ui/container';
import { Badge } from '../ui/badge';
import type { HomeContent } from '@/content/types';

export function HeroSection({ content, locale }: { content: HomeContent; locale: Locale }) {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
          <div>
            <p className="mb-5 text-xs font-black uppercase tracking-[0.3em] text-ember">{content.eyebrow}</p>
            <h1 className="font-display text-5xl font-black tracking-[-0.07em] text-ink sm:text-7xl lg:text-8xl">{content.title}</h1>
            <p className="mt-7 max-w-2xl text-xl leading-9 text-slate">{content.description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={pathFor(locale, 'experience')}>{content.primaryCta}</ButtonLink>
              <ButtonLink href={cvFor(locale).href} variant="secondary">
                {content.secondaryCta}
              </ButtonLink>
              <ButtonLink href={pathFor(locale, 'contact')} variant="ghost">
                {content.contactCta}
              </ButtonLink>
            </div>
          </div>
          <aside className="rounded-[2rem] bg-ink p-6 text-white shadow-soft sm:p-8" aria-label={locale === 'en' ? 'Profile signals' : 'Señales del perfil'}>
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-white/50">Alejandro Trejo</p>
                <p className="mt-2 font-display text-3xl font-black tracking-[-0.05em]">{content.role}</p>
              </div>
              <span className="rounded-full bg-ember px-3 py-1 text-xs font-black text-ink">{content.location}</span>
            </div>
            <div className="mt-10 flex flex-wrap gap-2">
              {content.signals.map((signal) => (
                <Badge key={signal}>{signal}</Badge>
              ))}
            </div>
            <div className="mt-10 border-t border-white/15 pt-6 text-sm leading-7 text-white/70">
              {locale === 'en' ? 'Sharp enough to scan. Deep enough to trust.' : 'Claro para escanear. Sólido para confiar.'}
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}
