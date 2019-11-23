/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type PeopleContainer_list$ref: FragmentReference;
declare export opaque type PeopleContainer_list$fragmentType: PeopleContainer_list$ref;
export type PeopleContainer_list = {|
  +list: $ReadOnlyArray<?{|
    +name: string,
    +image: ?string,
  |}>,
  +$refType: PeopleContainer_list$ref,
|};
export type PeopleContainer_list$data = PeopleContainer_list;
export type PeopleContainer_list$key = {
  +$data?: PeopleContainer_list$data,
  +$fragmentRefs: PeopleContainer_list$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "PeopleContainer_list",
  "type": "Everyone",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "list",
      "storageKey": null,
      "args": null,
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
          "name": "image",
          "args": null,
          "storageKey": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '8c1252cae994d7965581eb6b7ca1a011';
module.exports = node;
