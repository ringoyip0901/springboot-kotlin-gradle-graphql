import React, {useState} from 'react';
import {createPaginationContainer} from 'react-relay';
import graphql from 'babel-plugin-relay/macro';

let totalCount = 1;

const ListOfPeoplePagination = ({ paginatedList, relay }) => {

    const _loadMore = () => {
        if(!relay.hasMore() || relay.isLoading()) {
            if (!relay.hasMore()) {
                alert("No more other family members!")
            }
            return;
        }
        relay.loadMore(
            totalCount,  // Fetch the next {totalCount} feed items
        );
    }
  return (
    <React.Fragment>
         <div>
            {paginatedList.allPeople.edges.map((person, i) => <div key={i}>{person.node.name}<img src={person.node.image}></img></div>)}
        </div>
        <div>
          <button onClick={() => _loadMore()}>Load More</button>
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
    getConnectionFromProps(props) {
      return props.paginatedList && props.paginatedList.allPeople
    },
    getFragmentVariables (prevVars, totalCount) {
      return {
        ...prevVars,
        count: totalCount,
      };
    },
    getVariables (props, paginationList, fragmentVariables) {
      return {
        count: paginationList.count,
        cursor: paginationList.cursor,
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
