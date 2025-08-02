import {test, expect} from '@playwright/test';
import { verify } from 'crypto';

test('Select values from dropdown', async ({page}) => {

    await page.goto('https://freelance-learn-automation.vercel.app/signup');

    await page.locator('#state').selectOption(label='Assam');

    await page.waitForTimeout(1000); // Wait for 1 second to see the selection
    // You can also select by value or index
    // await page.locator('#state').selectOption(value='Assam');
    // await page.locator('#state').selectOption(index=0);

    await page.locator('#state').selectOption(value='Maharashtra');

    await page.waitForTimeout(1000); // Wait for 1 second to see the selection

    const value = await page.locator('#state').textContent()
    console.log('Selected value:', value);

    expect(value.includes('Maharashtra')).toBeTruthy();
    // Verify the selected value
    // await expect(page.locator('#state')).toHaveValue('Maharashtra');
    // You can also verify the selected value using the locator
    // await expect(page.locator('#state')).toHaveText('Maharashtra');

})


test('Select values from dropdown and assert method 2', async ({page}) => {

    await page.goto('https://freelance-learn-automation.vercel.app/signup');

    await page.locator('#state').selectOption(label='Assam');

    await page.waitForTimeout(1000); // Wait for 1 second to see the selection
    // You can also select by value or index
    // await page.locator('#state').selectOption(value='Assam');
    // await page.locator('#state').selectOption(index=0);

    await page.locator('#state').selectOption(value='Maharashtra');

    await page.waitForTimeout(1000); // Wait for 1 second to see the selection

    let state = await page.$('#state');
    let allElements = await state.$$('option');
    // let selectedText = await allElements[1].textContent(); // Index 1 for the second option
    // console.log('Selected value:', selectedText);

    let dropstatus = false;

    for(let i=0; i < allElements.length; i++) {
        let text = await allElements[i]

        let value = await text.textContent();
        console.log('Option value from dropdown:', value);

        if(value.includes('Assam')) {
            dropstatus = true;
            break;
        }

    }

    expect(value.includes('Assam')).toBeTruthy();

})

test('Select multiple values from dropdown', async ({page}) => {

    await page.goto('https://freelance-learn-automation.vercel.app/signup');

    // Select multiple options
    await page.locator('#hobbies').selectOption(['Playing', 'Swimming']);
    await page.waitForTimeout(1000); // Wait for 1 second to see the selection
})
