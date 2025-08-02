import {test, expect} from '@playwright/test';
import testData from '../testdata.json';


test.describe('Datadriven login test', () => {
    for (const data of testData) {
        test(`login with user ${data.id}`, async ({ page }) => {
            await page.goto('https://freelance-learn-automation.vercel.app/login');
            await page.locator('#email1').fill(data.username); // Using the username from the JSON data
            await page.locator('#password1').fill(data.password); // Using the password from the JSON data
            // Add your assertions here, e.g.:
            // await expect(page).toHaveURL('expected-url-after-login');
        });
    }
})