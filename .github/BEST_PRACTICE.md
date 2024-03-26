The conventions outlined below should be adhered to in all contributions to Kindly.

This document assumes you have reviewed the [Contributing guidance](CONTRIBUTING.md) already. If you haven't, please take a moment to do so before continuing.

<hr>

# Naming Conventions

- for **Components**:
  - use PascalCase
- for **Types**:
  - use PascalCase
  - suffix it with the word 'Type'
    - e.g.: MessageType
  - always declare **Type**, not _Interface_
- for **Prop Types**:
  - use PascalCase
  - prefix it with the relevant Component name
  - suffix it with the word 'Props'
    - e.g.: MessageCardProps
- for **Functions**:
  - use camelCase
- for **Branches**:
  - prefix it with the number of the issue it relates to
  - suffix it with a descriptive line on the work being done
  - separate the issue number from the description with a forward slash `/`
  - hyphenate the description `-`
    - e.g.: #273/create-new-component

### Never Abrev ❗️

<hr>

# Types

- When Types are declared within a component file:
  - They should not be exported
  - They should be declared at the top of the file
- When Types are declared in a **\***Types.ts\*\*\* file:
  - They should be relevant to the scope of the feature the file relates to
    - e.g.: if a Type is declared in "conversationsTypes.ts" it should be relevant to several files connected with the '/conversations' feature
    - if a Type declared in "conversationsTypes.ts" is only exported into one file, it should be moved there

## Avoid Type ambiguity:

Types should not be declared with Logical OR Operators `|` when possible. For example:

**This:**

```ts
const [isTrue, setIsTrue] = useState<boolean>(1 + 1 === 2);
// a "relevant expression" evaluates to true and iniates the state truthfully
```

**Not this:**

```ts
const [isTue, setIsTrue] = useState<boolean | null>(null);
// state is initiated as null and now our Type is ambiguous throughout
```

<hr>

# Comments

Comments should be avoided by applying the practices described below:

## Documenting through TypeScript

Keep your functions and variables strongly Typed and guarantee you include an explicit return Type for functions

```ts
// the return value has an explicitly declared Type in the function definition
// the props have an explicit Type defined as ConversationCardProps
const ConversationCard: React.FC<ConversationCardProps> = {
  joinedAt,
  itemName,
  imageSrc,
  clickHandler,
};
```

## Documenting through JS Docs

If commentary is necessary for a function you are exporting, it should be added with the use of [JS Docs](https://jsdoc.app/). Visit the official documentation for more detail, but most commonly these values would be used:

- **@description** - to provide other developers with a brief explanation of the behaviour of this function
- **@example** - to provide other developers with a brief practical example of this function applied

We look to remove comments from code lines through the combined use of these best practices. For example:

**This:**

```ts
/**
 *
 * @description expects the timestamptz format output from our database
 *              calls and returns a formatted string displaying an hour
 *              and minute stamp i.e.: 13:32
 */
export const formatTimeMarker = (givenString: string): string => {
  const givenDate: Date = new Date(givenString);
  const hoursValue =
    givenDate.getHours().toString().split('').length < 2
      ? '0' + givenDate.getHours().toString()
      : givenDate.getHours().toString();

  const minutesValue =
    givenDate.getMinutes().toString().split('').length < 2
      ? '0' + givenDate.getMinutes().toString()
      : givenDate.getMinutes().toString();

  return `${hoursValue}:${minutesValue}`;
};
```

**Not This:**

```ts
// this function takes in the created_at from our database
// returns a timestamp to be displayed for the user
export const formatTimeMarker = (givenString: string): string => {
  const givenDate: Date = new Date(givenString);
  // the givenString must be of type timestamptz

  const hoursValue =
    givenDate.getHours().toString().split('').length < 2
      ? '0' + givenDate.getHours().toString()
      : givenDate.getHours().toString();

  const minutesValue =
    givenDate.getMinutes().toString().split('').length < 2
      ? '0' + givenDate.getMinutes().toString()
      : givenDate.getMinutes().toString();

  return `${hoursValue}:${minutesValue}`;
};
```

<hr>

## Commit Messages

In order to facilitate fast development and clarity in the long run we encourage contributors to observe the following format in their commit messages:

```bash
git commit -m "docs: updated BEST_PRACTICE.md with commit message expectations" -m "relates #107"
```

**The first -m string** utilises [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0-beta.3/#specification) to describe the contribution.

Commit Types may include the extended list contemplated in the [Angular convention](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines). The original documentation should be visited for a comprehensive outline, however, a brief description of common commit Types is provided below for convenience:

| Type      | Means this commit...                                                             |
| --------- | -------------------------------------------------------------------------------- |
| build:    | affects the build system or external dependencies                                |
| docs:     | only affects documentation files or JS Docs messages                             |
| feat:     | adds new functionality                                                           |
| fix:      | is a bug fix                                                                     |
| refactor: | changes code for readability and maintainability without altering it's behaviour |
| style:    | affects formatting changes that do not alter the behaviour of the code           |
| test:     | adds new tests and/or adapts existing tests                                      |

**The second -m string** tags the issue this commit is related to.

<hr>

## General Styling

All code should follow the styling set up in the `.prettier.rc` file.
Linting is also in place via a pre-commit hook for husky.
