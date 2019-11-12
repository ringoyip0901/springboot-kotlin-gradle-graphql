import React, { useState } from "react";
import { useQuery, useLazyQuery, useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const GET_ALL_PEOPLE = gql`
 {
   getAllPeople {
     id
     cursor
     name
     image
   }
 }
`

const GET_MORE_PEOPLE = gql`
 {
   getAllPeople {
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
const ADD_PERSON = gql`
  mutation ($name: String!, $image: String) {
    createPerson(name: $name, image: $image) {
      name
      image
    }
  }
`

const DataContainer: React.FC = () => {
  const [variables, setVariables] = useState({ id: "pc" })
  const { loading, error, data, fetchMore } = useQuery(GET_ALL_PEOPLE, {
    pollInterval: 3000
  })
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
      <button onClick={() =>
        fetchMore({
          query: GET_MORE_PEOPLE,
          // variables: { cursor: data.cursor },
          updateQuery: (prevResult, { fetchMoreResult }) => {
            const previous = prevResult.getAllPeople;
            const newResults = fetchMoreResult.getAllPeople;
            const newCursor = fetchMoreResult.getAllPeople.cursor;
            return {
              getAllPeople: [...newResults],
            }
          }
        })}>Show More Family
      </button>
      {/*        <p>{data ? data.getPersonById.name : "No data yet"}</p> */}
      {/*        <img src={data && data.getPersonById.image}></img> */}
      <CreateNewMember />
    </div>
  )
}

const CreateNewMember: React.FC = () => {
  let image: any;
  let id: any;
  let name: any;
  const [addPerson, { data }] = useMutation(ADD_PERSON);
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        addPerson({ variables: { name: name.value, image: image.value } });
        name.value = "";
        image.value = "";
      }}
    >
      <input
        placeholder="Name"
        ref={node => {
          name = node;
        }}
      />
      <input
        placeholder="image"
        ref={node => {
          image = node;
        }}
      />
      <button type="submit">Add Person</button>
    </form>
  )
}

export default DataContainer;