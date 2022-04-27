import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";
import { setCartData } from "../../utilities/cart-db";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import styles from "./Shop.module.css";

const Shop = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]); //custom hooks
    const [cart, setCart] = useCart(products); //custom hooks
    const [pages, setPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const [productsPerPage, setProductsPerPage] = useState(12);

    useEffect(() => {
        fetch(`http://localhost:5000/productsCount?productsPerPage=${productsPerPage}`)
            .then((response) => response.json())
            .then((data) => setPages(data.pagesCount));
    }, [productsPerPage]);

    useEffect(() => {
        fetch(
            `http://localhost:5000/products?currentPage=${currentPage}&&productsPerPage=${productsPerPage}`
        )
            .then((response) => response.json())
            .then((data) => setProducts(data));
    }, [currentPage, productsPerPage]);

    //Add to cart event handler
    const addToCartHandler = (product) => {
        const productIndex = cart.indexOf(product);
        const newCart = [...cart];
        if (productIndex !== -1) {
            newCart[productIndex].quantity += 1;
        } else {
            product.quantity = 1;
            newCart.push(product);
        }
        setCart(newCart);
        setCartData(product._id); //storing data to local storage
    };

    return (
        <div className={styles.shopContainer}>
            <div>
                <div className={styles.productsContainer}>
                    {products.map((product) => (
                        <Product
                            key={product._id}
                            product={product}
                            addToCartHandler={addToCartHandler}
                        />
                    ))}
                </div>
                <div className={styles.pagination}>
                    {[...Array(pages).keys()].map((number) => (
                        <button className={number === currentPage ? styles.active : ''} key={number} onClick={() => setCurrentPage(number)}>
                            {number + 1}
                        </button>
                    ))}
                    <select
                        defaultValue="12"
                        onChange={(event) => setProductsPerPage(event.target.value)}
                    >
                        <option value="9">9</option>
                        <option value="12">12</option>
                        <option value="15">15</option>
                        <option value="18">18</option>
                        
                    </select>
                </div>
            </div>
            <div className={styles.orderSummeryContainer}>
                <Cart cart={cart} />
                <button onClick={() => navigate("/orders")}>check-out</button>
            </div>
        </div>
    );
};

export default Shop;
