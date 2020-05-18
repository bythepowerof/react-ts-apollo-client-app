import { useState } from 'react';
import React from 'react';
import { AuthorsQuery, Book, BooksDocument, BooksQuery, BooksQueryVariables } from '../../../generated/graphql';
import { useQuery } from '@apollo/react-hooks';
import { ReactComponent as Arrow } from '../../../assets/icons/arrow-right.svg';
import { isNil } from 'lodash';
import './book-list.component.css';
import { ApolloError } from 'apollo-client';
import { Query } from '@apollo/react-components';
import { BookDetailComponent } from './book-detail/book-detail.component';

export function BookListComponent() {
  /* Hooks */
  const [selectedBookId, setSelectedBookId] = useState('');
  const books = useQuery<BooksQuery, BooksQueryVariables>(BooksDocument);

  /* Functions */
  const genList = (
      {loading, error, data}
      : { loading: boolean, error?: ApolloError | undefined, data: any = {} }
    ) => {
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    if (!data) return <p>Not found</p>;

    return data.books.map((book: Book) => {
      return <>
        <li className="book-list__entry" key={ book.id }>
          <div className="book-list__entry-details">
            <h3>{ book.name }</h3>
            <span>-</span>
            <p>{ book.genre }</p>
          </div>
          <div className="book-list__entry-arrow">
            <Arrow/>
          </div>
        </li>
      </>;
    });
  };

  /* Template */

  return (
    <div className="book-list-wrapper">
      <ul className="book-list">
        <Query<BooksQuery, BooksQueryVariables> query={BooksDocument}>
          ({ data: {} = {}, loading, error }) => (
            <div>test</div>
          )</Query>
      </ul>
      <BookDetailComponent bookId={selectedBookId}/>
    </div>
  );
};