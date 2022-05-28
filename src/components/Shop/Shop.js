import React, { useEffect, useState } from 'react';
import useProduct from '../../useProduct/useProduct';
import { addToDb, removedb } from '../../utilities/fackbd2';
import { getStoredCard } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../product/Product';
import {Link} from 'react-router-dom';
import './shop.css'

const Shop = () => {

    const [products] = useProduct();
    // product use state
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        const storeCart = getStoredCard();
        const saveCart = []
        for(const id in storeCart){
            console.log(id);
            
            const adddProduct = products.find(products => products.id === id)
            console.log('allow', adddProduct);
            if (adddProduct) {
                const quantity = storeCart[id];
                adddProduct.quantity = quantity;
                console.log("product", adddProduct);
                saveCart.push(adddProduct);
            }
        }
        setCart(saveCart);
    },[products])

    // clicked event handler 

    const addToCartHandler = (productSelect) =>{
        addToDb(productSelect.id);
        let newCart = [];
        const exist = cart.find(product=> product.id === productSelect.id)
        if(!exist){
            productSelect.quantity = 1;
            newCart = [...cart, productSelect]
        }else{
             const rest = cart.filter(product=> product.id !== productSelect.id);
             exist.quantity = exist.quantity + 1;
             newCart = [...rest, exist];
        }
        setCart(newCart);
        addToDb(productSelect.id);
    }
    const cartRemoved = (product)=>{
        removedb(product.id)
    }
    return (
        <div className='shop-container'>
            <div className="products-container"> 
                {
                    products.map(product =>{
                        return <Product addToCartHandler={addToCartHandler} cartRemoved={cartRemoved} key={product.id} product={product}></Product>
                    })
                }
                <h1>Products {products.length}</h1>
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to="/orders">
                        <button>Review Order</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;