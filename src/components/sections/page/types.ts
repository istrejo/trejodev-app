import type { ReactNode } from "react";

export type Accent = "ember" | "mint" | "sky";

export type HeroSignal = {
  label: string;
  value: string;
  accent: Accent;
};

export type HeroRow = {
  text: string;
  accent: Accent;
};

export type HeroStat = {
  value: string;
  label: string;
};

export type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  panelTitle: string;
  panelType: "rows" | "snapshot" | "contact";
  rows?: HeroRow[];
  stats?: HeroStat[];
  signals?: HeroSignal[];
  actions?: ReactNode;
};

export type PageSectionIntroProps = {
  id: string;
  title: string;
  description: string;
  dark?: boolean;
};

export type PageCard = {
  title: string;
  description: string;
  footer?: string;
  accent: Accent;
};

export type PageCardGridProps = {
  cards: PageCard[];
};

export type PageCtaProps = {
  title: string;
  description: string;
  href: string;
  label: string;
};
