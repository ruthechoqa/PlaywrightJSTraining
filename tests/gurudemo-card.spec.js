import {test, expect, chromium } from '@playwright/test';

test('Payment Gateway', async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
 
    const page1 = await context.newPage();
    await page1.goto('https://demo.guru99.com/payment-gateway/index.php');
    await page1.waitForTimeout(3000);

    // Wait for Generate Card Number to open in a new tab
    const pagePromise = context.waitForEvent('page');
    const generateCard = await page1.getByRole('link', { name: 'Generate Card Number' })
    await generateCard.click();
    await page1.waitForTimeout(3000);

    const newPage = await pagePromise;

    //Get and store the card details
    const cardText = await newPage.getByRole('heading', { name: 'Card Number:-' }).innerText();
    const cardNumber = cardText.replace('Card Number:-', '').trim();
    console.log(`Card number: ${cardNumber}`);

    const cvvText = await newPage.getByRole('heading', { name: 'CVV:-' }).innerText();
    const cvvNumber = cvvText.replace('CVV:-', '').trim();
    console.log(`CVV number: ${cvvNumber}`);
    
    const expText = await newPage.getByRole('heading', { name: 'Exp:-' }).innerText();
    const expDate = expText.replace('Exp:-','').trim();
    const [expMonth, expYear] = expDate.split("/");
    console.log(`Expiry month: ${expMonth}`);
    console.log(`Expiry year: ${expYear}`);

    const creditLimit = await newPage.getByText('$').innerText();
    console.log(`Credit Limit: ${creditLimit}`);
    
    await newPage.getByRole('heading', { name: 'Exp:-' }).scrollIntoViewIfNeeded();
    await newPage.waitForTimeout(3000);

    // Switch back to first tab and interact with it
    await page1.bringToFront(); // Brings the first tab into focus.
    await page1.selectOption('select[name="quantity"]', '5'); // Select 5 from Quantity dropdown
    await page1.getByRole('button', { name: 'Buy Now' }).click(); // Click Buy Now button
    await page1.waitForTimeout(5000);

    // Payment Process
    await page1.fill('id=card_nmuber', cardNumber);
    await page1.selectOption('select[id="month"]', expMonth);
    await page1.selectOption('select[id="year"]', expYear);
    await page1.fill('id=cvv_code', cvvNumber);
    //await page1.locator('button[type="submit"]').scrollIntoViewIfNeeded();
    await page1.getByRole('button', { name: 'Pay $' }).click();
    await page1.waitForTimeout(3000);

    // Assert payment is successful
    const paySuccess = page1.getByRole('heading', { name: 'Payment successfull!' });
    await expect(paySuccess).toContainText('Payment successfull!');

})

