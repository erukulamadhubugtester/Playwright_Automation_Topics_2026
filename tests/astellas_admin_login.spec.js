const { test, expect } = require('@playwright/test');
const { login_page } = require('../pageobjects/login_page');
const { json } = require('node:stream/consumers');
// json->String->Js obj
const dataset = JSON.parse(JSON.stringify(require("../utils/datafile.json")));

test("Astellas Admin Login", async ({ browser}) => {

  const context = await browser.newContext({
    ignoreHTTPSErrors: true
  });

  const page = await context.newPage();

  const loginPage = new login_page(page);

  await loginPage.url_goto();
  await loginPage.user_credentials(dataset.username, dataset.password);
  await loginPage.module_page();

});