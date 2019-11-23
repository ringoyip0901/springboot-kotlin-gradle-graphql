import React, { useState } from "react";
import { createPaginationContainer } from 'react-relay'
import graphql from 'babel-plugin-relay/macro'

const ListOfPeoplePagination = (props) => {
  console.log(props)
  return (
    <div>
        Hi from ListOfPeoplePagination
    </div>
  )
}

export default createPaginationContainer(
    ListOfPeople, {
        paginatedList: graphql`
            fragment ListOfPeoplePagination_paginatedList on AllPeople @argumentDefinitions(name: { type: "String" }, count: { type: "Int" }, cursor: { type: "String" } ]}) {
                people (name: $name, count: $count, cursor: $cursor) @connection(key: "ListOfPeoplePagination_paginatedList", filters: ["name"]) {
                    id
                    name
                    image

                }
              }
        `},
        {
            direction: "forward",
            getFragmentVariables(prevVars, totalCount) {
                return {
                  ...prevVars,
                  count: totalCount,
                };
              },
              getVariables(props, {count, cursor}, fragmentVariables) {
                return {
                  count,
                  cursor,
                  name: fragmentVariables.name,
                };
              },
              query: graphql`
                # Pagination query to be fetched upon calling 'loadMore'.
                # Notice that we re-use our fragment, and the shape of this query matches our fragment spec.
                query ListOfPeoplePaginationQuery(
                    $count: Int!
                    $cursor: ID
                    $name: String
                ) {
                    paginatedList: node(name: $name) {
                        ...ListOfPeoplePagination_paginatedList @arguments(name: $name, count: $count, cursor: $cursor)
                    }
                }
            }`
            }
        );
