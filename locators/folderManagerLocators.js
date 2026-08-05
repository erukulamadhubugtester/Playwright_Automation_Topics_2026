class FolderManagerLocators {

    constructor(page) {

        // Folder Manager menu
        this.folderManagerMenu = page.locator(
            "//span[text()='Edge Puck Manager']"
        );


        // Page header title
        this.pageTitle = page.locator(
            ".header-title.phz-px-xs"
        );

    }

}

module.exports = { FolderManagerLocators };