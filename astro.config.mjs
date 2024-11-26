import fs from 'node:fs';
import { loadEnv } from 'vite'
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import node from '@astrojs/node'
import react from '@astrojs/react'
import { ExpressiveCodeTheme } from '@astrojs/starlight/expressive-code';

const { PUBLIC_WEB_URL } = loadEnv(import.meta.env.MODE, process.cwd(), '')

const jsonDarkString = fs.readFileSync(new URL(`src/assets/themes/daytona-code-dark.json`, import.meta.url), 'utf-8');
const jsonLightString = fs.readFileSync(new URL(`src/assets/themes/daytona-code-light.json`, import.meta.url), 'utf-8');
const myThemeDark = ExpressiveCodeTheme.fromJSONString(jsonDarkString);
const myThemeLight = ExpressiveCodeTheme.fromJSONString(jsonLightString);

export default defineConfig({
  site: PUBLIC_WEB_URL,
  integrations: [
    react(),
    starlight({
      favicon: '/favicon.ico',
      title: 'Daytona',
      social: {
        github: 'https://github.com/daytonaio/daytona'
      },
      "sidebar": [
        {
          label: 'Home',
          link: '/',
          attrs: {
            icon: 'home.svg',
          },
        },
        {
          label: 'About',
          items: [
            {
              label: 'What is Daytona?',
              link: '/about/what-is-daytona',
              attrs: {
                icon: 'bookmark.svg',
              },
            },
            {
              label: 'Getting Started',
              link: '/about/getting-started',
              attrs: {
                icon: 'flag.svg',
              },
            },
          ],
        },
        {
          label: "Installation",
          items: [{
            label: "Single Node",
            link: "/installation/single-node/",
            attrs: {
              icon: 'git-commit.svg'
            },
          }, {
            "label": "Cluster",
            "link": "/installation/cluster/",
            attrs: {
              icon: 'cluster.svg'
            },
          }]
        },
        {
          label: "Administration",
          items: [
            {
              label: "Users",
              link: "/administration/users/",
              attrs: {
                icon: 'users.svg'
              },
            },
            {
              "label": "Samples",
              "link": "/administration/samples/",
              attrs: {
                icon: 'samples.svg'
              },
            },
            {
              "label": "Quotas",
              "link": "/administration/quotas/",
              attrs: {
                icon: 'quotas.svg'
              },
            },
            {
              "label": "Teams",
              "link": "/administration/teams/",
              attrs: {
                icon: 'users.svg'
              },
            },
            {
              "label": "Workspace Classes",
              "link": "/administration/workspace-classes/",
              attrs: {
                icon: 'workspace-classes.svg'
              },
            },
            {
              "label": "Identity Providers",
              "link": "/administration/identity-providers/",
              attrs: {
                icon: 'globe.svg'
              },
            },
            {
              "label": "License",
              "link": "/administration/license/",
              attrs: {
                icon: 'license.svg'
              },
            },
            {
              "label": "Settings",
              "link": "/administration/settings/",
              attrs: {
                icon: 'settings.svg'
              },
            },
          ]
        },
        {
          "label": "Configuration",
          "items": [
            {
              "label": "Git Providers",
              "link": "/configuration/git-providers/",
              attrs: {
                icon: 'git-branch.svg'
              },
            }, {
              "label": "Teams",
              "link": "/configuration/teams/",
              attrs: {
                icon: 'users.svg'
              },
            },
          ]
        }, {
          "label": "Usage",
          "items": [
            {
              "label": "Workspaces",
              "link": "/usage/workspaces/",
              attrs: {
                icon: 'computer.svg'
              },
            },
            {
              "label": "Usage",
              "link": "/usage/usage/",
              attrs: {
                icon: 'usage.svg'
              },
            },
            {
              "label": "IDEs",
              "link": "/usage/ide/",
              attrs: {
                icon: 'layout.svg'
              },
            }, {
              "label": "Account",
              "link": "/usage/account/",
              attrs: {
                icon: 'user.svg'
              },
            },
          ]
        },
        {
          "label": "Tools and Resources",
          "items": [
            {
              "label": "CLI",
              "link": "/tools/cli/",
              attrs: {
                icon: 'terminal.svg'
              },
            },
            {
              "label": "VS Code Extension",
              "link": "/tools/vs-code-extension/",
              attrs: {
                icon: 'vscode-alt.svg'
              },
            },
            {
              "label": "JetBrains Gateway",
              "link": "/tools/jetbrains-gateway/",
              attrs: {
                icon: 'jetbrains.svg'
              },
            },
            {
              "label": "Backstage Plugin",
              "link": "/tools/backstage-plugin/",
              attrs: {
                icon: 'backstage.svg'
              },
            },
          ]
        },
        {
          label: 'Misc',
          items: [
            {
              label: 'Secrets',
              link: '/misc/secrets',
              attrs: {
                icon: 'shield.svg',
              },
            },
            {
              label: 'Telemetry',
              link: '/misc/telemetry',
              attrs: {
                icon: 'pulse.svg',
              },
            },
          ],
        },
      ],
      tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 2 },
      customCss: ['./src/fonts/font-face.css', './src/styles/style.scss'],
      components: {
        Footer: './src/components/Footer.astro',
        MarkdownContent: './src/components/MarkdownContent.astro',
        Pagination: './src/components/Pagination.astro',
        Header: './src/components/Header.astro',
        PageSidebar: './src/components/PageSidebar.astro',
        PageFrame: './src/components/PageFrame.astro',
        Sidebar: './src/components/Sidebar.astro',
        TwoColumnContent: './src/components/TwoColumnContent.astro',
        TableOfContents: './src/components/TableOfContents.astro',
        MobileMenuToggle: './src/components/MobileMenuToggle.astro',
        ContentPanel: './src/components/ContentPanel.astro',
        PageTitle: './src/components/PageTitle.astro',
        Hero: './src/components/Hero.astro',
        ThemeProvider: './src/components/ThemeProvider.astro',
        ThemeSelect: './src/components/ThemeSelect.astro',
        Head: './src/components/Head.astro',
      },
      expressiveCode: {
        themes: [myThemeDark, myThemeLight],
      },
    })],
  output: 'hybrid',
  adapter: node({
    mode: 'middleware',
  }),
  vite: {
    ssr: {
      noExternal: ['path-to-regexp'],
    },
  },
});
