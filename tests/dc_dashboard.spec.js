require('dotenv').config();

const { test } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { DashboardPage } = require('../pages/DashboardPage');



test("Login Admin verify dashboard cards", async ({page})=>{

    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);

    await loginPage.goto();
    await loginPage.verifyLoginPage();
    await loginPage.login();
    await dashboardPage.verifyDashboard();
    await dashboardPage.verifyDashboardCards();


});