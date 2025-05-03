import { Locator, Page } from '@playwright/test';
import { WelcomePage } from './welcome.page';

export class LoginPage {
    url = '/login';
    emailInput: Locator;
    passwordInput: Locator;
    loginButton: Locator;

    constructor(protected page: Page) {
        this.emailInput = page.getByRole('textbox', { name: 'Enter User Email' });
        this.passwordInput = page.getByRole('textbox', { name: 'Enter Password' });
        this.loginButton = page.getByRole('button', { name: 'LogIn' });
    }

    async goto(): Promise<void> {
        await this.page.goto(this.url);
    }

    async login(email: string, password: string): Promise<WelcomePage> {
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
        return new WelcomePage(this.page);
      }
}
