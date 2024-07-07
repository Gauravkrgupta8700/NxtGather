import React from 'react'
import './Offer.css';
import exclusive from '../assets/exclusive.png';

const Offer = () => {
  return (
    <div className='offer'>
        <div className="offer-left">
        <h1> Exlusive &  Exciting </h1>
        <h1>Events for you</h1>
        <p>Limited Seats </p>
        <button>Check now</button>
        </div>
      <div className="offer-right">
        <img src={exclusive} alt='' />
            
        </div>
      
    </div>
  )
}

export default Offer
