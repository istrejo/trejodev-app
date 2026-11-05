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
      "/projects/racerlab/dashboard.png",
    );

    await page.goto(`${route}/projects/racerlab`);
    const gallery = page.locator(".project-gallery");
    await expect(gallery.getByRole("img")).toHaveCount(4);
    await expect(gallery.getByRole("img").nth(2)).toHaveAttribute(
      "src",
      "/projects/racerlab/inventory.png",
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
      features
        .nth(0)
        .locator(
          `a[href="${route}/projects/miraigo"]:not([aria-hidden="true"])`,
        ),
    ).toHaveCount(1);
    await expect(features.nth(1)).toContainText("RacerLab");
    await expect(
      features
        .nth(1)
        .locator(
          `a[href="${route}/projects/racerlab"]:not([aria-hidden="true"])`,
        ),
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

test("RacerLab cover loads and is visible on mobile after scrolling into view", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  const covers = ["/en", "/en/projects", "/en/projects/racerlab"].map(
    (route) => ({
      route,
      selector:
        route === "/en"
          ? '.work-feature img[src="/projects/racerlab/dashboard.png"]'
          : 'img[src="/projects/racerlab/dashboard.png"]',
    }),
  );

  for (const { route, selector } of covers) {
    await page.goto(route);
    const image = page.locator(selector).first();
    await image.scrollIntoViewIfNeeded();
    await expect(image, route).toBeVisible();
    await expect
      .poll(() => image.evaluate((img: HTMLImageElement) => img.naturalWidth), {
        message: route,
      })
      .toBeGreaterThan(0);
    const box = await image.boundingBox();
    expect(box?.width ?? 0, route).toBeGreaterThan(100);
    expect(box?.height ?? 0, route).toBeGreaterThan(50);
  }
});

test("project cover shares a view transition name between home and case study", async ({
  page,
}) => {
  const slug = "miraigo";
  await page.goto("/en");
  const homeName = await page
    .locator(".work-feature.is-featured .shot-1")
    .evaluate((el) => getComputedStyle(el).viewTransitionName);
  expect(homeName).not.toBe("none");

  await page.goto(`/en/projects/${slug}`);
  const detailName = await page
    .locator(".project-detail-visual img")
    .evaluate((el) => getComputedStyle(el).viewTransitionName);
  expect(detailName).toBe(homeName);

  const galleryNames = await page
    .locator(".project-gallery img")
    .evaluateAll((els) =>
      els.map((el) => getComputedStyle(el).viewTransitionName),
    );
  expect(galleryNames.length).toBeGreaterThan(0);
  for (const name of galleryNames) expect(name).toBe("none");
});

test("reduced motion shows the hero and collage in their final state", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/en");
  const title = page.locator(".display-title");
  await expect(title).toHaveCSS("animation-name", "none");
  await expect(title).toHaveCSS("opacity", "1");

  const featured = page.locator(".work-feature.is-featured");
  await featured.scrollIntoViewIfNeeded();
  const shot = featured.locator(".shot-2");
  await expect(shot).toHaveCSS("transform", "none");
  await expect(shot).toHaveCSS("opacity", "1");
});

test("featured collage is visible without JavaScript", async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto("/en");
  for (const shot of ["shot-1", "shot-2", "shot-3"]) {
    await expect(
      page.locator(`.work-feature.is-featured .${shot}`),
    ).toBeVisible();
  }
  await context.close();
});

test("featured collage settles into its grid when scrolled into view", async ({
  page,
}) => {
  await page.goto("/en");
  const featured = page.locator(".work-feature.is-featured");
  await featured.scrollIntoViewIfNeeded();
  await expect(featured).toHaveAttribute("data-visible", "true");
  await expect(featured.locator(".shot-2")).toHaveCSS("transform", "none", {
    timeout: 2000,
  });
});

for (const route of ["/en/about", "/en/work", "/en/skills", "/en/projects"]) {
  const heroTitle = route === "/en/work" ? ".work-hero h1" : ".page-hero h1";

  test(`reduced motion shows the ${route} hero in its final state`, async ({
    page,
  }) => {
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto(route);
    const title = page.locator(heroTitle).first();
    await expect(title).toHaveCSS("animation-name", "none");
    await expect(title).toHaveCSS("opacity", "1");
  });

  test(`${route} hero runs the load sequence when motion is allowed`, async ({
    page,
  }) => {
    await page.emulateMedia({ reducedMotion: "no-preference" });
    await page.goto(route);
    await expect(page.locator(heroTitle).first()).toHaveCSS(
      "animation-name",
      "hero-in",
    );
  });
}

