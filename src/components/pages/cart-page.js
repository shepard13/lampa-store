import React, { Component } from 'react';
import ShoppingCartTable from '../shopping-cart-table/shopping-cart-table';
import ContactForm from '../cart-order/cart-order';
import { connect } from 'react-redux';
import fireDb from '../../firebase-config';

const submitCartOrder = (values) => {
  fireDb.ref('order').push().set({ values });
  console.log(values);
};

const CartPage = () => {
  return (
    <section>
      <ShoppingCartTable />
      <ContactForm onSubmit={submitCartOrder} />
    </section>
  );
};

const mapStateToProps = ({
  reducers: {
    cartList: { cartTotal, cartItemsAmount, cartItems },
  },
}) => {
  return { cartTotal, cartItemsAmount, cartItems };
};

export default connect(mapStateToProps)(CartPage);
