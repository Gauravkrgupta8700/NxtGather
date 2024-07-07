import React, { useState } from 'react';
import './Navbar.css';
import logo from '../assets/footer_logo.png';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import ticket from '../assets/ticket_purchase.png'; // Import the image directly as the default export
import { ShopContext } from '../Context/ShopContext';

function Navbar() {
    const [menu, setMenu]= useState("Buy Tickets");
    const { getTotalCartItems } = useContext(ShopContext);
    
    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img src={logo} alt=""/>
                <p>nxtGather</p>
            </div>
            <ul className='nav-menu'>
                <li  onClick={()=>{setMenu("Buy Tickets")}}>
                    <Link style={{textDecoration:'none', color:'white'}} to='/'>Buy Tickets</Link>
                    {menu==="Buy Tickets" ? <hr /> : <></>}
                </li>
                <li onClick={()=>{setMenu("Cultural Fest")}}>
                    <Link style={{textDecoration:'none', color:'white'}} to='/Cultural_Fest'>Cultural Fest</Link>
                    {menu==="Cultural_Fest" ? <hr /> : <></>}
                </li>
                <li onClick={()=>{setMenu("Tech Fest")}}>
                    <Link style={{textDecoration:'none' ,color:'white'}} to='/Tech_Fest'>Tech Fest</Link>
                    {menu==="Tech_Fest" ? <hr /> : <></>}
                </li>
                <li onClick={()=>{setMenu( "Workshop")}}>
                    <Link style={{textDecoration:'none', color:'white'}} to='/Workshop'> Workshop</Link>
                    {menu==="Workshop" ? <hr /> : <></>}
                </li>
            </ul>
            <div className='nav-login-cart'>
                {localStorage.getItem('auth-token')?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/');}}>Logout</button>: <Link to='/login'><button>Login</button></Link>}
               
                <Link to="/cart">
                    <img className="shop" src={ticket} alt=''/> {/* Use the imported image directly */}
                </Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>
    );
}

export default Navbar;
