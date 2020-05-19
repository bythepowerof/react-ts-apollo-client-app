import { useMutation, useQuery } from '@apollo/react-hooks';
import { ChangeEvent, FormEvent, useState } from 'react';
import {
  AddBookDocument,
  AddBookMutation,
  AuthorsDocument,
  AuthorsQuery, AuthorsQueryResult,
  AuthorsQueryVariables, Book, BooksDocument,
} from '../../../generated/graphql';
import { isEmpty, isNil } from 'lodash';
import React from 'react';
import { ReactComponent as Plus } from '../../../assets/icons/plus.svg';
import './add-book.component.css'

export function AddBookComponent() {
  /* Hooks */
  const [name, setName] = useState('');
  const [genre, setGenre] = useState('');
  const [authorId, setAuthorId] = useState('');

  const [addBook, {error, data}] = useMutation<{addBook: AddBookMutation, book: Book}>(AddBookDocument, {
    variables: {
      name: name,
      genre: genre,
      authorId: authorId
    },
    refetchQueries: [{ query: BooksDocument }],
  });
  const authors = useQuery<AuthorsQuery, AuthorsQueryVariables>(AuthorsDocument)

  /* Functions */
  const submitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isEmpty(name) && !isEmpty(genre) && !isEmpty(authorId)) {
      addBook();
      setName('');
      setGenre('');
      setAuthorId('');
    }
  };

  const genList = ({loading, error, data} : AuthorsQueryResult) => {
    if (loading) return <option>Loading...</option>;
    if (error) return <option>Error :(</option>;
    if (isNil(data)) return <option>Not found</option>;

    return !!data.authors && data.authors.map((author) =>
      !!author && (<option key={author.id} value={author.id}>{ author?.name }</option>)
    );
  };

  /* Template */
  return (
    <form className="add-book" onSubmit={(e: FormEvent<HTMLFormElement>) => submitForm(e)}>
      <p>
        {error ? <p>Oh no! {error.message}</p> : null}
        {data && data.addBook ? <p>Saved!</p> : null}
      </p>
      <div className="add-book__field">
        <label>Book name:</label>
        <input type="text" onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}/>
      </div>
      <div className="add-book__field">
        <label>Genre:</label>
        <input type="text" onChange={(e: ChangeEvent<HTMLInputElement>) => setGenre(e.target.value)}/>
      </div>
      <div className="add-book__field">
        <label>Author:</label>
        <select onChange={(e: ChangeEvent<HTMLSelectElement>) => setAuthorId(e.target.value)}>
          <option>Select Author</option>
          { genList(authors) }
        </select>
      </div>
      <button>
        <Plus className="add-book__plus"/>
      </button>
    </form>
  );
};
