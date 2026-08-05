// import { test } from '@playwright/test';

// test('GET Activities API', async ({ request }) => {
//   const response = await request.get(
//     'https://fakerestapi.azurewebsites.net/api/v1/Activities'
//   );

//   console.log('Status Code:', response.status());

//   const responseBody = await response.json();
//   console.log('Response Body:', responseBody);

//   const headers =await response.headers();
//   console.log("Header Info",headers);

//    const json = await response.json();
//   console.log("Json Info",json);


// });

// https://fakerestapi.azurewebsites.net/api/v1/Activities/1




import { test, expect } from '@playwright/test';
test('GET Activities API', async ({ request }) => {

  const response = await request.get(
    'https://fakerestapi.azurewebsites.net/api/v1/Activities/1'
  );

  console.log('Status Code:', response.status());

  const responseBody = await response.json();

  console.log('Response Body:', responseBody);

  const headers = response.headers();

  console.log("Header Info:", headers);


  // Status validation
  expect(response.status()).toBe(200);


  // Body validation
  expect(responseBody.id).toBe(1);
  expect(responseBody.title).toBe("Activity 1");
  expect(responseBody.completed).toBe(false);

});