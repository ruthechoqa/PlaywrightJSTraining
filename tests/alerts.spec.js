import {test, expect} from '@playwright/test';

//three types of alert: simple, confirmation, prompt alert
//testautomationpractice.blogspot.com

test.skip('First Scenario - Simple alert', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/')
    page.on('dialog', async dialog =>{
        expect(dialog.type()).toContain('alert')
        expect(dialog.message()).toContain('I am an alert box!')
        await page.waitForTimeout(10000)
        await dialog.accept();
    })
    await page.locator('id=alertBtn').click();
    await page.waitForTimeout(10000)
})

test.skip('Second scenario - Confirm alert', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/')
    page.on('dialog', async dialog =>{
        expect(dialog.type()).toContain('confirm')
        expect(dialog.message()).toContain('Press a button!')
        await page.waitForTimeout(10000)
        await dialog.dismiss();
    })
    await page.locator('id=confirmBtn').click();
    await page.waitForTimeout(10000)
})

test.skip('Third scenario - Prompt alert', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/')
    page.on('dialog', async dialog =>{
        expect(dialog.type()).toContain('prompt')
        expect(dialog.message()).toContain('Please enter your name:')
        expect(dialog.defaultValue()).toContain('Harry Potter')
        await page.waitForTimeout(10000)
        await dialog.accept('Testing');
    })
    await page.locator('id=promptBtn').click();
    await page.waitForTimeout(10000)
})


//https://demoqa.com/alerts

test('Simple alert', async ({page}) => {
    await page.goto('https://demoqa.com/alerts')
    page.on('dialog', async dialog =>{
        expect(dialog.type()).toContain('alert')
        expect(dialog.message()).toContain('You clicked a button')
        await page.waitForTimeout(3000)
        await dialog.accept();
    })
    await page.locator('id=alertButton').click();
    await page.waitForTimeout(3000)
})

test.skip('Confirm alert', async ({page}) => {
    await page.goto('https://demoqa.com/alerts')
    page.on('dialog', async dialog =>{
        //expect(dialog.type()).toContain('confirm')
        expect(dialog.message()).toContain('Do you confirm action?')
        await page.waitForTimeout(3000)
        await dialog.accept();
    })
    await page.locator('id=confirmButton').click();
    await page.waitForTimeout(3000)
    const confirmResult = await page.locator('id=confirmResult')
    await expect(confirmResult).toContain('You selected Ok');
})

test.skip('Prompt alert', async ({page}) => {
    await page.goto('https://demoqa.com/alerts')
    page.on('dialog', async dialog =>{
        //expect(dialog.type()).toContain('prompt')
        expect(dialog.message()).toContain('Please enter your name:')
        expect(dialog.defaultValue()).toContain('')
        await page.waitForTimeout(3000)
        await dialog.accept('Testing');
    })
    await page.locator('id=promtButton').click();
    await page.waitForTimeout(3000)
    const promptResult = await page.locator('id=promptResult')
    await expect(promptResult).toContain('You entered');
})


//Kedar's
test('Alert first', async ({page}) => {
   
    await page.goto('https://demoqa.com/alerts');
    page.on('dialog', async dialog => {
        console.log(dialog.message());
        await page.waitForTimeout(2000)
        expect(dialog.message()).toContain('You clicked a button');
        await page.waitForTimeout(2000)
        await dialog.accept();
       
    });
    await page.locator('id=alertButton').click();      
})
 
test('Alert second', async ({page}) => {
   
    await page.goto('https://demoqa.com/alerts');
    page.on('dialog', async dialog => {
        await page.waitForTimeout(6000)
        console.log(dialog.message());        
        expect(dialog.message()).toContain('This alert appeared after 5 seconds');
        await page.waitForTimeout(2000)
        await dialog.accept();        
    });
    await page.locator('id=timerAlertButton').click();      
})
test('Alert third', async ({page}) => {
   
    await page.goto('https://demoqa.com/alerts');
    page.on('dialog', async dialog => {
        await page.waitForTimeout(2000)
        console.log(dialog.message());        
        expect(dialog.message()).toContain('Do you confirm action?');
        await page.waitForTimeout(2000)
        await dialog.dismiss();        
    });
    await page.locator('id=confirmButton').click();      
    await page.waitForTimeout(2000)
    const text = await page.locator('id=confirmResult').textContent()
    console.log(text)
    expect(text).toContain('You selected Cancel')
})
 
 
test('Alert fourth', async ({page}) => {
   
    const mypromptText = 'testuserqa1'
    await page.goto('https://demoqa.com/alerts');
    page.on('dialog', async dialog => {
        await page.waitForTimeout(2000)
        console.log(dialog.message());        
        expect(dialog.message()).toContain('Please enter your name');
        await page.waitForTimeout(2000)
        await dialog.accept(mypromptText);
    });
    await page.locator('id=promtButton').click();      
    await page.waitForTimeout(2000)
    const text = await page.locator('id=promptResult').textContent()
    console.log(text)
    expect(text).toContain('You entered ' + mypromptText)
})


