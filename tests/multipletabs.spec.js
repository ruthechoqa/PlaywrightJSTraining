import {test, expect, chromium } from '@playwright/test';

test('fourth Scenario', async () => {
 
    const browser = await chromium.launch()
    const context = await browser.newContext();
 
    const page1 = await context.newPage();
    const page2 = await context.newPage()
    const allPage = context.pages();
    console.log("No of page --> ", allPage.length)
    await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    //await expect(await page1.title).toContain('OrangeHRM')
    await page2.goto('https://www.orangehrm.com/')
    //await expect((await page2).title).toContain('Human Resources Management Software | OrangeHRM HR Software ')
 
   
})

test('New Page Scenario', async () => {
 
    const browser = await chromium.launch()
    const context = await browser.newContext();
 
    const page1 = await context.newPage();
    await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
   
    const pagePromise = context.waitForEvent('page');
    await page1.locator("//a[text()='OrangeHRM, Inc']").click();
    const newPage = await pagePromise
    newPage.locator("//a[text()='Solutions']").click();
    await newPage.waitForTimeout(10000)
   
})