import { test, expect } from '@playwright/test';

test('Verify the login page ui', async ({ page }) => {
  await page.goto('https://122.175.46.149:3009/A=19uS/login');

  const title = await page.title();
  console.log(title);
});