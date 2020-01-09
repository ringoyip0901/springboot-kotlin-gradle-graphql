import { gql } from 'apollo-boost';

const ADD_PERSON = gql`
  mutation ($name: String!, $image: String) {
    createPerson(name: $name, image: $image) {
        edges {
            node {
                id
                name
                image
            }
        }
    }
  }
`

export {ADD_PERSON}