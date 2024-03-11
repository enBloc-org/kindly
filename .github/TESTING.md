## Testing Expectations
All Pull Requests are expected to include sufficient testing.

- If a new component has been added, a unit test for that component should be include
- If a new feature has been implemented, the adequate integration or end-to-end test should consider it
- If no new tests are added, the Pull Request description should provide a brief note on why this was not necessary

All new and prior tests should be passing in every Pull Request

## Set Up
Before running tests you will need to set up your authentication. An `example.auth.setup.ts` file is provided in the repo.

Open this file and follow the indications in comments. You must have signed up to Kindly with a test account before this, as you will need to fill in your credentials.

Add your test user details to your `.env` variables. These are described in the `.env.example`.

## Running your tests
Tests for this codebase use Playwright. Once fully set up, you can run all tests using the command `npm run ci`

This command has been set up with `start-server-and-test` npm package to spin up the local server ahead of running end-to-end tests. Unit tets for components are also run in the same script by using the experimental playwright-ct package.

Individual tests can be run using `npx playwright test -c playwright-ct.config.ts /pathToTestFile`
