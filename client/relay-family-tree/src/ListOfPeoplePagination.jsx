import React, {useState} from 'react';
import {createPaginationContainer} from 'react-relay';
import graphql from 'babel-plugin-relay/macro';

const ListOfPeoplePagination = ({ paginatedList, relay }) => {

  const loadMore = () => {
    let hasMore =  relay.hasMore
    console.log(hasMore());
    return;
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
            fragment ListOfPeoplePagination_paginatedList on AllPeople @argumentDefinitions(count: { type: "Int" }, cursor: { type: "String" }) {
                allPeople (
                    first: $count,
                    cursor: $cursor
                    ) @connection(key: "ListOfPeoplePagination_allPeople") {
                    edges {
                        cursor
                        node {
                          name
                          image
                        }
                    }
                }
              }
        `,
  },
  {
    direction: 'forward',
    getFragmentVariables (prevVars, totalCount) {
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
