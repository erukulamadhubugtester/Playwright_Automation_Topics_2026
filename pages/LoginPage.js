require('dotenv').config();

const { expect } = require('@playwright/test');
const { LoginLocators } = require('../locators/loginLocators');


class LoginPage {

    constructor(page) {

        this.page = page;

        this.locators = new LoginLocators(page);
    }


    async goto() {

        console.log("BASE_URL:", process.env.BASE_URL);

        await this.page.goto(process.env.BASE_URL);
    }


    async verifyLoginPage() {

        await expect(this.page)
            .toHaveTitle("Connected Plant");


        await expect(this.locators.banner)
            .toBeVisible();


        await expect(this.locators.usernameInput)
            .toBeVisible();


        await expect(this.locators.passwordInput)
            .toBeVisible();


        await expect(this.locators.loginButton)
            .toHaveText("Login");
    }


    async login() {

        await this.locators.usernameInput
            .fill(process.env.USERNAME);


        await this.locators.passwordInput
            .fill(process.env.PASSWORD);


        await this.locators.loginButton
            .click();


        await this.page.waitForLoadState('networkidle');


        console.log("After Login URL:", this.page.url());
    }

}


module.exports = { LoginPage };