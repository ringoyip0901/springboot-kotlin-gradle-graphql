/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type PersonImageContainer_getPersonByName$ref: FragmentReference;
declare export opaque type PersonImageContainer_getPersonByName$fragmentType: PersonImageContainer_getPersonByName$ref;
export type PersonImageContainer_getPersonByName = {|
  +image: ?string,
  +$refType: PersonImageContainer_getPersonByName$ref,
|};
export type PersonImageContainer_getPersonByName$data = PersonImageContainer_getPersonByName;
export type PersonImageContainer_getPersonByName$key = {
  +$data?: PersonImageContainer_getPersonByName$data,
  +$fragmentRefs: PersonImageContainer_getPersonByName$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "PersonImageContainer_getPersonByName",
  "type": "Person",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "image",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '87418265aa4fa989605bdb3946436108';
module.exports = node;
