import { defineConfig } from 'cypress';
import 'dotenv/config';

module.exports = defineConfig({
  e2e: {
    viewportWidth: 1920,
    viewportHeight: 1080,
    baseUrl: 'http://localhost:3000',
    env: {
      loginEmail: process.env.TEST_USER_EMAIL,
      loginPassword: process.env.TEST_USER_PASSWORD,
    },
  },
});
