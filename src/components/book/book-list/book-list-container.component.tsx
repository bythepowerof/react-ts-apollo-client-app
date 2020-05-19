import { BooksDocument, BooksQuery, BooksQueryVariables } from '../../../generated/graphql';
import { useQuery } from '@apollo/react-hooks';
import BookListComponent from './book-list.component';
import React from 'react';

const BookListContainer = () => {
  const {data, error ,loading} = useQuery<BooksQuery, BooksQueryVariables>(BooksDocument);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>ERROR</div>;
  }

  return <BookListComponent data={data}/>
};

export default BookListContainer;
