import { test, expect } from '@playwright/experimental-ct-react';

test.describe('CurrentConversation', () => {
  test('displays ConversationPartner name', async ({ page }) => {
    await page.goto('/conversations');
    expect(
      await page.waitForSelector('p[data-testid="conversation-partner-name"]')
    );
  });
});
