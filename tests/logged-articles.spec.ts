import { test, expect } from '../src/page.fixtures';
import { faker } from '@faker-js/faker';

test.describe('Articles and logged user', () => {
  test.beforeEach(async ({ loginPage }) => {
    const userEmail = 'Moses.Armstrong@Feest.ca';
    const password = 'test1';

    // Arrange
    await loginPage.goto();

    // Act
    const welcomePage = await loginPage.login(userEmail, password);

    // Assert
    await expect(welcomePage.helloMessage).toBeVisible();
  });

  test('User can log in and view articles', async ({ articlesPage }) => {
    // Arrange
    await articlesPage.goto();

    // Act
    await articlesPage.openArticle(57);

    // Assert
    await expect(articlesPage.articleTitle).toBeVisible();
    await expect(articlesPage.articleBody).toBeVisible();
  });
});
