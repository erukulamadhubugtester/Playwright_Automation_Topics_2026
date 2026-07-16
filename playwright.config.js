import { defineConfig } from '@playwright/test';
import { config as loadEnv } from 'dotenv';
import { resolve } from 'path';

loadEnv({ path: resolve(__dirname, './.env'), override: true, quiet: true });
// loadEnv({
//   path: resolve(process.cwd(), '.env'),
//   override: true
// });
export default defineConfig({
  testDir: './tests',

  timeout: 40 * 1000,

  expect: {
    timeout: 40 * 1000,
  },

  reporter: 'html',

  use: {
    browserName: 'chromium',
    ignoreHTTPSErrors: true,
    headless: false,
    viewport: null,
    screenshot: 'only-on-failure',
    trace: 'on',

    launchOptions: {
      args: [
        '--start-maximized',
        '--ignore-certificate-errors',
        '--allow-running-insecure-content',
        '--disable-web-security',
      ],
    },
  },
});