import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

import type { PageCtaProps } from "./types";

export function PageCta({ title, description, href, label }: PageCtaProps) {
  return (
    <section
      className="motion-section bg-ink py-16 text-white sm:py-20"
      aria-labelledby="page-cta-title"
    >
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-3xl">
            <h2
              id="page-cta-title"
              className="font-display text-4xl font-black tracking-[-0.06em] sm:text-5xl"
            >
              {title}
            </h2>
            <p className="mt-5 text-base leading-7 text-white/65">
              {description}
            </p>
          </div>
          <ButtonLink className="bg-ember text-ink hover:bg-white" href={href}>
            {label}
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
