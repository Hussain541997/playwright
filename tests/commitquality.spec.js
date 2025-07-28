import {test, expect} from '@playwright/test'
test('General components', async({page})=>{
    await page.goto('https://commitquality.com/practice')
    await page.locator("//h2[text()='General Components']").click()
    await page.pause()
    await page.locator('[data-testid="basic-click"]').click()
    await page.pause()
    await page.locator('[data-testid="double-click"]').dblclick()
    await page.pause()
    await page.locator('[data-testid="right-click"]').click({button:'right'})
    await page.pause()
    await page.locator('[data-testid="option1"]').click()
    await page.locator('[data-testid="option2"]').click()
    await page.pause()
    const select =page.getByRole('combobox')
    select.selectOption('Option 1')
    select.selectOption('Option 2')
    select.selectOption('Option 3')
    await page.pause()
    const cb1= page.getByTestId('checkbox1')
    const cb2= page.getByTestId('checkbox2')
    const cb3= page.getByTestId('checkbox3')
    await cb1.check()
    await cb2.check()
    await cb3.check()
    
    await expect(cb1).toBeChecked()
    await expect(cb2).toBeChecked()
    await expect(cb3).toBeChecked()
    await page.pause()

    const page1 = page.getByTestId('link-same-tab').con
    const page2 = page.getByTestId('link-newtab').click()
    const page3 = page.getByTestId('link-newtab-practice').click()
    
    

})
