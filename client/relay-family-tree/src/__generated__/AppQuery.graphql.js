/**
 * @flow
 * @relayHash 61f8e12ae7fee5f1670a59676d89b3fe
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type PeopleContainer_list$ref = any;
type PersonImageContainer_getPersonByName$ref = any;
type PersonNameContainer_getPersonByName$ref = any;
type VersionContainer_version$ref = any;
export type AppQueryVariables = {||};
export type AppQueryResponse = {|
  +version: ?{|
    +$fragmentRefs: VersionContainer_version$ref
  |},
  +getPersonByName: ?{|
    +$fragmentRefs: PersonNameContainer_getPersonByName$ref & PersonImageContainer_getPersonByName$ref
  |},
  +getEveryone: ?{|
    +$fragmentRefs: PeopleContainer_list$ref
  |},
|};
export type AppQuery = {|
  variables: AppQueryVariables,
  response: AppQueryResponse,
|};
*/


/*
query AppQuery {
  version {
    ...VersionContainer_version
  }
  getPersonByName(name: "Prince William") {
    ...PersonNameContainer_getPersonByName
    ...PersonImageContainer_getPersonByName
  }
  getEveryone {
    ...PeopleContainer_list
  }
}

fragment PeopleContainer_list on Everyone {
  list {
    name
    image
  }
}

fragment PersonImageContainer_getPersonByName on Person {
  image
}

fragment PersonNameContainer_getPersonByName on Person {
  name
}

fragment VersionContainer_version on Version {
  previous
  current
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "name",
    "value": "Prince William"
  }
],
v1 = [
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
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "AppQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "version",
        "storageKey": null,
        "args": null,
        "concreteType": "Version",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "VersionContainer_version",
            "args": null
          }
        ]
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "getPersonByName",
        "storageKey": "getPersonByName(name:\"Prince William\")",
        "args": (v0/*: any*/),
        "concreteType": "Person",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "PersonNameContainer_getPersonByName",
            "args": null
          },
          {
            "kind": "FragmentSpread",
            "name": "PersonImageContainer_getPersonByName",
            "args": null
          }
        ]
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "getEveryone",
        "storageKey": null,
        "args": null,
        "concreteType": "Everyone",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "PeopleContainer_list",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "AppQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "version",
        "storageKey": null,
        "args": null,
        "concreteType": "Version",
        "plural": false,
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
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "getPersonByName",
        "storageKey": "getPersonByName(name:\"Prince William\")",
        "args": (v0/*: any*/),
        "concreteType": "Person",
        "plural": false,
        "selections": (v1/*: any*/)
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "getEveryone",
        "storageKey": null,
        "args": null,
        "concreteType": "Everyone",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "list",
            "storageKey": null,
            "args": null,
            "concreteType": "Person",
            "plural": true,
            "selections": (v1/*: any*/)
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "AppQuery",
    "id": null,
    "text": "query AppQuery {\n  version {\n    ...VersionContainer_version\n  }\n  getPersonByName(name: \"Prince William\") {\n    ...PersonNameContainer_getPersonByName\n    ...PersonImageContainer_getPersonByName\n  }\n  getEveryone {\n    ...PeopleContainer_list\n  }\n}\n\nfragment PeopleContainer_list on Everyone {\n  list {\n    name\n    image\n  }\n}\n\nfragment PersonImageContainer_getPersonByName on Person {\n  image\n}\n\nfragment PersonNameContainer_getPersonByName on Person {\n  name\n}\n\nfragment VersionContainer_version on Version {\n  previous\n  current\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a97b87c03867b9fbbc725e6bd4c62820';
module.exports = node;
