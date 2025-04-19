import React from 'react';
//STYLES
import styles from './CardSlider.module.scss'
//IMAGE
import cardImage from "@assets/card.png"
import basket from "@assets/bag.png"
import favorite from '@assets/heart.png'
import star from '@assets/starActive.png'


const CardSlider = () => {
    return (
        <article className={styles.card}>

            <div className={styles.card__header}>
                <img src={cardImage} alt="card"/>
            </div>

            <div className={styles.card__main}>
                <div className={styles.card__main_column}>
                    <div className={styles.card__main_prices}>
                        <span className={styles.card__main_price}>
                            50.00 р
                        </span>
                        <span className={styles.card__main_stock}>
                             65.00 р
                        </span>
                    </div>

                    <h2 className={styles.card__main_name}>
                        Блузка женская классная
                    </h2>
                </div>

                <div className={styles.card__main_column}>
                    <button>
                        <img src={basket} alt="basket"/>
                    </button>
                    <button>
                        <img src={favorite} alt="favorite"/>
                    </button>
                </div>
            </div>

            <div className={styles.card__footer}>
                <div className={styles.card__main_column}>
                    <button className={styles.card__button}>
                        Подробнее
                    </button>
                </div>

                <div className={styles.card__main_column}>
                    <div className={styles.stars}>
                        <img src={star} alt="star"/>
                        <img src={star} alt="star"/>
                        <img src={star} alt="star"/>
                        <img src={star} alt="star"/>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default CardSlider;