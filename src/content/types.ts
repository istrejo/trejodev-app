import type { Locale } from "@/lib/i18n";

export type PageText = {
  eyebrow: string;
  title: string;
  description: string;
};

export type HomeTimelineEntry = readonly [
  mark: string,
  company: string,
  role: string,
  description: string,
  dates: string,
  emphasized: boolean,
];

export type HomeContent = PageText & {
  locale: Locale;
  proofTitle: string;
  proofHeading: string;
  proofDescription: string;
  proofLabels: string[];
  proofRows: string[];
  timelineTitle: string;
  timelineDescription: string;
  timelineEntries: HomeTimelineEntry[];
  heroStatus: string;
  heroPromise: string;
  heroMeta: string;
  ctaWork: string;
  ctaContact: string;
  metricsLabel: string;
  metrics: { value: string; label: string }[];
  workHeading: string;
  stackLabel: string;
  caseStudyLabel: string;
  currentLabel: string;
  viewAllWork: string;
  contactHeading: string;
  contactDescription: string;
};

export type AboutContent = PageText & {
  paragraphs: string[];
  networksLabel: string;
  principlesTitle: string;
  principles: {
    title: string;
    description: string;
  }[];
  focusTitle: string;
  focusRows: {
    label: string;
    value: string;
  }[];
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
  profilesTitle: string;
  profilesDescription: string;
};

export type ProjectImage = {
  src: string;
  alt: string;
  caption: string;
  width?: number;
  height?: number;
};

export type ProjectRepository = {
  label: string;
  href: string;
};

export type ProjectSection = {
  title: string;
  description: string;
};

export type ProjectContent = {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  role: string;
  period: string;
  locale: Locale;
  client?: string;
  status?: string;
  contribution?: string;
  stack?: readonly string[];
  liveUrl?: string;
  cover: ProjectImage;
  screenshots: ProjectImage[];
  foundation: ProjectSection[];
  roadmap?: ProjectSection;
  repositories: ProjectRepository[];
};

export type ProjectsContent = PageText & {
  emptyState: string;
  projects: ProjectContent[];
};
