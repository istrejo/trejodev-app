export function Badge({ children }: { children: string }) {
  return <span className="rounded-full border border-line bg-bone px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-slate">{children}</span>;
}
