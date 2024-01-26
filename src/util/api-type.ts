export type Root = {
  openapi: string
  info: {
    version: string
    title: string
  }
  components: {
    securitySchemes: {
      oauth2: {
        type: string
        flows: {
          authorizationCode: {
            scopes: {
              openid: string
            }
            authorizationUrl: string
            tokenUrl: string
            refreshUrl: string
          }
        }
      }
      workspaceToken: {
        type: string
        in: string
        name: string
      }
    }
    schemas: {
      Cluster: {
        type: string
        properties: {
          domain: {
            type: string
            description: string
            minLength: number
          }
          id: {
            type: string
            minLength: number
          }
          name: {
            type: string
            description: string
            minLength: number
          }
          region: {
            type: string
            enum: Array<string>
            description: string
          }
        }
        required: Array<string>
      }
      ClusterCreation: {
        type: string
        properties: {
          config: {
            type: string
            description: string
            minLength: number
          }
          domain: {
            type: string
            description: string
            minLength: number
          }
          name: {
            type: string
            description: string
            minLength: number
          }
          region: {
            type: string
            enum: Array<string>
            description: string
            minLength: number
          }
        }
        required: Array<string>
      }
      ClusterList: {
        type: string
        properties: {
          items: {
            type: string
            items: {
              $ref: string
            }
          }
          total: {
            type: string
          }
        }
        required: Array<string>
      }
      EnvironmentVariableCreation: {
        type: string
        properties: {
          name: {
            type: string
            description: string
            minLength: number
          }
          value: {
            type: string
            description: string
            minLength: number
          }
        }
        required: Array<string>
      }
      PublicSSHKeyCreation: {
        type: string
        properties: {
          expiresAt: {
            type: string
            format: string
            description: string
          }
          name: {
            type: string
            example: string
            description: string
            minLength: number
          }
          publicKey: {
            type: string
            description: string
            minLength: number
          }
        }
        required: Array<string>
      }
      User: {
        type: string
        properties: {
          avatarUrl: {
            type: string
            description: string
          }
          disabled: {
            type: string
            description: string
          }
          id: {
            type: string
            description: string
            minLength: number
          }
          markedForDeletion: {
            type: string
            description: string
          }
          preferences: {
            $ref: string
          }
          primaryEmail: {
            type: string
            description: string
            minLength: number
          }
          publicSSHKey: {
            type: string
            description: string
            minLength: number
          }
          username: {
            type: string
            description: string
            minLength: number
          }
        }
        required: Array<string>
      }
      UserPreferences: {
        type: string
        properties: {
          defaultIde: {
            type: string
            enum: Array<string>
            description: string
            minLength: number
          }
          dotfilesRepositoryUrl: {
            type: string
            description: string
          }
        }
        required: Array<string>
      }
      EnvironmentVariable: {
        type: string
        properties: {
          name: {
            type: string
            description: string
            minLength: number
          }
          value: {
            type: string
            description: string
            minLength: number
          }
        }
        required: Array<string>
      }
      GitNamespace: {
        type: string
        properties: {
          id: {
            type: string
            minLength: number
          }
          name: {
            type: string
            minLength: number
          }
          personal: {
            type: string
          }
          provider: {
            type: string
            minLength: number
          }
        }
        required: Array<string>
      }
      GitRepositoryList: {
        type: string
        properties: {
          items: {
            type: string
            items: {
              $ref: string
            }
          }
          total: {
            type: string
          }
        }
        required: Array<string>
      }
      GitRepository: {
        type: string
        properties: {
          fullName: {
            type: string
            minLength: number
          }
          htmlUrl: {
            type: string
            minLength: number
          }
          name: {
            type: string
            minLength: number
          }
        }
        required: Array<string>
      }
      PublicSSHKey: {
        type: string
        properties: {
          addedAt: {
            type: string
            format: string
            description: string
            minLength: number
          }
          expiresAt: {
            type: string
            format: string
            description: string
          }
          id: {
            type: string
            description: string
            minLength: number
          }
          name: {
            type: string
            example: string
            description: string
            minLength: number
          }
        }
        required: Array<string>
      }
      UserUpdateDefaultIde: {
        type: string
        properties: {
          defaultIde: {
            type: string
            enum: Array<string>
            description: string
            minLength: number
          }
        }
        required: Array<string>
      }
      UserUpdateDotfilesRepositoryUrl: {
        type: string
        properties: {
          dotfilesRepositoryUrl: {
            type: string
            description: string
          }
        }
      }
      EnvironmentVariableUpdate: {
        type: string
        properties: {
          name: {
            type: string
            description: string
            minLength: number
          }
          value: {
            type: string
            description: string
            minLength: number
          }
        }
        required: Array<string>
      }
      Workspace: {
        type: string
        properties: {
          createdAt: {
            type: string
            format: string
            minLength: number
          }
          createdFromTemplate: {
            type: string
          }
          destroyed: {
            type: string
          }
          error: {
            type: string
          }
          errorLog: {
            type: string
          }
          gitContext: {
            $ref: string
          }
          gitStatus: {
            $ref: string
          }
          id: {
            type: string
            minLength: number
          }
          pinned: {
            type: string
          }
          shared: {
            type: string
          }
          sshAccessToken: {
            type: string
          }
          teamId: {
            type: string
            minLength: number
          }
          updatedAt: {
            type: string
            format: string
            minLength: number
          }
          userId: {
            type: string
            minLength: number
          }
          version: {
            type: string
          }
          workspaceInstance: {
            $ref: string
          }
        }
        required: Array<string>
      }
      GitContext: {
        type: string
        properties: {
          branch: {
            type: string
            description: string
          }
          cloneUrl: {
            type: string
            description: string
            minLength: number
          }
          hasDevContainerConfig: {
            type: string
            description: string
          }
          owner: {
            type: string
            description: string
            minLength: number
          }
          path: {
            type: string
            description: string
          }
          prNumber: {
            type: string
            description: string
          }
          providerId: {
            type: string
            description: string
            minLength: number
          }
          repo: {
            type: string
            description: string
            minLength: number
          }
          sha: {
            type: string
            description: string
            minLength: number
          }
          source: {
            type: string
            description: string
            minLength: number
          }
          webUrl: {
            type: string
            description: string
            minLength: number
          }
        }
        required: Array<string>
      }
      WorkspaceGitStatus: {
        type: string
        properties: {
          ahead: {
            type: string
            multipleOf: number
          }
          behind: {
            type: string
            multipleOf: number
          }
          current: {
            type: string
          }
          detached: {
            type: string
          }
          files: {
            type: string
            items: {
              $ref: string
            }
          }
          tracking: {
            type: string
          }
        }
        required: Array<string>
      }
      WorkspaceFileStatus: {
        type: string
        properties: {
          from: {
            type: string
            description: string
          }
          index: {
            type: string
            description: string
          }
          path: {
            type: string
            description: string
          }
          workingDir: {
            type: string
            description: string
          }
        }
      }
      WorkspaceInstance: {
        type: string
        properties: {
          className: {
            type: string
            enum: Array<string>
            minLength: number
          }
          clusterId: {
            type: string
            minLength: number
          }
          createdAt: {
            type: string
            format: string
            minLength: number
          }
          error: {
            type: string
          }
          errorLog: {
            type: string
          }
          id: {
            type: string
            minLength: number
          }
          lastKeepAliveSignal: {
            type: string
            format: string
            minLength: number
          }
          startedAt: {
            type: string
            format: string
          }
          state: {
            type: string
            enum: Array<string>
            minLength: number
          }
          stoppedAt: {
            type: string
            format: string
          }
          token: {
            type: string
            minLength: number
          }
          updatedAt: {
            type: string
            format: string
            minLength: number
          }
          version: {
            type: string
          }
          workspaceId: {
            type: string
          }
        }
        required: Array<string>
      }
      WorkspaceFromGitRepositoryUrlCreation: {
        type: string
        properties: {
          clusterId: {
            type: string
            description: string
          }
          createdFromTemplate: {
            type: string
            description: string
          }
          gitRepositoryUrl: {
            type: string
            description: string
            minLength: number
          }
          teamId: {
            type: string
            description: string
            minLength: number
          }
        }
        required: Array<string>
      }
      WorkspaceList: {
        type: string
        properties: {
          items: {
            type: string
            items: {
              $ref: string
            }
          }
          total: {
            type: string
          }
        }
        required: Array<string>
      }
      ActiveWorkspaceCount: {
        type: string
        properties: {
          count: {
            type: string
            description: string
          }
        }
        required: Array<string>
      }
      Team: {
        type: string
        properties: {
          hasActiveSubscription: {
            type: string
            description: string
          }
          id: {
            type: string
            minLength: number
          }
          name: {
            type: string
            description: string
            minLength: number
          }
          privateMembers: {
            type: string
            description: string
          }
        }
        required: Array<string>
      }
      TeamCreation: {
        type: string
        properties: {
          name: {
            type: string
            description: string
            minLength: number
          }
        }
        required: Array<string>
      }
      TeamInvitationCreation: {
        type: string
        properties: {
          email: {
            type: string
            format: string
            description: string
            minLength: number
          }
          expiresAt: {
            type: string
            format: string
            description: string
          }
        }
        required: Array<string>
      }
      SubscriptionCreation: {
        type: string
        properties: {
          disabled: {
            type: string
            default: boolean
            description: string
          }
          end: {
            type: string
            format: string
            description: string
          }
          id: {
            type: string
            description: string
          }
          planId: {
            type: string
            description: string
            minLength: number
          }
          seats: {
            type: string
            description: string
          }
          start: {
            type: string
            format: string
            description: string
          }
        }
        required: Array<string>
      }
      Subscription: {
        type: string
        properties: {
          disabled: {
            type: string
            description: string
          }
          end: {
            type: string
            format: string
            description: string
          }
          id: {
            type: string
            minLength: number
          }
          plan: {
            $ref: string
          }
          seats: {
            type: string
            description: string
          }
          start: {
            type: string
            format: string
            description: string
            minLength: number
          }
          teamId: {
            type: string
            description: string
            minLength: number
          }
        }
        required: Array<string>
      }
      Plan: {
        type: string
        properties: {
          buildCredits: {
            type: string
            description: string
          }
          credits: {
            type: string
            description: string
          }
          id: {
            type: string
            minLength: number
          }
          inactivityTimeoutInMinutes: {
            type: string
            description: string
          }
          name: {
            type: string
            description: string
            minLength: number
          }
          parallelBuilds: {
            type: string
            description: string
          }
          parallelWorkspaces: {
            type: string
            description: string
          }
          pinnedWorkspaces: {
            type: string
            description: string
          }
        }
        required: Array<string>
      }
      TeamInvitation: {
        type: string
        properties: {
          email: {
            type: string
            format: string
            minLength: number
          }
          expiresAt: {
            type: string
            format: string
            minLength: number
          }
          id: {
            type: string
            description: string
            minLength: number
          }
          teamId: {
            type: string
            description: string
            minLength: number
          }
          teamName: {
            type: string
            description: string
            minLength: number
          }
          teamOwnerUsername: {
            type: string
            description: string
          }
        }
        required: Array<string>
      }
      TeamInvitationCount: {
        type: string
        properties: {
          count: {
            type: string
            description: string
          }
        }
        required: Array<string>
      }
      TeamUser: {
        type: string
        properties: {
          avatarUrl: {
            type: string
            description: string
          }
          disabled: {
            type: string
            description: string
          }
          primaryEmail: {
            type: string
            description: string
            minLength: number
          }
          suspendedUntil: {
            type: string
            format: string
            description: string
          }
          suspensionReason: {
            type: string
            description: string
          }
          teamRole: {
            type: string
            enum: Array<string>
            minLength: number
          }
          userId: {
            type: string
            description: string
            minLength: number
          }
          username: {
            type: string
            description: string
            minLength: number
          }
        }
        required: Array<string>
      }
      TeamUserRoleUpdate: {
        type: string
        properties: {
          teamRole: {
            type: string
            enum: Array<string>
            description: string
            minLength: number
          }
        }
        required: Array<string>
      }
      TeamUpdate: {
        type: string
        properties: {
          name: {
            type: string
            description: string
          }
        }
      }
      SubscriptionUpdate: {
        type: string
        properties: {
          end: {
            type: string
            format: string
            description: string
          }
          planId: {
            type: string
            description: string
            minLength: number
          }
          seats: {
            type: string
            description: string
          }
          start: {
            type: string
            format: string
            description: string
            minLength: number
          }
        }
        required: Array<string>
      }
      PlanCreation: {
        type: string
        properties: {
          buildCredits: {
            type: string
            description: string
          }
          credits: {
            type: string
            description: string
          }
          id: {
            type: string
            description: string
          }
          inactivityTimeoutInMinutes: {
            type: string
            description: string
          }
          name: {
            type: string
            description: string
            minLength: number
          }
          parallelBuilds: {
            type: string
            description: string
          }
          parallelWorkspaces: {
            type: string
            description: string
          }
          pinnedWorkspaces: {
            type: string
            description: string
          }
        }
        required: Array<string>
      }
      PlanList: {
        type: string
        properties: {
          items: {
            type: string
            items: {
              $ref: string
            }
          }
          total: {
            type: string
          }
        }
        required: Array<string>
      }
      PlanUpdate: {
        type: string
        properties: {
          buildCredits: {
            type: string
            description: string
          }
          credits: {
            type: string
            description: string
          }
          inactivityTimeoutInMinutes: {
            type: string
            description: string
          }
          name: {
            type: string
            description: string
            minLength: number
          }
          parallelBuilds: {
            type: string
            description: string
          }
          parallelWorkspaces: {
            type: string
            description: string
          }
          pinnedWorkspaces: {
            type: string
            description: string
          }
        }
        required: Array<string>
      }
      WorkspaceUsageSpentCredit: {
        type: string
        properties: {
          credits: {
            type: string
            description: string
          }
        }
        required: Array<string>
      }
      WorkspaceUsageList: {
        type: string
        properties: {
          items: {
            type: string
            items: {
              $ref: string
            }
          }
          total: {
            type: string
          }
        }
        required: Array<string>
      }
      WorkspaceUsage: {
        type: string
        properties: {
          creditsSpentPerMinute: {
            type: string
            description: string
          }
          teamId: {
            type: string
            description: string
            minLength: number
          }
          usagePeriods: {
            type: string
            items: {
              $ref: string
            }
            description: string
          }
          userId: {
            type: string
            description: string
            minLength: number
          }
          workspaceId: {
            type: string
            description: string
            minLength: number
          }
        }
        required: Array<string>
      }
      WorkspaceUsagePeriod: {
        type: string
        properties: {
          creditsSpentPerMinute: {
            type: string
            description: string
          }
          startedAt: {
            type: string
            description: string
            minLength: number
          }
          stoppedAt: {
            type: string
            description: string
          }
          workspaceInfo: {
            $ref: string
          }
        }
        required: Array<string>
      }
      WorkspaceUsageWorkspaceInfo: {
        type: string
        properties: {
          createdFromTemplate: {
            type: string
            description: string
          }
          gitContext: {
            $ref: string
          }
          workspaceId: {
            type: string
            description: string
            minLength: number
          }
        }
        required: Array<string>
      }
      WorkspaceUsagePeriodList: {
        type: string
        properties: {
          items: {
            type: string
            items: {
              $ref: string
            }
          }
          total: {
            type: string
          }
        }
        required: Array<string>
      }
      GitCredentials: {
        type: string
        properties: {
          credentials: {
            $ref: string
          }
          email: {
            type: string
            description: string
          }
          username: {
            type: string
            description: string
            minLength: number
          }
        }
        required: Array<string>
      }
      Credentials: {
        type: string
        properties: {
          username: {
            type: string
            description: string
            minLength: number
          }
          password: {
            type: string
            description: string
            minLength: number
          }
        }
        required: Array<string>
      }
      WorkspaceInstanceStateDTO: {
        type: string
        properties: {
          state: {
            type: string
            enum: Array<string>
            minLength: number
          }
        }
        required: Array<string>
      }
      UserConfig: {
        type: string
        properties: {
          dotfilesRepositoryUrl: {
            type: string
            description: string
          }
          primaryEmail: {
            type: string
            description: string
          }
          environmentVariables: {
            type: string
            items: {
              $ref: string
            }
          }
        }
        required: Array<string>
      }
      WorkspaceInstanceConfig: {
        type: string
        properties: {
          createdFromTemplate: {
            type: string
            description: string
          }
          domain: {
            type: string
            description: string
            minLength: number
          }
          gitContext: {
            $ref: string
          }
          gitCredentials: {
            $ref: string
          }
          statusPageUrl: {
            type: string
            description: string
            minLength: number
          }
          workspaceId: {
            type: string
            description: string
            minLength: number
          }
        }
        required: Array<string>
      }
      WorkspaceInstanceError: {
        type: string
        properties: {
          error: {
            type: string
            minLength: number
          }
        }
        required: Array<string>
      }
    }
  }
  security: Array<{
    oauth2: Array<any>
  }>
  paths: {
    '/cluster': {
      post: {
        operationId: string
        responses: {
          '200': {
            content: {
              'application/json': {
                schema: {
                  $ref: string
                }
              }
            }
            description: string
          }
        }
        parameters: Array<any>
        requestBody: {
          required: boolean
          content: {
            'application/json': {
              schema: {
                $ref: string
              }
            }
          }
        }
        tags: Array<string>
      }
      get: {
        operationId: string
        responses: {
          '200': {
            content: {
              'application/json': {
                schema: {
                  $ref: string
                }
              }
            }
            description: string
          }
        }
        parameters: Array<{
          in: string
          name: string
          required: boolean
          schema: {
            type: string
          }
        }>
        tags: Array<string>
      }
    }
    '/cluster/{clusterId}': {
      delete: {
        operationId: string
        responses: {
          '204': {
            description: string
          }
        }
        parameters: Array<{
          in: string
          name: string
          required: boolean
          schema: {
            type: string
          }
        }>
        tags: Array<string>
      }
      get: {
        operationId: string
        responses: {
          '200': {
            content: {
              'application/json': {
                schema: {
                  $ref: string
                }
              }
            }
            description: string
          }
        }
        parameters: Array<{
          in: string
          name: string
          required: boolean
          schema: {
            type: string
          }
        }>
        tags: Array<string>
      }
    }
    '/user/environment-variables': {
      post: {
        operationId: string
        responses: {
          '201': {
            content: {
              '*/*': {
                schema: {
                  type: string
                }
              }
            }
            description: string
          }
        }
        parameters: Array<any>
        requestBody: {
          required: boolean
          content: {
            'application/json': {
              schema: {
                $ref: string
              }
            }
          }
        }
        tags: Array<string>
      }
      get: {
        operationId: string
        responses: {
          '200': {
            content: {
              'application/json': {
                schema: {
                  type: string
                  items: {
                    $ref: string
                  }
                }
              }
            }
            description: string
          }
        }
        parameters: Array<any>
        tags: Array<string>
      }
    }
    '/user/ssh-keys': {
      post: {
        operationId: string
        responses: {
          '201': {
            content: {
              '*/*': {
                schema: {
                  type: string
                }
              }
            }
            description: string
          }
        }
        parameters: Array<any>
        requestBody: {
          required: boolean
          content: {
            'application/json': {
              schema: {
                $ref: string
              }
            }
          }
        }
        tags: Array<string>
      }
      get: {
        operationId: string
        responses: {
          '200': {
            content: {
              'application/json': {
                schema: {
                  type: string
                  items: {
                    $ref: string
                  }
                }
              }
            }
            description: string
          }
        }
        parameters: Array<any>
        tags: Array<string>
      }
    }
    '/user': {
      delete: {
        operationId: string
        responses: {
          '204': {
            description: string
          }
        }
        parameters: Array<any>
        tags: Array<string>
      }
      get: {
        operationId: string
        responses: {
          '200': {
            content: {
              'application/json': {
                schema: {
                  $ref: string
                }
              }
            }
            description: string
          }
        }
        parameters: Array<any>
        tags: Array<string>
      }
    }
    '/user/environment-variables/{name}': {
      delete: {
        operationId: string
        responses: {
          '204': {
            description: string
          }
        }
        parameters: Array<{
          in: string
          name: string
          required: boolean
          schema: {
            type: string
          }
        }>
        tags: Array<string>
      }
      put: {
        operationId: string
        responses: {
          '200': {
            content: {
              '*/*': {
                schema: {
                  type: string
                }
              }
            }
            description: string
          }
        }
        parameters: Array<{
          in: string
          name: string
          required: boolean
          schema: {
            type: string
          }
        }>
        requestBody: {
          required: boolean
          content: {
            'application/json': {
              schema: {
                $ref: string
              }
            }
          }
        }
        tags: Array<string>
      }
    }
    '/user/ssh-keys/{id}': {
      delete: {
        operationId: string
        responses: {
          '204': {
            description: string
          }
        }
        parameters: Array<{
          in: string
          name: string
          required: boolean
          schema: {
            type: string
          }
        }>
        tags: Array<string>
      }
    }
    '/user/public-key': {
      get: {
        operationId: string
        responses: {
          '200': {
            content: {
              '*/*': {
                schema: {
                  type: string
                }
              }
            }
            description: string
          }
        }
        parameters: Array<any>
        tags: Array<string>
      }
    }
    '/user/git-namespaces/{provider}': {
      get: {
        operationId: string
        responses: {
          '200': {
            content: {
              'application/json': {
                schema: {
                  type: string
                  items: {
                    $ref: string
                  }
                }
              }
            }
            description: string
          }
        }
        parameters: Array<{
          in: string
          name: string
          required: boolean
          schema: {
            type: string
          }
        }>
        tags: Array<string>
      }
    }
    '/user/git-repos/{provider}/{namespaceId}': {
      get: {
        operationId: string
        responses: {
          '200': {
            content: {
              'application/json': {
                schema: {
                  $ref: string
                }
              }
            }
            description: string
          }
        }
        parameters: Array<{
          in: string
          name: string
          required: boolean
          schema: {
            type: string
          }
        }>
        tags: Array<string>
      }
    }
    '/user/default-ide': {
      put: {
        operationId: string
        responses: {
          '200': {
            content: {
              '*/*': {
                schema: {
                  type: string
                }
              }
            }
            description: string
          }
        }
        parameters: Array<any>
        requestBody: {
          required: boolean
          content: {
            'application/json': {
              schema: {
                $ref: string
              }
            }
          }
        }
        tags: Array<string>
      }
    }
    '/user/dotfiles-repository': {
      put: {
        operationId: string
        responses: {
          '200': {
            content: {
              '*/*': {
                schema: {
                  type: string
                }
              }
            }
            description: string
          }
        }
        parameters: Array<any>
        requestBody: {
          required: boolean
          content: {
            'application/json': {
              schema: {
                $ref: string
              }
            }
          }
        }
        tags: Array<string>
      }
    }
    '/workspace': {
      post: {
        operationId: string
        responses: {
          '200': {
            content: {
              'application/json': {
                schema: {
                  $ref: string
                }
              }
            }
            description: string
          }
        }
        parameters: Array<any>
        requestBody: {
          required: boolean
          content: {
            'application/json': {
              schema: {
                $ref: string
              }
            }
          }
        }
        tags: Array<string>
      }
      get: {
        operationId: string
        responses: {
          '200': {
            content: {
              'application/json': {
                schema: {
                  $ref: string
                }
              }
            }
            description: string
          }
        }
        parameters: Array<{
          required: boolean
          in: string
          name: string
          schema: {
            type: string
          }
        }>
        tags: Array<string>
      }
    }
    '/workspace/{id}/destroy': {
      delete: {
        operationId: string
        responses: {
          '200': {
            content: {
              'application/json': {
                schema: {
                  $ref: string
                }
              }
            }
            description: string
          }
        }
        parameters: Array<{
          in: string
          name: string
          required: boolean
          schema: {
            type: string
          }
        }>
        tags: Array<string>
      }
    }
    '/workspace/{id}': {
      get: {
        operationId: string
        responses: {
          '200': {
            content: {
              'application/json': {
                schema: {
                  $ref: string
                }
              }
            }
            description: string
          }
        }
        parameters: Array<{
          in: string
          name: string
          required: boolean
          schema: {
            type: string
          }
        }>
        tags: Array<string>
      }
    }
    '/workspace/{id}/shared': {
      get: {
        operationId: string
        responses: {
          '200': {
            content: {
              '*/*': {
                schema: {
                  type: string
                }
              }
            }
            description: string
          }
        }
        parameters: Array<{
          in: string
          name: string
          required: boolean
          schema: {
            type: string
          }
        }>
        tags: Array<string>
      }
    }
    '/workspace/{id}/pin': {
      post: {
        operationId: string
        responses: {
          '200': {
            content: {
              '*/*': {
                schema: {
                  type: string
                }
              }
            }
            description: string
          }
        }
        parameters: Array<{
          in: string
          name: string
          required: boolean
          schema: {
            type: string
          }
        }>
        tags: Array<string>
      }
    }
    '/workspace/{id}/share': {
      post: {
        operationId: string
        responses: {
          '200': {
            content: {
              '*/*': {
                schema: {
                  type: string
                }
              }
            }
            description: string
          }
        }
        parameters: Array<{
          in: string
          name: string
          required: boolean
          schema: {
            type: string
          }
        }>
        tags: Array<string>
      }
    }
    '/workspace/{id}/unpin': {
      post: {
        operationId: string
        responses: {
          '200': {
            content: {
              '*/*': {
                schema: {
                  type: string
                }
              }
            }
            description: string
          }
        }
        parameters: Array<{
          in: string
          name: string
          required: boolean
          schema: {
            type: string
          }
        }>
        tags: Array<string>
      }
    }
    '/workspace/{id}/unshare': {
      post: {
        operationId: string
        responses: {
          '200': {
            content: {
              '*/*': {
                schema: {
                  type: string
                }
              }
            }
            description: string
          }
        }
        parameters: Array<{
          in: string
          name: string
          required: boolean
          schema: {
            type: string
          }
        }>
        tags: Array<string>
      }
    }
    '/workspace-instance/active-workspaces': {
      get: {
        operationId: string
        responses: {
          '200': {
            content: {
              'application/json': {
                schema: {
                  $ref: string
                }
              }
            }
            description: string
          }
        }
        parameters: Array<{
          required: boolean
          in: string
          name: string
          schema: {
            type: string
          }
        }>
        tags: Array<string>
      }
    }
    '/workspace-instance/{id}/start': {
      post: {
        operationId: string
        responses: {
          '200': {
            content: {
              '*/*': {
                schema: {
                  type: string
                }
              }
            }
            description: string
          }
        }
        parameters: Array<{
          in: string
          name: string
          required: boolean
          schema: {
            type: string
          }
        }>
        tags: Array<string>
      }
    }
    '/workspace-instance/{id}/stop': {
      post: {
        operationId: string
        responses: {
          '200': {
            content: {
              '*/*': {
                schema: {
                  type: string
                }
              }
            }
            description: string
          }
        }
        parameters: Array<{
          in: string
          name: string
          required: boolean
          schema: {
            type: string
          }
        }>
        tags: Array<string>
      }
    }
    '/team/{id}/invite/{invitationId}/accept': {
      post: {
        operationId: string
        responses: {
          '200': {
            content: {
              '*/*': {
                schema: {
                  type: string
                }
              }
            }
            description: string
          }
        }
        parameters: Array<{
          in: string
          name: string
          required: boolean
          schema: {
            type: string
          }
        }>
        tags: Array<string>
      }
    }
    '/team': {
      post: {
        operationId: string
        responses: {
          '200': {
            content: {
              'application/json': {
                schema: {
                  $ref: string
                }
              }
            }
            description: string
          }
        }
        parameters: Array<any>
        requestBody: {
          required: boolean
          content: {
            'application/json': {
              schema: {
                $ref: string
              }
            }
          }
        }
        tags: Array<string>
      }
      get: {
        operationId: string
        responses: {
          '200': {
            content: {
              'application/json': {
                schema: {
                  type: string
                  items: {
                    $ref: string
                  }
                }
              }
            }
            description: string
          }
        }
        parameters: Array<{
          in: string
          name: string
          required: boolean
          schema: {
            type: string
            enum: Array<string>
          }
        }>
        tags: Array<string>
      }
    }
    '/team/{id}/invitation': {
      post: {
        operationId: string
        responses: {
          '201': {
            content: {
              '*/*': {
                schema: {
                  type: string
                }
              }
            }
            description: string
          }
        }
        parameters: Array<{
          in: string
          name: string
          required: boolean
          schema: {
            type: string
          }
        }>
        requestBody: {
          required: boolean
          content: {
            'application/json': {
              schema: {
                $ref: string
              }
            }
          }
        }
        tags: Array<string>
      }
      get: {
        operationId: string
        responses: {
          '200': {
            content: {
              'application/json': {
                schema: {
                  type: string
                  items: {
                    $ref: string
                  }
                }
              }
            }
            description: string
          }
        }
        parameters: Array<{
          in: string
          name: string
          required: boolean
          schema: {
            type: string
          }
        }>
        tags: Array<string>
      }
    }
    '/team/{id}/subscriptions': {
      post: {
        operationId: string
        responses: {
          '201': {
            content: {
              '*/*': {
                schema: {
                  type: string
                }
              }
            }
            description: string
          }
        }
        parameters: Array<{
          in: string
          name: string
          required: boolean
          schema: {
            type: string
          }
        }>
        requestBody: {
          required: boolean
          content: {
            'application/json': {
              schema: {
                $ref: string
              }
            }
          }
        }
        tags: Array<string>
      }
      get: {
        operationId: string
        responses: {
          '200': {
            content: {
              'application/json': {
                schema: {
                  type: string
                  items: {
                    $ref: string
                  }
                }
              }
            }
            description: string
          }
        }
        parameters: Array<{
          in: string
          name: string
          required: boolean
          schema: {
            type: string
          }
        }>
        tags: Array<string>
      }
    }
    '/team/{id}': {
      delete: {
        operationId: string
        responses: {
          '204': {
            description: string
          }
        }
        parameters: Array<{
          in: string
          name: string
          required: boolean
          schema: {
            type: string
          }
        }>
        tags: Array<string>
      }
      get: {
        operationId: string
        responses: {
          '200': {
            content: {
              'application/json': {
                schema: {
                  $ref: string
                }
              }
            }
            description: string
          }
        }
        parameters: Array<{
          in: string
          name: string
          required: boolean
          schema: {
            type: string
          }
        }>
        tags: Array<string>
      }
      patch: {
        operationId: string
        responses: {
          '200': {
            content: {
              '*/*': {
                schema: {
                  type: string
                }
              }
            }
            description: string
          }
        }
        parameters: Array<{
          in: string
          name: string
          required: boolean
          schema: {
            type: string
          }
        }>
        requestBody: {
          required: boolean
          content: {
            'application/json': {
              schema: {
                $ref: string
              }
            }
          }
        }
        tags: Array<string>
      }
    }
    '/team/{id}/subscriptions/{subscriptionId}/disable': {
      post: {
        operationId: string
        responses: {
          '200': {
            content: {
              '*/*': {
                schema: {
                  type: string
                }
              }
            }
            description: string
          }
        }
        parameters: Array<{
          in: string
          name: string
          required: boolean
          schema: {
            type: string
          }
        }>
        tags: Array<string>
      }
    }
    '/team/{id}/subscriptions/{subscriptionId}/enable': {
      post: {
        operationId: string
        responses: {
          '200': {
            content: {
              '*/*': {
                schema: {
                  type: string
                }
              }
            }
            description: string
          }
        }
        parameters: Array<{
          in: string
          name: string
          required: boolean
          schema: {
            type: string
          }
        }>
        tags: Array<string>
      }
    }
    '/team/{id}/subscriptions/active': {
      get: {
        operationId: string
        responses: {
          '200': {
            content: {
              'application/json': {
                schema: {
                  $ref: string
                }
              }
            }
            description: string
          }
        }
        parameters: Array<{
          in: string
          name: string
          required: boolean
          schema: {
            type: string
          }
        }>
        tags: Array<string>
      }
    }
    '/team/invitations': {
      get: {
        operationId: string
        responses: {
          '200': {
            content: {
              'application/json': {
                schema: {
                  type: string
                  items: {
                    $ref: string
                  }
                }
              }
            }
            description: string
          }
        }
        parameters: Array<any>
        tags: Array<string>
      }
    }
    '/team/invitations/count': {
      get: {
        operationId: string
        responses: {
          '200': {
            content: {
              'application/json': {
                schema: {
                  $ref: string
                }
              }
            }
            description: string
          }
        }
        parameters: Array<any>
        tags: Array<string>
      }
    }
    '/team/{id}/users': {
      get: {
        operationId: string
        responses: {
          '200': {
            content: {
              'application/json': {
                schema: {
                  type: string
                  items: {
                    $ref: string
                  }
                }
              }
            }
            description: string
          }
        }
        parameters: Array<{
          in: string
          name: string
          required: boolean
          schema: {
            type: string
          }
        }>
        tags: Array<string>
      }
    }
    '/team/{id}/leave': {
      delete: {
        operationId: string
        responses: {
          '204': {
            description: string
          }
        }
        parameters: Array<{
          in: string
          name: string
          required: boolean
          schema: {
            type: string
          }
        }>
        tags: Array<string>
      }
    }
    '/team/{id}/invite/{invitationId}/reject': {
      post: {
        operationId: string
        responses: {
          '200': {
            content: {
              '*/*': {
                schema: {
                  type: string
                }
              }
            }
            description: string
          }
        }
        parameters: Array<{
          in: string
          name: string
          required: boolean
          schema: {
            type: string
          }
        }>
        tags: Array<string>
      }
    }
    '/team/{id}/invitation/{invitationId}': {
      delete: {
        operationId: string
        responses: {
          '204': {
            description: string
          }
        }
        parameters: Array<{
          in: string
          name: string
          required: boolean
          schema: {
            type: string
          }
        }>
        tags: Array<string>
      }
    }
    '/team/{id}/users/{userId}': {
      delete: {
        operationId: string
        responses: {
          '200': {
            content: {
              'application/json': {
                schema: {
                  $ref: string
                }
              }
            }
            description: string
          }
        }
        parameters: Array<{
          in: string
          name: string
          required: boolean
          schema: {
            type: string
          }
        }>
        tags: Array<string>
      }
      put: {
        operationId: string
        responses: {
          '201': {
            content: {
              'application/json': {
                schema: {
                  $ref: string
                }
              }
            }
            description: string
          }
        }
        parameters: Array<{
          in: string
          name: string
          required: boolean
          schema: {
            type: string
          }
        }>
        requestBody: {
          required: boolean
          content: {
            'application/json': {
              schema: {
                $ref: string
              }
            }
          }
        }
        tags: Array<string>
      }
    }
    '/team/{id}/subscriptions/{subscriptionId}': {
      put: {
        operationId: string
        responses: {
          '200': {
            content: {
              'application/json': {
                schema: {
                  $ref: string
                }
              }
            }
            description: string
          }
        }
        parameters: Array<{
          in: string
          name: string
          required: boolean
          schema: {
            type: string
          }
        }>
        requestBody: {
          required: boolean
          content: {
            'application/json': {
              schema: {
                $ref: string
              }
            }
          }
        }
        tags: Array<string>
      }
    }
    '/plan': {
      post: {
        operationId: string
        responses: {
          '200': {
            content: {
              'application/json': {
                schema: {
                  $ref: string
                }
              }
            }
            description: string
          }
        }
        parameters: Array<any>
        requestBody: {
          required: boolean
          content: {
            'application/json': {
              schema: {
                $ref: string
              }
            }
          }
        }
        tags: Array<string>
      }
      get: {
        operationId: string
        responses: {
          '200': {
            content: {
              'application/json': {
                schema: {
                  $ref: string
                }
              }
            }
            description: string
          }
        }
        parameters: Array<{
          in: string
          name: string
          required: boolean
          schema: {
            type: string
          }
        }>
        tags: Array<string>
      }
    }
    '/plan/{planId}': {
      delete: {
        operationId: string
        responses: {
          '204': {
            description: string
          }
        }
        parameters: Array<{
          in: string
          name: string
          required: boolean
          schema: {
            type: string
          }
        }>
        tags: Array<string>
      }
      get: {
        operationId: string
        responses: {
          '200': {
            content: {
              'application/json': {
                schema: {
                  $ref: string
                }
              }
            }
            description: string
          }
        }
        parameters: Array<{
          in: string
          name: string
          required: boolean
          schema: {
            type: string
          }
        }>
        tags: Array<string>
      }
      put: {
        operationId: string
        responses: {
          '201': {
            content: {
              'application/json': {
                schema: {
                  $ref: string
                }
              }
            }
            description: string
          }
        }
        parameters: Array<{
          in: string
          name: string
          required: boolean
          schema: {
            type: string
          }
        }>
        requestBody: {
          required: boolean
          content: {
            'application/json': {
              schema: {
                $ref: string
              }
            }
          }
        }
        tags: Array<string>
      }
    }
    '/workspace-usage/credits': {
      get: {
        operationId: string
        responses: {
          '200': {
            content: {
              'application/json': {
                schema: {
                  $ref: string
                }
              }
            }
            description: string
          }
        }
        parameters: Array<{
          required: boolean
          in: string
          name: string
          schema: {
            type: string
            format?: string
          }
        }>
        tags: Array<string>
      }
    }
    '/workspace-usage': {
      get: {
        operationId: string
        responses: {
          '200': {
            content: {
              'application/json': {
                schema: {
                  $ref: string
                }
              }
            }
            description: string
          }
        }
        parameters: Array<{
          in: string
          name: string
          required: boolean
          schema: {
            type: string
            format?: string
          }
        }>
        tags: Array<string>
      }
    }
    '/workspace-usage/periods': {
      get: {
        operationId: string
        responses: {
          '200': {
            content: {
              'application/json': {
                schema: {
                  $ref: string
                }
              }
            }
            description: string
          }
        }
        parameters: Array<{
          in: string
          name: string
          required: boolean
          schema: {
            type: string
            format?: string
          }
        }>
        tags: Array<string>
      }
    }
    '/workspace-ssh/{id}': {
      get: {
        operationId: string
        responses: {
          '200': {
            content: {
              'application/json': {
                schema: {
                  $ref: string
                }
              }
            }
            description: string
          }
        }
        parameters: Array<{
          in: string
          name: string
          required: boolean
          schema: {
            type: string
          }
        }>
        tags: Array<string>
      }
    }
    '/workspace-ssh/{id}/keep-alive': {
      post: {
        operationId: string
        responses: {
          '200': {
            content: {
              '*/*': {
                schema: {
                  type: string
                }
              }
            }
            description: string
          }
        }
        parameters: Array<{
          in: string
          name: string
          required: boolean
          schema: {
            type: string
          }
        }>
        tags: Array<string>
      }
    }
    '/workspace-ssh/{id}/validate/public-key': {
      get: {
        operationId: string
        responses: {
          '200': {
            content: {
              '*/*': {
                schema: {
                  type: string
                }
              }
            }
            description: string
          }
        }
        parameters: Array<{
          in: string
          name: string
          required: boolean
          schema: {
            type: string
          }
        }>
        tags: Array<string>
      }
    }
    '/workspace-ssh/{id}/validate/ssh-token': {
      get: {
        operationId: string
        responses: {
          '200': {
            content: {
              '*/*': {
                schema: {
                  type: string
                }
              }
            }
            description: string
          }
        }
        parameters: Array<{
          in: string
          name: string
          required: boolean
          schema: {
            type: string
          }
        }>
        tags: Array<string>
      }
    }
    '/supervisor/git-credentials': {
      get: {
        operationId: string
        responses: {
          '200': {
            content: {
              'application/json': {
                schema: {
                  $ref: string
                }
              }
            }
            description: string
          }
        }
        security: Array<{
          workspaceToken: Array<any>
        }>
        parameters: Array<any>
        tags: Array<string>
      }
    }
    '/supervisor/state': {
      get: {
        operationId: string
        responses: {
          '200': {
            content: {
              'application/json': {
                schema: {
                  $ref: string
                }
              }
            }
            description: string
          }
        }
        security: Array<{
          workspaceToken: Array<any>
        }>
        parameters: Array<any>
        tags: Array<string>
      }
      post: {
        operationId: string
        responses: {
          '200': {
            content: {
              '*/*': {
                schema: {
                  type: string
                }
              }
            }
            description: string
          }
        }
        security: Array<{
          workspaceToken: Array<any>
        }>
        parameters: Array<any>
        requestBody: {
          required: boolean
          content: {
            'application/json': {
              schema: {
                $ref: string
              }
            }
          }
        }
        tags: Array<string>
      }
    }
    '/supervisor/user-config': {
      get: {
        operationId: string
        responses: {
          '200': {
            content: {
              'application/json': {
                schema: {
                  $ref: string
                }
              }
            }
            description: string
          }
        }
        security: Array<{
          workspaceToken: Array<any>
        }>
        parameters: Array<any>
        tags: Array<string>
      }
    }
    '/supervisor/config': {
      get: {
        operationId: string
        responses: {
          '200': {
            content: {
              'application/json': {
                schema: {
                  $ref: string
                }
              }
            }
            description: string
          }
        }
        security: Array<{
          workspaceToken: Array<any>
        }>
        parameters: Array<any>
        tags: Array<string>
      }
    }
    '/supervisor/keep-alive': {
      post: {
        operationId: string
        responses: {
          '200': {
            content: {
              '*/*': {
                schema: {
                  type: string
                }
              }
            }
            description: string
          }
        }
        security: Array<{
          workspaceToken: Array<any>
        }>
        parameters: Array<any>
        tags: Array<string>
      }
    }
    '/supervisor/error': {
      post: {
        operationId: string
        responses: {
          '200': {
            content: {
              '*/*': {
                schema: {
                  type: string
                }
              }
            }
            description: string
          }
        }
        security: Array<{
          workspaceToken: Array<any>
        }>
        parameters: Array<any>
        requestBody: {
          required: boolean
          content: {
            'application/json': {
              schema: {
                $ref: string
              }
            }
          }
        }
        tags: Array<string>
      }
    }
    '/supervisor/git-status': {
      post: {
        operationId: string
        responses: {
          '200': {
            content: {
              '*/*': {
                schema: {
                  type: string
                }
              }
            }
            description: string
          }
        }
        security: Array<{
          workspaceToken: Array<any>
        }>
        parameters: Array<any>
        requestBody: {
          required: boolean
          content: {
            'application/json': {
              schema: {
                $ref: string
              }
            }
          }
        }
        tags: Array<string>
      }
    }
    '/supervisor/user/environment-variables': {
      post: {
        operationId: string
        responses: {
          '201': {
            content: {
              '*/*': {
                schema: {
                  type: string
                }
              }
            }
            description: string
          }
        }
        security: Array<{
          workspaceToken: Array<any>
        }>
        parameters: Array<any>
        requestBody: {
          required: boolean
          content: {
            'application/json': {
              schema: {
                $ref: string
              }
            }
          }
        }
        tags: Array<string>
      }
      get: {
        operationId: string
        responses: {
          '200': {
            content: {
              'application/json': {
                schema: {
                  type: string
                  items: {
                    $ref: string
                  }
                }
              }
            }
            description: string
          }
        }
        security: Array<{
          workspaceToken: Array<any>
        }>
        parameters: Array<any>
        tags: Array<string>
      }
    }
    '/supervisor/user/environment-variables/{name}': {
      delete: {
        operationId: string
        responses: {
          '204': {
            description: string
          }
        }
        security: Array<{
          workspaceToken: Array<any>
        }>
        parameters: Array<{
          in: string
          name: string
          required: boolean
          schema: {
            type: string
          }
        }>
        tags: Array<string>
      }
      put: {
        operationId: string
        responses: {
          '200': {
            content: {
              '*/*': {
                schema: {
                  type: string
                }
              }
            }
            description: string
          }
        }
        security: Array<{
          workspaceToken: Array<any>
        }>
        parameters: Array<{
          in: string
          name: string
          required: boolean
          schema: {
            type: string
          }
        }>
        requestBody: {
          required: boolean
          content: {
            'application/json': {
              schema: {
                $ref: string
              }
            }
          }
        }
        tags: Array<string>
      }
    }
    '/supervisor/cluster': {
      get: {
        operationId: string
        responses: {
          '200': {
            content: {
              'application/json': {
                schema: {
                  $ref: string
                }
              }
            }
            description: string
          }
        }
        security: Array<{
          workspaceToken: Array<any>
        }>
        parameters: Array<{
          in: string
          name: string
          required: boolean
          schema: {
            type: string
          }
        }>
        tags: Array<string>
      }
    }
    '/supervisor/team': {
      get: {
        operationId: string
        responses: {
          '200': {
            content: {
              'application/json': {
                schema: {
                  type: string
                  items: {
                    $ref: string
                  }
                }
              }
            }
            description: string
          }
        }
        security: Array<{
          workspaceToken: Array<any>
        }>
        parameters: Array<{
          in: string
          name: string
          required: boolean
          schema: {
            type: string
            enum: Array<string>
          }
        }>
        tags: Array<string>
      }
    }
    '/supervisor/workspace/{id}': {
      get: {
        operationId: string
        responses: {
          '200': {
            content: {
              'application/json': {
                schema: {
                  $ref: string
                }
              }
            }
            description: string
          }
        }
        security: Array<{
          workspaceToken: Array<any>
        }>
        parameters: Array<{
          in: string
          name: string
          required: boolean
          schema: {
            type: string
          }
        }>
        tags: Array<string>
      }
    }
    '/supervisor/workspace': {
      get: {
        operationId: string
        responses: {
          '200': {
            content: {
              'application/json': {
                schema: {
                  $ref: string
                }
              }
            }
            description: string
          }
        }
        security: Array<{
          workspaceToken: Array<any>
        }>
        parameters: Array<{
          required: boolean
          in: string
          name: string
          schema: {
            type: string
          }
        }>
        tags: Array<string>
      }
    }
    '/supervisor/workspace/{id}/pin': {
      post: {
        operationId: string
        responses: {
          '200': {
            content: {
              '*/*': {
                schema: {
                  type: string
                }
              }
            }
            description: string
          }
        }
        security: Array<{
          workspaceToken: Array<any>
        }>
        parameters: Array<{
          in: string
          name: string
          required: boolean
          schema: {
            type: string
          }
        }>
        tags: Array<string>
      }
    }
    '/supervisor/workspace/{id}/share': {
      post: {
        operationId: string
        responses: {
          '200': {
            content: {
              '*/*': {
                schema: {
                  type: string
                }
              }
            }
            description: string
          }
        }
        security: Array<{
          workspaceToken: Array<any>
        }>
        parameters: Array<{
          in: string
          name: string
          required: boolean
          schema: {
            type: string
          }
        }>
        tags: Array<string>
      }
    }
    '/supervisor/workspace-instance/{id}/start': {
      post: {
        operationId: string
        responses: {
          '200': {
            content: {
              '*/*': {
                schema: {
                  type: string
                }
              }
            }
            description: string
          }
        }
        security: Array<{
          workspaceToken: Array<any>
        }>
        parameters: Array<{
          in: string
          name: string
          required: boolean
          schema: {
            type: string
          }
        }>
        tags: Array<string>
      }
    }
    '/supervisor/workspace-instance/{id}/stop': {
      post: {
        operationId: string
        responses: {
          '200': {
            content: {
              '*/*': {
                schema: {
                  type: string
                }
              }
            }
            description: string
          }
        }
        security: Array<{
          workspaceToken: Array<any>
        }>
        parameters: Array<{
          in: string
          name: string
          required: boolean
          schema: {
            type: string
          }
        }>
        tags: Array<string>
      }
    }
    '/supervisor/workspace/{id}/unpin': {
      post: {
        operationId: string
        responses: {
          '200': {
            content: {
              '*/*': {
                schema: {
                  type: string
                }
              }
            }
            description: string
          }
        }
        security: Array<{
          workspaceToken: Array<any>
        }>
        parameters: Array<{
          in: string
          name: string
          required: boolean
          schema: {
            type: string
          }
        }>
        tags: Array<string>
      }
    }
    '/supervisor/workspace/{id}/unshare': {
      post: {
        operationId: string
        responses: {
          '200': {
            content: {
              '*/*': {
                schema: {
                  type: string
                }
              }
            }
            description: string
          }
        }
        security: Array<{
          workspaceToken: Array<any>
        }>
        parameters: Array<{
          in: string
          name: string
          required: boolean
          schema: {
            type: string
          }
        }>
        tags: Array<string>
      }
    }
  }
  tags: Array<{
    name: string
  }>
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
