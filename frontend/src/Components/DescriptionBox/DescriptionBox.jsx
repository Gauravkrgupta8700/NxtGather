import React from 'react'
import './DescriptionBox.css';

const DescriptionBox = () => {
  return (
    <div  className='descriptionbox'>
        <div className='descriptionbox-navigator'>
            <div className='descriptionbox-nav-box'>
                Description
            </div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className='descriptionbox-description'>
            <p>nxtGather is an event Management Platform . Do Register Limited Seats First Come First Serve</p>
            <p></p>
        </div>
      
    </div>
  )
}

export default DescriptionBox