test("inner page lists and gallery are visible without JavaScript", async ({
  browser,
}) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto("/en/work");
  await expect(page.locator(".work-timeline > li").first()).toBeVisible();
  for (const item of await page.locator(".work-timeline > li").all()) {
    await expect(item).toBeVisible();
  }
  await page.goto("/en/projects/racerlab");
  await expect(page.locator(".project-gallery img").first()).toBeVisible();
  await expect(page.locator(".stack-list > .stack-row").first()).toBeVisible();
  for (const image of await page.locator(".project-gallery img").all()) {
    await expect(image).toBeVisible();
  }
  for (const row of await page.locator(".stack-list > .stack-row").all()) {
    await expect(row).toBeVisible();
  }
  await context.close();
});

test("inner page lists stagger in and settle when scrolled into view", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "no-preference" });
  const cases = [
    { route: "/en/work", list: ".work-timeline", reveal: "list" },
    { route: "/en/skills", list: ".card-grid", reveal: "list" },
    { route: "/en/certifications", list: ".stack-list", reveal: "list" },
    { route: "/en/contact", list: ".contact-links", reveal: "list" },
    { route: "/en/projects", list: ".project-grid", reveal: "list" },
    {
      route: "/en/projects/racerlab",
      list: ".project-gallery",
      reveal: "gallery",
    },
  ];
  for (const { route, list, reveal } of cases) {
    await page.goto(route);
    const container = page.locator(list).first();
    await expect(container, route).toHaveAttribute("data-reveal", reveal);
    const last = container.locator("> *").last();
    await last.scrollIntoViewIfNeeded();
    await expect(container, route).toHaveAttribute("data-visible", "true");
    await expect(last, route).toHaveCSS("opacity", "1", { timeout: 2500 });
    await expect(last, route).toHaveCSS("transform", "none", {
      timeout: 2500,
    });
  }
});

test("inner page lists show their final state under reduced motion", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/en/projects/racerlab");
  const figure = page.locator(".project-gallery > *").last();
  await figure.scrollIntoViewIfNeeded();
  await expect(figure).toHaveCSS("opacity", "1");
  await expect(figure).toHaveCSS("transform", "none");
  await expect(figure).toHaveCSS("animation-name", "none");
});

test.describe("pointer follower", () => {
  const follower = "[data-pointer-follower]";

  test.skip(({ isMobile }) => isMobile, "pointer follower is desktop-only");

  test("activates on the first mouse move and starts as a dot", async ({
    page,
  }) => {
    await page.goto("/en");
    const el = page.locator(follower);
    await expect(el).toHaveAttribute("aria-hidden", "true");
    await page.mouse.move(400, 300);
    await page.mouse.move(420, 320);
    await expect(el).toHaveAttribute("data-active", "");
    await expect(el).toHaveAttribute("data-state", "dot");
    await expect(el).toHaveCSS("opacity", "1", { timeout: 2500 });
    await expect
      .poll(() => el.evaluate((node) => (node as HTMLElement).style.transform))
      .toBe("translate3d(420px, 320px, 0px)");
  });

  test("hides the native cursor while the follower is active", async ({
    page,
  }) => {
    await page.goto("/en");
    await page.mouse.move(400, 300);
    await expect(page.locator(follower)).toHaveAttribute("data-active", "");
    await expect(page.locator("body")).toHaveCSS("cursor", "none");
    await expect(page.locator(".home-hero .button.primary")).toHaveCSS(
      "cursor",
      "none",
    );
  });

  test("tracks the pointer exactly, without lag", async ({ page }) => {
    await page.goto("/en");
    await page.mouse.move(400, 300);
    await page.mouse.move(900, 500);
    const transform = await page.locator(follower).evaluate(
      (node) =>
        new Promise<string>((resolve) =>
          requestAnimationFrame(() =>
            requestAnimationFrame(() =>
              resolve((node as HTMLElement).style.transform),
            ),
          ),
        ),
    );
    expect(transform).toBe("translate3d(900px, 500px, 0px)");
  });

  test("turns into a ring over buttons", async ({ page }) => {
    await page.goto("/en");
    await page.locator(".home-hero .button.primary").hover();
    await expect(page.locator(follower)).toHaveAttribute("data-state", "ring");
  });

  test("turns into a case-study pill over featured media", async ({ page }) => {
    await page.goto("/en");
    const media = page.locator(".work-feature.is-featured .work-media");
    await media.scrollIntoViewIfNeeded();
    await media.hover();
    const el = page.locator(follower);
    await expect(el).toHaveAttribute("data-state", "pill");
    await expect(el).toContainText("Case study");
    await expect(el).toBeVisible();
  });

  test("uses the Spanish label on /es", async ({ page }) => {
    await page.goto("/es");
    const media = page.locator(".work-feature.is-featured .work-media");
    await media.scrollIntoViewIfNeeded();
    await media.hover();
    const el = page.locator(follower);
    await expect(el).toHaveAttribute("data-state", "pill");
    await expect(el).toContainText("Caso de estudio");
  });

  test("featured media opens the case study", async ({ page }) => {
    await page.goto("/en");
    const media = page.locator(".work-feature.is-featured .work-media");
    await media.scrollIntoViewIfNeeded();
    await media.click();
    await expect(page).toHaveURL(/\/en\/projects\/miraigo\/?$/);
  });

  test("persists across client navigation and resets to a dot", async ({
    page,
  }) => {
    await page.goto("/en");
    await page.evaluate(() => {
      (
        document.querySelector("[data-pointer-follower]") as HTMLElement & {
          __kept?: boolean;
        }
      ).__kept = true;
    });
    await page.mouse.move(400, 300);
    await page.locator(".desktop-nav a", { hasText: "Work" }).click();
    await expect(page).toHaveURL(/\/en\/work\/?$/);
    const el = page.locator(follower);
    // The pointer still rests on the nav link, so the state is re-resolved there.
    await expect(el).toHaveAttribute("data-state", "ring");
    await page.mouse.move(5, 600);
    await expect(el).toHaveAttribute("data-state", "dot");
    expect(
      await el.evaluate(
        (node) => (node as HTMLElement & { __kept?: boolean }).__kept,
      ),
    ).toBe(true);
  });

  test("relabels the pill after switching locale", async ({ page }) => {
    await page.goto("/en");
    await page.locator(".locale-button").click();
    await expect(page).toHaveURL(/\/es\/?$/);
    const media = page.locator(".work-feature.is-featured .work-media");
    await media.scrollIntoViewIfNeeded();
    await media.hover();
    await expect(page.locator(follower)).toContainText("Caso de estudio");
  });

  test("stays inactive under reduced motion", async ({ page }) => {
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto("/en");
    await page.mouse.move(400, 300);
    await page.mouse.move(420, 320);
    const el = page.locator(follower);
    await expect(el).not.toHaveAttribute("data-active", /.*/);
    await expect(el).toBeHidden();
    await expect(page.locator("body")).not.toHaveCSS("cursor", "none");
  });
});

