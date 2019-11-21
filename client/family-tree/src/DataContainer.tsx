import React, { useState } from "react";
import { useQuery, useLazyQuery, useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import CreateNewMember from './CreateNewMember'

const GET_ALL_PEOPLE = gql`
 query ($offset: Int!){
   getAllPeople(offset: $offset) {
     id
     cursor
     name
     image
   }
 }
`

const GET_NAMES = gql`
  query ($id: ID!) {
    getPersonById(id: $id) {
      name
      image
    }
  }
`

const DataContainer: React.FC = () => {
  const [variables, setVariables] = useState({ id: "pc" })
  const { loading, error, data, fetchMore } = useQuery(GET_ALL_PEOPLE, {
    pollInterval: 0,
    variables: {
        offset: 0,

    }
  })
//   const [callQuery, { loading, error, fetchMore, data: {cursor}] = useLazyQuery(GET_ALL_PEOPLE, {
//     pollInterval: 0,
//     variables: {
//         offset: 0,
//     }
//   })
  const onChange = (e: any) => {
    setVariables({
      id: e.target.value
    })
  }
  if (loading) return <div>Loading...</div>
  if (error) return <div>Error...</div>
  return (
    <div>
      <select style={{ display: "none" }} onChange={onChange}>
        <option value={"pc"}>Prince Charles</option>
        <option value={"pw"}>Prince William</option>
        <option value={"qeii"}>Queen Elizabeth</option>
        <option value={"pp"}>Prince Philip</option>
      </select>
      {data && data.getAllPeople.map((person: any, i: number) =>
        <div key={i}><p key={i}>{person.name}</p><img src={person.image} /></div>
      )}
{/*       <button onClick={() => callQuery()}>START</button> */}
      <button onClick={() =>
        fetchMore({
          query: GET_ALL_PEOPLE,
          variables: {
            //offset: data.getAllPeople.length, //this value is the position of the array that fetchMore should start fetching from
            cursor
          },
          updateQuery: (prevResult, { fetchMoreResult }) => {
            const previous = prevResult.getAllPeople;
            const newResults = fetchMoreResult.getAllPeople;
            const newCursor = fetchMoreResult.getAllPeople.cursor;
            console.log("Previous Results: ", previous);
            console.log("New Result: ", newResults)
            return {
              getAllPeople: [...previous, ...newResults],
            }
          }
        })}>Show More Family
      </button>
      <CreateNewMember />
    </div>
  )
}


export default DataContainer;