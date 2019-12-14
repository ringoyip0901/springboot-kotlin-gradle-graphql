/**
 * @flow
 * @relayHash 7205e744690179d75f1dcaf60af154f1
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateNewMemberMutationVariables = {||};
export type CreateNewMemberMutationResponse = {|
  +createPerson: {|
    +edges: ?$ReadOnlyArray<?{|
      +cursor: ?string,
      +node: ?{|
        +id: string,
        +name: string,
      |},
    |}>
  |}
|};
export type CreateNewMemberMutation = {|
  variables: CreateNewMemberMutationVariables,
  response: CreateNewMemberMutationResponse,
|};
*/


/*
mutation CreateNewMemberMutation {
  createPerson(name: "fake queen", image: "random image") {
    edges {
      cursor
      node {
        id
        name
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "createPerson",
    "storageKey": "createPerson(image:\"random image\",name:\"fake queen\")",
    "args": [
      {
        "kind": "Literal",
        "name": "image",
        "value": "random image"
      },
      {
        "kind": "Literal",
        "name": "name",
        "value": "fake queen"
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
              }
            ]
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "CreateNewMemberMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "CreateNewMemberMutation",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "CreateNewMemberMutation",
    "id": null,
    "text": "mutation CreateNewMemberMutation {\n  createPerson(name: \"fake queen\", image: \"random image\") {\n    edges {\n      cursor\n      node {\n        id\n        name\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '84c9cbe3c62c0a6340c1c98a641e29f6';
module.exports = node;
