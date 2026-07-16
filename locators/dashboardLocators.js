class DashboardLocators {

    constructor(page) {

        // Dashboard title
        this.dashboardTitle = page.locator(
            "//span[contains(@class,'header-title') and contains(@class,'phz-px-xs')]"
        );


        // Dashboard cards
        this.statTitle = page.locator(".stat-title");

        this.statValue = page.locator(".stat-value");

        this.statSubtitle = page.locator(".stat-subtitle");
    }

}

module.exports = { DashboardLocators };