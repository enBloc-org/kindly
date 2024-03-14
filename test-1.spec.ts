import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/login');
  await page.getByPlaceholder('you@example.com').click();
  await page.getByPlaceholder('you@example.com').fill('beth@foundersandcoders.com');
  await page.getByPlaceholder('you@example.com').press('Tab');
  await page.getByPlaceholder('••••••••').click();
  await page.getByPlaceholder('••••••••').fill('CouldHaveHadALatinName');
  await page.getByRole('button', { name: 'LOG IN' }).click();
  await page.getByRole('link', { name: 'Image of Red Nike Trainers' }).click();
  await page.getByRole('button', { name: 'MESSAGE' }).click();

  await page.locator('.conversation-height > div:nth-child(3)').click();
  await page.locator('.conversation-height > div:nth-child(3)').click();
});
await expect(page.locator('.conversation-height > div:nth-child(3)')).toBeVisible();