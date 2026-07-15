const { test, expect } = require('@playwright/test');
const { title } = require('node:process');

test.describe.configure({mode:'parallel'}); // at time open all tests 

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
  console.log("Smoke test 1 ");

});


test('@smoke verifiy the Login page 1', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://www.google.com/");
  await expect(page).toHaveURL(/google\.com/);

  await expect(page).toHaveTitle('Google');
    console.log("Smoke test 2 ");

});

test('@smoke verifiy the Login page 2', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://www.google.com/");
  await expect(page).toHaveURL(/google\.com/);

  await expect(page).toHaveTitle('Google');
    console.log("Smoke test 3 ");

});


test('@regression  verifiy the Login page r1', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://www.google.com/");
  await expect(page).toHaveURL(/google\.com/);

  await expect(page).toHaveTitle('Google');
    console.log("Regression  test r1 ");

});

test('@regression  verifiy the Login page r2', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://www.google.com/");
  await expect(page).toHaveURL(/google\.com/);

  await expect(page).toHaveTitle('Google');
    console.log("Regression  test r2 ");

});



