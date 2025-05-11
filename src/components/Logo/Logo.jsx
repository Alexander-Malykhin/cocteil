import React from 'react';
import styles from './Logo.module.scss'
import logo from '@assets/logo.svg'
import {Link} from "react-router";

const Logo = () => {
    return (
        <Link className={styles.logo} to={'/'}>
            <img src={logo} alt="logo" className={styles.logo__image} />
        </Link>
    );
};

export default Logo;