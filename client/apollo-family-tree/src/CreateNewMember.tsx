import React, { useState } from "react";
import { useMutation } from '@apollo/react-hooks';
import {ADD_PERSON} from './queries/Mutations/addPerson'

const CreateNewMember: React.FC = () => {
  let image: any;
  let name: any;
  const [addPerson, { data }] = useMutation(ADD_PERSON);
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        addPerson({ variables: { name: name.value, image: image.value } });
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