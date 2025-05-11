import React from 'react';
//STYLES
import styles from './Cooperation.module.scss';
import CooperationCard from "../CooperationCard/CooperationCard.jsx";
//SETTINGS
import {CooperationArrayFirst, CooperationArrayLast} from './CooperationArray.js'

const Cooperation = () => {


    return (
        <section className={styles.cooperation}>
            <div className={styles.container}>
                <div className={styles.cooperation__content}>
                    <h1 className={styles.cooperation__title}>
                        Сотрудничество с нами
                    </h1>

                    <div className={styles.cooperation__information}>
                        <p className={styles.cooperation__description}>
                            Наша компания постоянно растёт и расширяет рынок, поэтому мы заинтересованы в новых
                            партнёрах и рассматриваем новые проекты, которые могут быть привлекательны и интересны с
                            коммерческой точки зрения.
                        </p>


                        <div className={styles.cooperation__list}>
                            {
                                CooperationArrayFirst.map((item) => (
                                    <CooperationCard
                                        key={item.id}
                                        item={item}
                                    />
                                ))
                            }
                        </div>

                        <div className={styles.cooperation__list}>
                            {
                                CooperationArrayLast.map((item) => (
                                    <CooperationCard
                                        key={item.id}
                                        item={item}
                                    />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cooperation;