test("pointer follower is inactive on touch devices", async ({
  page,
  hasTouch,
}) => {
  test.skip(!hasTouch, "touch devices only");
  await page.goto("/en");
  const el = page.locator("[data-pointer-follower]");
  await expect(el).toHaveCount(1);
  await expect(el).not.toHaveAttribute("data-active", /.*/);
  await expect(el).toBeHidden();
  await expect(page.locator("body")).not.toHaveCSS("cursor", "none");
});

test.describe("polish", () => {
  for (const path of ["/en", "/en/work", "/en/projects/racerlab", "/en/about"]) {
    test(`no visible text below 11px on ${path}`, async ({ page }) => {
      await page.goto(path);
      const small = await page.evaluate(() =>
        [...document.querySelectorAll<HTMLElement>("body *")]
          .filter((el) => {
            const own = [...el.childNodes].some(
              (node) => node.nodeType === 3 && node.textContent!.trim(),
            );
            if (!own || !el.checkVisibility()) return false;
            if (el.closest(".sr-only, [data-pointer-follower]")) return false;
            return parseFloat(getComputedStyle(el).fontSize) < 11;
          })
          .map((el) => `${el.className}: ${el.textContent!.trim().slice(0, 30)}`),
      );
      expect(small).toEqual([]);
    });
  }

  test("project sections do not repeat their heading as a label", async ({
    page,
  }) => {
    await page.goto("/en/projects/racerlab");
    const repeats = await page.evaluate(() =>
      [...document.querySelectorAll(".eyebrow")]
        .filter((label) => {
          const heading = label.nextElementSibling;
          return (
            heading?.matches("h1, h2, h3") &&
            heading.textContent!.trim() === label.textContent!.trim()
          );
        })
        .map((label) => label.textContent!.trim()),
    );
    expect(repeats).toEqual([]);
  });

  test("gallery screenshots are anchored to the top of the page", async ({
    page,
  }) => {
    await page.goto("/en/projects/miraigo");
    await expect(
      page.locator(".project-gallery .project-image").first(),
    ).toHaveCSS("object-position", "50% 0%");
  });
});

test("root redirects to the default locale without a language picker", async ({
  page,
  request,
}) => {
  const root = await request.get("/", { maxRedirects: 0 });
  expect(await root.text()).not.toContain("Choose your language");

  await page.goto("/");
  await expect(page).toHaveURL(/\/en$/);
});
