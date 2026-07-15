const { test, expect } = require('@playwright/test');

test('To verify text print', async ({ page }) => {

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
//   await page.pause();

await page.locator("//input[@placeholder='Username']").fill("test");
await page.locator("")
await page.locator("//button[@type='submit']").click();

const error=await page.locator("p.oxd-alert-content-text").textContent()
console.log(error)



});