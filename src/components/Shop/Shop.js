import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import styles from './Shop.module.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(response => response.json())
            .then(data => setProducts(data))
    },[])
    return (
        <div className={styles.shopContainer}>
            <div className={styles.productsContainer}>
                {
                    products.map(product => <Product key={product.id} product={product}/>)
                }
            </div>
            <div className={styles.orderSummeryContainer}>
                <h3>Cart Container</h3>
            </div>
        </div>
    );
};

export default Shop;