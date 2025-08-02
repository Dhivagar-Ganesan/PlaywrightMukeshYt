import {test, expect} from '@playwright/test';

test('verify login', async ({page}) => {
    
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.fill('input[name="username"]', 'Admin');
    await page.fill('input[name="password"]', 'admin123');
    await page.click('button[type="submit"]');
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    await expect(page.locator('.oxd-topbar-header-breadcrumb > h6')).toHaveText('Dashboard');
    await page.locator('.oxd-userdropdown-tab').click();
    await page.locator('.oxd-dropdown-menu > li:nth-child(4) > a').click();
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    
})