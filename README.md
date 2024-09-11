<div align="center">
 <picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://github.com/daytonaio/daytona/raw/main/assets/images/Daytona-logotype-white.png">
  <img alt="Daytona logo" src="https://github.com/daytonaio/daytona/raw/main/assets/images/Daytona-logotype-black.png" width="40%">
 </picture>
</div>

<br><br>

<div align="center">

[![License](https://img.shields.io/badge/License-Apache--2.0-blue)](#license)
[![Issues - daytona](https://img.shields.io/github/issues/daytonaio/enterprise-docs)](https://github.com/daytonaio/enterprise-docs/issues)

</div>

<h1 align="center">Daytona Documentation</h1>
<div align="center">
Daytona user and developer documentation.
</div>
</br>

<p align="center">
  <a href="https://github.com/daytonaio/enterprise-docs/issues/new?assignees=&labels=bug">Report Bug</a>
    ·
  <a href="https://go.daytona.io/slack">Join Our Slack</a>
    ·
  <a href="https://twitter.com/daytonaio">Twitter</a>
</p>

The Daytona Documentation is developed with Astro and Starlight.
Its core architecture leverages React, while documentation content is authored using Markdown (MDX).

## Getting Started

### Using Daytona (Recommended)

The most efficient way to begin working on the documentation is by utilizing a development environment manager (DEM) like Daytona. 
To set up a Workspace with the necessary dependencies and configurations for local preview, run the following command:

```shell
daytona create https://github.com/daytonaio/enterprise-docs.git
```

### Manual

Alternatively, if Node.js or Yarn are installed and set up on your local machine, you can clone this repository and install the required dependencies and configurations:

```shell
git clone https://github.com/daytonaio/enterprise-docs.git
```

```shell
yarn install
```

### Useful Commands

This repository utilizes `Yarn` to manage project dependencies and custom scripts. Below is a list of commonly used commands, defined in the `package.json`:

| Command                    | Action                                                                       |
| :------------------------- | :--------------------------------------------------------------------------- |
| `yarn dev`                 | Starts the local development server at `localhost:4321`.                     |
| `yarn build`               | Builds the production site to the `./dist/` directory.                       |
| `yarn preview`             | Previews the production build locally before deployment.                     |
| `yarn astro [command]`     | Runs Astro CLI commands.                                                     |
| `yarn astro -- --help`     | Displays help information for the Astro CLI.                                 |

### Documentation Structure

The documentation is organized as `.mdx` files within the `/src/content/docs` directory.
Daytona documentation is divided into the following key sections:

- **`About`**  

  Overview of Daytona's background and the concept of development environment manager (DEM).

- **`Installation`**  

  Instructions for installing Daytona across various environments.

- **`Configuration`**

  Guides to configuring Daytona's core components.

- **`Usage`**

  Practical instructions for using Daytona.

- **`Administration`**

  Advanced settings and operations tasks for managing and optimizing Daytona.

- **`Reference`**

  Detailed technical and architectural documentation for Daytona.

- **`Miscellaneous`**

  Additional information and resources related to Daytona.

## Contributing

Daytona is licensed under the [Apache License 2.0](LICENSE). If you would like to contribute to the software, you must:

1. Read the Developer Certificate of Origin Version 1.1 (<https://developercertificate.org/>)
2. Sign all commits to the Daytona project.

This ensures that users, distributors, and other contributors can rely on all the software related to Daytona being contributed under the terms of the [License](LICENSE). No contributions will be accepted without following this process.

## License

This repository contains Daytona's Documentation website, covered under the Apache License 2.0, except where noted (any Daytona logos or trademarks are not covered under the Apache License, and should be explicitly noted by a LICENSE file.)

Daytona is a product produced from this open source software, exclusively by Daytona Platforms, Inc. It is distributed under our commercial terms.

Others are allowed to make their own distribution of the software, but they cannot use any of the Daytona trademarks, cloud services, etc.

We explicitly grant permission for you to make a build that includes our trademarks while developing Daytona itself. You may not publish or share the build, and you may not use that build to run Daytona for any other purpose.

## Code of Conduct

This project has adapted the Code of Conduct from the [Contributor Covenant](https://www.contributor-covenant.org/). For more information see the [Code of Conduct](CODE_OF_CONDUCT.md) or contact [codeofconduct@daytona.io.](mailto:codeofconduct@daytona.io) with any additional questions or comments.

## Questions

If you need guidance on contributing to Daytona, talk to us on
[Slack](https://go.daytona.io/slack).