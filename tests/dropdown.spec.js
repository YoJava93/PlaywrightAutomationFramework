const { test, expect } = require('@playwright/test')
const DropdownsPage = require('../pages/DropdownsPage')

test.describe('Testing select dropdowns', () => {
    
    test('Select dropdown test', async ({ page }) => {

        const selectDropdownPage = new DropdownsPage(page);

        selectDropdownPage.navigateToSelectDropdownPage();
        selectDropdownPage.waitForLoadStateToLoad();

        const options = await page.locator(selectDropdownPage.allAvailableOptions);
        await expect(options).toHaveCount(252);

        const content = await page.locator(selectDropdownPage.selectDropdown).textContent();
        await expect(content.includes('Moldova, Republic of')).toBeTruthy();

        await page.locator(selectDropdownPage.selectDropdown).selectOption('Moldova, Republic of')
        const selectedOption = await page.locator(selectDropdownPage.selectedOption).textContent();
        await expect(selectedOption).toBe('Moldova, Republic of')
    })
})
