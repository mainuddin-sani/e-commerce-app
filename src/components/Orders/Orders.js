import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../useProduct/useCart';
import useProduct from '../../useProduct/useProduct';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
    const [products] = useProduct();
    const [cart, setCart] = useCart(products);

    const reviewDelete = product => {
        const rest = cart.filter(pd=> pd.id !== product.id);
        setCart(rest);
        removeFromDb(product.id);
    }
    return (
        <div>
            <h1>This is a Orders {products.length}</h1>
            <p>cart has : {cart.length}</p>

            <div className="shop-container">
                <div className="products-container">
                    {
                        cart.map(product=> <ReviewItem key={product.id} product={product} reviewDelete={reviewDelete} />)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart}>
                        <Link to="/inventory">
                            <button>Proceed CheckOut</button>
                        </Link>
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default Orders;