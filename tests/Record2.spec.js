const { test,expect } = require('@playwright/test');
const {chromium} = require('@playwright/test')
test('Record demo2',async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://www.google.com/');
  await page.getByRole('button', { name: 'Accept all' }).click();
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('playwright');
  await page.getByRole('combobox', { name: 'Search' }).press('Enter');
  await page.getByRole('link', { name: 'Playwright: Fast and reliable end-to-end testing for modern ... Playwright https://playwright.dev' }).click();
  
  // ---------------------
  await context.close();
  await browser.close();
})