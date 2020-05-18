import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as React from 'react';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type RootQueryType = {
   __typename?: 'RootQueryType';
  book?: Maybe<Book>;
  author?: Maybe<Author>;
  books?: Maybe<Array<Maybe<Book>>>;
  authors?: Maybe<Array<Maybe<Author>>>;
};


export type RootQueryTypeBookArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type RootQueryTypeAuthorArgs = {
  id?: Maybe<Scalars['ID']>;
};

export type Book = {
   __typename?: 'Book';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  genre?: Maybe<Scalars['String']>;
  author?: Maybe<Author>;
};

export type Author = {
   __typename?: 'Author';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  age?: Maybe<Scalars['Int']>;
  books?: Maybe<Array<Maybe<Book>>>;
};

export type Mutation = {
   __typename?: 'Mutation';
  addAuthor?: Maybe<Author>;
  addBook?: Maybe<Book>;
};


export type MutationAddAuthorArgs = {
  name: Scalars['String'];
  age: Scalars['Int'];
};


export type MutationAddBookArgs = {
  name: Scalars['String'];
  genre: Scalars['String'];
  authorId: Scalars['ID'];
};

export type AddBookMutationVariables = {
  name: Scalars['String'];
  genre: Scalars['String'];
  authorId: Scalars['ID'];
};


export type AddBookMutation = (
  { __typename?: 'Mutation' }
  & { addBook?: Maybe<(
    { __typename?: 'Book' }
    & Pick<Book, 'id' | 'name'>
  )> }
);

export type BooksQueryVariables = {};


export type BooksQuery = (
  { __typename?: 'RootQueryType' }
  & { books?: Maybe<Array<Maybe<(
    { __typename?: 'Book' }
    & Pick<Book, 'id' | 'name' | 'genre'>
  )>>> }
);

export type BookQueryVariables = {
  id: Scalars['ID'];
};


export type BookQuery = (
  { __typename?: 'RootQueryType' }
  & { book?: Maybe<(
    { __typename?: 'Book' }
    & Pick<Book, 'id' | 'name' | 'genre'>
    & { author?: Maybe<(
      { __typename?: 'Author' }
      & Pick<Author, 'id' | 'name' | 'age'>
      & { books?: Maybe<Array<Maybe<(
        { __typename?: 'Book' }
        & Pick<Book, 'id' | 'name'>
      )>>> }
    )> }
  )> }
);

export type AuthorsQueryVariables = {};


export type AuthorsQuery = (
  { __typename?: 'RootQueryType' }
  & { authors?: Maybe<Array<Maybe<(
    { __typename?: 'Author' }
    & Pick<Author, 'id' | 'name'>
  )>>> }
);


export const AddBookDocument = gql`
    mutation AddBook($name: String!, $genre: String!, $authorId: ID!) {
  addBook(name: $name, genre: $genre, authorId: $authorId) {
    id
    name
  }
}
    `;
export type AddBookMutationFn = ApolloReactCommon.MutationFunction<AddBookMutation, AddBookMutationVariables>;
export type AddBookComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<AddBookMutation, AddBookMutationVariables>, 'mutation'>;

    export const AddBookComponent = (props: AddBookComponentProps) => (
      <ApolloReactComponents.Mutation<AddBookMutation, AddBookMutationVariables> mutation={AddBookDocument} {...props} />
    );
    
export type AddBookProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<AddBookMutation, AddBookMutationVariables>
    } & TChildProps;
export function withAddBook<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AddBookMutation,
  AddBookMutationVariables,
  AddBookProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, AddBookMutation, AddBookMutationVariables, AddBookProps<TChildProps, TDataName>>(AddBookDocument, {
      alias: 'addBook',
      ...operationOptions
    });
};
export type AddBookMutationResult = ApolloReactCommon.MutationResult<AddBookMutation>;
export type AddBookMutationOptions = ApolloReactCommon.BaseMutationOptions<AddBookMutation, AddBookMutationVariables>;
export const BooksDocument = gql`
    query Books {
  books {
    id
    name
    genre
  }
}
    `;
export type BooksComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<BooksQuery, BooksQueryVariables>, 'query'>;

    export const BooksComponent = (props: BooksComponentProps) => (
      <ApolloReactComponents.Query<BooksQuery, BooksQueryVariables> query={BooksDocument} {...props} />
    );
    
export type BooksProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<BooksQuery, BooksQueryVariables>
    } & TChildProps;
export function withBooks<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  BooksQuery,
  BooksQueryVariables,
  BooksProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, BooksQuery, BooksQueryVariables, BooksProps<TChildProps, TDataName>>(BooksDocument, {
      alias: 'books',
      ...operationOptions
    });
};
export type BooksQueryResult = ApolloReactCommon.QueryResult<BooksQuery, BooksQueryVariables>;
export const BookDocument = gql`
    query Book($id: ID!) {
  book(id: $id) {
    id
    name
    genre
    author {
      id
      name
      age
      books {
        id
        name
      }
    }
  }
}
    `;
export type BookComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<BookQuery, BookQueryVariables>, 'query'> & ({ variables: BookQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const BookComponent = (props: BookComponentProps) => (
      <ApolloReactComponents.Query<BookQuery, BookQueryVariables> query={BookDocument} {...props} />
    );
    
export type BookProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<BookQuery, BookQueryVariables>
    } & TChildProps;
export function withBook<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  BookQuery,
  BookQueryVariables,
  BookProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, BookQuery, BookQueryVariables, BookProps<TChildProps, TDataName>>(BookDocument, {
      alias: 'book',
      ...operationOptions
    });
};
export type BookQueryResult = ApolloReactCommon.QueryResult<BookQuery, BookQueryVariables>;
export const AuthorsDocument = gql`
    query Authors {
  authors {
    id
    name
  }
}
    `;
export type AuthorsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<AuthorsQuery, AuthorsQueryVariables>, 'query'>;

    export const AuthorsComponent = (props: AuthorsComponentProps) => (
      <ApolloReactComponents.Query<AuthorsQuery, AuthorsQueryVariables> query={AuthorsDocument} {...props} />
    );
    
export type AuthorsProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<AuthorsQuery, AuthorsQueryVariables>
    } & TChildProps;
export function withAuthors<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AuthorsQuery,
  AuthorsQueryVariables,
  AuthorsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, AuthorsQuery, AuthorsQueryVariables, AuthorsProps<TChildProps, TDataName>>(AuthorsDocument, {
      alias: 'authors',
      ...operationOptions
    });
};
export type AuthorsQueryResult = ApolloReactCommon.QueryResult<AuthorsQuery, AuthorsQueryVariables>;