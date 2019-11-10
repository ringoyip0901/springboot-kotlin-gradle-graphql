import React, { useState } from "react";
import { ApolloProvider } from '@apollo/react-hooks'
import client from "./apollo.js"
import "./App.css";
import DataContainer from "./DataContainer";

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <header className="App-header">
          <DataContainer />
        </header>
      </div>
    </ApolloProvider>
  )
}

export default App;
