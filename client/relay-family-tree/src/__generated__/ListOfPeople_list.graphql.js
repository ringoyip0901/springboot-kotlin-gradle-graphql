/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type ListOfPeople_list$ref: FragmentReference;
declare export opaque type ListOfPeople_list$fragmentType: ListOfPeople_list$ref;
export type ListOfPeople_list = {|
  +people: $ReadOnlyArray<?{|
    +id: string,
    +name: string,
    +image: ?string,
  |}>,
  +$refType: ListOfPeople_list$ref,
|};
export type ListOfPeople_list$data = ListOfPeople_list;
export type ListOfPeople_list$key = {
  +$data?: ListOfPeople_list$data,
  +$fragmentRefs: ListOfPeople_list$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "ListOfPeople_list",
  "type": "AllPeople",
  "metadata": null,
  "argumentDefinitions": [
    {
      "kind": "LocalArgument",
      "name": "name",
      "type": "String",
      "defaultValue": null
    }
  ],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "people",
      "storageKey": null,
      "args": [
        {
          "kind": "Variable",
          "name": "name",
          "variableName": "name"
        }
      ],
      "concreteType": "Person",
      "plural": true,
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
};
// prettier-ignore
(node/*: any*/).hash = 'b6336db55e3bdd50bfc0ae73e4a6b49c';
module.exports = node;
