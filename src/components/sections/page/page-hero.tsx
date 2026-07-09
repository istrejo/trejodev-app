import { Container } from "@/components/ui/container";

import { accentClasses } from "./styles";
import type { HeroRow, HeroSignal, HeroStat, PageHeroProps } from "./types";

export function PageHero({
  eyebrow,
  title,
  description,
  panelTitle,
  panelType,
  rows = [],
  stats = [],
  signals = [],
  actions,
}: PageHeroProps) {
  return (
    <section
      className="motion-section bg-bone py-16 sm:py-20 lg:py-24"
      aria-labelledby="page-title"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_390px] lg:items-center">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-line bg-paper px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-ink shadow-soft">
              <span
                className={`h-2 w-2 rounded-full ${panelType === "contact" ? "bg-mint" : panelType === "snapshot" ? "bg-mint" : "bg-ember"}`}
                aria-hidden="true"
              />
              {eyebrow}
            </p>
            <h1
              id="page-title"
              className="mt-7 max-w-4xl font-display text-5xl font-black tracking-[-0.07em] text-ink sm:text-7xl"
            >
              {title}
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate sm:text-xl sm:leading-9">
              {description}
            </p>
          </div>

          <aside
            className="motion-card rounded-[1.75rem] bg-ink p-6 text-white shadow-soft sm:p-7"
            aria-label={panelTitle}
          >
            <h2 className="font-display text-2xl font-black tracking-[-0.05em]">
              {panelTitle}
            </h2>
            {panelType === "snapshot" ? (
              <SnapshotPanel stats={stats} signals={signals} />
            ) : null}
            {panelType === "contact" ? (
              <ContactSignalPanel signals={signals} actions={actions} />
            ) : null}
            {panelType === "rows" ? <DarkRows rows={rows} /> : null}
          </aside>
        </div>
      </Container>
    </section>
  );
}

function DarkRows({ rows }: { rows: HeroRow[] }) {
  return (
    <div className="mt-6 grid gap-3">
      {rows.map((row) => (
        <div
          className="grid min-h-16 grid-cols-[auto_1fr] items-center gap-4 rounded-2xl bg-zinc-900 p-4"
          key={row.text}
        >
          <span
            className={`h-10 w-2 rounded-full ${accentClasses[row.accent].split(" ")[0]}`}
            aria-hidden="true"
          />
          <p className="text-sm font-bold leading-6 text-white/85 sm:text-base">
            {row.text}
          </p>
        </div>
      ))}
    </div>
  );
}

function SnapshotPanel({
  stats,
  signals,
}: {
  stats: HeroStat[];
  signals: HeroSignal[];
}) {
  return (
    <>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {stats.map((stat) => (
          <div className="rounded-2xl bg-paper p-4 text-ink" key={stat.label}>
            <p className="font-display text-3xl font-black tracking-[-0.05em]">
              {stat.value}
            </p>
            <p className="mt-1 text-xs font-black uppercase tracking-[0.12em] text-slate">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-5 grid gap-3">
        {signals.map((signal) => (
          <div className="flex items-center gap-3" key={signal.label}>
            <span
              className={`h-2.5 w-2.5 rounded-full ${accentClasses[signal.accent].split(" ")[0]}`}
              aria-hidden="true"
            />
            <span className="text-sm font-black text-white">
              {signal.label}
            </span>
          </div>
        ))}
      </div>
    </>
  );
}

function ContactSignalPanel({
  signals,
  actions,
}: Pick<PageHeroProps, "actions" | "signals">) {
  return (
    <>
      <div className="mt-6 grid gap-3">
        {signals?.map((signal) => (
          <div className="rounded-2xl bg-zinc-900 p-4" key={signal.label}>
            <p
              className={`text-xs font-black uppercase tracking-[0.16em] ${accentClasses[signal.accent].split(" ")[1]}`}
            >
              {signal.label}
            </p>
            <p className="mt-2 break-words text-sm font-black text-white sm:text-base">
              {signal.value}
            </p>
          </div>
        ))}
      </div>
      {actions ? (
        <div className="mt-5 grid gap-3 sm:grid-cols-2">{actions}</div>
      ) : null}
    </>
  );
}
