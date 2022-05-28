import React from 'react';
import './cart.css'

const Cart = (props) => {
    const {cart} = props;
    console.log(props.children)
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    cart.map(item=>{
        quantity = quantity + item.quantity;
        total = total + item.price;
        shipping = shipping + item.shipping;
    })
    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = (tax + shipping + total);
    return (
        <div className='cart'>
            <h1>cart Items : {quantity}</h1>
            <p>Total Price: $ {total}</p>
            <p>Total Shipping Charge: $ {shipping}</p>
            <p>Tax: {tax}</p>

            <p><b>Grand Total: $ {grandTotal}</b></p>

             {
                 props.children
             }
        </div>
    );
};

export default Cart;