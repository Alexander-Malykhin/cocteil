import React from 'react';
//STYLES
import styles from './ButtonArrowReview.module.scss'
//IMAGES
import arrowImage from '@assets/arrow-review.png'

const ButtonArrowReview = () => {
    return (
        <div className={styles.button}>
            <img src={arrowImage} alt="arrow"/>
        </div>
    );
};

export default ButtonArrowReview;