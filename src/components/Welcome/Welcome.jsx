import React from 'react';
import styles from './welcome.module.scss'
import ButtonCircle from "../../UI/buttonСircle/ButtonСircle.jsx";


const Welcome = () => {
    return (
        <section className={styles.welcome}>
            <div className={styles.container}>
                <div className={styles.welcome__content}>
                    <div className={styles.welcome__first}>
                        <div className={styles.welcome__banner}></div>
                        <h1 className={styles.welcome__title}>
                            Добро пожаловать в <span className={styles.welcome__accent}>Cocteil</span>
                        </h1>
                    </div>

                    <div className={styles.welcome__last}></div>

                    <p className={styles.welcome__text}>
                        Экономим Ваше время! Предлагаем лучшие цены! Доставляем в кратчайшие сроки!
                    </p>

                    <div className={styles.welcome__button}>
                        <ButtonCircle/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Welcome;