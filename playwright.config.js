// @ts-check
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
 
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries:1,
  workers: 1,
  reporter: [['allure-playwright',{foutputFolder: 'my-allure-results'}]],
 
  use: {
    baseURL:'https://practice.expandtesting.com/',
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    ignoreHTTPSErrors: true, // Disable SSL verification globally
  },

 
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});

