const {test, expect} = require('@playwright/test');

// Set a custom test timeout to 60 seconds
test.setTimeout(60000);

test('add product', async ({page}) => {
    await page.goto('https://www.demoblaze.com');

    //login
    await page.click('id=login2');
    await page.fill('id=loginusername', 'ruth@test.com');
    await page.fill('id=loginpassword', '1234567');
    await page.click("(//button[text()='Log in'])");
    await page.waitForTimeout(2000);

    //go to product detail
    const productCard = await page.getByRole('link', { name: 'Nokia lumia' });
    await expect(productCard).toBeVisible();
    await productCard.click();
    
    await page.waitForTimeout(5000);

    //retrieve the product details
    const prodTitleLoc = await page.getByRole('heading', { name: 'Nokia lumia' });
    await expect(prodTitleLoc).toBeVisible();
    const prodTitle = await prodTitleLoc.textContent();
    console.log("Product Title: " + prodTitle);

    const prodPriceLoc = await page.getByRole('heading', { name: '$820 *includes tax' });
    await expect(prodPriceLoc).toBeVisible();
    const prodPrice = await prodPriceLoc.innerText();
    console.log("Product Price: " + prodPrice);

    /* const prodPriceLoc2 = await page.locator('//*[@id="tbodyid"]/h3/text()');
    await expect(prodPriceLoc2).toBeVisible();
    const prodPrice2 = await prodPriceLoc2.innerText();
    console.log("Product Price: " + prodPrice2); */

    const prodDescLoc = await page.getByText('The Nokia Lumia 1520 is');
    await expect(prodDescLoc).toBeVisible();
    const prodDesc = await prodDescLoc.innerText();
    console.log("Product Description: " + prodDesc);


    //add to cart
    const addButton = await page.getByRole('link', { name: 'Add to cart' });
    await expect(addButton).toBeVisible();
    await addButton.click();

    await page.waitForTimeout(3000);

    await page.reload();

    //go to Cart page
    const cartEntry = await page.getByRole('link', { name: 'Cart' });
    await expect(cartEntry).toBeVisible();
    await cartEntry.click();

    await page.waitForTimeout(5000);

    const cartPage = await page.getByRole('heading', { name: 'Products' });
    await expect(cartPage).toContainText('Products');

    //check product is added
    const prodTitleCell = await page.getByRole('cell', { name: 'Nokia lumia' }).first();
    await expect(prodTitleCell).toBeVisible();
    const prodTitleCart = await prodTitleCell.innerText();
    console.log(`Product Title in Cart: ${prodTitleCart}`);

    const prodPriceCell = await page.getByRole('cell', { name: '820' }).first();
    await expect(prodPriceCell).toBeVisible();
    const prodPriceCart = await prodPriceCell.innerText();
    console.log(`Product Price in Cart: ${prodPriceCart}`);


    //delete from cart
    //const deleteButton = await page.getByRole('link', { name: 'Delete' }).first();
    const deleteButton = await page.getByRole('row', { name: 'Nokia lumia 1520 820 Delete' }).first().getByRole('link');
    await expect(deleteButton).toBeVisible();
    await deleteButton.click();
    console.log(`Product ${prodTitleCart} is deleted.`)

    await page.waitForTimeout(2000);

    const isProdVisible = await prodTitleCell.isVisible();
    // Assertion to confirm the element is not visible
    expect(isProdVisible).toBe(false);

})

test('add and remove product', async ({page}) => {
    await page.goto('https://www.demoblaze.com');

    //login
    await page.click('id=login2');
    await page.fill('id=loginusername', 'ruth@test.com');
    await page.fill('id=loginpassword', '1234567');
    await page.click("(//button[text()='Log in'])");
    await page.waitForTimeout(2000);

    //go to product detail
    const productCard = await page.getByRole('link', { name: 'Nokia lumia' });
    await expect(productCard).toBeVisible();
    await productCard.click();
    
    await page.waitForTimeout(2000);

    //retrieve the product details
    const prodTitleLoc = await page.getByRole('heading', { name: 'Nokia lumia' });
    await expect(prodTitleLoc).toBeVisible();
    const prodTitle = await prodTitleLoc.textContent();
    console.log("Product Title: " + prodTitle);

    const prodPriceLoc = await page.getByRole('heading', { name: '$820 *includes tax' });
    await expect(prodPriceLoc).toBeVisible();
    const prodPrice = await prodPriceLoc.innerText();
    console.log("Product Price: " + prodPrice);

    const prodDescLoc = await page.getByText('The Nokia Lumia 1520 is');
    await expect(prodDescLoc).toBeVisible();
    const prodDesc = await prodDescLoc.innerText();
    console.log("Product Description: " + prodDesc);


    //add to cart
    const addButton = await page.getByRole('link', { name: 'Add to cart' });
    await expect(addButton).toBeVisible();
    await addButton.click();

    await page.waitForTimeout(3000);

    await page.reload();

    //go to Cart page
    const cartEntry = await page.getByRole('link', { name: 'Cart' });
    await expect(cartEntry).toBeVisible();
    await cartEntry.click();

    await page.waitForTimeout(5000);

    const cartPage = await page.getByRole('heading', { name: 'Products' });
    await expect(cartPage).toContainText('Products');

    await page.waitForSelector('id=tbodyid');

    //specify the product name to delete
    const productNameToDelete = 'Nokia lumia 1520';

    //locate all the rows in the cart table
    const cartRows = await page.locator('#tbodyid tr');
    //await expect(cartRows).toBeVisible();

    let rowCount = await cartRows.count();
    console.log(`Number of rows in the table: ${rowCount}`);

    for (let i = 0; i < rowCount; i++) {
        const productName = await cartRows.nth(i).locator('td:nth-child(2)').innerText(); // Get product name in the 2nd column

        if (productName === productNameToDelete) {
            // Click the delete button for the matched product
            await cartRows.nth(i).locator('a:has-text("Delete")').click();
            console.log(`Deleted product: ${productName}`);
            await page.waitForTimeout(3000); // Wait briefly for UI to update
            break; // Exit the loop after deleting the first match

            
            /* // Recalculate row count after deletion
            rowCount = await cartRows.count();
            i = -1; // Reset the index to start loop again from the first row */
        }
    }

    /* // Assertion to confirm the product is no longer in the cart
    const cartContent = await page.locator('id=tbodyid').innerText();
    expect(cartContent).not.toContain(productNameToDelete);
    console.log(`Verified that the product "${productNameToDelete}" is no longer in the cart.`); */
   
})



