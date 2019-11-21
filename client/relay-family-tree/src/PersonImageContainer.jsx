import React, { useState } from "react";
import { createFragmentContainer } from 'react-relay'
import graphql from 'babel-plugin-relay/macro'

const PersonImageContainer = (props) => {
  console.log(props)
  return (
    <div>
        Cool image, bro {props.getPersonByName.image}
    </div>
  )
}

// const Person = ({name, image}) => {
//     return (
//         <div>{name}</p><img src={image} /></div>
//     )
// }


export default createFragmentContainer(
    PersonImageContainer, {
      getPersonByName: graphql`
            fragment PersonImageContainer_getPersonByName on Person {
                image
              }
        `}
        );
