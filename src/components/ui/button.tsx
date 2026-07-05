import Link from 'next/link';
import type { AnchorHTMLAttributes, PropsWithChildren } from 'react';

type ButtonLinkProps = PropsWithChildren<
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
    variant?: 'primary' | 'secondary' | 'ghost';
  }
>;

const variants = {
  primary: 'bg-ink text-white hover:bg-ember focus-visible:outline-ember',
  secondary: 'border border-line bg-paper text-ink hover:border-ink focus-visible:outline-ember',
  ghost: 'text-ink underline decoration-line decoration-2 underline-offset-8 hover:decoration-ember focus-visible:outline-ember',
};

export function ButtonLink({ children, className = '', variant = 'primary', href, ...props }: ButtonLinkProps) {
  const classes = `inline-flex min-h-11 items-center justify-center rounded-full px-5 py-2.5 text-sm font-bold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 ${variants[variant]} ${className}`;

  if (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('/cv/')) {
    return (
      <a className={classes} href={href} {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link className={classes} href={href} {...props}>
      {children}
    </Link>
  );
}
