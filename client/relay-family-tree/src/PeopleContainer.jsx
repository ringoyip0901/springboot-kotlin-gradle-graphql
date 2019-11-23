import React, { useState } from "react";
import { createFragmentContainer } from 'react-relay'
import graphql from 'babel-plugin-relay/macro'

const PeopleContainer = (props) => {
  console.log("PeopleContainer Props: ", props)
  return (
    <div>Hi, I'm version {JSON.stringify(props)}</div>
  )
}

export default createFragmentContainer(
    PeopleContainer, {
    list: graphql`
            fragment PeopleContainer_list on Everyone {
                list {
                    name
                    image
                }
            }
        `}
        );
