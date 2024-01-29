// a smaller sample for testing
export const Sample = {
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
}