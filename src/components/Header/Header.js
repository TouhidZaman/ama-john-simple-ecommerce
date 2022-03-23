import React from 'react';
import logo from '../../images/Logo.svg';
import styles from './Header.module.css';

const Header = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.navItemsContainer}>
                <img src={logo} alt="" srcset="" />
                <div>
                    <a href="">Home</a>
                    <a href="">Orders</a>
                    <a href="">Inventory</a>
                    <a href="">About</a>
                </div>
            </div>
        </nav>
    );
};

export default Header;