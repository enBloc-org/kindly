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

Add env variable:

Create an .env file in the root directory of your project and add the environment variables from supabase (https://supabase.com/docs/guides/functions/secrets).

Running the app:

```bash
  npm run dev
```

## Credits

DevOps: <a href="https://github.com/cazanelena">Elena Cazan</a> <br>
Ux/UI: <a href="https://github.com/nichgalzin">Nich Galzin</a> <br>
QA: <a href="https://github.com/ShaughnAnderson94">Shaughn Anderson</a> <br>
Scrum: <a href="https://github.com/benante">Tommaso Orlandi</a> <br>
