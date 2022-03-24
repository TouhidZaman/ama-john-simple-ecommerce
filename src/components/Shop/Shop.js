import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import styles from './Shop.module.css';

const Shop = () => {
    const [products, setProducts] = useState([]); 
    const [cart, setCart] = useState([]); 

    useEffect(() => {
        fetch('products.json')
            .then(response => response.json())
            .then(data => setProducts(data))
    },[])

    const addToCartHandler = product => {
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className={styles.shopContainer}>
            <div className={styles.productsContainer}>
                {
                    products.map(product => <Product 
                        key={product.id} 
                        product={product}
                        addToCartHandler={addToCartHandler}
                    />)
                }
            </div>
            <div className={styles.orderSummeryContainer}>
                <h3>Order Summery</h3>
                <p>Items added: {cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;