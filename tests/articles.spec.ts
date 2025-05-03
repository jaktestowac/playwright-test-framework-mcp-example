import { test, expect } from '../src/page.fixtures';

test('User can view articles (recorded)', async ({ articlesPage }) => {
  // Arrange
  await articlesPage.goto();

  // Act
  await articlesPage.openArticle(57);

  // Assert
  await expect(articlesPage.articleTitle).toBeVisible();
  await expect(articlesPage.articleBody).toBeVisible();
});
