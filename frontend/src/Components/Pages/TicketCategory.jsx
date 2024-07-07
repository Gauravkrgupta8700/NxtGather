import React,{useContext} from 'react'
import './Css/TicketCategory.css'
import {ShopContext} from '../Context/ShopContext'
import Program from '../Program/Program'
import dropdown_icon from '../assets/cart_product_icon.png'

const TicketCategory = (props) => {
  const {all_event}= useContext(ShopContext);
  return (
    <div className='ticket-category'>
      <img  className="ticket-category-banner " src={props.banner} alt='' />
      <div className='ticketcategory-indexSort'>
        <p>
          <span>Showing 1-8</span> out of 12 events
        </p>
        <div className='ticketcategory-sort'>
        Sort by<img src={dropdown_icon} alt='' />
        </div>
      </div>

      <div className='ticketcategory-events'>
        {
          all_event.map((item, i)=>{
            if(props.category===item.category)
            {
              return <Program  key={i} id={item.id} name={item.name} image={item.image} new_price= {item.new_price} old_price={item.old_price}  venue={item.venue} />
            }
            else{
              return null;
            }
          })
        }
      </div>
      <div className='ticketcategory-loadmore'>
        Explore More
      </div>
      
    </div   >
  )
}

export default TicketCategory
