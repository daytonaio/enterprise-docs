---
title: Account Usage
description: Add a brief description of the Account Usage page here
sidebar:
  label: Account
---

## Managing secrets
1. Environment variables on dashboard
- Log into your Daytona dashboard in your browser, click on **Environment variables** on the left.
- Click on **Add**.
- Each environment variable requires a **Name** and a **Value**. Input them as the same as a `.env` file.
- Then click on **Add** to save them.

2. Using environment variables in your workspace
- The same as how you'd be using it in your local environment, without the need to create a `.env` file.

### Separating secrets per environment
To separate secrets in production, development and staging environment, you can use products like [**Doppler**](https://www.doppler.com/), [**Hashicorp Vault**](https://www.vaultproject.io/), [**AWS Secrets Manager**](https://aws.amazon.com/secrets-manager/) and [**Infisical**](https://www.infisical.com/) or similar secret management tools.

We have a detailed guide on how to use Doppler with Daytona [here](https://www.daytona.io/dotfiles/managing-secrets-with-doppler-in-devcontainers). Following this guide, you will be able to use [Doppler's CLI](https://docs.doppler.com/docs/cli) to manage your secrets and environment variables in your workspaces across teams. It applies to secrets used in production environment, development environment and staging environment.