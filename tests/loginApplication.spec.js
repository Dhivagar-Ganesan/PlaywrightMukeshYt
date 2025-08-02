// import {test, expect} from '@playwright/test';
// import {LoginPage} from '../pages/loginPage';

const {test, expect} = require('@playwright/test');
const LoginPage = require('../pages/loginPage');
const HomePage = require('../pages/homePage');


test('Login Application Test Using POM', async ({page}) => {

    await page.goto('https://freelance-learn-automation.vercel.app/login');

    const loginPage = new LoginPage(page);

    // const email = "admin@email.com";
    // const password = "admin123";
    // await loginPage.loginToApplication(email, password);

    //above code is commented out, using the below line instead
    await loginPage.loginToApplication("admin@email.com", "admin@123");

    const homePage = new HomePage(page);
    await homePage.verifyManagaOption(); 
    await homePage.logoutFromApplication()
})