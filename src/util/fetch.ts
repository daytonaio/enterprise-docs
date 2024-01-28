
import Oas from 'oas'
import type { Root } from './api-type'

import type { OASDocument } from 'oas/types'

// Put this in environment variable
export const url = 'https://api.cde.agency/v3/docs/swagger.json'
export const apiSchema = await fetch(url)
    .then(res => res.json() as unknown as Promise<OASDocument>)

export const schema = new Oas(apiSchema)

export const version = schema.getVersion()

export const authObject = apiSchema?.components?.securitySchemes

export const auth = {
    oauth: Object.keys(authObject!)[0],
    apiKey: Object.keys(authObject!)[1],
}

export const oauth = {
    type: authObject![auth.oauth].type! as string,
    scope: Object.values(authObject?.oauth2.flows!.authorizationCode.scopes)[0],
    authUrl: 'https://id.daytona.domain.com/realms/default/protocol/openid-connect/auth',
    tokenUrl: 'https://id.daytona.domain.com/realms/default/protocol/openid-connect/token',
    refreshUrl: 'https://id.daytona.domain.com/realms/default/protocol/openid-connect/token',
}

const apiKey = {
    type: authObject![auth.apiKey].type! as string,
    in: authObject![auth.apiKey].in as string,
    name: authObject![auth.apiKey].name as string,
}

