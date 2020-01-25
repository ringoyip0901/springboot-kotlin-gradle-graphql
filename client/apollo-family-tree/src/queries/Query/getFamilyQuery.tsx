import { gql } from 'apollo-boost';

enum TYPE {
  ROYALTIES = "Royalties",
  HEROES = "Heroes"
}

const Royalty_Detail = gql`
    fragment RoyaltyDetail on Royalty {
        title
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
          ...Basic_Info
          ...Hero_Detail
        }
      }
   }
 }
 ${Hero_Detail}
 ${Basic_Info}
`
export { GET_FAMILY_QUERY }