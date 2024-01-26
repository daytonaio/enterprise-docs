export const Schema = {
  openapi: '3.0.1',
  info: {
    version: 'undefined',
    title: 'Daytona REST API',
  },
  components: {
    securitySchemes: {
      oauth2: {
        type: 'oauth2',
        flows: {
          authorizationCode: {
            scopes: {
              openid: 'openid',
            },
            authorizationUrl:
              'https://id.cde.agency/realms/default/protocol/openid-connect/auth',
            tokenUrl:
              'https://id.cde.agency/realms/default/protocol/openid-connect/token',
            refreshUrl:
              'https://id.cde.agency/realms/default/protocol/openid-connect/token',
          },
        },
      },
      workspaceToken: {
        type: 'apiKey',
        in: 'header',
        name: 'x-ws-token',
      },
    },
    schemas: {
      Cluster: {
        type: 'object',
        properties: {
          domain: {
            type: 'string',
            description: 'Domain',
            minLength: 1,
          },
          id: {
            type: 'string',
            minLength: 1,
          },
          name: {
            type: 'string',
            description: 'Name',
            minLength: 1,
          },
          region: {
            type: 'string',
            enum: ['us', 'eu', 'asia', 'local'],
            description: 'Region',
          },
        },
        required: ['domain', 'id', 'name'],
      },
      ClusterCreation: {
        type: 'object',
        properties: {
          config: {
            type: 'string',
            description: 'Cluster config',
            minLength: 1,
          },
          domain: {
            type: 'string',
            description: 'Domain',
            minLength: 1,
          },
          name: {
            type: 'string',
            description: 'Name',
            minLength: 1,
          },
          region: {
            type: 'string',
            enum: ['us', 'eu', 'asia', 'local'],
            description: 'Region',
            minLength: 1,
          },
        },
        required: ['config', 'domain', 'name', 'region'],
      },
      ClusterList: {
        type: 'object',
        properties: {
          items: {
            type: 'array',
            items: {
              $ref: '#/components/schemas/Cluster',
            },
          },
          total: {
            type: 'number',
          },
        },
        required: ['items', 'total'],
      },
      EnvironmentVariableCreation: {
        type: 'object',
        properties: {
          name: {
            type: 'string',
            description: 'Name',
            minLength: 1,
          },
          value: {
            type: 'string',
            description: 'Value',
            minLength: 1,
          },
        },
        required: ['name', 'value'],
      },
      PublicSSHKeyCreation: {
        type: 'object',
        properties: {
          expiresAt: {
            type: 'string',
            format: 'date-time',
            description: 'Expires at',
          },
          name: {
            type: 'string',
            example: 'My SSH key',
            description: 'SSH key name',
            minLength: 1,
          },
          publicKey: {
            type: 'string',
            description: 'SSH key value',
            minLength: 1,
          },
        },
        required: ['name', 'publicKey'],
      },
      User: {
        type: 'object',
        properties: {
          avatarUrl: {
            type: 'string',
            description: 'AvatarUrl',
          },
          disabled: {
            type: 'boolean',
            description: 'User account disabled flag',
          },
          id: {
            type: 'string',
            description: 'Id',
            minLength: 1,
          },
          markedForDeletion: {
            type: 'boolean',
            description: 'Marked for deletion',
          },
          preferences: {
            $ref: '#/components/schemas/UserPreferences',
          },
          primaryEmail: {
            type: 'string',
            description: 'Primary email',
            minLength: 1,
          },
          publicSSHKey: {
            type: 'string',
            description: 'Public SSH Key',
            minLength: 1,
          },
          username: {
            type: 'string',
            description: 'Name',
            minLength: 1,
          },
        },
        required: [
          'id',
          'preferences',
          'primaryEmail',
          'publicSSHKey',
          'username',
        ],
      },
      UserPreferences: {
        type: 'object',
        properties: {
          defaultIde: {
            type: 'string',
            enum: [
              'browser',
              'vscode',
              'jetbrains-iu',
              'jetbrains-ic',
              'jetbrains-ps',
              'jetbrains-ws',
              'jetbrains-py',
              'jetbrains-pc',
              'jetbrains-rm',
              'jetbrains-cl',
              'jetbrains-go',
              'jetbrains-rd',
            ],
            description: 'Default IDE',
            minLength: 1,
          },
          dotfilesRepositoryUrl: {
            type: 'string',
            description: 'Dotfiles repository URL',
          },
        },
        required: ['defaultIde'],
      },
      EnvironmentVariable: {
        type: 'object',
        properties: {
          name: {
            type: 'string',
            description: 'Name',
            minLength: 1,
          },
          value: {
            type: 'string',
            description: 'Value',
            minLength: 1,
          },
        },
        required: ['name', 'value'],
      },
      GitNamespace: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            minLength: 1,
          },
          name: {
            type: 'string',
            minLength: 1,
          },
          personal: {
            type: 'boolean',
          },
          provider: {
            type: 'string',
            minLength: 1,
          },
        },
        required: ['id', 'name', 'provider'],
      },
      GitRepositoryList: {
        type: 'object',
        properties: {
          items: {
            type: 'array',
            items: {
              $ref: '#/components/schemas/GitRepository',
            },
          },
          total: {
            type: 'number',
          },
        },
        required: ['items', 'total'],
      },
      GitRepository: {
        type: 'object',
        properties: {
          fullName: {
            type: 'string',
            minLength: 1,
          },
          htmlUrl: {
            type: 'string',
            minLength: 1,
          },
          name: {
            type: 'string',
            minLength: 1,
          },
        },
        required: ['fullName', 'htmlUrl', 'name'],
      },
      PublicSSHKey: {
        type: 'object',
        properties: {
          addedAt: {
            type: 'string',
            format: 'date-time',
            description: 'Added at',
            minLength: 1,
          },
          expiresAt: {
            type: 'string',
            format: 'date-time',
            description: 'Expires at',
          },
          id: {
            type: 'string',
            description: 'Id',
            minLength: 1,
          },
          name: {
            type: 'string',
            example: 'My SSH key',
            description: 'SSH key name',
            minLength: 1,
          },
        },
        required: ['addedAt', 'id', 'name'],
      },
      UserUpdateDefaultIde: {
        type: 'object',
        properties: {
          defaultIde: {
            type: 'string',
            enum: [
              'browser',
              'vscode',
              'jetbrains-iu',
              'jetbrains-ic',
              'jetbrains-ps',
              'jetbrains-ws',
              'jetbrains-py',
              'jetbrains-pc',
              'jetbrains-rm',
              'jetbrains-cl',
              'jetbrains-go',
              'jetbrains-rd',
            ],
            description: 'Default IDE',
            minLength: 1,
          },
        },
        required: ['defaultIde'],
      },
      UserUpdateDotfilesRepositoryUrl: {
        type: 'object',
        properties: {
          dotfilesRepositoryUrl: {
            type: 'string',
            description: 'Dotfiles repository URL',
          },
        },
      },
      EnvironmentVariableUpdate: {
        type: 'object',
        properties: {
          name: {
            type: 'string',
            description: 'Name',
            minLength: 1,
          },
          value: {
            type: 'string',
            description: 'Value',
            minLength: 1,
          },
        },
        required: ['name', 'value'],
      },
      Workspace: {
        type: 'object',
        properties: {
          createdAt: {
            type: 'string',
            format: 'date-time',
            minLength: 1,
          },
          createdFromTemplate: {
            type: 'boolean',
          },
          destroyed: {
            type: 'boolean',
          },
          error: {
            type: 'string',
          },
          errorLog: {
            type: 'string',
          },
          gitContext: {
            $ref: '#/components/schemas/GitContext',
          },
          gitStatus: {
            $ref: '#/components/schemas/WorkspaceGitStatus',
          },
          id: {
            type: 'string',
            minLength: 1,
          },
          pinned: {
            type: 'boolean',
          },
          shared: {
            type: 'boolean',
          },
          sshAccessToken: {
            type: 'string',
          },
          teamId: {
            type: 'string',
            minLength: 1,
          },
          updatedAt: {
            type: 'string',
            format: 'date-time',
            minLength: 1,
          },
          userId: {
            type: 'string',
            minLength: 1,
          },
          version: {
            type: 'number',
          },
          workspaceInstance: {
            $ref: '#/components/schemas/WorkspaceInstance',
          },
        },
        required: [
          'createdAt',
          'createdFromTemplate',
          'destroyed',
          'id',
          'pinned',
          'shared',
          'teamId',
          'updatedAt',
          'userId',
          'version',
          'workspaceInstance',
        ],
      },
      GitContext: {
        type: 'object',
        properties: {
          branch: {
            type: 'string',
            description: 'The branch of the repository',
          },
          cloneUrl: {
            type: 'string',
            description: 'The clone url of the repository',
            minLength: 1,
          },
          hasDevContainerConfig: {
            type: 'boolean',
            description: 'Has devcontainer config',
          },
          owner: {
            type: 'string',
            description: 'The owner of the repository',
            minLength: 1,
          },
          path: {
            type: 'string',
            description: 'The path of the repository',
          },
          prNumber: {
            type: 'number',
            description: 'The pull request number of the repository',
          },
          providerId: {
            type: 'string',
            description: 'The id of the git provider',
            minLength: 1,
          },
          repo: {
            type: 'string',
            description: 'The name of the repository',
            minLength: 1,
          },
          sha: {
            type: 'string',
            description: 'The current commit sha of the repository',
            minLength: 1,
          },
          source: {
            type: 'string',
            description: 'The source of the repository',
            minLength: 1,
          },
          webUrl: {
            type: 'string',
            description: 'The web url of the repository',
            minLength: 1,
          },
        },
        required: [
          'cloneUrl',
          'hasDevContainerConfig',
          'owner',
          'providerId',
          'repo',
          'sha',
          'source',
          'webUrl',
        ],
      },
      WorkspaceGitStatus: {
        type: 'object',
        properties: {
          ahead: {
            type: 'integer',
            multipleOf: 1,
          },
          behind: {
            type: 'integer',
            multipleOf: 1,
          },
          current: {
            type: 'string',
          },
          detached: {
            type: 'boolean',
          },
          files: {
            type: 'array',
            items: {
              $ref: '#/components/schemas/WorkspaceFileStatus',
            },
          },
          tracking: {
            type: 'string',
          },
        },
        required: ['ahead', 'behind', 'detached', 'files'],
      },
      WorkspaceFileStatus: {
        type: 'object',
        properties: {
          from: {
            type: 'string',
            description:
              'Original location of the file, when the file has been moved',
          },
          index: {
            type: 'string',
            description:
              "First digit of the status code of the file, e.g. 'M' = modified. Represents the status of the index if no merge conflicts, otherwise represents status of one side of the merge.",
          },
          path: {
            type: 'string',
            description: 'Path of the file',
          },
          workingDir: {
            type: 'string',
            description:
              'Second digit of the status code of the file. Represents status of the working directory if no merge conflicts, otherwise represents status of other side of a merge. ',
          },
        },
      },
      WorkspaceInstance: {
        type: 'object',
        properties: {
          className: {
            type: 'string',
            enum: ['kata', 'sysbox', 'default'],
            minLength: 1,
          },
          clusterId: {
            type: 'string',
            minLength: 1,
          },
          createdAt: {
            type: 'string',
            format: 'date-time',
            minLength: 1,
          },
          error: {
            type: 'string',
          },
          errorLog: {
            type: 'string',
          },
          id: {
            type: 'string',
            minLength: 1,
          },
          lastKeepAliveSignal: {
            type: 'string',
            format: 'date-time',
            minLength: 1,
          },
          startedAt: {
            type: 'string',
            format: 'date-time',
          },
          state: {
            type: 'string',
            enum: [
              'none',
              'initializing',
              'pendingArchive',
              'archiving',
              'archived',
              'pendingCreate',
              'creating',
              'created',
              'pendingRestore',
              'restoring',
              'restored',
              'pendingStop',
              'stopping',
              'stopped',
              'pendingStart',
              'starting',
              'started',
              'pendingDestroy',
              'destroying',
              'destroyed',
              'error',
            ],
            minLength: 1,
          },
          stoppedAt: {
            type: 'string',
            format: 'date-time',
          },
          token: {
            type: 'string',
            minLength: 1,
          },
          updatedAt: {
            type: 'string',
            format: 'date-time',
            minLength: 1,
          },
          version: {
            type: 'number',
          },
          workspaceId: {
            type: 'string',
          },
        },
        required: [
          'className',
          'clusterId',
          'createdAt',
          'id',
          'lastKeepAliveSignal',
          'state',
          'token',
          'updatedAt',
          'version',
        ],
      },
      WorkspaceFromGitRepositoryUrlCreation: {
        type: 'object',
        properties: {
          clusterId: {
            type: 'string',
            description: 'Cluster id',
          },
          createdFromTemplate: {
            type: 'boolean',
            description: 'Is the workspace created from a template?',
          },
          gitRepositoryUrl: {
            type: 'string',
            description: 'Git repository url',
            minLength: 1,
          },
          teamId: {
            type: 'string',
            description: 'Workspace team id',
            minLength: 1,
          },
        },
        required: ['gitRepositoryUrl', 'teamId'],
      },
      WorkspaceList: {
        type: 'object',
        properties: {
          items: {
            type: 'array',
            items: {
              $ref: '#/components/schemas/Workspace',
            },
          },
          total: {
            type: 'number',
          },
        },
        required: ['items', 'total'],
      },
      ActiveWorkspaceCount: {
        type: 'object',
        properties: {
          count: {
            type: 'number',
            description: 'Active workspace count',
          },
        },
        required: ['count'],
      },
      Team: {
        type: 'object',
        properties: {
          hasActiveSubscription: {
            type: 'boolean',
            description: 'Team has active subscription',
          },
          id: {
            type: 'string',
            minLength: 1,
          },
          name: {
            type: 'string',
            description: 'Name',
            minLength: 1,
          },
          privateMembers: {
            type: 'boolean',
            description: 'Private members',
          },
        },
        required: ['hasActiveSubscription', 'id', 'name', 'privateMembers'],
      },
      TeamCreation: {
        type: 'object',
        properties: {
          name: {
            type: 'string',
            description: 'Name',
            minLength: 1,
          },
        },
        required: ['name'],
      },
      TeamInvitationCreation: {
        type: 'object',
        properties: {
          email: {
            type: 'string',
            format: 'email',
            description: 'Email',
            minLength: 1,
          },
          expiresAt: {
            type: 'string',
            format: 'date-time',
            description: 'Expires at',
          },
        },
        required: ['email'],
      },
      SubscriptionCreation: {
        type: 'object',
        properties: {
          disabled: {
            type: 'boolean',
            default: false,
            description: 'Disabled',
          },
          end: {
            type: 'string',
            format: 'date-time',
            description: 'End',
          },
          id: {
            type: 'string',
            description: 'Subscription ID',
          },
          planId: {
            type: 'string',
            description: 'Plan id',
            minLength: 1,
          },
          seats: {
            type: 'number',
            description: 'Max team members',
          },
          start: {
            type: 'string',
            format: 'date-time',
            description: 'Start',
          },
        },
        required: ['planId', 'seats'],
      },
      Subscription: {
        type: 'object',
        properties: {
          disabled: {
            type: 'boolean',
            description: 'Disabled',
          },
          end: {
            type: 'string',
            format: 'date-time',
            description: 'End',
          },
          id: {
            type: 'string',
            minLength: 1,
          },
          plan: {
            $ref: '#/components/schemas/Plan',
          },
          seats: {
            type: 'number',
            description: 'Max team members',
          },
          start: {
            type: 'string',
            format: 'date-time',
            description: 'Start',
            minLength: 1,
          },
          teamId: {
            type: 'string',
            description: 'Team id',
            minLength: 1,
          },
        },
        required: ['disabled', 'id', 'plan', 'seats', 'start', 'teamId'],
      },
      Plan: {
        type: 'object',
        properties: {
          buildCredits: {
            type: 'number',
            description: 'Build credits',
          },
          credits: {
            type: 'number',
            description: 'Workspace credits',
          },
          id: {
            type: 'string',
            minLength: 1,
          },
          inactivityTimeoutInMinutes: {
            type: 'number',
            description: 'Inactivity timeout in minutes',
          },
          name: {
            type: 'string',
            description: 'Name',
            minLength: 1,
          },
          parallelBuilds: {
            type: 'number',
            description: 'Parallel builds',
          },
          parallelWorkspaces: {
            type: 'number',
            description: 'Parallel workspaces',
          },
          pinnedWorkspaces: {
            type: 'number',
            description: 'Limit of pinned workspaces',
          },
        },
        required: [
          'buildCredits',
          'credits',
          'id',
          'inactivityTimeoutInMinutes',
          'name',
          'parallelBuilds',
          'parallelWorkspaces',
          'pinnedWorkspaces',
        ],
      },
      TeamInvitation: {
        type: 'object',
        properties: {
          email: {
            type: 'string',
            format: 'email',
            minLength: 1,
          },
          expiresAt: {
            type: 'string',
            format: 'date-time',
            minLength: 1,
          },
          id: {
            type: 'string',
            description: 'Invitation Id',
            minLength: 1,
          },
          teamId: {
            type: 'string',
            description: 'Team Id',
            minLength: 1,
          },
          teamName: {
            type: 'string',
            description: 'Team name',
            minLength: 1,
          },
          teamOwnerUsername: {
            type: 'string',
            description: 'Team owner username',
          },
        },
        required: ['email', 'expiresAt', 'id', 'teamId', 'teamName'],
      },
      TeamInvitationCount: {
        type: 'object',
        properties: {
          count: {
            type: 'number',
            description: 'Team invitation count',
          },
        },
        required: ['count'],
      },
      TeamUser: {
        type: 'object',
        properties: {
          avatarUrl: {
            type: 'string',
            description: 'AvatarUrl',
          },
          disabled: {
            type: 'boolean',
            description: 'User account disabled flag',
          },
          primaryEmail: {
            type: 'string',
            description: 'Primary email',
            minLength: 1,
          },
          suspendedUntil: {
            type: 'string',
            format: 'date-time',
            description: 'Suspended until',
          },
          suspensionReason: {
            type: 'string',
            description: 'Suspension reason',
          },
          teamRole: {
            type: 'string',
            enum: ['owner', 'admin', 'member'],
            minLength: 1,
          },
          userId: {
            type: 'string',
            description: 'User id',
            minLength: 1,
          },
          username: {
            type: 'string',
            description: 'Name',
            minLength: 1,
          },
        },
        required: ['primaryEmail', 'teamRole', 'userId', 'username'],
      },
      TeamUserRoleUpdate: {
        type: 'object',
        properties: {
          teamRole: {
            type: 'string',
            enum: ['owner', 'admin', 'member'],
            description: 'Team role',
            minLength: 1,
          },
        },
        required: ['teamRole'],
      },
      TeamUpdate: {
        type: 'object',
        properties: {
          name: {
            type: 'string',
            description: 'Team name',
          },
        },
      },
      SubscriptionUpdate: {
        type: 'object',
        properties: {
          end: {
            type: 'string',
            format: 'date-time',
            description: 'End',
          },
          planId: {
            type: 'string',
            description: 'Plan id',
            minLength: 1,
          },
          seats: {
            type: 'number',
            description: 'Max team members',
          },
          start: {
            type: 'string',
            format: 'date-time',
            description: 'Start',
            minLength: 1,
          },
        },
        required: ['planId', 'seats', 'start'],
      },
      PlanCreation: {
        type: 'object',
        properties: {
          buildCredits: {
            type: 'number',
            description: 'Build credits',
          },
          credits: {
            type: 'number',
            description: 'Workspace hours',
          },
          id: {
            type: 'string',
            description: 'Id',
          },
          inactivityTimeoutInMinutes: {
            type: 'number',
            description: 'Inactivity timeout in minutes',
          },
          name: {
            type: 'string',
            description: 'Name',
            minLength: 1,
          },
          parallelBuilds: {
            type: 'number',
            description: 'Parallel builds',
          },
          parallelWorkspaces: {
            type: 'number',
            description: 'Parallel workspaces',
          },
          pinnedWorkspaces: {
            type: 'number',
            description: 'Limit of pinned workspaces',
          },
        },
        required: [
          'buildCredits',
          'credits',
          'inactivityTimeoutInMinutes',
          'name',
          'parallelBuilds',
          'parallelWorkspaces',
          'pinnedWorkspaces',
        ],
      },
      PlanList: {
        type: 'object',
        properties: {
          items: {
            type: 'array',
            items: {
              $ref: '#/components/schemas/Plan',
            },
          },
          total: {
            type: 'number',
          },
        },
        required: ['items', 'total'],
      },
      PlanUpdate: {
        type: 'object',
        properties: {
          buildCredits: {
            type: 'number',
            description: 'Build credits',
          },
          credits: {
            type: 'number',
            description: 'Workspace credits',
          },
          inactivityTimeoutInMinutes: {
            type: 'number',
            description: 'Inactivity timeout in minutes',
          },
          name: {
            type: 'string',
            description: 'Name',
            minLength: 1,
          },
          parallelBuilds: {
            type: 'number',
            description: 'Parallel builds',
          },
          parallelWorkspaces: {
            type: 'number',
            description: 'Parallel workspaces',
          },
          pinnedWorkspaces: {
            type: 'number',
            description: 'Limit of pinned workspaces',
          },
        },
        required: [
          'buildCredits',
          'credits',
          'inactivityTimeoutInMinutes',
          'name',
          'parallelBuilds',
          'parallelWorkspaces',
          'pinnedWorkspaces',
        ],
      },
      WorkspaceUsageSpentCredit: {
        type: 'object',
        properties: {
          credits: {
            type: 'number',
            description: 'Credits spent per minute',
          },
        },
        required: ['credits'],
      },
      WorkspaceUsageList: {
        type: 'object',
        properties: {
          items: {
            type: 'array',
            items: {
              $ref: '#/components/schemas/WorkspaceUsage',
            },
          },
          total: {
            type: 'number',
          },
        },
        required: ['items', 'total'],
      },
      WorkspaceUsage: {
        type: 'object',
        properties: {
          creditsSpentPerMinute: {
            type: 'number',
            description: 'Credits spent per minute',
          },
          teamId: {
            type: 'string',
            description: 'Team Id',
            minLength: 1,
          },
          usagePeriods: {
            type: 'array',
            items: {
              $ref: '#/components/schemas/WorkspaceUsagePeriod',
            },
            description: 'Usage periods',
          },
          userId: {
            type: 'string',
            description: 'User Id',
            minLength: 1,
          },
          workspaceId: {
            type: 'string',
            description: 'Workspace Id',
            minLength: 1,
          },
        },
        required: [
          'creditsSpentPerMinute',
          'teamId',
          'usagePeriods',
          'userId',
          'workspaceId',
        ],
      },
      WorkspaceUsagePeriod: {
        type: 'object',
        properties: {
          creditsSpentPerMinute: {
            type: 'number',
            description: 'Credits spent per minute',
          },
          startedAt: {
            type: 'string',
            description: 'Usage started at',
            minLength: 1,
          },
          stoppedAt: {
            type: 'string',
            description: 'Usage stopped at',
          },
          workspaceInfo: {
            $ref: '#/components/schemas/WorkspaceUsageWorkspaceInfo',
          },
        },
        required: ['creditsSpentPerMinute', 'startedAt', 'workspaceInfo'],
      },
      WorkspaceUsageWorkspaceInfo: {
        type: 'object',
        properties: {
          createdFromTemplate: {
            type: 'boolean',
            description: 'Created from template?',
          },
          gitContext: {
            $ref: '#/components/schemas/GitContext',
          },
          workspaceId: {
            type: 'string',
            description: 'Workspace ID',
            minLength: 1,
          },
        },
        required: ['createdFromTemplate', 'gitContext', 'workspaceId'],
      },
      WorkspaceUsagePeriodList: {
        type: 'object',
        properties: {
          items: {
            type: 'array',
            items: {
              $ref: '#/components/schemas/WorkspaceUsagePeriod',
            },
          },
          total: {
            type: 'number',
          },
        },
        required: ['items', 'total'],
      },
      GitCredentials: {
        type: 'object',
        properties: {
          credentials: {
            $ref: '#/components/schemas/Credentials',
          },
          email: {
            type: 'string',
            description: 'Email',
          },
          username: {
            type: 'string',
            description: 'Username',
            minLength: 1,
          },
        },
        required: ['credentials', 'username'],
      },
      Credentials: {
        type: 'object',
        properties: {
          username: {
            type: 'string',
            description: 'Username',
            minLength: 1,
          },
          password: {
            type: 'string',
            description: 'Password',
            minLength: 1,
          },
        },
        required: ['username', 'password'],
      },
      WorkspaceInstanceStateDTO: {
        type: 'object',
        properties: {
          state: {
            type: 'string',
            enum: [
              'none',
              'initializing',
              'pendingArchive',
              'archiving',
              'archived',
              'pendingCreate',
              'creating',
              'created',
              'pendingRestore',
              'restoring',
              'restored',
              'pendingStop',
              'stopping',
              'stopped',
              'pendingStart',
              'starting',
              'started',
              'pendingDestroy',
              'destroying',
              'destroyed',
              'error',
            ],
            minLength: 1,
          },
        },
        required: ['state'],
      },
      UserConfig: {
        type: 'object',
        properties: {
          dotfilesRepositoryUrl: {
            type: 'string',
            description: 'Dotfiles repository URL',
          },
          primaryEmail: {
            type: 'string',
            description: 'Primary email',
          },
          environmentVariables: {
            type: 'array',
            items: {
              $ref: '#/components/schemas/EnvironmentVariable',
            },
          },
        },
        required: ['environmentVariables'],
      },
      WorkspaceInstanceConfig: {
        type: 'object',
        properties: {
          createdFromTemplate: {
            type: 'boolean',
            description: 'Created from template',
          },
          domain: {
            type: 'string',
            description: 'Domain',
            minLength: 1,
          },
          gitContext: {
            $ref: '#/components/schemas/GitContext',
          },
          gitCredentials: {
            $ref: '#/components/schemas/GitCredentials',
          },
          statusPageUrl: {
            type: 'string',
            description: 'Status page url',
            minLength: 1,
          },
          workspaceId: {
            type: 'string',
            description: 'Workspace id',
            minLength: 1,
          },
        },
        required: [
          'createdFromTemplate',
          'domain',
          'gitContext',
          'gitCredentials',
          'statusPageUrl',
          'workspaceId',
        ],
      },
      WorkspaceInstanceError: {
        type: 'object',
        properties: {
          error: {
            type: 'string',
            minLength: 1,
          },
        },
        required: ['error'],
      },
    },
  },
  security: [
    {
      oauth2: [],
    },
  ],
  paths: {
    '/cluster': {
      post: {
        operationId: 'clusterCreateCluster',
        responses: {
          '200': {
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Cluster',
                },
              },
            },
            description: 'Success',
          },
        },
        parameters: [],
        requestBody: {
          required: false,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ClusterCreation',
              },
            },
          },
        },
        tags: ['Cluster'],
      },
      get: {
        operationId: 'clusterGetClusters',
        responses: {
          '200': {
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/ClusterList',
                },
              },
            },
            description: 'Success',
          },
        },
        parameters: [
          {
            in: 'query',
            name: 'clusterId',
            required: false,
            schema: {
              type: 'string',
            },
          },
          {
            in: 'query',
            name: 'name',
            required: false,
            schema: {
              type: 'string',
            },
          },
          {
            in: 'query',
            name: 'limit',
            required: false,
            schema: {
              type: 'number',
            },
          },
          {
            in: 'query',
            name: 'offset',
            required: false,
            schema: {
              type: 'number',
            },
          },
        ],
        tags: ['Cluster'],
      },
    },
    '/cluster/{clusterId}': {
      delete: {
        operationId: 'clusterDeleteCluster',
        responses: {
          '204': {
            description: 'No Content',
          },
        },
        parameters: [
          {
            in: 'path',
            name: 'clusterId',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        tags: ['Cluster'],
      },
      get: {
        operationId: 'clusterGetCluster',
        responses: {
          '200': {
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Cluster',
                },
              },
            },
            description: 'Success',
          },
        },
        parameters: [
          {
            in: 'path',
            name: 'clusterId',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        tags: ['Cluster'],
      },
    },
    '/user/environment-variables': {
      post: {
        operationId: 'userCreateUserEnvironmentVariable',
        responses: {
          '201': {
            content: {
              '*/*': {
                schema: {
                  type: 'object',
                },
              },
            },
            description: 'Created',
          },
        },
        parameters: [],
        requestBody: {
          required: false,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/EnvironmentVariableCreation',
              },
            },
          },
        },
        tags: ['User'],
      },
      get: {
        operationId: 'userGetUserEnvironmentVariableList',
        responses: {
          '200': {
            content: {
              'application/json': {
                schema: {
                  type: 'array',
                  items: {
                    $ref: '#/components/schemas/EnvironmentVariable',
                  },
                },
              },
            },
            description: 'Success',
          },
        },
        parameters: [],
        tags: ['User'],
      },
    },
    '/user/ssh-keys': {
      post: {
        operationId: 'userCreateUserSshKey',
        responses: {
          '201': {
            content: {
              '*/*': {
                schema: {
                  type: 'object',
                },
              },
            },
            description: 'Created',
          },
        },
        parameters: [],
        requestBody: {
          required: false,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/PublicSSHKeyCreation',
              },
            },
          },
        },
        tags: ['User'],
      },
      get: {
        operationId: 'userGetUserSshKeys',
        responses: {
          '200': {
            content: {
              'application/json': {
                schema: {
                  type: 'array',
                  items: {
                    $ref: '#/components/schemas/PublicSSHKey',
                  },
                },
              },
            },
            description: 'Success',
          },
        },
        parameters: [],
        tags: ['User'],
      },
    },
    '/user': {
      delete: {
        operationId: 'userDeleteUser',
        responses: {
          '204': {
            description: 'No Content',
          },
        },
        parameters: [],
        tags: ['User'],
      },
      get: {
        operationId: 'userGetUser',
        responses: {
          '200': {
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/User',
                },
              },
            },
            description: 'Success',
          },
        },
        parameters: [],
        tags: ['User'],
      },
    },
    '/user/environment-variables/{name}': {
      delete: {
        operationId: 'userDeleteUserEnvironmentVariable',
        responses: {
          '204': {
            description: 'No Content',
          },
        },
        parameters: [
          {
            in: 'path',
            name: 'name',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        tags: ['User'],
      },
      put: {
        operationId: 'userUpdateUserEnvironmentVariable',
        responses: {
          '200': {
            content: {
              '*/*': {
                schema: {
                  type: 'object',
                },
              },
            },
            description: 'Success',
          },
        },
        parameters: [
          {
            in: 'path',
            name: 'name',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        requestBody: {
          required: false,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/EnvironmentVariableUpdate',
              },
            },
          },
        },
        tags: ['User'],
      },
    },
    '/user/ssh-keys/{id}': {
      delete: {
        operationId: 'userDeleteUserSshKey',
        responses: {
          '204': {
            description: 'No Content',
          },
        },
        parameters: [
          {
            in: 'path',
            name: 'id',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        tags: ['User'],
      },
    },
    '/user/public-key': {
      get: {
        operationId: 'userGetPublicSshKey',
        responses: {
          '200': {
            content: {
              '*/*': {
                schema: {
                  type: 'string',
                },
              },
            },
            description: 'Public Key',
          },
        },
        parameters: [],
        tags: ['User'],
      },
    },
    '/user/git-namespaces/{provider}': {
      get: {
        operationId: 'userGetUserGitNamespaces',
        responses: {
          '200': {
            content: {
              'application/json': {
                schema: {
                  type: 'array',
                  items: {
                    $ref: '#/components/schemas/GitNamespace',
                  },
                },
              },
            },
            description: 'Success',
          },
        },
        parameters: [
          {
            in: 'path',
            name: 'provider',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        tags: ['User'],
      },
    },
    '/user/git-repos/{provider}/{namespaceId}': {
      get: {
        operationId: 'userGetUserGitRepos',
        responses: {
          '200': {
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/GitRepositoryList',
                },
              },
            },
            description: 'Success',
          },
        },
        parameters: [
          {
            in: 'path',
            name: 'provider',
            required: true,
            schema: {
              type: 'string',
            },
          },
          {
            in: 'path',
            name: 'namespaceId',
            required: true,
            schema: {
              type: 'string',
            },
          },
          {
            in: 'query',
            name: 'personal',
            required: false,
            schema: {
              type: 'boolean',
            },
          },
          {
            in: 'query',
            name: 'offset',
            required: false,
            schema: {
              type: 'number',
            },
          },
          {
            in: 'query',
            name: 'limit',
            required: false,
            schema: {
              type: 'number',
            },
          },
          {
            in: 'query',
            name: 'query',
            required: false,
            schema: {
              type: 'string',
            },
          },
        ],
        tags: ['User'],
      },
    },
    '/user/default-ide': {
      put: {
        operationId: 'userUpdateUserDefaultIde',
        responses: {
          '200': {
            content: {
              '*/*': {
                schema: {
                  type: 'object',
                },
              },
            },
            description: 'Success',
          },
        },
        parameters: [],
        requestBody: {
          required: false,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/UserUpdateDefaultIde',
              },
            },
          },
        },
        tags: ['User'],
      },
    },
    '/user/dotfiles-repository': {
      put: {
        operationId: 'userUpdateUserDotfilesRepositoryUrl',
        responses: {
          '200': {
            content: {
              '*/*': {
                schema: {
                  type: 'object',
                },
              },
            },
            description: 'Success',
          },
        },
        parameters: [],
        requestBody: {
          required: false,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/UserUpdateDotfilesRepositoryUrl',
              },
            },
          },
        },
        tags: ['User'],
      },
    },
    '/workspace': {
      post: {
        operationId: 'workspaceCreateWorkspace',
        responses: {
          '200': {
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Workspace',
                },
              },
            },
            description: 'Success',
          },
        },
        parameters: [],
        requestBody: {
          required: false,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/WorkspaceFromGitRepositoryUrlCreation',
              },
            },
          },
        },
        tags: ['Workspace'],
      },
      get: {
        operationId: 'workspaceGetWorkspaceList',
        responses: {
          '200': {
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/WorkspaceList',
                },
              },
            },
            description: 'Success',
          },
        },
        parameters: [
          {
            required: true,
            in: 'query',
            name: 'teamId',
            schema: {
              type: 'string',
            },
          },
          {
            in: 'query',
            name: 'workspaceId',
            required: false,
            schema: {
              type: 'string',
            },
          },
          {
            in: 'query',
            name: 'limit',
            required: false,
            schema: {
              type: 'number',
            },
          },
          {
            in: 'query',
            name: 'offset',
            required: false,
            schema: {
              type: 'number',
            },
          },
        ],
        tags: ['Workspace'],
      },
    },
    '/workspace/{id}/destroy': {
      delete: {
        operationId: 'workspaceDestroyWorkspace',
        responses: {
          '200': {
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Workspace',
                },
              },
            },
            description: 'Success',
          },
        },
        parameters: [
          {
            in: 'path',
            name: 'id',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        tags: ['Workspace'],
      },
    },
    '/workspace/{id}': {
      get: {
        operationId: 'workspaceGetWorkspace',
        responses: {
          '200': {
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Workspace',
                },
              },
            },
            description: 'Success',
          },
        },
        parameters: [
          {
            in: 'path',
            name: 'id',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        tags: ['Workspace'],
      },
    },
    '/workspace/{id}/shared': {
      get: {
        operationId: 'workspaceIsWorkspaceShared',
        responses: {
          '200': {
            content: {
              '*/*': {
                schema: {
                  type: 'object',
                },
              },
            },
            description: 'Success',
          },
        },
        parameters: [
          {
            in: 'path',
            name: 'id',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        tags: ['Workspace'],
      },
    },
    '/workspace/{id}/pin': {
      post: {
        operationId: 'workspacePinWorkspace',
        responses: {
          '200': {
            content: {
              '*/*': {
                schema: {
                  type: 'object',
                },
              },
            },
            description: 'Success',
          },
        },
        parameters: [
          {
            in: 'path',
            name: 'id',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        tags: ['Workspace'],
      },
    },
    '/workspace/{id}/share': {
      post: {
        operationId: 'workspaceShareWorkspace',
        responses: {
          '200': {
            content: {
              '*/*': {
                schema: {
                  type: 'object',
                },
              },
            },
            description: 'Success',
          },
        },
        parameters: [
          {
            in: 'path',
            name: 'id',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        tags: ['Workspace'],
      },
    },
    '/workspace/{id}/unpin': {
      post: {
        operationId: 'workspaceUnpinWorkspace',
        responses: {
          '200': {
            content: {
              '*/*': {
                schema: {
                  type: 'object',
                },
              },
            },
            description: 'Success',
          },
        },
        parameters: [
          {
            in: 'path',
            name: 'id',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        tags: ['Workspace'],
      },
    },
    '/workspace/{id}/unshare': {
      post: {
        operationId: 'workspaceUnshareWorkspace',
        responses: {
          '200': {
            content: {
              '*/*': {
                schema: {
                  type: 'object',
                },
              },
            },
            description: 'Success',
          },
        },
        parameters: [
          {
            in: 'path',
            name: 'id',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        tags: ['Workspace'],
      },
    },
    '/workspace-instance/active-workspaces': {
      get: {
        operationId: 'workspaceInstanceGetActiveWorkspaceInstanceCount',
        responses: {
          '200': {
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/ActiveWorkspaceCount',
                },
              },
            },
            description: 'Success',
          },
        },
        parameters: [
          {
            required: true,
            in: 'query',
            name: 'teamId',
            schema: {
              type: 'string',
            },
          },
        ],
        tags: ['WorkspaceInstance'],
      },
    },
    '/workspace-instance/{id}/start': {
      post: {
        operationId: 'workspaceInstanceStartWorkspaceInstance',
        responses: {
          '200': {
            content: {
              '*/*': {
                schema: {
                  type: 'object',
                },
              },
            },
            description: 'Success',
          },
        },
        parameters: [
          {
            in: 'path',
            name: 'id',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        tags: ['WorkspaceInstance'],
      },
    },
    '/workspace-instance/{id}/stop': {
      post: {
        operationId: 'workspaceInstanceStopWorkspaceInstance',
        responses: {
          '200': {
            content: {
              '*/*': {
                schema: {
                  type: 'object',
                },
              },
            },
            description: 'Success',
          },
        },
        parameters: [
          {
            in: 'path',
            name: 'id',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        tags: ['WorkspaceInstance'],
      },
    },
    '/team/{id}/invite/{invitationId}/accept': {
      post: {
        operationId: 'teamAcceptTeamInvitation',
        responses: {
          '200': {
            content: {
              '*/*': {
                schema: {
                  type: 'object',
                },
              },
            },
            description: 'Success',
          },
        },
        parameters: [
          {
            in: 'path',
            name: 'id',
            required: true,
            schema: {
              type: 'string',
            },
          },
          {
            in: 'path',
            name: 'invitationId',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        tags: ['Team'],
      },
    },
    '/team': {
      post: {
        operationId: 'teamCreateTeam',
        responses: {
          '200': {
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Team',
                },
              },
            },
            description: 'Success',
          },
        },
        parameters: [],
        requestBody: {
          required: false,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/TeamCreation',
              },
            },
          },
        },
        tags: ['Team'],
      },
      get: {
        operationId: 'teamGetTeams',
        responses: {
          '200': {
            content: {
              'application/json': {
                schema: {
                  type: 'array',
                  items: {
                    $ref: '#/components/schemas/Team',
                  },
                },
              },
            },
            description: 'Success',
          },
        },
        parameters: [
          {
            in: 'query',
            name: 'role',
            required: false,
            schema: {
              type: 'string',
              enum: ['owner', 'admin', 'member'],
            },
          },
        ],
        tags: ['Team'],
      },
    },
    '/team/{id}/invitation': {
      post: {
        operationId: 'teamCreateTeamInvitation',
        responses: {
          '201': {
            content: {
              '*/*': {
                schema: {
                  type: 'object',
                },
              },
            },
            description: 'Created',
          },
        },
        parameters: [
          {
            in: 'path',
            name: 'id',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/TeamInvitationCreation',
              },
            },
          },
        },
        tags: ['Team'],
      },
      get: {
        operationId: 'teamGetTeamInvitations',
        responses: {
          '200': {
            content: {
              'application/json': {
                schema: {
                  type: 'array',
                  items: {
                    $ref: '#/components/schemas/TeamInvitation',
                  },
                },
              },
            },
            description: 'Success',
          },
        },
        parameters: [
          {
            in: 'path',
            name: 'id',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        tags: ['Team'],
      },
    },
    '/team/{id}/subscriptions': {
      post: {
        operationId: 'teamCreateTeamSubscription',
        responses: {
          '201': {
            content: {
              '*/*': {
                schema: {
                  type: 'object',
                },
              },
            },
            description: 'Created',
          },
        },
        parameters: [
          {
            in: 'path',
            name: 'id',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        requestBody: {
          required: false,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/SubscriptionCreation',
              },
            },
          },
        },
        tags: ['Team'],
      },
      get: {
        operationId: 'teamGetTeamSubscriptionList',
        responses: {
          '200': {
            content: {
              'application/json': {
                schema: {
                  type: 'array',
                  items: {
                    $ref: '#/components/schemas/Subscription',
                  },
                },
              },
            },
            description: 'Success',
          },
        },
        parameters: [
          {
            in: 'path',
            name: 'id',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        tags: ['Team'],
      },
    },
    '/team/{id}': {
      delete: {
        operationId: 'teamDeleteTeam',
        responses: {
          '204': {
            description: 'No Content',
          },
        },
        parameters: [
          {
            in: 'path',
            name: 'id',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        tags: ['Team'],
      },
      get: {
        operationId: 'teamGetTeam',
        responses: {
          '200': {
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Team',
                },
              },
            },
            description: 'Success',
          },
        },
        parameters: [
          {
            in: 'path',
            name: 'id',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        tags: ['Team'],
      },
      patch: {
        operationId: 'teamUpdateTeam',
        responses: {
          '200': {
            content: {
              '*/*': {
                schema: {
                  type: 'object',
                },
              },
            },
            description: 'Success',
          },
        },
        parameters: [
          {
            in: 'path',
            name: 'id',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/TeamUpdate',
              },
            },
          },
        },
        tags: ['Team'],
      },
    },
    '/team/{id}/subscriptions/{subscriptionId}/disable': {
      post: {
        operationId: 'teamDisableTeamSubscription',
        responses: {
          '200': {
            content: {
              '*/*': {
                schema: {
                  type: 'object',
                },
              },
            },
            description: 'Success',
          },
        },
        parameters: [
          {
            in: 'path',
            name: 'id',
            required: true,
            schema: {
              type: 'string',
            },
          },
          {
            in: 'path',
            name: 'subscriptionId',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        tags: ['Team'],
      },
    },
    '/team/{id}/subscriptions/{subscriptionId}/enable': {
      post: {
        operationId: 'teamEnableTeamSubscription',
        responses: {
          '200': {
            content: {
              '*/*': {
                schema: {
                  type: 'object',
                },
              },
            },
            description: 'Success',
          },
        },
        parameters: [
          {
            in: 'path',
            name: 'id',
            required: true,
            schema: {
              type: 'string',
            },
          },
          {
            in: 'path',
            name: 'subscriptionId',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        tags: ['Team'],
      },
    },
    '/team/{id}/subscriptions/active': {
      get: {
        operationId: 'teamGetActiveTeamSubscription',
        responses: {
          '200': {
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Subscription',
                },
              },
            },
            description: 'Success',
          },
        },
        parameters: [
          {
            in: 'path',
            name: 'id',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        tags: ['Team'],
      },
    },
    '/team/invitations': {
      get: {
        operationId: 'teamGetInvitations',
        responses: {
          '200': {
            content: {
              'application/json': {
                schema: {
                  type: 'array',
                  items: {
                    $ref: '#/components/schemas/TeamInvitation',
                  },
                },
              },
            },
            description: 'Success',
          },
        },
        parameters: [],
        tags: ['Team'],
      },
    },
    '/team/invitations/count': {
      get: {
        operationId: 'teamGetInvitationsCount',
        responses: {
          '200': {
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/TeamInvitationCount',
                },
              },
            },
            description: 'Success',
          },
        },
        parameters: [],
        tags: ['Team'],
      },
    },
    '/team/{id}/users': {
      get: {
        operationId: 'teamGetTeamUsers',
        responses: {
          '200': {
            content: {
              'application/json': {
                schema: {
                  type: 'array',
                  items: {
                    $ref: '#/components/schemas/TeamUser',
                  },
                },
              },
            },
            description: 'Success',
          },
        },
        parameters: [
          {
            in: 'path',
            name: 'id',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        tags: ['Team'],
      },
    },
    '/team/{id}/leave': {
      delete: {
        operationId: 'teamLeaveTeam',
        responses: {
          '204': {
            description: 'No Content',
          },
        },
        parameters: [
          {
            in: 'path',
            name: 'id',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        tags: ['Team'],
      },
    },
    '/team/{id}/invite/{invitationId}/reject': {
      post: {
        operationId: 'teamRejectTeamInvitation',
        responses: {
          '200': {
            content: {
              '*/*': {
                schema: {
                  type: 'object',
                },
              },
            },
            description: 'Success',
          },
        },
        parameters: [
          {
            in: 'path',
            name: 'id',
            required: true,
            schema: {
              type: 'string',
            },
          },
          {
            in: 'path',
            name: 'invitationId',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        tags: ['Team'],
      },
    },
    '/team/{id}/invitation/{invitationId}': {
      delete: {
        operationId: 'teamRemoveTeamInvitation',
        responses: {
          '204': {
            description: 'No Content',
          },
        },
        parameters: [
          {
            in: 'path',
            name: 'id',
            required: true,
            schema: {
              type: 'string',
            },
          },
          {
            in: 'path',
            name: 'invitationId',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        tags: ['Team'],
      },
    },
    '/team/{id}/users/{userId}': {
      delete: {
        operationId: 'teamRemoveUserFromTeam',
        responses: {
          '200': {
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Team',
                },
              },
            },
            description: 'Success',
          },
        },
        parameters: [
          {
            in: 'path',
            name: 'id',
            required: true,
            schema: {
              type: 'string',
            },
          },
          {
            in: 'path',
            name: 'userId',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        tags: ['Team'],
      },
      put: {
        operationId: 'teamSetUserTeamRole',
        responses: {
          '201': {
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Team',
                },
              },
            },
            description: 'Created',
          },
        },
        parameters: [
          {
            in: 'path',
            name: 'id',
            required: true,
            schema: {
              type: 'string',
            },
          },
          {
            in: 'path',
            name: 'userId',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/TeamUserRoleUpdate',
              },
            },
          },
        },
        tags: ['Team'],
      },
    },
    '/team/{id}/subscriptions/{subscriptionId}': {
      put: {
        operationId: 'teamUpdateTeamSubscription',
        responses: {
          '200': {
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Subscription',
                },
              },
            },
            description: 'Success',
          },
        },
        parameters: [
          {
            in: 'path',
            name: 'id',
            required: true,
            schema: {
              type: 'string',
            },
          },
          {
            in: 'path',
            name: 'subscriptionId',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        requestBody: {
          required: false,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/SubscriptionUpdate',
              },
            },
          },
        },
        tags: ['Team'],
      },
    },
    '/plan': {
      post: {
        operationId: 'planCreatePlan',
        responses: {
          '200': {
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Plan',
                },
              },
            },
            description: 'Success',
          },
        },
        parameters: [],
        requestBody: {
          required: false,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/PlanCreation',
              },
            },
          },
        },
        tags: ['Plan'],
      },
      get: {
        operationId: 'planGetPlans',
        responses: {
          '200': {
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/PlanList',
                },
              },
            },
            description: 'Success',
          },
        },
        parameters: [
          {
            in: 'query',
            name: 'planId',
            required: false,
            schema: {
              type: 'string',
            },
          },
          {
            in: 'query',
            name: 'name',
            required: false,
            schema: {
              type: 'string',
            },
          },
          {
            in: 'query',
            name: 'limit',
            required: false,
            schema: {
              type: 'number',
            },
          },
          {
            in: 'query',
            name: 'offset',
            required: false,
            schema: {
              type: 'number',
            },
          },
        ],
        tags: ['Plan'],
      },
    },
    '/plan/{planId}': {
      delete: {
        operationId: 'planDeletePlan',
        responses: {
          '204': {
            description: 'No Content',
          },
        },
        parameters: [
          {
            in: 'path',
            name: 'planId',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        tags: ['Plan'],
      },
      get: {
        operationId: 'planGetPlan',
        responses: {
          '200': {
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Plan',
                },
              },
            },
            description: 'Success',
          },
        },
        parameters: [
          {
            in: 'path',
            name: 'planId',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        tags: ['Plan'],
      },
      put: {
        operationId: 'planUpdatePlan',
        responses: {
          '201': {
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Plan',
                },
              },
            },
            description: 'Created',
          },
        },
        parameters: [
          {
            in: 'path',
            name: 'planId',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        requestBody: {
          required: false,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/PlanUpdate',
              },
            },
          },
        },
        tags: ['Plan'],
      },
    },
    '/workspace-usage/credits': {
      get: {
        operationId: 'workspaceUsageGetSpentCredits',
        responses: {
          '200': {
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/WorkspaceUsageSpentCredit',
                },
              },
            },
            description: 'Success',
          },
        },
        parameters: [
          {
            required: true,
            in: 'query',
            name: 'periodStart',
            schema: {
              type: 'string',
              format: 'date-time',
            },
          },
          {
            in: 'query',
            name: 'workspaceId',
            required: false,
            schema: {
              type: 'string',
            },
          },
          {
            in: 'query',
            name: 'periodEnd',
            required: false,
            schema: {
              type: 'string',
              format: 'date-time',
            },
          },
          {
            in: 'query',
            name: 'teamId',
            required: false,
            schema: {
              type: 'string',
            },
          },
        ],
        tags: ['WorkspaceUsage'],
      },
    },
    '/workspace-usage': {
      get: {
        operationId: 'workspaceUsageGetWorkspaceUsageList',
        responses: {
          '200': {
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/WorkspaceUsageList',
                },
              },
            },
            description: 'Success',
          },
        },
        parameters: [
          {
            in: 'query',
            name: 'teamId',
            required: false,
            schema: {
              type: 'string',
            },
          },
          {
            in: 'query',
            name: 'workspaceId',
            required: false,
            schema: {
              type: 'string',
            },
          },
          {
            in: 'query',
            name: 'periodStart',
            required: false,
            schema: {
              type: 'string',
              format: 'date-time',
            },
          },
          {
            in: 'query',
            name: 'periodEnd',
            required: false,
            schema: {
              type: 'string',
              format: 'date-time',
            },
          },
          {
            in: 'query',
            name: 'limit',
            required: false,
            schema: {
              type: 'number',
            },
          },
          {
            in: 'query',
            name: 'offset',
            required: false,
            schema: {
              type: 'number',
            },
          },
        ],
        tags: ['WorkspaceUsage'],
      },
    },
    '/workspace-usage/periods': {
      get: {
        operationId: 'workspaceUsageGetWorkspaceUsagePeriodList',
        responses: {
          '200': {
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/WorkspaceUsagePeriodList',
                },
              },
            },
            description: 'Success',
          },
        },
        parameters: [
          {
            in: 'query',
            name: 'teamId',
            required: false,
            schema: {
              type: 'string',
            },
          },
          {
            in: 'query',
            name: 'workspaceId',
            required: false,
            schema: {
              type: 'string',
            },
          },
          {
            in: 'query',
            name: 'periodStart',
            required: false,
            schema: {
              type: 'string',
              format: 'date-time',
            },
          },
          {
            in: 'query',
            name: 'periodEnd',
            required: false,
            schema: {
              type: 'string',
              format: 'date-time',
            },
          },
          {
            in: 'query',
            name: 'limit',
            required: false,
            schema: {
              type: 'number',
            },
          },
          {
            in: 'query',
            name: 'offset',
            required: false,
            schema: {
              type: 'number',
            },
          },
        ],
        tags: ['WorkspaceUsage'],
      },
    },
    '/workspace-ssh/{id}': {
      get: {
        operationId: 'workspaceSshGetWorkspaceDetails',
        responses: {
          '200': {
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Workspace',
                },
              },
            },
            description: 'Success',
          },
        },
        parameters: [
          {
            in: 'path',
            name: 'id',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        tags: ['WorkspaceSsh'],
      },
    },
    '/workspace-ssh/{id}/keep-alive': {
      post: {
        operationId: 'workspaceSshReceiveKeepAliveSignalFromSsh',
        responses: {
          '200': {
            content: {
              '*/*': {
                schema: {
                  type: 'object',
                },
              },
            },
            description: 'Success',
          },
        },
        parameters: [
          {
            in: 'path',
            name: 'id',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        tags: ['WorkspaceSsh'],
      },
    },
    '/workspace-ssh/{id}/validate/public-key': {
      get: {
        operationId: 'workspaceSshValidatePublicKey',
        responses: {
          '200': {
            content: {
              '*/*': {
                schema: {
                  type: 'object',
                },
              },
            },
            description: 'Success',
          },
        },
        parameters: [
          {
            in: 'path',
            name: 'id',
            required: true,
            schema: {
              type: 'string',
            },
          },
          {
            in: 'query',
            name: 'algo',
            required: false,
            schema: {
              type: 'string',
            },
          },
          {
            in: 'query',
            name: 'blob',
            required: false,
            schema: {
              type: 'string',
            },
          },
          {
            in: 'query',
            name: 'data',
            required: false,
            schema: {
              type: 'string',
            },
          },
          {
            in: 'query',
            name: 'signature',
            required: false,
            schema: {
              type: 'string',
            },
          },
        ],
        tags: ['WorkspaceSsh'],
      },
    },
    '/workspace-ssh/{id}/validate/ssh-token': {
      get: {
        operationId: 'workspaceSshValidateSshToken',
        responses: {
          '200': {
            content: {
              '*/*': {
                schema: {
                  type: 'object',
                },
              },
            },
            description: 'Success',
          },
        },
        parameters: [
          {
            in: 'path',
            name: 'id',
            required: true,
            schema: {
              type: 'string',
            },
          },
          {
            in: 'query',
            name: 'token',
            required: false,
            schema: {
              type: 'string',
            },
          },
        ],
        tags: ['WorkspaceSsh'],
      },
    },
    '/supervisor/git-credentials': {
      get: {
        operationId: 'supervisorGetGitCredentials',
        responses: {
          '200': {
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/GitCredentials',
                },
              },
            },
            description: 'Success',
          },
        },
        security: [
          {
            workspaceToken: [],
          },
        ],
        parameters: [],
        tags: ['Supervisor'],
      },
    },
    '/supervisor/state': {
      get: {
        operationId: 'supervisorGetInstanceState',
        responses: {
          '200': {
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/WorkspaceInstanceStateDTO',
                },
              },
            },
            description: 'Success',
          },
        },
        security: [
          {
            workspaceToken: [],
          },
        ],
        parameters: [],
        tags: ['Supervisor'],
      },
      post: {
        operationId: 'supervisorSetState',
        responses: {
          '200': {
            content: {
              '*/*': {
                schema: {
                  type: 'object',
                },
              },
            },
            description: 'Success',
          },
        },
        security: [
          {
            workspaceToken: [],
          },
        ],
        parameters: [],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/WorkspaceInstanceStateDTO',
              },
            },
          },
        },
        tags: ['Supervisor'],
      },
    },
    '/supervisor/user-config': {
      get: {
        operationId: 'supervisorGetUserConfig',
        responses: {
          '200': {
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/UserConfig',
                },
              },
            },
            description: 'Success',
          },
        },
        security: [
          {
            workspaceToken: [],
          },
        ],
        parameters: [],
        tags: ['Supervisor'],
      },
    },
    '/supervisor/config': {
      get: {
        operationId: 'supervisorGetWorkspaceInstanceConfig',
        responses: {
          '200': {
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/WorkspaceInstanceConfig',
                },
              },
            },
            description: 'Success',
          },
        },
        security: [
          {
            workspaceToken: [],
          },
        ],
        parameters: [],
        tags: ['Supervisor'],
      },
    },
    '/supervisor/keep-alive': {
      post: {
        operationId: 'supervisorReceiveKeepAliveSignal',
        responses: {
          '200': {
            content: {
              '*/*': {
                schema: {
                  type: 'object',
                },
              },
            },
            description: 'Success',
          },
        },
        security: [
          {
            workspaceToken: [],
          },
        ],
        parameters: [],
        tags: ['Supervisor'],
      },
    },
    '/supervisor/error': {
      post: {
        operationId: 'supervisorSetError',
        responses: {
          '200': {
            content: {
              '*/*': {
                schema: {
                  type: 'object',
                },
              },
            },
            description: 'Success',
          },
        },
        security: [
          {
            workspaceToken: [],
          },
        ],
        parameters: [],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/WorkspaceInstanceError',
              },
            },
          },
        },
        tags: ['Supervisor'],
      },
    },
    '/supervisor/git-status': {
      post: {
        operationId: 'supervisorSetGitStatus',
        responses: {
          '200': {
            content: {
              '*/*': {
                schema: {
                  type: 'object',
                },
              },
            },
            description: 'Success',
          },
        },
        security: [
          {
            workspaceToken: [],
          },
        ],
        parameters: [],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/WorkspaceGitStatus',
              },
            },
          },
        },
        tags: ['Supervisor'],
      },
    },
    '/supervisor/user/environment-variables': {
      post: {
        operationId: 'supervisorSupervisorCreateUserEnvironmentVariable',
        responses: {
          '201': {
            content: {
              '*/*': {
                schema: {
                  type: 'object',
                },
              },
            },
            description: 'Created',
          },
        },
        security: [
          {
            workspaceToken: [],
          },
        ],
        parameters: [],
        requestBody: {
          required: false,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/EnvironmentVariableCreation',
              },
            },
          },
        },
        tags: ['Supervisor'],
      },
      get: {
        operationId: 'supervisorSupervisorGetUserEnvironmentVariableList',
        responses: {
          '200': {
            content: {
              'application/json': {
                schema: {
                  type: 'array',
                  items: {
                    $ref: '#/components/schemas/EnvironmentVariable',
                  },
                },
              },
            },
            description: 'Success',
          },
        },
        security: [
          {
            workspaceToken: [],
          },
        ],
        parameters: [],
        tags: ['Supervisor'],
      },
    },
    '/supervisor/user/environment-variables/{name}': {
      delete: {
        operationId: 'supervisorSupervisorDeleteUserEnvironmentVariable',
        responses: {
          '204': {
            description: 'No Content',
          },
        },
        security: [
          {
            workspaceToken: [],
          },
        ],
        parameters: [
          {
            in: 'path',
            name: 'name',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        tags: ['Supervisor'],
      },
      put: {
        operationId: 'supervisorSupervisorUpdateUserEnvironmentVariable',
        responses: {
          '200': {
            content: {
              '*/*': {
                schema: {
                  type: 'object',
                },
              },
            },
            description: 'Success',
          },
        },
        security: [
          {
            workspaceToken: [],
          },
        ],
        parameters: [
          {
            in: 'path',
            name: 'name',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        requestBody: {
          required: false,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/EnvironmentVariableUpdate',
              },
            },
          },
        },
        tags: ['Supervisor'],
      },
    },
    '/supervisor/cluster': {
      get: {
        operationId: 'supervisorSupervisorGetClusters',
        responses: {
          '200': {
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/ClusterList',
                },
              },
            },
            description: 'Success',
          },
        },
        security: [
          {
            workspaceToken: [],
          },
        ],
        parameters: [
          {
            in: 'query',
            name: 'clusterId',
            required: false,
            schema: {
              type: 'string',
            },
          },
          {
            in: 'query',
            name: 'name',
            required: false,
            schema: {
              type: 'string',
            },
          },
          {
            in: 'query',
            name: 'limit',
            required: false,
            schema: {
              type: 'number',
            },
          },
          {
            in: 'query',
            name: 'offset',
            required: false,
            schema: {
              type: 'number',
            },
          },
        ],
        tags: ['Supervisor'],
      },
    },
    '/supervisor/team': {
      get: {
        operationId: 'supervisorSupervisorGetTeams',
        responses: {
          '200': {
            content: {
              'application/json': {
                schema: {
                  type: 'array',
                  items: {
                    $ref: '#/components/schemas/Team',
                  },
                },
              },
            },
            description: 'Success',
          },
        },
        security: [
          {
            workspaceToken: [],
          },
        ],
        parameters: [
          {
            in: 'query',
            name: 'role',
            required: false,
            schema: {
              type: 'string',
              enum: ['owner', 'admin', 'member'],
            },
          },
        ],
        tags: ['Supervisor'],
      },
    },
    '/supervisor/workspace/{id}': {
      get: {
        operationId: 'supervisorSupervisorGetWorkspace',
        responses: {
          '200': {
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Workspace',
                },
              },
            },
            description: 'Success',
          },
        },
        security: [
          {
            workspaceToken: [],
          },
        ],
        parameters: [
          {
            in: 'path',
            name: 'id',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        tags: ['Supervisor'],
      },
    },
    '/supervisor/workspace': {
      get: {
        operationId: 'supervisorSupervisorGetWorkspaceList',
        responses: {
          '200': {
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/WorkspaceList',
                },
              },
            },
            description: 'Success',
          },
        },
        security: [
          {
            workspaceToken: [],
          },
        ],
        parameters: [
          {
            required: true,
            in: 'query',
            name: 'teamId',
            schema: {
              type: 'string',
            },
          },
          {
            in: 'query',
            name: 'workspaceId',
            required: false,
            schema: {
              type: 'string',
            },
          },
          {
            in: 'query',
            name: 'limit',
            required: false,
            schema: {
              type: 'number',
            },
          },
          {
            in: 'query',
            name: 'offset',
            required: false,
            schema: {
              type: 'number',
            },
          },
        ],
        tags: ['Supervisor'],
      },
    },
    '/supervisor/workspace/{id}/pin': {
      post: {
        operationId: 'supervisorSupervisorPinWorkspace',
        responses: {
          '200': {
            content: {
              '*/*': {
                schema: {
                  type: 'object',
                },
              },
            },
            description: 'Success',
          },
        },
        security: [
          {
            workspaceToken: [],
          },
        ],
        parameters: [
          {
            in: 'path',
            name: 'id',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        tags: ['Supervisor'],
      },
    },
    '/supervisor/workspace/{id}/share': {
      post: {
        operationId: 'supervisorSupervisorShareWorkspace',
        responses: {
          '200': {
            content: {
              '*/*': {
                schema: {
                  type: 'object',
                },
              },
            },
            description: 'Success',
          },
        },
        security: [
          {
            workspaceToken: [],
          },
        ],
        parameters: [
          {
            in: 'path',
            name: 'id',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        tags: ['Supervisor'],
      },
    },
    '/supervisor/workspace-instance/{id}/start': {
      post: {
        operationId: 'supervisorSupervisorStartWorkspaceInstance',
        responses: {
          '200': {
            content: {
              '*/*': {
                schema: {
                  type: 'object',
                },
              },
            },
            description: 'Success',
          },
        },
        security: [
          {
            workspaceToken: [],
          },
        ],
        parameters: [
          {
            in: 'path',
            name: 'id',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        tags: ['Supervisor'],
      },
    },
    '/supervisor/workspace-instance/{id}/stop': {
      post: {
        operationId: 'supervisorSupervisorStopWorkspaceInstance',
        responses: {
          '200': {
            content: {
              '*/*': {
                schema: {
                  type: 'object',
                },
              },
            },
            description: 'Success',
          },
        },
        security: [
          {
            workspaceToken: [],
          },
        ],
        parameters: [
          {
            in: 'path',
            name: 'id',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        tags: ['Supervisor'],
      },
    },
    '/supervisor/workspace/{id}/unpin': {
      post: {
        operationId: 'supervisorSupervisorUnpinWorkspace',
        responses: {
          '200': {
            content: {
              '*/*': {
                schema: {
                  type: 'object',
                },
              },
            },
            description: 'Success',
          },
        },
        security: [
          {
            workspaceToken: [],
          },
        ],
        parameters: [
          {
            in: 'path',
            name: 'id',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        tags: ['Supervisor'],
      },
    },
    '/supervisor/workspace/{id}/unshare': {
      post: {
        operationId: 'supervisorSupervisorUnshareWorkspace',
        responses: {
          '200': {
            content: {
              '*/*': {
                schema: {
                  type: 'object',
                },
              },
            },
            description: 'Success',
          },
        },
        security: [
          {
            workspaceToken: [],
          },
        ],
        parameters: [
          {
            in: 'path',
            name: 'id',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        tags: ['Supervisor'],
      },
    },
  },
  tags: [
    {
      name: 'Cluster',
    },
    {
      name: 'User',
    },
    {
      name: 'Workspace',
    },
    {
      name: 'WorkspaceInstance',
    },
    {
      name: 'Team',
    },
    {
      name: 'Plan',
    },
    {
      name: 'WorkspaceUsage',
    },
    {
      name: 'WorkspaceSsh',
    },
    {
      name: 'Supervisor',
    },
  ],
}

export type ApiEndpoint = {
  [route: string]: {
    [method: string]: {
      operationId: string
      responses: {
        [statusCode: string]: {
          content: {
            [contentType: string]: {
              schema: {
                type: string
              }
            }
          }
          description: string
        }
      }
      security: Array<{ [security: string]: string[] }>
      parameters?: Array<{
        in: string
        name: string
        required: boolean
        schema: {
          type: string
        }
      }>
      tags?: string[]
    }
  }
}

const apiEndpoints: ApiEndpoint = {
  '/supervisor/workspace/{id}/unshare': {
    post: {
      operationId: 'supervisorSupervisorUnshareWorkspace',
      responses: {
        '200': {
          content: {
            '*/*': {
              schema: {
                type: 'object',
              },
            },
          },
          description: 'Success',
        },
      },
      security: [
        {
          workspaceToken: [],
        },
      ],
      parameters: [
        {
          in: 'path',
          name: 'id',
          required: true,
          schema: {
            type: 'string',
          },
        },
      ],
      tags: ['Supervisor'],
    },
  },
}

const example: ApiEndpoint[] = [
  {
    '/supervisor/workspace/{id}/unshare': {
      post: {
        operationId: 'supervisorSupervisorUnshareWorkspace',
        responses: {
          '200': {
            content: {
              '*/*': {
                schema: {
                  type: 'object',
                },
              },
            },
            description: 'Success',
          },
        },
        security: [
          {
            workspaceToken: [],
          },
        ],
        parameters: [
          {
            in: 'path',
            name: 'id',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        tags: ['Supervisor'],
      },
    },

    '/supervisor/workspace/{id}/unshar': {
      post: {
        operationId: 'supervisorSupervisorUnshareWorkspace',
        responses: {
          '200': {
            content: {
              '*/*': {
                schema: {
                  type: 'object',
                },
              },
            },
            description: 'Success',
          },
        },
        security: [
          {
            workspaceToken: [],
          },
        ],
        parameters: [
          {
            in: 'path',
            name: 'id',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        tags: ['Supervisor'],
      },
    },
  },
]
// map over it so it can be rendered  the first key is the route and the second is the method
const output = Object.keys(apiEndpoints).map(route => {
  return Object.keys(apiEndpoints[route]).map(method => {
    return { route, method, ...apiEndpoints[route][method].responses[200] }
  })
})
