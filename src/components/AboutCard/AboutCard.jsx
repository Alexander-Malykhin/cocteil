import React from 'react';
//STYLES
import styles from './AboutCard.module.scss'

const AboutCard = ({card}) => {

    return (
        <article
            key={card.id}
            className={`${styles.item} ${card.class}`}>
            {card.text}
        </article>
    );
};

export default AboutCard;