import { contentFor } from '@/content';
import { V3CardGrid, V3Cta, V3Hero, V3SectionIntro } from '@/components/sections/v3-page-sections';
import { Container } from '@/components/ui/container';
import type { Locale } from '@/lib/i18n';
import { pathFor } from '@/lib/routes';

const pageCopy = {
  en: {
    coreStack: 'Core stack',
    stackRows: ['React · Next.js · TypeScript', 'Angular · Ionic · Capacitor', 'Testing · Firebase · Supabase', 'Claude Code · Cursor · Codex'],
    sectionTitle: 'From framework choices to delivery quality.',
    sectionDescription: 'Each group is written to be scannable: clear category, practical capability, and enough signal to start a technical conversation.',
    cards: [
      { title: 'Frontend', description: 'React, Next.js, Angular, Ionic, Capacitor and TypeScript for modern web and mobile interfaces.', footer: 'React · Angular · Next.js · Ionic', accent: 'ember' as const },
      { title: 'State & architecture', description: 'Reusable structures for data flow, feature boundaries, micro frontends and maintainable UI systems.', footer: 'NgRx · Redux · Signals · Module Federation', accent: 'mint' as const },
      { title: 'UI systems', description: 'Styling and component workflows that keep interfaces consistent, responsive and easier to evolve.', footer: 'Tailwind · PrimeNG · Storybook · Responsive UI', accent: 'sky' as const },
      { title: 'Testing & quality', description: 'Practical testing habits for safer iteration and clearer confidence when shipping frontend changes.', footer: 'Karma · Jasmine · Jest · RTL', accent: 'ember' as const },
      { title: 'Cloud & tooling', description: 'Enough cloud and workflow context to connect frontend implementation with real delivery needs.', footer: 'Firebase · Supabase · Google Cloud · Docker', accent: 'mint' as const },
      { title: 'AI dev tools', description: 'Using AI as a development accelerator while keeping architectural decisions and code quality human-led.', footer: 'Claude Code · Cursor · Windsurf · Codex', accent: 'sky' as const },
    ],
    ctaTitle: 'Skills are useful when they solve real interface problems.',
    ctaDescription: 'That is the thread connecting the stack: product clarity, maintainability and frontend delivery.',
    ctaLabel: 'Get in touch',
  },
  es: {
    coreStack: 'Stack principal',
    stackRows: ['React · Next.js · TypeScript', 'Angular · Ionic · Capacitor', 'Testing · Firebase · Supabase', 'Claude Code · Cursor · Codex'],
    sectionTitle: 'De decisiones de framework a calidad de entrega.',
    sectionDescription: 'Cada grupo está escrito para escanearse fácil: categoría clara, capacidad práctica y señal suficiente para una conversación técnica.',
    cards: [
      { title: 'Frontend', description: 'React, Next.js, Angular, Ionic, Capacitor y TypeScript para interfaces web y móviles modernas.', footer: 'React · Angular · Next.js · Ionic', accent: 'ember' as const },
      { title: 'Estado y arquitectura', description: 'Estructuras reutilizables para flujo de datos, límites de features, microfrontends y sistemas UI mantenibles.', footer: 'NgRx · Redux · Signals · Module Federation', accent: 'mint' as const },
      { title: 'Sistemas UI', description: 'Flujos de estilos y componentes que mantienen interfaces consistentes, responsive y más fáciles de evolucionar.', footer: 'Tailwind · PrimeNG · Storybook · Responsive UI', accent: 'sky' as const },
      { title: 'Testing y calidad', description: 'Hábitos de prueba prácticos para iterar con más seguridad y confianza al entregar cambios frontend.', footer: 'Karma · Jasmine · Jest · RTL', accent: 'ember' as const },
      { title: 'Cloud y tooling', description: 'Contexto suficiente de cloud y flujo de trabajo para conectar frontend con necesidades reales de entrega.', footer: 'Firebase · Supabase · Google Cloud · Docker', accent: 'mint' as const },
      { title: 'Herramientas AI', description: 'Uso IA como acelerador de desarrollo mientras las decisiones de arquitectura y calidad siguen siendo humanas.', footer: 'Claude Code · Cursor · Windsurf · Codex', accent: 'sky' as const },
    ],
    ctaTitle: 'Las habilidades sirven cuando resuelven problemas reales de interfaz.',
    ctaDescription: 'Ese es el hilo que conecta el stack: claridad de producto, mantenibilidad y entrega frontend.',
    ctaLabel: 'Contactar',
  },
};

export function SkillsPage({ locale }: { locale: Locale }) {
  const page = contentFor(locale).skills;
  const copy = pageCopy[locale];

  return (
    <div id="skills-v3-root" className="bg-bone text-ink">
      <V3Hero
        eyebrow={page.eyebrow}
        title={page.title}
        description={page.description}
        panelTitle={copy.coreStack}
        panelType="rows"
        rows={copy.stackRows.map((text, index) => ({ text, accent: index === 0 || index === 3 ? 'ember' : index === 1 ? 'mint' : 'sky' }))}
      />
      <section className="motion-section bg-paper py-16 sm:py-20" aria-labelledby="skills-grid-title">
        <Container>
          <V3SectionIntro id="skills-grid-title" title={copy.sectionTitle} description={copy.sectionDescription} />
          <V3CardGrid cards={copy.cards} />
        </Container>
      </section>
      <V3Cta title={copy.ctaTitle} description={copy.ctaDescription} href={pathFor(locale, 'contact')} label={copy.ctaLabel} />
    </div>
  );
}
