/**
 * @flow
 * @relayHash 5685cb6f00f001fb14b78677486b7878
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ListOfPeoplePagination_paginatedList$ref = any;
type PersonImageContainer_getPersonByName$ref = any;
type PersonNameContainer_getPersonByName$ref = any;
type VersionContainer_version$ref = any;
export type AppQueryVariables = {|
  offset: number,
  count?: ?number,
  cursor?: ?string,
|};
export type AppQueryResponse = {|
  +version: ?{|
    +$fragmentRefs: VersionContainer_version$ref
  |},
  +getPersonByName: ?{|
    +$fragmentRefs: PersonNameContainer_getPersonByName$ref & PersonImageContainer_getPersonByName$ref
  |},
  +getEveryone: ?{|
    +$fragmentRefs: ListOfPeoplePagination_paginatedList$ref
  |},
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
  $cursor: String
) {
  version {
    ...VersionContainer_version
  }
  getPersonByName(name: "Prince William") {
    ...PersonNameContainer_getPersonByName
    ...PersonImageContainer_getPersonByName
  }
  getEveryone(offset: $offset) {
    ...ListOfPeoplePagination_paginatedList_1G22uz
  }
}

fragment ListOfPeoplePagination_paginatedList_1G22uz on AllPeople {
  allPeople(first: $count, cursor: $cursor) {
    edges {
      cursor
      node {
        name
        image
        __typename
      }
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}

fragment PersonImageContainer_getPersonByName on Person {
  image
}

fragment PersonNameContainer_getPersonByName on Person {
  name
}

fragment VersionContainer_version on Version {
  previous
  current
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
    "name": "cursor",
    "type": "String",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Literal",
    "name": "name",
    "value": "Prince William"
  }
],
v2 = [
  {
    "kind": "Variable",
    "name": "offset",
    "variableName": "offset"
  }
],
v3 = {
  "kind": "Variable",
  "name": "cursor",
  "variableName": "cursor"
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
  (v3/*: any*/),
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
        "name": "version",
        "storageKey": null,
        "args": null,
        "concreteType": "Version",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "VersionContainer_version",
            "args": null
          }
        ]
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "getPersonByName",
        "storageKey": "getPersonByName(name:\"Prince William\")",
        "args": (v1/*: any*/),
        "concreteType": "Person",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "PersonNameContainer_getPersonByName",
            "args": null
          },
          {
            "kind": "FragmentSpread",
            "name": "PersonImageContainer_getPersonByName",
            "args": null
          }
        ]
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "getEveryone",
        "storageKey": null,
        "args": (v2/*: any*/),
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
              (v3/*: any*/)
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
        "name": "version",
        "storageKey": null,
        "args": null,
        "concreteType": "Version",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "previous",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "current",
            "args": null,
            "storageKey": null
          }
        ]
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "getPersonByName",
        "storageKey": "getPersonByName(name:\"Prince William\")",
        "args": (v1/*: any*/),
        "concreteType": "Person",
        "plural": false,
        "selections": [
          (v4/*: any*/),
          (v5/*: any*/)
        ]
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "getEveryone",
        "storageKey": null,
        "args": (v2/*: any*/),
        "concreteType": "AllPeople",
        "plural": false,
        "selections": [
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
                    "name": "endCursor",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "hasNextPage",
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
            "filters": [
              "cursor"
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "AppQuery",
    "id": null,
    "text": "query AppQuery(\n  $offset: Int!\n  $count: Int\n  $cursor: String\n) {\n  version {\n    ...VersionContainer_version\n  }\n  getPersonByName(name: \"Prince William\") {\n    ...PersonNameContainer_getPersonByName\n    ...PersonImageContainer_getPersonByName\n  }\n  getEveryone(offset: $offset) {\n    ...ListOfPeoplePagination_paginatedList_1G22uz\n  }\n}\n\nfragment ListOfPeoplePagination_paginatedList_1G22uz on AllPeople {\n  allPeople(first: $count, cursor: $cursor) {\n    edges {\n      cursor\n      node {\n        name\n        image\n        __typename\n      }\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment PersonImageContainer_getPersonByName on Person {\n  image\n}\n\nfragment PersonNameContainer_getPersonByName on Person {\n  name\n}\n\nfragment VersionContainer_version on Version {\n  previous\n  current\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '0c2d0bb56d5673502909702533370a69';
module.exports = node;
