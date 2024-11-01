class BasePage{

    constructor(page) {
        this.page = page;
        this.timeout = 3000;
    }

    async handleAllert(accept = true) {
        await this.page.waitForEvent('dialog').then(dialog => {
            accept ? dialog.accept() : dialog.dismiss();
        });
    }

    async waitForElement(selector) {
        await this.page.waitForSelector(selector, {timeout});
    }

    async waitForNetworkKindle(){
        await this.page.waitForLoadState('networkindle', {timeout})
    }
 
    // TODO
    async closeModal(selector = 'selector here') {
        await this.page.click(selector);
    }
}

module.exports = BasePage;