import { GraphQLClient } from "graphql-request";

import { createUserMutation,getUserQuery} from "@/graphql";
import { ProjectForm } from "@/common.types";

const isProduction = process.env.NODE_ENV === 'production';
const apiUrl = isProduction ? process.env.NEXT_PUBLIC_GRAFBASE_API_URL || '' : 'http://127.0.0.1:4000/graphql';
const apiKey = isProduction ? process.env.NEXT_PUBLIC_GRAFBASE_API_KEY || '' : 'letmein';
const serverUrl = isProduction ? process.env.NEXT_PUBLIC_SERVER_URL : 'http://localhost:3000';

const client = new GraphQLClient(apiUrl);



const makeGraphQLRequest = async(query:string,varaibles={})=>{
    try {
        return await client.request(query,varaibles);
    } catch (error) {
        throw error;
    }
}

export const getUser = (email:string)=>{
    client.setHeader("x-api-key", apiKey);
    return makeGraphQLRequest(getUserQuery,{email })
}

export const createUser = (name:string,email:string,avatarUrl:string) =>{
    client.setHeader('x-api-key',apiKey);
    const varaibles = {
        input:{
            name,email,avatarUrl
        }
    }
    return makeGraphQLRequest(createUserMutation,{varaibles })
}