import {gql} from "graphql-request";


export const verifyUserQuery = gql`
query verifyUser($token: String!) {
	verifyGoogleToken(token: $token)
}`