import { By, PageElement } from '@serenity-js/web';

export class LoginPage {
    static readonly usernameField = PageElement.located(By.id('user-name')).describedAs('username field');

    static readonly passwordField = PageElement.located(By.id('password')).describedAs('password field');
    
    static readonly loginButton = PageElement.located(By.id('login-button')).describedAs('login button');
}