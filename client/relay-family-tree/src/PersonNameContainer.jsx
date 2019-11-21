import React, { useState } from "react";
import { createFragmentContainer } from 'react-relay'
import graphql from 'babel-plugin-relay/macro'

const PersonNameContainer = (props) => {
  console.log(props)
  return (
    <div>
        Hi {props.getPersonByName.name}
    </div>
  )
}

// const Person = ({name, image}) => {
//     return (
//         <div>{name}</p><img src={image} /></div>
//     )
// }


export default createFragmentContainer(
    PersonNameContainer, {
      getPersonByName: graphql`
            fragment PersonNameContainer_getPersonByName on Person {
                name
              }
        `}
        );
