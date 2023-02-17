import { test, expect } from '@playwright/test'

test('Selectors Demo', async ({ page }) => {

    await page.goto('https://saucedemo.com')

    //Using any object property
    await page.click('id=user-name')

    //Both below logics will work 
    //await page.locator('id=user-name').fill('Ramesh')
    await page.locator("[id='user-name']").fill('Ramesh')

    //Using xpath below 2 ways will work
    await page.locator('xpath=//input[@name="password"]').fill('Allamsetti')
    await page.locator("//input[@name='password']").fill('Allamsetti')


    //To pause the execution and to open the playwright inspector
    await page.pause()

    //Using Text attribute
    await page.locator('text=LOGIN').click()
    await page.locator('input:has-text("LOGIN")').click()

    //Using CSS Selector for login-button
    await page.locator('#login-button').click()

})