import { test, expect } from '../src/page.fixtures';

test('should log in with valid credentials', async ({ loginPage }) => {
  const userEmail = 'Moses.Armstrong@Feest.ca';
  const password = 'test1';

  // Arrange
  await loginPage.goto();

  // Act
  const welcomePage = await loginPage.login(userEmail, password);

  // Assert
  await expect(welcomePage.helloMessage).toBeVisible();
});
