import React from 'react';
import styles from './Footer.module.scss';
import Logo from "../Logo/Logo.jsx";
import {Link} from "react-router";
import telegram from "@assets/Footer/tg.png"
import instagram from "@assets/Footer/inst.png"
import phone_link from "@assets/Footer/phone_link.png"
import phone from "@assets/Footer/phone.png"
import mail from "@assets/Footer/mail.png"
import clock from "@assets/Footer/clock.png"

const Footer = () => {

    const footerNavigation = [
        {
            id: 1,
            title: "Информация",
            links: [
                { id: 2, name: "Главная", link: "/" },
                { id: 3, name: "Акции", link: "/" },
                { id: 4, name: "Каталог", link: "/" },
                { id: 5, name: "Возврат", link: "/" },
                { id: 6, name: "Доставка", link: "/" },
                { id: 7, name: "Партнёрам", link: "/" },
                { id: 8, name: "Способы доставки", link: "/" },
                { id: 9, name: "Как сделать заказ?", link: "/" }
            ]
        },
        {
            id: 2,
            title: "Мой кабинет",
            links: [
                { id: 10, name: "Мои заказы", link: "/" },
                { id: 11, name: "Мои адреса", link: "/" },
                { id: 12, name: "Мои скидки", link: "/" },
                { id: 13, name: "Моя информация", link: "/" }
            ]
        }
    ];

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.footer__container}>
                    {footerNavigation.map((column) => (
                        <div key={column.id} className={styles.footer__column}>
                            {column.title && (
                                <h2 className={styles.footer__title}>{column.title}</h2>
                            )}
                            <div className={styles.footer__list}>
                                {column.links.map((link) => (
                                    <Link
                                        key={link.id}
                                        to={link.link}
                                        className={styles.footer__link}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}

                    <div className={styles.footer__column}>
                        <h2 className={styles.footer__title}>
                            Контактная информация
                        </h2>

                        <div className={styles.footer__description}>
                            <p className={styles.footer__text}>
                                ИП Вишневский Иван Сергеевич
                                государственная регистрация №690867884 от 31.07.2020.
                            </p>

                            <p className={styles.footer__text}>
                                Логойским горисполкомом
                                Защита прав потребителей +375259990755
                            </p>
                        </div>
                    </div>

                    <div className={styles.footer__column}>
                        <h2 className={styles.footer__title}>
                            Соц. сети
                        </h2>

                        <div className={styles.footer__links}>
                            <div className={styles.footer__links_list}>
                                <div className={styles.footer__links_item}>
                                    <img src={telegram} alt="telegram" className={styles.footer__links_image}/>
                                </div>
                                <div>
                                    <img src={instagram} alt="instagram" className={styles.footer__links_image}/>
                                </div>
                                <div>
                                    <img src={mail} alt="mail" className={styles.footer__links_image}/>
                                </div>
                                <div>
                                    <img src={phone} alt="phone" className={styles.footer__links_image}/>
                                </div>
                            </div>
                        </div>

                        <div className={styles.footer__contacts}>
                        <img src={phone_link} alt="phone"/>
                            <a className={styles.footer__text} href="tel:+375255990755">
                                +375255990755
                            </a>
                        </div>

                        <div className={styles.footer__contacts}>
                            <img src={clock} alt="clock"/>
                            <p className={styles.footer__text}>
                                круглосуточно, без выходных
                            </p>
                        </div>
                    </div>

                    <div className={styles.footer__column}>
                        <Logo/>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;