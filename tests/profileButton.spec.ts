import { test } from '@playwright/experimental-ct-react';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/login');
  await page.getByPlaceholder('you@example.com').click();
  await page.getByPlaceholder('you@example.com').fill('anderssji94@gmail.com');
  await page.getByPlaceholder('••••••••').click();
  await page
    .getByPlaceholder('••••••••')
    .fill('a password i dont use elsewhere');
  await page.getByPlaceholder('••••••••').press('Enter');
  await page.getByRole('navigation').getByRole('link').nth(4).click();
  await page.getByRole('heading', { name: 'Profile' }).click();
});
