import 'react';
import './Products.css'
const Product = (props) => {
    const {name, img, category, price, ratings, seller} = props.product;
    const addToCart = props.addToCart;

    return (
        <div className='products-container'>
            <img src={img} alt="" />
            <div className='products-item'>
                <div>
                <h2>{name}</h2>
                <h5>Category: {category}</h5>
                <h4>Price: {price}</h4>
                </div>
                <div>
                <h6>Manufacturer: {seller}</h6>
                <h6>Ratting: {ratings}</h6>
                </div>
            </div>
            <button onClick={() => addToCart(props.product)}>Add to cart</button>
        </div>
    );
};

export default Product;