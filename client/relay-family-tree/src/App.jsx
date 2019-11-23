import React from 'react';
import {QueryRenderer} from 'react-relay';
import PersonNameContainer from './PersonNameContainer.jsx';
import PersonImageContainer from './PersonImageContainer.jsx';
import ListOfPeople from './ListOfPeople';
import VersionContainer from './VersionContainer';
import environment from './relayEnvir.js';
import logo from './logo.svg';
import './App.css';
import graphql from 'babel-plugin-relay/macro';
import ListOfPeoplePagination from '../ListOfPeoplePagination.js';

function App () {
  return (
    <QueryRenderer
      environment={environment}
      query={graphql`
            query AppQuery ($offset: Int!, $name: String, $count: Int, $cursor: String) {
              version {
                ...VersionContainer_version,
              }
              getPersonByName(name: "Prince William") {
                ...PersonNameContainer_getPersonByName,
                ...PersonImageContainer_getPersonByName
              }
              getEveryone(offset: $offset) {
                ...ListOfPeople_list @arguments(name: $name)
                ...ListOfPeoplePagination_paginatedList @arguments(count: $count, cursor: $cursor)
              }
            }
        `}
      variables={{
        offset: 0,
        name: 'Prince William',
        count: 3,
        cursor: "4"
      }}
      render={({error, props}) => {
        if (error) {
          return (
            <div>
              There was an error yo: {error.message}, {JSON.stringify (error)}
            </div>
          );
        } else if (props) {
          return (
            <React.Fragment>
              {/* <VersionContainer version={props.version}/> */}
              <ListOfPeople list={props.getEveryone} />
              <ListOfPeoplePagination />
              {/* <PersonNameContainer getPersonByName={props.getPersonByName}/>
              <PersonImageContainer getPersonByName={props.getPersonByName}/> */}
            </React.Fragment>
          );
        } else {
          return <div>Loading...</div>;
        }
      }}
    />
  );
}

export default App;
