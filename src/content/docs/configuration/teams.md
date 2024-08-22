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
2. In the dropdown menu presented, click the **`New team`** button.
3. Enter the desired name for your new team in the Create Team dialogue.
4. Click the **`Continue`** button to proceed creating your new team.

:::note
The ability to utilize new teams is determined by your subscription limits.
For more information, see *[understand your subscription](#understand-your-subscription)*.
:::

## Switch Teams

You can switch the context of the Daytona dashboard to another team.
This allows you to control and access that team's Daytona Workspaces and membership according to the access provided in your role.

1. In the top-left corner of the dashboard, click on the name of your current team.
2. In the dropdown presented, select the team name you want to switch to.

## Invite Members to a Team

You can invite new members to your team using the Daytona dashboard.
This allows others to access and utilize the team's Workspaces.

1. In the dashboard sidebar, click the **`Members`** tab under the **Team** section in the sidebar.
2. Click **`Add +`** to invite a new team member to your team.
3. Enter the email of the team member you want to invite.

:::note
The ability to invite new members to a team is determined by your subscription limits.
For more information, see *[understand your subscription](#understand-your-subscription)*.
:::

## Import Members to a Team

You can import members to your team using the Daytona dashboard.
This provides an easy method to add members to your team in bulk.

1. In the dashboard sidebar, click the **`Members`** tab under **Team** section.
2. Click **`Add +`** to invite new team members to your team.
3. Select **`Bulk import`** to invite multiple team members.

This will open a new page where you can upload a `.CSV` file containing email addresses to invite to your team.

Each email address should be in its own separate row entry. Email addresses that are not associated with current members will be issued an invite that expires in 7 days.

:::note
The ability to import members to a team is determined by your subscription limits.
For more information, see *[understand your subscription](#understand-your-subscription)*.
:::

## View and Manage Team Members

You can view and manage the members associated with your team through the Daytona dashboard.
This allows you to see which people are in your team, control their access within the team, and remove them as a member.

1. In the top-left corner of the dashboard, click the **`Members`** tab under **Team** section in the sidebar.

You will be presented with a table of metadata relating to members on your team.
Each row contains the following information:

<dl>
  <dt>Username</dt>
  <dd>The username associated with the member.</dd>
  <dt>Email</dt>
  <dd>The email associated with the member.</dd>
  <dt>Role</dt>
  <dd>The access level associated with the member.</dd>
</dl>

## Delete a Team

You can delete a team from your Daytona instance. This allows you to free up resources used under your Daytona subscription, or to recreate your team from scratch.

:::danger
This action will remove all Workspaces associated with the currently selected team irreversibly.
Ensure that any data you require from these Workspaces is backed up before executing this procedure.
:::

<br />

1. In the dashboard sidebar, click the **`Settings`** tab under **Team** section.
2. Click the **`Delete team`** button under the **Delete Team** heading.
3. Verify your action using the instructions shown in the confirmation dialogue and click the **`Delete team`** button.

## Change the Team Name

A team name can be changed using the Daytona dashboard.

1. In the dashboard sidebar, click the **`Settings`** tab under **Team** section.
2. Enter your desired team name in the input field provided under the **Team name** heading.
3. Click the **`Save`** button.

## Understand Your Subscription

Your Daytona subscription determines the functionality and amount of resources you can utilize within your Daytona instance.

:::note
All Daytona deployments are initially configured with the Non-Commercial License.
For more information about this license, please visit Daytona's [End User License Agreement](https://www.daytona.io/eula).
If you wish to upgrade your license, please [reach out to Daytona](https://daytona.zapier.app/).

<br />

If a subscription does not exist for your team, the **Subscription** page will display "*This team doesn't have an active subscription*".
:::

The Daytona dashboard can be used to view your current subscription limits and show your resource usage.
To access this information, navigate to the *Subscription* page under the *Teams* heading in the sidebar.

Metadata under the *Current Subscription* section specifies the limits set by your current subscription.
This section contains the following information:

<dl>
  <dt>Current Subscription Plan</dt>
  <dd>The title of your current Daytona subscription plan.</dd>
  <dt>Workspace Hours</dt>
  <dd>The total amount of hours available to utilize during the subscription period.</dd>
  <dt>Subscription Started</dt>
  <dd>The date the Daytona subscription began given in the format DD/MM/YYYY.</dd>
  <dt>Parallel Workspaces</dt>
  <dd>The number of Workspaces allowed to be run simultaneously under the current subscription.</dd>
  <dt>Pinned Workspaces</dt>
  <dd>The number of Workspaces allowed to be pinned at one time under the current subscription.</dd>
  <dt>Subscription Ends</dt>
  <dd>The date the current Daytona subscription ends given in the format DD/MM/YYYY.</dd>
  <dt>Inactivity Timeout</dt>
  <dd>The amount of time a Workspaces will be allowed run without being suspended for inactivity under the current subscription.</dd>
</dl>

Metadata under the *Workspace Usage* section specifies information relating to current resource usage in respect of your Daytona subscription.
This section contains the following information:

<dl>
  <dt>Used Minutes</dt>
  <dd>A textual and visual representation of how many minutes have been used during your subscription period compared with the subscription limit.</dd>
  <dt>Active Workspaces</dt>
  <dd>A textual and visual representation of how many Workspaces are currently active compared with the subscription limit.</dd>
</dl>

## Understand Your Usage

You can get an overview of the resources being used within your current subscription limits.
This allows you to better understand where optimizations can be made to keep your usage under your current subscription limits.
To access this information, navigate to the *Subscription* page under the *Teams* heading in the sidebar.

:::tip
If your organization is reaching your subscription limits, please [reach out to us](https://daytona.zapier.app/) to discuss upgrading your limits.
:::

You are presented with a list of events that have affected resources allocated under your current subscription.
Each row in this lists specifies the following information:

<dl>
  <dt>Workspace</dt>
  <dd>The identifier of the Workspace and link to the associated code repository.</dd>
  <dt>Used Minutes</dt>
  <dd>The amount of minutes this Workspace ran between <i>Started At</i> and <i>Stopped At</i>.</dd>
  <dt>Started At</dt>
  <dd>The date and time the Workspace was started.</dd>
  <dt>Stopped At</dt>
  <dd>The date and time the Workspace was stopped.</dd>
</dl>

This table can be filtered by Workspace ID.
To see usage information during a specific period, use the date toggles in the top-right corner of the page.