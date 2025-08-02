import { test, expect } from '@playwright/test';


test('Handle Alert', async ({ page }) => {

    // Register dialog handler before navigation and clicking the button
    page.on('dialog', async (dialog) => {
        console.log('Alert message:', dialog.message());
        expect(dialog.type()).toBe('alert'); // Verify it's an alert dialog
        expect(dialog.defaultValue()).toBe(''); // Alerts do not have a default value
        expect(dialog.message()).toBe('I am a JS Alert');
        await dialog.accept(); // Accept the alert
    });

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

    // Click on the button to trigger the alert
    await page.locator('button:has-text("Click for JS Alert")').click();

    // Verify that the alert was accepted
    const resultText = await page.locator('#result').textContent();
    expect(resultText).toBe('You successfully clicked an alert');
})


test('Handle Confirm Alert', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

    // Wait for the confirm alert to appear
    page.on('dialog', async (dialog) => {
        console.log('Confirm message:', dialog.message());
        expect(dialog.type()).toBe('confirm'); // Verify it's a confirm dialog
        expect(dialog.defaultValue()).toBe(''); // Confirm dialogs do not have a default value
        expect(dialog.message()).toBe('I am a JS Confirm');
        await dialog.accept(); // Accept the confirm alert
    });

    // Click on the button to trigger the confirm alert
    await page.locator('button:has-text("Click for JS Confirm")').click();


    // Verify that the confirm alert was accepted
    const resultText = await page.locator('#result').textContent();
    expect(resultText).toBe('You clicked: Ok');
})


test('Handle Prompt Alert', async ({ page }) => {

    //wait for the prompt alert to appear
    page.on('dialog', async (dialog) => {
        console.log('Prompt message:', dialog.message());
        expect(dialog.type()).toBe('prompt'); // Verify it's a prompt dialog
        expect(dialog.defaultValue()).toBe(''); // Prompt dialogs have a default value
        expect(dialog.message()).toBe('I am a JS prompt');
        await dialog.accept('Hello, this is a prompt response!'); // Accept the prompt with a response
    }); 

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    // Click on the button to trigger the prompt alert
    await page.locator('button:has-text("Click for JS Prompt")').click();
    // Verify that the prompt alert was accepted
    const resultText = await page.locator('#result').textContent();
    expect(resultText).toBe('You entered: Hello, this is a prompt response!');
});