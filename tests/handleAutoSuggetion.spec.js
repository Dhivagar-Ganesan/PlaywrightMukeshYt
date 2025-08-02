import {test, expect} from '@playwright/test';

test('Handle Auto Suggestion', async ({page}) => {

    await page.goto('https://www.google.com/');

    // Close "Sign in to Google" dialog if it appears
    const signInDialog = page.locator('text=Sign in to Google');
    if (await signInDialog.isVisible().catch(() => false)) {
        const staySignedOutBtn = page.locator('button:has-text("Stay signed out")');
        if (await staySignedOutBtn.isVisible().catch(() => false)) {
            await staySignedOutBtn.click();
            // Wait for the dialog to disappear before proceeding
            await signInDialog.waitFor({ state: 'detached', timeout: 5000 }).catch(() => {});
        }
    }

    await page.waitForSelector('input[name="q"]', { state: 'visible' });
    await page.locator('input[name="q"]').fill('Playwright');
    await page.waitForTimeout(1000); // Wait for suggestions to load
    
    page.locator('//li[@role = "presentation"]');

    const elements = await page.$$('li[role="presentation"]'); // Get all suggestion elements
    //$$ returns an array of elements from the selector or gives an empty array if no elements are found

    for(let i = 0; i < elements.length; i++) {
        const text = await elements[i].textContent();
        
        if (text.includes('youtube')) {
            await elements[i].click();
            break; // Click the first matching suggestion and exit the loop
        }
    }

})
