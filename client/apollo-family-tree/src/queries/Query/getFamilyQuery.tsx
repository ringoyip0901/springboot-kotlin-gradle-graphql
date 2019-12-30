import { gql } from 'apollo-boost';

enum TYPE {
  ROYALTIES = "Royalties",
  HEROES = "Heroes"
}

const GET_FAMILY_QUERY = gql`
 query ($first: Int, $cursor: String, $type: String){
   allPeople(first: $first, cursor: $cursor, type: $type) {
      edges {
        node {
          id
          name
        }
      }
   }
 }
`
export { GET_FAMILY_QUERY }