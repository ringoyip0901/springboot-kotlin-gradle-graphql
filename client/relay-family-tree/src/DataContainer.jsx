import React, { useState } from "react";
import { createFragmentContainer } from 'react-relay'
import graphql from 'babel-plugin-relay/macro'
import type { DataContainer_people } from 'relay/DataContainer_people.graphql'

type Props = {
  people: DataContainer_people
}
const DataContainer = (props: Props) => {
  console.log(props)
  return (
    <div>
        Hi
    </div>
  )
}

// const Person = ({name, image}) => {
//     return (
//         <div>{name}</p><img src={image} /></div>
//     )
// }


export default createFragmentContainer(
    DataContainer, {
    people: graphql`
            fragment DataContainer_people on Query {
                getAllPeople(offset: 0) {
                    name
                    id
                }
            }
        `}
        );
