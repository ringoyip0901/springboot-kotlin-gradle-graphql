import { gql } from 'apollo-boost';

const GET_FAMILY_SUBSCRIBE = gql`
  subscription subscribeToFamily($first: Int, $cursor: String) {
    getEveryone(offset: $first) {
        allPeople(first: $first, $cursor: $cursor) {
          edges {
            node {
              id
              name
              image
            }
          }
        }
    }
  }
`

const GET_TIMER = gql`
    subscription getTimerSub {
      timer {
        x
      }
    }
`

export { GET_FAMILY_SUBSCRIBE, GET_TIMER }