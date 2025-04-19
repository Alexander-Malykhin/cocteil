import React from 'react';
//STYLES
import styles from './ButtonChat.module.scss'
//IMAGE
import imageChat from "@assets/chat.png"

const ButtonChat = () => {
    return (
        <button className={styles.button}>
            <img src={imageChat} alt="image"/>
        </button>
    );
};

export default ButtonChat;