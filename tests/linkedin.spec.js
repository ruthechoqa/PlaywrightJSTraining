import {test, expect, chromium } from '@playwright/test';

test('Linkedin login', async () => {
 
    const browser = await chromium.launch()
    const context = await browser.newContext();

    const page1 = await context.newPage();
    await page1.goto('https://www.linkedin.com/login')

    await page1.fill('id=username', 'ruth@test.com');
    await page1.fill('id=password', '1234567');
    await page1.locator('id=password-visibility-toggle').click();

    const checkbox = page1.locator("input[type='checkbox']");
    const selectCheckbox = await checkbox.check();

    await page1.waitForTimeout(5000);

    /* //Continue with Google
    const pagePromise = context.waitForEvent('page');
    await page1.getByRole('button', { name: 'Continue with Google' }).click();
    const newPage = await pagePromise
 */
});