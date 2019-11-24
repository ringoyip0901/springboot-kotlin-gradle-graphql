/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type ListOfPeoplePagination_paginatedList$ref: FragmentReference;
declare export opaque type ListOfPeoplePagination_paginatedList$fragmentType: ListOfPeoplePagination_paginatedList$ref;
export type ListOfPeoplePagination_paginatedList = {|
  +allPeople: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +cursor: ?string,
      +node: ?{|
        +name: string,
        +image: ?string,
      |},
    |}>
  |},
  +$refType: ListOfPeoplePagination_paginatedList$ref,
|};
export type ListOfPeoplePagination_paginatedList$data = ListOfPeoplePagination_paginatedList;
export type ListOfPeoplePagination_paginatedList$key = {
  +$data?: ListOfPeoplePagination_paginatedList$data,
  +$fragmentRefs: ListOfPeoplePagination_paginatedList$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "ListOfPeoplePagination_paginatedList",
  "type": "AllPeople",
  "metadata": {
    "connection": [
      {
        "count": "count",
        "cursor": null,
        "direction": "forward",
        "path": [
          "allPeople"
        ]
      }
    ]
  },
  "argumentDefinitions": [
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
  "selections": [
    {
      "kind": "LinkedField",
      "alias": "allPeople",
      "name": "__ListOfPeoplePagination_allPeople_connection",
      "storageKey": null,
      "args": [
        {
          "kind": "Variable",
          "name": "cursor",
          "variableName": "cursor"
        }
      ],
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
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'd082a8ec4023596c6c0e8771d3a3a255';
module.exports = node;
