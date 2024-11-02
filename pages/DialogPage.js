const BasePage = require("./BasePage")

class DialogPage extends BasePage {

    constructor(page) {
        super(page);

        this.jsAlertButton = '#js-alert';
        this.jsConfirmButton = '#js-confirm';
        this.jsPromptButton = '#js-prompt';
        this.dialogResponseMessage = page.locator('#dialog-response');
    }

    async navigateTo() {
        await this.page.goto('/js-dialogs')
    }
}
module.exports = DialogPage;