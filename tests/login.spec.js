const {test, expect} = require('@playwright/test')
const LoginPage = require('../pages/LoginPage')
const userdata = require('../data/users.json');

const { username, password } = userdata.admin;
const { wrongUsername, wrongPassword } = userdata.wrongUsernameAndPassword;
const { successfulLoginMessage, successfulTitleMessage } = userdata.messages;

const errorLoginMessageRegex = new RegExp(userdata.messages.errorLoginMessage);

const loginTestData = [
    { username: wrongUsername, password : password }, 
    { username: username, password : wrongPassword },
    { username: "", password : password },
    { username: username, password : "" }   
]

test.describe('testing login feature', () => {

    let loginPage;

    test.beforeEach( async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.navigateToLoginPage();
    })

    test('Happy path, testing successful login', async ({page}) => {

        await loginPage.login(username, password);
        await loginPage.waitForLoadStateToLoad();

        await expect(page).toHaveTitle(successfulTitleMessage);
        
        await expect(loginPage.homeButton).toBeVisible();
        await expect(loginPage.logoutButton).toBeVisible();
        await expect(loginPage.welcomeText).toHaveText(successfulLoginMessage);
    })

    loginTestData.forEach(({username, password}) => {

        test(`Sad path, testing login wrong username: 
            "${username || 'empty'}" and password: "${password || 'empty'} "`, 
            async ({page}) => {

            await loginPage.login(username, password);
            await loginPage.waitForLoadStateToLoad();
            
            await expect(loginPage.logoutButton).not.toBeVisible();

            await expect(loginPage.errorText).toContainText(errorLoginMessageRegex);
        })
    })   

})