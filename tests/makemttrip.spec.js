import {test} from '@playwright/test'

test ('open makemytrip url', async ({page})=>{
    await page.goto ('https://www.makemytrip.com/')
    await page.waitForTimeout(4000)
    await page.locator('section').filter({ hasText: 'Personal AccountMyBiz Account' }).locator('span').first().click()

    
    


})