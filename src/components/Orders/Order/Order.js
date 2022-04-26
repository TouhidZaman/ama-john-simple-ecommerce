import React from "react";
import styles from "./Order.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const Order = ({ order, deleteCartItem }) => {
   const { _id, img, name, price, quantity, shipping } = order;
   return (
      <div className={styles.order}>
         <div className={styles.orderImg}>
            <img src={img} alt="" />
         </div>
         <div className={styles.orderDetails}>
            <div className={styles.orderInfo}>
               <h3>{name}</h3>
               <p>
                  Price: <span className={styles.price}>${price}</span>
               </p>
               <p>
                  Shipping: <span>${shipping}</span>
               </p>
               <p>Quantity: {quantity}</p>
            </div>
            <div className={styles.orderActions}>
               <button
                  className={styles.deleteCartItemButton}
                  onClick={() => deleteCartItem(_id)}
               >
                  <FontAwesomeIcon icon={faTrashAlt} />
               </button>
            </div>
         </div>
      </div>
   );
};

export default Order;
