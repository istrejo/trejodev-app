import { accentClasses } from "./styles";
import type { PageCardGridProps } from "./types";

export function PageCardGrid({ cards }: PageCardGridProps) {
  return (
    <div className="mt-10 grid gap-5 md:grid-cols-3">
      {cards.map((card, index) => (
        <article
          className={`motion-card motion-delay-${Math.min(index + 1, 3)} flex min-h-[14.5rem] flex-col rounded-[1.5rem] border border-line bg-bone p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-ink/25 hover:shadow-[0_28px_80px_rgba(10,10,10,0.12)]`}
          key={card.title}
        >
          <span
            className={`h-2 w-12 rounded-full ${accentClasses[card.accent].split(" ")[0]}`}
            aria-hidden="true"
          />
          <h3 className="mt-6 font-display text-2xl font-black tracking-[-0.05em] text-ink">
            {card.title}
          </h3>
          <p className="mt-4 text-sm leading-7 text-slate">
            {card.description}
          </p>
          {card.footer ? (
            <p className="mt-auto pt-6 text-xs font-black uppercase leading-5 tracking-[0.14em] text-ink">
              {card.footer}
            </p>
          ) : null}
        </article>
      ))}
    </div>
  );
}
