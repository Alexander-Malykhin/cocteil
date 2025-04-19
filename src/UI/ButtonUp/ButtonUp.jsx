import React from 'react';
//STYLES
import styles from './ButtonUp.module.scss'
//IMAGES
import imageArrow from '@assets/arrow-up.png'


const ButtonUp = () => {
    return (
        <button className={styles.button}>
            <img src={imageArrow} alt="image"/>
        </button>
    );
};

export default ButtonUp;