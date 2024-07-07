import React, { useEffect, useState } from 'react'
import './Popular.css'
// import data_event from '../assets/data'
import Program from '../Program/Program'
const Popular = () => {
const [popularEvents , setPopularEvents]= useState([]);
  useEffect(()=>{
    fetch('http://localhost:4000/popularintechfest')
    .then((response)=>response.json())
    .then((data)=>setPopularEvents(data))
}, []);
  return (
    <div className='popular'>
        <h1>POPULAR EVENT</h1>
        <hr />
        <div className="popular-event">
            {
             popularEvents.map((item,i)=>{
                    return <Program  key={i} id={item.id} name={item.name} image={item.image} new_price= {item.new_price} old_price={item.old_price} venue={item.venue} />
                })
            }
        </div>
      
    </div>
  )
}

export default Popular
