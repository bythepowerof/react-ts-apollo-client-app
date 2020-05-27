import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient } from 'apollo-client';

import { HttpLink } from 'apollo-link-http';
import { WebSocketLink } from 'apollo-link-ws';
import { split } from 'apollo-link';
import { getMainDefinition } from 'apollo-utilities';
import { InMemoryCache } from 'apollo-cache-inmemory';

import { IntrospectionFragmentMatcher } from 'apollo-cache-inmemory';
import introspectionQueryResultData from '../../generated/fragmentTypes.json';

import { ResetSchedulerComponent } from '../kmake-object/reset-scheduler/reset-scheduler.component';
import KmoListContainer from '../kmake-object/kmo-list/kmo-list-container.component';

import { TopBar } from '../menu/menu.component';
import { Box, Button, Grommet, grommet } from 'grommet';
import { normalizeColor } from 'grommet/utils';
import { rgba } from 'polished';

import './app.component.css'

const httpLink = new HttpLink({
  uri: 'http://localhost:8080/query'
})

const wsLink = new WebSocketLink({
  uri: 'ws://localhost:8080/query',
  options: {
    reconnect: true
  }
});

// using the ability to split links, you can send data to each link
// depending on what kind of operation is being sent
const link = split(
  // split based on operation type
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
);

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData
});

const cache = new InMemoryCache({ fragmentMatcher });

const client = new ApolloClient({
  cache,
  link
})

const AppComponent = () => (
  <Grommet theme={grommet}>

    <ApolloProvider client={client}>
      <div id={"topbar"} >
        <TopBar>
          <Button>Features</Button>
          <Button>Enterprise</Button>
          <Button>Support</Button>
          <Button color="primary">
            Login
            </Button>
        </TopBar>
      </div>
      <div className={'main'}>
        <KmoListContainer namespace="default" />
        <ResetSchedulerComponent />
      </div>
    </ApolloProvider>
  </Grommet>

);

export default AppComponent;
