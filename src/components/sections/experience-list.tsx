import { experienceItems } from "@/data/experience";
import { Badge } from "../ui/badge";
import { Card } from "../ui/card";
import { Container } from "../ui/container";

export function ExperienceList() {
  return (
    <section className="pb-20">
      <Container>
        <div className="grid gap-5">
          {experienceItems.map((item) => (
            <Card
              className="grid gap-6 md:grid-cols-[0.75fr_1.25fr]"
              key={`${item.company}-${item.dates}`}
            >
              <div>
                <p className="text-sm font-black uppercase tracking-[0.18em] text-ember">
                  {item.dates}
                </p>
                <h2 className="mt-3 font-display text-3xl font-black tracking-[-0.04em] text-ink">
                  {item.company}
                </h2>
                <p className="mt-2 font-bold text-slate">{item.role}</p>
                <p className="mt-1 text-sm text-slate">{item.location}</p>
              </div>
              <div>
                <p className="text-base leading-7 text-slate">{item.summary}</p>
                <ul className="mt-5 grid gap-2 text-sm leading-6 text-ink">
                  {item.highlights.map((highlight) => (
                    <li className="flex gap-3" key={highlight}>
                      <span
                        aria-hidden="true"
                        className="mt-2 h-2 w-2 rounded-full bg-ember"
                      />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.stack.map((technology) => (
                    <Badge key={technology}>{technology}</Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
