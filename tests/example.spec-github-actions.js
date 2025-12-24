import {test,expect} from '@playwright/test'
test.describe('Login Page Functionality',()=>{

  test('Practice Test1 ',async({page})=>{
    await page.goto('https://saucedemo.com')
    console.log(await page.title())
    expect(page).toHaveTitle('swag Labs')
    console.log('Ending Practice Test1')
  })
    test('Practice Test2 ',async({page})=>{
    await page.goto('https://saucedemo.com')
    console.log(await page.title())
    expect(page).toHaveTitle('swag Labs')
    console.log('Ending Practice Test2')
  })

  test('Practice Test3',async({page})=>{
   await page.goto('https://saucedemo.com')
   console.log(await page.title())
   expect(page).toHaveTitle('swag Labs2')
   console.log('Ending Practice Test3')
  })


})