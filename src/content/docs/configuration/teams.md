---
title: Teams
description: This guide will help you configure and manage teams in your Daytona deployment.
sidebar:
  label: Teams
---

A team in a Daytona deployment represents a group of people collaborating together in Daytona, either as an **internal unit like the Engineering department** or as **an external group**, such as a team of Open Source contributors/collaborators. 

By creating a team, you become the team owner. This role empowers you to invite, manage, and configure team members, and most importantly, to manage the hardware resources at their disposal. 

In this guide, we will walk you through how you can perform above tasks from your daytona dashboard. Whenever you register an account on a Daytona deployment, you are default to be in a team. You can create a new team, or join an existing team.

<hr/>

## Prerequisites
Before you start configuring teams, make sure you have access to a **Daytona deployment** and the **dashboard URL**.
   
[//]: # ({/*TODO: docs - second list item should be corrected rendered and indented*/})
<hr/>


## Creating teams

1. Log into your Daytona dashboard
2. Creating a team
- Click on your **team's name** (by default it is **My Team**) in the top right corner.
- In the dropdown menu, click on **Create team**.
- Enter your team's name and click on **Create**.

[//]: # (TODO: docs - link in note component are not rendered)

:::note 
You might have an error if you haven't upgrade. [Book a demo with us](https://daytona.zapier.app/) if you are interested in upgrading your current Daytona license.
:::

Either you choose to create a new team, or using the default **My Team**, you can manage them from the left sidebar via **Subscription**, **Members** and **Settings**. 


<hr/>

## Inviting team members

1. Log into selected team on Daytona dashboard
- Log into your Daytona dashboard, make sure you are in the team you want to invite new members to (by checking in the **top right corner**).
- On creation of each account, by default you are in a team, even if you are the only member in the team.
- Click on **Members** and then **Invite**.

2. Entering emails
- Enter the email address of the team member you want to invite and click on **Invite**. Note that they will need to register on the Daytona dashboard you deployed (on the same instance).
- Optional: you can also invite multiple team members by uploading a CSV file. Click on **Import**, upload a CSV file or click the dotted square box to select one from file explorer.
:::note
The invitation will be only shown to members who are already registered on the same Daytona deployment. They will need to log into their Daytona dashboard to accept the invitation.
:::

3. Check pending invitations
- On the *Member* tab, click on **Invitations**
- You can see the expiration time of the invitation, the email address of the team member you invited. 
- You can revoke invitation by clicking on **Remove**.

<hr/>

## Receiving invitations

1. Team invitation on Daytona dashboard
- Log into your Daytona dashboard, and click on your team's profile in the **top right corner**.
- Under the dropdown menu click on **Team invitations**.
- On this page you can see which team invited you (team's name), who invited you (their username) and the invitation time. 

2. Actions on team invitation
- Click on **Accept** to accept the invitation from known team, or **Decline** to decline the invitation from known team.

<hr/>

## Managing roles

Once the team member you invited has accepted the invitation, you can assign two types of roles to them:
- Admin
- Member

For a detailed explanation of different roles and what they can do, please refer to the [different roles](#different-roles) section above.

### Different roles
All the roles in a team can see who is in the same team and the pending invitation.

1. **Owner**
- One team can only have one owner
- The owner of a team can do the following in a team:
  - **invite new team members** by email (one by one)
  - **bulk invite** team members by uploading a CSV file
  - assign roles to team members (**Admin** and **Member**)
  - remove team members from the team
  - see pending invitations in the same team
  - edit team configuration (team name, team ID, delete team)
  - check workspace usage within the team
  - edit team configuration (team name, team ID, delete team)

2. **Admin**
- One team can have multiple admins
- The admin of a team can do the following in a team:
  - **invite new team members** by email (one by one)
  - **bulk invite** team members by uploading a CSV file
  - assign roles to team members (Admin and Member)
  - remove team members from the team
  - see pending invitations in the same team


3. **Member**
- One team can have multiple members
- The member of a team can do the following in a team:
  - see who is in the same team
  - see pending invitations in the same team
  - check workspace usage within the team
  - leaving a team
  - can't invite new team members
  - can't assign roles to team members
  - can't remove team members from the team
  - can't edit team name

<hr/>

## Configuring team settings

On Daytona dashboard, you can configure team settings including team name, check team ID and deleting team (*this action is destructive*). 

:::note 
There are two **Settings** button on the Daytona dashboard. Only the one under the **Team** section is for setting's related to teams. Any settings in the **Settings** under the **Account** section, including dotfiles, default IDEs, Git Providers are your personal settings. They would not be shown nor shared with your team.
:::

1. Before all: team settings on Daytona dashboard
- Log into your Daytona dashboard in your selected teams (click on the team profile on top right and **Switch teams**).
- And on the left under *Team* section, click on **Settings**.

1. Changing team's name
- Click on the pen icon **next to the team name** to change the team name.
- After you update the team's name click on **Update**.

2. Checking team ID
- You can see the **Team ID** under the *Team information*.
- Click on the copy icon to copy the team ID.

3. Deleting team
- Click on **Delete team** (this action is destructive, you will lost records of your previous team members).
- You will be prompted for your team's name. Enter the team's name and then click on **Delete**.

<hr/>

## Team's statistics

On Daytona dashboard, you can check the usage of your workspaces within your team, namely how many workspaces are within this team, and how many hours you and your team members have used in total.

1. Selecting a team

- Log into your Daytona dashboard in your selected teams (click on the team profile on top right and **Switch teams**).

2. Check team's statistics

- On the left under *Team* section, click on **Subscription**.
- You can check: 
  - **Current Subscription**: When did the current subscription cycle start (day of deployment) and your subscription plan.
  - **Parallel workspace**: how many workspaces are within this team
  - **Active Workspaces**: how many active workspaces exits in the same team
  - **Inactivity timeout**: how many minutes of inactivity before a workspace is automatically stopped.
  - **Used minutes**: how many minutes you and your team members have used in total in the last 30 days.
  - **Active Workspaces**: how many [active workspaces](/usage/workspaces) exits in the current time within this team.

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

- To see the features related to Daytona's teams on VS Code, please refer to [IDEs](/usage/ides#vscode) and [VS Code Extension](/tools/vs-code-extension#managing-teams) guides.

### JetBrains

- In Jetbrains' Gateway, once you have configured Daytona based on [this guide](/tools/jetbrains-gateway), you will be able to switch between teams.
In VS Code, you can only **changing teams(To see the features related to teams on JetBrains related products including **IntelliJ**, **PyCharm**, **WebStorm**, **PhpStorm** and more, we have written guides on [IDEs](/usage/ides#intellij) and [the team's feature in JetBrains Gateway](/tools/jetbrains-gateway#managing-teams).