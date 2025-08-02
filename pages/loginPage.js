// const { expect } = require("@playwright/test");

const { expect } = require("@playwright/test");

class LoginPage {
    // method 1
    constructor(page) {
      this.page = page;
      this.Header = page.locator('.header')
      this.EmailInput = page.locator('input[name="email1"]');
      this.PasswordInput = page.locator('input[name="password1"]');
      this.SignInButton = page.locator('button[type="submit"]');
    }

    async loginToApplication(email, password) {
      await this.EmailInput.fill(email);
      await this.PasswordInput.fill(password);
      await this.SignInButton.click();
    }
    
    async verifySignInHeader(){
        await expect(this.Header).toBeVisible();
    }
    // uncomment the below method if you want to use a different way to define locators


   //method 2
//   constructor(page) {
//     this.page = page;
//     this.EmailInput = "#email1";
//     this.PasswordInput = "//input[@placeholder = 'Enter Password']";
//     this.SignInButton = "button[type='submit']";
//   }

//   async loginToApplication(EmailInput, PasswordInput) {
//     await this.page.fill(this.EmailInput, EmailInput);
//     await this.page.fill(this.PasswordInput, PasswordInput);
//     await this.page.click(this.SignInButton);
//   }
}

// export default { LoginPage };

module.exports = LoginPage;
