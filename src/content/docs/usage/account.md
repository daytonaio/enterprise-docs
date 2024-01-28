---
title: Account Usage
description: Explore how to configure your Daytona account to your needs.
sidebar:
  label: Account
---

Each Daytona account can be configured to your needs, enhancing productivity and usability through setting global dotfiles, environment variables, and SSH keys, and an editor for your workspaces.
You can connect your account to additional Git providers for even more flexibility in accessing projects across your organization.

## Choosing the default editor used to connect to workspaces
You can choose a default editor to connect to your workspaces with using the Daytona dashboard.
Daytona supports multiple standalone desktop editors and an in-browser version of Visual Studio Code.

:::tip
For a full list of editors and IDEs supported by Daytona, see *[IDEs](/usage/ides)*.
:::

1. Navigate to the *Settings* page under *Account* in the sidebar.
2. Under *Default Editor*, click on the currently selected drfault editor for your account.
3. Choose your desired editor in the dropdown menu.

## Configuring the default dotfiles repository for new workspaces
You can configure new workspaces to be populated with a set of dotfiles at creation time using the Daytona dashboard.

After setting a Git repository for dotfiles, Daytona will clone the repository into the home directory of each new workspace.
This allows you to share a common set of configuration across your workspaces.
Examples of potential configuration include shell configuration (`~/.bashrc`, `~/.profile`) and CLI tool configuration in `~/.config/`.

:::note
To use this feature, you need the URL of a Git repository with your desired dotfiles.
:::

:::tip
To set individual environment variables directly in the Daytona dashboard, see *[Sharing a common environment variable across workspaces](#sharing-a-common-environment-variable-across-workspaces)*.
:::

1. Navigate to the *Settings* page under *Account* in the sidebar.
2. Under *Dotfiles*, specify the URL of the Git repository containing your dotfiles.
3. Click the `Update` button to save the configuration.

## Sharing a common environment variable across workspaces
You can add an environment variable to be available across your workspaces using the Daytona dashboard.
This feature can be used to set secret keys, passwords, and other configuration consumable by command-line tools in your workspace.

:::tip
To set configuration for your environment using dotfiles, see *[Configuring the default dotfiles repository for new workspaces](#configuring-the-default-dotfiles-repository-for-new-workspaces)*.
:::

1. Navigate to the *Environment Variables* page under *Account* in the sidebar.
2. Click the `Add` button.
3. In the dialog presented, enter the desired key/value pair for the environment variable.
4. Click the `Add` button.

## Editing a global environment variable
You can edit a global environment variable set in the Daytona dashboard.

1. Navigate to the *Environment Variables* page under *Account* in the sidebar.
2. Locate the environment variable to remove in the rows presented.
3. Click the `Edit` button to the right of the row.

## Removing a global environment variable
You can remove a global environment variable set in the Daytona dashboard.

1. Navigate to the *Environment Variables* page under *Account* in the sidebar.
2. Locate the environment variable to remove in the rows presented.
3. Click the `Remove` button to the right of the row.

## Adding an SSH public key to your account
You can add an SSH public key to your account using the Daytona dashboard.
SSH keys are used for authentication purposes when connecting to a workspace.

1. Navigate to the *SSH Keys* page under *Account* in the sidebar.
2. Click the `Add` button to show the dialog.
3. In the *Name* field, enter a unique identifier for your public key.
4. In the *Key* field, enter your public key.
5. Optional: In the *Expiration Date* field, enter a date for your key to be automatically revoked.
6. Click the `Add` button.

:::note
While setting an expiration date for your key is optional, it is good practice to set this date and rotate SSH keys periodically.
:::

## Removing an SSH public key from your account
You can remove an SSH public key from your account.
This will prevent the key from being used to authenticate access to your workspaces.

1. Navigate to the *SSH Keys* page under *Account* in the sidebar.
2. Locate the SSH key to remove from your account.
3. Click the `Remove` button to the right of the row.
4. In the dialog presented, click `Remove` to confirm the action.

## Connecting an additional Git provider to your account
You can connect additional Git providers to your account using the Daytona dashboard.

:::note
Git providers are configured globally at install time.
For more information, see (/installation/idps/)[IDPs].
:::

1. Navigate to the *Settings* page under *Account* in the sidebar.
2. Under *Git Providers*, locate the additional provider you wish to connect your account to.
3. Click the three-dot menu to the right of the row.
4. Click `Connect`.
5. Follow the instructions provided in the popup to grant access to the Git provider.

## Disconnecting a Git provider from your account
You can disconnect a Git provider from your account using the Daytona dashboard.
This will revoke access to any private repositories accessible through the Git provider.

:::note
Your Daytona account must be connected to at least one Git provider.
:::

1. Navigate to the *Settings* page under *Account* in the sidebar.
2. Under *Git Providers*, locate the provider you wish to disconnect.
3. Click on the three-dot menu to the right of the row.
4. Click `Disconnect`.

## Deleting your account
You can delete your account using the Daytona dashboard.

:::caution
Deleting your account will irreversibly remove access to any teams you are a member of.
In teams where you are the sole member, workspaces will be permanently deleted as a result of this action.
:::

1. Navigate to the *Settings* page under *Account* in the Sidebar
2. Under *Delete Account*, click the `Delete` button.
3. In the confirmation dialog presented, enter the email address associated with your account.
4. Click the `Delete` button.