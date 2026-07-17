import type { Locale } from "@/lib/i18n";

export type PageText = {
  eyebrow: string;
  title: string;
  description: string;
};

export type HomeContent = PageText & {
  locale: Locale;
  role: string;
  location: string;
  primaryCta: string;
  secondaryCta: string;
  contactCta: string;
  signals: string[];
  proofTitle: string;
  proofRows: string[];
  lighthouseStat: string;
  bilingualStat: string;
  previewTitle: string;
  previewDescription: string;
  previewCards: {
    title: string;
    description: string;
    footer: string;
    accent: "ember" | "mint" | "sky";
  }[];
  footerCtaTitle: string;
  footerCtaDescription: string;
};

export type AboutContent = PageText & {
  paragraphs: string[];
  principles: string[];
};

export type ExperienceContent = PageText & {
  intro: string;
};

export type SkillsContent = PageText & {
  intro: string;
};

export type CertificationsContent = PageText & {
  intro: string;
};

export type ContactContent = PageText & {
  intro: string;
  copyEmail: string;
};

export type ProjectPlaceholderAsset = {
  kind: "placeholder";
  name: string;
};

export type ProjectPlaceholderLink = {
  kind: "disabled";
  reason: string;
};

export type ProjectContent = {
  slug: string;
  name: string;
  summary: string;
  role: string;
  period: string;
  locale: Locale;
  cover: ProjectPlaceholderAsset;
  screenshots: ProjectPlaceholderAsset[];
  publicUrl: ProjectPlaceholderLink;
};

export type ProjectsContent = PageText & {
  emptyState: string;
  projects: ProjectContent[];
};
