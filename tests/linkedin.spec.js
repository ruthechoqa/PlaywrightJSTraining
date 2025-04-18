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
    //comment this out since when the credentials are invalid, the sign in with Google button is not shown
    /* await page1.getByRole('button', { name: 'Sign in', exact: true }).click();

    await expect(page1.getByText('Wrong email or password. Try')).toBeVisible(); */

    await page1.waitForTimeout(5000);

    //Continue with Google
    const pagePromise = context.waitForEvent('page'); // Wait for new popup
    await page1.locator('iframe[title="Sign in with Google Button"]').contentFrame().getByRole('button', { name: 'Continue with Google' }).click(); // Click button to trigger popup

    const newPage = await pagePromise; // Resolve the new tab or window
    await newPage.getByRole('textbox', { name: 'Email or phone' }).fill('ruth@test.com');
    await newPage.getByRole('button', { name: 'Next' }).click();
    await expect(newPage.getByText('Couldn’t find your Google')).toBeVisible();

    await page1.waitForTimeout(3000);

});

/* 
// Kedar's
test('LinkedInValidate', async () => {
   
    const browser = await chromium.launch()
    const context = await browser.newContext();
 
    const page1 = await context.newPage();
    await page1.goto('https://www.linkedin.com/login');
    await page1.waitForTimeout(2000)
    // const checkBoxVisible = await page1.locator("//input[@id='rememberMeOptIn-checkbox']")
    // checkBoxVisible.click()
    // await page1.waitForTimeout(2000)
 
    const showHideButton = await page1.locator('id=password-visibility-toggle')
    await showHideButton.click()
   
    const frame1 = await page1.frameLocator("//*[@title='Sign in with Google Button']")
    //expect(frame1).toBeVisible()
    const ContinueWithGoogleBtn = await frame1.locator("//*[text()='Continue with Google']/../..")
 
   
    //const continueBtn = await page1.locator('iframe[title="Sign in with Google Button"]').contentFrame().getByRole('button', { name: 'Continue with Google' })
    expect(ContinueWithGoogleBtn).toBeVisible()
    expect(ContinueWithGoogleBtn).toBeEnabled()
    //await continueBtn.click()   */