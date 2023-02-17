import {test, expect} from '@playwright/test'

test('Login applitools Demo',async ({page})=>{

    await page.goto('https://demo.applitools.com')

    await page.pause()
    
    await page.getByPlaceholder('Enter your username').fill('Ramesh')
    await page.getByPlaceholder('Enter your password').fill('Allamsetti')
    await page.getByRole('link', { name: 'Sign in' }).click()

})

test('Login HRM Demo',async ({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/')

    await page.pause()

    await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Paul Collings' }).locator('i').click();
  await page.getByRole('menuitem', { name: 'Logout' }).click();
    
})

test.only('Demo Login 3',async ({page})=>{
    await page.pause()
    await page.goto('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F');
    await page.getByLabel('Email:').click();
    await page.getByLabel('Email:').press('Meta+a');
    await page.getByLabel('Email:').fill('admin@yourstore.com');
    await page.getByLabel('Email:').press('Tab');
    await page.getByLabel('Password:').fill('admin');
    await page.getByRole('button', { name: 'Log in' }).click();
    await page.getByRole('link', { name: 'Logout' }).click();
    
    await page.close()
})