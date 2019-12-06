import React, {useState} from 'react';
import {commitMutation} from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import environment from "./relayEnvir";

const mutation = graphql`
    mutation CreateNewMemberMutation {
    createPerson(name: "fake queen", image: "random image") {
        edges {
            cursor
            node {
                id
                name
            }
        }
    }
}`;

const createNewMember = (name, image, callback) => {
    const variables = {
        input: {
            name,
            image
        }
    };
    commitMutation(environment,
        {
            mutation,
            variables,
            onCompleted: () => {
                callback()
            },
            onError: err => console.error(err)
        })
};

const CreateNewMember = () => {
    const _createMember = () => {
        createNewMember("Fake Queen", "Image of Fake Queen", () => console.log("Mutation Completed"))
    }
    return (
        <button onClick={() => _createMember()}>Add One More Queen</button>
    )
}

export default CreateNewMember;