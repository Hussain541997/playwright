import {test} from '@playwright/test'
test ('Login adactin', async({page})=>{
    await page.goto('https://adactinhotelapp.com/HotelAppBuild2/')
    await page.locator('#username').fill('Hussain54')
    await page.locator('#password').fill('Hussain@65')
    await page.getByRole('button').click()
}

)