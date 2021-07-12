import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className='header'>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/cart'>Cart</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
