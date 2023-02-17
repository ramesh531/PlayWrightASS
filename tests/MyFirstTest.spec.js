//require  it's node js function that's used  to inculde modules which are
//present in separate files

//I just need test.js and expect.js I just import only these 2
const {test,expect} = require('@playwright/test')

//the keyword async before a function makes the function returns a promise
//the keyword await before a function makes the function wait for a promise
test('My First Test',async ({page})=>{

    await page.goto('https://google.com')
    await expect(page).toHaveTitle('Google')


})
