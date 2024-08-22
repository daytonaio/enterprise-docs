---
title: Cluster Installation
description: Installing Daytona in cluster mode
sidebar:
  label: Cluster
---

To install Daytona in cluster mode, please contact us to [schedule a demo call](https://daytona.zapier.app/). Our team will provide assistance with the installation process.

Daytona Enterprise Solution is a fully scalable and secure development environment management platform, designed to facilitate collaboration across multiple development teams.

Your Daytona instance will include access to the following features:

- **All features from Daytona Core (Single Node)**

    Includes all functionality available in the single-node version of Daytona.

- **Identity and Access Management**

    Integrated solutions for managing user identities and controlling access to resources.

- **Scalability and Resource Allocation - Cluster Support (K8s)**

    Supports Kubernetes-based clusters for scalable resource management and efficient workload distribution.

- **Distributed Storage Support**

    Enables the use of distributed storage systems to manage data across the cluster.

- **Secure Development Environments and Workspace Isolation**

    Provides isolated and secure Workspaces using VM, Sysbox, and other technologies.

- **Quota and Limits Management**

    Enforces Workspace size limits and active Workspace quotas per user to optimize team resource usage.

- **Teams Support**

    Facilitates collaboration by organizing users into teams.

- **Team Projects**

    Allows for the management and sharing of pre-built environments among team members.

- **Github, Gitlab and Bitbucket - Enterprise and Self-hosted Versions Support**

    Compatible with enterprise and self-hosted versions of GitHub, GitLab, and Bitbucket.

- **Audits, Monitoring and Observability**

    Provides tools for auditing, monitoring, and observing system performance and security.

---

## Global Admin

User Type: **Global Admin**

- **User Management (Global Scope)**

    Add or remove users across the entire system.

- **Workspace Class Management (Global Scope)**

    Enable or disable Workspace classes at a global level.

- **Team Ownership and Management**

    The user who creates a team is assigned as the 'Owner' by default.

    Ownership can be transferred to another team member.

    Only one team Owner is allowed.

    The Owner has the authority to delete the team or modify its name.

---

## Team Owner

User Type: **Team Owner**

- **User Management (Team Scope)**

    Add or remove users within the team.

- **Workspace Class Management (Team Scope)**

    Enable or disable Workspace classes within the team.

- **Team Administration**

    There is no restriction on the number of Admins within the team.

    Admins have the ability to manage team members, including inviting, removing, and changing their roles.

---

## Team Member

User Type:  **Team Member**

- **Workspace Management**

    Manage personal Workspaces within the team environment.

- **Environment Variable Configuration**

    Set and manage environment variables for personal Workspaces.

- **User preferences (like default IDE)**

    Customize preferences, such as the default IDE.

- **SSH Key Management**

    Manage allowed SSH keys for secure access.

- **Regular User Role**

    Operate as a regular team member with access to resources, but without management privileges within the team space.
