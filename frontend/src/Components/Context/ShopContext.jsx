import React, { createContext ,useEffect,useState} from "react";
// import all_event from "../assets/all_event";

export const ShopContext = createContext(null);
const getDefaultCart=()=>{
    let cart={};
    for(let index=0;index<300+1;index++){
        cart[index]=0;
    }
    return cart;
}
const ShopContextProvider = (props) => {
    
    const [cartItems,setCartItems]= useState(getDefaultCart());
    const [all_event, setAll_Event]= useState([]);

    useEffect(()=>{
        fetch('http://localhost:4000/allevents')
        .then((response)=>response.json())
        .then((data)=>setAll_Event(data))
    },[]);
    const addtoCart=(EventId)=>{
        setCartItems((prev)=>({...prev,[EventId]:prev[EventId]+1}));
       
    }
    const removeFromCart=(EventId)=>{
        setCartItems((prev)=>({...prev,[EventId]:prev[EventId]-1}))
       
    }
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = all_event.find((event) => event.id === Number(item));
                totalAmount += itemInfo.new_price * cartItems[item];
            }
        }
        return totalAmount;
    }

    const getTotalCartItems=()=>{
        let totalItem=0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                totalItem+=cartItems[item];
            }
        }
        return totalItem;
    }
    
    const contextValue = { getTotalCartItems,getTotalCartAmount,all_event,cartItems, addtoCart,removeFromCart };

  

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
