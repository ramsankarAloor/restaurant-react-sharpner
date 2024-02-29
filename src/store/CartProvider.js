import { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
    const [cartItems, setCartItems]=useState([])

    const cartContext = {
        items: [...cartItems],
        totalAmount: 0,
        addItem: addItemFromCartHandler,
        removeItem: removeItemFromCartHandler,
      };

  function addItemFromCartHandler(item){
    setCartItems(()=>{
       return [...cartItems, item]
    })
  };

  function removeItemFromCartHandler(id) {};

  
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
