import { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const cartContext = {
    items: [...cartItems],
    totalAmount: totalAmount,
    addItem: addItemFromCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  function addItemFromCartHandler(item) {
    setCartItems(() => {
      return [...cartItems, item];
    });
    setTotalAmount(() => {
      return totalAmount + item.totalPrice;
    });
  }

  function removeItemFromCartHandler(id) {
    let res = [...cartItems];
    let priceToMinus;

    res.forEach((item) => {
      if (item.id === id) {
        if (item.amount === 0) {
          return;
        }
        item.amount--;
        priceToMinus = item.pricePerUnit;
      }
    });

    setCartItems(res);
    setTotalAmount(() => totalAmount - priceToMinus);
  }

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
