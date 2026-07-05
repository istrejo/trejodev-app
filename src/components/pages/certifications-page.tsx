import { contentFor } from '@/content';
import { V3Cta, V3Hero, V3SectionIntro } from '@/components/sections/v3-page-sections';
import { Container } from '@/components/ui/container';
import type { Locale } from '@/lib/i18n';
import { pathFor } from '@/lib/routes';

const pageCopy = {
  en: {
    focusAreas: 'Focus areas',
    focusRows: ['Angular and performance', 'React and UI delivery', 'AI tools for developers'],
    sectionTitle: 'Recent learning, edited for relevance.',
    sectionDescription: 'Recent learning stays focused and easy to scan, connecting each step back to frontend work.',
    rows: [
      { year: '2026', title: 'Angular Frontend Development', description: 'Platzi · Frontend specialization focused on Angular workflows and modern interface delivery.', tag: 'Angular · Frontend', accent: 'ember' as const },
      { year: '2026', title: 'Software Engineer Fundamental', description: 'Platzi · Engineering foundations that support cleaner decisions, maintainability and collaboration.', tag: 'Foundations', accent: 'mint' as const },
      { year: '2026', title: 'AI Tools for Developers + Claude Code', description: 'Platzi · AI-assisted development workflows used as a productivity layer, not as a replacement for understanding.', tag: 'AI DevTools', accent: 'sky' as const },
      { year: '2025', title: 'Angular: Web Optimization with Lighthouse & SSR', description: 'Platzi · Performance-oriented frontend learning connected to Lighthouse, SSR and user experience quality.', tag: 'Performance', accent: 'ember' as const },
      { year: '2024', title: 'React.js + Linux Dev Environment Setup', description: 'Platzi · Practical frontend and development environment foundations that support daily delivery.', tag: 'React · Tooling', accent: 'mint' as const },
    ],
    ctaTitle: 'Learning matters when it shows up in the work.',
    ctaDescription: 'The important part is not the badge. It is how the knowledge improves delivery.',
    ctaLabel: 'Contact me',
  },
  es: {
    focusAreas: 'Áreas de foco',
    focusRows: ['Angular y performance', 'React y entrega UI', 'Herramientas AI para desarrollo'],
    sectionTitle: 'Aprendizaje reciente, editado por relevancia.',
    sectionDescription: 'El aprendizaje reciente se mantiene enfocado y fácil de leer, conectado siempre con trabajo frontend.',
    rows: [
      { year: '2026', title: 'Angular Frontend Development', description: 'Platzi · Especialización frontend enfocada en flujos Angular y entrega moderna de interfaces.', tag: 'Angular · Frontend', accent: 'ember' as const },
      { year: '2026', title: 'Software Engineer Fundamental', description: 'Platzi · Bases de ingeniería que apoyan mejores decisiones, mantenibilidad y colaboración.', tag: 'Fundamentos', accent: 'mint' as const },
      { year: '2026', title: 'AI Tools for Developers + Claude Code', description: 'Platzi · Flujos de desarrollo asistidos por IA usados como capa de productividad, no como reemplazo del criterio.', tag: 'AI DevTools', accent: 'sky' as const },
      { year: '2025', title: 'Angular: Web Optimization with Lighthouse & SSR', description: 'Platzi · Aprendizaje frontend orientado a performance con Lighthouse, SSR y calidad de experiencia.', tag: 'Performance', accent: 'ember' as const },
      { year: '2024', title: 'React.js + Linux Dev Environment Setup', description: 'Platzi · Bases prácticas de frontend y entorno de desarrollo que apoyan la entrega diaria.', tag: 'React · Tooling', accent: 'mint' as const },
    ],
    ctaTitle: 'Aprender importa cuando se refleja en el trabajo.',
    ctaDescription: 'Lo importante no es la insignia. Es cómo ese conocimiento mejora la entrega.',
    ctaLabel: 'Contactar',
  },
};

export function CertificationsPage({ locale }: { locale: Locale }) {
  const page = contentFor(locale).certifications;
  const copy = pageCopy[locale];

  return (
    <div id="certifications-v3-root" className="bg-bone text-ink">
      <V3Hero
        eyebrow={page.eyebrow}
        title={page.title}
        description={page.description}
        panelTitle={copy.focusAreas}
        panelType="rows"
        rows={copy.focusRows.map((text, index) => ({ text, accent: index === 0 ? 'ember' : index === 1 ? 'mint' : 'sky' }))}
      />
      <section className="motion-section bg-paper py-16 sm:py-20" aria-labelledby="certification-list-title">
        <Container>
          <V3SectionIntro id="certification-list-title" title={copy.sectionTitle} description={copy.sectionDescription} />
          <div className="mt-10 grid gap-4">
            {copy.rows.map((row) => (
              <article className="motion-card grid gap-5 rounded-[1.5rem] border border-line bg-bone p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-ink/25 hover:shadow-[0_28px_80px_rgba(10,10,10,0.12)] lg:grid-cols-[100px_1fr_170px] lg:items-center" key={`${row.year}-${row.title}`}>
                <p className={`font-display text-3xl font-black tracking-[-0.05em] ${row.accent === 'ember' ? 'text-ember' : row.accent === 'mint' ? 'text-mint' : 'text-sky'}`}>{row.year}</p>
                <div>
                  <h3 className="font-display text-2xl font-black tracking-[-0.05em] text-ink">{row.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate sm:text-base">{row.description}</p>
                </div>
                <p className="text-xs font-black uppercase leading-5 tracking-[0.14em] text-ink">{row.tag}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <V3Cta title={copy.ctaTitle} description={copy.ctaDescription} href={pathFor(locale, 'contact')} label={copy.ctaLabel} />
    </div>
  );
}
