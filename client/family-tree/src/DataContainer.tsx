import React, { useState } from "react";
import { useQuery, useLazyQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

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
  const onChange = (e: any) => {
    setVariables({
      id: e.target.value
    })
  }
  const [getName, { loading, error, data }] = useLazyQuery(GET_NAMES, {
    variables,
    pollInterval: 0,
  });
  if (loading) return <div>Loading...</div>
  if (error) return <div>Error...</div>
  return (
    <div>
      <select onChange={onChange}>
        <option value={"pc"}>Prince Charles</option>
        <option value={"pw"}>Prince William</option>
        <option value={"qeii"}>Queen Elizabeth</option>
        <option value={"pp"}>Prince Philip</option>
      </select>
      <button onClick={() => getName()}>LAZY QUERY BUTTON</button>
      <p>{data ? data.getPersonById.name : "No data yet"}</p>
      <img src={data && data.getPersonById.image}></img>
    </div>
  )
}

export default DataContainer;