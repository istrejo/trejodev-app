import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

const read = (path: string) => readFileSync(resolve(process.cwd(), path), "utf8");

describe("root path", () => {
  it("redirects at the edge with a temporary redirect to the default locale", () => {
    const rules = read("public/_redirects").split("\n").map((line) => line.trim());

    expect(rules).toContain("/ /en 302");
  });

  it("renders no visible content while the fallback redirect runs", () => {
    const page = read("src/pages/index.astro");

    expect(page).toContain('content="0; url=/en"');
    expect(page).not.toContain("Choose your language");
    expect(page).not.toMatch(/<body>[\s\S]*\S[\s\S]*<\/body>/);
  });
});
