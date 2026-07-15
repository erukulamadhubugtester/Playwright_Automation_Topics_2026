const { test, expect } = require('@playwright/test');
const { title } = require('node:process');

test.describe.configure({mode:'serial'}); // one after one open tests 

test('verifiy the Login page ', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://www.google.com/");
  await expect(page).toHaveURL(/google\.com/);

  await expect(page).toHaveTitle('Google');

});


test('verifiy the Login page 1 ', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://www.google.com/");
  await expect(page).toHaveURL(/google\.com/);

  await expect(page).toHaveTitle('Google');

});


test('verifiy the Login page 2', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://www.google.com/");
  await expect(page).toHaveURL(/google\.com/);

  await expect(page).toHaveTitle('Google');

});


test('verifiy the Login page 3', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://www.google.com/");
  await expect(page).toHaveURL(/google\.com/);

  await expect(page).toHaveTitle('Google');

});