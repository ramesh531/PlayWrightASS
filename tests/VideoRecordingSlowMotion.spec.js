import{test,expect,chromium} from '@playwright/test'

test('VideoRecording Slow Motion',async()=>{

    //Launch browser
    //const browser = await chromium.launch()
    const browser = await chromium.launch({
        slowMo: 500,
        headless: false
    })

    //Create a new incognito browser context
   // const context = await browser.newContext()
    const context = await browser.newContext({
        recordVideo:{

            dir:'Videos',
            size: {width:800,height:600}
            
        }

    })

    //Create new page inside context
    const page = await context.newPage()
    await page.goto('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F');
    await page.getByLabel('Email:').click();
    await page.getByLabel('Email:').press('Meta+a');
    await page.getByLabel('Email:').fill('admin@yourstore.com');
    await page.getByLabel('Email:').press('Tab');
    await page.getByLabel('Password:').fill('admin');
    await page.getByRole('button', { name: 'Log in' }).click();
    await page.getByRole('link', { name: 'Logout' }).click();

    //close the context
    await context.close()

})