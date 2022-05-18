import React from 'react';

const Cart = (props) => {
    const {cart} = props;
    let price = 0;
    cart.map(item=>console.log(item))
    return (
        <div>
            <h1>cart Items : {cart.length}</h1>
            <p>Total Price: ${cart.price}</p>
        </div>
    );
};

export default Cart;