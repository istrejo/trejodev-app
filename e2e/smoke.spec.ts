import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test("English home renders and navigates to Spanish equivalent", async ({
  page,
}) => {
  await page.goto("/en");
  await expect(
    page.getByRole("heading", {
      name: /Frontend Developer building modern web and mobile interfaces/i,
    }),
  ).toBeVisible();
  await expect(page.getByRole("link", { name: "Projects" })).toHaveCount(0);
  await page.getByRole("link", { name: /Switch language to Spanish/i }).click();
  await expect(page).toHaveURL(/\/es\/?$/);
});

test("Contact exposes direct links and CV paths", async ({ page }) => {
  await page.goto("/en/contact");
  await expect(page.getByRole("link", { name: /Email/i })).toHaveAttribute(
    "href",
    "mailto:istrejo2106@gmail.com",
  );
  await expect(page.getByRole("link", { name: "Download CV" })).toHaveAttribute(
    "href",
    "/cv/alejandro-trejo-cv-en.pdf",
  );
});

test("English home has no obvious accessibility violations", async ({
  page,
}) => {
  await page.goto("/en");
  const results = await new AxeBuilder({ page }).analyze();
  expect(results.violations).toEqual([]);
});
