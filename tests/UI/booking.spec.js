import { test, expect } from '@playwright/test';

test('Booking flow works correctly', async ({ page }) => {
  await page.goto('/');

 // await page.locator('a[href="#booking"]').click();

  const checkIn = page.locator('#booking input').first();
  const checkOut = page.locator('#booking input').nth(1);

  //await checkIn.scrollIntoViewIfNeeded();
  await checkIn.click();
  await page.locator('.react-datepicker__day--020:not(.react-datepicker__day--outside-month)').click();

//  await checkOut.scrollIntoViewIfNeeded();
  await checkOut.click();
  await page.locator('.react-datepicker__day--027:not(.react-datepicker__day--outside-month)').click();
  await page.locator('#booking button:has-text("Check Availability")').click();

  await page.getByRole('link', { name: 'Book now' }).nth(1).click();
  await page.getByRole('button', { name: 'Reserve Now' }).click();
  await page.getByRole('textbox', { name: 'Firstname' }).fill('John');
  await page.getByRole('textbox', { name: 'Lastname' }).fill('Tester');
  await page.getByRole('textbox', { name: 'Email' }).fill('test@gmail.com');
  await page.getByRole('textbox', { name: 'Phone' }).fill('+380931234567');

  await page.getByRole('button', { name: 'Reserve Now' }).click();

  
  await expect(page.locator('text=Booking Confirmed')).toBeVisible();
});
