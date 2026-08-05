import { test, expect } from '@playwright/test';

test('Verify the login page ui', async ({ page }) => {

    await page.goto('https://122.175.46.149:3009/cGh6aW90/login');

    // Print Browser Title
    const title = await page.title();
    console.log('Browser Title:', title);

    const logo = page.locator("[alt='Phizzle']");
    await expect(logo).toBeVisible({ timeout: 10000 });
    console.log("✅ Phizzle logo is displayed");

    await page.locator('#username').fill('phziot-admin');

    await page.locator('#password').fill('Welcome_123!');

    await page.locator("//span[text()='Login']").click();


   const popup = page.locator("//span[contains(text(),'Welcome')]");

try {
    await expect(popup).toBeVisible({ timeout: 5000 });

    const message = await popup.innerText();
    console.log("✅ Popup Message:", message);

} catch (error) {
    console.log("❌ Popup not displayed.");
}
   await page.waitForTimeout(10000); // Wait for 10 seconds

   const t1 = page.locator(".phz-heading-m");
  console.log("Page title is "+" :"+await t1.textContent());

await page.locator("//p[text()='Connector Plus']/..//button").click();

const dashboardHeader = page.locator("header").getByText("Dashboard");
await expect(dashboardHeader).toBeVisible();
console.log("Page Title:", await dashboardHeader.innerText());


await page.getByText('Manage', { exact: true }).click();
const text = await page.locator('span.header-title').textContent();
console.log(text); // "Manage"

await page.getByText('Filter').click();

const f = page.getByText('Filters');

await expect(f).toBeVisible();
console.log(await f.textContent());

const element = page.getByText('Filters');
await element.scrollIntoViewIfNeeded();



});