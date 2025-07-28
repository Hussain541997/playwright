import {test, expect} from '@playwright/test'
test ('checkbox', async ({page})=> {
    //for go to url 
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
    //checking the check box
    await page.locator('#checkBoxOption1').check()
    await page.waitForTimeout(3000)
    await page.locator('#checkBoxOption2').check()
    await page.waitForTimeout(3000)
    await page.locator('#checkBoxOption3').click()
    await page.waitForTimeout(3000)
    //uncheck the check box
    await page.locator('#checkBoxOption1').uncheck()
    await page.waitForTimeout(3000)
    await page.locator('#checkBoxOption2').uncheck()
    await page.waitForTimeout(3000)
    await page.locator('#checkBoxOption3').uncheck()
    await page.waitForTimeout(3000)


})

test ('check ', async ({page})=> {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')

    //locators
    const checkbox1 = page.locator('#checkBoxOption1')
    const checkbox2 = page.locator('#checkBoxOption2')
    const checkbox3 = page.locator('#checkBoxOption3')

    //check
    await checkbox1.check()
    await checkbox2.check()
    await checkbox3.check()

    //verify the check
    await expect(checkbox1).toBeChecked
    await expect(checkbox2).toBeChecked
    await expect(checkbox3).toBeChecked

    //uncheck
    await checkbox1.uncheck()
    await checkbox2.uncheck()
    await checkbox3.uncheck()

    //verify the uncheck

    await expect (checkbox1).not.toBeChecked()
    await expect (checkbox2).not.toBeChecked()
    await expect (checkbox3).not.toBeChecked()
})