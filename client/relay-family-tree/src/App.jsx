import React from 'react';
import {QueryRenderer} from 'react-relay';
import PersonNameContainer from './PersonNameContainer.jsx'
import PersonImageContainer from './PersonImageContainer.jsx'
import ListOfPeople from './ListOfPeople'
import VersionContainer from './VersionContainer'
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
              version {
                ...VersionContainer_version,
              }
              getPersonByName(name: "Prince William") {
                ...PersonNameContainer_getPersonByName,
                ...PersonImageContainer_getPersonByName
              }
              getEveryone(offset: 0) {
                ...ListOfPeople_list
              }
            }
        `
        }
        render={({error, props}) => {
          if (error) {
            return <div>There was an error yo: {error.message}, {JSON.stringify(error)}</div>
          } else if (props) {
            return <>
              {/* <VersionContainer version={props.version}/> */}
              <ListOfPeople list={props.getEveryone}/>
              {/* <PersonNameContainer getPersonByName={props.getPersonByName}/>
              <PersonImageContainer getPersonByName={props.getPersonByName}/> */}
              </>
        } else {
          return <div>Loading...</div>
        }}}
      />
  );
}

export default App;
