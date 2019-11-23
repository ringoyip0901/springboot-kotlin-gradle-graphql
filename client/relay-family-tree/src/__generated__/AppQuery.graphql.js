/**
 * @flow
<<<<<<< HEAD
 * @relayHash 61f8e12ae7fee5f1670a59676d89b3fe
=======
 * @relayHash 37050050cf846159cb9f83bb61f01218
>>>>>>> 64df5aea89678a2c4519c0f8d7792857c96adba4
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
<<<<<<< HEAD
type PeopleContainer_list$ref = any;
=======
type ListOfPeople_list$ref = any;
>>>>>>> 64df5aea89678a2c4519c0f8d7792857c96adba4
type PersonImageContainer_getPersonByName$ref = any;
type PersonNameContainer_getPersonByName$ref = any;
type VersionContainer_version$ref = any;
export type AppQueryVariables = {|
  offset: number,
  name?: ?string,
|};
export type AppQueryResponse = {|
  +version: ?{|
    +$fragmentRefs: VersionContainer_version$ref
  |},
  +getPersonByName: ?{|
    +$fragmentRefs: PersonNameContainer_getPersonByName$ref & PersonImageContainer_getPersonByName$ref
  |},
  +getEveryone: ?{|
<<<<<<< HEAD
    +$fragmentRefs: PeopleContainer_list$ref
=======
    +$fragmentRefs: ListOfPeople_list$ref
>>>>>>> 64df5aea89678a2c4519c0f8d7792857c96adba4
  |},
|};
export type AppQuery = {|
  variables: AppQueryVariables,
  response: AppQueryResponse,
|};
*/


/*
query AppQuery(
  $offset: Int!
  $name: String
) {
  version {
    ...VersionContainer_version
  }
  getPersonByName(name: "Prince William") {
    ...PersonNameContainer_getPersonByName
    ...PersonImageContainer_getPersonByName
  }
<<<<<<< HEAD
  getEveryone {
    ...PeopleContainer_list
  }
}

fragment PeopleContainer_list on Everyone {
  list {
=======
  getEveryone(offset: $offset) {
    ...ListOfPeople_list_2aiVTE
  }
}

fragment ListOfPeople_list_2aiVTE on AllPeople {
  people(name: $name) {
    id
>>>>>>> 64df5aea89678a2c4519c0f8d7792857c96adba4
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
    "kind": "LocalArgument",
    "name": "offset",
    "type": "Int!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "name",
    "type": "String",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Literal",
    "name": "name",
    "value": "Prince William"
  }
],
<<<<<<< HEAD
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
=======
v2 = [
  {
    "kind": "Variable",
    "name": "offset",
    "variableName": "offset"
  }
],
v3 = [
  {
    "kind": "Variable",
    "name": "name",
    "variableName": "name"
  }
],
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "image",
  "args": null,
  "storageKey": null
};
>>>>>>> 64df5aea89678a2c4519c0f8d7792857c96adba4
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "AppQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
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
        "args": (v1/*: any*/),
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
<<<<<<< HEAD
        "args": null,
        "concreteType": "Everyone",
=======
        "args": (v2/*: any*/),
        "concreteType": "AllPeople",
>>>>>>> 64df5aea89678a2c4519c0f8d7792857c96adba4
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
<<<<<<< HEAD
            "name": "PeopleContainer_list",
            "args": null
=======
            "name": "ListOfPeople_list",
            "args": (v3/*: any*/)
>>>>>>> 64df5aea89678a2c4519c0f8d7792857c96adba4
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "AppQuery",
    "argumentDefinitions": (v0/*: any*/),
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
        "args": (v1/*: any*/),
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
          (v4/*: any*/),
          (v5/*: any*/)
        ]
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "getEveryone",
        "storageKey": null,
        "args": (v2/*: any*/),
        "concreteType": "AllPeople",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
<<<<<<< HEAD
            "name": "list",
            "storageKey": null,
            "args": null,
            "concreteType": "Person",
            "plural": true,
            "selections": (v1/*: any*/)
=======
            "name": "people",
            "storageKey": null,
            "args": (v3/*: any*/),
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
              (v4/*: any*/),
              (v5/*: any*/)
            ]
>>>>>>> 64df5aea89678a2c4519c0f8d7792857c96adba4
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "AppQuery",
    "id": null,
<<<<<<< HEAD
    "text": "query AppQuery {\n  version {\n    ...VersionContainer_version\n  }\n  getPersonByName(name: \"Prince William\") {\n    ...PersonNameContainer_getPersonByName\n    ...PersonImageContainer_getPersonByName\n  }\n  getEveryone {\n    ...PeopleContainer_list\n  }\n}\n\nfragment PeopleContainer_list on Everyone {\n  list {\n    name\n    image\n  }\n}\n\nfragment PersonImageContainer_getPersonByName on Person {\n  image\n}\n\nfragment PersonNameContainer_getPersonByName on Person {\n  name\n}\n\nfragment VersionContainer_version on Version {\n  previous\n  current\n}\n",
=======
    "text": "query AppQuery(\n  $offset: Int!\n  $name: String\n) {\n  version {\n    ...VersionContainer_version\n  }\n  getPersonByName(name: \"Prince William\") {\n    ...PersonNameContainer_getPersonByName\n    ...PersonImageContainer_getPersonByName\n  }\n  getEveryone(offset: $offset) {\n    ...ListOfPeople_list_2aiVTE\n  }\n}\n\nfragment ListOfPeople_list_2aiVTE on AllPeople {\n  people(name: $name) {\n    id\n    name\n    image\n  }\n}\n\nfragment PersonImageContainer_getPersonByName on Person {\n  image\n}\n\nfragment PersonNameContainer_getPersonByName on Person {\n  name\n}\n\nfragment VersionContainer_version on Version {\n  previous\n  current\n}\n",
>>>>>>> 64df5aea89678a2c4519c0f8d7792857c96adba4
    "metadata": {}
  }
};
})();
// prettier-ignore
<<<<<<< HEAD
(node/*: any*/).hash = 'a97b87c03867b9fbbc725e6bd4c62820';
=======
(node/*: any*/).hash = '7fdd908d506a2ad33aa22b3300a3dbd9';
>>>>>>> 64df5aea89678a2c4519c0f8d7792857c96adba4
module.exports = node;
