import React from "react";
import { ApolloProvider } from '@apollo/react-hooks'
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import client from "./apollo.js"
import "./App.css";

const GET_NAMES = gql`
  {
    Prince: getPersonById(id: "pw") {
      id
      name
    }
    Queen: getPersonById(id: "qeii") {
      id
      name
    }
  }
`

const App: React.FC = () => (
  <ApolloProvider client={client}>
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
    </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
    </a>
        <GetMoreInfo />
      </header>
    </div>
  </ApolloProvider>
)

const GetMoreInfo: React.FC = () => {
  const { loading, error, data } = useQuery(GET_NAMES);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  console.log(data)
  return <p>COMPLETE</p>
}

export default App;
