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
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "people",
      "storageKey": null,
      "args": null,
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
(node/*: any*/).hash = '4c5105c60dcb6226c1f47f18af3c7c47';
module.exports = node;
