const BasePage = require("./BasePage")


class LoginPage extends BasePage {

    constructor(page){
        super(page);

        this.usernameField = '#username';
        this.passwordField = '#password';
        this.loginButton = 'button[type="submit"]';
        this.homeButton = page.locator('//li[@class="breadcrumb-item"]');
        this.logoutButton = page.locator('//i[@class="icon-2x icon-signout"]');
        this.welcomeText = page.locator('//b[normalize-space()="You logged into a secure area!"]');
        this.errorText = page.locator('#flash')
    }

    async navigateTo() {
        await this.page.goto('/login');
    }

    async login(username, password) {
        await this.page.fill(this.usernameField, username);
        await this.page.fill(this.passwordField, password);
        await this.page.click(this.loginButton);
    }
}
module.exports = LoginPage; 