import React, { useEffect } from 'react';
import LampListItem from '../lamp-list-item';
import './lamp-list.css';
import { setLampsList } from '../../local-storage';
const LampList = ({ lamps, onAddedToCart }) => {
  useEffect(() => {
    setLampsList(lamps);
  }, [lamps]);
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
