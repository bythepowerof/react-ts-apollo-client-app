import React from 'react';
import { Book, BookQuery } from '../../../../generated/graphql';
import './book-detail.component.css'

export interface BookDetailProps{
  bookId: string;
}

interface Props{
  data: BookQuery;
}

const BookDetailComponent: React.FC<Props> = ({ data}) => {
  /* Functions */
  const genBookView = (book: any) => {
    return !!book && (
      <div className="book-detail">
        <h2>{book.name}</h2>
        <p>Genre: {book.genre}</p>
        <p>Author: {book.author.name}</p>
        <p>All books by this author</p>
        <ul className="other-books">
          {
            !!book.author && !!book.author.books && book.author.books.map((book: Book | null) =>
              !!book && ( <li key={book.id}>{book.name}</li> )
            )
          }
        </ul>
      </div>
    );
  };

  /* Template */
  return (
    <div id="book-details">
      {genBookView(data.book)}
    </div>
  );
}

export default BookDetailComponent