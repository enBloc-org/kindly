import { test } from '@playwright/experimental-ct-react';

test('test', async ({ page }) => {
  await page.getByRole('link', { name: 'Log in' })
  await page.getByPlaceholder('you@example.com')
  await page.getByPlaceholder('you@example.com').fill('beth@foundersandcoders.com');
  await page.getByPlaceholder('••••••••').click();
});