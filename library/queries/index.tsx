import { gql } from '@apollo/client';

export const GET_LIST_DATA = gql`
  query GetEvents {
    events {
      date
      id
      int
    }
  }
`;
