import { useState } from 'react';
import React from 'react';
import { Book, BooksQuery } from '../../../generated/graphql';
import { ReactComponent as Arrow } from '../../../assets/icons/arrow-right.svg';
import './book-list.component.css';
import BookDetailContainerComponent from './book-detail/book-detail-container.component';

interface Props {
  data: BooksQuery;
}

const BookListComponent: React.FC<Props> = ({ data }) => {
  /* Hooks */
  const [selectedBookId, setSelectedBookId] = useState('');

  /* Functions */
  const genList = (data: any) => {
    return !!data.books && data.books.map((book: Book | null) =>
      !!book && (
        <li className="book-list__entry" key={ book.id } onClick={() => setSelectedBookId(book.id)}>
          <div className="book-list__entry-details">
            <h3>{ book.name }</h3>
            <span>-</span>
            <p>{ book.genre }</p>
          </div>
          <div className="book-list__entry-arrow">
            <Arrow/>
          </div>
        </li>
      )
    )
  }

  /* Template */

  return (
    <div className="book-list-wrapper">
      <ul className="book-list">
        { genList(data) }
      </ul>
      <BookDetailContainerComponent bookId={selectedBookId}/>
    </div>
  );
};

export default BookListComponent;
