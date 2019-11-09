import ApolloClient from 'apollo-boost';
import {gql} from 'apollo-boost';

const client = new ApolloClient ({
  uri: 'http://localhost:8080/graphql',
});

client
  .query ({
    query: gql`
      {
        version
        message
        getPersonById(id: "qeii") {
          name
        }
      }
    `,
  })
  .then (res => res['data'])
  .then (res => res);

export default client;
