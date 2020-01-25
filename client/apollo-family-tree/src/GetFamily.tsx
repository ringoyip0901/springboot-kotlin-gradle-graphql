import React, { useEffect, useState } from "react";
import { useQuery, useSubscription } from '@apollo/react-hooks';
import CreateNewMember from './CreateNewMember'
import { GET_FAMILY_QUERY } from './queries/Query/getFamilyQuery'
import { GET_FAMILY_SUBSCRIBE } from './queries/Subscriptions/getFamilySubscriptions'

interface Node {
    id: number
    name: string
}

interface GetFamilyQueryEdges {
    edges: Node[]
}

interface GetFamilyQueryData {
    allPeople: GetFamilyQueryEdges;
}

interface GetFamilyVars {
    first: number,
    cursor: string,
    type: TYPE
}

enum TYPE {
    HEROES = "Heroes",
    ROYALTIES = "Royalties"
}

const GetFamily: React.FC = () => {
  const { loading, error, data } = useQuery<GetFamilyQueryData, GetFamilyVars>(GET_FAMILY_QUERY, {
    variables: {
      first: 4,
      cursor: "random",
      type: TYPE.HEROES
    }
  })
  console.log(data)
  if (loading) return <div>Loading...</div>
  if (error) return <div>Error...</div>
  const renderedData = data && data.allPeople.edges;
  return (
    <div>
      {renderedData && renderedData.map((node: any, i: number) =>
        <div key={i}><p key={i}>{node.node.name}</p><img src={node.node.image} /></div>
      )}
      <CreateNewMember />
    </div>
  )
}

export default GetFamily;


