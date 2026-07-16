class LoginLocators {
    constructor(page) {
        this.banner = page.locator("//img[@alt='Astellas']");

        this.userNameLabel = page.locator("//label[text()='User Name']");
        this.usernameInput = page.locator("#username");

        this.passwordLabel = page.locator("//label[text()='Password']");
        this.passwordInput = page.locator("#password");

        this.footerText = page.locator(".footer-details");

        this.loginButton = page.locator("//button[@type='submit']");
    }
}

module.exports = { LoginLocators };