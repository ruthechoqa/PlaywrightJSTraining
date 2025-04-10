/* const {test, expect} = require('@playwright/test');

test('first scenario', async ({page}) => {
    await page.goto('https://www.demoblaze.com');
    const pageTitle = await page.title();
    console.log('Page title: ' + pageTitle);
    expect(pageTitle).toBe('STORE');
    //await page.locator("id=login2").click();
    await page.click('id=login2');
    await page.locator('id=loginusername').fill('test@test.com');
    await page.fill('id=loginpassword', '1234');
    await page.click("(//button[text()='Close'])[3]");
    //await page.getByRole('dialog', { name: 'Log in' }).getByLabel('Close').click();
    

    //await page.getByLabel('Log in').getByText('Close').click();
    await page.waitForTimeout(5000);

    /* const pageHome = await page.getByRole('link', { name: 'Home (current)' });
    await pageHome.click();
    //await expect(pageHome).toHaveURL('https://www.demoblaze.com/index.html');
    await page.waitForTimeout(5000);

    const pageContact = await page.getByRole('link', { name: 'Contact' });
    await pageContact.click();
    //await expect(Contact dialog).toHaveText('New message');
    await page.getByRole('dialog', { name: 'New message' }).getByLabel('Close').click();
    await page.waitForTimeout(5000);

    const pageAbout = await page.getByRole('link', { name: 'About us' });
    await pageAbout.click();
    const dialogAbout =  await page.getByText('About us ×');
    expect(dialogAbout).toHaveText('About us ×');
    await dialogAbout.click(); */

/*

test('sign up', async ({page}) => {

}
)


/* test('second scenario - Home Top Bar', async ({}) => {
    const pageHome = await page.getByRole('link', { name: 'Home (current)' });
    await pageHome.click();
    await expect(pageHome).toHaveURL('https://www.demoblaze.com/index.html');
}) */

/*
Command to run the end-to-end test:
npx playwright test --project=chromium --headed
*/

/*
Practice:
Click all the links available in the page.



test('First Scenario', async ({page}) => {
    await page.goto('https://www.demoblaze.com/')
    const pageTitle = await page.title()
    console.log('Page title - '+ pageTitle)
    expect(pageTitle).toBe('STORE')
    await page.click("//a[text()='Phones']")
    await page.waitForTimeout(5000);
    const products = await page.$$('//*[@id="tbodyid"]//div/h4/a')
    for(const product of products){
        const productName = await product.textContent()
        console.log(productName)
    }
    await page.waitForTimeout(10000);
})


import {test, expect} from '@playwright/test'
 
test('Scenario2', async ({page}) => {
 
    await page.goto('https://demo.guru99.com/test/radio.html')
    //await page.click("//a[text()='Register']")
    const radio = await page.locator("//input[@value='Option 1']")
    await radio.check()
    await expect(radio.isChecked).toBeTruthy();
    const checkBoxs = await page.$$("//input[@type='checkbox']")
    for(const checkbox of checkBoxs){
        await checkbox.check();
        await expect(checkBox.isChecked).toBeTruthy()
    }
    await page.waitForTimeout(10000)
 
 
})
 
//await page.getByLabel('Email:').fill('435435435')
//page.getByAltText() ---> to locate an element using its alt attribute, usually this is present for image tag
// page.getByPlaceholder() ---> locate an input by placeholder
// page.getByRole()--->
// page.getByText() ---> to locate by text content
// page.getByLabel() --> to locate a element by its label
//page.getBytestId() --? to locate an element based on its data-testid
//chekc() --> to select the radio button
// toBeTruth() --> true this will page
// toBeFalsy() ---> is expecting false


import {test, expect} from '@playwright/test'
 
test('Scenario2', async ({page}) => {
 
    await page.goto('https://demo.guru99.com/test/simple_context_menu.html')
    //await page.click("//a[text()='Register']")
    const radio = await page.locator("//button[text()='Double-Click Me To See Alert']")
    await radio.click({button : 'right'}) // to perform right click
    await radio.dblclick() // to perform double click
    await page.waitForTimeout(10000)
 
 
})
 
//https://demo.guru99.com/

  */


/* looping through the products in the cart
const products = await page.$$('//*[@id="tbodyid"]//div/h4/a')
//     for(const product of products){
//         const productName = await product.textContent()
//         console.log(productName)
//     } */