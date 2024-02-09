import { test } from '@playwright/experimental-ct-react';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/login');
  await page.getByPlaceholder('you@example.com').click();
  await page.getByPlaceholder('you@example.com').fill('anderssji94@gmail.com');
  await page.getByPlaceholder('••••••••').click();
  await page
    .getByPlaceholder('••••••••')
    .fill('a password i dont use elsewhere');
  await page.getByRole('button', { name: 'LOG IN' }).click();
  await page.locator('div').filter({ hasText: 'HomePage' }).first().click();
});
