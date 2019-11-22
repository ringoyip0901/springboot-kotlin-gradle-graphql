import React, { useState } from "react";
import { createFragmentContainer, createPaginationContainer } from 'react-relay'
import graphql from 'babel-plugin-relay/macro'

const ListOfPeople = ({list, relay}) => {
  console.log(relay.loadMore)
  return (
    <div>
        {list.people.map((person, i) => <div key={i}>{person.name}<img src={person.image}></img></div>)}
    </div>
  )
}

export default createFragmentContainer(
    ListOfPeople, {
      list: graphql`
            fragment ListOfPeople_list on AllPeople {
                people  {
                    id
                    name
                    image
                }
              }
        `}
        );
