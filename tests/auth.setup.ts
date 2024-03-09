import { test, expect } from '@playwright/experimental-ct-react';
import 'dotenv/config';

const authFile = 'playwright/.auth/user.json';

test('authenticate', async ({ page }) => {
  await page.goto('http://localhost:3000/login');
  await page.getByPlaceholder('you@example.com').click();
  await page
    .getByPlaceholder('you@example.com')
    .fill(process.env.TEST_USER_EMAIL as string);
  await page.getByPlaceholder('••••••••').click();
  await page
    .getByPlaceholder('••••••••')
    .fill(process.env.TEST_USER_PASSWORD as string);
  await page.getByRole('button', { name: 'LOG IN' }).click();
  await page.waitForURL('**/home-page');
  await page.context().storageState({ path: authFile });

  expect(await page.isVisible('img[alt="give kindly image"]'));
});
