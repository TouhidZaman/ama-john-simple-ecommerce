import React from "react";
import styles from "./Navbar.module.css";
import logo from "../../../images/Logo.svg";
import CustomLink from "./CustomLink/CustomLink";

const Navbar = () => {
   return (
      <nav className={styles.navbar}>
         <div className={styles.navItemsContainer}>
            <img src={logo} alt="" />
            <div className={styles.navLinks}>
               <CustomLink activeStyle={styles.activeStyle} to="/shop">
                  Shop
               </CustomLink>
               <CustomLink activeStyle={styles.activeStyle} to="/orders">
                  Orders
               </CustomLink>
               <CustomLink activeStyle={styles.activeStyle} to="/inventory">
                  Inventory
               </CustomLink>
               <CustomLink activeStyle={styles.activeStyle} to="/about">
                  About
               </CustomLink>
            </div>
         </div>
      </nav>
   );
};

export default Navbar;
