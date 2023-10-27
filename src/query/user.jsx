import {gql} from '@apollo/client';

import {WORKING_HOURS} from './fragment';

// Token
export const GET_TOKEN = gql`
  query createTokens($login: String!, $password: String!) {
    createTokens(login: $login, password: $password) {
      __typename
      ... on TokenPair {
        accessToken
      }
      ... on ErrorWithFields {
        status
        fields
      }
    }
  }
`;

// get Me
export const GET_ME = gql`
  ${WORKING_HOURS}
  query GetMe {
    getMe {
      __typename
      ... on User {
        id
        createdAt
        login
        avatar {
          path
          id
        }
        website
        name
        sex
        dateOfBirth
        email
        phone
        description
        additionalInfo {
          hasDelivery
          advantage
        }
        shortDescription
        isBlocked
        viewsCount
        subscriptionsCount
        subscribersCount
        isFollowing
        isLiked
        likesCount

        workingHours {
          __typename
          ... on WeekWorkingHours {
            monday {
              ...DayWorkingHoursFragment
            }
            tuesday {
              ...DayWorkingHoursFragment
            }
            wednesday {
              ...DayWorkingHoursFragment
            }
            thursday {
              ...DayWorkingHoursFragment
            }
            friday {
              ...DayWorkingHoursFragment
            }
            saturday {
              ...DayWorkingHoursFragment
            }
            sunday {
              ...DayWorkingHoursFragment
            }
          }
        }
      }
      ... on BaseError {
        status
      }
    }
  }
`;
