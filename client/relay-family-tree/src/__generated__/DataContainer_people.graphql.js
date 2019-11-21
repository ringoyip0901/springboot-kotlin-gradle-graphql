/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type DataContainer_people$ref: FragmentReference;
declare export opaque type DataContainer_people$fragmentType: DataContainer_people$ref;
export type DataContainer_people = {|
  +getAllPeople: $ReadOnlyArray<?{|
    +name: string,
    +id: string,
  |}>,
  +$refType: DataContainer_people$ref,
|};
export type DataContainer_people$data = DataContainer_people;
export type DataContainer_people$key = {
  +$data?: DataContainer_people$data,
  +$fragmentRefs: DataContainer_people$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "DataContainer_people",
  "type": "Query",
  "metadata": null,
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
};
// prettier-ignore
(node/*: any*/).hash = 'a3d1f5774ec8d8c3373a224bbb07d9d4';
module.exports = node;
