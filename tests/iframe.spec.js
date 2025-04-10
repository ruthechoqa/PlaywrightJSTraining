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

