import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test("English home renders and navigates to Spanish equivalent", async ({
  page,
}) => {
  await page.goto("/en");
  await expect(
    page.getByRole("heading", {
      name: /Frontend interfaces with product clarity and a little spark/i,
    }),
  ).toBeVisible();
  await expect(page.getByRole("link", { name: "Projects" })).toHaveCount(0);
  await page.getByRole("link", { name: /Switch language to Spanish/i }).click();
  await expect(page).toHaveURL(/\/es\/?$/);
});

test("Contact exposes direct profile links", async ({ page }) => {
  await page.goto("/en/contact");
  await expect(
    page.locator('a[href="mailto:istrejo2106@gmail.com"]'),
  ).toHaveCount(2);
  await expect(
    page.locator('a[href="https://linkedin.com/in/alejandrotrejodev"]'),
  ).toHaveCount(1);
  await expect(
    page.locator('a[href="https://github.com/istrejo"]'),
  ).toHaveCount(1);
});

test("English home has no obvious accessibility violations", async ({
  page,
}) => {
  await page.goto("/en");
  const results = await new AxeBuilder({ page }).analyze();
  expect(results.violations).toEqual([]);
});
