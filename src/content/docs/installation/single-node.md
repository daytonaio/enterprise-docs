---
title: Single Node Installation
description: Learn how to install and configure Daytona using a Single Node.
sidebar:
  label: Single Node
---

## Requirements

Before installing and using Daytona, ensure that your operating system meets the necessary requirements and dependencies.

### Environment Host Requirements

| **Minimum Hardware Specifications** | **Requirement**                   |
|-------------------------------------|-----------------------------------|
| Architecture                        | x86_64 architecture with Linux OS |
| vCPUs                               | Minimum 4 vCPUs                   |
| RAM                                 | Minimum 16GB RAM                  |
| Disk Space                          | Minimum 200GB disk space          |

The host must have a public IP with TCP ports `80`, `443`, and `30000` open (TCP `6443` is required for local access to the Kubernetes cluster).

The script has been tested on Debian-based distributions: Ubuntu 22.04, Ubuntu 23.04, and Debian 12.

### Valid domain

A registered domain is required with both base and wildcard DNS A records pointing to the host IP address:

* domain name IN A host.ip
* *.domain-name IN A host.ip

### OAuth Application Configuration with Identity Providers

Configure an OAuth application with one of the supported identity providers:

* [GitHub OAuth App](https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/creating-an-oauth-app)
* [GitLab OAuth App](https://docs.gitlab.com/ee/integration/oauth_provider.html)
* [Bitbucket OAuth](https://support.atlassian.com/bitbucket-cloud/docs/use-oauth-on-bitbucket-cloud/)

When setting up the OAuth application, ensure the following parameters are correctly configured within the identity provider:

* **Homepage URL**

The homepage URL should be set to the root of your domain. It defines where users are redirected after authentication.

Example: `https://{{ domain-name }}`

* **Authorization callback URL**

The authorization callback URL is where the identity provider will send the user after successful authorization, along with an authorization code that your application will exchange for an access token.

Example: `https://id.{{ domain-name }}`

## Setup

Follow these steps to clone the installer repository and initiate the setup process:

```shell
    git clone https://github.com/daytonaio/installer
```
```shell
    cd installer
```
```shell
    ./setup.sh
```

During the setup process, you will be prompted to configure your application with the necessary details specific to your chosen Identity Provider (IdP). For example, if you select `GitHub` as your IdP, you will see the following prompts:

```
    Enter app hostname (valid domain) [URL]: daytona.example.com

    Identity Providers (IdP) available [IDP]:
    1) github
    2) gitlab
    3) bitbucket
    4) gitlabSelfManaged
    5) githubEnterpriseServer

    Choose an IdP (type the number and press Enter): 1
    Enter IdP Client ID [IDP_ID]: changeme
    Enter IdP Client Secret (IDP_SECRET) (input hidden):
```

You will need to provide several values depending on the Identity Provider selected:

* **URL**
    
    The domain name configured in your DNS provider, pointing to the IP address of the host where Daytona is being deployed.

* **IDP** 

    The name of the identity provider you intend to use (options: `github`, `gitlab`, or `bitbucket`).

* **IDP_URL**

    The base URL of your self-hosted Git provider. Required if IDP is `gitlabSelfManaged` or `githubEnterpriseServer`.

* **IDP_API_URL**

    The API URL of your GitHub Enterprise Server. Required if IDP is `githubEnterpriseServer`.

* **IDP_ID**
  
    The Client ID obtained from your identity provider, as specified in the [requirements](#requirements) section.

* **IDP_SECRET**
  
    The Client Secret obtained from your identity provider, as specified in the [requirements](#requirements) section.

Number of variables you need to set ranges from 4 to 6, depending on the Identity provider chosen. Here is a table showing IdP and variables you need:

| **IdP**                  | **Variables Needed**                                    |
|--------------------------|---------------------------------------------------------|
| github, gitlab, bitbucket | `URL`, `IDP`, `IDP_ID`, `IDP_SECRET`                   |
| gitlabSelfManaged         | `URL`, `IDP`, `IDP_ID`, `IDP_SECRET`, `IDP_URL`        |
| githubEnterpriseServer    | `URL`, `IDP`, `IDP_ID`, `IDP_SECRET`, `IDP_URL`, `IDP_API_URL` |

All variables can be set directly via the CLI when running the setup script:

```shell
URL="daytona.example.com" IDP="github" IDP_ID="changeme" IDP_SECRET="changeme" ./setup.sh
```

Consult the table above to ensure all required variables are specified.

Following the setup, the script will display the necessary A records for your DNS zone. Certbot will also provide instructions for obtaining a valid wildcard certificate by editing your DNS zone accordingly. Follow the instructions as prompted.

## Update

To update the existing setup, run the setup script again on the same machine. Ensure that you download the latest version of `setup.sh` and run it with the following command:

```shell
./setup.sh
```

If you originally provided any configuration variables via prompts, you will be required to re-enter those values during the update process. The certificate setup will be bypassed if the existing certificate remains valid.

For updates using the CLI, if you initially specified the necessary variables, you can re-run the update with the same command:

```shell
URL="daytona.example.com" IDP_ID="changeme" IDP_SECRET="changeme" ./setup.sh
```

Note that certificate validation will not be required if the existing certificate is still valid.

## Restart/Cleanup

To remove the current setup and start over, run the setup script with the `--remove` parameter. This will delete the k3s cluster along with all installed tools. After the cleanup, you can reinitialize the setup using the `--install` parameter.

```shell
./setup.sh --remove
```

```shell
./setup.sh --install
```