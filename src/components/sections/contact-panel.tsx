import { profileLinks } from "@/data/links";
import type { ContactContent } from "@/content/types";
import { cvAssets } from "@/lib/cv";
import { ButtonLink } from "../ui/button";
import { Card } from "../ui/card";
import { Container } from "../ui/container";

export function ContactPanel({ content }: { content: ContactContent }) {
  return (
    <section className="pb-20">
      <Container>
        <Card className="bg-ink text-white">
          <p className="max-w-2xl text-lg leading-8 text-white/75">
            {content.intro}
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {profileLinks.map((link) => (
              <a
                className="rounded-2xl border border-white/15 p-5 transition hover:border-ember focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ember"
                href={link.href}
                key={link.kind}
                rel="noreferrer"
                target={link.kind === "email" ? undefined : "_blank"}
              >
                <span className="text-xs font-black uppercase tracking-[0.2em] text-white/45">
                  {link.label}
                </span>
                <span className="mt-3 block break-words font-bold text-white">
                  {link.value}
                </span>
              </a>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href={cvAssets.en.href} variant="secondary">
              {content.cvEnglish}
            </ButtonLink>
            <ButtonLink href={cvAssets.es.href} variant="secondary">
              {content.cvSpanish}
            </ButtonLink>
          </div>
        </Card>
      </Container>
    </section>
  );
}
