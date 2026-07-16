const { test } = require('../fixtures/baseFixture');

test('Verify Dashboard Cards', async ({ pages }) => {

    await pages.dashboardPage.verifyDashboardCards();

});