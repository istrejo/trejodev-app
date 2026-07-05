import type { PropsWithChildren } from 'react';

export function Card({ children, className = '' }: PropsWithChildren<{ className?: string }>) {
  return <article className={`rounded-[1.5rem] border border-line bg-paper p-6 shadow-soft ${className}`}>{children}</article>;
}
