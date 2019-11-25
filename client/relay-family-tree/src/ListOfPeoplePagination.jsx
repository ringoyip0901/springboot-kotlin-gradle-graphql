import React, {useState} from 'react';
import {createPaginationContainer} from 'react-relay';
import graphql from 'babel-plugin-relay/macro';

let totalCount = 1;
const pointer = ["0","1", "2", "3", "4", "5", "6", "7", "8"];

const ListOfPeoplePagination = ({ paginatedList, relay }) => {
  const loadMore = () => {
    return relay.loadMore(totalCount, () => totalCount++)
//     return relay.refetchConnection(totalCount++, (error) => (error))
  }
  return (
    <React.Fragment>
         <div>
            {paginatedList.allPeople.edges.map((person, i) => <div key={i}>{person.node.name}<img src={person.node.image}></img></div>)}
        </div>
        <div>
          <button onClick={() => loadMore()}>Load More</button>
        </div>
    </React.Fragment>
  );
};

export default createPaginationContainer (
  ListOfPeoplePagination,
  {
    paginatedList: graphql`
            fragment ListOfPeoplePagination_paginatedList on AllPeople @argumentDefinitions(count: { type: "Int", defaultValue: 1 }, cursor: { type: "String", defaultValue: "1" }) {
                allPeople (
                    first: $count,
                    after: $cursor,
                    ) @connection(key: "ListOfPeoplePagination_allPeople") {
                    edges {
                        cursor
                        node {
                          id
                          name
                          image
                        }
                    }
                    pageInfo {
                        hasNextPage
                        hasPreviousPage
                        startCursor
                        endCursor
                    }
                }
              }
        `,
  },
  {
    direction: 'forward',
    getConnectionFromProps(props) { //if it's included load more won't run for some reason
      return props.paginatedList && props.paginatedList.allPeople
    },
    getFragmentVariables (prevVars, totalCount) {
      //totalCount is the total number of items
      return {
        ...prevVars,
        count: totalCount,
      };
    },
    getVariables (props, {count, cursor}, fragmentVariables) {
      return {
        count,
        cursor,
      };
    },
    query: graphql`
                # Pagination query to be fetched upon calling 'loadMore'.
                # Notice that we re-use our fragment, and the shape of this query matches our fragment spec.
                query ListOfPeoplePaginationQuery(
                    $count: Int!
                    $cursor: String
                ) {
                    getEveryone(offset: 0) {
                        ...ListOfPeoplePagination_paginatedList @arguments(cursor: $cursor, count: $count)
                    }
                }
            `,
  }
);
