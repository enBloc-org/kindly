import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/conversations');
  await page.getByTestId('item-donor').click();
  expect(await page.waitForSelector('p[data-testid="item-donor"]'));
});
