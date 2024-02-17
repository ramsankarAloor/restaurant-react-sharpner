import Modal from '../UI/Modal';
import styles from './Cart.module.css'

const Cart=props=>{
    const cartArray = [{id:'c2', name:'sushi', price:22.99, amount:2}]
    const cartItems = (<ul className={styles['cart-items']}>
        {cartArray.map((item) => (<li key={item.id}>{item.name}</li>))}
    </ul>)

    return(
        <Modal onBackdropClick={props.onCloseClick} >
            {cartItems}
            <div className={styles.total}>
                <span>Total Amount</span>
                <span>36.99</span>
            </div>
            <div className={styles.actions}>
                <button className={styles['button--alt']} onClick={props.onCloseClick} >Close</button>
                <button className={styles['button']}>Order</button>
            </div>
        </Modal>
    )
}

export default Cart;