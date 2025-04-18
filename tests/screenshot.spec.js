import {test, expect } from '@playwright/test';

//it's good practice to take screenshot of the page, full page
test('Add Tariff Plans', async ({page}) => {
    await page.goto('https://demo.guru99.com/telecom/addtariffplans.php');

    const submitBtn = await page.getByRole('button', { name: 'submit' });

    await submitBtn.click();

    page.on('dialog', async dialog =>{
        expect(dialog.message()).toContain('please fill all fields Correct Value');
        await page.waitForTimeout(10000);
        await page.screenshot({path: "screenshots/screenshot.png"});
        await dialog.accept();
    });

    const monthlyRental = await page.locator('id=rental1');
    await monthlyRental.focus(); // Focus on the text box first
    await page.keyboard.down('Tab');
    const errorMessage = await page.locator('//*[@id="message2"]').innerText();
    await expect(errorMessage).toContain('Number must not be blank');

    const localMins = await page.locator('id=local_minutes');
    //await localMins.focus(); // Focus on the text box first
    await page.keyboard.down('Tab');
    const errorMessage1 = await page.locator('//*[@id="message3"]').innerText();
    await expect(errorMessage1).toContain('Number must not be blank');

    const interMins = await page.locator('id=inter_minutes');
    await page.keyboard.down('Tab');
    const errorMessage2 = await page.locator('//*[@id="message4"]').innerText();
    await expect(errorMessage1).toContain('Number must not be blank');

    const smsPack = await page.locator('id=sms_pack');
    await page.keyboard.down('Tab');
    const errorMessage3 = await page.locator('//*[@id="message5"]').innerText();
    await expect(errorMessage1).toContain('Number must not be blank');

    const localCharges = await page.locator('id=minutes_charges');
    await page.keyboard.down('Tab');
    const errorMessage4 = await page.locator('//*[@id="message5"]').innerText();
    await expect(errorMessage1).toContain('Number must not be blank');

    const interCharges = await page.locator('id=inter_charges');
    await page.keyboard.down('Tab');
    const errorMessage5 = await page.locator('//*[@id="message6"]').innerText();
    await expect(errorMessage1).toContain('Number must not be blank');

    const smsCharges = await page.locator('id=sms_charges');
    await page.keyboard.down('Tab');
    const errorMessage6 = await page.locator('//*[@id="message5"]').innerText();
    await expect(errorMessage1).toContain('Number must not be blank');

    await page.screenshot({path: "screenshots/screenshot2.png", fullPage:true})



});


/* 
take screenshot of the mandatory alert
every element must have mandatory field message
fill all fields, submit
verify the validation
*/

/* 
//Prakash's

const { test, expect, chromium } = require('@playwright/test');
 
test('Add Tariff Plans', async () => {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();
 
    await page.goto('https://demo.guru99.com/telecom/addtariffplans.php');
    page.on('dialog', async dialog => {
        console.log(dialog.message());
        await page.waitForTimeout(2000)
        expect(dialog.message()).toContain('please fill all fields Correct Value');
        await page.waitForTimeout(2000)
        await dialog.accept();
       
    });
    await page.locator('input[name="submit"]').click()
    await page.screenshot({path: "screenshots/screenshot.png", fullPage:true})
    await page.locator('#rental1').click();
    await page.keyboard.press("Tab")
    await page.keyboard.press("Tab")
    await page.keyboard.press("Tab")
    await page.keyboard.press("Tab")
    await page.keyboard.press("Tab")
    await page.keyboard.press("Tab")
 
    await expect(page.locator('#message2')).toHaveText('Number must not be blank');
    await expect(page.locator('#message3')).toHaveText('Number must not be blank');
    await expect(page.locator('#message4')).toHaveText('Number must not be blank');
    await expect(page.locator('#message5')).toHaveText('Number must not be blank');
    await expect(page.locator('#message6')).toHaveText('Number must not be blank');
    await expect(page.locator('#message7')).toHaveText('Number must not be blank');
    await expect(page.locator('#message8')).toHaveText('Number must not be blank');
 
    await page.locator('#rental1').fill('1000');
    await page.locator('#local_minutes').fill('100');
    await page.locator('#inter_minutes').fill('1000');
    await page.locator('#sms_pack').fill('1000');
    await page.locator('#minutes_charges').fill('1000');
    await page.locator('#inter_charges').fill('1000');
    await page.locator('#sms_charges').fill('1000');
    
    await page.locator('input[name="submit"]').click()
    await page.waitForTimeout(2000)
    await expect(page.locator('h2')).toHaveText('Congratulation you add Tariff Plan');
    await page.waitForTimeout(3000) */





/* 
Exercise 2
https://demo.guru99.com/payment-gateway/index.php
generate card number: https://demo.guru99.com/payment-gateway/cardnumber.php
store the values: card number, cvv, etc
go back to payment page, click buy now
input the card details
click Pay
assert the payment result, not empty

*/

/* 
//Kedar's
const browser = await chromium.launch()
    const context = await browser.newContext();
 
    const page1 = await context.newPage();
    await page1.goto('https://demo.guru99.com/payment-gateway/index.php');
    await page1.waitForTimeout(2000)
    await page1.locator("//nav/a[@href='cardnumber.php']").click();
    const pagePromise = context.waitForEvent('page');
    const newPage = await pagePromise
    await newPage.waitForTimeout(2000)
    const headerNewPage = await newPage.locator("//h2")
    await expect(headerNewPage).toBeVisible()
    await expect(headerNewPage).toHaveText('Here is your New Card')
    let cardnumber = await newPage.locator("//h4[1]").textContent()
    cardnumber = cardnumber.replace('Card Number:-','').replace(" ","")
    console.log(cardnumber)
    let cvvText =  await newPage.locator("//h4[2]").textContent()
    cvvText = cvvText.replace('CVV:-','').replace(" ","")
    console.log(cvvText)
    let expiryDate =  await newPage.locator("//h4[3]").textContent()
    expiryDate = expiryDate.replace('Exp:-','').replace(" ","")
    console.log(expiryDate) */