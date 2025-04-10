const { test, expect } = require('@playwright/test');

const selectRadioButton = async (page, optionText) => {
    //locate the radio button
    const radioButton = page.locator(`input[type='radio'][value="${optionText}"]`);

    //verify the radio button is visible
    //await expect(radioButton).toBeVisible();

    //select the radio button
    await radioButton.check();

    //confirm selection
    await expect(radioButton).toBeChecked();
    console.log(`Selected radio button: ${optionText}`);

}

test('Select radio button', async ({page}) => {
    //navigate to demo page
    await page.goto('https://demo.guru99.com/test/radio.html');

    //define the radio button value
    const radioOption = 'Option 3';

    //call the function to select radio button
    await selectRadioButton(page, radioOption);
})



const selectRadioButtonByIndex = async (page, index) => {
    // Locate all radio buttons
    const radioButtons = page.locator("input[type='radio']");

    // Ensure radio buttons exist before interacting
    await expect(radioButtons).toHaveCount(3); // Expect 3 radio buttons on the page

    // Select radio button dynamically based on index
    await radioButtons.nth(index).check();

    // Verify selection
    await expect(radioButtons.nth(index)).toBeChecked();
    console.log(`Selected Radio Button at index: ${index + 1}`);
};

test('Select radio button dynamically by index', async ({ page }) => {
    await page.goto('https://demo.guru99.com/test/radio.html');

    // Change index to select a different radio button (0 = first, 1 = second, etc.)
    const radioIndex = 1; 

    // Select radio button dynamically
    await selectRadioButtonByIndex(page, radioIndex);
});