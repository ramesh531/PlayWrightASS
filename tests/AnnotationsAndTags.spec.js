import {test} from '@playwright/test'
test.skip('Test1',async({page})=>{

   // console.log('This test will be skipped')
})

test('not yet ready',async({page})=>{

    test.fail()
})

test.fixme('test to be fixed',async({page})=>{


})

test('test to be fixed',async({page})=>{

    test.slow(); // Slows the execution 3 times based in the config
})

test.only('This will be executed',async({page})=>{

})

//Conditionally skip a test
test.only('Conditional skip ',async({page})=>{

    test.skip(browserName === 'firefox','Still working on it')

})

//while running we give npx playwright test tests/.spec.js --grep '@smoke'
test('Tag with title  @smoke',async({page})=>{


})

//while running we give npx playwright test tests/.spec.js --grep-invert '@smoke' then all tests that has smoke tag will be skipped 


