import { skillGroups } from "@/data/skills";
import { Card } from "../ui/card";
import { Container } from "../ui/container";

export function SkillsGrid() {
  return (
    <section className="pb-20">
      <Container>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <Card key={group.title}>
              <h2 className="font-display text-2xl font-black tracking-[-0.04em] text-ink">
                {group.title}
              </h2>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    className="rounded-full bg-bone px-3 py-2 text-sm font-bold text-slate"
                    key={item}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
