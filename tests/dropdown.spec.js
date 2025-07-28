import {test} from '@playwright/test'
test ('dropdown',async ({page})=>{
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
    const dd = page.locator('#dropdown-class-example')
    dd.selectOption('Option1')
    dd.selectOption('Option2')
    dd.selectOption('Option3')
})