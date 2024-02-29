import { useContext } from "react";
import Modal from "../UI/Modal";
import styles from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartctx = useContext(CartContext);
  const cartItems = (
    <ul className={styles["cart-items"]}>
      {cartctx.items.map((item) => {
        console.log(item);
        return (
          <CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={Number(item.pricePerUnit)}
          />
        );
      })}
    </ul>
  );

  const totalBill = cartctx.items.reduce((acc, item) => {
    return acc + item.totalPrice;
  }, 0);

  return (
    <Modal onBackdropClick={props.onCloseClick}>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalBill.toFixed(2)}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={props.onCloseClick}>
          Close
        </button>
        <button className={styles["button"]}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
