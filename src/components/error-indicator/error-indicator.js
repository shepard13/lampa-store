import React from 'react';
import icon from './indicator.png';
import './error-indicator.css';
const ErrorIndicator = () => {
  return (
    <div className='error-indicator'>
      <img className='error-indicator-img' src={icon} alt='error icon' />
      <h3 className='error-indicator-text'>Oops, something wrong!</h3>
    </div>
  );
};

export default ErrorIndicator;
