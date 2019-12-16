import React, { useEffect, useState } from "react";
import { useQuery, useSubscription } from '@apollo/react-hooks';
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

const GET_TIMER = gql`
    subscription getTimerSub {
      timer {
        x
      }
    }
`

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
  const { loading, error, data } = useSubscription(GET_FAMILY_SUBSCRIBE, {
    variables: {
      offset: 1,
      after: "1"
    }
  })

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error...</div>
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

export default GetFamily;


{/*<button onClick={() =>*/ }
{/*    fetchMore({*/ }
{/*        query: GET_ALL_PEOPLE,*/ }
{/*        variables: {*/ }
{/*            //offset: data.getAllPeople.length, //this value is the position of the array that fetchMore should start fetching from*/ }
{/*            cursor*/ }
{/*        },*/ }
{/*        updateQuery: (prevResult, { fetchMoreResult }) => {*/ }
{/*            const previous = prevResult.getAllPeople;*/ }
{/*            const newResults = fetchMoreResult.getAllPeople;*/ }
{/*            const newCursor = fetchMoreResult.getAllPeople.cursor;*/ }
{/*            console.log("Previous Results: ", previous);*/ }
{/*            console.log("New Result: ", newResults)*/ }
{/*            return {*/ }
{/*                getAllPeople: [...previous, ...newResults],*/ }
{/*            }*/ }
{/*        }*/ }
{/*    })}>Show More Family*/ }
{/*</button>*/ }