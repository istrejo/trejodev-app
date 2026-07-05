import { certifications } from '@/data/certifications';
import { Card } from '../ui/card';
import { Container } from '../ui/container';

export function CertificationList() {
  return (
    <section className="pb-20">
      <Container>
        <div className="grid gap-4 md:grid-cols-2">
          {certifications.map((certification) => (
            <Card className="flex items-start justify-between gap-5" key={`${certification.title}-${certification.year}`}>
              <div>
                <h2 className="font-display text-xl font-black tracking-[-0.03em] text-ink">{certification.title}</h2>
                <p className="mt-2 text-sm font-bold text-slate">{certification.issuer}</p>
              </div>
              <span className="rounded-full bg-ink px-3 py-1 text-xs font-black text-white">{certification.year}</span>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
