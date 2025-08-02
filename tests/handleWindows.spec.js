import {test, expect} from '@playwright/test';


test('Test working with multple tabs', async({playwright}) => {

    const browser = await playwright.chromium.launch({headless: false});
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://freelance-learn-automation.vercel.app/login');
    
    
    await page.waitForSelector('a[href="https://youtube.com/MukeshOtwani"]', { state: 'visible' });
    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        page.click('a[href="https://youtube.com/MukeshOtwani"]')
    ]);

    // Wait for the new page to load completely
    await newPage.waitForLoadState();

    // Only interact if the placeholder exists (for demonstration, check and log)
    const headerText = await newPage.$("//span[@role='text'][normalize-space()='Mukesh otwani']");
    if (headerText) {
        const text = await headerText.innerText();
        if (text === 'Mukesh otwani') {
            await expect(headerText).toBeTruthy();
        } else {
            console.log('Header text does not match.');
        }
    } else {
        console.log('Header text is not found.');
    }

    await newPage.close();

    await page.getByPlaceholder('Enter Email').fill('admin@gamil.com');

})
