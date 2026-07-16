class EdgePuckManagerLocators {

    constructor(page) {

        // Edge Puck Manager menu
        this.edgePuckManagerMenu = page.locator(
            "//span[text()='Edge Puck Manager']"
        );


        // Page header title
        this.pageTitle = page.locator(
            ".header-title.phz-px-xs"
        );

    }

}

module.exports = { EdgePuckManagerLocators };