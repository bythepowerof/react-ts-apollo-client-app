import { useState } from 'react';
import React from 'react';
import { KmakeObject, KmakeQueryQuery } from '../../../generated/kmakegql';
import { ReactComponent as Arrow } from '../../../assets/icons/arrow-right.svg';
import './kmo-list.component.css';
import KmakeDetailContainerComponent from './kmo-detail/kmo-detail-container.component';

interface Props {
  data: KmakeQueryQuery;
}

const KmoListComponent: React.FC<Props> = ({ data }) => {
  /* Hooks */
  const [selectedKmoId, setSelectedKmoId] = useState('');

  /* Functions */
  const genList = (data: any) => {
    return !!data.kmakeObjects && data.kmakeObjects.map((kmakeObject: KmakeObject | null) =>
      !!kmakeObject && (
        <li className="kmo-list__entry" key={ kmakeObject.name! } onClick={() => setSelectedKmoId(kmakeObject.name!)}>
          <div className="kmo-list__entry-details">
            <h3>{ kmakeObject.name }</h3>
            <span>-</span>
            <p>{ kmakeObject.name }</p>
          </div>
          <div className="kmo-list__entry-arrow">
            <Arrow/>
          </div>
        </li>
      )
    )
  }

  /* Template */

  return (
    <div className="kmo-list-wrapper">
      <ul className="kmo-list">
        { genList(data) }
      </ul>
      <KmakeDetailContainerComponent namespace={selectedKmoId}/>
    </div>
  );
};

export default KmoListComponent;
