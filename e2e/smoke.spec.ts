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
  "/en/projects/miraigo",
  "/en/projects/racerlab",
  "/es",
  "/es/about",
  "/es/work",
  "/es/skills",
  "/es/certifications",
  "/es/contact",
  "/es/projects",
  "/es/projects/miraigo",
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
    await expect(page.locator(".project-card img")).toHaveCount(2);
    await expect(page.locator(".project-card img").first()).toHaveAttribute(
      "src",
      "/projects/miraigo/home.jpg",
    );
    await expect(page.locator(".project-card img").nth(1)).toHaveAttribute(
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

test("home leads with the person and the current role", async ({ page }) => {
  for (const route of ["/en", "/es"]) {
    await page.goto(route);
    await expect(page.locator("main h1")).toHaveText("Alejandro Trejo");
    await expect(page.locator(".hero-status")).toContainText("FreshCommerce");
    await expect(page.locator(".hero-meta")).toContainText("Tenerife");
    const heroLinks = page.locator(".page-hero .button-row a");
    await expect(heroLinks).toHaveCount(2);
    await expect(heroLinks.nth(0)).toHaveAttribute("href", "#work");
    await expect(heroLinks.nth(1)).toHaveAttribute("href", `${route}/contact`);
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

const stackLabel = {
  "/en": "Stack",
  "/es": "Tecnologías",
};

test("home shows verified metrics, selected work, experience and contact", async ({
  page,
}) => {
  for (const route of ["/en", "/es"] as const) {
    await page.goto(route);

    const metrics = page.locator(".metric");
    await expect(metrics).toHaveCount(4);
    await expect(metrics.nth(0)).toContainText("−80%");
    await expect(metrics.nth(1)).toContainText("50→90");
    await expect(metrics.nth(2).locator(".metric-value")).toHaveText("7");
    await expect(metrics.nth(3)).toContainText("4+");

    const work = page.locator("#work");
    const features = work.locator(".work-feature");
    await expect(features).toHaveCount(2);
    await expect(
      features.nth(0).getByRole("list", { name: stackLabel[route] }),
    ).toBeVisible();
    await expect(features.nth(0)).toContainText("Mirai Go");
    await expect(features.nth(0)).toContainText("WordPress FSE");
    await expect(features.nth(0)).toContainText("HubSpot Forms");
    await expect(
      features.nth(0).locator('a[href="https://miraigo.com"]'),
    ).toHaveAttribute("target", "_blank");
    await expect(
      features.nth(0).locator(`a[href="${route}/projects/miraigo"]`),
    ).toHaveCount(1);
    await expect(features.nth(1)).toContainText("RacerLab");
    await expect(
      features.nth(1).locator(`a[href="${route}/projects/racerlab"]`),
    ).toHaveCount(1);
    await expect(features.nth(0).locator("img")).toHaveCount(3);

    const experience = page.locator(".home-experience li");
    await expect(experience).toHaveCount(7);
    await expect(experience.first()).toContainText("FreshCommerce");
    await expect(page.locator(".badge-current")).toHaveCount(1);
    await expect(
      page.locator(`.home-experience a[href="${route}/work"]`),
    ).toHaveCount(1);

    const contactLinks = page.locator("#contact a");
    await expect(contactLinks).toHaveCount(2);
    await expect(contactLinks.nth(0)).toHaveAttribute(
      "href",
      "https://linkedin.com/in/alejandrotrejodev",
    );
    await expect(contactLinks.nth(1)).toHaveAttribute(
      "href",
      "https://github.com/istrejo",
    );
    await expect(page.locator("main")).not.toContainText("@");
  }
});

for (const viewport of [undefined, { width: 390, height: 844 }] as const) {
  for (const route of ["/en", "/es"]) {
    const size = viewport ? `${viewport.width}px viewport` : "default viewport";
    test(`home ${route} stays inside the viewport and meets touch targets (${size})`, async ({
      page,
    }) => {
      if (viewport) await page.setViewportSize(viewport);
      await page.goto(route);
      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth - window.innerWidth,
      );
      expect(overflow).toBeLessThanOrEqual(0);
      const links = page.locator("main .button");
      const count = await links.count();
      expect(count).toBeGreaterThan(0);
      for (let index = 0; index < count; index += 1) {
        const box = await links.nth(index).boundingBox();
        expect(box?.height ?? 0).toBeGreaterThanOrEqual(44);
      }
    });
  }
}

test("project detail renders the live link and hides empty repositories", async ({
  page,
}) => {
  await page.goto("/en/projects/miraigo");
  const live = page.getByRole("link", { name: /Visit the live site/ });
  await expect(live).toHaveAttribute("href", "https://miraigo.com");
  await expect(live).toHaveAttribute("target", "_blank");
  await expect(live).toHaveAttribute("rel", /noopener/);
  await expect(
    page.getByRole("heading", { name: "Source repositories" }),
  ).toHaveCount(0);
  await expect(page.locator("#project-repositories")).toHaveCount(0);

  await page.goto("/en/projects/racerlab");
  await expect(
    page.getByRole("link", { name: /Visit the live site/ }),
  ).toHaveCount(0);
  await expect(
    page.getByRole("heading", { name: "Source repositories" }),
  ).toBeVisible();
  await expect(page.locator(".project-repositories a")).toHaveCount(2);
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
  await expect(page.locator(".work-entry")).toHaveCount(7);
  await expect(page.locator(".work-entry").first()).toContainText(
    "FreshCommerce",
  );
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

for (const scheme of ["light", "dark"] as const) {
  test(`English home has no accessibility violations (${scheme})`, async ({
    page,
  }) => {
    await page.emulateMedia({ colorScheme: scheme, reducedMotion: "reduce" });
    await page.goto("/en");
    const results = await new AxeBuilder({ page }).analyze();
    expect(results.violations).toEqual([]);
  });

  test(`Spanish home has no accessibility violations (${scheme})`, async ({
    page,
  }) => {
    await page.emulateMedia({ colorScheme: scheme, reducedMotion: "reduce" });
    await page.goto("/es");
    const results = await new AxeBuilder({ page }).analyze();
    expect(results.violations).toEqual([]);
  });
}

test("project detail has no accessibility violations in dark theme", async ({
  page,
}) => {
  await page.emulateMedia({ colorScheme: "dark", reducedMotion: "reduce" });
  await page.goto("/en/projects/miraigo");
  await expect(page.locator(".button.primary").first()).toBeVisible();
  const results = await new AxeBuilder({ page }).analyze();
  expect(results.violations).toEqual([]);
});
