import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import { withLampastoreService } from '../hoc';
import { connect } from 'react-redux';

const Header = ({ cartTotal, cartItemsAmount }) => {
  let itemsInCartIndicatore = '';
  if (cartTotal > 0) {
    itemsInCartIndicatore = (
      <span>
        {cartItemsAmount}-Items (${cartTotal})
      </span>
    );
  }

  return (
    <header className='shop-header row'>
      <Link to='/'>
        <span className='logo text-dark'>LAMPA-store</span>
      </Link>
      <Link to='/cart'>
        <i className='cart-icon bi bi-cart' />
        {itemsInCartIndicatore}
      </Link>
    </header>
  );
};

const mapStateToProps = ({ cartList: { cartTotal, cartItemsAmount } }) => {
  return { cartTotal, cartItemsAmount };
};

export default withLampastoreService()(connect(mapStateToProps)(Header));
