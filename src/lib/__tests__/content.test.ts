import { content, projectSlugs } from "@/content";
import type { ProjectContent } from "@/content/types";
import { describe, expect, it } from "vitest";

const locales = ["en", "es"] as const;
const removedHomeFields = [
  "signals",
  "lighthouseStat",
  "bilingualStat",
  "previewTitle",
  "previewDescription",
  "previewCta",
  "previewCards",
  "footerCtaTitle",
  "footerCtaDescription",
];

describe("home content", () => {
  it.each(locales)(
    "lists FreshCommerce first as the current role (%s)",
    (locale) => {
      const entries = content[locale].home.timelineEntries;
      expect(entries).toHaveLength(7);
      expect(entries[0]?.slice(0, 3)).toEqual([
        "FC",
        "FreshCommerce",
        "Software Developer",
      ]);
      expect(entries[0]?.[5]).toBe(true);
      expect(entries.filter((entry) => entry[5])).toHaveLength(1);
    },
  );

  it.each(locales)("drops unused and stale fields (%s)", (locale) => {
    const home = content[locale].home;
    for (const field of removedHomeFields)
      expect(home).not.toHaveProperty(field);
    const serialized = JSON.stringify(content[locale]);
    for (const stale of ["Frntend", "Work slice", "Contact slice", "Pendie"]) {
      expect(serialized).not.toContain(stale);
    }
  });
});

describe("projects content", () => {
  it("publishes Mirai Go first, followed by RacerLab", () => {
    expect(projectSlugs).toEqual(["miraigo", "racerlab"]);
  });

  it.each(locales)(
    "describes Mirai Go as a live product without repositories (%s)",
    (locale) => {
      const project: ProjectContent = content[locale].projects.projects[0];
      expect(project.slug).toBe("miraigo");
      expect(project).toMatchObject({ liveUrl: "https://miraigo.com" });
      expect(project.repositories).toEqual([]);
      expect(project.stack).toEqual([
        "WordPress FSE",
        "Gutenberg",
        "React",
        "HubSpot Forms",
      ]);
      expect(project.screenshots.map((shot) => shot.src)).toEqual([
        "/projects/miraigo/home.jpg",
        "/projects/miraigo/booking.jpg",
        "/projects/miraigo/mobile.jpg",
      ]);
    },
  );
});
