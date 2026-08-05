const { expect } = require('@playwright/test');
const { EdgePuckManagerLocators } = require('../locators/auditTrailLocators');


class AuditTrailPage {

    constructor(page) {

        this.page = page;

        this.locators = new AuditTrailLocators(page);

    }


    async clickEdgePuckManagerMenu() {
        await expect(this.locators.edgePuckManagerMenu)
            .toBeVisible();
        await this.locators.edgePuckManagerMenu.click();
    }



    async verifyEdgePuckManagerPage() {
        await expect(this.locators.pageTitle)
            .toBeVisible();
        const title =
            await this.locators.pageTitle.innerText();
        console.log("Page Title :", title);

        await expect(this.locators.pageTitle)
            .toHaveText("Edge Puck Manager");

    }

}


module.exports = { EdgePuckManagerPage };