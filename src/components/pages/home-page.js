import React from 'react';
import { LampListContainer } from '../../containers';
import ShoppingCartTable from '../shopping-cart-table/shopping-cart-table';
const HomePage = () => {
  return (
    <section>
      <h1>Home</h1>
      <LampListContainer />
      <ShoppingCartTable />
    </section>
  );
};
export default HomePage;
