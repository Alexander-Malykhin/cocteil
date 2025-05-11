import React from 'react';
//STYLES
import styles from './Card.module.scss'
//IMAGE
import cardImage from "@assets/card.png"
//COMPONENTS
import ButtonMore from "../../UI/Card/ButtonMore/ButtonMore.jsx";
import ButtonCardBasket from "../../UI/Card/ButtonCardBasket/ButtonCardBasket.jsx";
import ButtonCardFavorite from "../../UI/Card/ButtonCardFavorite/ButtonCardFavorite.jsx";
import Stars from "../../UI/Stars/Stars.jsx";


const Card = () => {
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
                    <ButtonCardBasket/>
                    <ButtonCardFavorite/>
                </div>
            </div>

            <div className={styles.card__footer}>
                <div className={styles.card__main_column}>
                   <ButtonMore/>
                </div>

                <div className={styles.card__main_column}>
                   <Stars star={4}/>
                </div>
            </div>
        </article>
    );
};

export default Card;