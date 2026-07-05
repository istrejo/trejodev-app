import { contentFor } from '@/content';
import { ButtonLink, V3CardGrid, V3Hero, V3SectionIntro } from '@/components/sections/v3-page-sections';
import { Container } from '@/components/ui/container';
import { CopyEmailButton } from '@/components/ui/copy-email-button';
import { cvAssets } from '@/lib/cv';
import type { Locale } from '@/lib/i18n';

const email = 'istrejo2106@gmail.com';

const pageCopy = {
  en: {
    contactSignal: 'Contact signal',
    copied: 'Email copied',
    copyFailed: 'Copy failed',
    sendEmail: 'Send email',
    signals: [
      { label: 'Email', value: email, accent: 'ember' as const },
      { label: 'Location', value: 'Tenerife, Spain · Remote-friendly', accent: 'mint' as const },
      { label: 'Languages', value: 'Spanish native · English B1 improving', accent: 'sky' as const },
    ],
    sectionTitle: 'Direct paths, no unnecessary friction.',
    sectionDescription: 'Start a conversation, review technical context or download the CV in the right language without extra friction.',
    cards: [
      { title: 'Email first', description: 'A simple mailto path plus copy-email action for quick outreach.', footer: 'mailto · copy email', accent: 'ember' as const },
      { title: 'Social context', description: 'LinkedIn and GitHub provide professional context without adding visual clutter.', footer: 'LinkedIn · GitHub', accent: 'mint' as const },
      { title: 'CV downloads', description: 'English and Spanish CV actions stay visible, accessible and easy to scan.', footer: 'CV EN · CV ES', accent: 'sky' as const },
    ],
    quickLinks: 'Quick links',
    quickLinksDescription: 'External links open in a new tab and keep accessible focus states.',
    cvFiles: 'CV files',
    cvFilesValue: 'English CV · Spanish CV',
  },
  es: {
    contactSignal: 'Señal de contacto',
    copied: 'Email copiado',
    copyFailed: 'No se pudo copiar',
    sendEmail: 'Enviar email',
    signals: [
      { label: 'Email', value: email, accent: 'ember' as const },
      { label: 'Ubicación', value: 'Tenerife, España · Remoto', accent: 'mint' as const },
      { label: 'Idiomas', value: 'Español nativo · Inglés B1 en mejora', accent: 'sky' as const },
    ],
    sectionTitle: 'Caminos directos, sin fricción innecesaria.',
    sectionDescription: 'Iniciá una conversación, revisá contexto técnico o descargá el CV adecuado sin fricción extra.',
    cards: [
      { title: 'Email primero', description: 'Un camino simple por mailto más acción para copiar el email rápidamente.', footer: 'mailto · copiar email', accent: 'ember' as const },
      { title: 'Contexto social', description: 'LinkedIn y GitHub aportan contexto profesional sin sumar ruido visual.', footer: 'LinkedIn · GitHub', accent: 'mint' as const },
      { title: 'Descargas de CV', description: 'Las acciones de CV en inglés y español permanecen visibles, accesibles y fáciles de escanear.', footer: 'CV EN · CV ES', accent: 'sky' as const },
    ],
    quickLinks: 'Enlaces rápidos',
    quickLinksDescription: 'Los enlaces externos abren en una nueva pestaña y mantienen estados de foco accesibles.',
    cvFiles: 'Archivos CV',
    cvFilesValue: 'CV en inglés · CV en español',
  },
};

export function ContactPage({ locale }: { locale: Locale }) {
  const page = contentFor(locale).contact;
  const copy = pageCopy[locale];

  return (
    <div id="contact-v3-root" className="bg-bone text-ink">
      <V3Hero
        eyebrow={page.eyebrow}
        title={page.title}
        description={page.description}
        panelTitle={copy.contactSignal}
        panelType="contact"
        signals={copy.signals}
        actions={
          <>
            <CopyEmailButton email={email} label={page.copyEmail} copiedLabel={copy.copied} failedLabel={copy.copyFailed} />
            <ButtonLink className="bg-paper text-ink hover:bg-ember" href={`mailto:${email}`}>
              {copy.sendEmail}
            </ButtonLink>
          </>
        }
      />
      <section className="motion-section bg-paper py-16 sm:py-20" aria-labelledby="contact-paths-title">
        <Container>
          <V3SectionIntro id="contact-paths-title" title={copy.sectionTitle} description={copy.sectionDescription} />
          <V3CardGrid cards={copy.cards} />
        </Container>
      </section>
      <section className="motion-section bg-ink py-16 text-white sm:py-20" aria-labelledby="contact-quick-links-title">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[360px_1fr] lg:items-start">
            <V3SectionIntro id="contact-quick-links-title" title={copy.quickLinks} description={copy.quickLinksDescription} dark />
            <div className="grid gap-4">
              {[
                { label: 'LinkedIn', value: 'linkedin.com/in/alejandrotrejodev', href: 'https://linkedin.com/in/alejandrotrejodev' },
                { label: 'GitHub', value: 'github.com/istrejo', href: 'https://github.com/istrejo' },
                { label: copy.cvFiles, value: copy.cvFilesValue, href: locale === 'en' ? cvAssets.en.href : cvAssets.es.href },
              ].map((link) => (
                <a className="motion-card flex min-h-16 flex-col gap-2 rounded-[1.125rem] bg-zinc-900 px-6 py-4 transition duration-300 hover:-translate-y-1 hover:bg-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ember sm:flex-row sm:items-center sm:justify-between" href={link.href} key={link.label} rel={link.href.startsWith('http') ? 'noreferrer' : undefined} target={link.href.startsWith('http') ? '_blank' : undefined}>
                  <span className="font-black text-white">{link.label}</span>
                  <span className="break-words text-sm font-bold text-white/65">{link.value}</span>
                </a>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
