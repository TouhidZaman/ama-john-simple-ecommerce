import React from "react";
import styles from "./Navbar.module.css";
import logo from "../../../images/Logo.svg";
import CustomLink from "./CustomLink/CustomLink";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";

const Navbar = () => {
   const [user] = useAuthState(auth);
   // const redirects = [
   //    { id: 1, path: "/", name: "Shop", auth: true },
   //    { id: 2, path: "/orders", name: "Orders" },
   //    { id: 3, path: "/inventory", name: "Inventory" },
   //    { id: 4, path: "/about", name: "About" },
   //    { id: 5, path: "/login", name: "Login" },
   // ];
   const signOutHandler = () => {
      signOut(auth);
   };
   return (
      <nav className={styles.navbar}>
         <div className={styles.navItemsContainer}>
            <img src={logo} alt="" />
            <div className={styles.navLinks}>
               {/* {redirects.map((redirect) => (
                  <CustomLink
                     key={redirect.id}
                     to={redirect.path}
                     activeStyle={styles.activeStyle}
                  >
                     {redirect.name}
                  </CustomLink>
               ))} */}
               <CustomLink to="/" activeStyle={styles.activeStyle}>
                  Shop
               </CustomLink>
               <CustomLink to="/orders" activeStyle={styles.activeStyle}>
                  Orders
               </CustomLink>
               <CustomLink to="/inventory" activeStyle={styles.activeStyle}>
                  Inventory
               </CustomLink>
               <CustomLink to="/about" activeStyle={styles.activeStyle}>
                  About
               </CustomLink>
               {user ? (
                  <button onClick={signOutHandler}>{user.email} (logOut)</button>
               ) : (
                  <CustomLink to="/login" activeStyle={styles.activeStyle}>
                     login
                  </CustomLink>
               )}
            </div>
         </div>
      </nav>
   );
};

export default Navbar;
