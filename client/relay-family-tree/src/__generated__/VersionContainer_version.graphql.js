/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type VersionContainer_version$ref: FragmentReference;
declare export opaque type VersionContainer_version$fragmentType: VersionContainer_version$ref;
export type VersionContainer_version = {|
  +previous: ?string,
  +current: ?string,
  +$refType: VersionContainer_version$ref,
|};
export type VersionContainer_version$data = VersionContainer_version;
export type VersionContainer_version$key = {
  +$data?: VersionContainer_version$data,
  +$fragmentRefs: VersionContainer_version$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "VersionContainer_version",
  "type": "Version",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "previous",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "current",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '34831b02207d68d1c972045a07388ed1';
module.exports = node;
