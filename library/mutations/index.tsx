import { gql } from '@apollo/client';

export const POST_LIST_DATA = gql`
  mutation createEvent($date: String!, $int: Int!) {
    createEvent(input: { date: $date, int: $int }) {
      date
      id
      int
    }
  }
`;
