import React from 'react';
import styles from './Cart.module.css'

const Cart = ({cart}) => {
const totalPrice = cart.reduce((previous, current)=> previous + (current.price * current.quantity), 0);
const totalShipping = cart.reduce((previous, current)=> previous + (current.shipping * current.quantity), 0);
const totalSelectedItems = cart.reduce((previous, current)=> previous + current.quantity, 0);
const tax = totalPrice * 0.1;
const grandTotal = totalPrice + totalShipping + tax;

    return (
        <div className={styles.cart}>
            <h3>Order Summery</h3>
            <p>Selected Items: {totalSelectedItems}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shipping: ${totalShipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h5>Grand Total: ${grandTotal.toFixed(2)}</h5>
        </div>
    );
};

export default Cart;