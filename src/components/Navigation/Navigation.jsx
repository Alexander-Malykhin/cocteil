import React from 'react';
import styles from './Navigation.module.scss'
import {Link} from "react-router";
import logo from '@assets/logo.svg'

const Navigation = () => {

    const navigationArray = [
        {
            id: 1,
            link: "/",
            name: "Женщинам"
        },
        {
            id: 2,
            link: "/",
            name: "Мужчинам"
        },
        {
            id: 3,
            link: "/",
            name: "Детям"
        },
        {
            id: 4,
            link: "/",
            name: "Обувь"
        },
        {
            id: 5,
            link: "/",
            name: "Игрушки"
        },
        {
            id: 6,
            link: "/",
            name: "Аксессуары"
        },
        {
            id: 7,
            link: "/",
            name: "Большие размеры"
        },
        {
            id: 8,
            link: "/",
            name: "Дополнительно"
        },
        {
            id: 9,
            link: "/",
            name: "Акции"
        },
    ]

    return (
        <div className={styles.navigation}>
            <div className={styles.navigation__logo}>
                <img
                    src={logo}
                    alt='logo'
                    className={styles.navigation__logo_image}
                />
            </div>

            <nav className={styles.navigation__list}>
                {
                    navigationArray.map(item => (
                        <Link
                            to={item.link}
                            key={item.id}
                            className={styles.navigation__item}
                        >
                            {item.name}
                        </Link>
                    ))
                }
            </nav>
        </div>
    );
};

export default Navigation;