import React, { useContext } from 'react'
import './EventDisplay.css'
import star_icon from '../assets/star_icon.png'
import stardull_icon from '../assets/star_dull_icon.png'
import { ShopContext } from '../Context/ShopContext'


const EventDisplay = (props) => {
    const {Event}=props;
    const {addtoCart}= useContext(ShopContext);
  return (
    <div className='eventdisplay'>

        <div className='eventdisplay-left '>
        <div className='eventdisplay-img-list'>
            <img  className="eventdisplay-img-list1" src={Event.image}  alt=''/>
            <img className="eventdisplay-img-list2" src={Event.image}  alt=''/>
            <img className="eventdisplay-img-list3" src={Event.image}  alt=''/>
            <img className="eventdisplay-img-list4" src={Event.image}  alt=''/>
            
        </div>
        <div className='eventdisplay-img'>
        <img className="eventdisplay-main-img" src={Event.image}  alt=''/>
        </div>
        </div>

        <div className='eventdisplay-right'>
            <h1>{Event.name}</h1>
            <div className='eventdisplay-right-star'>
                <img src={star_icon} alt='' />
                <img src={star_icon} alt='' />
                <img src={star_icon} alt='' />
                <img src={star_icon} alt='' />
                <img src={stardull_icon} alt='' />
                <p>(500)</p>
            </div>
            <div className='eventdisplay-right-prices'>
                <p>Ticket Prices :-</p>
                <div className='eventdisplay-right-price-old'>${Event.old_price}</div>
                <div className='eventdisplay-right-price-new'>${Event.new_price}</div>
            </div>
            <div className='eventdisplay-right-description'>
                nxtGather is an Event Management Platform 
            </div>
            <div className='eventdisplay-right-seat'>
                <h1>Choose your seat</h1>
                <div className='eventdisplay-right-seat'>
                    <div>Prime</div>
                    <div>Classic Normal</div>
                    <div> Normal</div>
                    
                </div>
            </div>
            <button onClick={()=>{addtoCart(Event.id)}} className='buyticket'>Buy Tickets</button>
            <p className='eventdisplay-right-category'><span>Category : Seminar, Workshop , Tech Fest, Cultural Fest</span></p>
            <p className='eventdisplay-right-category'><span>Featured Event : Latest Event , Oldest Event</span></p>
            
        </div>
      
    </div>
    
  )
}

export default EventDisplay
