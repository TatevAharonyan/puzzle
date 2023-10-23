import {gql} from '@apollo/client';

// Token
export const GET_TOKEN = gql`
  query getToken($log: String!, $password: String!) {
    createTokens(login: $log, password: $password) {
      results {
        TokenPair {
          accessToken
          refreshToken
        }
        ErrorWithFields {
          status
          fields
        }
      }
    }
  }
`;
// входа: login - maxtsurka, password - 123123
