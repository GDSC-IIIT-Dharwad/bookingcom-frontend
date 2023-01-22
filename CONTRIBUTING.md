IMPORTANT - Whenever you complete any task assigned to you, make sure to fill this [google form.](https://forms.gle/2zQsMCGJBgHqoCGS7)

# Contributing Guidelines

## Making a Pull Request [PR]

Refer to the official docs to create a pull request - [GitHub Docs](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)

## Formatting

Consistency is very crucial in any project. That is, having consistent formatting
throughout is important for so many reasons.

We use 'Prettier' formatter to format our codebase. Make sure you have it installed
and you have 'Format on Save' on.

Read more at [Prettier Docs](https://www.digitalocean.com/community/tutorials/how-to-format-code-with-prettier-in-visual-studio-code).

## RULES

### Pull before you change

Before making any changes to the codebase, it is important to make sure that you have the latest version of the code. This can be done by running the command `git pull origin main` to ensure that you have the latest updates from the remote repository. This will help prevent conflicts with other contributions and ensure that your changes are based on the most recent version of the code.

### Commit message

A clear and concise commit message is important for maintaining the project's history and making it easier for others to understand the changes that were made. It is a good practice to prefix the commit message with the type of change, for example, `feat:` for a new feature, `fix:` for a bug fix, and `docs:` for documentation changes.
For example, a commit message for a bug fix could be `fix: resolved issue with login functionality` and for a new feature, it could be `feat: added new dashboard to track user data`.

### Folder structure

Maintaining a consistent and logical folder structure is important for keeping the codebase organized and easy to navigate. It is a good practice to create a separate folder for each component or feature and to keep related files, such as styles and tests, in the same folder.
For example, you could have a `components` folder that contains subfolders for each component, such as `header`, `footer`, `sidebar`, etc. and each subfolder should contain all the related files for that component like `index.js`, `styles.css` and `test.js`

### Third-party library usage

Using third-party libraries can save time and improve the functionality of the project, but it is important to use them responsibly. Before adding a new library, consider whether it is necessary and whether there are alternative solutions. It is also important to keep the libraries up-to-date and to document their usage in the codebase. Additionally, make sure that you have the necessary licenses to use the libraries in your open-source project.
You should always get consent before using third-party libraries, and make sure that you have the necessary licenses to use them.
