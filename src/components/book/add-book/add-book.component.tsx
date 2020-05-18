import { useMutation, useQuery } from '@apollo/react-hooks';
import { useState } from 'react';
import { Author, AuthorsDocument, AuthorsQuery, AuthorsQueryVariables } from '../../../generated/graphql';
import { ApolloError } from 'apollo-client';
import { isEmpty, isNil } from 'lodash';
import React from 'react';
import { ReactComponent as Plus } from '../../../assets/icons/plus.svg';

export function AddBookComponent() {
  /* Hooks */
  const [name, setName] = useState('');
  const [genre, setGenre] = useState('');
  const [authorId, setAuthorId] = useState('');

  const [addTodo] = useMutation(addBookMutation);
  const authors = useQuery<AuthorsQuery, AuthorsQueryVariables>(AuthorsDocument)

  /* Functions */
  const submitForm = (e: Event) => {
    e.preventDefault();
    if (!isEmpty(name) && !isEmpty(genre) && !isEmpty(authorId)) {
      addTodo(
        {
          variables: { name: name, genre: genre, authorId: authorId },
          refetchQueries: [{ query: getBooksQuery }],
        });
      setName('');
      setGenre('');
      setAuthorId('');
    }
  };

  const genList = ({loading, error, data} : {loading: any, error: any, data: any}) => {
    if (loading) return <option>Loading...</option>;
    if (error) return <option>Error :(</option>;
    if (isNil(data)) return <option>Not found</option>;

    return data.authors.map((author: Author, index: number) => {
      return <option key={!isNil(author.id) ? author.id : index} value={author?.id}>{ author?.name }</option>;
    });
  };

  /* Template */

  return (
    <form className="add-book" onSubmit={(e) => submitForm(e)}>
      <div className="add-book__field">
        <label>Book name:</label>
        <input type="text" onChange={(e) => setName(e.target.value)}/>
      </div>
      <div className="add-book__field">
        <label>Genre:</label>
        <input type="text" onChange={(e) => setGenre(e.target.value)}/>
      </div>
      <div className="add-book__field">
        <label>Author:</label>
        <select onChange={(e) => setAuthorId(e.target.value)}>
          <option>Select Author</option>
          { !isNil(authors) ? genList(authors) : console.log('fail') }
        </select>
      </div>
      <button>
        <Plus className="add-book__plus"/>
      </button>
    </form>
  );
};