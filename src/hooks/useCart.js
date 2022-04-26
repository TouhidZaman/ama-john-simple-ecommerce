import { useEffect, useState } from "react";
import { getCartData } from "../utilities/cart-db";

const useCart = (products) => {
    const [cart, setCart] = useState([]);

    //Getting Cart data from local storage
    useEffect(() => {
        const storedCartData = getCartData(); //getting data from local storage
        const savedCart = [];
        for (const id in storedCartData) {
            const product = products.find((product) => product._id === id);
            if (product) {
                const quantity = storedCartData[id];
                product.quantity = quantity;
                savedCart.push(product);
            }
        }
        setCart(savedCart);
    }, [products]);

    return [cart, setCart];
};

export default useCart;
