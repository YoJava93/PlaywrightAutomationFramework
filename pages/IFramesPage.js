const BasePage = require('./BasePage')

class IFramesPage extends BasePage {
    constructor(page) {
        super(page);
        this.externalIFrame = '#mce_0_ifr';
        this.externalIFrameInputBox = '#tinymce';
        this.internaelIFrame = '#email-subscribe';
        this.internalIFrameInputBox = '#email';
        this.internaelIFrameSubscribeButton = '#btn-subscribe';
        this.internaelIFrameSuccessMessage = '#success-message'
    }

    async navigateToIFramePage() {
        await this.page.goto('/iframe')
    }
}
module.exports = IFramesPage;