import React, { useEffect, useState } from 'react';
import { getCartData, setCartData } from '../../utilities/cart-db';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import styles from './Shop.module.css';

const Shop = () => {
    const [products, setProducts] = useState([]); 
    const [cart, setCart] = useState([]); 

    //Getting data from fake api
    useEffect(() => {
        fetch('products.json')
            .then(response => response.json())
            .then(data => setProducts(data))
        getCartData()
    },[])

    //Getting Cart data from local storage
    useEffect(() => {
        const storedCartData = getCartData();
        const savedCart = [];
        for(const id in storedCartData) {
            const product = products.find(product => product.id === id);
            if(product) {
                const quantity = storedCartData[id];
                product.quantity = quantity;
                savedCart.push(product);
            }
        }
        setCart(savedCart);
        
    },[products])

    //Add to cart event handler
    const addToCartHandler = product => {
        const cartIndex = cart.indexOf(product)
        const newCart = [...cart];
        if(cartIndex !== -1) {
            newCart[cartIndex].quantity += 1;
        }
        else {
            product.quantity = 1;
            newCart.push(product);
        }
        setCart(newCart);
        setCartData(product.id)
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
                <Cart cart={cart} />
            </div>
        </div>
    );
};

export default Shop;