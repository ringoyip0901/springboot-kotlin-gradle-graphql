/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type SubscribeListOfPeople_allPeople$ref: FragmentReference;
declare export opaque type SubscribeListOfPeople_allPeople$fragmentType: SubscribeListOfPeople_allPeople$ref;
export type SubscribeListOfPeople_allPeople = {|
  +allPeople: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +cursor: ?string,
      +node: ?{|
        +id: string,
        +name: string,
        +image: ?string,
      |},
    |}>
  |},
  +$refType: SubscribeListOfPeople_allPeople$ref,
|};
export type SubscribeListOfPeople_allPeople$data = SubscribeListOfPeople_allPeople;
export type SubscribeListOfPeople_allPeople$key = {
  +$data?: SubscribeListOfPeople_allPeople$data,
  +$fragmentRefs: SubscribeListOfPeople_allPeople$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "SubscribeListOfPeople_allPeople",
  "type": "AllPeople",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "allPeople",
      "storageKey": "allPeople(first:10000)",
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
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'c2a127d2c5b34aa66b1e38fc09f9a41c';
module.exports = node;
