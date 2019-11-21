import {
  Environment,
  Network,
  RecordSource,
  Store,
} from 'relay-runtime';

function fetchQuery(
  operation,
) {
  return fetch('http://localhost:8080/graphql', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      query: operation.text,
    }),
  }).then(response => {
    return response.json();
  }).then(response => {
    console.log("response: ", response)
    return response
    // return {"data": {
    //   "version": 3,
    //   "getAllPeople": [{id: "2", name: "grrr", "wassup": "holler"}]}}
  })
}

const environment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource()),
});

export default environment;