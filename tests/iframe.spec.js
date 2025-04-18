import {test, expect, chromium } from '@playwright/test';

test('fifth Scenario', async () => {
 
    const browser = await chromium.launch()
    const context = await browser.newContext();
 
    const page1 = await context.newPage();
    await page1.goto('https://www.globalsqa.com/demo-site/frames-and-windows/')
    await page1.locator("//li[@id='iFrame']").click();
    await page1.waitForTimeout(10000)
    const frame = await page1.frameLocator('//div[@rel-title="iFrame"]//iframe')
    await frame.locator("//input[@placeholder='Search...']").fill('selenium')
    await page1.waitForTimeout(10000)
   
})
 

test('sixth Scenario', async () => {
 
    const browser = await chromium.launch()
    const context = await browser.newContext();
 
    const page1 = await context.newPage();
    await page1.goto('https://www.globalsqa.com/demo-site/frames-and-windows/')
    await page1.locator("//li[@id='iFrame']").click();
    await page1.waitForTimeout(10000)
    const frame = await page1.frame('globalSqa')
    await frame.locator("//input[@placeholder='Search...']").fill('selenium')
    await page1.waitForTimeout(10000)
 
})

test('seventh Scenario', async () => {
 
    const browser = await chromium.launch()
    const context = await browser.newContext();
 
    const page1 = await context.newPage();
    await page1.goto('https://www.globalsqa.com/demo-site/frames-and-windows/')
    await page1.locator("//li[@id='iFrame']").click();
    await page1.waitForTimeout(10000)
    const frame = await page1.frame({url: 'https://www.globalsqa.com/trainings/'})
    await frame.locator("//input[@placeholder='Search...']").fill('selenium')
    await page1.waitForTimeout(10000)
 
})

/*
exercise: https://demo.guru99.com/test/guru99home/

click on the iframe Jmeter Made Easy
opening a new tab, fill in email address
go back to prev page, fill in email address
*/

test('iFrame gurudemo99', async () => {
    test.setTimeout(120000); // Increase test timeout

    const browser = await chromium.launch();
    const context = await browser.newContext();

    const page1 = await context.newPage();
    await page1.goto('https://demo.guru99.com/test/guru99home/');
    await page1.locator('#rt-mainbody > div > article > h3').first().scrollIntoViewIfNeeded();
    await page1.waitForTimeout(3000);

    // Wait for new tab to open
    const pagePromise = context.waitForEvent('page');

    // Click inside iframe (opens new tab)
    // Locate the iframe
    const frame = await page1.frameLocator('iframe[id="a077aa5e"]');
    await frame.locator('a').click();

    // Store the new tab reference
    const newPage = await pagePromise;
    //await newPage.waitForTimeout(5000);
    await newPage.waitForLoadState('domcontentloaded');

    // Interact with new tab
    //await newPage.fill('id=awf_field-93653884', 'ruth@test.com');
    await newPage.waitForSelector('input[name="email"]');
    await newPage.locator('id=awf_field-93653884').scrollIntoViewIfNeeded();
    await newPage.getByRole('textbox', { name: 'Email:' }).fill('ruth@test.com');
    await newPage.waitForTimeout(5000);

    // Switch back to first tab and interact with it
    await page1.bringToFront(); // Brings the first tab into focus.
    await page1.waitForSelector('input[id="philadelphia-field-email"]');
    await page1.locator('input[id="philadelphia-field-email"]').scrollIntoViewIfNeeded();
    await page1.getByRole('textbox', { name: 'Enter Email' }).fill('ruth@test.com');
    await page1.waitForTimeout(5000);
});

