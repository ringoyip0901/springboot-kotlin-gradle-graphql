import React, { useEffect, useState } from "react";
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import CreateNewMember from './CreateNewMember'

enum TYPE {
    ROYALTIES,
    HEROES
}

const GET_FAMILY_QUERY = gql`
 query ($first: Int!, $cursor: String, $type: String){
    edges {
        node {
            id
            name
            image
            ...on Royalty {
                title
            }
        }
    }
 }
`

const GetFamily: React.FC = () => {
  const { loading, error, data } = useQuery(GET_FAMILY_QUERY, {
    variables: {
      first: 4,
      cursor: "jasldjfla",
      type: "ROYALTIES"
    }
  })
  console.log(data)
  if (loading) return <div>Loading...</div>
  if (error) return <div>Error...</div>
//   const renderedData = data && data.getEveryone.allPeople.edges;
  return (
    <div>
{/*       {renderedData.map((node: any, i: number) => */}
{/*         <div key={i}><p key={i}>{node.node.name}</p><img src={node.node.image} /></div> */}
{/*       )} */}
{/*       <CreateNewMember /> */}
    </div>
  )
}

export default GetFamily;


