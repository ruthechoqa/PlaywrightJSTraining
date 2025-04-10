import {test, expect} from '@playwright/test'
 
test('Scenario2', async ({page}) => {
 
    await page.goto('https://gotranscript.com/text-compare')
    await page.locator("//textarea[@placeholder='Paste one version of the text here.']").fill("We are in playwright session")
    //await page.type('name="text1"', 'We are in playwright session')
    await page.keyboard.press('Control+A')
    await page.keyboard.press('Control+C')
 
    await page.keyboard.down('TAB')
    await page.keyboard.up('TAB')
 
    await page.keyboard.press('Control+V')
 
 
    await page.waitForTimeout(10000)
 
})
 
//keyboard actions
 
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




 
test('Enter form values', async ({page}) => {
   
    await page.goto('https://demo.guru99.com/insurance/v1/register.php');
    await page.locator('id=user_firstname').fill('testuserqa1')
    await page.locator('id=user_surname').fill('testuserqa1 surname')
    await page.locator('id=user_phone').fill('07466861365')
    await page.locator('id=user_phone').dblclick();
    await page.keyboard.press('Control+A')
    await page.keyboard.press('Control+C')
    await page.locator('id=user_address_attributes_street').dblclick()
    await page.keyboard.press('Control+V')
    await page.waitForTimeout(1000)
    await page.locator('id=user_address_attributes_city').dblclick()
    await page.keyboard.press('Control+V')
    await page.waitForTimeout(1000)
    await page.locator('id=user_address_attributes_county').dblclick()
    await page.keyboard.press('Control+V')
    await page.waitForTimeout(1000)
    await page.locator('id=user_address_attributes_postcode').dblclick()
    await page.keyboard.press('Control+V')
    await page.waitForTimeout(1000)
    await page.locator('id=user_user_detail_attributes_email').dblclick()
    await page.keyboard.press('Control+V')
    await page.waitForTimeout(2000)
    await page.locator('id=resetform').click();    
})