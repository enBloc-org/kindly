import { test, expect } from '@playwright/experimental-ct-react';

test.describe('/profile', () => {
  test('can be accessed from /home-page', async ({ page }) => {
    await page.goto('http://localhost:3000/home-page');
    await page.waitForSelector('a[aria-label="My profile"]');
    await page.click('a[aria-label="My profile"]');
    expect(await page.waitForSelector('button:visible:has-text("Log Out")'));
  });

  test('allows user to log out', async ({ page }) => {
    await page.goto('http://localhost:3000/profile');
    await page.getByRole('button', { name: 'LOG OUT' }).click();
    expect(await page.waitForSelector('button:visible:has-text("Log In")'));
  });
});
