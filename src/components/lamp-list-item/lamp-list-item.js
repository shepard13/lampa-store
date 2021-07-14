import React from 'react';
import './lamp-list-item.css';
const LampListItem = ({ lamp, onAddedToCart }) => {
  const { title, manufacturer, price, lampImg } = lamp;
  return (
    <div className='lamp-list-item'>
      <img src={lampImg} width='150' height='150' class='lamp-img' alt='' />
      <div className='card-body'>
        <a href='/'>
          <h5 className='card-title'>{title}</h5>
        </a>
        <p className='card-text'>{manufacturer}</p>
        <p className='card-text'>{price}</p>
        <button onClick={onAddedToCart} className='btn btn-primary'>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default LampListItem;
