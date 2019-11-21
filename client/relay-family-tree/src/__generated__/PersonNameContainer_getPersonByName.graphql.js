/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type PersonNameContainer_getPersonByName$ref: FragmentReference;
declare export opaque type PersonNameContainer_getPersonByName$fragmentType: PersonNameContainer_getPersonByName$ref;
export type PersonNameContainer_getPersonByName = {|
  +name: string,
  +$refType: PersonNameContainer_getPersonByName$ref,
|};
export type PersonNameContainer_getPersonByName$data = PersonNameContainer_getPersonByName;
export type PersonNameContainer_getPersonByName$key = {
  +$data?: PersonNameContainer_getPersonByName$data,
  +$fragmentRefs: PersonNameContainer_getPersonByName$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "PersonNameContainer_getPersonByName",
  "type": "Person",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "name",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'cfc15eae64f38c010bfcc49c95580cc1';
module.exports = node;
