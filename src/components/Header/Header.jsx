import React from 'react';
//STYLES
import styles from './header.module.css'
//COMPONENTS
import Burger from "../../UI/Burger/Burger.jsx";
import Search from "../../UI/Search/Search.jsx";
import HeaderPanel from "../HeaderPanel/HeaderPanel.jsx";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.header__container}>
                    <Burger/>
                    <Search/>
                    <HeaderPanel/>
                </div>
            </div>
        </header>
    );
};

export default Header;