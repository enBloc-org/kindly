# Welcome - Before you get started

If you are visiting our repo for the first time and would like a quick intro, you may want to watch this video:

[![welcome to Kindly](https://cdn.loom.com/sessions/thumbnails/f67dccc47ab448508e32bb3e672121f9-1716460124959-with-play.gif)](https://www.loom.com/share/f67dccc47ab448508e32bb3e672121f9?sid=5a67e0d6-7151-4e8b-a71a-8748a74b820e)

You can read below the detailed guidance on getting set up and contributing to Kindly 👇

## Tech Stack

| Frontend | Backend  | Testing   |
| -------- | -------- | --------- |
| React    | Next.js  | Cypress   |
| Tailwind | Supabase | Storybook |

## Installation

To run the Kindly application locally:

Fork the `enbloc-org/kindly` project to your personal github profile.  
You can do this by finding the `fork` button on the top-right corner of our repo.

![screenshot of fork button in github](./documentation_images/fork_repo.png)

Clone your new project into a local repository:

```bash
git clone [url-to-your-forked-repo-here]
```

Go to the project directory:

```bash
cd kindly
```

With Node.js 20, install the project dependencies:

```bash
npm install
```

### Add `env` variables:

The `.env.example` file in the root directory shows what variables you will need.  
Follow the guidance below on setting up your local instance and obtain the relevant Supabase variables.

## Setting up your development database

Kindly uses Supabase to serve its _postgres_ database. You will need to setup a local container to run a development instance of the database.

### Install docker

You will need to have docker installed and running before following the next steps. Find the latest version [here](https://www.docker.com/products/docker-desktop/).

Once it is installed, start your docker console and make sure there are no outstanding updates.

You don't need to do anything else within docker for now. A container will be created in the next steps.

### Supabase CLI

The CLI will allow you to set up the schema and seed your local copy of the kindly database. You can find more comprehensive guidance in the [official docs](https://supabase.com/docs/guides/cli/getting-started) but we've outlined below the commands you will need to run in order to get started.

We have added to the repo a migration file and a seed file for the database, so you will only need to log into supabase with the following command:

```bash
npx supabase login
```

Follow the instructions in the terminal. This will redirect you to your browser, where you will be provided with a verification code.

Copy the verification code from the browser, return to your terminal, and paste it when prompted by the Supabase CLI to complete the login process.

After logging in, start your container using the following command:

```bash
npx supabase start
```

This script will run the migration file to set up your schema and then will run the `supabase/seed.sql` file to populate the database with some test data.

You should see the new "kindly" container in your docker console now.

Your terminal will have logged a series of details that will look something like this:

```bash
Started supabase local development setup.

         API URL: http://localhost:54321
          DB URL: postgresql://postgres:postgres@localhost:54322/postgres
      Studio URL: http://localhost:54323
    Inbucket URL: http://localhost:54324
        anon key: eyJh......
service_role key: eyJh......
```

You can view these details again at any time by running the following command:

```bash
npx supabase status
```

Copy the following values:

- `API URL` value into your `.env` file as the value of our `NEXT_PUBLIC_SUPABASE_URL`
- `anon key` value as our `NEXT_PUBLIC_SUPABASE_ANON_KEY` value
- `service_role key` as our `SUPABASE_SERVICE_ROLE_KEY` value

Your local development is now ready ✨

You can use the `Studio URL` provided to view and edit your local supabase project if needed.

You can also run all migration files and re-seed the database whenever necessary with the following command:

```bash
npx supabase db reset
```

This will set your local project back to the latest committed state and re-populate all data.

### Setting Up Supabase Bucket

To store and serve images, Kindly uses a bucket in Supabase. You need to create and configure this bucket manually:

1. Open the 'Studio URL' in your web browser
2. Navigate to the "Storage" section
3. Create a new bucket named 'images'
4. Set the bucket to be public to ensure it can be accessed without authentication

💡 Note: The bucket and its configuration will be lost if you reset the database or destroy the container. Make sure to create the bucket once again if you reset your environment.

## Managing Database Migrations:

Now that you are working from a local instance of the database you will need to handle Migration files in order to version-control any changes made to our supabase project.

You can find more detailed guidance on how to handle migrations in the Supabase [official documentation](https://supabase.com/docs/guides/cli/managing-environments?queryGroups=environment&environment=staging#auto-schema-diff)

We have helpfully included a script in the `package.json` to help create a new migration file:

```
npm run migrate insert-your-file-name
```

Make sure to replace **insert-your-file-name** with a name that describes your changes to the database.

## Running the app:

Make sure you are on the dev branch then use

```bash
npm run dev
```

### Test Users

To help you get started with development and testing, we have created the following accounts:

- **Test Donor**

  - Email: `donor+test.reshetniak@gmail.com`
  - Password: `schemu8s`

- **Test Refugee**

  - Email: `refugee+test.reshetniak@gmail.com`
  - Password: `schemu8s`

- **trafalgargirls** _(this is used by the code as a system user for actions like adding message notifications to conversations)_
  - Email: `trafalgargirls@gmail.com`
  - Password: `donor-trafalgar`

## Next Steps

Once you have kindly running on your machine read the [contribution guidance](CONTRIBUTING.md)
then go to the project and assign yourself an issue or create and issue yourself. Look for ones marked as good first issues.
