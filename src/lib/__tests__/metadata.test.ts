import { describe, expect, it } from "vitest";
import { canonicalUrl, pageMetadata } from "../metadata";

describe("metadata", () => {
  it("creates localized titles and alternates", () => {
    const metadata = pageMetadata(
      "es",
      "contact",
      "Contacto",
      "Mensaje localizado",
    );
    expect(metadata.title).toBe("Contacto | TrejoDev - Software Developer");
    expect(metadata.description).toBe("Mensaje localizado");
    expect(metadata.alternates?.languages).toMatchObject({
      en: expect.stringContaining("/en/contact"),
      es: expect.stringContaining("/es/contact"),
    });
  });

  it("keeps detail canonicals and alternates trailing-slash-free", () => {
    const metadata = pageMetadata("en", {
      key: "project-detail",
      slug: "racerlab",
    });

    expect(
      canonicalUrl("en", { key: "project-detail", slug: "racerlab" }),
    ).toBe("https://trejodev.com/en/projects/racerlab");
    expect(metadata.alternates?.canonical).toBe(
      "https://trejodev.com/en/projects/racerlab",
    );
    expect(metadata.alternates?.languages).toEqual({
      en: "https://trejodev.com/en/projects/racerlab",
      es: "https://trejodev.com/es/projects/racerlab",
    });
  });

  it("uses Software Developer in the fallback SEO description", () => {
    const metadata = pageMetadata("en", "contact");

    expect(metadata.description).toContain("Software Developer");
    expect(metadata.openGraph.description).toBe(metadata.description);
    expect(metadata.twitter.description).toBe(metadata.description);
  });
});
