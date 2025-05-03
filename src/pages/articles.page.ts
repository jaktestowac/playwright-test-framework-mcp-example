import { Locator, Page } from '@playwright/test';
import { WelcomePage } from './welcome.page';

export class ArticlesPage {
  url = '/articles.html';
  articleTitle: Locator;
  articleBody: Locator;

  constructor(protected page: Page) {
    this.articleTitle = page.getByTestId('article-title');
    this.articleBody = page.getByTestId('article-body');
  }

  async goto(): Promise<void> {
    await this.page.goto(this.url);
  }

  articleLink(articleId: number): Locator {
    return this.page.getByTestId(`article-${articleId}-link`);
  }

  async openArticle(articleId: number): Promise<void> {
    await this.articleLink(articleId).click();
  }
}
