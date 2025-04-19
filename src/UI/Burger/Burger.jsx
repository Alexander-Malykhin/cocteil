import React from 'react';
import styles from './burger.module.css'
const Burger = () => {
    return (
        <button className={styles.burger}>
            <span className={styles.burger__line}></span>
            <span className={styles.burger__line}></span>
            <span className={styles.burger__line}></span>
        </button>
    );
};

export default Burger;