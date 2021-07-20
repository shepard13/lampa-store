import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import { connect } from 'react-redux';

const Header = ({ cartTotal, cartItemsAmount }) => {
  let itemsInCartIndicatore = '';
  let totalInCartIndicatore = '';
  if (cartTotal > 0) {
    totalInCartIndicatore = <span>(${cartTotal})</span>;
    itemsInCartIndicatore = cartItemsAmount;
  }
  return (
    <header className='header'>
      <div className='navbar navbar-dark bg-secondary box-shadow'>
        <div className='container d-flex justify-content-between'>
          <Link to='/' style={{ textDecoration: 'none' }}>
            <span className='logo'>LAMPA-store</span>
          </Link>

          <Link to='/cart'>
            <button className='btn btn-outline-light'>
              {/* ! */}
              <span className='badge'>{itemsInCartIndicatore}</span>
              <span className='cart-icon bi bi-cart'>
                {totalInCartIndicatore}
              </span>
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

const mapStateToProps = ({
  reducers: {
    cartList: { cartTotal, cartItemsAmount },
  },
}) => {
  return { cartTotal, cartItemsAmount };
};

export default connect(mapStateToProps)(Header);
