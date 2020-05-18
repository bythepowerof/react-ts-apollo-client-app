import React from 'react';
import './app.component.css';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { BookListComponent } from '../book/book-list/book-list.component';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
});

const AppComponent = () => (
  <ApolloProvider client={client}>
    <div>
      <BookListComponent/>
    </div>
  </ApolloProvider>
);

export default AppComponent;
