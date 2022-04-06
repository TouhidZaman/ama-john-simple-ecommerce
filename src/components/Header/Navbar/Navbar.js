import React from "react";
import styles from "./Navbar.module.css";
import logo from "../../../images/Logo.svg";
import CustomLink from "./CustomLink/CustomLink";

const Navbar = () => {
   const redirects = [
      { id: 1, path: "/", name: "Shop" },
      { id: 2, path: "/orders", name: "Orders" },
      { id: 3, path: "/inventory", name: "Inventory" },
      { id: 4, path: "/about", name: "About" },
   ];
   return (
      <nav className={styles.navbar}>
         <div className={styles.navItemsContainer}>
            <img src={logo} alt="" />
            <div className={styles.navLinks}>
               {redirects.map((redirect) => (
                  <CustomLink
                     key={redirect.id}
                     to={redirect.path}
                     activeStyle={styles.activeStyle}
                  >
                     {redirect.name}
                  </CustomLink>
               ))}
            </div>
         </div>
      </nav>
   );
};

export default Navbar;
