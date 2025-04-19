import React from 'react';
//STYLES
import styles from "./HeaderPanel.module.scss";
//IMAGES
import avatar from "../../assets/avatar.png";
import heart from "../../assets/heart.png";
import bag from "../../assets/bag.png";

const HeaderPanel = () => {
    return (
        <nav className={styles.panel}>
            <img src={avatar} alt="avatar" className={styles.panel__image}/>
            <img src={heart} alt="heart" className={styles.panel__image}/>
            <img src={bag} alt="bag" className={styles.panel__image}/>
        </nav>
    );
};

export default HeaderPanel;