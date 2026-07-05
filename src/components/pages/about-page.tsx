import { contentFor } from '@/content';
import { V3CardGrid, V3Cta, V3Hero, V3SectionIntro } from '@/components/sections/v3-page-sections';
import { Container } from '@/components/ui/container';
import type { Locale } from '@/lib/i18n';
import { pathFor } from '@/lib/routes';

const pageCopy = {
  en: {
    workingStyle: 'Working style',
    rows: ['Product clarity before implementation details.', 'Maintainable UI systems over one-off screens.', 'Remote collaboration with calm execution.'],
    sectionTitle: 'How I approach frontend work.',
    sectionDescription: 'Practical frontend work starts with product clarity, maintainable interfaces and careful delivery.',
    cards: [
      { title: 'Product-minded UI', description: 'I care about the why behind the screen: goals, constraints, states, users and team needs.', accent: 'ember' as const },
      { title: 'Frontend architecture', description: 'Feature structure, reusable components, state management and performance are treated as product quality.', accent: 'mint' as const },
      { title: 'Team-ready delivery', description: 'Clear communication, practical decisions and clean implementation help remote teams move faster.', accent: 'sky' as const },
    ],
    ctaTitle: 'Curious about the experience behind the interfaces?',
    ctaDescription: 'Review the path from personal product work to remote frontend teams.',
    ctaLabel: 'View experience',
  },
  es: {
    workingStyle: 'Forma de trabajo',
    rows: ['Claridad de producto antes de detalles de implementación.', 'Sistemas de UI mantenibles por encima de pantallas aisladas.', 'Colaboración remota con ejecución ordenada.'],
    sectionTitle: 'Cómo abordo el frontend.',
    sectionDescription: 'El trabajo frontend práctico empieza con criterio de producto, interfaces mantenibles y entrega cuidada.',
    cards: [
      { title: 'UI con criterio de producto', description: 'Me importa el porqué detrás de la pantalla: objetivos, restricciones, estados, usuarios y necesidades del equipo.', accent: 'ember' as const },
      { title: 'Arquitectura frontend', description: 'Estructura de features, componentes reutilizables, estado y rendimiento son parte de la calidad del producto.', accent: 'mint' as const },
      { title: 'Entrega lista para equipo', description: 'Comunicación clara, decisiones prácticas e implementación limpia ayudan a que equipos remotos avancen mejor.', accent: 'sky' as const },
    ],
    ctaTitle: '¿Querés ver la experiencia detrás de las interfaces?',
    ctaDescription: 'Revisá el recorrido desde producto personal hasta equipos frontend remotos.',
    ctaLabel: 'Ver experiencia',
  },
};

export function AboutPage({ locale }: { locale: Locale }) {
  const page = contentFor(locale).about;
  const copy = pageCopy[locale];

  return (
    <div id="about-v3-root" className="bg-bone text-ink">
      <V3Hero
        eyebrow={page.eyebrow}
        title={page.title}
        description={page.description}
        panelTitle={copy.workingStyle}
        panelType="rows"
        rows={copy.rows.map((text, index) => ({ text, accent: index === 0 ? 'ember' : index === 1 ? 'mint' : 'sky' }))}
      />
      <section className="motion-section bg-paper py-16 sm:py-20" aria-labelledby="about-principles-title">
        <Container>
          <V3SectionIntro id="about-principles-title" title={copy.sectionTitle} description={copy.sectionDescription} />
          <V3CardGrid cards={copy.cards} />
        </Container>
      </section>
      <V3Cta title={copy.ctaTitle} description={copy.ctaDescription} href={pathFor(locale, 'experience')} label={copy.ctaLabel} />
    </div>
  );
}
