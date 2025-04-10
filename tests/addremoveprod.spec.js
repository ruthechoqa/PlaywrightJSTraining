const { test, expect } = require('@playwright/test');

const login = async (page, username, password) => {
  await page.click('id=login2');
  await page.fill('id=loginusername', username);
  await page.fill('id=loginpassword', password);
  await page.click("(//button[text()='Log in'])");

 /*  // Assert that the welcome message is visible and contains "Welcome"
  const welcomeMsg = page.locator('#nameofuser');
  await expect(welcomeMsg).toBeVisible();
  await expect(welcomeMsg).toContainText('Welcome'); */
};

const navigateToProduct = async (page, productName) => {
  const productCard = page.getByRole('link', { name: productName });
  await expect(productCard).toBeVisible();
  await productCard.click();

  // Assert that the product detail page contains a heading with the product name
  const prodDetailHeading = page.getByRole('heading', { name: productName });
  await expect(prodDetailHeading).toBeVisible();
};

const retrieveProductDetails = async (page, productName) => {
  // Check that the product title element is visible and contains the product name (case-insensitive)
  const prodTitleLoc = page.getByRole('heading', { name: productName });
  await expect(prodTitleLoc).toBeVisible();
  const prodTitle = await prodTitleLoc.textContent();
  console.log("Product Title:", prodTitle);
  expect(prodTitle.toLowerCase()).toContain(productName.toLowerCase());

  // Check the price; assert that it is visible and begins with a "$" symbol.
  const prodPriceLoc = page.locator('.price-container');
  await expect(prodPriceLoc).toBeVisible();
  const prodPrice = await prodPriceLoc.innerText();
  console.log("Product Price:", prodPrice);
  expect(prodPrice.trim()).toMatch(/^\$/);

  // Check that the product description is visible and not empty.
  const prodDescLoc = page.locator("//div[@id='more-information']//p");
  await expect(prodDescLoc).toBeVisible();
  const prodDesc = await prodDescLoc.innerText();
  console.log("Product Description:", prodDesc);
  expect(prodDesc.trim()).not.toBe('');
};

const addToCart = async (page) => {
  // Listen for the confirmation dialog and accept it.
 /*  page.once('dialog', async dialog => {
    console.log('Alert message:', dialog.message());
    await dialog.accept();
  }); */

  const addButton = page.getByRole('link', { name: 'Add to cart' });
  await expect(addButton).toBeVisible();
  await addButton.click();

  // Wait for the cart update 
  await page.waitForTimeout(3000);
  await page.reload();
};

const goToCart = async (page) => {
  const cartEntry = page.getByRole('link', { name: 'Cart' });
  await expect(cartEntry).toBeVisible();
  await cartEntry.click();

  // Assert that the cart page heading is visible and exactly "Products"
  const cartHeading = page.getByRole('heading', { name: 'Products' });
  await expect(cartHeading).toBeVisible();
  await expect(cartHeading).toHaveText('Products');

  // Ensure the cart table is present.
  await expect(page.locator('#tbodyid')).toBeVisible();
};

const deleteProductFromCart = async (page, productNameToDelete) => {
  const cartRows = page.locator('#tbodyid tr');
  let rowCount = await cartRows.count();
  console.log(`Number of rows in the table: ${rowCount}`);

  // Loop through the rows to delete all instances of the product
  for (let i = 0; i < rowCount; i++) {
    // Get product name in the 2nd column
    const productName = await cartRows.nth(i).locator('td:nth-child(2)').innerText();
    //console.log(`Product name in the cart table: ${productName}`);

    if (productName === productNameToDelete) {
      await cartRows.nth(i).locator('a:has-text("Delete")').click();
      console.log(`Deleted product: ${productName}`);
      await page.waitForTimeout(3000);

      // Recalculate row count after deletion and restart checking from the first row
      rowCount = await cartRows.count();
      i = -1;
    }
  }
  
  // Assert that the cart no longer contains the deleted product.
  const cartContent = (await page.locator('#tbodyid').innerText()).trim();
  expect(cartContent).not.toContain(productNameToDelete.trim());
  console.log(`Verified that the product "${productNameToDelete}" is no longer in the cart.`);
};

// Playwright Test Case
test('Add and remove product dynamically', async ({ page }) => {
  await page.goto('https://www.demoblaze.com');

  await login(page, 'ruth@test.com', '1234567');
  
  const productName = 'Nokia lumia 1520'; // pass any product name dynamically
  await navigateToProduct(page, productName);
  await retrieveProductDetails(page, productName);
  await addToCart(page);
  await goToCart(page);
  await deleteProductFromCart(page, productName);
});
