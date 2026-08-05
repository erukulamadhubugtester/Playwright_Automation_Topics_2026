const { defineConfig } = require('@playwright/test');
import { config as loadEnv } from 'dotenv';
import { resolve } from 'path';

loadEnv({
  path: resolve(__dirname, './.env'),
  override: true,
  quiet: true,
});

const commonUse = {
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
};

export default defineConfig({
  testDir: './tests',

  timeout: 40 * 1000,

  expect: {
    timeout: 40 * 1000,
  },

  reporter: 'html',

  // Default browser if no project is specified
  use: {
    browserName: 'chromium',
    ...commonUse,
  },

  projects: [
    {
      name: 'Chromium',
      use: {
        browserName: 'chromium',
        ...commonUse,
      },
    },

    {
      name: 'Google Chrome',
      use: {
        browserName: 'chromium',
        channel: 'chrome',
        ...commonUse,
      },
    },

    {
      name: 'Microsoft Edge',
      use: {
        browserName: 'chromium',
        channel: 'msedge',
        ...commonUse,
      },
    },

    {
      name: 'Firefox',
      use: {
        browserName: 'firefox',
        ...commonUse,
      },
    },

    {
      name: 'WebKit',
      use: {
        browserName: 'webkit',
        ...commonUse,
      },
    },
  ],
});