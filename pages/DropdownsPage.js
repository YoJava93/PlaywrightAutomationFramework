const BasePage = require("./BasePage")

class DropdownsPage extends BasePage {

    constructor(page) {
        super(page);
        this.selectDropdown = '#country';
        this.allAvailableOptions = '#country option'
        this.selectedOption = '#country option:checked'
    }

    async navigateToSelectDropdownPage() {
        await this.page.goto('/dropdown')
    }
}
module.exports = DropdownsPage;