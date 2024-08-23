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

3. Select the dev container `configuration file` for your Workspace.

4. Select the default `IDE` to use for your Workspace.

5. Select the [**`Workspace class`**](#workspace-classes) to allocate resources for your Workspace.

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

Workspace classes are predefined configurations that allow users to select the amount of resources allocated to their workspace based on their specific requirements. The classes exist to simplify the process of resource allocation, ensuring that users can choose a setup that meets their requirements without manually specifying the details.

Each Workspace class specifies the amount of CPU, RAM, disk storage, and optionally, GPU resources available to a Workspace. The appropriate selection of a Workspace class depends on the intensity and nature of the tasks to be performed within the Workspace.

| **Workspace Class** | **CPU** | **RAM** | **GB** | **GPU** |
|---------------------|---------|---------|--------|---------|
| GPU                 | 4       | 16 GB   | 50 GB  | 1       |
| Large               | 8       | 32 GB   | 50 GB  |         |
| Medium              | 4       | 16 GB   | 50 GB  |         |
| Small               | 2       | 8 GB    | 50 GB  |         |


- **GPU**

  The GPU class is designed for workloads that require GPU acceleration, such as machine learning, deep learning, or other compute-intensive tasks. It ensures that the Workspace has access to a dedicated GPU, which significantly speeds up processing for such tasks.

- **Large**

  The Large class is suitable for large-scale processing tasks or applications that require significant computational power and memory, but do not need a GPU. This class is ideal for running multiple heavy applications simultaneously.

- **Medium**

  The Medium class balances performance and resource usage, making it suitable for general-purpose tasks that require moderate processing power and memory.

- **Small**

  The Small class is ideal for light workloads or development environments where minimal computational resources are needed. This class is the most resource-efficient, making it a good choice for simple applications and tasks.

The resources available for each Workspace class are constrained by the hardware node availability within the cluster. Each node in the cluster has a finite amount of CPU, RAM, storage, and GPU resources. The maximum number of Workspaces that can be provisioned depends on these hardware limits.

### Overprovisioning

Overprovisioning is a technique used to increase the density of Workspaces per hardware node in the cluster. By setting an overprovisioning factor, the provisioner can create more Workspaces than would be possible if each Workspace was allocated resources strictly according to its "request" values.

Each Workspace class defines both a "request" (the minimum guaranteed resources) and a "limit" (the maximum resources it can use). Overprovisioning works by lowering the "request" values below the actual "limits," allowing the provisioner to fit more Workspaces on a node than would be possible if resources were allocated strictly based on "limits."

- **Pros**

  Overprovisioning allows for more efficient utilization of hardware by packing more Workspaces onto a single node. By maximizing resource usage, overprovisioning can lead to cost savings, as fewer nodes may be needed to host the same number of Workspaces.

- **Cons**

  If all Workspaces attempt to use their full "limit" at the same time, the node may run out of resources. This can lead to performance degradation or even Workspace eviction.

  In scenarios where Workspaces have unpredictable or highly variable workloads, overprovisioning can cause instability, making it challenging to ensure consistent performance.

While overprovisioning can significantly increase the efficiency and cost-effectiveness of resource usage in a cluster, it must be carefully managed to avoid potential drawbacks, such as unexpected Workspace eviction or performance issues due to resource contention.