import { defineConfig } from 'cypress';
import 'dotenv/config';

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    env: {
      loginEmail: process.env.TEST_USER_EMAIL,
      loginPassword: process.env.TEST_USER_PASSWORD,
    },
  },
});
