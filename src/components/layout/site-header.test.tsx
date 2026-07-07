import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { SiteHeader } from "./site-header";

vi.mock("next/navigation", () => ({
  usePathname: () => "/en/about",
}));

describe("SiteHeader", () => {
  it("renders approved navigation without projects", () => {
    render(<SiteHeader locale="en" />);
    expect(screen.getByRole("link", { name: "TrejoDev" })).toHaveAttribute(
      "href",
      "/en",
    );
    expect(
      screen.getAllByRole("link", { name: "About" }).length,
    ).toBeGreaterThan(0);
    expect(
      screen.queryByRole("link", { name: "Projects" }),
    ).not.toBeInTheDocument();
  });

  it("switches to the equivalent page in the other locale", () => {
    render(<SiteHeader locale="en" />);
    expect(
      screen.getByRole("link", { name: "Switch language to Spanish" }),
    ).toHaveAttribute("href", "/es/about");
  });
});
