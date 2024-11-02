const { test, expect } = require('@playwright/test')
const DialogPage = require('../pages/DialogPage')
const userdata = require('../data/users.json');
const { johnDoe } = userdata.users;

test.describe('Testing 3 type of dialogs, JS Alert, JS Confirm and JS Prompt', () => {

    let dialogPage;

    test.beforeEach( async ({ page }) => {
        dialogPage = new DialogPage(page);
        await dialogPage.navigateToDialogPage();
    })

    test('Testing JS Allert', async ({page}) => {

        await dialogPage.waitForLoadStateToLoad();

        // waiting for the dialog
        page.once('dialog', async (dialog) => {
            await dialogPage.handleAlert(dialog, 'accept'); 
        })

         // triggering the alert
         await page.click(dialogPage.jsAlertButton);

        await expect(dialogPage.dialogResponseMessage).toContainText('OK');
    })

    test('Testing JS Confirm', async ({page}) => {

        await dialogPage.waitForLoadStateToLoad();

        // waiting for the dialog
        page.once('dialog', async (dialog) => {
            await dialogPage.handleAlert(dialog, 'dismiss'); 
        })

        // triggering the alert
        await page.click(dialogPage.jsConfirmButton);

        await expect(dialogPage.dialogResponseMessage).toContainText('Cancel');
    })

    test('Testing JS Prompt', async ({page}) => {

        await dialogPage.waitForLoadStateToLoad();

        // waiting for the dialog
        page.once('dialog', async (dialog) => {
            await dialogPage.handleAlert(dialog, 'accept', johnDoe); 
        })

        // triggering the alert
        await page.click(dialogPage.jsPromptButton);

        await expect(dialogPage.dialogResponseMessage).toContainText(johnDoe);
    })
})