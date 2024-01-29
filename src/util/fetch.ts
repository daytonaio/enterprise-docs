
import Oas from 'oas'
import type { Root } from './api-type'
import type { paths } from './generated-types'
import type { OASDocument, SchemaObject } from 'oas/types'

// Put this in environment variable
export const url = 'https://api.cde.agency/v3/docs/swagger.json'
export const apiSchema = await fetch(url)
    .then(res => res.json() as unknown as Promise<Root>)



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



// This returns all the response examples for a given method in a route
const responseExamples = schema.operation("/cluster", "get").getResponseExamples()

// This returns all status code for a given method in a route
// const statusCodes = schema.operation("/cluster", "get").getResponseStatusCodes()

function getSchema(refValue: string) {
    const schemaString = refValue.split("/").pop()
    return apiSchema.components?.schemas[schemaString]
}

let family = {
    parent: "",
    children: "",
    isRef: false,
    assigned: false,
}

let indice: any

// A function to resolve circular reference in the schema, still WIP
function getRef(obj: any, pram: number) {

    const keys = Object.keys(obj)

    // in this map we store the keys and depth of nodes that we have visited
    // console.log("layer level", pram)
    try {
        // for every keys in the object
        for (const key of keys) {

            // check if the key is $ref, if we don't get this key, continue
            // console.log(key === "$ref")

            if (key === "$ref") {

                // if it is return the value of the key and strip it to get the schema
                const schemaValue = getSchema(obj[key])

                // current: if gitContext's key is ref, then key "Ref" value should be the schema

                // Should be: if gitContext's key is ref, then object["gitContex"] = schema
                obj[key] = schemaValue

            }

            if (key !== "$ref" && typeof obj[key] === "object") {

                // console.log(pram, "indices -> ", indice)
                // if it is not a $ref and it is an object
                // get the object and call the function again to check if there is a $ref in keys
                const newObj = obj[key]

                getRef(newObj, pram + 1)

            }
        }
    } catch (error) {
        console.log(error)
    }
    return obj
}


export function transformResponse(route: keyof paths, method?: string) {

    // in each method we get all the status code if there is more than one
    const getStatusCodes = schema.operation(route, method).getResponseStatusCodes()
    let schemaObject: SchemaObject | undefined

    // loop through each status code if there is more than one
    for (const statusCode of getStatusCodes) {

        // get the example json response for each status code
        const transformedResponseJson = schema
            .operation(route, method)
            .getResponseAsJSONSchema(statusCode, {
                transformer: (schema: SchemaObject) => {


                    // if the schema has a $ref key
                    if ("$ref" in schema || typeof schema["$ref"] !== "undefined") {

                        // get the value of the $ref key
                        const schemaString = schema["$ref"]?.split("/").pop()

                        // get the schema of the value of the $ref key
                        const schemaValue = apiSchema.components?.schemas[schemaString]

                        // assign it back to the schema in response body
                        schema = schemaValue

                        schemaObject = schemaValue
                        // console.log("schemaObject", schemaObject)
                        return schemaObject
                    }


                }
            }
            )
        const originalSchema = schema.operation(route, method).getResponseAsJSONSchema(statusCode) ?? { description: "No Content" }

        return schemaObject ?? originalSchema


    }
}

//console.log("transformResponse", transformResponse("/workspace", "post"))

const useGetRef = getRef(transformResponse("/workspace", "post"), 0)
// console.log("useGetRef", useGetRef)     

export function getStatusCodes(route: keyof paths, method?: string) {
    return schema.operation(route, method).getResponseStatusCodes()
}

export const returnSchema = apiSchema.components?.schemas

