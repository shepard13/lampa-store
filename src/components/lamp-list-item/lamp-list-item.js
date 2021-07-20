import React from 'react';
import './lamp-list-item.css';
const LampListItem = ({ lamp, onAddedToCart }) => {
  const { title, manufacturer, price, lampImg } = lamp;
  return (
    <div class='col mb-5'>
      <div class='card h-100'>
        {/* <!-- Product image--> */}
        <img class='card-img-top' src={lampImg} alt='...' />
        {/* <!-- Product details--> */}
        <div class='card-body p-4'>
          <div class='text-center'>
            {/* <!-- Product name--> */}
            <h5 class='fw-bolder'>
              {title} - {manufacturer}
            </h5>
            {/* <!-- Product price--> */}${price}
          </div>
        </div>
        {/* <!-- Product actions--> */}
        <div class='card-footer p-4 pt-0 border-top-0 bg-transparent'>
          <div class='text-center'>
            <button onClick={onAddedToCart} className='btn btn-secondary'>
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LampListItem;
