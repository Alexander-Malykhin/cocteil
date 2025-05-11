import React from 'react';
//STYLES
import styles from './ButtonQuestions.module.scss'

const ButtonQuestions = ({id, setActive, active}) => {

    const buttonActive = (id) => setActive(active === id ? null : id);

    return (
        <button className={styles.button} onClick={() => buttonActive(id)}>
            <span className={styles.button__line}></span>
            <span className={styles.button__line}></span>
        </button>
    );
};

export default ButtonQuestions;