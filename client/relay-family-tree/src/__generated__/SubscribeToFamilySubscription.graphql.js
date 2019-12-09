/**
 * @flow
 * @relayHash 02161f22a903dbbad37e1a65563b2171
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type SubscribeToFamilySubscriptionVariables = {||};
export type SubscribeToFamilySubscriptionResponse = {|
  +subscribeToFamily: {|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +name: string,
        +image: ?string,
      |}
    |}>
  |}
|};
export type SubscribeToFamilySubscription = {|
  variables: SubscribeToFamilySubscriptionVariables,
  response: SubscribeToFamilySubscriptionResponse,
|};
*/


/*
subscription SubscribeToFamilySubscription {
  subscribeToFamily {
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
    "storageKey": null,
    "args": null,
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
    "name": "SubscribeToFamilySubscription",
    "type": "Subscription",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "SubscribeToFamilySubscription",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "subscription",
    "name": "SubscribeToFamilySubscription",
    "id": null,
    "text": "subscription SubscribeToFamilySubscription {\n  subscribeToFamily {\n    edges {\n      node {\n        id\n        name\n        image\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '4333ac96957086e347026e590d509368';
module.exports = node;
