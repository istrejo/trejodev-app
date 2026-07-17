import { projectSlugs } from "@/content";
import { describe, expect, it } from "vitest";
import { locales, otherLocale } from "../i18n";
import {
  localizedPath,
  navRoutes,
  pathFor,
  projectDetailPath,
  routes,
  v4NavRoutes,
} from "../routes";

describe("route contracts", () => {
  it("publishes shared slugs for both locales", () => {
    expect(pathFor("en", "about")).toBe("/en/about");
    expect(pathFor("es", "about")).toBe("/es/about");
    expect(pathFor("en", "home")).toBe("/en");
    expect(pathFor("es", "home")).toBe("/es");
    expect(pathFor("en", "work")).toBe("/en/work");
  });

  it("defines the V4 primary navigation order", () => {
    expect(v4NavRoutes.map((route) => route.key)).toEqual([
      "home",
      "about",
      "work",
      "projects",
    ]);
  });

  it("keeps projects out of primary navigation", () => {
    expect(navRoutes.map((route) => route.key)).toEqual([
      "home",
      "about",
      "experience",
      "skills",
      "certifications",
      "contact",
    ]);
    expect(routes.find((route) => route.key === "projects")?.nav).toBe(false);
  });

  it("maps equivalent pages across language switching", () => {
    expect(otherLocale("en")).toBe("es");
    expect(localizedPath("/en/skills", "es")).toBe("/es/skills");
    expect(localizedPath("/es/contact", "en")).toBe("/en/contact");
    expect(localizedPath("/en/projects/racerlab/", "es")).toBe(
      "/es/projects/racerlab",
    );
    expect(locales).toEqual(["en", "es"]);
  });

  it("limits project details to approved shared slugs", () => {
    expect(projectSlugs).toEqual(["racerlab"]);
    expect(projectDetailPath("en", "racerlab")).toBe("/en/projects/racerlab");
    expect(projectDetailPath("es", "racerlab")).toBe("/es/projects/racerlab");
  });
});
