import { test, expect } from '@playwright/experimental-ct-react';

test.describe('new conversations', () => {
  test('can be created from an Item page', async ({ page }) => {
    await page.goto('/item/97');
    await page.getByRole('button', { name: 'MESSAGE' }).click();

    const conversationCard = await page.waitForSelector(
      '.conversation-card:has-text("Coat")'
    );

    await expect(conversationCard).toBeDefined();
  });
});

test.describe('/conversations', () => {
  test('displays latest messages sent', async ({ page }) => {
    await page.goto('/conversations');

    const conversationCard = await page.waitForSelector(
      '.conversation-card:has-text("Coat")'
    );
    await conversationCard.click();

    await page.getByPlaceholder('Type your message here').fill('Nice shoes');
    await page.locator('form').getByRole('button').click();

    await expect(
      page.locator('.message-card:has-text("Nice shoes")')
    ).toBeDefined();
  });

  test('deletes an existing conversation', async ({ page }) => {
    await page.goto('/conversations');

    const conversationCard = await page.waitForSelector(
      '.conversation-card:has-text("Coat")'
    );

    const originalCount = await page
      .locator('.conversation-card:has-text("Coat")')
      .count();

    const ellipsisMenu = await conversationCard.$(
      'button[data-testid="ellipsis-menu"]'
    );
    await ellipsisMenu?.click(); // open ellipsis menu
    await page.locator('button:has-text("Delete Conversation")').click(); // select 'Delete conversation'
    await page.locator('.button-rounded[aria-label="Delete"]').click(); // confirm choice

    const newCount = await page
      .locator('.conversation-card:has-text("Coat")')
      .count();

    await expect(newCount).toBeLessThan(originalCount);
  });
});
