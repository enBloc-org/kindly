import { test } from '@playwright/experimental-ct-react';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/profile');
  await page.getByText('Log out').click();
  await page.waitForURL('**/login')
});
