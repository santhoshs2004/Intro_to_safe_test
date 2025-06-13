const { chromium } = require('playwright');
(async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://mit-canteen.netlify.app/index.html');
    await page.screenshot({ path: 'example.png' });
    await browser.close();
})();

const { test, expect } = require('@playwright/test');

test('MIT Canteen Login Form - UI Validation Test', async ({ page }) => {

  await page.goto('https://mit-canteen.netlify.app/index.html');
  await page.click('text=Log In');
  await page.locator('#login-email').fill(process.env.Test_Email)
  await page.locator('#login-password').fill(process.env.Password)
  await page.locator('/html/body/section[2]/div/form').click()
  const text=await page.locator().textContent();
  if (text!="ironmansandy") {
    console.error("Email validation failed");
  }
  await page.locator({path: 'screenshot.png'});
});


