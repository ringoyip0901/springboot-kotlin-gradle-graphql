/**
 * @flow
 * @relayHash 33a6d54d0efd38ed85dd1ca1e8d7df3e
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type DataContainer_people$ref = any;
export type AppQueryVariables = {||};
export type AppQueryResponse = {|
  +$fragmentRefs: DataContainer_people$ref
|};
export type AppQuery = {|
  variables: AppQueryVariables,
  response: AppQueryResponse,
|};
*/


/*
query AppQuery {
  ...DataContainer_people
}

fragment DataContainer_people on Query {
  getAllPeople(offset: 0) {
    name
    id
  }
}
*/

const node/*: ConcreteRequest*/ = {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "AppQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "DataContainer_people",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "AppQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "getAllPeople",
        "storageKey": "getAllPeople(offset:0)",
        "args": [
          {
            "kind": "Literal",
            "name": "offset",
            "value": 0
          }
        ],
        "concreteType": "Person",
        "plural": true,
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
            "name": "id",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "AppQuery",
    "id": null,
    "text": "query AppQuery {\n  ...DataContainer_people\n}\n\nfragment DataContainer_people on Query {\n  getAllPeople(offset: 0) {\n    name\n    id\n  }\n}\n",
    "metadata": {}
  }
};
// prettier-ignore
(node/*: any*/).hash = '9ffd5e1ec054a2a9e37f0f26319c1b03';
module.exports = node;
