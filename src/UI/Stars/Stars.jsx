import React from 'react';
//STYLES
import styles from './Stars.module.scss'
//IMAGES
import starImage from '@assets/starActive.png'

const Stars = ({star}) => {

    return (
        <div className={styles.stars}>
            {Array(star).fill().map((_, i) => (
                <img key={i} src={starImage} alt="star"/>
            ))}
        </div>
    );
};

export default Stars;