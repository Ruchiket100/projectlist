import { graphql } from '../gql';
import { request as graphqlRequest } from 'graphql-request';
const baseUrl = 'http://localhost:8000/graphql';

const request = async (query: any, headers: any = {}) => {
  const storage = localStorage.getItem('projectlist-storage');
  const parsedStorage = storage ? JSON.parse(storage) : {};
  const authorizationToken = parsedStorage.auth_token;
  console.log("running request")
  return await graphqlRequest(baseUrl, query, { ...headers })
}

const API = {
  signup: ({ name, email, password }: { name: string, email: string, password: string }) => request(graphql(`mutation Signup($name: String!, $email: String!, $password: String!) {
        signup(name: $name, email: $email, password: $password) {
          message
          success
          token
        }
      }`), { name, email, password }),
  login: ({ username, password }: { username: string, password: string }) => request(graphql(`mutation Login($username: String!, $password: String!) {
        login(username: $username, password: $password) {
          message
          success
          token
        }
      }`), { username, password }),
}

export default API;