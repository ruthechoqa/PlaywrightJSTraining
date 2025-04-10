import {test, expect} from '@playwright/test';

test ('Keyboard actions - copy paste', async ({page}) => {
    await page.goto('https://demo.guru99.com/insurance/v1/register.php');

    const firstName = await page.getByRole('textbox', { name: 'First name' });
    firstName.fill("Playwright Trainee");
    await page.keyboard.press('Control+A');
    await page.keyboard.press('Control+C');

    const surname = await page.getByRole('textbox', { name: 'Surname' });
    await page.keyboard.press('Control+V');

    const phone = await page.getByRole('textbox', { name: 'Phone' });
    await page.keyboard.press('Control+V');

    const address = await page.getByRole('textbox', { name: 'Street' });
    await page.keyboard.press('Control+V');

    const city = await page.getByRole('textbox', { name: 'City' });
    await page.keyboard.press('Control+V');

    const country = await page.getByRole('textbox', { name: 'County' });
    await page.keyboard.press('Control+V');

    const postCode = await page.getByRole('textbox', { name: 'County' });
    await page.keyboard.press('Control+V');

    const email = await page.getByRole('textbox', { name: 'Email' });
    await page.keyboard.press('Control+V');

    const password = await page.getByRole('textbox', { name: 'Password' });
    await page.keyboard.press('Control+V');
    
    const confirmPW = await page.locator('#user_user_detail_attributes_password_confirmation');
    await page.keyboard.press('Control+V');

});