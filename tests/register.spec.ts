import { test, expect } from '../src/page.fixtures';

// Helper to generate a unique email
function uniqueEmail() {
  const timestamp = Date.now();
  return `user${timestamp}@example.com`;
}

test('should register a new unique user and log in with the same credentials', async ({
  registerPage,
  loginPage,
}) => {
  const firstName = 'Test';
  const lastName = 'User';
  const email = uniqueEmail();
  const birthDate = '2000-01-01';
  const password = 'TestPassword123!';

  // Register
  await registerPage.goto();
  await registerPage.register(firstName, lastName, email, birthDate, password);

  // Go to login page (simulate logout by navigating directly)
  await loginPage.goto();

  // Log in with the same credentials
  const welcomePage = await loginPage.login(email, password);

  // Assert
  await expect(welcomePage.helloMessage).toBeVisible();
});
