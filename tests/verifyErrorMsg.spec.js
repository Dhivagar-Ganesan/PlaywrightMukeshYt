import {test, expect} from '@playwright/test';

// Uncomment the line below to set a specific viewport size for all tests in this file
// test.use({viewport: { width: 1280, height: 720 }});

test('Verify Error Message on Invalid Login', async({page}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    
    //setting the viewport size
    await page.setViewportSize({ width: 1280, height: 720 });
    // Attempt to login with invalid credentials
    await page.fill('input[name="username"]', 'InvalidUser');
    await page.fill('input[name="password"]', 'InvalidPass');
    await page.click('button[type="submit"]');
    
    // Verify the error message is displayed
    const errorMessage = page.locator('.oxd-text.oxd-text--p.oxd-alert-content-text');
    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toHaveText('Invalid credentials');
    // Optionally, verify the URL remains the same
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
})