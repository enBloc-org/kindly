import { test, expect } from '@playwright/experimental-ct-react';

test.describe('/add-item', () => {
  test('can be accessed from /home-page', async ({ page }) => {
    await page.goto('http://localhost:3000/home-page');
    await page.waitForSelector('a[aria-label="Add an item"]');
    await page.click('a[aria-label="Add an item"]');
    expect(await page.isVisible('Add your item'));
  });
});
