import {test,expect} from '@playwright/test'
import {LoginPage} from '../pages/Login'

test('Page Object Demo',async({page})=>{

    const loginPage = new LoginPage(page)

    await page.goto('https://the-internet.herokuapp.com/login')

    await loginPage.login('tomsmith','SuperSecretPassword')
})