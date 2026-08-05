class AuditTrailLocators {

    constructor(page) {

        // Audit Trail menu
        this.auditTrailMenu = page.locator(
            "//span[text()='Audit Trail']"
        );


        // Page header title
        this.pageTitle = page.locator(
            ".header-title.phz-px-xs"
        );

    }

}

module.exports = { EdgePuckManagerLocators };