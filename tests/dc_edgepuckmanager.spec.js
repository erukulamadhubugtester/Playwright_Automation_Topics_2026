const { test } = require('../fixtures/baseFixture');

test('Verify Edge Puck Manager', async ({ pages }) => {

    await pages.edgePuckManagerPage.clickEdgePuckManagerMenu();
    await pages.edgePuckManagerPage.verifyEdgePuckManagerPage();

});