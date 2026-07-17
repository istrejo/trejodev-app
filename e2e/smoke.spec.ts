import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const localizedRoutes = [
  "/en",
  "/en/about",
  "/en/work",
  "/en/skills",
  "/en/certifications",
  "/en/contact",
  "/en/projects",
  "/en/projects/racerlab",
  "/es",
  "/es/about",
  "/es/work",
  "/es/skills",
  "/es/certifications",
  "/es/contact",
  "/es/projects",
  "/es/projects/racerlab",
];

test("all localized routes render without console or resource errors", async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });
  page.on("pageerror", (error) => errors.push(error.message));

  for (const route of localizedRoutes) {
    const response = await page.goto(route);
    expect(response?.ok(), route).toBeTruthy();
    await expect(page.locator("main h1")).toBeVisible();
  }

  expect(errors).toEqual([]);
});

test("language switch keeps the equivalent project route", async ({
  page,
}, testInfo) => {
  await page.goto("/en/projects/racerlab");
  if (testInfo.project.name.includes("mobile")) {
    await page.locator("[data-nav-toggle]").click();
  }
  await page.locator('a[hreflang="es"]:visible').click();
  await expect(page).toHaveURL(/\/es\/projects\/racerlab\/?$/);
  await expect(page.locator("html")).toHaveAttribute("lang", "es");
});

test("theme preference persists", async ({ page }) => {
  await page.goto("/en");
  await page.getByRole("button", { name: "Toggle color theme" }).click();
  const theme = await page.locator("html").getAttribute("data-theme");
  await page.reload();
  await expect(page.locator("html")).toHaveAttribute(
    "data-theme",
    theme ?? "dark",
  );
});

test("home leads with the role and introduces Alejandro Trejo", async ({
  page,
}) => {
  for (const route of ["/en", "/es"]) {
    await page.goto(route);
    await expect(page.locator("main h1")).toHaveText("Software Developer");
    await expect(page.locator("main")).toContainText("Alejandro Trejo");
  }
});

test("contact only exposes GitHub and LinkedIn profiles", async ({ page }) => {
  await page.goto("/en/contact");
  const links = page.locator("main a");
  await expect(links).toHaveCount(2);
  await expect(links.nth(0)).toHaveAttribute(
    "href",
    "https://linkedin.com/in/alejandrotrejodev",
  );
  await expect(links.nth(1)).toHaveAttribute(
    "href",
    "https://github.com/istrejo",
  );
});

test("mobile menu opens and navigates", async ({ page }, testInfo) => {
  test.skip(
    !testInfo.project.name.includes("mobile"),
    "Mobile navigation check",
  );
  await page.goto("/en");
  const toggle = page.locator("[data-nav-toggle]");
  await toggle.click();
  await expect(toggle).toHaveAttribute("aria-expanded", "true");
  await page.keyboard.press("Tab");
  await page.keyboard.press("Escape");
  await expect(toggle).toBeFocused();
  await expect(toggle).toHaveAttribute("aria-expanded", "false");
  await toggle.click();
  await page
    .locator("#mobile-nav-panel")
    .getByRole("link", { name: "Projects" })
    .click();
  await expect(page).toHaveURL(/\/en\/projects\/?$/);
});

test("revealed content remains visible without JavaScript", async ({
  browser,
}) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto("/en");
  await expect(page.locator("[data-reveal]").first()).toBeVisible();
  await context.close();
});

test("English home has no obvious accessibility violations", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/en");
  const results = await new AxeBuilder({ page }).analyze();
  expect(results.violations).toEqual([]);
});
