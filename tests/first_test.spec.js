import {test} from '@playwright/test'
test('Login orangeHrm', async({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.locator('.oxd-input.oxd-input--active[name="username"]').fill('Admin')
    await page.locator('.oxd-input.oxd-input--active[placeholder="Password"]').fill('admin123')
    await page.locator('button').click()
})