import {test} from '@playwright/test'
test('handling iframe', async({page})=>{
    await page.goto('https://commitquality.com/practice-iframe')
    const iframe1 = page.frameLocator('[data-testid="iframe"]')
    await iframe1.getByPlaceholder('Filter by product name').fill('7')
    await iframe1.getByRole('button',{name : 'Filter'}).click()
})