const { expect } = require('@playwright/test');

class login_page {
  constructor(page) {
    this.page = page;

    this.username = page.locator("#username");
    this.password = page.locator("#password");
    this.loginbutton = page.locator("//span[text()='Login']");

    this.moduletitle = page.locator(".phz-heading-m");
    this.selectmodule=page.locator("//p[@title='Connector Plus']/..//button");
  }

  async url_goto() {
    await this.page.goto("https://122.175.46.149:3009/A=19uS/login");
  }

  async user_credentials(username, password) {
    await this.username.fill(username);
    await this.password.fill(password);
    await this.loginbutton.click();
  }

  async module_page() {

    await expect(this.moduletitle).toBeVisible();
    await expect(this.moduletitle).toHaveText(/.+/);

    // Optional highlight (debug only)
    await this.moduletitle.evaluate(el => {
      el.style.border = '4px solid red';
    });

    await this.page.waitForTimeout(1000);

    await expect(this.selectmodule).toBeVisible();
    await this.selectmodule.click();
    await this.page.waitForTimeout(1000);
  }
}

module.exports = { login_page };