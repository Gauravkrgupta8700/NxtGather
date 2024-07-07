import React, { useEffect, useState } from 'react'
import './NewEvent.css';
// import new_event from '../assets/new_event';
import Program from '../Program/Program'

const NewEvent = () =>{

  const [new_event, setNew_event]=useState([]);
  useEffect(()=>{
    fetch('http://localhost:4000/newcollections')
    .then((response)=>response.json())
    .then((data)=>setNew_event(data));
  },[]);
  return (
    <div className='new-event'>
        <h1> New <span>Latest</span> Events</h1>
        <hr />

        <div className='event'>
        {       new_event.map((item,i)=>{
                    return <Program  key={i} id={item.id} name={item.name} image={item.image} new_price= {item.new_price} old_price={item.old_price}  venue={item.venue} />
                })
            }  
        </div>


      
    </div>
  )
}


export default NewEvent
