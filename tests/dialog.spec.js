const { test, expect } = require('@playwright/test')
const DialogPage = require('../pages/DialogPage')

test.describe('Testing 3 type of dialogs, JS Alert, JS Confirm and JS Prompt', () => {

    test('Testing JS Allert', async ({page}) => {

        const dialogPage = new DialogPage(page);

        await dialogPage.navigateTo();
        await dialogPage.waitForLoadStateToLoad();

        page.once('dialog', async (dialog) => {
            await dialogPage.handleAlert(dialog, 'accept'); 
        })

         // triggering the alert
         await page.click(dialogPage.jsAlertButton);

        await expect(dialogPage.dialogResponseMessage).toContainText('OK');
    })

    test('Testing JS Confirm', async ({page}) => {

        const dialogPage = new DialogPage(page);

        await dialogPage.navigateTo();
        await dialogPage.waitForLoadStateToLoad();

        page.once('dialog', async (dialog) => {
            await dialogPage.handleAlert(dialog, 'dismiss'); 
        })

        // triggering the alert
        await page.click(dialogPage.jsConfirmButton);

        await expect(dialogPage.dialogResponseMessage).toContainText('Cancel');
    })

    test('Testing JS Prompt', async ({page}) => {

        const dialogPage = new DialogPage(page);

        await dialogPage.navigateTo();
        await dialogPage.waitForLoadStateToLoad();

        page.once('dialog', async (dialog) => {
            await dialogPage.handleAlert(dialog, 'accept', 'John Doe'); 
        })

        // triggering the alert
        await page.click(dialogPage.jsPromptButton);

        await expect(dialogPage.dialogResponseMessage).toContainText('John Doe');
    })

})
