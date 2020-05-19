import { useQuery } from '@apollo/react-hooks';
import React from 'react';
import { BookDocument, BookQuery, BookQueryVariables } from '../../../../generated/graphql';
import BookDetailComponent, { BookDetailProps } from './book-detail.component';


const BookDetailContainerComponent = (props: BookDetailProps) => {
  const {data, error ,loading} = useQuery<BookQuery, BookQueryVariables>(BookDocument, {
    variables: {
      id: props.bookId
    }
  });
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <></>;
  }

  return <BookDetailComponent data={data}/>
};

export default BookDetailContainerComponent;
