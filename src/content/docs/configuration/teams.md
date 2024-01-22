---
title: Teams Configuration
description: Explore how to create, manage, and utilize Teams on the Daytona dashboard efficiently for enhanced project organization.
sidebar:
  label: Teams
---

Teams contain a set of Daytona workspaces and members.
They allow you to separate projects and access to workspaces according to the needs of your organization.

Teams can be modified, created, and switched between using the Daytona dashboard.

## Creating a new team
You can create a new team using the Daytona dashboard.
A new team will contain no workspaces or members by default.

1. In the top-right corner of the dashboard, click on the name of the current team.
2. In the dropdown presented, click the `Create team` item.
3. Enter the desired name for your new team in the Create Team dialogue.
4. Click the `Create` button.

:::note
The ability to utilize new teams is determined by your subscription limits.
For more information, see *[Understanding your subscription](#understanding-your-subscription)*.
:::

## Switching teams
You can switch the context of the Daytona dashboard to another team.
This allows you to control and access that team's Daytona workspaces and membership according to the access provided in your role.

1. In the top-right corner of the dashboard, click on the name of the current team.
2. In the dropdown presented, click the `Switch teams` button.
3. In the next dropdown presented, click on the team to switch to.

## Inviting members to a team
You can invite new members to your team using the Daytona dashboard.
This allows others to access and utilize the team's workspaces.

:::note
The ability to invite new members to a team is determined by your subscription limits.
For more information, see *[Understanding your subscription](#understanding-your-subscription)*.
:::

## Importing members to a team
You can import members to your team using the Daytona dashboard.
This provides an easy method to add members to your team in bulk.

:::note
The ability to import members to a team is determined by your subscription limits.
For more information, see *[Understanding your subscription](#understanding-your-subscription)*.
:::

## Viewing and managing team members
You can manage the members associated with your team through the Daytona dashboard.
This allows you to see which people are in your team, control their access within the team, and remove them as a member.

1. Verify your desired team is shown in the top-right of the page.
2. Navigate to the *Members* page under *Team* in the sidebar.

You are presented with a table of metadata relating to members on your team.
Each row contains the following information:

<dl>
  <dt>Username</dt>
  <dd>The username associated with the member.</dd>
  <dt>Email</dt>
  <dd>The email associated with the member.</dd>
  <dt>Role</dt>
  <dd>The access level associated with the member.</dd>
</dl>

## Deleting a team

You can delete a team from your Daytona instance. This allows you to free up resources used under your Daytona subscription, or to recreate your team from scratch.

:::danger
This action will remove all workspaces associated with the currently selected team irreversibly.
Ensure that any data you require from these workspaces is backed up before executing this procedure.
:::

1. Verify your desired team is shown in the top-right of the page.
2. Navigate to the *Settings* page under *Team* in the sidebar.
3. Click the `Delete` button under the heading `Delete Team`.
4. Verify your action using the instructions shown in the confirmation dialogue and click the `Delete` button.

## Changing the name of a team
A team name can be changed using the Daytona dashboard.

1. Verify your desired team is shown in the top-right of the page.
2. Navigate to the *Settings* page under *Team* in the sidebar.
3. Under *Team Information* -> *Team Name*, click on the *Edit* button beside your team name.
4. Enter your desired team name in the input field provided.
5. Click on the `Update` button.

## Understanding your subscription
Your Daytona subscription determines the functionality and amount of resources you can utilize within your Daytona instance.
If your instance is 

:::tip
If you have deployed Daytona as a *[Single Node installation](/installation/single-node)*, your instance will use Daytona's free tier subscription.
To discuss upgrading your subscription with additional resources, please [reach out to us](https://daytona.zapier.app/).
:::

:::note
If a subscription does not exist for your team, the *Subscription* page will display "This team doesn't have an active subscription".
:::

The Daytona dashboard can be used to view your current subscription limits and show your resource usage.
To access this information, navigate to the *Subscription* page under the *Teams* heading in the sidebar.

Metadata under the *Current Subscription* section specifies the limits set by your current subscription.
This section contains the following information:

<dl>
  <dt>Current subscription plan</dt>
  <dd>The title of your current Daytona subscription plan.</dd>
  <dt>Workspace hours</dt>
  <dd>The total amount of hours available to utilize during the subscription period.</dd>
  <dt>Subscription started</dt>
  <dd>The date the Daytona subscription began given in the format DD/MM/YYYY.</dd>
  <dt>Parallel workspaces</dt>
  <dd>The number of workspaces allowed to be run simultaneously under the current subscription.</dd>
  <dt>Pinned workspaces</dt>
  <dd>The number of workspaces allowed to be pinned at one time under the current subscription.</dd>
  <dt>Subscription ends</dt>
  <dd>The date the current Daytona subscription ends given in the format DD/MM/YYYY.</dd>
  <dt>Inactivity timeout</dt>
  <dd>The amount of time a workspace will be allowed run without being suspended for inactivity under the current subscription.</dd>
</dl>

Metadata under the *Workspace Usage* section specifies information relating to current resource usage in respect of your Daytona subscription.
This section contains the following information:

<dl>
  <dt>Used Minutes</dt>
  <dd>A textual and visual representation of how many minutes have been used during your subscription period compared with the subscription limit.</dd>
  <dt>Active Workspaces</dt>
  <dd>A textual and visual representation of how many workspaces are currently active compared with the subscription limit.</dd>
</dl>

## Understanding your usage
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
  <dd>The identifier of the workspace and link to the associated code repository.</dd>
  <dt>Used Minutes</dt>
  <dd>The amount of minutes this workspace ran between <i>Started At</i> and <i>Stopped At</i>.</dd>
  <dt>Started At</dt>
  <dd>The date and time the workspace was started.</dd>
  <dt>Stopped At</dt>
  <dd>The date and time the workspace was stopped.</dd>
</dl>

This table can be filtered by workspace ID.
To see usage information during a specific period, use the date toggles in the top-right corner of the page.