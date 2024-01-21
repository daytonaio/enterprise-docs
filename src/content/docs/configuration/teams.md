---
title: Teams Configuration
description: This guide will help you configure and manage teams in your Daytona deployment.
sidebar:
  label: Teams
---

Within a Daytona deployment, teams share a cohesive environment where team members can share [workspaces](/usage/workspaces), collaborate, and manage workspaces. On Daytona dashboard, you can invite, manage and configure team members, become a owner of a team, and the configuration is synced across all the [IDEs](/usage/ides) connected to your Daytona deployment. 

In this guide, we will cover how to configure and manage teams in your Daytona deployment.

:::note
At the moment, all the team related configuration can be only done on Daytona dashboard or Keycloak. You won't be able to configure teams from IDEs.
:::

## Pre-requisites
Before you start configuring teams, make sure you have the following:
- **Daytona deployment**
Once you have a Daytona deployment, you can access: 
  - **Daytona dashboard**: we will be refering to your Daytona dashboard as `https://domain.com`.
  - **Keycloak** (come as prepackaged in Daytona, optional): we will be referring to your Keycloak dashboard as `https://id.domain.com`.
   
[//]: # ({/*TODO: docs - second list item should be corrected rendered and indented*/})
## Managing teams
In this section, we will walk you through how you can invite, assign roles, and remove team members from your Daytona deployment.
:::note
A team on Daytona can only have maximum 10 members at the moment. 
:::

### Different roles
All the roles in a team can see who is in the same team and the pending invitation. 

[//]: # (All roles in a team can create, share workspaces. Create environment variables based off configuration.)

[//]: # (TODO: feature - right now team members can't share workspaces based on their roles and names, neither environment variables, we should have this feature available)
1. **Owner**
- One team can only have one owner
- The owner of a team can do the following in a team:
  - invite new team members by email (one by one)
  - bulk invite team members by uploading a CSV file
  - assign roles to team members (Admin and Member)
  - remove team members from the team
  - see pending invitations in the same team

2. **Admin**
- One team can have multiple admins
- The admin of a team can do the following in a team:
  - invite new team members by email (one by one)
  - bulk invite team members by uploading a CSV file
  - assign roles to team members (Admin and Member)
  - remove team members from the team
  - see pending invitations in the same team

[//]: # (  TODO: feature - question: should admins be able to change themselves to members ? )
  - remove team members from the team. The admin can also manage the team's environment variables.
3. **Member**
- One team can have multiple members
- The member of a team can do the following in a team:
  - see who is in the same team
  - see pending invitations in the same team

### Invite team members on Daytona dashboard

1. Log into selected team on Daytona dashboard
- Log into your Daytona dashboard, make sure you are in the team you want to invite new members to by checking in the **top right corner** (on creation of each account, by default you are in a team, even you are the only member in the team).
- Click on **Members** and then **Invite**.

2. Entering emails
- Enter the email address of the team member you want to invite and click on **Invite**. Note that they will need to register on Daytona dashboard.
- Optional: you can also invite multiple team members by uploading a CSV file. Click on **Import**, upload a CSV file or click the dotted square box to select one from file explorer.
:::note
The invitation will be only shown to members who are already registered on the same Daytona deployment. They will need to log into their Daytona dashboard to accept the invitation.
:::

[//]: # (TODO: feature - 1. emails to team members who are invited regardless they are registered or not, 2. accept team invitation in emails)

### Receiving invitation on Daytona dashboard 
- Log into your Daytona dashboard, and click on your team's profile in the **top right corner**.
- Under the dropdown menu click on **Team invitations**.
- On this page you can see who invited you (their username) and the invitation time. 
- Click on **Accept** to accept the invitation from known team, or **Decline** to decline the invitation from known team.

### Managing roles on Daytona dashboard

[//]: # (### Invite team members in Keycloak )

[//]: # (### Managing roles in Keycloak)

## Managing secrets
At the moment, you won't be able to share environment variables and manage access to environment variables within teams on Daytona dashboard. The quickest workaround is to use products like **Doppler**, **Hashicorp Vault**, **AWS Secrets Manager** and **Infisical**. 

We have a detailed guide on how to use Doppler with Daytona [here](https://www.daytona.io/dotfiles/managing-secrets-with-doppler-in-devcontainers). Following this guide, you will be able to use Doppler's CLI to manage your secrets and environment variables in your workspaces across teams. It applies to secrets used in production environment, development environment and staging environment.

## Configure team settings
On Daytona dashboard, you can configure team settings including team name, check team ID and deleting team. 
:::note 
There are two **Settings** button on the Daytona dashboard. Only the one under the **Team** section is for setting's related to teams. Any settings in the **Settings** under the **Account** section, including dotfiles, default IDEs, Git Providers are your personal settings. They would not be shown nor shared with your team.
:::


## Check workspace usage

## Teams on IDEs
On different IDEs, at the moment you will be able to: 
- see the teams you are in
- create workspaces within the team you are in
- viewing the workspaces you have access to on the same team
- switching between teams

### VS Code
To see the features related to teams on VS Code, please refer to [IDEs](/usage/ides#vscode) and [VS Code Extension](/tools/vs-code-extension#managing-teams) guides.

### JetBrains
To see the features related to teams on JetBrains related products including **IntelliJ**, **PyCharm**, **WebStorm**, **PhpStorm** and more, we have written guides on [IDEs](/usage/ides#intellij) and [JetBrains Gateway](/tools/jetbrains-gateway#managing-teams).