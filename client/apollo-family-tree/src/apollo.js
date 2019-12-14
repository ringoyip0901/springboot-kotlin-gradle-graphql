import ApolloClient from 'apollo-boost';
import {gql} from 'apollo-boost';
import {WebSocketLink} from "apollo-link-ws";
import { createHttpLink } from 'apollo-link-http';

import link from './apollo-envir'

// const client = () => new ApolloClient ({
//   link: createHttpLink({
//     uri: "http://localhost:8080/graphql",
//   })
// });

const client = () => new ApolloClient(({
  uri: "http://localhost:8080/graphql"
}))

// const client = () => new ApolloClient({
//   link
// })

client()
  .query ({
    query: gql`
      {
        message
      }
    `,
  })
  .then (res => res['data'])
  .then (res => console.log("Data: ", res));

export default client;
