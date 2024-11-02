# Submitting a new Issue

Everyone is welcome to submit a new Issue to Kindly - whether you intend to resolve it yourself or would just like to raise the awareness of the community to it.

## Before you submit an Issue

Check the backlog for any duplicates - it's possible that someone has already submitted the same issue you've just spotted and having duplicates in the backlog can lead to confusion and a slowdown in development

## How to submit an Issue

Once you reach the **Issues** tab on the Kindly repo and create a new Issue you will be prompted with a template in the **New Issue Description** - please stick to this format and fill in as much detail as possible where prompted.

Include a clear example of the current behaviour with (as much as possible):

- A way to reproduce the problem
- Screenshots of the behaviour
- Information on any triage you've attempted

### In case of a breaking issue in Production

Our first priority is to guarantee a stable version in Production (deployed from `main` in our case) at all times, but we also have a Rollback plan to follow in the event of a bug that would stop users from interacting with our Production code.

A rollback can only be performed by a member of the core team since they will have the necessary permissions on the repository and will be prepared to make the call to trigger a callback or attempt a different solution. This plan has been set up only as a last resort, in case of a major issue stopping users from interacting with the deployed platform - it should not be used if there is the potential for a bug fix (or hot fix).

- **If you spot** a breaking issue in production, please raise it with the core team as soon as possible. The simplest way is probably to reach out on discord. Follow that up with [submitting an issue](.github/CONTRIBUTING.md#how-to-submit-an-issue) so others in the community can see that it is being addressed.

- **If you are performing a rollback** you need to create a pull request from the branch `#360/rollback-v1` to `main`. This branch is a still copy of version 1 when it was completed, so any changes that might have happened since _will be lost_.
  As per our branch protection rules, this PR will need the explicit approval of two other members of the core team.

<hr>

# Asking for Help

## Help with an Issue

If you have gotten stuck on an Issue you are contributing to and need technical help:

- Update the status of that Issue to `Blocked`. Other developers will be monitoring Issues with this status and prioritising them in their contributions.
- Add a comment to the Issue explaining the help you need

## Help with a question

The `Issues` tab is a working tool for the active development of Kindly, so it should be kept clear of communication not relating to development.

If you have a question or suggestion directly related to an open Issue please use the comments on that Issue ticket to discuss it with anyone working on it / the core team.

If you have a question related to Trafalgar Girls, Kindly or the community at large:

- Check the documentation first - there's a chance your question can be answered by reading the [README](../README.md) file
- Reach out on [Discord](https://discord.gg/Mrh5NYw52S)

<hr>

# Contributing Code

Developers at all levels of experience and comfort in the Kindly tech stack are welcome to contribute!

However, before you set out to submit code, please review our [best practices](./BEST_PRACTICE.md) and our [installation guide](./BEFORE_YOUR_FIRST_ISSUE.md).

## Database Schema

Kindly uses a Postgres database served through [Supabase](https://supabase.com)

![Kindly database schema](./documentation_images/schema.png)

### Contributing changes to our database

Refer to the [official documentation](https://supabase.com/docs/guides/cli/managing-environments?queryGroups=environment&environment=staging#auto-schema-diff) on managing migrations for any contributions that require changes to the Supabase project.

## Finding an Issue

### As a newcomer

If it's your first time submitting code to Kindly and/or you are looking to get acquainted with any one part of our tech stack or code base, we recommending finding an Issue labeled `Good first issue`. You can filter for these.

### As a senior

If you've been contributing to Kindly for a while (Thanks! ✨) and are quite comfortable with the tech stack and code base:

- Check first for any Issues with the status `Blocked`
- If you have been given access along with the core team, help the development by reviewing any pending Pull Requests before starting a new Issue
- Check for any Issues labeled `High Priority`
- Consider pairing up with a less experienced developer dipping into a more complex issue - part of the ethos for Kindly is sharing knowledge

## Being Assigned an Issue

Once you've identified an Issue you'd like to contribute to please add a comment to its thread requesting to be assigned.

💡 If you add the keyword `!request` to your comment an automated workflow will assign the issue to you so long as it is available.

In that comment, add a brief outline of the approach you're hoping to take. This does not need to be a comprehensive report but it helps us promote knowledge sharing in the community and can help other contributors quickly identify any potential clashes with their code or it may outline a good opportunity to collaborate with someone.

🔎 Keep in mind that if an issue becomes `stale` you may be automatically unassigned in order to allow other contributors to pick it up.
You will always be notified if this workflow is triggered but please make sure to only pick up issues when you are ready to contribute to them.

To help us maintain a swift workflow in the project please **only request one issue at a time** unless you are implementing changes that affect two issues closely related. We try to keep issues in the backlog free, if they are not being addressed immediately, to allow new contributors to pick them up

## Finally

Have fun! 🎡
