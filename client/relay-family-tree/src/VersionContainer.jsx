import React, { useState } from "react";
import { createFragmentContainer } from 'react-relay'
import graphql from 'babel-plugin-relay/macro'

const VersionContainer = (props) => {
  console.log("VersionContainer Props: ", props)
  return (
    <div>Hi, I'm version {JSON.stringify(props)}</div>
  )
}

export default createFragmentContainer(
    VersionContainer, {
    version: graphql`
            fragment VersionContainer_version on Version {
              previous,
              current
            }
        `}
        );
