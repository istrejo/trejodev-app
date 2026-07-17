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

test("RacerLab project pages use local product media and source repositories", async ({
  page,
}) => {
  for (const route of ["/en", "/es"] as const) {
    const locale = route.slice(1);
    await page.goto(`${route}/projects`);
    await expect(page.locator(".project-card img")).toHaveAttribute(
      "src",
      "/projects/raceplab/screen.png",
    );

    await page.goto(`${route}/projects/racerlab`);
    const gallery = page.locator(".project-gallery");
    await expect(gallery.getByRole("img")).toHaveCount(4);
    await expect(gallery.getByRole("img").nth(2)).toHaveAttribute(
      "src",
      /\/projects\/raceplab\/screen(?:%20| )3\.png/,
    );
    await expect(
      page.getByRole("link", {
        name:
          locale === "en" ? "View API repository" : "Ver repositorio de la API",
      }),
    ).toHaveAttribute("href", "https://github.com/istrejo/racerlab-api");
    await expect(
      page.getByRole("link", {
        name: locale === "en" ? "View web repository" : "Ver repositorio web",
      }),
    ).toHaveAttribute("href", "https://github.com/istrejo/racerlab-web");
  }
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

test("theme preference survives client-side navigation", async ({
  page,
}, testInfo) => {
  test.skip(
    testInfo.project.name.includes("mobile"),
    "Desktop navigation regression check",
  );
  await page.goto("/en");
  await page.getByRole("button", { name: "Toggle color theme" }).click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");

  await page.getByRole("banner").getByRole("link", { name: "About" }).click();
  await expect(page).toHaveURL(/\/en\/about\/?$/);
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");

  await page
    .getByRole("banner")
    .getByRole("link", { name: "Home", exact: true })
    .click();
  await expect(page).toHaveURL(/\/en\/?$/);
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
});

test("home leads with the role and introduces Alejandro Trejo", async ({
  page,
}) => {
  for (const route of ["/en", "/es"]) {
    await page.goto(route);
    await expect(page.locator("main h1")).toHaveText("Software Developer");
    await expect(page.locator("main")).toContainText("Alejandro Trejo");
    await expect(page.locator(".hero-meta")).toHaveCount(0);
    const heroLinks = page.locator(".page-hero .button-row a");
    await expect(heroLinks).toHaveCount(2);
    await expect(heroLinks.nth(0)).toHaveAttribute(
      "href",
      "https://linkedin.com/in/alejandrotrejodev",
    );
    await expect(heroLinks.nth(1)).toHaveAttribute(
      "href",
      "https://github.com/istrejo",
    );
    await expect(page.locator('link[rel="icon"]')).toHaveAttribute(
      "href",
      "/logo.png",
    );
    await expect(page.locator('link[rel="icon"]')).toHaveAttribute(
      "type",
      "image/png",
    );
  }
});

test("header logo is readable in each theme", async ({ page }) => {
  await page.emulateMedia({ colorScheme: "light" });
  await page.goto("/en");
  const logo = page.getByRole("img", { name: "Alejandro Trejo logo" });
  await expect(logo).toHaveAttribute("src", "/logo.png");
  await expect(logo).toHaveCSS("filter", "invert(1)");

  await page.getByRole("button", { name: "Toggle color theme" }).click();
  await expect(logo).toHaveCSS("filter", "none");
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

test("work keeps its Stitch-inspired chronology readable across viewports", async ({
  page,
}, testInfo) => {
  const errors: string[] = [];
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });
  page.on("pageerror", (error) => errors.push(error.message));

  await page.emulateMedia({ colorScheme: "light", reducedMotion: "reduce" });
  await page.goto("/en/work");

  await expect(page.locator(".work-hero h1")).toHaveText(
    "Real product work across frontend teams, mobile apps and UI systems.",
  );
  await expect(page.getByRole("heading", { name: "Chronology" })).toBeVisible();
  await expect(page.locator(".work-entry")).toHaveCount(6);
  await expect(page.locator(".work-timeline")).toHaveCSS(
    "position",
    "relative",
  );
  await expect(
    page.getByRole("link", { name: "View Projects" }),
  ).toHaveAttribute("href", "/en/projects");

  const entries = page.locator(".work-entry");
  const firstBox = await entries.first().boundingBox();
  const secondBox = await entries.nth(1).boundingBox();
  expect(firstBox).not.toBeNull();
  expect(secondBox).not.toBeNull();
  expect(secondBox!.y).toBeGreaterThan(firstBox!.y);

  if (testInfo.project.name.includes("mobile")) {
    await expect(page.locator(".work-entry-node").first()).toBeVisible();
    await expect(page.locator(".work-entry-date").first()).toBeVisible();
    for (const selector of [
      ".work-entry-role",
      ".work-entry-description",
      ".work-entry-date",
    ]) {
      const fontSize = await page
        .locator(selector)
        .first()
        .evaluate((element) =>
          Number.parseFloat(getComputedStyle(element).fontSize),
        );
      expect(fontSize).toBeGreaterThanOrEqual(11);
    }
  }

  await page.goto("/es/work");
  await expect(page.locator(".work-hero .work-kicker")).toContainText(
    "Trabajo",
  );

  expect(errors).toEqual([]);
});

test("English home has no obvious accessibility violations", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/en");
  const results = await new AxeBuilder({ page }).analyze();
  expect(results.violations).toEqual([]);
});
