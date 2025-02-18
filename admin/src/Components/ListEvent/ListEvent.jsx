import React, { useEffect, useState } from 'react'
import './ListEvent.css'
import cross_icon from '../../assets/breadcrum_arrow.png';


const ListEvent = () => {
  const [allevents, setAllEvents]= useState([]);
  const fetchInfo=async ()=>{
    await fetch('http://localhost:4000/allevents')
    .then((res)=>res.json())  
    .then((data)=>{setAllEvents(data)})
    console.log(data);
  }
  useEffect(()=>{
    fetchInfo();
  },[]);

  const remove_event= async(id)=>{
    await fetch('http://localhost:4000/removeevent',{
      method:'POST',
      headers:{
        Accept :'application/json',
        'Content-Type':'application/json',
      },
      body:JSON.stringify({id:id})
   
    })
    await fetchInfo();
  }
  return (
    <div className='list-event'>
      <h1>All Event List</h1>
      <div className='listevent-format-main'>
        <p>Events</p>
        <p>Title</p>
        <p>Old Prices</p>
        <p>New Prices</p>
        <p>Category</p>
        <p>Remove</p>

      </div>

      <div className='listevent-allevents'>
        <hr />
      
        {
            allevents.map((event, index)=>{
              return <><div  key={index} className='listevent-format-main listevent-format'>
                <img src={event.image} alt='' className='listevent-event-icon'/>
                <p>{event.name}</p>
                <p>${event.old_price}</p>
                <p>${event.new_price}</p>
                <p>{event.category}</p>
                <img onClick={()=>{remove_event(event.id)}} src={cross_icon} alt='' className='listevent-event-icon1'/>

              </div>
              <hr />
              </>
            })
        }
      </div>

    </div>
  )
}

export default ListEvent
