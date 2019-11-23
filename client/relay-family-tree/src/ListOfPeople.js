import React, { useState } from "react";
import { createFragmentContainer, createPaginationContainer, createRefetchContainer } from 'react-relay'
import graphql from 'babel-plugin-relay/macro'

const ListOfPeople = ({list, relay}) => {
  return (
    <div>
        {list.people.map((person, i) => <div key={i}>{person.name}<img src={person.image}></img></div>)}
    </div>
  )
}

export default createFragmentContainer(
    ListOfPeople, {
        list: graphql`
            fragment ListOfPeople_list on AllPeople @argumentDefinitions(name: { type: "String" }) {
                people (name: $name) {
                    id
                    name
                    image

                }
              }
        `}
        );
