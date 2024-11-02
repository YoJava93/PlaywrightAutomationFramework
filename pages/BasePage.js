class BasePage{

    constructor(page) {
        this.page = page;
        this.timeout = 5000;
    }

    async handleAlert(dialog, action = 'accept', promptText = '') {
        const dialogType = dialog.type();
    
        if (dialogType === 'alert') {

          if (action === 'accept') {
            await dialog.accept();
          }
        } else if (dialogType === 'confirm') {

          action === 'accept' ? await dialog.accept() : await dialog.dismiss();
        } else if (dialogType === 'prompt') {

          if (action === 'accept') {
            await dialog.accept(promptText);
          } else {
            await dialog.dismiss();
          }
        }
      }
      

    async waitForElement(selectorOrLocator) {
        if (typeof selectorOrLocator === 'string') {
          // If it's a string, use waitForSelector
          await this.page.waitForSelector(selectorOrLocator, { timeout: this.timeout });
        } else {
          // If it's a locator, use its waitFor method
          await selectorOrLocator.waitFor({ timeout: this.timeout });
        }
      }

    async waitForLoadStateToLoad(){
        await this.page.waitForLoadState('load', {timeout : this.timeout})
    }
}

module.exports = BasePage;