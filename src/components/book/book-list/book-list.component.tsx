import { useState } from 'react';
import React from 'react';
import { BooksQuery } from '../../../generated/graphql';
import { ReactComponent as Arrow } from '../../../assets/icons/arrow-right.svg';
import './book-list.component.css';
import { BookDetailComponent } from './book-detail/book-detail.component';

interface Props {
  data: BooksQuery;
}

const BookListComponent: React.FC<Props> = ({ data }) => {
  /* Hooks */
  const [selectedBookId, setSelectedBookId] = useState('');

  /* Template */

  return (
    <div className="book-list-wrapper">
      <ul className="book-list">
        {
          !!data.books && data.books.map((book) =>
            !!book && (
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
            )
          )
        }
      </ul>
      <BookDetailComponent bookId={selectedBookId}/>
    </div>
  );
};

export default BookListComponent;
