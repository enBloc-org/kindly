import { test } from '@playwright/experimental-ct-react';

const authFile = 'playwright/.auth/user.json';

test('authenticate', async ({ page }) => {
  await page.goto('http://localhost:3000/login');
  await page.getByPlaceholder('you@example.com').click();
  await page
    .getByPlaceholder('you@example.com')
    .fill('alphonso@foundersandcoders.com'); // enter your pre-created user here
  await page.getByPlaceholder('••••••••').click();
  await page.getByPlaceholder('••••••••').fill('ilovecamels'); // enter your pre-created password here
  await page.getByRole('button', { name: 'LOG IN' }).click();
  await page.waitForURL('**/home-page');

  await page.context().storageState({ path: authFile });
});
