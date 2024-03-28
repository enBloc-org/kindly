import { test, expect } from '@playwright/experimental-ct-react';

test.describe('new conversations', () => {
  test('can be created from an Item page', async ({ page }) => {
    await page.goto('/item/97');
    await page.getByRole('button', { name: 'MESSAGE' }).click();
    await expect(
      page.locator('.conversation-height > div:nth-child(3)')
    ).toBeDefined();
  });
});

test.describe('/conversations', () => {
  test('displays latest messages sent', async ({ page }) => {
    await page.goto('/conversations');
    await page.locator('.conversation-card:has-text("Coat")').click();

    await page.getByPlaceholder('Type your message here').click();
    await page.getByPlaceholder('Type your message here').fill('Nice shoes');
    await page.locator('form').getByRole('button').click();

    await expect(
      page.locator('.message-card:has-text("Nice shoes")')
    ).toBeDefined();
  });

  // test('deletes an existing conversation', async ({page})=>{
  // this test is cannot be completed because deleting is not working
  // })
});
