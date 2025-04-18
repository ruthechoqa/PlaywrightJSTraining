import {test, expect } from '@playwright/test';
import { exec } from 'child_process';


// https://reqres.in/

test('test login page', {
    tag: ['@smoke', '@Sanity'],
  }, async ({ page }) => {
    // ...
  });
 
test('test2', { tag:'@smoke'}, async({page}) => {
    console.log('Test2.....')
})
 
test('test3', async({page}) => {
    console.log('Test3.....')
})
 
test('test4', async({request}) => {
    const response = await request.get('https://reqres.in/api/users?page=2')
    const dataRes = await response.json()
})
 
test.only('test5', async({request}) => {
    const response = await request.post('https://reqres.in/api/users',
        {
            data:{"name": "morpheus","job": "leader"},
            headers:{"Accept":"application/json"}
        })
    console.log(await response.json())
    expect(await response.status()).toBe(201)
    var res = await response.json()
    console.log(res.id)
})


let userId
test('test6', async({request}) => {
    const response = await request.post('https://reqres.in/api/users',
        {
            data:{"name": "morpheus","job": "leader"},
            headers:{"Accept":"application/json"}
        })
    console.log(await response.json())
    expect(await response.status()).toBe(201)
    var res = await response.json()
    userId = res.id
})
 
test('test7', async({request}) => {
    const response = await request.put('https://reqres.in/api/users/'+userId,
        {
            data:{"name": "Tester","job": "engineer"},
            headers:{"Accept":"application/json"}
        })
    expect(await response.status()).toBe(200)
    console.log(await response.json())
   
})
 
test('test8', async({request}) => {
    const response = await request.delete('https://reqres.in/api/users/'+userId)
    expect(await response.status()).toBe(200)
   
})
 