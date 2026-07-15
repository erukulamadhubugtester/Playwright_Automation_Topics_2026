const { test, expect } = require('@playwright/test');
const { login_page } = require('../pageobjects/login_page');

// JSON -> String -> JavaScript Object
const dataset = JSON.parse(JSON.stringify(require("../utils/para_data.json")));

for (const data of dataset) {

  test(`Astellas Admin Login for ${data.username}`, async ({ browser }) => {

    const context = await browser.newContext({
      ignoreHTTPSErrors: true
    });

    const page = await context.newPage();

    const loginPage = new login_page(page);

    await loginPage.url_goto();
    await loginPage.user_credentials(data.username, data.password);
    await loginPage.module_page();

  });

}