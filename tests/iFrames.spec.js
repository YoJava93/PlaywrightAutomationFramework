const { test, expect } = require('@playwright/test')
const IFramesPage = require('../pages/IFramesPage')
const userdata = require('../data/users.json');
const { johnDoe, johnDoeEmail } = userdata.users;
const { backspace } = userdata.keybord;
const { youAreSubscribeMessage } = userdata.messages;

test.describe('Testing IFrames', () => {

    let iFramesPage;

    test.beforeEach( async ({ page }) => {
        iFramesPage = new IFramesPage(page);
        await iFramesPage.navigateToIFramePage();
    })

    test('Testing external IFrame', async ({page}) => {

        const iFrameElement = await page.frameLocator(iFramesPage.externalIFrame);

        const iFrameBody = await iFrameElement.locator(iFramesPage.externalIFrameInputBox);
        await iFrameBody.selectText();
        await page.keyboard.press(backspace);
        await iFrameBody.fill(johnDoe);

        await expect(iFrameBody).toHaveText(johnDoe);
    })

    test('Testing internal IFrame', async ({page}) => {

        const iFrame = await page.frameLocator(iFramesPage.internaelIFrame);

        const inputBox = await iFrame.locator(iFramesPage.internalIFrameInputBox);
        await inputBox.fill(johnDoeEmail);

        const subscribeButton = await iFrame.locator(iFramesPage.internaelIFrameSubscribeButton)
        await subscribeButton.click();

        const successMessage = await iFrame.locator(iFramesPage.internaelIFrameSuccessMessage)
        await expect(successMessage).toHaveText(youAreSubscribeMessage)
    })
})