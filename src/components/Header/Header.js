import React from 'react';
import logo from '../../images/Logo.svg';
import styles from './Header.module.css';

const Header = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.navItemsContainer}>
                <img src={logo} alt=""/>
                <div>
                    <a href="/home">Home</a>
                    <a href="/orders">Orders</a>
                    <a href="/inventory">Inventory</a>
                    <a href="/about">About</a>
                </div>
            </div>
        </nav>
    );
};

export default Header;