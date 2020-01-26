import React, { useState } from "react";
import { useMutation } from '@apollo/react-hooks';
import { GET_FAMILY_QUERY, GET_ALL_HEROES } from './queries/Query/getFamilyQuery'
import {ADD_PERSON} from './queries/Mutations/addPerson'
import { gql } from 'apollo-boost';

const READ_OLD_HEROES = gql`
{
  allPeople(first: 4, cursor: "random", type: "Heroes") {
    edges {
      node {
        id
        name
        image
      }
    }
  }
}
`

const CreateNewMember: React.FC = () => {
  let image: any;
  let name: any;
  const [addPerson, { data }] = useMutation(ADD_PERSON);
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        addPerson({
            variables: {
                input: {
                    name: name.value,
                    image: image.value,
                    type: "Heroes",
                    ability: "New Power"
                }
            },
            optimisticResponse: {
                createPerson: {
                    result: {
                        node: {
                            id: "12345",
                            name: name.value,
                            image: image.value,
                            type: "Heroes",
                            ability: "Optimistic New Power",
                            __typename: "Hero",
                        },
                        __typename: "Edge"
                    },
                    __typename: "MutationPayload"
                }
            },
            update: (proxy, { data: {createPerson} }) => {
                const data: any = proxy.readQuery({ query: READ_OLD_HEROES });
                const newPerson = createPerson.result.node;
                const newData: any = {
                    allPeople: {
                        edges: [...data.allPeople.edges, {
                            node: {
                                ...newPerson,
                            },
                            __typename: "Edge"
                        }],
                        __typename: "PeopleCollection"
                    }
                }
                proxy.writeQuery({query: READ_OLD_HEROES, data: {...newData}});
            },
        });
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

export default CreateNewMember;