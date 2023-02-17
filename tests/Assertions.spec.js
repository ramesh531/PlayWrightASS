import {test,expect} from '@playwright/test'
test('Assertions demo', async ({page})=>{

    await page.goto('https://kitchen.applitools.com')

    await page.pause()

    //check element present or not
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveCount(1)

    if(await page.$('text=The Kitchen'))
    {
        await page.getByRole('heading', { name: 'The Kitchen' }).click()

    }

    //check element is visible or hidden or not

    await expect(page.getByRole('heading',{name : 'The Kitchen'})).toBeVisible()

    await expect.soft(page.getByRole('heading',{name: 'The Kitchen'})).toBeHidden()

    //Check element is enabled or disabled
    await expect(page.getByRole('heading',{name: 'The Kitchen'})).toBeEnabled()
      await expect.soft(page.getByRole('heading',{name: 'The Kitchen'})).toBeDisabled()

      //Chect text 

    await expect(page.locator('text=The Kitchen')).toHaveText('The Kitchen')
    await expect(page.locator('text=The Kitchen')).not.toHaveText('Kitchen')

    //Check page URL and title

    await page.pause()

    await expect(page).toHaveURL('https://kitchen.applitools.com')
    //we can use regular expression as well for URL or Title
    await expect(page).toHaveTitle(/.*Kitchen/)

    //page visual validation  with screenshot 

    await expect(page).toHaveScreenshot()
})