import { describe, expect, it } from "vitest";
import { resolvePointerState, type PointerNode } from "./pointer";

const node = (
  tagName: string,
  attrs: Record<string, string> = {},
  parentElement: PointerNode | null = null,
): PointerNode => ({
  tagName: tagName.toUpperCase(),
  getAttribute: (name) => attrs[name] ?? null,
  hasAttribute: (name) => name in attrs,
  parentElement,
});

describe("resolvePointerState", () => {
  it("is a dot over plain content", () => {
    const section = node("section");
    expect(resolvePointerState(node("p", {}, section))).toBe("dot");
  });

  it("is a ring over interactive controls", () => {
    expect(resolvePointerState(node("a", { href: "/en" }))).toBe("ring");
    expect(resolvePointerState(node("button"))).toBe("ring");
    expect(resolvePointerState(node("div", { role: "button" }))).toBe("ring");
    expect(resolvePointerState(node("label", { for: "x" }))).toBe("ring");
    expect(resolvePointerState(node("label"))).toBe("dot");
  });

  it("is a ring over a child of a control", () => {
    const button = node("button");
    expect(resolvePointerState(node("span", {}, button))).toBe("ring");
  });

  it("is a pill inside a case-study target, even when it is an anchor", () => {
    const link = node("a", {
      href: "/en/projects/x",
      "data-cursor": "case-study",
    });
    const img = node("img", {}, link);
    expect(resolvePointerState(img)).toBe("pill");
    expect(resolvePointerState(link)).toBe("pill");
  });

  it("lets the closest ancestor decide", () => {
    const card = node("div", { "data-cursor": "case-study" });
    const button = node("button", {}, card);
    expect(resolvePointerState(node("span", {}, button))).toBe("ring");
    const inner = node(
      "a",
      { href: "/" },
      node("div", { "data-cursor": "case-study" }),
    );
    expect(resolvePointerState(inner)).toBe("ring");
  });
});
