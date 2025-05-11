import React from 'react';
//STYLES
import styles from './ReviewCard.module.scss'
//COMPONENTS
import Stars from "../../UI/Stars/Stars.jsx";
//IMAGE
import cardImage from '@assets/card.png'


const ReviewCard = () => {
    return (
        <article className={styles.card}>

            <img src={cardImage} alt="card" className={styles.card__image}/>

            <div className={styles.card__information}>
                <Stars star={6}/>

                <p className={styles.card__text}>
                    Платье село отлично! Хороший материал. Буду заказывать еще, осталась очень довольна.
                </p>

                <div className={styles.card__footer}>
                    <h2 content={styles.card__name}>
                        Анна Котлова
                    </h2>

                    <span className={styles.card__date}>
                        23.05.2021
                    </span>
                </div>
            </div>
        </article>
    );
};

export default ReviewCard;