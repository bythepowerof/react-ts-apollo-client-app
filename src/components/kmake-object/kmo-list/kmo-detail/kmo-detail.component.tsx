import React from 'react';
import { KmakeObject, KmakeQueryQuery } from '../../../../generated/kmakegql';
import './kmo-detail.component.css'

export interface KmoDetailProps{
  namespace: string;
}

interface Props{
  data: KmakeQueryQuery;
}

const KmoDetailComponent: React.FC<Props> = ({ data}) => {
  /* Functions */
  const genKmoView = (kmo: any) => {
    return !!kmo && (
      <div className="kmo-detail">
        <h2>{kmo.name}</h2>
        <p>Genre: {kmo.name}</p>
        <p>Author: {kmo.name}</p>
        <p>All kmo by this author</p>
        {/* <ul className="other-kmos">
          {
            !!kmo.author && !!kmo.author.books && kmo.author.books.map((kmo: KmakeObject | null) =>
              !!kmo && ( <li key={kmo.name!}>{kmo.name}</li> )
            )
          }
        </ul> */}
      </div>
    );
  };

  /* Template */
  return (
    <div id="kmo-details">
      {genKmoView(data.kmakeObjects)}
    </div>
  );
}

export default KmoDetailComponent