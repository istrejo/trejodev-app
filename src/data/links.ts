export type ProfileLink = {
  kind: 'email' | 'linkedin' | 'github';
  href: string;
  label: string;
  value: string;
};

export const profileLinks: ProfileLink[] = [
  { kind: 'email', href: 'mailto:istrejo2106@gmail.com', label: 'Email', value: 'istrejo2106@gmail.com' },
  { kind: 'linkedin', href: 'https://linkedin.com/in/alejandrotrejodev', label: 'LinkedIn', value: 'linkedin.com/in/alejandrotrejodev' },
  { kind: 'github', href: 'https://github.com/istrejo', label: 'GitHub', value: 'github.com/istrejo' },
];
