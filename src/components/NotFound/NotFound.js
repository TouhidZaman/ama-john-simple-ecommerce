import React from 'react';
import styles from "./NotFound.module.css";

const NotFound = () => {
    return (
        <div className={styles.notFound}>
            <h3>Ops ! the page your are looking for is not found</h3>
        </div>
    );
};

export default NotFound;