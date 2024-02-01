import { GraphQLClient, request, gql } from "graphql-request";

 const  API = async () => {
    const graphqlClient = new GraphQLClient("https://8000-ruchiket100-projectlist-t48686sjsm3.ws-us107.gitpod.io/graphql");
    const query = gql`
    query ExampleQuery($token: String!) {
  verifyGoogleToken(token: "Hello World")
}
`  
    return await  request("/",query)

}

export default API;