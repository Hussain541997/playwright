import {test,expect} from "@playwright/test"
test('suggestion Class', async({page})=>{
    test.slow()
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
    const sug =page.locator("xpath=//input[@id='autocomplete']")
    await sug.click()
    await sug.clear()
    await sug.pressSequentially('IND',{delay:1000})
    await page.locator('[id="ui-id-1"]').getByRole('listitem').nth(1).filter({hasText:'India'}).click()
    await page.pause()
})



test('suggestion Class2', async ({ page }) => {
    test.slow(); // makes it easier to observe UI during debugging

    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

    const sug = page.locator('xpath=//input[@id="autocomplete"]');
    await sug.click();
    await sug.fill(''); // clear the field
    await sug.pressSequentially('am', { delay: 1000 }); // type slowly to mimic real user

    // Wait for the suggestions to appear and select the one with 'Cambodia'
    const options = page.locator('#ui-id-1 li');
    await options.filter({ hasText: 'cambodia' }).first().click();

});



test('Check all suggestion items one by one', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

    const input = page.locator('input#autocomplete');

    // Helper function to type and get fresh options
    async function getOptionsAfterTyping() {
        await input.fill(''); // clear input
        await input.click();
        await page.keyboard.type('IND', { delay: 100 });

        const options = page.locator('#ui-id-1 li');
        await options.first().waitFor({ state: 'visible', timeout: 5000 });
        return options;
    }

    // Get initial options
    const initialOptions = await getOptionsAfterTyping();
    const total = await initialOptions.count();
    console.log(`Total suggestions: ${total}`);

    for (let i = 0; i < total; i++) {
        // Re-type and get fresh list every time
        const options = await getOptionsAfterTyping();

        // Click the i-th item
        const optionText = await options.nth(i).textContent();
        await options.nth(i).click();

        // Log what was selected
        const selectedValue = await input.inputValue();
        console.log(`Selected [${i + 1}]: ${optionText?.trim()} => Input value: ${selectedValue}`);

        // Optional small pause to observe
        await page.waitForTimeout(500);
    }

    await page.pause(); // pause at the end
});

test('suggestion Class4', async ({ page }) => {
    test.slow(); // makes it easier to observe UI during debugging

    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

    const sug = page.locator('xpath=//input[@id="autocomplete"]');
    await sug.click();
    await sug.fill(''); // clear the field
    await sug.pressSequentially('af', { delay: 1000 }); // type slowly to mimic real user

    // Wait for the suggestions to appear and select the one with 'Srilanka'
    const options = page.locator('#ui-id-1 li');
    await options.filter({ hasText: 'Srilanka' }).first().click();

});

test('suggestion Class5', async ({ page }) => {
    test.slow(); // makes it easier to observe UI during debugging

    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

    const sug = page.locator('xpath=//input[@id="autocomplete"]');
    await sug.click();
    await sug.fill(''); // clear the field
    await sug.pressSequentially('af', { delay: 1000 }); // type slowly to mimic real user

    // Wait for the suggestions to appear and select the one with 'Srilanka'
    const options = page.locator('#ui-id-1 li');
    await options.filter({ hasText: 'Srilanka' }).first().click();

});

