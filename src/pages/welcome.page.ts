import { Locator, Page } from '@playwright/test';

export class WelcomePage {
    helloMessage: Locator;

    constructor(private page: Page) {
        this.helloMessage = page.getByTestId('hello');
    }
}
