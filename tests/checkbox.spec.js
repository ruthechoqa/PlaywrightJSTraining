const { test, expect } = require('@playwright/test');

const selectCheckboxByIndex = async (page, index) => {
    //locate the checkbox
    const checkbox = page.locator("input[type='checkbox']");

    await expect(checkbox).toHaveCount(3);

    //select a checkbox by index
    const selectCheckbox = await checkbox.nth(index).check();

    //verify selection
    await expect(checkbox.nth(index)).toBeChecked();
    console.log(`Selected checkbox at index: ${index}`);
};

test('Select and verify a checkbox', async ({ page }) => {
    //navigate to demo.guru99 page
    await page.goto('https://demo.guru99.com/test/radio.html');

    await selectCheckboxByIndex(page, 0);
    await selectCheckboxByIndex(page, 1);

});