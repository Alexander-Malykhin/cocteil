import React from 'react';
//STYLES
import styles from './ButtonCardBasket.module.scss'
//IMAGES
import basket from "@assets/bag.png"

const ButtonCardBasket = () => {
    return (
        <button className={styles.button}>
            <img src={basket} alt="basket"/>
        </button>
    );
};

export default ButtonCardBasket;