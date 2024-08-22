---
title: Workspaces
description: Add a brief description of the Workspaces Usage page here
sidebar:
  label: Workspaces
---

A workspace is a self-contained development environment, pre-configured with the project’s source code, required dependencies, necessary tools, and extensions to optimize workflow for your development team.

Daytona workspaces simplify the setup and configuration of development environments, integrate various tools, automate repetitive tasks, and ensure a consistent experience across different teams and projects. By following established practices and automation, Development Environment Management ensures that all developers have access to a consistent, secure, and standardized environment, ultimately enhancing productivity and streamlining the software development process.

## Create a Workspace

Creating your own Workspace in Daytona is a straightforward process that ensures you have a dedicated environment for your projects.

Creating a Workspace allows you to set up a new environment either by selecting a repository from a configured Git provider like GitHub, GitLab, Bitbucket, or Gitea, or by manually entering a Git repository URL.

1. Click `Create +` to create a Workspace.

2. Select the `Git repository` you want to use or enter a custom repository URL. Daytona provides two options for linking your repository:

   - **Selecting from a List of Repositories**

     If you select a Git repository (e.g., GitHub), you will be presented with a list of your repositories from which you can select the desired repository.

   - **Entering a Custom Repository URL**

     Alternatively, you can enter a custom repository URL manually if the repository is not listed under your Git Provider account or is from an external source.

3. Select the `dev container configuration file` for your Workspace.

4. Select the default `IDE` to use for your Workspace.

5. Select `Workspace class` to allocate resources for your Workspace.

6. Click `Continue` to proceed with the Workspace creation process.

  ```text
    ⠋ Warming up...
  ```

  Wait while Daytona sets up your Workspace. It handles all the initialization and configuration of your environment.

<!-- #### Web Browser Creation

1. **Starting Creation** 

  In your Browser type in your GitHub or GitLab repository prefix with your domain. For example,

```bash
{{domain-name}}/#{{link-to-github-repo}}
``` -->

## Open a Workspace

Daytona allows you to open an existing Workspace in your [IDE](/usage/ide). This enables you to quickly access and work on your projects in your preferred development environment. With Daytona, you can effortlessly switch between different Workspaces and maintain an efficient workflow.

1. In the Daytona dashboard, click the IDE button of the Workspace you want to open. This will automatically launch your Workspace in the selected IDE.

## Access a Workspace

Daytona allows you to access and manage your Workspaces, providing various options and methods to enhance your development environment experience:

- **Open in IDE**

  Click on the Workspace IDE button to open it directly in your default IDE. This feature allows you to transition to your coding environment without manual setup, ensuring you can your work efficiently.

- **SSH Connection**

  Daytona supports secure remote access to your Workspace via SSH. You can connect using a public key or access token by selecting the `Connect via SSH` option. This ensures that you can manage your Workspace from anywhere, with the security of SSH protocols.

- **Workspace Manipulation**
  
  Daytona provides intuitive controls for managing your Workspaces. By clicking the expanded menu, you can `Stop` or `Delete` a Workspace. For security purposes, deleting a Workspace requires you to retype the Workspace name to confirm the action.

- **Workspace Status**

  The Workspace contains color-coded visual status indicators to help you assess the status of each Workspace:

  Green: The Workspace is currently started and active.

  Purple: The Workspace is in the process of starting.

  Red: The Workspace is stopped.

- **Workspace Status**

  Daytona displays the associated Git repository and branch information for every Workspace. This makes it easier to keep track of your development environment's version control status and manage branches directly from the Workspace view.

## Delete a Workspace

Daytona allows you to delete one or more Workspaces, helping you manage your development environments by removing those that are no longer needed.

1. Expand the selected Workspace to view its configuration and details.
2. Click the **`Delete`** button to delete your Workspace. For security purposes, deleting a Workspace requires you to retype the Workspace name to confirm the action.