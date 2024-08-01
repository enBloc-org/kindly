## Testing Expectations

All Pull Requests are expected to include sufficient testing.

- If a new component has been added, a unit test for that component should be created
- If a new feature has been implemented, the adequate integration or end-to-end test should consider it
- If no new tests are added, the Pull Request description should provide a brief note on why this was not necessary

All new and prior tests should be passing in every Pull Request

## Component Testing

We use [Storybook](https://storybook.js.org/tutorials/intro-to-storybook/react/en/get-started/) to test the rendering and basic functionality of our components as well as documenting them.

You can view our component library by running the following command:

```bash
npm run storybook
```

If you create a new component or refactor an existing component you should make the relevant changes to a `.stories.tsx` file inside the `stories/` folder.

### Component Library and documentation
You can learn more about how to structure your stories in the codebase from the [**official documentation 📚**](https://storybook.js.org/docs/writing-stories#where-to-put-stories)

In order to build the best possible Developer Experience keep the component library organized by feature, as shown in the example below:  
![Storybook component library structure](./documentation_images/storybook_component_library.png)

### Component interactions in Storybook
You can learn more about writing tests within the `play` block of your stories by reading the [**official documentation 📚**](https://storybook.js.org/docs/writing-stories/play-function#writing-stories-with-the-play-function)

All component stories should include tests for any basic functionality provided by the component. All `interactions` tests should be passing in Storybook after any changes to our components.

![Storybook interactions test suite](./documentation_images/storybook_interactions_suite.png)

## End-to-end Testing (E2E)

[Cypress](https://www.cypress.io/) is the tool used to test the high-level functionality of the application.

[With the app running](https://github.com/enBloc-org/kindly/blob/dev/.github/BEFORE_YOUR_FIRST_ISSUE.md#running-the-app), you can run the Cypress tests with the following command:

```bash
npx cypress run
```

Alternatively, if you have Supabase running (but not the app) you can start the app and run the tests simultaneously with:

```bash
npm run start-dev
```

The Cypress E2E test files are located in the `cypress/e2e/` folder.

### Developing and debugging E2E tests

As you work on new features and fixes, you may need to write new E2E tests or update existing ones. With the app running, you can run the E2E tests interactively using Launchpad:

```bash
npx cypress open
```

Learn more about the Cypress Launchpad by checking out the [**official documentation 📚**](https://docs.cypress.io/guides/getting-started/opening-the-app)
