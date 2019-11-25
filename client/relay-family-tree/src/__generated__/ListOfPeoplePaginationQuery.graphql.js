/**
 * @flow
 * @relayHash 7b8918c1f3c612b4ec2e2bf0da52db7c
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ListOfPeoplePagination_paginatedList$ref = any;
export type ListOfPeoplePaginationQueryVariables = {|
  count: number,
  cursor?: ?string,
|};
export type ListOfPeoplePaginationQueryResponse = {|
  +getEveryone: ?{|
    +$fragmentRefs: ListOfPeoplePagination_paginatedList$ref
  |}
|};
export type ListOfPeoplePaginationQuery = {|
  variables: ListOfPeoplePaginationQueryVariables,
  response: ListOfPeoplePaginationQueryResponse,
|};
*/


/*
query ListOfPeoplePaginationQuery(
  $count: Int!
  $cursor: String
) {
  getEveryone(offset: 0) {
    ...ListOfPeoplePagination_paginatedList_1G22uz
  }
}

fragment ListOfPeoplePagination_paginatedList_1G22uz on AllPeople {
  allPeople(first: $count, after: $cursor) {
    edges {
      cursor
      node {
        id
        name
        image
        __typename
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
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "count",
    "type": "Int!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "cursor",
    "type": "String",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Literal",
    "name": "offset",
    "value": 0
  }
],
v2 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "cursor"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "count"
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ListOfPeoplePaginationQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "getEveryone",
        "storageKey": "getEveryone(offset:0)",
        "args": (v1/*: any*/),
        "concreteType": "AllPeople",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "ListOfPeoplePagination_paginatedList",
            "args": [
              {
                "kind": "Variable",
                "name": "count",
                "variableName": "count"
              },
              {
                "kind": "Variable",
                "name": "cursor",
                "variableName": "cursor"
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ListOfPeoplePaginationQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "getEveryone",
        "storageKey": "getEveryone(offset:0)",
        "args": (v1/*: any*/),
        "concreteType": "AllPeople",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "allPeople",
            "storageKey": null,
            "args": (v2/*: any*/),
            "concreteType": "Edges",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "edges",
                "storageKey": null,
                "args": null,
                "concreteType": "Edge",
                "plural": true,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "cursor",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "node",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Person",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "id",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "name",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "image",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "__typename",
                        "args": null,
                        "storageKey": null
                      }
                    ]
                  }
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "pageInfo",
                "storageKey": null,
                "args": null,
                "concreteType": "PageInfo",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "hasNextPage",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "hasPreviousPage",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "startCursor",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "endCursor",
                    "args": null,
                    "storageKey": null
                  }
                ]
              }
            ]
          },
          {
            "kind": "LinkedHandle",
            "alias": null,
            "name": "allPeople",
            "args": (v2/*: any*/),
            "handle": "connection",
            "key": "ListOfPeoplePagination_allPeople",
            "filters": null
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "ListOfPeoplePaginationQuery",
    "id": null,
    "text": "query ListOfPeoplePaginationQuery(\n  $count: Int!\n  $cursor: String\n) {\n  getEveryone(offset: 0) {\n    ...ListOfPeoplePagination_paginatedList_1G22uz\n  }\n}\n\nfragment ListOfPeoplePagination_paginatedList_1G22uz on AllPeople {\n  allPeople(first: $count, after: $cursor) {\n    edges {\n      cursor\n      node {\n        id\n        name\n        image\n        __typename\n      }\n    }\n    pageInfo {\n      hasNextPage\n      hasPreviousPage\n      startCursor\n      endCursor\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '0df097372f92b2fc61965c1d668094a9';
module.exports = node;
