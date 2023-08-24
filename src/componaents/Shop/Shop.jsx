import'react';
import './shop.css'
import { useEffect, useState } from 'react';
import Product from '../product/Product';

const Shop = () => {
    const [products, setProducts] = useState([]);
  
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);

    const addToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product 
                        key={product.id}
                        product={product}
                        addToCart = {addToCart}
                        ></Product>)
                }
            </div>
            <div className="cart-container">
                <h1>
                    Order Summery
                </h1>

                <h3>
                    product added: {cart.length}
                </h3>
            </div>
        </div>
    );
};

export default Shop;