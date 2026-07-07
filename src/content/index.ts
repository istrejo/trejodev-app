import type { Locale } from "@/lib/i18n";
import { about as aboutEn } from "./en/about";
import { certifications as certificationsEn } from "./en/certifications";
import { contact as contactEn } from "./en/contact";
import { experience as experienceEn } from "./en/experience";
import { home as homeEn } from "./en/home";
import { skills as skillsEn } from "./en/skills";
import { about as aboutEs } from "./es/about";
import { certifications as certificationsEs } from "./es/certifications";
import { contact as contactEs } from "./es/contact";
import { experience as experienceEs } from "./es/experience";
import { home as homeEs } from "./es/home";
import { skills as skillsEs } from "./es/skills";

export const content = {
  en: {
    home: homeEn,
    about: aboutEn,
    experience: experienceEn,
    skills: skillsEn,
    certifications: certificationsEn,
    contact: contactEn,
  },
  es: {
    home: homeEs,
    about: aboutEs,
    experience: experienceEs,
    skills: skillsEs,
    certifications: certificationsEs,
    contact: contactEs,
  },
} as const;

export function contentFor(locale: Locale) {
  return content[locale];
}
