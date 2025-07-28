import {test} from '@playwright/test'

test('Login amazon', async ({page})=> {
    await page.goto('https://www.amazon.in')
    await page.getByText('Hello, sign in').click()
   
    await page.getByRole('textbox').fill('hussainimubarak6@gmail.com')
    await page.pause()
    // await page.getByRole('button',{name:'Continue'}).click()
    // await page.getByRole('textbox').fill('Hussain@65')
    // await page.getByRole('button',{name:'Sign in'}).click()
    
}
)