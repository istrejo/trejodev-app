export type ProfileLink = {
  kind: "linkedin" | "github";
  href: string;
  label: string;
  value: string;
};

export const profileLinks: ProfileLink[] = [
  {
    kind: "linkedin",
    href: "https://linkedin.com/in/alejandrotrejodev",
    label: "LinkedIn",
    value: "linkedin.com/in/alejandrotrejodev",
  },
  {
    kind: "github",
    href: "https://github.com/istrejo",
    label: "GitHub",
    value: "github.com/istrejo",
  },
];
