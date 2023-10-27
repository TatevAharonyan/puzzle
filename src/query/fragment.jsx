import {gql} from '@apollo/client';

export const WORKING_HOURS = gql`
  fragment DayWorkingHoursFragment on DayWorkingHours {
    __typename
    ... on DayWorkingHours {
      status
      hours {
        __typename
        ... on WorkingHours {
          opensAt
          closesAt
        }
      }
    }
  }
`;
