import React from "react";
import { useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import { removeCartItem } from "../../utilities/cart-db";
import Cart from "../Cart/Cart";
import Order from "./Order/Order";
import styles from "./Orders.module.css";

const Orders = () => {
   const navigate = useNavigate();
   const [products] = useProducts();
   const [cart, setCart] = useCart(products);

   //Removing order (cart item)
   const deleteCartItemHandler = id => {
       const remainingCartItems = cart.filter(order => order._id !== id);
       setCart(remainingCartItems);
       removeCartItem(id);
   }
   return (
      <div className={styles.orderReviewContainer}>
         <div className={styles.orderItemsContainer}>
            {cart.map((order) => (
               <Order
                  key={order._id}
                  deleteCartItem={deleteCartItemHandler}
                  order={order}
               />
            ))}
         </div>
         <div className={styles.orderSummeryContainer}>
            <Cart cart={cart} />
            <button onClick={() => navigate('/shipment')}>Proceed to shipment</button>
         </div>
      </div>
   );
};

export default Orders;
