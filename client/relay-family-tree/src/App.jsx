import React, {useEffect} from 'react';
import {QueryRenderer} from 'react-relay';
import PersonNameContainer from './PersonNameContainer.jsx';
import PersonImageContainer from './PersonImageContainer.jsx';
import ListOfPeople from './ListOfPeople.jsx';
import VersionContainer from './VersionContainer';
import CreateNewMember from './CreateNewMember';
import environment from './relayEnvir.ts';
import './App.css';
import graphql from 'babel-plugin-relay/macro';
import ListOfPeoplePagination from './ListOfPeoplePagination.jsx';
import NewMemberSubscription from './SubscribeToFamily.jsx'

function App () {
  useEffect (() => {
    NewMemberSubscription ();
  }, []);
  return (
    <QueryRenderer
      environment={environment}
      query={graphql`
            query AppQuery ($offset: Int!, $count: Int, $name: String) {
              getEveryone(offset: $offset) {
              ...ListOfPeople_list @arguments(name: $name),
                ...ListOfPeoplePagination_paginatedList @arguments(count: $count)
              }
            }
        `}
      variables={{
        offset: 0,
        count: 1,
        // cursor: "1"
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
              <ListOfPeoplePagination paginatedList={props.getEveryone} />
              <CreateNewMember />
              {/*<ListOfPeople list={props.getEveryone} />*/}
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
