const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {

    await page.goto('https://122.175.46.149:3009/A=19uS/login');

    console.log('Viewport Size:', page.viewportSize());
    console.log('URL:', page.url());
    console.log('Page Title:', await page.title());

    await expect(page.locator("img[alt='Astellas']")).toBeVisible();

    await page.locator('#username').fill('qa-op5');
    await page.locator('#password').fill('Welcome_123!');
    await page.locator("//span[text()='Login']").click();

    await expect(page.locator("//span[text()='Astellas']")).toBeVisible();

    await page.locator("//div[@image-alt='Connector Plus']/div/button").click();

    // Wait until the dashboard is fully loaded
    await expect(page.locator(".user-initials")).toBeVisible();

    console.log("*** 1. beforeEach ***");
});

test("Test 1", async ({ page }) => {

    await page.waitForTimeout(3000);

    const t1 = await page.locator(".header-title").textContent();
    console.log("Dashboard Page Title:", t1);

    console.log("*** 2. Test 1  ***");
});

test("Test 2", async ({ page }) => {

    await page.locator("//span[text()='Instrument']").click();


    const title = page.locator(".header-title");

    await expect(title).toBeVisible();

    const t2 = await title.innerText();

    console.log("Instrument Page Title:", t2);

    console.log("*** 2. Test 2 ****");
});


test.afterEach(async ({ page }) => {

    // Wait for the user icon
    await expect(page.locator(".avatar-trigger")).toBeVisible();

    await page.locator(".avatar-trigger").click();

    const userName = await page.locator(".dropdown-user-name").textContent();
    console.log("User Name:", userName);

    const userRole = await page.locator(".dropdown-user-role").textContent();
    console.log("User Role:", userRole);

    // Click Logout (update locator if needed)
    await page.locator(".menu-text").click();

    console.log("*** 3. afterEach ***");
});
