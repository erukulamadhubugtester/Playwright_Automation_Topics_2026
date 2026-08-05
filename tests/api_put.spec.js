import { test, expect } from '@playwright/test';

test('Update Activity', async ({ request }) => {

  const response = await request.put(
    'https://fakerestapi.azurewebsites.net/api/v1/Activities/0',
    {
      headers: {
        accept: 'text/plain; v=1.0',
        'Content-Type': 'application/json; v=1.0'
      },
      data: {
        id: 1,
        title: 'Updated Activity',
        dueDate: '2026-08-04T12:16:31.152Z',
        completed: true
      }
    }
  );

  console.log('Status Code:', response.status());

  const body = await response.json();
  console.log('Response Body:', body);

  expect(response.status()).toBe(200);
  expect(body.id).toBe(1);
  expect(body.title).toBe('Updated Activity');
});