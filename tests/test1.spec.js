import { test, expect } from '@playwright/test';


test("Login Admin to verify the pages loading", async ({ page }) => {

  await page.goto("https://122.175.46.149:3009/A=19uS/login");

  // Page title
  await expect(page).toHaveTitle("Connected Plant");

  // Banner image
  const banner = page.locator("//img[@alt='Astellas']");
  await expect(banner).toBeVisible();

  /* user name   */
  // User Name label
  const userNameLabel = page.locator("//label[text()='User Name']");
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


  /* Password  */
  // Password label
  const PasswordLabel = page.locator("//label[text()='Password']");
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

  /* Login Button  */
  // Footer text validation
  const footerText = page.locator('.footer-details');
  await expect(footerText).toBeVisible();
  const displayedFooterText = await footerText.innerText();
  console.log("Footer displayed text:", displayedFooterText);


  // Login button validation
  const loginButton = page.locator("//button[@type='submit']");
  await expect(loginButton).toBeVisible();
  const buttonText = await loginButton.innerText();
  console.log("Login button displayed text:", buttonText);
  await expect(loginButton).toHaveText("Login");
  await loginButton.click()


  const msg = await page.locator(".ant-message-custom-content.ant-message-success")
  // .toHaveText('Welcome');
  console.log(await msg.textContent());


  // Verify Dashboard title text
  const dashboardTitle = page.locator("//span[contains(@class,'header-title') and contains(@class,'phz-px-xs')]");
  await expect(dashboardTitle).toBeVisible();
  const dashboardText = await dashboardTitle.innerText();
  console.log("Dashboard displayed text:", dashboardText);
  await expect(dashboardTitle).toHaveText("Dashboard");

});