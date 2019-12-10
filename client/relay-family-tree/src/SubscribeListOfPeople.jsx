// import React, {useState, useEffect} from 'react';
// import {createPaginationContainer, requestSubscription} from 'react-relay';
// import graphql from 'babel-plugin-relay/macro';
// import {ConnectionHandler} from "relay-runtime";
// import environment from "./relayEnvir";
//
// let totalCount = 1;
//
// const subscriptionQuery = graphql`
//     subscription SubscribeListOfPeopleSubscription {
//         subscribeToFamily {
//             edges {
//                 node {
//                     id
//                     name
//                     image
//                 }
//             }
//         }
//     }
// `
//
// const loadSubscription = () => {
//     const subscriptionConfig = {
//         subscription: subscriptionQuery,
//         variables: {},
//         onCompleted: data => console.log ('in subs: ', data),
//         onNext: response => console.log(response),
//         updater: proxyStore => {
//             // console.log("Store: ", proxyStore)
//             // const rootField = proxyStore.getRootField("subscribeToFamily");
//             // console.log("root: ", rootField);
//             // const edges = rootField.getLinkedRecords("edges")
//             // console.log("edges: ", edges)
//             // const newFamilyTree = proxyStore.getRoot().getLinkedRecord("subscribeToFamily")
//             // console.log("newFamilyTree: ", newFamilyTree)
//             // const connectToFamily = ConnectionHandler.getConnection(newFamilyTree, "ListOfPeoplePagination_allPeople")
//             // console.log("connectToFamily: ",  connectToFamily)
//         },
//         onError: error => console.log (`An error occured:`, error),
//     };
//     requestSubscription (environment, subscriptionConfig);
// }
//
// const SubscribeListOfPeople = ({allPeople, relay}) => {
//
//     useEffect(() => {
//         loadSubscription();
//     }, []);
//
//     const _loadMore = () => {
//         if (!relay.hasMore () || relay.isLoading ()) {
//             if (!relay.hasMore ()) {
//                 alert ('No more other family members!');
//             }
//             return;
//         }
//         relay.loadMore (
//             totalCount // Fetch the next {totalCount} feed items
//         );
//     };
//     return (
//         <React.Fragment>
//             <div>
//
//                 {/*{family.allPeople.edges.map ((person, i) => (*/}
//                 {/*    <div key={i}>{person.node.name}<img src={person.node.image} /></div>*/}
//                 {/*))}*/}
//             </div>
//             <div>
//                 <button onClick={() => _loadMore ()}>Load More</button>
//             </div>
//         </React.Fragment>
//     );
// };
//
// export default createPaginationContainer (
//     SubscribeListOfPeople,
//     {
//         allPeople: graphql`
//             fragment SubscribeListOfPeople_allPeople on Subscription {
//                 timer {
//                     x
//                 }
//             }
//         `,
//     },
// );
