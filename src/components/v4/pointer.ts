export type PointerState = "dot" | "ring" | "pill";

/** The subset of `Element` the resolver reads, so it can be tested without a DOM. */
export interface PointerNode {
  tagName: string;
  getAttribute(name: string): string | null;
  hasAttribute(name: string): boolean;
  parentElement: PointerNode | null;
}

const interactiveTags = new Set([
  "A",
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "SUMMARY",
]);

const isInteractive = (node: PointerNode) =>
  interactiveTags.has(node.tagName.toUpperCase()) ||
  node.getAttribute("role") === "button" ||
  (node.tagName.toUpperCase() === "LABEL" && node.hasAttribute("for"));

/** Walks up from the hovered node; the closest `data-cursor` or interactive ancestor decides. */
export function resolvePointerState(start: PointerNode | null): PointerState {
  for (let node = start; node; node = node.parentElement) {
    if (node.getAttribute("data-cursor") === "case-study") return "pill";
    if (isInteractive(node)) return "ring";
  }
  return "dot";
}
