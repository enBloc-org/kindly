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
    const ellipsisMenu = await page.waitForSelector(
      '.conversation-card:has-text("Coat") > [data-testid="ellipsis-menu"]'
    );
    await ellipsisMenu.click();

    page.screenshot({ path: 'ellispis.png' });
  });
});
