import type { PropsWithChildren } from "react";

export function Card({
  children,
  className = "",
}: PropsWithChildren<{ className?: string }>) {
  return (
    <article
      className={`rounded-[1.5rem] border border-line bg-paper p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-ink/25 hover:shadow-[0_28px_80px_rgba(10,10,10,0.12)] ${className}`}
    >
      {children}
    </article>
  );
}
