# Contributing to Daytona Documentation

Thank you for your interest in contributing to Daytona Documentation! Whether you're fixing a typo, improving existing docs, or adding new content, your help is greatly appreciated.

We are happy to help with guidance on PRs, technical writing, and turning any feature idea into a reality.

This document provides a detailed step-by-step guide for contributors, especially writers, to ensure that contributions are consistent and of high quality. If you need further assistance, don't hesitate to reach out in the [Daytona Slack Community][slack].

### Writing Guidelines

- **Clarity and Conciseness**: Write clearly and concisely. Avoid complex jargon and aim for simplicity.

- **Second Person Narrative**: Address the reader as "you" to create an engaging and direct narrative.

- **Active Voice**: Use active voice whenever possible to make your writing more dynamic and clear.

- **Screenshots and Examples**: Include annotated screenshots and examples to illustrate complex points.

- **Formatting**: Use Markdown for formatting. Refer to the [Markdown Guide](https://www.markdownguide.org) if you're unfamiliar with it.

- **Code Snippets**: When including code, ensure it's properly formatted and tested.

- **Links**: Add hyperlinks to relevant sections within the docs or to external resources for additional information.

### Writing Process

1. **Familiarize Yourself**: Begin by understanding Daytona and its features. Explore the existing documentation to get a sense of the writing style and structure.

2. **Find a Topic**: Look for topics that need improvement, missing documentation, or new features that haven't been documented yet. You can check existing [issues][issues] for documentation requests or open a new issue if you identify a gap in the content.

3. **Create an Issue**: If you're addressing an unreported problem or proposing new content, open an issue to discuss your ideas. Provide a clear and concise description of what you want to add or change.

4. **Fork and Clone**: Fork the [Daytona Docs repository][sl] to your GitHub account and clone it to your local machine. Replace `YOUR-USERNAME` with your GitHub username:

    ```sh
    git clone https://github.com/YOUR-USERNAME/docs.git
    cd docs
    ```

5. **Branch Out**: Create a new branch for your work. Use a descriptive name that reflects the changes you're planning to make:

    ```sh
    git checkout -b update-getting-started
    ```

6. **Set Up Your Environment**: If you haven't already, set up your local development environment. Ensure you have Node.js (v16 or higher) and pnpm (v8.2 or higher) installed.

    ```sh
    pnpm i
    ```

7. **Write**: Make your changes or add new content. Follow the existing documentation format and style guide. Save your files in the correct directories as per the project structure.

8. **Test Locally**: Before pushing your changes, run the local development server to test how your changes look:

    ```sh
    pnpm dev
    ```

9. **Commit**: Once you're satisfied with your work, commit your changes with a clear and descriptive message:

    ```sh
    git add .
    git commit -m "Add a guide on integrating Daytona with VS Code"
    ```

10. **Push**: Push your branch to your fork on GitHub:

    ```sh
    git push -u origin update-getting-started
    ```

11. **Create a Pull Request**: Go to the main Daytona Docs repo and click on "New Pull Request". Select your branch and fill out the PR form with a title and description that clearly explains your changes.

12. **Review and Revise**: Maintainers or other contributors may review your PR and request changes. Be responsive to feedback and make any necessary revisions.

13. **Merge**: Once your PR is approved, a maintainer will merge it into the main documentation.

### Setting up a development environment

You can [develop locally](#developing-locally) or use an online coding development environment like [Daytona](#developing-using-daytona) or [Codespaces](#developing-using-github-codespaces) to get started quickly.

#### Developing locally

**Prerequisites:** As Daytona docs use Astro and Starlight you need to set up your dev environment (our documentation template) which requires [Node.js](https://nodejs.org/en) (v16 or higher) and [pnpm](https://pnpm.io/) (v8.2 or higher). Make sure you have these installed before following these steps.

1. **Fork Daytona Docs** to your personal GitHub account by clicking <kbd>Fork</kbd> on the [main Daytona Docs repo page][sl].

2. **Clone your fork** of Daytona Docs to your computer. Replace `YOUR-USERNAME` in the command below with your GitHub username to clone in a Terminal:

   ```sh
   git clone https://github.com/YOUR-USERNAME/docs.git
   ```

3. **Change directory** to the cloned repo:

   ```sh
   cd docs
   ```

4. **Install dependencies** with `pnpm`:

   ```sh
   pnpm i
   ```

#### Developing using Daytona

**Prerequisites:** Developing Daytona Docs using Gitpod requires a an access to Daytona instance [Daytona](https://daytona.io).

1. **Open the Daytona URL** [https://daytona.io/#https://github.com/daytonaio/docs](https://daytona.io/#https://github.com/daytonaio/docs). You can alternatively install a [Daytona extension]() in your IDE which will allow you to manage dev workspaces directly in your IDE.

2. **Install dependencies** with `pnpm`:

   ```sh
   pnpm i
   ```

#### Developing using GitHub Codespaces

1. **Create a new codespace** via https://codespaces.new/daytonaio/docs

2. If running the docs site, pass the `--host` flag to avoid “502 Bad Gateway” errors:

   ```sh
   cd docs
   pnpm dev --host
   ```

The dev container used for GitHub Codespaces can also be used with [other supporting tools](https://containers.dev/supporting), including VS Code.

### Making a Pull Request

When making a pull request containing changes impacting users to Starlight or any related packages (`packages/*`), be sure to [add a changeset](https://github.com/changesets/changesets/blob/main/docs/adding-a-changeset.md#i-am-in-a-multi-package-repository-a-mono-repo) that will describe the changes to users.
Documentation-only (`docs/*`) and non-package (`examples/*`) changes do not need changesets.

```sh
pnpm exec changeset
```

## Testing

### Testing visual changes while you work

Run the Astro dev server on the docs site to see how changes you make impact a project using Starlight.

To do this, move into the `docs/` directory from the root of the repo and then run `pnpm dev`:

```sh
cd docs
pnpm dev
```

You should then be able to open <http://localhost:4321> and see your changes.

> **Note**
> Changes to the Starlight integration will require you to quit and restart the dev server to take effect.


### Translating Daytona’s docs

#### Adding a new language to Starlight’s docs

To add a language, you will need its BCP-47 tag and a label. See [“Adding a new language”](https://github.com/withastro/docs/blob/main/contributor-guides/translating-astro-docs.md#adding-a-new-language) in the Astro docs repo for some helpful tips around choosing these.

- Add your language to the `locales` config in `docs/astro.config.mjs`
- Add your language’s subtag to the i18n label config in `.github/labeler.yml`
- Add your language to the `pa11y` script’s `--sitemap-exclude` flag in `package.json`
- Create the first translated page for your language.  
   This must be the Daytona Docs landing page: `docs/src/content/docs/{language}/index.mdx`.
- Open a pull request on GitHub to add your changes to Daytona Docs!

## Understanding Starlight

- Starlight is built as an Astro integration.
  Read the [Astro Integration API docs][api-docs] to learn more about how integrations work.

  The Starlight integration is exported from [`packages/starlight/index.ts`](./packages/starlight/index.ts).
  It sets up Starlight’s routing logic, parses user config, and adds configuration to a Starlight user’s Astro project.

- For tips and abilities on authoring content in Starlight follow the guide: [https://starlight.astro.build/guides/authoring-content/](https://starlight.astro.build/guides/authoring-content/)

- Most pages in a Starlight project are built using a single [`packages/starlight/index.astro`](./packages/starlight/index.astro) route.
  If you’ve worked on an Astro site before, much of this should look familiar: it’s an Astro component and uses a number of other components to build a page based on user content.

- Starlight consumes a user’s content from the `'docs'` [content collection](https://docs.astro.build/en/guides/content-collections/).
  This allows us to specify the permissible frontmatter via [a Starlight-specific schema](./packages/starlight/schema.ts) and get predictable data while providing clear error messages if a user sets invalid frontmatter in a page.

- Components that require JavaScript for their functionality are all written without a UI framework, most often as custom elements.
  This helps keep Starlight lightweight and makes it easier for a user to choose to add components from a framework of their choice to their project.

- Components that require client-side JavaScript or CSS should use JavaScript/CSS features that are well-supported by browsers.

  You can find a list of supported browsers and their versions using this [browserslist query](https://browsersl.ist/#q=%3E+0.5%25%2C+not+dead%2C+Chrome+%3E%3D+88%2C+Edge+%3E%3D+88%2C+Firefox+%3E%3D+98%2C+Safari+%3E%3D+15.4%2C+iOS+%3E%3D+15.4%2C+not+op_mini+all). To check whether or not a feature is supported, you can visit the [Can I use](https://caniuse.com) website and search for the feature.

[slack]: https://join.slack.com/t/slack-qvd5984/shared_invite/zt-26jeiddev-ay4B8dp0OvZGPqmmOOM_ug
[issues]: https://github.com/daytonaio/docs/issues
[sl]: https://github.com/daytonaio/docs/pulls
[pulls]: https://github.com/daytonaio/docs/pulls
[new-issue]: https://github.com/daytonaio/docs/issues/new/choose
[pr-docs]: https://docs.github.com/en/get-started/quickstart/contributing-to-projects#making-a-pull-request
[api-docs]: https://docs.astro.build/en/reference/integrations-reference/