---
title: Teams
description: This guide will help you configure and manage teams in your Daytona deployment.
sidebar:
  label: Teams
---

A team in a Daytona deployment represents a group of people collaborating together in Daytona, either as an **internal unit like the Engineering department** or as **an external group**, such as a team of Open Source contributors/collaborators.

By creating a team, you become the team owner. This role empowers you to invite, join, manage, and configure teams.

<hr/>

## Prerequisites

Before you start configuring teams, make sure you have access to a **Daytona deployment** and the **dashboard URL**.

[//]: # '{/*TODO: docs - second list item should be corrected rendered and indented*/}'

<hr/>

## Creating a new team

By default, whenever you register an account on your Daytona dashboard, you are default to be in a team (default name **My Team**). A new team will contain no workspaces but only one member -- the owner of the team.

1. Log into your Daytona dashboard

2. Creating a team

- Click on your **team's name** (by default it is **My Team**) in the top right corner.
- In the dropdown menu, click on **Create team**.
- Enter your team's name in the _Create Team_ dialog and click on **Create**.

[//]: # 'TODO: docs - link in note component are not rendered'

:::note
The number of teams is depending on the limit of your license. [Book a demo with us](https://daytona.zapier.app/) if you are interested in upgrading your current Daytona license.

:::

Either you choose to create a new team, or using the default **My Team**, you can manage them from the left sidebar via **Subscription**, **Members** and **Settings**.

<hr/>

## Inviting team members

1. Sign in to selected team on Daytona dashboard

- Log into your Daytona dashboard, make sure you are in the team you want to invite new members to (by checking in the **top right corner**).
- Click on **Members** and then **Invite**.

2. Entering emails

- Enter the email address of the team member you want to invite and click on **Invite**.
- Optional: you can also invite multiple team members by uploading a CSV file. Click on **Import**, upload a CSV file or click the dotted square box to select a CSV file from file explorer.

:::note
The invite notification will only be shown to members who are already registered on the Daytona dashboard (under the same deployment). They will need to log into their Daytona dashboard to accept or reject the invitation.
:::

3. Check pending invitations

When the owner or admin sent out invitations but yet to receive a response, every member in the team can review all the pending invitation:

- On the _Member_ tab, click on **Invitations**.
- You can see the expiration time of the invitation, the email address of the team member you invited.
- You can revoke invitation by clicking on **Remove**.

<hr/>

## Receiving invitations

1. Team invitation on Daytona dashboard

- Log into your Daytona dashboard, and click on your selected team's profile in the **top right corner**.
- Under the dropdown menu click on **Team invitations**.
- On this page you can see which team invited you (team's name), who invited you (their username) and the invitation time.

2. Actions on team invitation

- Click on **Accept** to accept the invitation from known team, or **Decline** to decline the invitation from known team.

<hr/>

## Checking existing member

- On your Daytona dashboard, confirm you are in the selected team by checking team name on the top right corner. If not, click on team name and then **Switch teams** to the selected team.
- Navigate to member's page by clicking on **Memebers** on the left sidebar.
- You are presented with a table of metadata relating to members on your team.
- Each row contains the following information:

<dl>
  <dt>Username</dt>
  <dd>The username associated with the member.</dd>
  <dt>Email</dt>
  <dd>The email associated with the member.</dd>
  <dt>Role</dt>
  <dd>The access level associated with the member.</dd>
</dl>

<hr/>

## Managing members

Once the team member you invited has accepted the invitation, you can assign two types of roles (_Admin_ and _Member_) or transfer ownership by assigning _Owner_ to them.

1. Sign in with selected team

- Sign in to your Daytona dashboard, confirm you are in the selected team by checking team name on the top right corner. If not, click on team name and then **Switch teams** to the selected team.
- Click on **Members** under _Team_.

2. Changing a team member's role

- Select a team member then click on the dropdown menu to select a role.
- If you are **transferring ownership** by assigning them _Owner_, you will see a dialog for confirmation.
- If you are assigning _Admin_ or _Member_, you will receive a notification toaster on the top right.

3. Deleting a member

- Select a team member then click on **Remove**.

The following table explains what tasks different roles can perform.

<div class="container">
<table id="different-roles table-color">
<tbody>
<tr>
<td>Feature</td>
<td>Owner</td>
<td>Admin</td>
<td>Member</td>
</tr>
<tr>
<td>Transferring ownership</td>
<td>✅</td>
<td>❌</td>
<td>❌</td>
</tr>
<tr>
<td>Check existing team members</td>
<td>✅</td>
<td>✅</td>
<td>✅</td>
</tr>
<tr>
<td>Check pending invitations</td>
<td>✅</td>
<td>✅</td>
<td>✅</td>
</tr>
<tr>
<td>Check workspace usage</td>
<td>✅</td>
<td>✅</td>
<td>✅</td>
</tr>
<tr>
<td>Delete team</td>
<td>✅</td>
<td>✅</td>
<td>❌</td>
</tr>
<tr>
<td>Leave team</td>
<td>❌</td>
<td>❌</td>
<td>✅</td>
</tr>
<tr>
<td>Invite new team members by email</td>
<td>✅</td>
<td>✅</td>
<td>❌</td>
</tr>
<tr>
<td>Bulk invite team member (CSV)</td>
<td>✅</td>
<td>✅</td>
<td>❌</td>
</tr>
<tr>
<td>Assign roles to team members</td>
<td>✅</td>
<td>✅</td>
<td>❌</td>
</tr>
<tr>
<td>Remove team members</td>
<td>✅</td>
<td>✅</td>
<td>❌</td>
</tr>
<tr>
<td>Edit team configuration</td>
<td>✅</td>
<td>✅</td>
<td>❌</td>
</tr>
</tbody>
</table>
</div>

<hr/>

## Configuring team settings

On Daytona dashboard, you can configure team settings including team name, check team ID and deleting team (_this action is destructive_).

:::note
There are two **Settings** button on the Daytona dashboard. Only the one under the **Team** section is for setting's related to teams. Any settings in the **Settings** under the **Account** section, including dotfiles, default IDEs, Git Providers are your personal settings. They would not be shown nor shared with your team.
:::

1. Before all: team settings on Daytona dashboard

- Log into your Daytona dashboard in your selected teams (click on the team profile on top right and **Switch teams**).
- And on the left under _Team_ section, click on **Settings**.

1. Changing team's name

- Click on the pen icon **next to the team name** to change the team name.
- After you update the team's name click on **Update**.

2. Checking team ID

- You can see the **Team ID** under the _Team information_.
- Click on the copy icon to copy the team ID.
- You may need your team ID when you are [**submitting a support ticket**](mailto:servicedesk@daytona.io).

3. Deleting team

- Confirm your selected team in the top right corner on the dashboard or on the top of team's _Settings_ page.
- Click on **Delete team**.
- You will be prompted for your team's name. Enter the team's name and then click on **Delete**.

:::danger
This action is destructive. It will remove workspaces and records of team members associated with the selected team irreversibly. There might be unpredictable results. You can persists your workspace environment by creating a devcontainer file.
:::

<hr/>

## Team's statistics

You can check your current subscription limits and show your resource usage on your Daytona dashboard.

- Confirm you are in the selected team on the top right side in dashboard.

- Click on **Subscription** under the _Teams_ section on the left sidebar.

The _Current Subscription_ section indicates statistics related to your current subscription:

<dl>
  <dt>Current subscription plan</dt>
  <dd>The name of your current Daytona subscription plan.</dd>
  <dt>Workspace hours</dt>
  <dd>The total amount of hours available to utilize during the subscription period.</dd>
  <dt>Subscription started</dt>
  <dd>The date the Daytona subscription began given in the format DD/MM/YYYY.</dd>
  <dt>Parallel workspaces</dt>
  <dd>The number of workspaces allowed to be run simultaneously under the current subscription.</dd>
  <dt>Pinned workspaces</dt>
  <dd>The number of workspaces allowed to be pinned on top of the *Workspace* page at one time under the current subscription.</dd>
  <dt>Subscription ends</dt>
  <dd>The date the current Daytona subscription ends given in the format DD/MM/YYYY.</dd>
  <dt>Inactivity timeout</dt>
  <dd>The amount of time a workspace can run before being *Stop* for inactivity.</dd>
</dl>

The _Workspace Usage_ section displays information relating to current resource usage in respect of your Daytona subscription:

<dl>
  <dt>Used Minutes</dt>
  <dd>How many **minutes** have been used during your subscription period compared with the subscription limit.</dd>
  <dt>Active Workspaces</dt>
  <dd>How many workspaces are currently active compared with the subscription limit.</dd>
</dl>

:::note
Every 30 days is a cycle for resetting the usage minutes.
:::

<hr/>

## Teams on IDEs

On different IDEs that utilises Daytona's VS Code extension or JetBrain's Gateway Plugin you will be able to:

- see the teams you are in
- create workspaces within the team you are in
- switching between teams

### VS Code

- You can switch teams on VS Code.
- To see more features related to Daytona's teams on VS Code, please refer to [IDEs](/usage/ides#vscode) and [VS Code Extension](/tools/vs-code-extension#managing-teams) guides.

### JetBrains

- In Jetbrains' Gateway, once you have configured Daytona based on [this guide](/tools/jetbrains-gateway), you will be able to switch between teams.
- To see the features related to teams on JetBrains related products including **IntelliJ**, **PyCharm**, **WebStorm**, **PhpStorm** and more, we have written guides on [IDEs](/usage/ides#intellij) and [the team's feature in JetBrains Gateway](/tools/jetbrains-gateway#managing-teams).
