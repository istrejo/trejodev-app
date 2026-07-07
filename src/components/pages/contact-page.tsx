import { contentFor } from "@/content";
import {
  ButtonLink,
  V3CardGrid,
  V3Hero,
  V3SectionIntro,
} from "@/components/sections/v3-page-sections";
import { Container } from "@/components/ui/container";
import { CopyEmailButton } from "@/components/ui/copy-email-button";
import { cvAssets } from "@/lib/cv";
import type { Locale } from "@/lib/i18n";
import { contactPageCopy } from "@/translations/pages";

const email = "istrejo2106@gmail.com";

export function ContactPage({ locale }: { locale: Locale }) {
  const page = contentFor(locale).contact;
  const copy = contactPageCopy(email)[locale];

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
            <CopyEmailButton
              email={email}
              label={page.copyEmail}
              copiedLabel={copy.copied}
              failedLabel={copy.copyFailed}
            />
            <ButtonLink
              className="bg-paper text-ink hover:bg-ember"
              href={`mailto:${email}`}
            >
              {copy.sendEmail}
            </ButtonLink>
          </>
        }
      />
      <section
        className="motion-section bg-paper py-16 sm:py-20"
        aria-labelledby="contact-paths-title"
      >
        <Container>
          <V3SectionIntro
            id="contact-paths-title"
            title={copy.sectionTitle}
            description={copy.sectionDescription}
          />
          <V3CardGrid cards={copy.cards} />
        </Container>
      </section>
      <section
        className="motion-section bg-ink py-16 text-white sm:py-20"
        aria-labelledby="contact-quick-links-title"
      >
        <Container>
          <div className="grid gap-8 lg:grid-cols-[360px_1fr] lg:items-start">
            <V3SectionIntro
              id="contact-quick-links-title"
              title={copy.quickLinks}
              description={copy.quickLinksDescription}
              dark
            />
            <div className="grid gap-4">
              {[
                {
                  label: "LinkedIn",
                  value: "linkedin.com/in/alejandrotrejodev",
                  href: "https://linkedin.com/in/alejandrotrejodev",
                },
                {
                  label: "GitHub",
                  value: "github.com/istrejo",
                  href: "https://github.com/istrejo",
                },
                {
                  label: copy.cvFiles,
                  value: copy.cvFilesValue,
                  href: locale === "en" ? cvAssets.en.href : cvAssets.es.href,
                },
              ].map((link) => (
                <a
                  className="motion-card flex min-h-16 flex-col gap-2 rounded-[1.125rem] bg-zinc-900 px-6 py-4 transition duration-300 hover:-translate-y-1 hover:bg-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ember sm:flex-row sm:items-center sm:justify-between"
                  href={link.href}
                  key={link.label}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                >
                  <span className="font-black text-white">{link.label}</span>
                  <span className="break-words text-sm font-bold text-white/65">
                    {link.value}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
