/* import {test, expect} from '@playwright/test'
import fs from "fs"
import { parse } from 'csv-parse/sync';

//https://demo.guru99.com/insurance/v1/register.php

const records = parse(fs.readFileSync('sample.csv'), {
    columns:true,
    skip_empty_lines: true
})
 
records.forEach( record => {
    test()
    await page.goto('https://demo.guru99.com/insurance/v1/register.php');
    await page.locator('id=user_firstname').fill(record.firstname)
    await page.locator('id=user_surname').fill(record.surname)
    await page.locator('id=user_phone').fill(record.phon)
   
}); */

/* 

// Kedar's

const {test, expect,chromium} =  require('@playwright/test');
 
import fs from "fs";
import {parse} from "csv-parse/sync"
 
const testData = parse(fs.readFileSync('tests\\UserInfo.csv'), {
    columns: true,
    skip_empty_lines: true
});
 
// testData.forEach(record => {
//  test('ReadFromCSV2', async ({page}) => {
 
//     await page.goto('https://demo.guru99.com/insurance/v1/register.php');
//         await page.locator('id=user_firstname').fill(record.Firstname)
//         await page.locator('id=user_surname').fill(record.Surname)
//         await page.locator('id=user_phone').fill(record.Phone)
//         await page.waitForTimeout(2000)
// })
// })
 
 
// test('ReadFromCSV', async ({page}) => {
 
//     await page.goto('https://demo.guru99.com/insurance/v1/register.php');
   
   
//     for(const record of testData){
//         await page.locator('id=user_firstname').fill(record.Firstname)
//         await page.locator('id=user_surname').fill(record.Surname)
//         await page.locator('id=user_phone').fill(record.Phone)
//         await page.waitForTimeout(2000)
//     }
       
 
// }) */


/* 
//Sample json

import {test, expect} from '@playwright/test'
import fs from "fs"
import { parse } from "csv-parse/sync"
 
const config = require('./Sample.json')
console.log(config)
console.log(config.actor.name)

//Sample.json
{
    "actor": {
     "name": "Tom Cruise",
     "age": 56,
     "Born At": "Syracuse, NY",
     "Birthdate": "July 3 1962",
     "photo": "https://jsonformatter.org/img/tom-cruise.jpg"
   }
 } */