---
title: Templates
description: This guide will help you configure the templates in Daytona dashboard.
sidebar:
  label: Templates
---

Templates are displayed on the right side of your Daytona dashboard when you try to create a [workspace](/usage/workspaces). You can use them to customise your Daytona dashboard in combination with [devcontainer](https://www.daytona.io/dotfiles/advanced-configuration-techniques-for-dev-container) during deployment to create workspace faster based on your requirement faster.

We will walk through how to customise them, creating workspace and repository based on templates, how you can deploy your own templates and the default templates on Daytona dashboard.

<hr/>

## Creating workspace based on templates

By creating a workspace, we assume that you have a successful Daytona deployment and gained access to a Daytona dashboard URL.

1. Open Workspace tab on dashboard

- Sign in to your Daytona dashboard in browser, on the left side-bar click on **Workspaces**.
- Click on **Create**, on the right side we have provided a set of default templates.

2. Creating a workspace based on a template

- Choose one of the templates and click on it, then click **Create** on the opened dialog.
- A new browser tab will open indicating workspace is setting up. Upon successful creation you can choose to open workspace in [**default editor**](usage/ides) (available to set up in [account settings](/usage/account#default-editor)) or **browser**, connect to workspace via **SSH** or go back to dashboard.
- Open it in your default editor to continue.

3. (Optional) Connecting your workspace to a new Git repository

To facilitate CI/CD, you might need to reset repository URL upon template creation.

- Create a new repository in your git provider and **copy the repository URL** (we will refer to it as `https://github.com/user/repo.git`)
- When your default editor is opened, open the terminal in your editor (you will be in a terminal session connected to workspace) and run this command to set up a new remote url.

```bash
git remote add origin `https://github.com/user/repo.git`
```

- To confirm it is set up correctly, run the below command and check the value of **remote.origin.url**.

```bash
git config --list
```

<details open>
<summary>Example: Connect to Github using Github CLI</summary>
<content>
Although our templates includes Git, you will still need to authenticate with your Git provider to push and pull to your remote repository. We are using Github as an example below.

1. Install Github CLI

- While you are connected to a running workspace, in your editor's terminal, run:

```bash
sudo apt update
sudo apt install gh
```

- These commands install Github CLI, you can see the official reference at [here](https://github.com/cli/cli/blob/trunk/docs/install_linux.md#official-sources)

2. Authenticate using Github CLI

- Then in your terminal, run the command below and select provided options based on your requirement.

```bash
gh auth login
```

- When you are asked for _preferred protocol for Git operation_, choose **SSH**. This command will will you either generate a new SSH key to upload to your Github account or upload your current public key based on your selection.

- After finishing the authentication process, you should be able to push and pull to your repository.

</content>
  </details>

<details class="idp-details">
<summary>Resolving merge conflicts</summary>
<content>
In a scenario you created the repository on Github with license file, README.md and other initial configuration. You push/pull might fail and you are prompted for resolving merge conflicts. You can run this command to allow unrelated histories from remote to be merged with local files.

```bash
git merge --allow-unrelated-histories origin/main

```

</content>
</details>

<hr/>

## Default Templates

Our default templates includes different based image and languages.

<!-- https://raw.githubusercontent.com/daytonaio-templates/index/main/templates.json -->
<dl>
<dt>Alpine</dt>
<dd>Create a workspace using Alpine as base image with Git installed.</dd>
<dt>Debian</dt>
<dd>Create a workspace using Debian as base image with Git installer</dd>
<dt>Ubuntu</dt>
<dd>Create a workspace using Ubuntu as base image with Git and other common utilities installed</dd>
<dt>C/C++</dt>
<dd>Create a workspace to develop C++ application on Linux, a template includes Debian C++ build tools.
<dt>
<dt>C# (.NET)</dt>
<dd>Create a workspace with all needed SDKs, extensions and dependencies to build C# and .NET based application.</dd>
<dt>Go</dt>
<dd>Create a workspace with appropriate runtime arguments, Go, common tools, extensions and dependencies to develop Go based applications.</dd>
<dt>Java</dt>
<dd>Create a workspace includes JDK and Java extensions to develop Java application</dd>
<dt>Node.js</dt>
<dd>Create a workspace includes Node.js, eslint, nvm and yarn to develop Node.js based applications.</dd>
<dt>PHP</dt>
<dd>Create a workspace with needed tools, extensions and dependencies to build PHP based applications.</dd>
<dt>Python</dt>
<dd>Create a workspace to build Python application with Python3.</dd>
<dt>Ruby</dt>
<dd>Create a workspace with essential utilities to build Ruby based applications.</dd>
<dt>Rust</dt>
<dd>Create a workspace with appropriate runtime arguments and everything you need to build Rust based application.</dd>
<dt>TypeScript</dt>
<dd>Create a workspace includes Node.js, eslint, nvim, yarn and Typescript compiler to build Node.js based applications in Typescript.</dd>
</dl>

:::note
If you accidentally removed all the default templates and want to add it back, or wanted to take a reference of the default templates, the configuration is [here](https://raw.githubusercontent.com/daytonaio-templates/index/main/templates.json).

## Customising templates

Templates are **an array of JSON objects** includes certain properties. They construct the textual and visual appearance of the templates on your dashboards. The simpliest example of a templates includes below properties:

```json
[
  {
    "name": "C# (.NET)",
    "description": "Develop C# and .NET based applications. Includes all needed SDKs, extensions, and dependencies.",
    "gitUrl": "https://github.com/daytonaio-templates/dotnet",
    "imageUrl": "https://raw.githubusercontent.com/daytonaio-templates/index/main/img/dotnet.png",
    "rawReadmeUrl": "https://raw.githubusercontent.com/daytonaio-templates/dotnet/main/README.md"
  }
]
```

## How to deploy with custom templates

### Deploy with installer script

### Deploy on Google Cloud Platform
