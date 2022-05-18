import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../product/Product';
import './shop.css'

const Shop = () => {
    // product use state
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    // data load 
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[]);

    // clicked event handler 

    const addToCartHandler = (product) =>{
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product =>{
                        return <Product addToCartHandler={addToCartHandler} key={product.id} product={product}></Product>
                    })
                }
                <h1>Products {products.length}</h1>
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
                
            </div>
        </div>
    );
};

export default Shop;