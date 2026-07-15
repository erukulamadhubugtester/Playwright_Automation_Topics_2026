// const { test, expect } = require('@playwright/test');

// test("Verify the login page ui", async ({ page }) => {

//     await page.goto("https://122.175.46.149:3009/A=19uS/login");

//     const title = await page.title();
//     console.log("Page Title:", title);

// });


// const { test, expect } = require('@playwright/test'); // old node.js 
import { test, expect } from '@playwright/test';

test('Verify the login page ui', async ({ page }) => {

  await page.goto('https://122.175.46.149:3009/A=19uS/login');

  console.log('Viewport Size:', page.viewportSize());
  console.log('URL:', page.url());
  console.log('Page Title:', await page.title());

  const astellasLogo = page.locator("img[alt='Astellas']");

  await expect(astellasLogo).toBeVisible();

  await astellasLogo.evaluate(element => {
    element.style.border = '4px solid red';
  });

  await page.waitForTimeout(2000);

  await page.locator('#username').fill('qa-op5');
  await page.locator('#password').fill('Welcome_123!');
  await page.locator("//span[text()='Login']").click();

  await page.waitForTimeout(3000);

  const astellasText = page.locator("//span[text()='Astellas']");

  await expect(astellasText).toBeVisible();

  await astellasText.evaluate(element => {
    element.style.border = '4px solid red';
  });

  await page.waitForTimeout(2000);

  await page.screenshot({
    path: 'login-page-1366x359.png',
    fullPage: false
  });
});