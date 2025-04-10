const {test, expect} = require('@playwright/test');

test('sign up', async ({page}) => {
    await page.goto('https://www.demoblaze.com'); //demo.nopcommerce.com
    const pageTitle = await page.title();
    console.log('Page title: ' + pageTitle);
    expect(pageTitle).toBe('STORE');

    //signup
    await page.click('id=signin2');
    await page.fill('id=sign-username', 'ruth@test2.com');
    await page.fill('id=sign-password', '1234567');

    await page.click("(//button[text()='Sign up'])[1]");

    await page.waitForTimeout(5000);

    await page.reload(); 

})

test('login', async ({page}) => {
    await page.goto('https://www.demoblaze.com');

    //login
    await page.click('id=login2');
    await page.fill('id=loginusername', 'ruth@test.com');
    await page.fill('id=loginpassword', '1234567');
    await page.click("(//button[text()='Log in'])");

    //assert the Welcome user shown
    const nameOfUser = page.locator('id=nameofuser');
    await expect(nameOfUser).toBeVisible();
    
    //assert the Log Out button shown
    const logOut = page.locator('id=logout2');
    await expect(logOut).toBeVisible();


    const products = await page.$$('//*[@id="tbodyid"]//div/h4/a');
    for(const product of products){
        const productName = await product.textContent();
        console.log(productName);
        //return productName;
    }

    await page.locator('//*[@id="tbodyid"]/div[2]/div/div/h4/a').click();

    const productTitle = await page.locator('//*[@id="tbodyid"]/h2');
    await expect(productTitle).toContainText('Nokia lumia 1520');

    /* const productPrice = await page.locator('//*[@id="tbodyid"]/h3/text()');
    await expect(productPrice).toContainText('$820');

    const productDesc = await page.locator('//*[@id="more-information"]/p/text()');
    await expect(productDesc).toContainText('The Nokia Lumia 1520 is powered by 2.2GHz quad-core Qualcomm Snapdragon 800 processor and it comes with 2GB of RAM. ');
     */

    await page.locator('//*[@id="tbodyid"]/div[2]/div/a').click();
    
/* 
    //await expect(productName).toContain('Nokia lumia 1520').click();

    await page.getByRole('link', { name: 'Nokia lumia' }).click();

    getByRole('heading', { name: 'Nokia lumia' }) */

    //await expect(btn).not.toBeVisible() to check after the product is deleted from cart
}
)

