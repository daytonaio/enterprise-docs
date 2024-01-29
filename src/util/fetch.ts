
import Oas from 'oas'
import type { Root } from './api-type'
import type { paths } from './generated-api-type'
import type { OASDocument, SchemaObject } from 'oas/types'

// Put this in environment variable
export const url = 'https://api.cde.agency/v3/docs/swagger.json'
export const apiSchema = await fetch(url)
    .then(res => res.json() as unknown as Promise<OASDocument> as Promise<Root>)



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

const responseJson = schema
    .operation("/cluster", "get",)
    .getResponseAsJSONSchema(200, {
        includeDiscriminatorMappingRefs: false,
        transformer: (schema: SchemaObject) => {
            console.log("schema", schema)
            if ("$ref" in schema || typeof schema["$ref"] !== "undefined") {
                const schemaString = schema["$ref"]

                const schemaValue = apiSchema.components?.schemas?.[schema["$ref"].split("/").pop()!]
                schema = schemaValue!
                console.log("schemaString", schemaString)
                console.log("schemaValue", schemaValue)

            }
            return schema
        }
    }).reduce((prev, next) => Object.assign(prev, next), {})

const responseExamples = schema.operation("/cluster", "get").getResponseExamples()

const statusCodes = schema.operation("/cluster", "get").getResponseStatusCodes()

console.log("responseJson", responseJson)
console.log("operation", responseExamples)
console.log("statusCodes", statusCodes)


export function transformResponse(route: keyof paths, method?: string) {

    // in each method we get all the status code if there is more than one
    const getStatusCodes = schema.operation(route, method).getResponseStatusCodes()
    console.log("are you here? ")

    // loop through each status code if there is more than one
    for (const statusCode of getStatusCodes) {

        // get the example json response for each status code
        const responseJson = schema
            .operation(route, method)
            .getResponseAsJSONSchema(statusCode, {
                includeDiscriminatorMappingRefs: false,
                transformer: (schema: SchemaObject) => {
                    console.log("schema2", schema)

                    if ("$ref" in schema || typeof schema["$ref"] !== "undefined") {

                        const schemaString = schema["$ref"]?.split("/").pop()

                        const schemaValue = apiSchema.components?.schemas[schemaString]
                        console.log("schemaValue2", schemaValue)
                        return schemaValue!
                    }


                }
            })

        console.log("responseJson2", responseJson)
    }
}


transformResponse("/cluster", "get")