import React from 'react'
import './CartItems.css';
import { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import remove_icon from '../assets/breadcrum_arrow.png'

const CartItems = () => {
    const {getTotalCartAmount,all_event, cartItems, removeFromCart}= useContext(ShopContext);
    function booked(){
        alert("Registered");
    }
  return (
    <div className='cartitems'>
        <div className='cartitems-format-main'>
        <p>Events</p>
        <p>Title</p>
        <p>Price</p>
        <p>No of Seats </p>
        <p>Total</p>
        <p>Remove</p>
    </div>
    <hr />
   {
    all_event.map((e)=>{
        if(cartItems[e.id]>0)
        {

            return <div>
                    <hr />
            <div className='cartitems-format-main cartitems-format'>
                <img src={e.image} alt='' className='carticon-event-icon' />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                <p>{e.new_price *cartItems[e.id]}</p>
                <div className='removeevent'>
                <img src={remove_icon} onClick={()=>{removeFromCart(e.id)}}  alt=''/>
                </div>
            </div>
            </div>
        }
        return null;
    })
   }
   <div className='cartitems-down'>
    <div className='cartitems-total'>
        <h1>Total Tickets Purchase</h1>
        <div className='cartitems-total-item'>
            <p>
                Subtotal
            </p>
            <p>${getTotalCartAmount()}</p>
        </div>
        < hr/>
        <div className='cartitems-total-item'>
            <p>Platform Fee</p>
            <p>Free</p>
        </div>
        < hr />
        <div className='cartitems-total-item'>
            <h3>Total</h3>
            <h3>${getTotalCartAmount()}</h3>
        </div>
        {/* <button onSubmit={booked()}> Proceed to Checkout</button> */}
    </div>
   
    <div className='cartitems-promocode'>
    <p>If you have a promo code, Enter it here </p>
    <div className='cartitems-promobox' >
        <input type='text' placeholder='promo code'/>
        <button>Submit</button>
    </div>
   </div>
   </div>
   
    </div>
  )
}

export default CartItems
