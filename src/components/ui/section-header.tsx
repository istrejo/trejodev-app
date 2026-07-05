type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <div className="max-w-3xl">
      <p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-ember">{eyebrow}</p>
      <h1 className="font-display text-4xl font-black tracking-[-0.05em] text-ink sm:text-5xl lg:text-6xl">{title}</h1>
      {description ? <p className="mt-6 text-lg leading-8 text-slate">{description}</p> : null}
    </div>
  );
}
