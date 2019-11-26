/**
 * @flow
 * @relayHash 0da35d947ca67bce2b1b9d527476ad64
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ListOfPeoplePagination_paginatedList$ref = any;
type ListOfPeople_list$ref = any;
export type AppQueryVariables = {|
  offset: number,
  count?: ?number,
  name?: ?string,
|};
export type AppQueryResponse = {|
  +getEveryone: ?{|
    +$fragmentRefs: ListOfPeople_list$ref & ListOfPeoplePagination_paginatedList$ref
  |}
|};
export type AppQuery = {|
  variables: AppQueryVariables,
  response: AppQueryResponse,
|};
*/


/*
query AppQuery(
  $offset: Int!
  $count: Int
  $name: String
) {
  getEveryone(offset: $offset) {
    ...ListOfPeople_list_2aiVTE
    ...ListOfPeoplePagination_paginatedList_yu5n1
  }
}

fragment ListOfPeoplePagination_paginatedList_yu5n1 on AllPeople {
  allPeople(first: $count, after: "1") {
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

fragment ListOfPeople_list_2aiVTE on AllPeople {
  people(name: $name) {
    id
    name
    image
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "offset",
    "type": "Int!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "count",
    "type": "Int",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "name",
    "type": "String",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "offset",
    "variableName": "offset"
  }
],
v2 = [
  {
    "kind": "Variable",
    "name": "name",
    "variableName": "name"
  }
],
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "image",
  "args": null,
  "storageKey": null
},
v6 = [
  {
    "kind": "Literal",
    "name": "after",
    "value": "1"
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
    "name": "AppQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "getEveryone",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "AllPeople",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "ListOfPeople_list",
            "args": (v2/*: any*/)
          },
          {
            "kind": "FragmentSpread",
            "name": "ListOfPeoplePagination_paginatedList",
            "args": [
              {
                "kind": "Variable",
                "name": "count",
                "variableName": "count"
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "AppQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "getEveryone",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "AllPeople",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "people",
            "storageKey": null,
            "args": (v2/*: any*/),
            "concreteType": "Person",
            "plural": true,
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/)
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "allPeople",
            "storageKey": null,
            "args": (v6/*: any*/),
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
                      (v3/*: any*/),
                      (v4/*: any*/),
                      (v5/*: any*/),
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
            "args": (v6/*: any*/),
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
    "name": "AppQuery",
    "id": null,
    "text": "query AppQuery(\n  $offset: Int!\n  $count: Int\n  $name: String\n) {\n  getEveryone(offset: $offset) {\n    ...ListOfPeople_list_2aiVTE\n    ...ListOfPeoplePagination_paginatedList_yu5n1\n  }\n}\n\nfragment ListOfPeoplePagination_paginatedList_yu5n1 on AllPeople {\n  allPeople(first: $count, after: \"1\") {\n    edges {\n      cursor\n      node {\n        id\n        name\n        image\n        __typename\n      }\n    }\n    pageInfo {\n      hasNextPage\n      hasPreviousPage\n      startCursor\n      endCursor\n    }\n  }\n}\n\nfragment ListOfPeople_list_2aiVTE on AllPeople {\n  people(name: $name) {\n    id\n    name\n    image\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'b292896bac7f429f3f8bc5d2ede1a1d7';
module.exports = node;
