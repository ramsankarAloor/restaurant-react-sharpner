import { useContext, useState } from "react";
import classes from "./CartItem.module.css";
import CartContext from "../../store/cart-context";

const CartItem = (props) => {
  const cartctx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;
  const totalPrice = `$${props.price * props.amount}`;
  cartctx.totalAmount = totalPrice

  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {props.amount}</span>
          <span className={classes.price}>{cartctx.totalAmount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button
          onClick={() => {
            cartctx.removeItem(props.id);
          }}
        >
          −
        </button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
