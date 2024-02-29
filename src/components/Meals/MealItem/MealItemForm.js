import { useContext, useState} from 'react'
import Input from '../../UI/Input'
import styles from './MealItemForm.module.css' 
import CartContext from '../../../store/cart-context'

const MealItemForm=props=>{
    const [amount, setAmount] = useState(1)
    const cartctx = useContext(CartContext)

    function formSubmitHandler(event){
        event.preventDefault()
        const totalPrice = amount * Number(props.item.pricePerUnit)
        const cartItem = {...props.item, amount:amount, totalPrice, id: Math.random()}
        cartctx.addItem(cartItem)
        console.log(cartItem)
        setAmount(1)
    }

    function amountChangeHandler(event){
        setAmount(event.target.value);
    }
    return (
        <form className={styles.form} onSubmit={formSubmitHandler}>
            <Input label='Amount' input={{
                id: 'amount',
                type: 'number',
                min: 1,
                max: 5,
                step:1,
                onChange : amountChangeHandler,
                value: amount
            }}/>
            <button type='submit'>+ Add</button>
        </form>
    )
}

export default MealItemForm