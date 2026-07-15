const { test, expect } = require('@playwright/test');
const { title } = require('node:process');


test('Browser Context Playwright test', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://www.google.com/");
  await expect(page).toHaveURL(/google\.com/);

  await expect(page).toHaveTitle('Google');

});