import React from 'react';
//STYLES
import styles from './About.module.scss'
//COMPONENTS
import AboutCard from "../AboutCard/AboutCard.jsx";
//SETTINGS
import {aboutArray} from "../AboutCard/aboutArray.js";

const About = () => {

    return (
        <section className={styles.about}>
            <div className={styles.container}>
                <div className={styles.about__content}>
                    <h1 className={styles.about__title}>
                        Почему выбирают нас?
                    </h1>

                    <div className={styles.about__circles}>
                        {aboutArray.map((item) => {
                            if (item.first) {
                                return (
                                    <div className={styles.about__circles_row} key={item.id}>
                                        {item.first.map((card) => (
                                            <AboutCard card={card} key={card.id}/>
                                            ))}
                                    </div>
                                )
                            }

                            return (
                                <div className={styles.about__circles_row} key={item.id}>
                                    {item.last.map((card) => (
                                        <AboutCard card={card} key={card.id}/>
                                        ))}
                                </div>
                            )
                        })}
                    </div>


                </div>
            </div>
        </section>
    );
};

export default About;