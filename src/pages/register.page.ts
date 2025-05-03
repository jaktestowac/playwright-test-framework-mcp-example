import { Locator, Page } from '@playwright/test';
import { LoginPage } from './login.page';

export class RegisterPage {
  url = '/register.html';
  firstNameInput: Locator;
  lastNameInput: Locator;
  emailInput: Locator;
  birthDateInput: Locator;
  passwordInput: Locator;
  registerButton: Locator;

  constructor(protected page: Page) {
    this.firstNameInput = page.getByRole('textbox', {
      name: 'Enter User First Name',
    });
    this.lastNameInput = page.getByRole('textbox', {
      name: 'Enter User Last Name',
    });
    this.emailInput = page.getByRole('textbox', { name: 'Enter User Email' });
    this.birthDateInput = page.getByRole('textbox', {
      name: 'Enter Birth Date',
    });
    this.passwordInput = page.getByRole('textbox', { name: 'Enter Password' });
    this.registerButton = page.getByRole('button', { name: 'Register' });
  }

  async goto(): Promise<void> {
    await this.page.goto(this.url);
  }

  /**
   * Registers a new user.
   * @param birthDate Birth date in 'yyyy-mm-dd' format (required by the date picker)
   */
  async register(
    firstName: string,
    lastName: string,
    email: string,
    birthDate: string,
    password: string,
  ): Promise<LoginPage> {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.emailInput.fill(email);
    await this.birthDateInput.fill(birthDate);
    // Close the date picker popup by pressing Tab
    await this.birthDateInput.press('Tab');
    await this.passwordInput.fill(password);
    await this.registerButton.click();
    return new LoginPage(this.page);
  }
}
