import React from 'react';
import styles from './Product.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = ({product, addToCartHandler}) => {
    // console.log(product);
    const {img, name, price, seller, ratings} = product;

    return (
        <div className={styles.product}>
            <img src={img} alt="" />
            <div className={styles.productInfo}>
                <h3>{name}</h3>
                <p>Price: {price}</p>
                <p><small>Seller: {seller}</small></p>
                <p><small>Ratings: {ratings}</small></p>
            </div>
            <button onClick={() => addToCartHandler(product)} className={styles.addToCartButton}>
                <p>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}/>
            </button>
        </div>
    );
};

export default Product;