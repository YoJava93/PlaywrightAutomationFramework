const { test, expect } = require('@playwright/test')
const CheckboxesPage = require('../pages/CheckboxesPage')

test('Testing the checkboxes', async ({ page }) => {

    const checkboxesPage = new CheckboxesPage(page);

    await checkboxesPage.navigateToCheckBoxesPage();
    await checkboxesPage.waitForLoadStateToLoad();

    await page.locator(checkboxesPage.checkBoxOne).check();

    // by default the checkbox 2 is checked, uncheking it here
    await page.locator(checkboxesPage.checkBoxTwo).uncheck();

    await expect(page.locator(checkboxesPage.checkBoxOne)).toBeChecked();
    await expect(page.locator(checkboxesPage.checkBoxTwo)).not.toBeChecked();
})