import { test as base } from '@playwright/test';
import { LoginPage } from './pages/login.page';
import { RegisterPage } from './pages/register.page';
import { WelcomePage } from './pages/welcome.page';
import { ArticlesPage } from './pages/articles.page';

interface PageObjectFixtures {
  loginPage: LoginPage;
  registerPage: RegisterPage;
  welcomePage: WelcomePage;
  articlesPage: ArticlesPage;
}

export const test = base.extend<PageObjectFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  registerPage: async ({ page }, use) => {
    await use(new RegisterPage(page));
  },
  welcomePage: async ({ page }, use) => {
    await use(new WelcomePage(page));
  },
  articlesPage: async ({ page }, use) => {
    await use(new ArticlesPage(page));
  },
});

export { expect } from '@playwright/test';
