import React from 'react';
import './Navbar.css';
import navlogo from '../../assets/footer_logo.png';
import navprofile from '../../assets/nav-profile.svg';

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={navlogo} alt='' className='nav-logo' />
      <h1 >Admin Pannel</h1>
      <img src={navprofile} alt='' className='nav-profile' />
    </div>
  );
};

export default Navbar;
