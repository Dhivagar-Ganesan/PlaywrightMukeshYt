const { expect } = require('@playwright/test');

class HomePage {
    
  constructor(page) {
    this.page = page;
    this.manageOption = page.locator("//span[normalize-space()='Manage']")
    this.menu = page.locator("//img[@alt='menu']");
    this.signOut = page.locator("//button[normalize-space()='Sign out']");
   
  }

  async verifyManagaOption(){
    await expect(this.manageOption).toBeVisible();
  }

  // ... methods
  async logoutFromApplication(){
    await this.menu.click();
    await this.signOut.click();
    // await this.page.click(this.signOut);
  }
}

module.exports = HomePage;