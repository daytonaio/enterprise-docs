---
title: CLI Tools and Resources
description: Add a brief description of the CLI Tools and Resources page here
sidebar:
  label: CLI
---

## General Flags

```bash
This is the Daytona CLI used to manipulate workspaces from the command line.

Usage:
  daytona [flags]
  daytona [command] 
 
Available Commands:
  code              Starts the workspace in VS Code
  create            Initializes a workspace with the given git repository or a picked template
  delete            Commands the workspace given by ID to be destroyed
  env               Lists or manipulates environment variables
  help              Help about any command
  ide               Sets a default IDE for the current user
  info              Retrieves the information of workspace given by ID
  list              Shows a list of workspaces by the current user and team
  login             Authenticates the user using the browser
  logout            Logs user profile out of the CLI
  pin               Commands the workspace given by ID to become pinned
  profile           Lists available profiles to choose from
  share             Commands the workspace given by ID to become shared
  ssh               Connect to the workspace using Secure Shell
  start             Commands the workspace given by ID to start
  stop              Commands the workspace given by ID to stop
  team              Lists available teams to choose from
  unpin             Commands the workspace given by ID to become unpinned
  unshare           Commands the workspace given by ID to become unshared
  version           Returns the version of your Daytona CLI

Flags:
  -h, --help   help for daytona

Use "daytona [command] --help" for more information about a command.
```

## Command:  code

```bash
Starts the workspace in VS Code.

Usage:
  daytona code [flags]

Flags:
  -h, --help         help for code
  -i, --ide string   Specify the IDE (e.g., 'vscode' or 'browser')
```

## Command:  create

```bash
Use 'daytona create <GIT_URL>' to instantiate a specific repository or 'daytona create' to select one of your own. Using 'daytona create template' lets you pick from a set of predefined templates.

Usage:
  daytona create [flags]

Flags:
  -c, --code   Open the project your default IDE after creating the workspace
  -h, --help   help for create
```

## Command:  daytona



## Command:  delete

```bash
Commands the workspace given by ID to be destroyed: 'daytona delete <WORKSPACE_ID>'. Use 'daytona delete --all' to destroy all workspaces in the current team.

Usage:
  daytona delete [flags]

Flags:
  -o, --all    Apply command to all workspaces
  -h, --help   help for delete
```

## Command:  env

```bash
Use 'daytona env' to list environment variables or use 'daytona env <KEY>=<VALUE>' to set them.

Usage:
  daytona env [flags]
  daytona env [command]

Available Commands:
  remove      Removes the environment variable specified by key

Flags:
  -h, --help   help for env

Use "daytona env [command] --help" for more information about a command.
```

## Command:  help

```bash
Help provides help for any command in the application.
Simply type daytona help [path to command] for full details.

Usage:
  daytona help [command] [flags]

Flags:
  -h, --help   help for help
```

## Command:  ide

```bash
Displays a list of available IDEs to pick as default for the current user

Usage:
  daytona ide [flags]

Flags:
  -h, --help          help for ide
  -n, --name string   Specify IDE by name
```

## Command:  info

```
Retrieves the information of workspace given by ID

Usage:
  daytona info [flags]

Flags:
  -h, --help   help for info
```

## Command:  list

```bash
Shows a list of workspaces by the current user and team

Usage:
  daytona list [flags]

Aliases:
  list, ls

Flags:
  -h, --help   help for list
```

## Command:  login

```
Opens the default browser and redirects to login page

Usage:
  daytona login [flags]

Flags:
  -h, --help   help for login
```

## Command:  logout

```
Logs the current user profile out of the Daytona CLI

Usage:
  daytona logout [flags]

Flags:
  -h, --help   help for logout
```

## Command:  pin

```
Commands the workspace given by ID to become pinned (never gets deleted): 'daytona pin <WORKSPACE_ID>'.

Usage:
  daytona pin [flags]

Flags:
  -h, --help   help for pin
```

## Command:  profile

```
Displays a list of available profiles to choose from.

Usage:
  daytona profile [flags]
  daytona profile [command]

Available Commands:
  active      Retrieves the ID of the currently active profile
  info        Displays information about the active profile
  list        Lists available profiles
  new         Creates a new profile
  set-name    Updates the name of the active profile to one given by argument
  set-url     Updates the base URL of the active profile to one given by argument
  use         Updates the active profile to one given by argument

Flags:
  -h, --help   help for profile

Use "daytona profile [command] --help" for more information about a command.
```

## Command:  share

```
Commands the workspace given by ID to become shared (grants public access): 'daytona share <WORKSPACE_ID>'. Use 'daytona share --all' to share all workspaces in the current team.

Usage:
  daytona share [flags]

Flags:
  -o, --all    Apply command to all workspaces
  -h, --help   help for share
```

## Command:  ssh

```
SSH

Usage:
  daytona ssh [flags]

Flags:
  -h, --help   help for ssh
```

## Command:  start

```
Commands the workspace given by ID to start: 'daytona start <WORKSPACE_ID>'. Use 'daytona start --all' to start all workspaces in the current team.

Usage:
  daytona start [flags]

Flags:
  -o, --all    Apply command to all workspaces
  -h, --help   help for start
```

## Command:  stop

```
Commands the workspace given by ID to stop: 'daytona stop <WORKSPACE_ID>'. Use 'daytona stop --all' to stop all workspaces in the current team.

Usage:
  daytona stop [flags]

Flags:
  -o, --all    Apply command to all workspaces
  -h, --help   help for stop
```

## Command:  team

```
Display list of available teams to choose from. Use flag '--name' to bypass prompt.

Usage:
  daytona team [flags]

Flags:
  -h, --help          help for team
  -n, --name string   Specify team name
```

## Command:  unpin

```
Commands the workspace given by ID to become unpinned (will get deleted after being stopped for two weeks): 'daytona unpin <WORKSPACE_ID>'.

Usage:
  daytona unpin [flags]

Flags:
  -h, --help   help for unpin
```

## Command:  unshare

```
Commands the workspace given by ID to become unshared (removes public access): 'daytona unshare <WORKSPACE_ID>'. Use 'daytona unshare --all' to unshare all workspaces in the current team.

Usage:
  daytona unshare [flags]

Flags:
  -o, --all    Apply command to all workspaces
  -h, --help   help for unshare
```

## Command:  version

```
Returns the version of your Daytona CLI

Usage:
  daytona version [flags]

Flags:
  -h, --help   help for version
```
