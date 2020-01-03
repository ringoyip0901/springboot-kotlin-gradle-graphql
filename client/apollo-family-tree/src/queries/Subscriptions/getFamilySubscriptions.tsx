import { gql } from 'apollo-boost';

const GET_FAMILY_SUBSCRIBE = gql`
    subscription($first: Int, $cursor: String, $type: String) {
      subscribeToPeople(first: $first, cursor: $cursor, type: $type) {
        edges {
          node {
            id
            name
          }
        }
      }
    }
`

export { GET_FAMILY_SUBSCRIBE }