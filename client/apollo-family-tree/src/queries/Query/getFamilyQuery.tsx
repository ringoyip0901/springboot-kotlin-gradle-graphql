import { gql } from 'apollo-boost';

enum TYPE {
  ROYALTIES = "Royalties",
  HEROES = "Heroes"
}

const Royalty_Detail = gql`
    fragment RoyaltyDetail on Royalty {
        id
        name
        image
    }
`

const Hero_Detail = gql`
    fragment Hero_Detail on Hero {
         ability
     }

`

const Basic_Info = gql`
    fragment Basic_Info on Person {
        id
        name
        image
    }
`


const GET_FAMILY_QUERY = gql`
 query ($first: Int, $cursor: String, $type: String){
   allPeople(first: $first, cursor: $cursor, type: $type) {
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

const GET_ALL_HEROES = gql`
    query {
        heroes {
            members {
                id
                name
                image
            }
        }
    }
`
export { GET_FAMILY_QUERY, GET_ALL_HEROES }