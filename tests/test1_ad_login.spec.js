import { test, expect } from '@playwright/test';

async function highlightElement(locator) {
  await locator.evaluate((element) => {
    element.style.outline = "4px solid rgba(255, 0, 0, 0.5)";
    // element.style.boxShadow = "0 0 10px 5px rgba(255, 0, 0, 0.3)";
    // element.style.backgroundColor = "rgba(255, 0, 0, 0.08)";
  });
}

test("Login Admin to verify the pages loading", async ({ page }) => {

  await page.goto("https://122.175.46.149:3009/A=19uS/login");

  // Page title
  await expect(page).toHaveTitle("Connected Plant");

  // Banner image
  const banner = page.locator("//img[@alt='Astellas']");
  await expect(banner).toBeVisible();
  await highlightElement(banner);

  // User Name label
const userNameLabel = page.locator("//label[text()='User Name']");
await highlightElement(userNameLabel);
await expect(userNameLabel).toBeVisible();
const displayedText = await userNameLabel.innerText();
console.log("User Name label displayed text:", displayedText);
await expect(userNameLabel).toHaveText("User Name");

  // Username field container
  const usernameContainer = page.locator("//span[contains(@class,'login-input')]").first();
  await expect(usernameContainer).toBeVisible();

  // User icon
  const userIcon = page.locator("//span[@aria-label='user']");
  await expect(userIcon).toBeVisible();

  // Username input
  const usernameInput = page.locator("#username");
  await expect(usernameInput).toBeVisible();
  await usernameInput.fill("qa-ad");


//   ##################################################
// Password label
const PasswordLabel = page.locator("//label[text()='Password']");

await highlightElement(PasswordLabel);

await expect(PasswordLabel).toBeVisible();

const displayedPasswordText = await PasswordLabel.innerText();

console.log("Password label displayed text:", displayedPasswordText);

await expect(PasswordLabel).toHaveText("Password");


// Password field container
const PasswordContainer = page
  .locator("//span[contains(@class,'login-input')]")
  .nth(1);

await expect(PasswordContainer).toBeVisible();


// Password icon
const PasswordIcon = page.locator("//span[@aria-label='lock']");

await expect(PasswordIcon).toBeVisible();


// Password input
const PasswordInput = page.locator("#password");

await expect(PasswordInput).toBeVisible();

await PasswordInput.fill("Welcome_123!");

});