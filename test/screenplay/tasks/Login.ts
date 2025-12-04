import { Task } from '@serenity-js/core';
import { Click, Enter } from '@serenity-js/web';
import { LoginPage } from '../ui/LoginPage';

export class Login {
    static withCredentials(username: string, password: string) {
        return Task.where(`#actor logs in with username ${username} and password ${password}`,
            Enter.theValue(username).into(LoginPage.usernameField),
            Enter.theValue(password).into(LoginPage.passwordField),
            Click.on(LoginPage.loginButton)
        );
    }
}