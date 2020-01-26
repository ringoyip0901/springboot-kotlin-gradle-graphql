import { gql } from 'apollo-boost';

const ADD_PERSON = gql`
mutation AddPerson($input: CreatePersonInput) {
  createPerson(input: $input) {
    result {
      node {
        id
        name
      }
    }
  }
}
`

export {ADD_PERSON}