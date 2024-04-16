import { test, expect } from '@playwright/experimental-ct-react';

test.describe('CurrentConversation', () => {
  test.beforeEach('Navigate to /conversations', async ({ page }) => {
    await page.goto('/conversations');
  });

  test('displays ConversationPartner name', async ({ page }) => {
    expect(
      await page.waitForSelector('p[data-testid="conversation-partner-name"]')
    );
  });

  test('displays ConversationPartner avatar', async ({ page }) => {
    expect(
      await page.waitForSelector(
        'img[data-testid="conversation-partner-avatar"]'
      )
    );
  });
});
