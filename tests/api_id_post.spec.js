const { test, expect } = require('@playwright/test');

test('Update Activity - PUT', async ({ request }) => {

  const id = 1;

  const response = await request.put(
    `https://fakerestapi.azurewebsites.net/api/v1/Activities/${id}`,
    {
      headers: {
        'accept': 'text/plain; v=1.0',
        'Content-Type': 'application/json; v=1.0'
      },
      data: {
        id: 1,
        title: 'string',
        dueDate: '2026-08-05T05:57:43.324Z',
        completed: true
      }
    }
  );

  console.log('Status:', response.status());

  const body = await response.json();
  console.log(body);

  expect(response.status()).toBe(201);
 

});