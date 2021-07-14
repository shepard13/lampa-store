import React from 'react';
import LampListItem from '../lamp-list-item';
import './lamp-list.css';

const LampList = ({ lamps, onAddedToCart }) => {
  return (
    <ul className='lamp-list'>
      {lamps.map((lamp) => {
        return (
          <li key={lamp.id}>
            <LampListItem
              lamp={lamp}
              onAddedToCart={() => onAddedToCart(lamp.id)}
            />
          </li>
        );
      })}
    </ul>
  );
};
export default LampList;
