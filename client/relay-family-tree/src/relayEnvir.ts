import {
  Environment,
  Network,
  RecordSource,
  Store,
} from 'relay-runtime';
import { execute } from "apollo-link"
import { SubscriptionClient } from 'subscriptions-transport-ws'
import { WebSocketLink } from 'apollo-link-ws'

function fetchQuery(
  operation: any,
  variables: any
) {
  return fetch('http://localhost:8080/graphql', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      query: operation.text,
      variables
    }),
  }).then(response => {
    return response.json();
  }).then(response => {
    console.log(response)
    return response
  })
}


const subscriptionClient = new SubscriptionClient('ws://localhost:8080/subscriptions', { reconnect: false });

const subscriptionLink = new WebSocketLink(subscriptionClient)

const networkSubscriptions: any = (operation: any, variables: any) => {
  console.log("nextwork sub");
  return execute(subscriptionLink, {
    query: operation.text,
    variables
  })
}

const environment = new Environment({
  network: Network.create(fetchQuery, networkSubscriptions),
  store: new Store(new RecordSource()),
});

export default environment;