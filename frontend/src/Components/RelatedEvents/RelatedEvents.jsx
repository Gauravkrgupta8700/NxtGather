import React from 'react'
import './RelatedEvents.css'
import data_event from '../assets/data'
import Program from '../Program/Program'

const RelatedEvsnts = () => {
  return (
    <div className='relatedevents'>
        <h1>Related Events</h1>
        <hr />
      <div className='relatedevents-item'>
        {
            data_event.map((item, i)=>{
                return <Program  key={i} id={item.id} name={item.name} image={item.image} new_price= {item.new_price} old_price={item.old_price}  venue={item.venue} />
             
            })
        }
      </div>
    </div>
  )
}

export default RelatedEvsnts
