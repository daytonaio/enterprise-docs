import fs from 'node:fs';
import { loadEnv } from 'vite'
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import node from '@astrojs/node'
import { ExpressiveCodeTheme } from '@astrojs/starlight/expressive-code';

const { PUBLIC_WEB_URL } = loadEnv(import.meta.env.MODE, process.cwd(), '')

const jsonDarkString = fs.readFileSync(new URL(`src/assets/themes/daytona-code-dark.json`, import.meta.url), 'utf-8');
const jsonLightString = fs.readFileSync(new URL(`src/assets/themes/daytona-code-light.json`, import.meta.url), 'utf-8');
const myThemeDark = ExpressiveCodeTheme.fromJSONString(jsonDarkString);
const myThemeLight = ExpressiveCodeTheme.fromJSONString(jsonLightString);

// https://astro.build/config
export default defineConfig({
  site: PUBLIC_WEB_URL,
  integrations: [starlight({
    favicon: '/favicon.ico',
    title: 'Daytona',
    social: {
      github: 'https://github.com/daytonaio/daytona'
    },
    "sidebar": [{
      "label": "Getting Started",
      link: 'getting-started',
      attrs: {
        icon: 'flag.svg'
      },
    }, {
      "label": "Architecture",
      link: 'architecture',
      attrs: {
        icon: 'layers.svg'
      },
    }, {
      "label": "Installation",
      "items": [{
        "label": "Single Node",
        "link": "/installation/single-node/",
        attrs: {
          icon: 'git-commit.svg'
        },
      }, {
        "label": "Cluster",
        "link": "/installation/cluster/",
        attrs: {
          icon: 'cluster.svg'
        },
      }, {
        "label": "IDPs",
        "link": "/installation/idps/",
        attrs: {
          icon: 'shield.svg'
        },
      }]
    }, {
      "label": "Configuration",
      "items": [
      //     {
      //   "label": "User Types",
      //   "link": "/configuration/user-types/",
      //   attrs: {
      //     icon: 'bookmark.svg'
      //   },
      // },
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
      }, {
        "label": "Templates",
        "link": "/configuration/templates/",
        attrs: {
          icon: 'copy.svg'
        },
      },
      //     {
      //   "label": "Licensing (Enterprise)",
      //   "link": "/configuration/licensing/",
      //   attrs: {
      //     icon: 'tag.svg'
      //   },
      // }
      ]
    }, {
      "label": "Usage",
      "items": [{
        "label": "Workspaces",
        "link": "/usage/workspaces/",
        attrs: {
          icon: 'computer.svg'
        },
      }, {
        "label": "IDEs",
        "link": "/usage/ides/",
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
      //     {
      //   "label": "Projects",
      //   "link": "/usage/projects/",
      //   attrs: {
      //     icon: 'folder.svg'
      //   },
      // }
      ]
    },
        {
      "label": "Administration",
      "items": [
          // {
    //     "label": "Application Logs",
    //     "link": "/administration/application-logs/",
    //     attrs: {
    //       icon: 'document.svg'
    //     },
    //   }, {
    //     "label": "Audit Logs",
    //     "link": "/administration/audit-logs/",
    //     attrs: {
    //       icon: 'clipboard-list.svg'
    //     },
    //   }, {
    //     "label": "High Density",
    //     "link": "/administration/high-density/",
    //     attrs: {
    //       icon: 'table.svg'
    //     },
    //   }, {
    //     "label": "Telemetry",
    //     "link": "/administration/telemetry/",
    //     attrs: {
    //       icon: 'pulse.svg'
    //     },
    //   },
          {
        "label": "Appearance",
        "link": "/administration/appearance/",
        attrs: {
          icon: 'union.svg'
        },
      }]
    },
        {
      "label": "Tools and Resources",
      "items": [{
        "label": "API",
        "link": "/tools/api/",
        attrs: {
          icon: 'switch.svg'
        },
      }, {
        "label": "CLI",
        "link": "/tools/cli/",
        attrs: {
          icon: 'terminal.svg'
        },
      }, {
        "label": "VS Code Extension",
        "link": "/tools/vs-code-extension/",
        attrs: {
          icon: 'vscode-alt.svg'
        },
      }, {
        "label": "JetBrains Gateway",
        "link": "/tools/jetbrains-gateway/",
        attrs: {
          icon: 'jetbrains.svg'
        },
      }]
    },
    // {
    //   "label": "Contribution",
    //   "items": [{
    //     "label": "Guideline",
    //     "link": "/contribution/guidelines",
    //   }]
    // }
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
      TableOfContents:'./src/components/TableOfContents.astro',
      MobileMenuToggle: './src/components/MobileMenuToggle.astro',
      ContentPanel: './src/components/ContentPanel.astro',
      PageTitle: './src/components/PageTitle.astro',
      Hero: './src/components/Hero.astro',
      ThemeProvider: './src/components/ThemeProvider.astro',
      ThemeSelect: './src/components/ThemeSelect.astro'
    },
    expressiveCode: {
      themes: [myThemeDark, myThemeLight],
    }
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
