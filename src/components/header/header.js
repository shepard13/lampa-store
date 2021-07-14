import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
const Header = ({ numItems, total }) => {
  return (
    <header className='shop-header row'>
      <Link to='/'>
        <span className='logo text-dark'>LAMPA-store</span>
      </Link>
      <Link to='/cart'>
        <i className='cart-icon bi bi-cart' />
        {numItems} items (${total})
      </Link>
    </header>
  );
};

export default Header;
