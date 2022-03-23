import React from 'react';
import styles from './Product.module.css'

const Product = ({product}) => {
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
            <button className={styles.addToCartButton}>
                <p>Add to Cart</p>
            </button>
        </div>
    );
};

export default Product;