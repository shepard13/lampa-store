import React from 'react';
import LampListItem from '../lamp-list-item';
import './lamp-list.css';

const LampList = ({ lamps }) => {
  return (
    <ul className='lamp-list'>
      {lamps.map((lamp) => {
        return (
          <li key={lamp.id}>
            <LampListItem lamp={lamp} />
          </li>
        );
      })}
    </ul>
  );
};
export default LampList;
