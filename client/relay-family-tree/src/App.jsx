import React from 'react';
import {QueryRenderer} from 'react-relay';
import DataContainer from './DataContainer.jsx'
import environment from './relayEnvir.js'
import logo from './logo.svg';
import './App.css';
import graphql from 'babel-plugin-relay/macro'

function App() {
  return (
      <QueryRenderer
        environment={environment}
        query={graphql`
            query AppQuery {
                ...DataContainer_people
            }
        `
        }
        variables={{
            offset: 0
        }}
        render={(stuff) => {
            console.log(stuff)
            return (
                <div className="App">
                  <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
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
                  </header>
                  <DataContainer people={null}/>
                 </div>
             )
        }}
      />
  );
}

export default App;
