import type { PageText } from "@/content/types";
import { Container } from "../ui/container";
import { SectionHeader } from "../ui/section-header";

export function PageHero({ content }: { content: PageText }) {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeader
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
        />
      </Container>
    </section>
  );
}
