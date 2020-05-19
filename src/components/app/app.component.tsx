import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import BookListContainer from '../book/book-list/book-list-container.component';
import { AddBookComponent } from '../book/add-book/add-book.component';
import './app.component.css'

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
});

const AppComponent = () => (
  <ApolloProvider client={client}>
    <div className={'main'}>
      <BookListContainer/>
      <AddBookComponent />
    </div>
  </ApolloProvider>
);

export default AppComponent;
