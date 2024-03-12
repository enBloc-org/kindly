import { test, expect } from '@playwright/test';

test('message route', async ({ page }) => {
  await page.goto('http://localhost:3000/home-page');
  await page.getByRole('link', { name: 'Image of Red Nike Trainers' }).click();
  await page.getByRole('button', { name: 'MESSAGE' }).click();
  await page.getByPlaceholder('Type your message here').click();
  await page.getByPlaceholder('Type your message here').press('CapsLock');
  await page.getByPlaceholder('Type your message here').fill('Nice shoes');
  await page.locator('form').getByRole('button').click();
  await expect(page.getByText('Nice shoes')).toBeVisible();
});
