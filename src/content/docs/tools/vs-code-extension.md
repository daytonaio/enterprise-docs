---
title: VS Code Extension Tools and Resources
description: Download Daytona VSCode Extension for a Github Codespaces-like experience
sidebar:
  label: VS Code Extension
---



## Installation 

You can choose one of the options from below to install the VS Code extension

**Option 1: Install from URL**

[Daytona VS Code Extension](https://marketplace.visualstudio.com/items?itemName=daytonaio.daytona)

**Option 2: Download it directly in VS Code**

Step 1: Open VS Code, navigate to the Extension tab in VS Code or use the shortcut keys:

Windows: `Ctrl+Shift+X`

MacOS: `Command+Shift+X`


Step 2: Search "Daytona", you will find the extension with our logo and hit `Install`

## Getting Started with Daytona in VS Code

Follow these steps to establish a connection between your Daytona installation and your local Visual Studio Code for the first time:

1. **Sign In and Open a Repository:**
   - Visit your Daytona dashboard URL.
   - Click on the "𓈓" icon next to one of your repositories.
   - Select "Open."

   > If you don't have any repositories in your workspace:
   > - Click "Create" in the workspace tab to import a repository from your Git Provider.

2. **Configure Code Editor:**
   - Choose "VS Code" as your code editor.

3. **Respond to Permission:**
   - As you proceed, you may encounter the following prompts:
     - "The extension 'Daytona' wants to sign in using 'your-profile-name'." Choose "Allow."
     - "Do you want Code to open the external website?" Choose "Open."

4. **Authenticate with Your Git Provider:**
   - In the browser pop-up that appears with "id.your-daytona-url" under "Please re-authenticate to continue," click on your Git Provider.

5. **Open Visual Studio Code:**
   - In the pop-up prompt "'id.your-daytona-url' wants to open 'Visual Studio Code'," choose one of the "Open 'Visual Studio Code'" options.

6. **Allow Daytona Extension:**
   - When asked, "Allow 'Daytona' extension to open this URI?" Choose "Open."

7. **Select SSH Configuration File:**
   - Finally, when prompted to "Select the SSH config file to update," choose the first option, like "/User/name/.ssh/config."

Your selected repository should now be up and running in Visual Studio Code.



## Features

Once you have the Daytona extension installed and connected, you will unlock a range of powerful features:

### 1. Cloud-Based Development in VS Code

Open cloud-based development within Visual Studio Code. It remove the limitations of browser-based development environments. The Daytona VS Code extension offers an experience similar to GitHub Codespaces, eliminating the need to remember Daytona workspace URLs or deal with SSH configuration for remote connections.

### 2. Seamless Repository Integration

Adding repositories to your workspace:
   - Simply click the `+` button in the "WORKSPACES" section.
   - You'll be prompted to enter a GitHub URL for the repository you want to add.
   - Once created, the repository will appear in the Daytona extension tab.
   - Select an SSH config file, and you'll be working in an isolated environment within seconds.

### 3. Repository Synchronization

Repositories set up in Daytona VS Code extension and Daytona dashboard are synchronised. If you've already imported repositories into your Daytona dashboard, you'll see them reside in Visual Studio Code, and vice versa.

### 4. Standardized Development Environments

All repositories opened with Daytona adhere to a standardized development environment. If you've set up a `.devcontainer` file and `.devcontainer.json`, your workspace will align with the environment specified in `.devcontainer.json`. This solves the age-old "it works on my machine" problem often encountered in engineering teams.

Learn more about Daytona's development environment standardization [here](https://www.daytona.io/dotfiles/inside-the-dev-container-specification) and advanced configuration techniques [here](https://www.daytona.io/dotfiles/advanced-configuration-techniques-for-dev-container).




## How Daytona VS Code extension works with a Daytona installation


### 1. Fast Cloud-Based Development Environments set up

Simplify the setup of standardized cloud-based development environments:
   - Without Daytona, creating a development container often involves understanding Docker, writing your own Docker files, and configuring devcontainer.json files. It can be time-consuming, error-prone and with a steep learning curve.
   - With Daytona, repositories opened are automatically within a container, preserving dependencies and environment configurations within the workspace.
   
   > For instance, consider the common issue of the `node-gyp` package behaving differently on Mac OS and Windows. Daytona ensures consistent behavior by installing this package globally within a repository. Your team benefits from standardized packages and environments, reducing the need to troubleshoot cross-platform issues.

   - Optionally, you can still [create devcontainer.json file](https://www.daytona.io/dotfiles/guide-create-devcontainer-json-file) to make a repository's environment replicable and portable, although [Daytona helps you automate the process](https://www.daytona.io/dotfiles/power-of-automation-in-software-development).

### 2. Daytona Dashboard: Your Command Center

After installing Daytona (from the installer link), your Daytona dashboard becomes the central hub for configuring and managing IDE connections to cloud-based development environments:
   - Keep your Daytona dashboard URL accessible, especially when configuring IDEs for the first time. It serves as the control center for your development workflow.

### 3. Multiple Environments for a Single Repository

   - Repositories set up on Daytona are contained within their own isolated environments.
   - This flexibility allows you to create multiple instances of the same repository in different environments over time, even while working on the same branch.

### 4. Regulatory Compliance

Ensure regulatory compliance with Daytona's deployment approach:
   - Unlike many cloud-based development environments where deployment details are opaque, Daytona operates on your infrastructure within your chosen region.
   - This ensures full compliance with regulatory requirements, meeting the needs in data security and governance.

## Clean uninstall guide

If you want to do a clean uninstall and start over again: 

1. Uninstall Daytona extension from VS Code;
2. In your terminal, run: 
   ```
   rm -rf ~/.ssh/config
   ```
   and then run 
   ```
   rm -rf ~/.daytona
   ```
