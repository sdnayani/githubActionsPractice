import {test,expect} from '@playwright/test';

test.describe('Login Page Functionality',()=>{

test('practice test1', async ({ page }) => {

   await page.goto('https://www.saucedemo.com');
   console.log(await page.title());
   await expect(page).toHaveTitle('Swag Labs')
   console.log("Ending Practice Test1 ");
})

test('practice test2', async ({ page }) => {
    await page.goto('https://saucedemo.com')
    console.log(await page.title())
    await expect(page).toHaveTitle('Swag Labs')
    console.log('Ending Practice Test2')
  })

  test('Practice Test3',async({ page })=>{
   await page.goto('https://saucedemo.com')
   console.log(await page.title())
   expect(page).toHaveTitle('swag Labs2')
   console.log('Ending Practice Test3')
  })


})