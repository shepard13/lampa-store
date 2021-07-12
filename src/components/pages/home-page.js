import React from 'react';
import LampList from '../lamp-list';

const HomePage = () => {
  return (
    <div>
      <h1>Home</h1>
      <LampList lamps={[1, 2, 3]} />
    </div>
  );
};
export default HomePage;
