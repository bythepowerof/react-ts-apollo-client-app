import { useQuery } from '@apollo/react-hooks';
import React from 'react';
import { KmakeQueryDocument, KmakeQueryQuery, KmakeQueryQueryVariables } from '../../../../generated/kmakegql';
import KmakeDetailComponent, { KmoDetailProps } from './kmo-detail.component';


const KmoDetailContainerComponent = (props: KmoDetailProps) => {
  const {data, error ,loading} = useQuery<KmakeQueryQuery, KmakeQueryQueryVariables>(KmakeQueryDocument, {
    variables: {
      namespace: props.namespace
    }
  });
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <></>;
  }

  return <KmakeDetailComponent data={data}/>
};

export default KmoDetailContainerComponent;
