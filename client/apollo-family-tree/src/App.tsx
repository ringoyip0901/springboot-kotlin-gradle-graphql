import React, { useState } from "react";
import { ApolloProvider } from '@apollo/react-hooks'
// import client from "./apollo.js"
import client from './apollo-envir'
import "./App.css";
import GetFamily from "./GetFamily";

const App: React.FC = (): any => {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <header className="App-header">
          <GetFamily />
        </header>
      </div>
    </ApolloProvider>
  )
}

export default App;
