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

Creating a Workspace allows you to set up a new environment either by selecting a repository from a configured Git provider like GitHub, GitLab, or Bitbucket, or by manually entering a Git repository URL.

1. Click `Create +` to create a Workspace.

2. Select the `Git repository` you want to use or enter a custom repository URL. Daytona provides two options for linking your repository:

   - **Selecting from a List of Repositories**

     If you select a Git repository (e.g., GitHub), you will be presented with a list of your repositories from which you can select the desired repository.

   - **Entering a Custom Repository URL**

     Alternatively, you can enter a custom repository URL manually to find the repository is not listed under your Git Provider account or is from an external source.

In case you are creating a development container-based Workspace, you will be prompted to select the `configuration file` for your Workspace.

3. Select the default `IDE` to use for your Workspace.

4. Select the [**`Workspace class`**](#workspace-classes) to allocate resources for your Workspace.

5. Click `Continue` to proceed with the Workspace creation process.

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

## Manage a Workspace

Daytona allows you to access and manage your Workspace, providing a detailed overview of the Workspace configuration.  

1. Click the top-right corner of the Workspace to expand the details.

Once expanded, you will be presented with the following options and information:

- **Workspace ID**

  A unique identifier for your Workspace.

  Example: `daytonaio-templates-base-abc123def`

- **Workspace Class**

  Describes the resource allocation and configuration of your Workspace. Read more about managing [Workspace classes](#workspace-class).

- **Created At**

  The timestamp showing when the Workspace was initially created.

  Example: `01/08/2024, 02:30:00`

- **Updated At**

  The timestamp showing the last time the Workspace settings or configuration was modified.

  Example: `05/08/2024, 03:45:00`

- **`Start`**

  Initiates the Workspace, making it active and ready for use.

- **`Delete`**

  Permanently removes the Workspace and all associated data.

- **`Shared`**

  Manages the sharing settings of the Workspace, allowing you to collaborate with others.

- **Launch remote environment**

  Starts the Workspace in a remote environment, allowing you to access it with the selected [IDE](/usage/ide).

- **Connect via SSH**

  Daytona allows secure remote access to your Workspace via SSH. You can connect using either a Public Key or an Access Token. Once selected, you will be provided with a command to with SSH to your Workspace.

  <br />

  :::caution
  Anyone with the following command will be able to connect to this workspace. The command includes a generated access token that changes each time the Workspace restarts.
  :::

## Delete a Workspace

Daytona allows you to delete one or more Workspaces, helping you manage your development environments by removing those that are no longer needed.

1. Expand the selected Workspace to view its configuration and details.
2. Click the **`Delete`** button to delete your Workspace. For security purposes, deleting a Workspace requires you to retype the Workspace name to confirm the action.

## Workspace Classes

The Workspace class allows you to select the amount of resources allocated to your Workspace. You can choose from different configurations depending on your requirements:

| **Workspace Class** | **CPU** | **RAM** | **GB** | **GPU** |
|---------------------|---------|---------|--------|---------|
| GPU                 | 4       | 16 GB   | 50 GB  | 1       |
| Large               | 8       | 32 GB   | 50 GB  |         |
| Medium              | 4       | 16 GB   | 50 GB  |         |
| Small               | 2       | 8 GB    | 50 GB  |         |
