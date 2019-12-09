import React, {useState} from 'react';
import {requestSubscription} from 'react-relay';
import {ConnectionHandler} from 'relay-runtime';
import graphql from 'babel-plugin-relay/macro';
import environment from './relayEnvir.ts';

const newMemberSubscription = graphql`
  subscription SubscribeToFamilySubscription {
    subscribeToFamily {
     edges {
       node {
         id
         name
         image
       }
     }
    }
  }
`;

export default () => {
  const subscriptionConfig = {
    subscription: newMemberSubscription,
    variables: {},
    onCompleted: data => console.log ('in subs: ', data),
//     updater: proxyStore => {
//       console.log(proxyStore)
//       const createEdgesField = proxyStore.getRootField ('subscribeToFamily');
//       const newEdges = createEdgesField.getLinkedRecord ('edges');
//       const conn = ConnectionHandler.getConnection (
//         proxyStore.getRoot (),
//         'ListOfPeoplePagination_allPeople'
//       );
//       const edge = ConnectionHandler.createEdge (
//         proxyStore,
//         conn,
//         newEdges,
//         'edge'
//       );
//       ConnectionHandler.insertEdgeAfter (conn, edge);
//     },
    onError: error => console.log (`An error occured:`, error),
  };
  requestSubscription (environment, subscriptionConfig);
};
