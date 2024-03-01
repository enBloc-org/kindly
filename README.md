# Kindly - Supporting Ukrainian Refugees in London
Kindly is a web application dedicated to assisting Ukrainian refugees in London by facilitating the donation of clothes and essential items. Individuals can contribute items at no cost to provide much-needed support to those in need.

## Deployed Website

The deployed website can be accessed at (https://kindly-v2zt.vercel.app/).

Site style guide can be found at [https://github.com/fac28/kindly/blob/main/style-guide]

## How It Works
**Explore Categories**:

Browse through different categories of items to find what suits your preferences using an intuitive filtering system.

**Select Items**:

Easily select the items you need from the available options.

**Send Enquiries**:

Communicate with donors by sending messages to inquire about specific items.

## Technologies Used

### Frontend: React and Next.js

**React:**
A JavaScript library for building interactive user interfaces, React's component-based architecture simplifies development and enhances code reusability.

**Next.js:**
A React framework that facilitates server-side rendering, automatic code splitting, and straightforward deployment, optimizing the performance of our application.

### Backend: Supabase

**Supabase:**
Leveraging PostgreSQL for the database, Supabase streamlines backend development with real-time capabilities, authentication services, and serverless functions.

- **Database:** Offers scalability and real-time updates, essential for live data applications.
- **Authentication:** Provides secure user authentication with seamless integration for frontend frameworks like React.
- **Serverless Functions:** Enables scalable and cost-effective backend operations without managing servers.

### Testing
Tests for this codebase use Playwright. You can run all tests using the command `npm run ci`

This command has been set up with `start-server-and-test` npm package to spin up the local server ahead of running end-to-end tests. Unit tets for components are also run in the same script by using the experimental playwright-ct package.

Individual tests can be run using `npx playwright test -c playwright-ct.config.ts /pathToTestFile`

### Other: Nodemailer

**Nodemailer:**
A Node.js library for sending emails programmatically, Nodemailer enhances communication within the application, facilitating notifications and updates.

## Installation

To run the Kindly application locally:

Clone the project:

```bash
  git clone https://github.com/fac28/kindly.git
```

Go to the project directory:

```bash
  cd kindly
```

Install dependencies:

```bash
  npm install
```

Add env variables:

The .env.example file in the root directory shows what variables you will need. For Gmail app and AWS amplify variables you will need contact the Product Owner. For Supabase variables you will need to have access to the project within Supabase (https://supabase.com/docs/guides/functions/secrets).

Running the app:

```bash
  npm run dev
```

## Credits

DevOps: <a href="https://github.com/cazanelena">Elena Cazan</a> <br>
Ux/UI: <a href="https://github.com/nichgalzin">Nich Galzin</a> <br>
QA: <a href="https://github.com/ShaughnAnderson94">Shaughn Anderson</a> <br>
Scrum: <a href="https://github.com/benante">Tommaso Orlandi</a> <br>
