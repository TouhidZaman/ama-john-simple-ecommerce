import { useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { setCartData } from '../../utilities/cart-db';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import styles from './Shop.module.css';

const Shop = () => {
    const navigate = useNavigate();
    const [products] = useProducts(); //custom hooks
    const [cart, setCart] = useCart(products); //custom hooks

    //Add to cart event handler
    const addToCartHandler = product => {
        const productIndex = cart.indexOf(product)
        const newCart = [...cart];
        if(productIndex !== -1) {
            newCart[productIndex].quantity += 1;
        }
        else {
            product.quantity = 1;
            newCart.push(product);
        }
        setCart(newCart);
        setCartData(product.id) //storing data to local storage
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
                <button onClick={() => navigate('/orders')}>check-out</button>
            </div>
        </div>
    );
};

export default Shop;