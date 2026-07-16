const { expect } = require('@playwright/test');
const { DashboardLocators } = require('../locators/DashboardLocators');


class DashboardPage {

    constructor(page) {

        this.page = page;

        this.locators = new DashboardLocators(page);
    }


    async verifyDashboard() {

        await expect(this.locators.dashboardTitle)
            .toBeVisible();


        await expect(this.locators.dashboardTitle)
            .toHaveText("Dashboard");

    }



    async verifyDashboardCards() {

        const cardNames = [
            "Total Devices",
            "Connected Devices",
            "Files Today",
            "Data Transferred"
        ];


        for (let i = 0; i < cardNames.length; i++) {


            await expect(this.locators.statTitle.nth(i))
                .toBeVisible();


            await expect(this.locators.statValue.nth(i))
                .toBeVisible();


            await expect(this.locators.statSubtitle.nth(i))
                .toBeVisible();



            const title =
                await this.locators.statTitle.nth(i).innerText();


            const value =
                await this.locators.statValue.nth(i).innerText();


            const subtitle =
                await this.locators.statSubtitle.nth(i).innerText();



            console.log("\n----------------");
            console.log(cardNames[i]);
            console.log("Title :", title);
            console.log("Value :", value);
            console.log("Status:", subtitle);

        }

    }

}


module.exports = { DashboardPage };