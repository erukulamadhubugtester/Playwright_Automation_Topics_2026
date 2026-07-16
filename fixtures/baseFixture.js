const base = require('@playwright/test');

const { LoginPage } = require('../pages/LoginPage');
const { DashboardPage } = require('../pages/DashboardPage');
const { EdgePuckManagerPage } = require('../pages/EdgePuckManagerPage');
// const { NotificationPage } = require('../pages/NotificationPage');

const test = base.test.extend({
    pages: async ({ page }, use) => {

        const loginPage = new LoginPage(page);
        const dashboardPage = new DashboardPage(page);
        const edgePuckManagerPage = new EdgePuckManagerPage(page);

        await loginPage.goto();
        await loginPage.verifyLoginPage();
        await loginPage.login();
        await dashboardPage.verifyDashboard();

        await use({
            loginPage,
            dashboardPage,
            edgePuckManagerPage
        });
    }
});

module.exports = {
    test,
    expect: base.expect
};