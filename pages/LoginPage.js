require('dotenv').config();
const { expect } = require('@playwright/test');


class LoginPage {

  constructor(page) {

    this.page = page;

    // Login page locators
    this.banner = page.locator("//img[@alt='Astellas']");

    this.userNameLabel = page.locator("//label[text()='User Name']");
    this.usernameInput = page.locator("#username");

    this.passwordLabel = page.locator("//label[text()='Password']");
    this.passwordInput = page.locator("#password");

    this.footerText = page.locator(".footer-details");

    this.loginButton = page.locator("//button[@type='submit']");
  }


  async goto() {

    console.log("BASE_URL:", process.env.BASE_URL);

    await this.page.goto(process.env.BASE_URL);
  }


  async verifyLoginPage() {

    await expect(this.page)
      .toHaveTitle("Connected Plant");


    await expect(this.banner)
      .toBeVisible();


    await expect(this.userNameLabel)
      .toHaveText("User Name");


    await expect(this.usernameInput)
      .toBeVisible();


    await expect(this.passwordLabel)
      .toHaveText("Password");


    await expect(this.passwordInput)
      .toBeVisible();


    await expect(this.footerText)
      .toBeVisible();


    await expect(this.loginButton)
      .toHaveText("Login");

  }


  async login() {

    await this.usernameInput.fill(process.env.USERNAME);
    console.log("LOGIN USER:", process.env.USERNAME);
    await this.passwordInput.fill(process.env.PASSWORD);
    await this.loginButton.click();


    // wait for navigation after login
    await this.page.waitForLoadState('networkidle');


    console.log(
      "After Login URL:",
      this.page.url()
    );

  }

}


module.exports = { LoginPage };