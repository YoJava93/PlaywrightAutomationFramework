const {test, expect} = require('@playwright/test')
const LoginPage = require('../pages/LoginPage')
const userdata = require('../data/users.json');


test.describe('testing login', () => {
    test('Happy path, testing successful login', async ({page}) => {

        const loginPage = new LoginPage(page);
        const {username, password} = userdata.admin;

        await loginPage.navigateTo(); 
        await loginPage.login(username, password);

        await expect(page).toHaveTitle('Secure Page page for Automation Testing Practice');
        
        await expect(loginPage.homeButton).toBeVisible();
        await expect(loginPage.logoutButton).toBeVisible();
        await expect(loginPage.welcomeText).toHaveText('You logged into a secure area!');
    })
})