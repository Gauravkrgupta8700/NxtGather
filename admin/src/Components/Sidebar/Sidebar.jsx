import React from 'react'
import './Sidebar.css';
import { Link } from 'react-router-dom';
import add_event from '../../assets/event_cart.png'
import event_list from '../../assets/event_list.svg';

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <Link to={'/addevent'} style={{textDecoration:"none"}}>
            <div className='sidebar-item'>
                <img src={add_event} className='addeventimg' alt=''/>
                <p>Add Event</p>
            </div>
        </Link>
        <Link to={'/listevent'} style={{textDecoration:"none"}}>
            <div className='sidebar-item'>
                <img src={event_list} alt=''/>
                <p>Event List</p>
            </div>
        </Link>
      
    </div>
  )
}

export default Sidebar
