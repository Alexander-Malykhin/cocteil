import React from 'react';
//STYLES
import styles from './CooperationCard.module.scss'

const CooperationCard = ({item}) => {
    return (
        <article className={styles.card}>
            {
                item.title ? (
                        <h2 className={styles.card__title}>
                            {item.title}
                        </h2>
                    )
                    :
                    (
                        <img src={item.image} alt="image"/>
                    )
            }

            <p className={styles.card__text}>
                {item.text}
            </p>
        </article>
    );
};

export default CooperationCard;