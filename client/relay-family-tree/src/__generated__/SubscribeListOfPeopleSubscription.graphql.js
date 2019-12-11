/**
 * @flow
 * @relayHash 3cff30b1cb97e0b455486e0c50fb1883
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type SubscribeListOfPeopleSubscriptionVariables = {||};
export type SubscribeListOfPeopleSubscriptionResponse = {|
  +subscribeToFamily: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +name: string,
        +image: ?string,
      |}
    |}>
  |}
|};
export type SubscribeListOfPeopleSubscription = {|
  variables: SubscribeListOfPeopleSubscriptionVariables,
  response: SubscribeListOfPeopleSubscriptionResponse,
|};
*/


/*
subscription SubscribeListOfPeopleSubscription {
  subscribeToFamily(first: 10000) {
    edges {
      node {
        id
        name
        image
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
    "name": "subscribeToFamily",
    "storageKey": "subscribeToFamily(first:10000)",
    "args": [
      {
        "kind": "Literal",
        "name": "first",
        "value": 10000
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
    "name": "SubscribeListOfPeopleSubscription",
    "type": "Subscription",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "SubscribeListOfPeopleSubscription",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "subscription",
    "name": "SubscribeListOfPeopleSubscription",
    "id": null,
    "text": "subscription SubscribeListOfPeopleSubscription {\n  subscribeToFamily(first: 10000) {\n    edges {\n      node {\n        id\n        name\n        image\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ca36fe3b49639355beb34dab0362eca9';
module.exports = node;
