import React from 'react';
//STYLES
import styles from './ButtonCardFavorite.module.scss'
//IMAGES
import favorite from '@assets/heart.png'

const ButtonCardFavorite = () => {
    return (
        <button className={styles.button}>
            <img src={favorite} alt="favorite"/>
        </button>
    );
};

export default ButtonCardFavorite;