const BasePage = require('./BasePage')

class CheckboxesPage extends BasePage {
    
    constructor(page) {
        super(page);
        this.checkBoxOne = '//label[normalize-space()="Checkbox 1"]';
        this.checkBoxTwo = '//label[normalize-space()="Checkbox 2"]';
    }

    async navigateToCheckBoxesPage() {
        await this.page.goto('/checkboxes')
    }

}
module.exports = CheckboxesPage;