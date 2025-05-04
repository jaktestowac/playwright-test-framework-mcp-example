# Playwright Test Framework Example for AI & Playwright MCP Course by jaktestowac.pl

This repository provides an empty Playwright test framework that was designed to test AI and Playwright MCP (Model Context Protocol) in course

(Polish: _"[Playwright z AI – czyli jak usprawnić swoją pracę](https://jaktestowac.pl/course/playwright-z-ai/)"_ - _"Playwright with AI - how to improve your work"_)

by [jaktestowac.pl](https://jaktestowac.pl/contribution-playwright/) team.

## Overview

Repository contains tests for the following topics:

- **UI Tests with Page Object Model:**
  Automated browser tests for user registration, login, and viewing articles, using Playwright and the Page Object Model pattern for maintainability.

- **API Testing:**
  End-to-end API tests for health, about, users, including user registration, login and viewing articles.

- **Fixtures and Helpers:**
  Custom Playwright fixtures for page objects to promote code reuse and clarity.

- **Test Reporting and Configuration:**
  Example Playwright configuration for multiple reporters (HTML, JUnit, JSON), test directory structure, and device emulation.

## Tests and Covered Areas

The repository includes the following test files and their coverage:

- `tests/register.spec.ts`: UI test for user registration and login with unique credentials.
- `tests/login.spec.ts`: UI test for logging in with valid credentials.
- `tests/articles.spec.ts`: UI test for viewing articles as a guest user.
- `tests/logged-articles.spec.ts`: UI test for viewing articles as a logged-in user.

These tests cover:

- User registration and authentication flows
- Viewing articles (both as guest and logged-in user)

## Who we are?

We are **Test Architects and Senior Lead Tech Quality Engineers**, who are passionate about testing.
We are constantly looking for new ways to improve our skills and share our knowledge with others.

We are actively involved in the Playwright community, contributing to the project and sharing our knowledge with others. We have been using Playwright in **different companies and projects since 2021**.

We believe in the power of open source and the importance of giving back to the community.

Read more about our **[Contribution to Playwright and Community](https://jaktestowac.pl/contribution-playwright/)**

## Prerequisites

Before you start, make sure you have the following installed:

- [Node.js](https://nodejs.org) (v20 or later LTS version)
- our free application to practice automation - [🦎 GAD](https://github.com/jaktestowac/gad-gui-api-demo)
- [VSCode] (https://code.visualstudio.com) IDE for coding

## Project Structure

Test files are located in the `tests` directory. Each test file contains a set of tests that cover a specific functionality or feature of the application.

Configuration in file `playwright.config.ts` contain all global settings for project.

## Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/jaktestowac/playwright-test-framework-mcp-example.git
   cd playwright-test-framework-mcp-example
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Optionally install Playwright browsers:

   ```bash
   npx playwright install
   ```

4. Optionally install extensions for VSCode:

Navigate to "Extensions" tab in VSCode, filter extensions using "@recommended" filter

## Running Tests

Run all tests:

```bash
npm run test
```

Run specific test file:

```bash
npx playwright test tests/login.spec.ts
```

Run tests with UI mode:

```bash
npx playwright test --ui
```

Generate test report:

```bash
npx playwright show-report
```

## Troubleshooting

Common issues and solutions:

1. **Tests fail on first run**

   - Ensure 🦎 GAD application is running (by default on http://localhost:3000)
   - Check if correct Node.js version is installed

2. **Browser launch fails**
   ```bash
   npx playwright install
   ```

## Resources

- Our free application to practice automation - [🦎 GAD](https://github.com/jaktestowac/gad-gui-api-demo)
- [PL 🇵🇱] [Free Playwright Resources](https://jaktestowac.pl/darmowy-playwright/) - our free resources to learn Playwright
- [PL 🇵🇱] **Praktyczne wprowadzenie do testów automatycznych z Playwright** - [YouTube](https://www.youtube.com/playlist?list=PLfKhn9AcZ-cD2TCB__K7NP5XARaCzZYn7)
- [PL 🇵🇱] **Playwright Elements - Kluczowe koncepcje automatyzacji testów** - [YouTube](https://www.youtube.com/playlist?list=PLfKhn9AcZ-cAcpd-XN4pKeo-l4YK35FDA)
- [PL 🇵🇱] **Playwright MCP** - [YouTube](https://www.youtube.com/playlist?list=PLfKhn9AcZ-cCqD34AG5YRejujaBqCBgl4)
- [PL 🇵🇱] [Discord Community](https://discord.gg/mUAqQ7FUaZ) Join our Discord Community - first Polish Community about automation with Playwright!
- [ENG 🇬🇧] [VisualStudio Marketplace](https://marketplace.visualstudio.com/publishers/jaktestowac-pl) Our free plugins for VS Code and Playwright
- [ENG 🇬🇧] [Playwright Documentation](https://playwright.dev/docs/intro)
- [ENG 🇬🇧] [Playwright GitHub Repository](https://github.com/microsoft/playwright)

## Contact

Feel free to reach out to us:

- Website: [jaktestowac.pl](https://jaktestowac.pl)
- LinkedIn: [jaktestowac.pl](https://www.linkedin.com/company/jaktestowac/)

Happy testing and automating tests!🚀

jaktestowac.pl Team 💚❤️

PS. For more resources and updates, follow us on our [website](https://jaktestowac.pl) and [GitHub](https://github.com/jaktestowac).
