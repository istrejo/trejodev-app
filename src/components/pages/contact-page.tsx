import { contentFor } from "@/content";
import {
  PageCardGrid,
  PageHero,
  PageSectionIntro,
} from "@/components/sections/page";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { CopyEmailButton } from "@/components/ui/copy-email-button";
import { profileLinks } from "@/data/links";
import type { Locale } from "@/lib/i18n";
import { contactPageCopy } from "@/translations/pages";

const emailLink = profileLinks.find((link) => link.kind === "email");

if (!emailLink) {
  throw new Error("Missing email profile link.");
}

const email = emailLink.value;

export function ContactPage({ locale }: { locale: Locale }) {
  const page = contentFor(locale).contact;
  const copy = contactPageCopy(email)[locale];

  return (
    <div id="contact-page-root" className="bg-bone text-ink">
      <PageHero
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
          <PageSectionIntro
            id="contact-paths-title"
            title={copy.sectionTitle}
            description={copy.sectionDescription}
          />
          <PageCardGrid cards={copy.cards} />
        </Container>
      </section>
      <section
        className="motion-section bg-ink py-16 text-white sm:py-20"
        aria-labelledby="contact-quick-links-title"
      >
        <Container>
          <div className="grid gap-8 lg:grid-cols-[360px_1fr] lg:items-start">
            <PageSectionIntro
              id="contact-quick-links-title"
              title={copy.quickLinks}
              description={copy.quickLinksDescription}
              dark
            />
            <div className="grid gap-4">
              {profileLinks.map((link) => (
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
