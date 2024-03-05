import { test } from '@playwright/experimental-ct-react';

test('test messaging feature', async ({ page }) => {
  // authenticate
  await page.goto('http://localhost:3000/login');
  await page.getByPlaceholder('you@example.com').click();
  await page.getByPlaceholder('you@example.com').fill('anderssji94@gmail.com');
  await page.getByPlaceholder('••••••••').click();
  await page
    .getByPlaceholder('••••••••')
    .fill('a password i dont use elsewhere');
  await page.getByRole('button', { name: 'LOG IN' }).click();
  // go to item
  page.locator('img', { hasText: 'Image of Used Shoes' }).click;
  await page.goto('http://localhost:3000/item/125');
  page.locator('button', { hasText: 'MESSAGE' }).click;
  // messaging

  await page.goto('http://localhost:3000/conversations');
  await page.locator('textarea[placeholder="Type your message here"]').click;
});
