import React from 'react'
import './Breadcrums.css'
import arrow_icon from '../assets/breadcrum.png';

const Breadcrums = (props) => {
  const {Event}= props;
  return (
    <div className='breadcrum'>
      
      Home <img src={arrow_icon} alt='' /> Buy Tickets  <img src={arrow_icon} alt='' /> {Event.category}  <img src={arrow_icon} alt='' /> {Event.name} <img src={arrow_icon} alt='' />
    </div>
  )
}

export default Breadcrums
