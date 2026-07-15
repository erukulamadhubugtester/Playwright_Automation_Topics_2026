require('dotenv').config();
const { expect } = require('@playwright/test');

class DashboardPage {


  constructor(page) {

    this.page = page;


    // Dashboard title
    this.dashboardTitle = page.locator(
      "//span[contains(@class,'header-title') and contains(@class,'phz-px-xs')]"
    );


    // Dashboard cards

    this.statTitle = page.locator(".stat-title");

    this.statValue = page.locator(".stat-value");

    this.statSubtitle = page.locator(".stat-subtitle");

  }



  async verifyDashboard() {


    await expect(this.dashboardTitle)
      .toBeVisible();


    await expect(this.dashboardTitle)
      .toHaveText("Dashboard");

  }




  async verifyDashboardCards() {


    const cardNames = [

      "Total Devices",

      "Connected Devices",

      "Files Today",

      "Data Transferred"

    ];


    for(let i=0; i<4; i++){


      const title =
        await this.statTitle.nth(i).innerText();


      const value =
        await this.statValue.nth(i).innerText();


      const subtitle =
        await this.statSubtitle.nth(i).innerText();



      console.log("\n----------------");

      console.log(cardNames[i]);

      console.log("Title :", title);

      console.log("Value :", value);

      console.log("Status:", subtitle);



      await expect(this.statTitle.nth(i))
        .toBeVisible();


      await expect(this.statValue.nth(i))
        .toBeVisible();


      await expect(this.statSubtitle.nth(i))
        .toBeVisible();

    }

  }


}


module.exports = { DashboardPage };