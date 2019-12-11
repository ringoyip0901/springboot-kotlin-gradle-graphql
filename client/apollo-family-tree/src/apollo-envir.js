import { split } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';
import ApolloClient from "apollo-client";
import {InMemoryCache} from "apollo-cache-inmemory";
import {gql} from "apollo-boost";
import { SubscriptionClient } from 'subscriptions-transport-ws'

// Create an http link:
const httpLink = new HttpLink({
    uri: 'http://localhost:8080/graphql'
});

const subscriptionClient = new SubscriptionClient('ws://localhost:8080/subscriptions', { reconnect: false });

// Create a WebSocket link:
// const wsLink = new WebSocketLink(subscriptionClient)
const wsLink = new WebSocketLink({
    uri: "ws:localhost:8080/subscriptions"
})


// using the ability to split links, you can send data to each link
// depending on what kind of operation is being sent
const link = split(
    // split based on operation type
    ({ query }) => {
        const definition = getMainDefinition(query);
        return (
            definition.kind === 'OperationDefinition' &&
            definition.operation === 'subscription'
        );
    },
    wsLink,
    httpLink,
);

const client = new ApolloClient({
    link,
    cache: new InMemoryCache()
})

client
.query ({
    query: gql`
        {
            message
        }
    `,
})
.then (res => res['data'])
.then (res => res);

export default client;