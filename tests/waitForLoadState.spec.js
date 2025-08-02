import {test, expect} from '@playwright/test';


test('Working with load state', async({page})=> {

    await page.goto('https://freelance-learn-automation.vercel.app/login');

    await page.getByAltText("New user? Signup").click();
    // Wait for the new page to load completely -> as page takes time to load
    await page.waitForLoadState('networkidle');

    const count = await page.locator('//input[@type="checkbox"]').count();

    expect(count).toBe(6);

})