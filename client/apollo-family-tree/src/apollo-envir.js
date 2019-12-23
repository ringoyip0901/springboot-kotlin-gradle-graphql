import {split} from 'apollo-link';
import {HttpLink} from 'apollo-link-http';
import {WebSocketLink} from 'apollo-link-ws';
import {getMainDefinition} from 'apollo-utilities';
import ApolloClient from 'apollo-client';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {gql} from 'apollo-boost';
import {SubscriptionClient} from 'subscriptions-transport-ws';

const httpLink = new HttpLink ({
  uri: process.env.NODE_ENV === 'production'
    ? 'https://damp-temple-96211.herokuapp.com/graphql'
    : 'http://localhost:8080/graphql',
});

const subscriptionClient = new SubscriptionClient (
  process.env.NODE_ENV === 'production'
    ? 'wss://damp-temple-96211.herokuapp.com/subscriptions'
    : 'ws://localhost:8080/subscriptions',
  {
    reconnect: true,
    connectionParams: {
      authToken: 'token',
    },
  }
);

const wsLink = new WebSocketLink (subscriptionClient);

const link = split (
  // split based on operation type
  ({query}) => {
    const definition = getMainDefinition (query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink
);

const client = new ApolloClient ({
  link,
  cache: new InMemoryCache (),
});

export default client;
