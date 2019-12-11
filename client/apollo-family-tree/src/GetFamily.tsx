import React, {useEffect, useState} from "react";
import { useQuery, useLazyQuery, useMutation, useSubscription } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import CreateNewMember from './CreateNewMember'

const GET_FAMILY_QUERY = gql`
 query ($offset: Int!, $after: String){
   getEveryone(offset: $offset) {
       allPeople(first: $offset, after: $after) {
           edges {
             node {
               id
               name
               image
             }
           }
       }
   }
 }
`

// const GET_FAMILY_SUBSCRIBE = gql`
//   subscription subscribeToFamily($first: Int) {
//     subscribeToFamily(first: $first) {
//       edges {
//         node {
//           id
//           name
//           image
//         }
//       }
//     }
//   }
//
// `

const GET_FAMILY_SUBSCRIBE = gql`
  subscription subscribeToFamily($offset: Int, $after: String) {
    getEveryone(offset: $offset) {
        allPeople(first: $offset, after: $after) {
          edges {
            node {
              id
              name
              image
            }
          }
        }
    }
  }

`
const GetFamily: React.FC = () => {
  const [variables, setVariables] = useState({ id: "pc" })
  const { loading, error, data, subscribeToMore } = useQuery(GET_FAMILY_QUERY, {
    variables: {
      offset: 1,
      after: "1"
    }
  }) // if you want to just do a regular query reading

  // const { loading, error, data } = useSubscription(GET_FAMILY_SUBSCRIBE, {
  //   variables: {
  //       offset: 1,
  //       after: "1"
  //   },
  //   onSubscriptionData: (subscribedData) => console.log("subscribed Data: ", subscribedData)
  // })
  console.log(data)
  const onChange = (e: any) => {
    setVariables({
      id: e.target.value
    })
  }

  const subscribeToFamily = () => {
    return subscribeToMore({
      document: GET_FAMILY_SUBSCRIBE,
      variables: {
        offset: 1,
        after: "1"
      },
      updateQuery: (prev: any, {subscriptionData}: any) => {
        console.log("Prev: ", prev);
        console.log("Sub: ", subscriptionData.data)
        if(!subscriptionData.data) return prev;
        return Object.assign({}, prev, {...subscriptionData.data});
      }
    })
  }

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error...</div>
  subscribeToFamily()
  const renderedData = data && data.getEveryone.allPeople.edges;
  return (
    <div>
      {renderedData.map((node: any, i: number) =>
          <div key={i}><p key={i}>{node.node.name}</p><img src={node.node.image} /></div>
      )}
      <CreateNewMember />
    </div>
  )
}

{/*<button onClick={() =>*/}
{/*    fetchMore({*/}
{/*        query: GET_ALL_PEOPLE,*/}
{/*        variables: {*/}
{/*            //offset: data.getAllPeople.length, //this value is the position of the array that fetchMore should start fetching from*/}
{/*            cursor*/}
{/*        },*/}
{/*        updateQuery: (prevResult, { fetchMoreResult }) => {*/}
{/*            const previous = prevResult.getAllPeople;*/}
{/*            const newResults = fetchMoreResult.getAllPeople;*/}
{/*            const newCursor = fetchMoreResult.getAllPeople.cursor;*/}
{/*            console.log("Previous Results: ", previous);*/}
{/*            console.log("New Result: ", newResults)*/}
{/*            return {*/}
{/*                getAllPeople: [...previous, ...newResults],*/}
{/*            }*/}
{/*        }*/}
{/*    })}>Show More Family*/}
{/*</button>*/}


export default GetFamily;