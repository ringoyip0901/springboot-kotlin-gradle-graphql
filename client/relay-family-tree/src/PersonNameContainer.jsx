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


export default createFragmentContainer(
    PersonNameContainer, {
      getPersonByName: graphql`
            fragment PersonNameContainer_getPersonByName on Person {
                name
              }
        `}
        );
