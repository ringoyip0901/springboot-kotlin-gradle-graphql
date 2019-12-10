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
  console.log("subscribe to fam");
  const subscriptionConfig = {
    subscription: newMemberSubscription,
    variables: {},
    onCompleted: data => console.log ('in subs: ', data),
    onNext: response => console.log(response),
    updater: proxyStore => {
      console.log("Store: ", proxyStore)
      const rootField = proxyStore.getRootField("subscribeToFamily");
      console.log("root: ", rootField);
      const edges = rootField.getLinkedRecords("edges")
      console.log("edges: ", edges)
      const newFamilyTree = proxyStore.getRoot().getLinkedRecord("subscribeToFamily")
      console.log("newFamilyTree: ", newFamilyTree);
      const edgesRecords = newFamilyTree.getLinkedRecords("edges")
      console.log("Record edges: ", edgesRecords)
      const theLastPersonName = edgesRecords[edgesRecords.length - 1].getLinkedRecord("node").getValue("name")
      console.log(theLastPersonName);
      // const connectToFamily = ConnectionHandler.getConnection(newFamilyTree, "ListOfPeoplePagination_allPeople")
      // console.log("connectToFamily: ",  connectToFamily)
      // const family = proxyStore.getRoot().getLinkedRecord("paginatedList")
      // console.log("Family: ", family)
      // const createEdgesField = proxyStore.getRootField('subscribeToFamily');
      // console.log("create edges: ", createEdgesField);
      // const newEdges = createEdgesField.getLinkedRecords("edges");
      // const conn = ConnectionHandler.getConnection (
      //   allPeople,
      //   'ListOfPeoplePagination_allPeople'
      // );
      // console.log("conn: ", conn);
      // const edge = ConnectionHandler.createEdge (
      //   proxyStore,
      //   conn,
      //   newEdges,
      //   'edge'
      // );
      // ConnectionHandler.insertEdgeAfter (conn, edge);
      // const connectToFamily = ConnectionHandler.getConnection(proxyStore.getRoot().getLinkedRecord("getEveryone"), "ListOfPeoplePagination_allPeople")
      // console.log("connectToFamily: ", connectToFamily)
    },
    onError: error => console.log (`An error occured:`, error),
  };
  requestSubscription (environment, subscriptionConfig);
};
