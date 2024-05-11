import React from 'react';
import "./ServiceTile.scss";
import Divider from '../Divider/Divider';

export default function ServiceTile({tile}) {
  return (
    <div className='services__tile'>
        <h4 className='services__tile-title'>
            { tile.title }
        </h4>
        <Divider classes='services__tile-divider' />
        <p className='services__tile-text'>
            { tile.text }
        </p>
    </div>
  )
}

