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
import ListOfPeoplePagination from '../ListOfPeoplePagination.js';

function App() {
  return (
      <QueryRenderer
        environment={environment}
        query={graphql`
            query AppQuery ($offset: Int!, $name: String) {
              version {
                ...VersionContainer_version,
              }
              getPersonByName(name: "Prince William") {
                ...PersonNameContainer_getPersonByName,
                ...PersonImageContainer_getPersonByName
              }
              getEveryone(offset: $offset) {
                ...ListOfPeople_list @arguments(name: $name)
              }
            }
        `
        }
        variables={{
          offset: 0,
          name: "Prince William"
        }}
        render={({error, props}) => {
          if (error) {
            return <div>There was an error yo: {error.message}, {JSON.stringify(error)}</div>
          } else if (props) {
            return <>
              {/* <VersionContainer version={props.version}/> */}
              <ListOfPeople list={props.getEveryone}/>
              <ListOfPeoplePagination />
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
