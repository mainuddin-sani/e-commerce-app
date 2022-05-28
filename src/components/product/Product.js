import React from 'react';

const Product = (props) => {
    const {img, name, price,ratings,seller} = props.product
    return (
        <div className='card'>
            <div className="img">
                <img src={img} alt="" />
            </div>
            <div className="content">
                <h4>{name}</h4>
                <p>Price: ${price}</p>
                <p>Manufacturer : {seller}</p>
                <p>Rating : {ratings}</p>
                
            </div>
            <button className='btn' onClick={()=>props.addToCartHandler(props.product)}> Add to Cart</button>
            <button className='btn' onClick={()=>props.cartRemoved(props.product)}> Removed to Cart</button>
        </div>
    );
};

export default Product;