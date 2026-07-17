import { describe, expect, it } from "vitest";
import { localeSwitchPath, v4NavItems } from "./chrome";

describe("v4 chrome", () => {
  it("keeps the V4 nav order", () => {
    expect(v4NavItems("en").map((item) => item.label)).toEqual([
      "Home",
      "About",
      "Work",
      "Projects",
    ]);
  });

  it("switches detail routes to the equivalent locale", () => {
    expect(
      localeSwitchPath("en", { key: "project-detail", slug: "racerlab" }),
    ).toBe("/es/projects/racerlab");
  });
});
