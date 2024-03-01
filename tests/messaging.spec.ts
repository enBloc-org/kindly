import { test } from '@playwright/experimental-ct-react';

test('test messaging feature', async ({ page }) => {
    console.log("here")

  await page.goto('http://localhost:3000/conversations');
  await page.getByPlaceholder('Type your message here').fill('Hello please work');
});
