// import { BooksDocument, BooksQuery, BooksQueryVariables } from '../../../generated/graphql';
import { KmakeQueryDocument, KmakeQueryQuery, KmakeQueryQueryVariables } from '../../../generated/kmakegql';

import { useQuery } from '@apollo/react-hooks';
import KmoListComponent from './kmo-list.component';
import React from 'react';

const KmoListContainer = (props: KmakeQueryQueryVariables) => {
  const {data, error ,loading} = useQuery<KmakeQueryQuery, KmakeQueryQueryVariables>(KmakeQueryDocument, { variables: { namespace: props.namespace } });
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>ERROR</div>;
  }

  return <KmoListComponent data={data}/>
};

export default KmoListContainer;
