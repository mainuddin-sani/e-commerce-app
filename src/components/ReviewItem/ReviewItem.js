import React from 'react';
import './review.css';

const ReviewItem = (props) => {
    const {product, reviewDelete} = props;
    const {name,img, price,shipping, quantitiy} = props.product;
    return (
        <div>
            <div className="review-item-details-container">
                <img src={img} alt="" />
                <div className="review-item-details">
                    <p className='product-name'>{name.length > 20 ? name.slice(0, 20) + '...' : name}</p>
                    <p>Price: <span className='orange-color'>{price}</span></p>
                    <p><small>Shipping: {shipping}</small></p>
                    <p><small>quantitiy: {quantitiy}</small></p>
                </div>
                <div className="delete">
                    FontAw
                    <button onClick={()=>reviewDelete(product)}>delete</button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;