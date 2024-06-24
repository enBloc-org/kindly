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

Add env variables:

The .env.example file in the root directory shows what variables you will need. For Gmail app and AWS amplify variables you will need to ask for them on discord.  
For the supabase variables follow the guidance below on setting up your local instance.

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

This will take you to the browser to complete a login. Then you will need to start your container with the following command:

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

Copy the `API URL` value into your `.env` file as the value of our `NEXT_PUBLIC_SUPABASE_URL` and the `anon key` value as our `NEXT_PUBLIC_SUPABASE_ANON_KEY` value.

Your local development is now ready ✨

You can use the `Studio URL` provided to view and edit your local supabase project if needed.

You can also run all migration files and re-seed the database whenever necessary with the following command:

```bash
npx supabase db reset
```

This will set your local project back to the latest committed state and re-populate all data.

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

## Next Steps

Once you have kindly running on your machine read the [contribution guidance](CONTRIBUTING.md)
then go to the project and assign yourself an issue or create and issue yourself. Look for ones marked as good first issues.
