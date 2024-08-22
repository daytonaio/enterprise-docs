---
title: Teams Configuration
description: Explore how to create, manage, and utilize Teams on the Daytona dashboard efficiently for enhanced project organization.
sidebar:
  label: Teams
---

Teams contain a set of Daytona Workspaces and members.
They allow you to separate projects and access to Workspaces according to the requirements of your organization.

Teams can be modified, created, and switched between using the Daytona dashboard.

## Create a New Team

You can create a new team using the Daytona dashboard.
A new team will contain no Workspaces or members by default.

1. In the top-left corner of the dashboard, click on the name of the current team.
2. In the dropdown menu presented, click **`+ New team`**.
3. Enter the desired name for your team in the Create Team dialogue.
4. Click **`Continue`** proceed with creating your team.

## Switch Teams

You can switch the context of the Daytona dashboard to another team.
This allows you to control and access that team's Daytona Workspaces and membership according to the access provided in your role.

1. In the top-left corner of the dashboard, click on the name of your current team.
2. In the dropdown presented, select the team name you want to switch to.

## Invite Members to a Team

You can invite new members to your team using the Daytona dashboard.
This allows others to access and utilize the team's Workspaces.

1. In the dashboard sidebar, click the **`Members`** page under the **Team** section.
2. Click **`Add +`** to invite a new team member to your team.
3. Enter the email of the team member you want to invite.
4. Click  **`Invite ➜`** to send an invitation for the team member to join your team.

:::note
The ability to invite new members to a team is determined by your subscription limits.
For more information, see *[Subscription](#subscription)*.
:::

## Import Members to a Team

You can import members to your team using the Daytona dashboard.
This provides an easy method to add members to your team in bulk.

1. In the dashboard sidebar, click the **`Members`** page under the **Team** section.
2. Click **`Add +`** to invite new team members to your team.
3. Select **`Bulk import`** to invite multiple team members.

This will open a new page where you can upload a `.CSV` file containing email addresses to invite to your team.

Each email address should be in its own separate row entry. Email addresses that are not associated with current members will be issued an invite that expires in 7 days.

:::note
The ability to import members to a team is determined by your subscription limits.
For more information, see *[Subscription](#subscription)*.
:::

## Manage Team Members

You can view and manage the members associated with your team through the Daytona dashboard.
This allows you to see which people are in your team, control their access within the team, and remove them as a member.

1. In the top-left corner of the dashboard, click the **`Members`** page under **Team** section in the sidebar.

You will be presented with a table of metadata relating to members on your team.
Each row contains the following information:

- **Username**

  The username associated with the team member.

- **Email**

  The email associated with the team member.

- **Role**

  The access level associated with the team member.

## Delete a Team

You can delete a team from your Daytona instance. This allows you to free up resources used under your Daytona subscription, or to recreate your team from scratch.

:::danger
This action will remove all Workspaces associated with the currently selected team irreversibly.
Ensure that any data you require from these Workspaces is backed up before executing this procedure.
:::

<br />

1. In the dashboard sidebar, click the **`Settings`** page under the **Team** section.
2. Click **`Delete team`** under the **Delete Team** heading.
3. Click **`Delete`** to delete your team. For security purposes, deleting a team requires you to retype the team name to confirm the action.

## Change the Team Name

A team name can be changed using the Daytona dashboard.

1. In the dashboard sidebar, click the **`Settings`** page under the **Team** section.
2. Enter your new team name in the input field provided under the **Team name** heading.
3. Click the **`Save`** button.

## Subscription

Your Daytona subscription determines the functionality and amount of resources you can utilize within your Daytona instance. The Daytona dashboard can be used to view your current subscription limits and show your resource usage.

1. In the dashboard sidebar, click the **`Subscription`** page under the **Teams** section.

Metadata in the Subscription page specifies the limits set by your current subscription. If a subscription does not exist for your team, the page will display *No subscription found*.

- **Workspace Hours**

  The total amount of hours available to utilize during the subscription period.

  Example: `100`

- **Parallel Workspaces**

  The number of Workspaces allowed to be run simultaneously under the current subscription.

  Example: `3`

- **Subscription End**

  The date the current Daytona subscription ends given in the format DD/MM/YYYY.

  Example: `31/12/2024`

- **Inactivity Timeout**

  The amount of time a Workspace will be allowed run without being suspended for inactivity under the current subscription.

  Example: `30 min`

- **Pinned Workspaces**

  The number of Workspaces allowed to be pinned at one time under the current subscription.

  Example: `1`

:::note
To upgrade your license, please [reach out to Daytona](https://daytona.zapier.app/).
:::

## Usage 

Daytona provides an overview of your resources usage within your current subscription limits. This allows you to better understand where optimizations can be made to keep your usage under your current subscription limits.

1. In the dashboard sidebar, click the **`Usage`** page.

Metadata in the usage page specifies the current state of resources and subscription limits. If the usage does not exist for your team, the page will display *No usage found*.

- **Used Credits**

  Credits are a measure of resource consumption. Indicates the number of credits you have used compared to your total available credits.

  Example: `500.00/10020`

- **Active Workspaces**

  Specifies how many Workspaces are currently running versus the maximum number you can have active simultaneously.

  Example: `0/3`

- **Filter by Workspace ID**

  Filter the Workspace activity by selecting a Workspace ID. Allows you to view data and usage durations for a specific Workspace only.

  Example: `daytonaio-templates-docs-abc123def`

- **Date Range Filter**

  Filter the Workspace activity by selecting a date range. Allows you to view data and usage durations within a specific period.

  Example: `From 01/01/2024 to 31/12/2024`

- **Workspace Path and ID**

  For each Workspace, there is an associated repository path and a unique Workspace ID.

  Example: `github.com / daytonaio-templates / php`

- **Start Time**

  The exact date and time when the Workspace was started. This helps track when you began using the Workspace.

  Example: `Started at 01/01/2024, 12:30:00`

- **Usage Duration**

  The amount of time the Workspace was active during its session, displayed in minutes.

  Example: `30 min`