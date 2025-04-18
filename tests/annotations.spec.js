import {test, expect} from '@playwright/test'
 
test.beforeEach(async ({  }) => {
    console.log("Before Each......")
});
 
test.beforeAll(async ({  }) => {
    console.log("Before All......")
});
 
test.afterAll(async ({  }) => {
    console.log("After All......")
});
 
test.afterEach(async ({  }) => {
    console.log("After Each......")
});
 
test.describe('two tests', () => {
    test('test1', async({page}) => {
        console.log('Test1.....')
    })
   
    test('test2', async({page}) => {
        console.log('Test2.....')
    })
})
 
test.describe('two tests', () => {
    test('test3', async({page}) => {
        console.log('Test3.....')
    })
   
    test('test4', async({page}) => {
        console.log('Test4.....')
    })
})

 
test.beforeEach(async ({  }) => {
    console.log("Before Each......")
});
 
test.beforeAll(async ({  }) => {
    console.log("Before All......")
});
 
test.afterAll(async ({  }) => {
    console.log("After All......")
});
 
 
test.afterEach(async ({  }) => {
    console.log("After Each......")
});
 
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
 
test('test4', async({page}) => {
    console.log('Test4.....')
})