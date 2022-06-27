import { useContext } from 'react';
import {useNavigate} from 'react-router-dom';
import { CartContext } from '../../context/card.context';
import Button from '../buttons/button.component';
import CartItem from '../cart-item/cart-item.components';
import './cart-dropdown.styles.scss';

const CartDropDown =()=>{
    const {cartItems} = useContext(CartContext);

    const navigate = useNavigate();

    const goToCheckOutHandler = ()=>{
        navigate('/checkout')
    };

    return(
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map((item) => (
                <CartItem key={item.id} cartItem= {item} /> ))}
            </div>
            <Button onClick ={goToCheckOutHandler}>Checkout</Button>

        </div>
    )
}

export default CartDropDown