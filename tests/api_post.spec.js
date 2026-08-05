import { test, expect } from '@playwright/test';

test('POST Activities API', async ({ request }) => {

  const response = await request.post(
    'https://fakerestapi.azurewebsites.net/api/v1/Activities',
    {
      headers: {
        "accept": "text/plain; v=1.0",
        "Content-Type": "application/json; v=1.0"
      },

      data: {
        id: 2009,
        title: "Playwright API Test",
        dueDate: "2026-08-04T09:46:26.653Z",
        completed: true
      }
    }
  );


  console.log('Status Code:', response.status());
  
  const responseBody = await response.json();
  console.log('Response Body:', responseBody);
  console.log('Header Info:', response.headers());


  // Validation
  expect(response.status()).toBe(200);

});