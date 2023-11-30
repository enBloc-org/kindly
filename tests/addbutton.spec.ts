import { test } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/login');
  await page.getByPlaceholder('you@example.com').click();
  await page
    .getByPlaceholder('you@example.com')
    .fill('shaughn@foundersandcoders.com');
  await page.getByPlaceholder('••••••••').click();
  await page.getByPlaceholder('••••••••').fill('Brav0.sage94');
  await page.getByRole('button', { name: 'LOG IN' }).click();
  await page.getByRole('navigation').getByRole('link').nth(2).click();
  await page.locator('input[name="item_name"]').click();
});
