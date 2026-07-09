import type { PageSectionIntroProps } from "./types";

export function PageSectionIntro({
  id,
  title,
  description,
  dark = false,
}: PageSectionIntroProps) {
  return (
    <div className="grid gap-6 lg:grid-cols-[520px_1fr] lg:items-end">
      <h2
        id={id}
        className={`font-display text-4xl font-black tracking-[-0.06em] sm:text-5xl ${dark ? "text-white" : "text-ink"}`}
      >
        {title}
      </h2>
      <p
        className={`text-base leading-7 ${dark ? "text-white/65" : "text-slate"}`}
      >
        {description}
      </p>
    </div>
  );
}
