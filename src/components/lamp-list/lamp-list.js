import React, { useEffect } from 'react';
import LampListItem from '../lamp-list-item';
import './lamp-list.css';
import { setLampsList } from '../../local-storage';

const LampList = ({ lamps, onAddedToCart }) => {
  useEffect(() => {
    setLampsList(lamps);
  }, [lamps]);

  return (
    <section className='py-5'>
      <div className='container px-6 px-lg-4 mt-3'>
        <div className='row gx-3 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-3 justify-content-center'>
          {lamps.map((lamp) => {
            return (
              <LampListItem
                lamp={lamp}
                onAddedToCart={() => onAddedToCart(lamp.id)}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LampList;
