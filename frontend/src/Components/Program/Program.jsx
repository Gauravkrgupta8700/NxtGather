import React from 'react'
import './Program.css';
import { Link } from 'react-router-dom';
const Program = (props) => {
  return (
    <div className="program">
       <div className='program-img'>
        <Link to={`/Event/${props.id}`}>  <img  onClick={window.scrollTo(0,0)}  src={props.image} alt='' /></Link>
        </div>
      <p>{props.name}</p>
      <p>Venue :- {props.venue}</p>
      <div className='program-prices'>
        <div className='program-prices-new'>
          ${props.new_price}
        </div>
        <div className='program-prices-old'>
          ${props.old_price}
        </div>
      </div>

      
    </div>
  )
}

export default Program

